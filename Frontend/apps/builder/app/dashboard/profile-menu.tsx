import { forwardRef } from "react";
import type { ComponentProps } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  theme,
  Button,
  DropdownMenuSeparator,
  Text,
  Flex,
} from "@webstudio-is/design-system";
import { useNavigate } from "@remix-run/react";
import { logoutPath, userPlanSubscriptionPath } from "~/shared/router-utils";
import type { User } from "~/shared/db/user.server";
import type { UserPlanFeatures } from "~/shared/db/user-plan-features.server";

// Standard icon to bypass library import issues
const ChevronDownIcon = ({ size = 12, ...props }: { size?: number } & ComponentProps<"svg">) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const getAvatarLetter = (title?: string) => {
  return (title || "X").charAt(0).toLocaleUpperCase();
};

const defaultUserName = "James Bond";

const ProfileButton = forwardRef<
  HTMLButtonElement,
  {
    name: string;
    image?: string;
    hasPurchases?: boolean;
    email?: string;
  }
>(({ image, name, email, hasPurchases, ...rest }, forwardedRef) => {
  // Extracting name prefix if it matches email for cleaner UX
  const displayName = name === email ? (email ?? "").split("@")[0] : name;

  return (
    <Button
      color="ghost"
      aria-label="Profile Menu"
      {...rest}
      ref={forwardedRef}
      css={{
        height: "52px",
        width: "100%",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        borderRadius: "14px",
        justifyContent: "flex-start",
        background: "transparent",
        border: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          background: "#F1F5F9",
          transform: "translateY(-1px)",
        },
        "&[data-state=open]": {
          background: "#F1F5F9",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }
      }}
    >
      {/* Hand-crafted Prestige Avatar to bypass design-system export issues */}
      <Flex
        align="center"
        justify="center"
        css={{
          width: 36,
          height: 36,
          borderRadius: "12px",
          border: "2px solid #E2E8F0",
          boxShadow: "0 4px 12px rgba(43, 0, 204, 0.15)",
          background: image ? `url(${image}) center/cover` : "linear-gradient(135deg, #2b00cc 0%, #4411dd 100%)",
          color: "#FFFFFF",
          fontWeight: "700",
          fontSize: "14px",
          flexShrink: 0,
        }}
      >
        {!image && getAvatarLetter(displayName)}
      </Flex>
      
      <Flex direction="column" align="start" grow css={{ overflow: "hidden" }}>
        <Text
          css={{
            fontSize: "13.5px",
            fontWeight: "600",
            color: "#0F172A",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            textAlign: "left",
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
          }}
        >
          {displayName}
        </Text>
        <Text
          css={{
            fontSize: "11px",
            color: "#64748B",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            textAlign: "left",
            lineHeight: "1.2",
            opacity: 0.8,
          }}
        >
          {email}
        </Text>
      </Flex>
      <ChevronDownIcon size={12} style={{ color: "#64748B", marginLeft: "auto" }} />
    </Button>
  );
});

export const ProfileMenu = ({
  user,
  userPlanFeatures,
}: {
  user: User;
  userPlanFeatures: UserPlanFeatures;
}) => {
  const navigate = useNavigate();
  const nameOrEmail = user.username ?? user.email ?? defaultUserName;
  const purchases = userPlanFeatures.purchases;
  const hasPaidPlan = purchases.length > 0;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ProfileButton
          image={user.image || undefined}
          name={nameOrEmail}
          hasPurchases={hasPaidPlan}
          email={user.email}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" width="regular" sideOffset={12}>
        <DropdownMenuLabel>
          <Flex direction="column" css={{ padding: "4px 8px" }}>
            <Text weight="bold" css={{ display: "block", marginBottom: "2px" }}>
               {user.username ?? (user.email ? user.email.split("@")[0] : defaultUserName)}
            </Text>
            <Text variant="small" css={{ color: "#64748B", fontSize: "11px" }}>{user.email}</Text>
          </Flex>
        </DropdownMenuLabel>
        
        {purchases.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Purchases</DropdownMenuLabel>
            {purchases.map((purchase, index) =>
              purchase.subscriptionId ? (
                <DropdownMenuItem
                  key={purchase.subscriptionId}
                  onSelect={() =>
                    navigate(userPlanSubscriptionPath(purchase.subscriptionId))
                  }
                >
                  {purchase.planName}
                </DropdownMenuItem>
              ) : (
                <DropdownMenuLabel key={index}>
                  {purchase.planName}
                </DropdownMenuLabel>
              )
            )}
          </>
        )}

        {hasPaidPlan === false && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                window.open("https://webstudio.is/pricing");
              }}
              css={{ gap: theme.spacing[3] }}
            >
              <Text>Upgrade up to Pro</Text>
            </DropdownMenuItem>
          </>
        )}
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => navigate(logoutPath())} css={{ color: "#DC2626", gap: theme.spacing[3] }}>
          <Text>Sign Out</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
