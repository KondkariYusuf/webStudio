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
import { Link, useSearchParams } from "@remix-run/react";
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
  const monochrome = {
    pageBg: "#ffffff",
    cardBg: "#ffffff",
    cardBorder: "#000000",
    primary: "#000000",
    primaryHover: "#111111",
    onPrimary: "#ffffff",
    link: "#000000",
  };

  globalStyles();
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        height: "100vh",
        background: monochrome.pageBg,
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
            backgroundColor: monochrome.cardBg,
            border: `1px solid ${monochrome.cardBorder}`,
            boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05)`,
          },
        }}
      >
        <Flex
          align="center"
          justify="center"
          css={{
            width: 48,
            height: 48,
            background: monochrome.primary,
            borderRadius: "12px",
            color: monochrome.onPrimary,
            fontWeight: "bold",
            fontSize: "24px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          W
        </Flex>
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
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Full Name"
                  />
                  <InputField
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    required
                    maxLength={150}
                    placeholder="Company Name"
                  />
                  <InputField
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    pattern={phoneNumberPattern}
                    placeholder="Phone (+1234567890)"
                    title="Phone number must be a valid international number"
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
                    css={{
                      height: theme.spacing[15],
                      backgroundColor: monochrome.primary,
                      color: monochrome.onPrimary,
                      border: "none",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: monochrome.primaryHover,
                      },
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
                      backgroundColor: monochrome.primary,
                      color: monochrome.onPrimary,
                      border: "none",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: monochrome.primaryHover,
                      },
                    }}
                  >
                    Log in with Email
                  </Button>
                </Flex>
              </form>
            )}

            <Text
              align="center"
              css={{
                "& a": {
                  color: monochrome.link,
                  textDecoration: "none",
                  borderBottom: `1px solid ${monochrome.link}`,
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  "&:hover": { color: monochrome.link, borderBottomColor: monochrome.link },
                },
              }}
            >
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
