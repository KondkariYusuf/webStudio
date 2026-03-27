import { DialogIcon as t, ButtonElementIcon as n, ContentIcon as i, TextIcon as r, OverlayIcon as c, HeadingIcon as l, TriggerIcon as a } from "@webstudio-is/icons/svg";
import { div as e, p as s, h2 as p, button as g } from "@webstudio-is/sdk/normalize.css";
import { radix as o } from "./shared/meta.js";
import { propsDialog as D, propsDialogClose as d, propsDialogContent as m, propsDialogDescription as y, propsDialogOverlay as h, propsDialogTitle as C, propsDialogTrigger as T } from "./__generated__/dialog.props.js";
import { buttonReset as I } from "./shared/preset-styles.js";
const S = {
  icon: a,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: T
}, b = {
  icon: c,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [o.DialogContent]
  },
  presetStyle: { div: e },
  props: h
}, O = {
  icon: i,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      o.DialogTitle,
      o.DialogDescription,
      o.DialogClose
    ]
  },
  presetStyle: { div: e },
  props: m
}, B = {
  icon: l,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { h2: p },
  props: C
}, E = {
  icon: r,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { p: s },
  props: y
}, H = {
  icon: n,
  label: "Close Button",
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    button: [I, g].flat()
  },
  props: d
}, P = {
  icon: t,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [o.DialogTrigger, o.DialogOverlay]
  },
  initialProps: ["open"],
  props: D
};
export {
  P as metaDialog,
  H as metaDialogClose,
  O as metaDialogContent,
  E as metaDialogDescription,
  b as metaDialogOverlay,
  B as metaDialogTitle,
  S as metaDialogTrigger
};
