import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Button,
  Flex,
  globalCss,
  InputField,
  rawTheme,
  Text,
  toast,
  theme,
} from "@webstudio-is/design-system";
import { WebstudioIcon } from "@webstudio-is/icons";
import { Link, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { authPath, loginPath, registerPath } from "~/shared/router-utils";
import { phoneNumberPattern } from "~/shared/validation/phone";

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

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  globalStyles();
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        height: "100vh",
        background: theme.colors.brandBackgroundDashboard,
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
            backgroundColor: `rgba(255, 255, 255, 0.5)`,
          },
        }}
      >
        <WebstudioIcon size={48} />
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
                    name="fullName"
                    required
                    placeholder="Full Name"
                  />
                  <InputField
                    name="companyName"
                    required
                    placeholder="Company Name"
                  />
                  <InputField
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    pattern={phoneNumberPattern}
                  />
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
                    color="primary"
                    css={{ height: theme.spacing[15] }}
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
                    color="primary"
                    css={{ height: theme.spacing[15] }}
                  >
                    Log in with Email
                  </Button>
                </Flex>
              </form>
            )}

            <Text align="center">
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
