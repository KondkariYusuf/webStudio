import { jsx as n } from "react/jsx-runtime";
import { forwardRef as c, useState as i, useEffect as m } from "react";
import { Indicator as s, Item as f, Root as d } from "@radix-ui/react-radio-group";
const I = c(({ defaultValue: r, ...t }, a) => {
  const o = t.value ?? r ?? "", [u, e] = i(o);
  return m(() => e(o), [o]), /* @__PURE__ */ n(d, { ...t, ref: a, value: u, onValueChange: e });
}), G = f, V = s;
export {
  I as RadioGroup,
  V as RadioGroupIndicator,
  G as RadioGroupItem
};
