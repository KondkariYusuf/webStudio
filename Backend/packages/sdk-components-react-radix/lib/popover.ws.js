import { PopoverIcon as e, ButtonElementIcon as t, ContentIcon as n, TriggerIcon as r } from "@webstudio-is/icons/svg";
import { div as p, button as i } from "@webstudio-is/sdk/normalize.css";
import { radix as o } from "./shared/meta.js";
import { propsPopover as s, propsPopoverClose as c, propsPopoverContent as a, propsPopoverTrigger as l } from "./__generated__/popover.props.js";
import { buttonReset as d } from "./shared/preset-styles.js";
const C = {
  icon: r,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: l
}, y = {
  icon: n,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [o.PopoverClose]
  },
  presetStyle: {
    div: p
  },
  initialProps: ["side", "sideOffset", "align", "alignOffset"],
  props: a
}, h = {
  icon: e,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [o.PopoverTrigger, o.PopoverContent]
  },
  initialProps: ["open"],
  props: s
}, u = {
  icon: t,
  label: "Close Button",
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    button: [d, i].flat()
  },
  props: c
};
export {
  h as metaPopover,
  u as metaPopoverClose,
  y as metaPopoverContent,
  C as metaPopoverTrigger
};
