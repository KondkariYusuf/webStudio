import { SelectIcon as o, ContentIcon as c, ItemIcon as r, CheckMarkIcon as l, TextIcon as i, TriggerIcon as p, FormTextFieldIcon as s, ViewportIcon as a } from "@webstudio-is/icons/svg";
import { div as t, span as n, button as d } from "@webstudio-is/sdk/normalize.css";
import { radix as e } from "./shared/meta.js";
import { propsSelect as S, propsSelectContent as m, propsSelectItem as I, propsSelectItemIndicator as g, propsSelectItemText as y, propsSelectTrigger as h, propsSelectValue as T, propsSelectViewport as x } from "./__generated__/select.props.js";
const b = {
  icon: o,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [e.SelectTrigger, e.SelectContent]
  },
  initialProps: ["name", "value", "open", "required"],
  props: S
}, f = {
  icon: p,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.SelectValue]
  },
  presetStyle: { button: d },
  props: h
}, w = {
  label: "Value",
  icon: s,
  contentModel: {
    category: "none",
    children: []
  },
  presetStyle: { span: n },
  initialProps: ["placeholder"],
  props: T
}, v = {
  icon: c,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.SelectViewport]
  },
  presetStyle: { div: t },
  props: m
}, P = {
  icon: a,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.SelectItem]
  },
  presetStyle: { div: t },
  props: x
}, k = {
  icon: r,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.SelectItemIndicator, e.SelectItemText]
  },
  presetStyle: { div: t },
  initialProps: ["value"],
  props: I
}, F = {
  label: "Indicator",
  icon: l,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  presetStyle: { span: n },
  props: g
}, q = {
  label: "Item Text",
  icon: i,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: { span: n },
  props: y
};
export {
  b as metaSelect,
  v as metaSelectContent,
  k as metaSelectItem,
  F as metaSelectItemIndicator,
  q as metaSelectItemText,
  f as metaSelectTrigger,
  w as metaSelectValue,
  P as metaSelectViewport
};
