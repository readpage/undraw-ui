import { defineComponent as d, useCssVars as l, ref as n, watch as c, openBlock as r, createElementBlock as i, normalizeClass as o, createElementVNode as _, renderSlot as p, createCommentVNode as u } from "vue";
import { _ as v } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const m = { class: "field" }, f = /* @__PURE__ */ d({
  name: "UDivider",
  __name: "divider",
  props: {
    borderStyle: { default: "solid" },
    vertical: { type: Boolean },
    position: { default: "center" }
  },
  setup(a) {
    const s = a;
    l((e) => ({
      ca4833b6: s.borderStyle
    }));
    const t = n();
    return c(
      () => s.position,
      (e) => {
        switch (e) {
          case "left":
            t.value = "is-left";
            break;
          case "right":
            t.value = "is-right";
            break;
        }
      },
      { immediate: !0 }
    ), (e, h) => (r(), i("div", {
      class: o(["u-divider", { vertical: e.vertical }])
    }, [
      _("fieldset", m, [
        e.$slots.default || e.vertical ? (r(), i("legend", {
          key: 0,
          class: o(["inner", t.value])
        }, [
          p(e.$slots, "default", {}, void 0, !0)
        ], 2)) : u("", !0)
      ])
    ], 2));
  }
});
const b = /* @__PURE__ */ v(f, [["__scopeId", "data-v-db1a7610"]]), g = b;
export {
  g as U
};
