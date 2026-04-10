import { useState, useEffect, useCallback } from "react";
import {
  Button,
  Flex,
  Text,
  theme,
  InputField,
  Select,
  ScrollArea,
  IconButton,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "@webstudio-is/design-system";
import { TrashIcon, PlusIcon } from "@webstudio-is/icons";
import {
  phoneNumberErrorMessage,
  phoneNumberPattern,
  phoneNumberRegex,
} from "~/shared/validation/phone";

type UserItem = {
  id: string;
  email: string | null;
  username: string | null;
  fullName?: string | null;
  companyName?: string | null;
  phone?: string | null;
  image: string | null;
  role: string;
  approved?: boolean;
  createdAt: string;
};

type CurrentAdmin = {
  id: string;
  email: string | null;
  role: string;
  isSuperAdmin: boolean;
  companyName?: string | null;
};

type ProjectItem = {
  id: string;
  title: string;
  userId: string | null;
  createdAt: string;
};

type ProjectAccessItem = {
  id: string;
  userId: string;
  projectId: string;
  accessLevel: "view" | "edit" | "admin";
  grantedBy: string;
  createdAt: string;
};

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

const getResponseError = async (response: Response) => {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const data = await response.json();
    if (response.ok && data?.success !== false && typeof data?.error !== "string") {
      return { data, error: null as string | null };
    }

    return {
      data: null,
      error:
        typeof data?.error === "string"
          ? data.error
          : `Request failed (${response.status})`,
    };
  }

  const text = await response.text();
  const fallbackMessage =
    text.trim() || `${response.status} ${response.statusText}`.trim();

  return {
    data: null,
    error: `Server error (${response.status}): ${fallbackMessage}`,
  };
};

const postAdminUsers = async (payload: Record<string, string>) => {
  return fetch("/rest/admin/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const postProjectAccess = async (payload: Record<string, string>) => {
  return fetch("/rest/admin/project-access", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const RoleBadge = ({ role }: { role: string }) => {
  const bgColor =
    role === "admin"
      ? "#2b00cc"
      : role === "editor"
        ? "#4411dd"
        : "#8B8FA3";
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundColor: bgColor,
        color: "#fff",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {role}
    </Flex>
  );
};

const UserRow = ({
  user,
  currentUserId,
  canManage,
  onRoleChange,
  onDelete,
}: {
  user: UserItem;
  currentUserId: string;
  canManage: boolean;
  onRoleChange: (userId: string, role: string) => void;
  onDelete: (userId: string) => void;
}) => {
  const isSelf = user.id === currentUserId;

  return (
    <Flex
      align="center"
      css={{
        padding: `${theme.spacing[4]} ${theme.spacing[5]}`,
        borderBottom: `1px solid ${theme.colors.borderMain}`,
        gap: theme.spacing[4],
        "&:hover": {
          backgroundColor: theme.colors.backgroundHover,
        },
      }}
    >
      <Flex
        align="center"
        justify="center"
        css={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: "#2b00cc",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {(user.email ?? "U")[0].toUpperCase()}
      </Flex>

      <Flex direction="column" css={{ flex: 1, minWidth: 0 }}>
        <Text truncate css={{ fontWeight: 500 }}>
          {user.email ?? "No email"}
        </Text>
        <Text
          variant="small"
          css={{ color: theme.colors.foregroundSubtle }}
        >
          Joined {new Date(user.createdAt).toLocaleDateString()}
        </Text>
      </Flex>

      <Flex align="center" gap="2">
        {isSelf ? (
          <Flex align="center" gap="2">
            <RoleBadge role={user.role} />
            <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
              (You)
            </Text>
          </Flex>
        ) : canManage ? (
          <>
            <Select
              options={roleOptions.map((r) => r.value)}
              getLabel={(value) =>
                roleOptions.find((r) => r.value === value)?.label ?? value
              }
              value={user.role}
              onChange={(value) => {
                onRoleChange(user.id, value);
              }}
              css={{ width: 100 }}
            />
            <Tooltip content="Delete user">
              <IconButton
                onClick={() => onDelete(user.id)}
                css={{
                  color: theme.colors.foregroundDestructive,
                  "&:hover": {
                    backgroundColor: theme.colors.backgroundDestructiveNotification,
                  },
                }}
              >
                <TrashIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Flex align="center" gap="2">
            <RoleBadge role={user.role} />
            <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
              Super admin only
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

const CreateUserForm = ({
  onCreated,
  existingEmails,
  canCreateAdmin,
  enforcedCompanyName,
}: {
  onCreated: () => void;
  existingEmails: string[];
  canCreateAdmin: boolean;
  enforcedCompanyName?: string | null;
}) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState(enforcedCompanyName ?? "");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(canCreateAdmin ? "admin" : "viewer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedCompanyName = (enforcedCompanyName ?? companyName).trim();
    if (normalizedEmail.length === 0) {
      setError("Email is required");
      return;
    }

    if (fullName.trim().length === 0) {
      setError("Name is required");
      return;
    }

    if (normalizedCompanyName.length === 0) {
      setError("Company name is required");
      return;
    }

    if (phoneNumberRegex.test(phone.trim()) === false) {
      setError(phoneNumberErrorMessage);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (existingEmails.includes(normalizedEmail)) {
      setError("User with this email already exists");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await postAdminUsers({
        action: "createUser",
        email: normalizedEmail,
        fullName: fullName.trim(),
        companyName: normalizedCompanyName,
        phone: phone.trim(),
        password,
        role,
      });
      const { error } = await getResponseError(res);

      if (error) {
        setError(error);
      } else {
        setEmail("");
        setFullName("");
        setCompanyName(enforcedCompanyName ?? "");
        setPhone("");
        setPassword("");
        setRole(canCreateAdmin ? "admin" : "viewer");
        onCreated();
      }
    } catch (err) {
      setError(
        `Failed to create user: ${err instanceof Error ? err.message : "Unknown error"}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex direction="column" gap="3" css={{ padding: theme.spacing[5] }}>
      <Text variant="titles">Create New User</Text>
      <InputField
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputField
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        disabled={enforcedCompanyName !== undefined && enforcedCompanyName !== null}
      />
      <InputField
        placeholder="Phone Number"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern={phoneNumberPattern}
      />
      <InputField
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        placeholder="Password (min 8 chars)"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Select
        options={roleOptions
          .filter((r) => canCreateAdmin || r.value !== "admin")
          .map((r) => r.value)}
        getLabel={(value) =>
          roleOptions.find((r) => r.value === value)?.label ?? value
        }
        value={role}
        onChange={setRole}
      />
      {error && <Text color="destructive">{error}</Text>}
      <Button
        onClick={handleSubmit}
        type="button"
        color="primary"
        state={isSubmitting ? "pending" : undefined}
      >
        Create User
      </Button>
    </Flex>
  );
};

export const AdminPanel = ({ currentUserId }: { currentUserId: string }) => {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [currentAdmin, setCurrentAdmin] = useState<CurrentAdmin | null>(null);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [projectAccess, setProjectAccess] = useState<ProjectAccessItem[]>([]);
  const [isAccessLoading, setIsAccessLoading] = useState(false);
  const [accessError, setAccessError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/rest/admin/users", {
        headers: {
          Accept: "application/json",
        },
      });
      const { data, error } = await getResponseError(res);

      if (error) {
        setUsers([]);
        setProjects([]);
        setCurrentAdmin(null);
        setError(error);
      } else {
        setUsers(data.users ?? []);
        setCurrentAdmin(data.currentUser ?? null);
        const nextProjects = data.projects ?? [];
        setProjects(nextProjects);
        setSelectedProjectId((currentProjectId) =>
          currentProjectId && nextProjects.some((project: ProjectItem) => project.id === currentProjectId)
            ? currentProjectId
            : nextProjects[0]?.id ?? ""
        );
      }
    } catch (e) {
      setUsers([]);
      setProjects([]);
      setCurrentAdmin(null);
      setError(`Failed to load users: ${e instanceof Error ? e.message : "Unknown"}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const fetchProjectAccess = useCallback(async (projectId: string) => {
    if (projectId.length === 0) {
      setProjectAccess([]);
      setAccessError(null);
      return;
    }

    setIsAccessLoading(true);
    setAccessError(null);

    try {
      const res = await fetch(
        `/rest/admin/project-access?projectId=${encodeURIComponent(projectId)}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const { data, error } = await getResponseError(res);

      if (error) {
        setProjectAccess([]);
        setAccessError(error);
      } else {
        setProjectAccess(data.accessList ?? []);
      }
    } catch (err) {
      setProjectAccess([]);
      setAccessError(
        `Failed to load project access: ${err instanceof Error ? err.message : "Unknown"}`
      );
    } finally {
      setIsAccessLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchProjectAccess(selectedProjectId);
  }, [fetchProjectAccess, selectedProjectId]);

  const handleRoleChange = async (userId: string, role: string) => {
    try {
      const res = await postAdminUsers({
        action: "updateRole",
        userId,
        role,
      });
      const { error } = await getResponseError(res);
      if (error) {
        alert(error);
      } else {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, role } : u))
        );
      }
    } catch {
      alert("Failed to update role");
    }
  };

  const handleDelete = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await postAdminUsers({
        action: "deleteUser",
        userId,
      });
      const { error } = await getResponseError(res);
      if (error) {
        alert(error);
      } else {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        await fetchProjectAccess(selectedProjectId);
      }
    } catch {
      alert("Failed to delete user");
    }
  };

  const handleProjectAccessChange = async (
    userId: string,
    accessLevel: "none" | "view" | "edit" | "admin"
  ) => {
    if (selectedProjectId.length === 0) {
      return;
    }

    try {
      const res =
        accessLevel === "none"
          ? await postProjectAccess({
              action: "revoke",
              userId,
              projectId: selectedProjectId,
            })
          : await postProjectAccess({
              action: "grant",
              userId,
              projectId: selectedProjectId,
              accessLevel,
            });

      const { error } = await getResponseError(res);

      if (error) {
        alert(error);
        return;
      }

      await fetchProjectAccess(selectedProjectId);
    } catch {
      alert("Failed to update project access");
    }
  };

  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  const accessByUserId = new Map(
    projectAccess.map((entry) => [entry.userId, entry.accessLevel])
  );
  const isSuperAdmin = currentAdmin?.isSuperAdmin ?? false;

  return (
    <Flex direction="column" gap="6">
      {/* Header */}
      <Flex
        align="center"
        justify="between"
        css={{
          padding: `${theme.spacing[5]} ${theme.spacing[7]}`,
          borderBottom: `1px solid ${theme.colors.borderMain}`,
        }}
      >
        <Flex direction="column" gap="1">
          <Text variant="titles" css={{ fontSize: "16px" }}>
            User Management
          </Text>
          <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
            {users.length} user{users.length !== 1 ? "s" : ""} registered
          </Text>
        </Flex>

        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button color="primary" prefix={<PlusIcon />}>
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent css={{ maxWidth: 400 }} aria-describedby="admin-create-user-description">
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription id="admin-create-user-description">
              Create a new dashboard user with an email, password, and role.
            </DialogDescription>
            <CreateUserForm
              canCreateAdmin={isSuperAdmin}
              enforcedCompanyName={isSuperAdmin ? null : currentAdmin?.companyName}
              existingEmails={users
                .map((user) => user.email?.trim().toLowerCase())
                .filter((email): email is string => email !== undefined && email.length > 0)}
              onCreated={() => {
                setShowCreateDialog(false);
                fetchUsers();
              }}
            />
            <DialogClose />
          </DialogContent>
        </Dialog>
      </Flex>

      <Flex direction="column" css={{ border: `1px solid ${theme.colors.borderMain}`, borderRadius: 12, overflow: "hidden" }}>
        {isLoading ? (
          <Flex align="center" justify="center" css={{ padding: theme.spacing[10] }}>
            <Text css={{ color: theme.colors.foregroundSubtle }}>
              Loading users...
            </Text>
          </Flex>
        ) : error ? (
          <Flex align="center" justify="center" css={{ padding: theme.spacing[10] }}>
            <Text color="destructive">{error}</Text>
          </Flex>
        ) : (
          <ScrollArea css={{ maxHeight: 420 }}>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                currentUserId={currentUserId}
                canManage={isSuperAdmin || user.role !== "admin"}
                onRoleChange={handleRoleChange}
                onDelete={handleDelete}
              />
            ))}
          </ScrollArea>
        )}
      </Flex>

      <Flex
        direction="column"
        css={{
          border: `1px solid ${theme.colors.borderMain}`,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <Flex
          align="center"
          justify="between"
          css={{
            padding: `${theme.spacing[5]} ${theme.spacing[7]}`,
            borderBottom: `1px solid ${theme.colors.borderMain}`,
          }}
        >
          <Flex direction="column" gap="1">
            <Text variant="titles" css={{ fontSize: "16px" }}>
              Project Access
            </Text>
            <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
              Grant `view`, `edit`, or `admin` access per project.
            </Text>
          </Flex>
          {projects.length > 0 ? (
            <Select
              options={projects.map((project) => project.id)}
              getLabel={(value) =>
                projects.find((project) => project.id === value)?.title ?? value
              }
              value={selectedProjectId}
              onChange={setSelectedProjectId}
              css={{ width: 280 }}
            />
          ) : (
            <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
              No projects found
            </Text>
          )}
        </Flex>

        {selectedProject && (
          <Flex
            align="center"
            justify="between"
            css={{
              padding: `${theme.spacing[4]} ${theme.spacing[7]}`,
              borderBottom: `1px solid ${theme.colors.borderMain}`,
              backgroundColor: theme.colors.backgroundPanel,
            }}
          >
            <Text css={{ fontWeight: 600 }}>{selectedProject.title}</Text>
            <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
              {projectAccess.length} shared user{projectAccess.length !== 1 ? "s" : ""}
            </Text>
          </Flex>
        )}

        {projects.length === 0 ? (
          <Flex align="center" justify="center" css={{ padding: theme.spacing[10] }}>
            <Text css={{ color: theme.colors.foregroundSubtle }}>
              Create a project first, then assign access here.
            </Text>
          </Flex>
        ) : isLoading ? null : accessError ? (
          <Flex align="center" justify="center" css={{ padding: theme.spacing[10] }}>
            <Text color="destructive">{accessError}</Text>
          </Flex>
        ) : isAccessLoading ? (
          <Flex align="center" justify="center" css={{ padding: theme.spacing[10] }}>
            <Text css={{ color: theme.colors.foregroundSubtle }}>
              Loading project access...
            </Text>
          </Flex>
        ) : (
          <ScrollArea css={{ maxHeight: 420 }}>
            {users.map((user) => {
              const isOwner = selectedProject?.userId === user.id;
              const accessLevel = accessByUserId.get(user.id) ?? "none";
              const canManageProjectAccess = isSuperAdmin || user.role !== "admin";

              return (
                <Flex
                  key={`${selectedProjectId}-${user.id}`}
                  align="center"
                  css={{
                    padding: `${theme.spacing[4]} ${theme.spacing[5]}`,
                    borderBottom: `1px solid ${theme.colors.borderMain}`,
                    gap: theme.spacing[4],
                    "&:hover": {
                      backgroundColor: theme.colors.backgroundHover,
                    },
                  }}
                >
                  <Flex
                    align="center"
                    justify="center"
                    css={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "#2b00cc",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {(user.email ?? "U")[0].toUpperCase()}
                  </Flex>

                  <Flex direction="column" css={{ flex: 1, minWidth: 0 }}>
                    <Text truncate css={{ fontWeight: 500 }}>
                      {user.email ?? "No email"}
                    </Text>
                    <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
                      {isOwner
                        ? "Project owner"
                        : accessLevel === "none"
                          ? "No direct access assigned"
                          : `Current access: ${accessLevel}`}
                    </Text>
                  </Flex>

                  {isOwner ? (
                    <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
                      Owner
                    </Text>
                  ) : canManageProjectAccess === false ? (
                    <Text variant="small" css={{ color: theme.colors.foregroundSubtle }}>
                      Super admin only
                    </Text>
                  ) : (
                    <Select
                      options={["none", "view", "edit", "admin"]}
                      getLabel={(value) =>
                        value === "none"
                          ? "No access"
                          : value === "view"
                            ? "View"
                            : value === "edit"
                              ? "Edit"
                              : "Admin"
                      }
                      value={accessLevel}
                      onChange={(value) =>
                        handleProjectAccessChange(
                          user.id,
                          value as "none" | "view" | "edit" | "admin"
                        )
                      }
                      css={{ width: 120 }}
                    />
                  )}
                </Flex>
              );
            })}
          </ScrollArea>
        )}
      </Flex>
    </Flex>
  );
};
