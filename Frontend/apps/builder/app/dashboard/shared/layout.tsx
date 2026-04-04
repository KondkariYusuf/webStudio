import type { ComponentProps } from "react";
import { Flex, theme } from "@webstudio-is/design-system";

export const Header = ({
  variant,
  ...props
}: { variant: "aside" | "main" } & ComponentProps<typeof Flex>) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="between"
      shrink={false}
      css={{
        paddingInline:
          variant === "aside" ? theme.spacing[5] : theme.spacing[13],
        height: "96px",
        position: "sticky",
        top: 0,
        background: variant === "aside" ? "transparent" : "rgba(10, 10, 10, 0.7)",
        backdropFilter: variant === "main" ? "blur(30px) saturate(150%)" : "none",
        zIndex: 1,
        borderBottom: variant === "main" ? "1px solid #27272A" : "none",
      }}
      {...props}
    />
  );
};

export const Main = (props: ComponentProps<typeof Flex>) => {
  return (
    <Flex
      direction="column"
      as="main"
      grow
      css={{
        // Allows scrolling most parent container while header stays sticky
        overflow: "auto",
        // Keeps dialogs on top of the main content
        isolation: "isolate",
        background: "#0A0A0A",
        position: "relative",
      }}
      {...props}
    />
  );
};
