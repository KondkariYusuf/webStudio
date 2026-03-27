import { CollapsibleIcon as n, ContentIcon as t, TriggerIcon as l } from "@webstudio-is/icons/svg";
import { div as o } from "@webstudio-is/sdk/normalize.css";
import { radix as e } from "./shared/meta.js";
import { propsCollapsible as r, propsCollapsibleContent as i, propsCollapsibleTrigger as p } from "./__generated__/collapsible.props.js";
const g = {
  icon: n,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [e.CollapsibleTrigger, e.CollapsibleContent]
  },
  presetStyle: {
    div: o
  },
  initialProps: ["open"],
  props: r
}, m = {
  icon: l,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  props: p
}, d = {
  icon: t,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    div: o
  },
  props: i
};
export {
  g as metaCollapsible,
  d as metaCollapsibleContent,
  m as metaCollapsibleTrigger
};
