import { Button, Flex, InputField, theme } from "@webstudio-is/design-system";
import { useState } from "react";
import { authPath } from "~/shared/router-utils";

export const SecretLogin = () => {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <form
        method="post"
        action={authPath({ provider: "dev" })}
        style={{ display: "contents" }}
      >
        <Flex gap="2">
          <InputField
            name="secret"
            type="text"
            minLength={2}
            required
            autoFocus
            placeholder="Auth secret"
            css={{ flexGrow: 1 }}
          />
          <Button 
            type="submit"
            css={{ 
              backgroundColor: theme.colors.backgroundTopbar,
              color: theme.colors.backgroundPanel,
              border: "none",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: theme.colors.backgroundTopbarHover,
              }
            }}
          >
            Login
          </Button>
        </Flex>
      </form>
    );
  }

  return (
    <Button
      onClick={() => setShow(true)}
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
      Login with Secret
    </Button>
  );
};
