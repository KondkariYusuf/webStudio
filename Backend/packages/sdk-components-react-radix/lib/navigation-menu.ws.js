import { NavigationMenuIcon as t, ContentIcon as o, ListItemIcon as i, BoxIcon as a, ListIcon as r, TriggerIcon as c, ViewportIcon as s } from "@webstudio-is/icons/svg";
import { div as e } from "@webstudio-is/sdk/normalize.css";
import { radix as n } from "./shared/meta.js";
import { propsNavigationMenu as p, propsNavigationMenuContent as g, propsNavigationMenuItem as M, propsNavigationMenuLink as l, propsNavigationMenuList as u, propsNavigationMenuTrigger as d, propsNavigationMenuViewport as v } from "./__generated__/navigation-menu.props.js";
const L = {
  icon: t,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [n.NavigationMenuList, n.NavigationMenuViewport]
  },
  presetStyle: {
    div: e
  },
  props: p
}, h = {
  icon: r,
  label: "Menu List",
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n.NavigationMenuItem]
  },
  presetStyle: {
    div: e
  },
  props: u
}, b = {
  icon: i,
  label: "Menu Item",
  indexWithinAncestor: n.NavigationMenu,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      n.NavigationMenuTrigger,
      n.NavigationMenuContent,
      n.NavigationMenuLink
    ]
  },
  presetStyle: {
    div: e
  },
  props: M
}, k = {
  icon: c,
  label: "Menu Trigger",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: d
}, w = {
  icon: o,
  label: "Menu Content",
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [n.NavigationMenuLink]
  },
  presetStyle: {
    div: e
  },
  props: g
}, C = {
  icon: a,
  label: "Accessible Link Wrapper",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  props: l
}, S = {
  icon: s,
  label: "Menu Viewport",
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: {
    div: e
  },
  props: v
};
export {
  L as metaNavigationMenu,
  w as metaNavigationMenuContent,
  b as metaNavigationMenuItem,
  C as metaNavigationMenuLink,
  h as metaNavigationMenuList,
  k as metaNavigationMenuTrigger,
  S as metaNavigationMenuViewport
};
