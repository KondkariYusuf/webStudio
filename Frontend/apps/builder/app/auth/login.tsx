import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Button,
  Flex,
  globalCss,
  InputField,
  rawTheme,
  Text,
  theme,
} from "@webstudio-is/design-system";
import { WebstudioIcon } from "@webstudio-is/icons";
import { Link, useSearchParams } from "@remix-run/react";
import { authPath, loginPath, registerPath } from "~/shared/router-utils";

const globalStyles = globalCss({
  body: {
    margin: 0,
    overflow: "hidden",
  },
});

export type LoginProps = {
  mode?: "login" | "register";
  errorMessage?: string;
  isGithubEnabled?: boolean;
  isGoogleEnabled?: boolean;
  isSecretLoginEnabled?: boolean;
};

export const Login = ({
  mode = "login",
  errorMessage,
}: LoginProps) => {
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo") ?? undefined;

  globalStyles();
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        height: "100vh",
        background: theme.colors.backgroundWorkspace,
      }}
    >
      <Flex
        direction="column"
        align="center"
        gap="6"
        css={{
          width: theme.spacing[35],
          minWidth: theme.spacing[20],
          padding: theme.spacing[17],
          borderRadius: theme.spacing[5],
          [`@media (min-width: ${rawTheme.spacing[35]})`]: {
            backgroundColor: theme.colors.backgroundPanel,
            boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05)`,
          },
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            background: theme.colors.backgroundTopbar,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.colors.backgroundPanel,
            fontWeight: "bold",
            fontSize: "24px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          W
        </div>
        <Text variant="brandSectionTitle" as="h1" align="center">
          {mode === "register" ? "Create your account" : "Welcome to Webstudio"}
        </Text>

        <TooltipProvider>
          <Flex direction="column" gap="3" css={{ width: "100%" }}>
            {mode === "register" ? (
              <form
                method="post"
                action={authPath({ provider: "password-register" })}
              >
                <Flex direction="column" gap="2">
                  <InputField
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                  />
                  <InputField
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    maxLength={128}
                    placeholder="Create Password"
                  />
                  <Button
                    type="submit"
                    css={{ 
                      height: theme.spacing[15],
                      backgroundColor: theme.colors.backgroundTopbar,
                      color: theme.colors.backgroundPanel,
                      border: "none",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: theme.colors.backgroundTopbarHover,
                      }
                    }}
                  >
                    Create Account
                  </Button>
                </Flex>
              </form>
            ) : (
              <form
                method="post"
                action={authPath({ provider: "password-login" })}
              >
                <Flex direction="column" gap="2">
                  <InputField
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                  />
                  <InputField
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    minLength={8}
                    maxLength={128}
                    placeholder="Password"
                  />
                  <Button
                    type="submit"
                    css={{ 
                      height: theme.spacing[15],
                      backgroundColor: theme.colors.backgroundTopbar,
                      color: theme.colors.backgroundPanel,
                      border: "none",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: theme.colors.backgroundTopbarHover,
                      }
                    }}
                  >
                    Log in with Email
                  </Button>
                </Flex>
              </form>
            )}

            <Text align="center" css={{ 
              "& a": { 
                color: theme.colors.backgroundTopbar, 
                textDecoration: "none",
                borderBottom: `1px solid ${theme.colors.backgroundTopbar}`,
                fontWeight: 500, 
                transition: "all 0.2s ease",
                "&:hover": { color: "#000000", borderBottomColor: "#000000" } 
              } 
            }}>
              {mode === "register" ? (
                <Link to={loginPath({ returnTo })}>Already have an account? Log in</Link>
              ) : (
                <Link to={registerPath({ returnTo })}>New here? Create an account</Link>
              )}
            </Text>
          </Flex>
        </TooltipProvider>
        {errorMessage ? (
          <Text align="center" color="destructive">
            {errorMessage}
          </Text>
        ) : null}
      </Flex>
    </Flex>
  );
};
