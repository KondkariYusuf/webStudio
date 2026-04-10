import { Flex, theme } from "@webstudio-is/design-system";
import { Breadcrumbs } from "./breadcrumbs";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      css={{
        isolation: "isolate",
        gridArea: "footer",
        height: theme.spacing[11],
        background: theme.colors.backgroundTopbar,
        color: theme.colors.foregroundMain,
        borderTop: `1px solid ${theme.colors.borderMain}`,
      }}
    >
      <Breadcrumbs />
    </Flex>
  );
};
