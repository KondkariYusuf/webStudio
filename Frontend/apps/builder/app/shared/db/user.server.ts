import type { Database } from "@webstudio-is/postgrest/index.server";
import {
  AuthorizationError,
  type AppContext,
} from "@webstudio-is/trpc-interface/index.server";
import type { GitHubProfile } from "remix-auth-github";
import type { GoogleProfile } from "remix-auth-google";
import { z } from "zod";
import { hashPassword, verifyPassword } from "~/services/password.server";

const emailPasswordSchema = z.object({
  email: z.string().email().max(320),
  password: z.string().min(8).max(128),
});

export type User = Omit<
  Database["public"]["Tables"]["User"]["Row"],
  "projectsTags"
> & {
  projectsTags: Array<ProjectTag>;
};

const formatUser = (user: Database["public"]["Tables"]["User"]["Row"]) => {
  return {
    ...user,
    projectsTags: (user.projectsTags || []) as User["projectsTags"],
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

export const registerWithEmailPassword = async (
  context: AppContext,
  credentials: { email: string; password: string }
): Promise<AuthUser> => {
  const parsed = emailPasswordSchema.safeParse(credentials);
  if (parsed.success === false) {
    throw new Error("Invalid email or password");
  }

  const email = normalizeEmail(parsed.data.email);
  const passwordHash = hashPassword(parsed.data.password);

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

  const id = crypto.randomUUID();

  const newUser = await context.postgrest.client.from("User").insert({
    id,
    email,
    username: email,
    image: "",
    provider: "password",
    passwordHash,
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
