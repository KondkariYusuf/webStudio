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
  DialogClose,
  DialogTrigger,
} from "@webstudio-is/design-system";
import { TrashIcon, PlusIcon } from "@webstudio-is/icons";

type UserItem = {
  id: string;
  email: string | null;
  username: string | null;
  image: string | null;
  role: string;
  createdAt: string;
};

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

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
  onRoleChange,
  onDelete,
}: {
  user: UserItem;
  currentUserId: string;
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
        ) : (
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
        )}
      </Flex>
    </Flex>
  );
};

const CreateUserForm = ({
  onCreated,
}: {
  onCreated: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("viewer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("action", "createUser");
      formData.set("email", email);
      formData.set("password", password);
      formData.set("role", role);

      const res = await fetch("/rest/admin/users", {
        method: "POST",
        body: formData,
      });

      const contentType = res.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        setError(`Server error (${res.status}): Non-JSON response`);
        return;
      }

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setEmail("");
        setPassword("");
        setRole("viewer");
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
        options={roleOptions.map((r) => r.value)}
        getLabel={(value) =>
          roleOptions.find((r) => r.value === value)?.label ?? value
        }
        value={role}
        onChange={setRole}
      />
      {error && <Text color="destructive">{error}</Text>}
      <Button
        onClick={handleSubmit}
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/rest/admin/users");
      const contentType = res.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        setError(`Server error (${res.status}): ${res.statusText}`);
        return;
      }
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setUsers(data.users ?? []);
      }
    } catch (e) {
      setError(`Failed to load users: ${e instanceof Error ? e.message : "Unknown"}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleRoleChange = async (userId: string, role: string) => {
    const formData = new FormData();
    formData.set("action", "updateRole");
    formData.set("userId", userId);
    formData.set("role", role);

    try {
      const res = await fetch("/rest/admin/users", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
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

    const formData = new FormData();
    formData.set("action", "deleteUser");
    formData.set("userId", userId);

    try {
      const res = await fetch("/rest/admin/users", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
      } else {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
      }
    } catch {
      alert("Failed to delete user");
    }
  };

  return (
    <Flex direction="column" css={{ height: "100%", overflow: "hidden" }}>
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
          <DialogContent css={{ maxWidth: 400 }}>
            <DialogTitle>Add User</DialogTitle>
            <CreateUserForm
              onCreated={() => {
                setShowCreateDialog(false);
                fetchUsers();
              }}
            />
            <DialogClose />
          </DialogContent>
        </Dialog>
      </Flex>

      {/* User List */}
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
        <ScrollArea css={{ flex: 1 }}>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              currentUserId={currentUserId}
              onRoleChange={handleRoleChange}
              onDelete={handleDelete}
            />
          ))}
        </ScrollArea>
      )}
    </Flex>
  );
};
