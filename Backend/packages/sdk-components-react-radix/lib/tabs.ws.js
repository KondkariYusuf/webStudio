import { TabsIcon as n, ContentIcon as o, HeaderIcon as s, TriggerIcon as r } from "@webstudio-is/icons/svg";
import { div as e, button as a } from "@webstudio-is/sdk/normalize.css";
import { radix as t } from "./shared/meta.js";
import { buttonReset as c } from "./shared/preset-styles.js";
import { propsTabs as i, propsTabsContent as p, propsTabsList as b, propsTabsTrigger as T } from "./__generated__/tabs.props.js";
const y = {
  icon: n,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [t.TabsList, t.TabsContent]
  },
  presetStyle: { div: e },
  props: i
}, f = {
  icon: s,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [t.TabsTrigger]
  },
  presetStyle: { div: e },
  props: b
}, x = {
  icon: r,
  label: "Tab Trigger",
  indexWithinAncestor: t.Tabs,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  states: [{ label: "Active", selector: "[data-state=active]" }],
  presetStyle: {
    button: [a, c].flat()
  },
  props: T
}, C = {
  label: "Tab Content",
  icon: o,
  indexWithinAncestor: t.Tabs,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { div: e },
  props: p
};
export {
  y as metaTabs,
  C as metaTabsContent,
  f as metaTabsList,
  x as metaTabsTrigger
};
