import type { Database } from "@webstudio-is/postgrest/index.server";
import {
  AuthorizationError,
  type AppContext,
} from "@webstudio-is/trpc-interface/index.server";
import type { GitHubProfile } from "remix-auth-github";
import type { GoogleProfile } from "remix-auth-google";
import { z } from "zod";
import { hashPassword, verifyPassword } from "~/services/password.server";
import {
  phoneNumberErrorMessage,
  phoneNumberRegex,
} from "~/shared/validation/phone";

const emailPasswordSchema = z.object({
  email: z.string().email().max(320),
  password: z.string().min(8).max(128),
});

const userProfileSchema = z.object({
  fullName: z.string().trim().min(1).max(100),
  companyName: z.string().trim().min(1).max(150),
  phone: z
    .string()
    .trim()
    .regex(phoneNumberRegex, phoneNumberErrorMessage),
});

export type User = Omit<
  Database["public"]["Tables"]["User"]["Row"],
  "projectsTags"
> & {
  projectsTags: Array<ProjectTag>;
  role: string;
};

const formatUser = (user: Database["public"]["Tables"]["User"]["Row"]) => {
  return {
    ...user,
    projectsTags: (user.projectsTags || []) as User["projectsTags"],
    role: user.role ?? "viewer",
  };
};

type AuthUser = Pick<User, "id">;

export const getUserById = async (context: AppContext, id: User["id"]) => {
  const dbUser = await context.postgrest.client
    .from("User")
    .select()
    .eq("id", id)
    .single();

  if (dbUser.error) {
    console.error(dbUser.error);
    throw new Error("User not found");
  }

  return formatUser(dbUser.data);
};

const genericCreateAccount = async (
  context: AppContext,
  userData: {
    email: string;
    username: string;
    image: string;
    provider: string;
  }
): Promise<AuthUser> => {
  const dbUser = await context.postgrest.client
    .from("User")
    .select("id")
    .eq("email", userData.email)
    .limit(1);

  if (dbUser.error) {
    console.error(dbUser.error);
    throw new Error("User not found");
  }

  const existingUser = dbUser.data?.[0];
  if (existingUser) {
    return { id: existingUser.id };
  }

  const id = crypto.randomUUID();

  const newUser = await context.postgrest.client
    .from("User")
    .insert({
      id,
      ...userData,
      approved: true,
      role: "admin",
    });

  if (newUser.error) {
    if (newUser.error.code === "23505") {
      const existingAfterConflict = await context.postgrest.client
        .from("User")
        .select("id")
        .eq("email", userData.email)
        .limit(1);

      if (existingAfterConflict.error) {
        console.error(existingAfterConflict.error);
        throw new Error("Failed to create user");
      }

      const existingUser = existingAfterConflict.data?.[0];
      if (existingUser) {
        return { id: existingUser.id };
      }
    }

    console.error(newUser.error);
    throw new Error("Failed to create user");
  }

  return { id };
};

export const createOrLoginWithOAuth = async (
  context: AppContext,
  profile: GoogleProfile | GitHubProfile
): Promise<AuthUser> => {
  const userData = {
    email: (profile.emails ?? [])[0]?.value,
    username: profile.displayName,
    image: (profile.photos ?? [])[0]?.value,
    provider: profile.provider,
  };
  const newUser = await genericCreateAccount(context, userData);
  return newUser;
};

export const createOrLoginWithDev = async (
  context: AppContext,
  email: string
): Promise<AuthUser> => {
  const userData = {
    email,
    username: "admin",
    image: "",
    provider: "dev",
  };

  const newUser = await genericCreateAccount(context, userData);
  return newUser;
};

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const findExistingSubAdminByCompany = async (
  context: AppContext,
  companyName: string
) => {
  const normalizedCompany = normalizeCompanyName(companyName);

  const result = await context.postgrest.client
    .from("User")
    .select("id,email,companyName,role")
    .eq("role", "admin");

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to validate company admin");
  }

  return (
    result.data.find(
      (user) =>
        normalizeCompanyName(user.companyName) === normalizedCompany &&
        normalizeEmail(user.email ?? "") !== SUPER_ADMIN_EMAIL
    ) ?? null
  );
};

const ensureCompanyHasNoSubAdmin = async (
  context: AppContext,
  companyName: string
) => {
  const existingSubAdmin = await findExistingSubAdminByCompany(
    context,
    companyName
  );

  if (existingSubAdmin) {
    throw new Error("Sub admin for this company already exists");
  }
};

export const registerWithEmailPassword = async (
  context: AppContext,
  credentials: {
    email: string;
    password: string;
    fullName: string;
    companyName: string;
    phone: string;
  }
): Promise<AuthUser> => {
  const authParsed = emailPasswordSchema.safeParse(credentials);
  const profileParsed = userProfileSchema.safeParse(credentials);
  if (authParsed.success === false || profileParsed.success === false) {
    throw new Error("Invalid registration details");
  }

  const email = normalizeEmail(authParsed.data.email);
  const passwordHash = hashPassword(authParsed.data.password);

  const existingUser = await context.postgrest.client
    .from("User")
    .select("id,passwordHash")
    .eq("email", email)
    .maybeSingle();

  if (existingUser.error) {
    console.error(existingUser.error);
    throw new Error("Failed to register user");
  }

  if (existingUser.data?.id) {
    throw new Error("Email is already registered");
  }

  await ensureCompanyHasNoSubAdmin(context, profileParsed.data.companyName);

  const id = crypto.randomUUID();

  const newUser = await context.postgrest.client.from("User").insert({
    id,
    email,
    username: profileParsed.data.fullName,
    fullName: profileParsed.data.fullName,
    companyName: profileParsed.data.companyName,
    phone: profileParsed.data.phone,
    image: "",
    provider: "password",
    passwordHash,
    approved: true,
    role: "admin",
  });

  if (newUser.error) {
    if (newUser.error.code === "23505") {
      throw new Error("Email is already registered");
    }
    console.error(newUser.error);
    throw new Error("Failed to register user");
  }

  return { id };
};

export const loginWithEmailPassword = async (
  context: AppContext,
  credentials: { email: string; password: string }
): Promise<AuthUser> => {
  const parsed = emailPasswordSchema.safeParse(credentials);
  if (parsed.success === false) {
    throw new Error("Invalid email or password");
  }

  const email = normalizeEmail(parsed.data.email);

  const user = await context.postgrest.client
    .from("User")
    .select("id,passwordHash")
    .eq("email", email)
    .maybeSingle();

  if (user.error) {
    console.error(user.error);
    throw new Error("Failed to login");
  }

  if (user.data?.id == null || user.data.passwordHash == null) {
    throw new Error("Invalid email or password");
  }

  const isValidPassword = verifyPassword({
    password: parsed.data.password,
    passwordHash: user.data.passwordHash,
  });

  if (isValidPassword === false) {
    throw new Error("Invalid email or password");
  }

  return { id: user.data.id };
};

export const userProjectTagSchema = z.object({
  id: z.string(),
  label: z.string().min(1).max(100),
});

export type ProjectTag = z.infer<typeof userProjectTagSchema>;

export const updateUserProjectsTags = async (
  { tags }: { tags: ProjectTag[] },
  context: AppContext
) => {
  if (context.authorization.type !== "user") {
    throw new AuthorizationError(
      "Only logged in users can update project tags"
    );
  }
  const result = await context.postgrest.client
    .from("User")
    .update({ projectsTags: tags })
    .eq("id", context.authorization.userId)
    .select()
    .single();

  if (result.error) {
    throw result.error;
  }
  return result.data.projectsTags as ProjectTag[];
};

// ===================== RBAC FUNCTIONS =====================

export type UserRole = "admin" | "editor" | "viewer";

export const SUPER_ADMIN_EMAIL = "admin@gmail.com";

export const isSuperAdminUser = (user: {
  email?: string | null;
  role?: string | null;
}) => normalizeEmail(user.email ?? "") === SUPER_ADMIN_EMAIL;

export const isSubAdminUser = (user: {
  email?: string | null;
  role?: string | null;
}) => user.role === "admin" && isSuperAdminUser(user) === false;

const normalizeCompanyName = (companyName: string | null | undefined) =>
  companyName?.trim().toLowerCase() ?? "";

export const isSameCompanyUser = (
  left: { companyName?: string | null },
  right: { companyName?: string | null }
) =>
  normalizeCompanyName(left.companyName) !== "" &&
  normalizeCompanyName(left.companyName) === normalizeCompanyName(right.companyName);

export const canSubAdminManageUser = ({
  actor,
  target,
}: {
  actor: Pick<User, "id" | "role" | "email" | "companyName">;
  target: Pick<User, "id" | "role" | "email" | "companyName">;
}) => {
  if (actor.id === target.id) {
    return false;
  }

  if (isSuperAdminUser(actor)) {
    return true;
  }

  if (isSubAdminUser(actor) === false) {
    return false;
  }

  return target.role !== "admin" && isSameCompanyUser(actor, target);
};

export class AdminUserManagementError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "AdminUserManagementError";
    this.status = status;
  }
}

export const getAllUsers = async (context: AppContext) => {
  const result = await context.postgrest.client
    .from("User")
    .select("id,email,username,fullName,companyName,phone,image,role,approved,createdAt")
    .order("createdAt", { ascending: true });

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to fetch users");
  }

  return result.data;
};

export const getUsersVisibleToAdmin = async (
  context: AppContext,
  adminUser: Pick<User, "id" | "role" | "email" | "companyName">
) => {
  const users = await getAllUsers(context);

  if (isSuperAdminUser(adminUser)) {
    return users;
  }

  return users.filter(
    (user) => user.role !== "admin" && isSameCompanyUser(adminUser, user)
  );
};

export const updateUserRole = async (
  context: AppContext,
  { userId, role }: { userId: string; role: UserRole }
) => {
  const result = await context.postgrest.client
    .from("User")
    .update({ role })
    .eq("id", userId);

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to update user role");
  }

  return { success: true };
};

export const deleteUserById = async (
  context: AppContext,
  userId: string
) => {
  const result = await context.postgrest.client
    .from("User")
    .delete()
    .eq("id", userId);

  if (result.error) {
    console.error(result.error);
    throw new Error("Failed to delete user");
  }

  return { success: true };
};

export const createUserByAdmin = async (
  context: AppContext,
  {
    email,
    role,
    password,
    fullName,
    companyName,
    phone,
  }: {
    email: string;
    role: UserRole;
    password: string;
    fullName: string;
    companyName: string;
    phone: string;
  }
) => {
  const parsed = emailPasswordSchema.safeParse({
    email,
    password,
  });
  const profileParsed = userProfileSchema.safeParse({
    fullName,
    companyName,
    phone,
  });

  if (parsed.success === false || profileParsed.success === false) {
    throw new AdminUserManagementError("Invalid user details", 400);
  }

  const normalizedEmail = normalizeEmail(parsed.data.email);
  const id = crypto.randomUUID();
  const passwordHash = hashPassword(parsed.data.password);

  const existingUser = await context.postgrest.client
    .from("User")
    .select("id")
    .eq("email", normalizedEmail)
    .maybeSingle();

  if (existingUser.error) {
    console.error(existingUser.error);
    throw new Error("Failed to create user");
  }

  if (existingUser.data?.id) {
    throw new AdminUserManagementError("User with this email already exists", 409);
  }

  if (role === "admin") {
    const existingSubAdmin = await findExistingSubAdminByCompany(
      context,
      profileParsed.data.companyName
    );

    if (existingSubAdmin) {
      throw new AdminUserManagementError(
        "Sub admin for this company already exists",
        409
      );
    }
  }

  const result = await context.postgrest.client.from("User").insert({
    id,
    email: normalizedEmail,
    username: profileParsed.data.fullName,
    fullName: profileParsed.data.fullName,
    companyName: profileParsed.data.companyName,
    phone: profileParsed.data.phone,
    image: "",
    provider: "password",
    passwordHash,
    approved: true,
    role,
  });

  if (result.error) {
    if (result.error.code === "23505") {
      throw new AdminUserManagementError("User with this email already exists", 409);
    }
    console.error(result.error);
    throw new Error("Failed to create user");
  }

  return { id, email: normalizedEmail, role };
};
