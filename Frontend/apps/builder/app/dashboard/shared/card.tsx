import {
  Flex,
  theme,
  Box,
  Grid,
  styled,
  css,
  Slot,
  type SlotProps,
} from "@webstudio-is/design-system";
import { forwardRef, type ComponentProps } from "react";

const borderColorVar = "--ws-dashboard-card-border-color";

const cardStyle = css({
  position: "relative",
  isolation: "isolate",
  display: "flex",
  padding: 0,
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: 0,
  outline: "none",
  background: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
  border: "1px solid #c3c1c1",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  "&:focus-within, &[aria-selected=true]": {
    [borderColorVar]: "#928ddd", // Deep purple palette focus color
    boxShadow: "0 0 0 2px #FFFFFF, 0 0 0 4px #928ddd",
  },
});

type CardProps = ComponentProps<"div"> & {
  asChild?: boolean;
} & SlotProps;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ asChild, ...props }, ref) => {
    const Component = asChild ? Slot : Box;
    return <Component {...props} className={cardStyle()} ref={ref} />;
  }
);
Card.displayName = "Card";

export const CardContent = styled(Grid, {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  aspectRatio: "1.91/1",
  borderTopLeftRadius: "11px",
  borderTopRightRadius: "11px",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderBottom: "1px solid #c3c1c1",
    pointerEvents: "none",
  },
});

export const CardFooter = styled(Flex, {
  justifyContent: "space-between",
  flexShrink: 0,
  alignSelf: "stretch",
  flexGap: theme.spacing[3],
  background: "#FFFFFF",
  borderBottomLeftRadius: "11px",
  borderBottomRightRadius: "11px",
  height: theme.spacing[20],
  paddingBlock: "16px",
  paddingInline: "20px",
});
