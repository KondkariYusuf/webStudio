import { AccordionIcon as t, ContentIcon as n, HeaderIcon as r, ItemIcon as c, TriggerIcon as i } from "@webstudio-is/icons/svg";
import { div as o, h3 as a, button as p } from "@webstudio-is/sdk/normalize.css";
import { radix as e } from "./shared/meta.js";
import { buttonReset as d } from "./shared/preset-styles.js";
import { propsAccordion as s, propsAccordionContent as l, propsAccordionHeader as m, propsAccordionItem as g, propsAccordionTrigger as A } from "./__generated__/accordion.props.js";
const v = {
  icon: t,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [e.AccordionItem]
  },
  presetStyle: { div: o },
  initialProps: ["value", "collapsible"],
  props: s
}, x = {
  label: "Item",
  icon: c,
  indexWithinAncestor: e.Accordion,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.AccordionHeader, e.AccordionContent]
  },
  presetStyle: { div: o },
  initialProps: ["value"],
  props: g
}, f = {
  label: "Item Header",
  icon: r,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.AccordionTrigger]
  },
  presetStyle: {
    h3: [
      ...a,
      {
        property: "margin-top",
        value: { type: "unit", unit: "px", value: 0 }
      },
      {
        property: "margin-bottom",
        value: { type: "unit", unit: "px", value: 0 }
      }
    ]
  },
  props: m
}, C = {
  label: "Item Trigger",
  icon: i,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  states: [{ label: "Open", selector: "[data-state=open]" }],
  presetStyle: {
    button: [p, d].flat()
  },
  props: A
}, H = {
  label: "Item Content",
  icon: n,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"]
  },
  presetStyle: {
    div: o
  },
  props: l
};
export {
  v as metaAccordion,
  H as metaAccordionContent,
  f as metaAccordionHeader,
  x as metaAccordionItem,
  C as metaAccordionTrigger
};
