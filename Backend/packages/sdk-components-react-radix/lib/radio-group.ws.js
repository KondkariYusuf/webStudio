import { RadioGroupIcon as t, TriggerIcon as o, ItemIcon as a } from "@webstudio-is/icons/svg";
import { div as r, span as n, button as c } from "@webstudio-is/sdk/normalize.css";
import { radix as e } from "./shared/meta.js";
import { buttonReset as d } from "./shared/preset-styles.js";
import { propsRadioGroup as i, propsRadioGroupIndicator as s, propsRadioGroupItem as p } from "./__generated__/radio-group.props.js";
const R = {
  icon: t,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [e.RadioGroupItem]
  },
  presetStyle: {
    div: r
  },
  initialProps: ["id", "class", "name", "value", "required"],
  props: i
}, G = {
  icon: a,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [e.RadioGroupIndicator]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    button: [c, d].flat()
  },
  initialProps: ["value"],
  props: p
}, k = {
  icon: o,
  contentModel: {
    category: "none",
    children: ["instance"]
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" }
  ],
  presetStyle: {
    span: n
  },
  props: s
};
export {
  R as metaRadioGroup,
  k as metaRadioGroupIndicator,
  G as metaRadioGroupItem
};
