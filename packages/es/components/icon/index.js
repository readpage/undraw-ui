import { defineComponent as l, computed as n, openBlock as t, createElementBlock as s, normalizeStyle as a, renderSlot as _, createElementVNode as m } from "vue";
import { b as u } from "../../util/isEmpty.js";
import { _ as p } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const d = {
  key: 1,
  "aria-hidden": "true"
}, f = ["xlink:href"], v = /* @__PURE__ */ l({
  name: "UIcon",
  __name: "icon",
  props: {
    name: {},
    size: {},
    color: {}
  },
  setup(r) {
    const e = r, c = n(() => "#" + e.name), i = n(() => ({
      fontSize: u(e.size) ? e.size + "px" : e.size,
      color: e.color
    }));
    return (o, h) => (t(), s("i", {
      class: "u-icon",
      style: a(i.value)
    }, [
      o.$slots.default ? _(o.$slots, "default", { key: 0 }, void 0, !0) : (t(), s("svg", d, [
        m("use", { "xlink:href": c.value }, null, 8, f)
      ]))
    ], 4));
  }
});
const y = /* @__PURE__ */ p(v, [["__scopeId", "data-v-b9233078"]]), b = y;
export {
  b as U
};
