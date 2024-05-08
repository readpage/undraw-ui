import { defineComponent as h, useCssVars as N, computed as g, ref as d, onMounted as U, onUnmounted as $, openBlock as u, createElementBlock as v, createElementVNode as f, normalizeClass as c, createBlock as E, unref as t, withCtx as p, createTextVNode as m, toDisplayString as _, createCommentVNode as y, renderSlot as x, createVNode as w } from "vue";
import { translate as s } from "undraw-ui";
import { ElButton as k } from "element-plus";
import { _ as z } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const F = { class: "u-fold" }, H = { class: "action-box select-none" }, M = /* @__PURE__ */ h({
  name: "UFold",
  __name: "fold",
  props: {
    line: { default: 5 },
    unfold: { type: Boolean },
    position: { default: "line" }
  },
  setup(B) {
    const C = B;
    N((e) => ({
      "797c4087": b.value
    }));
    const b = g(() => {
      let e = Math.trunc(Number(C.line));
      return e > 0 ? e : 1;
    }), o = d(!0), r = d(!1), n = d(), i = d();
    let l;
    return U(() => {
      l = new ResizeObserver((e) => {
        o.value && n.value && i.value && (r.value = i.value.clientHeight < n.value.scrollHeight);
      }), l.observe(n.value);
    }), $(() => {
      l == null || l.disconnect();
    }), (e, a) => (u(), v("div", F, [
      f("div", {
        ref_key: "textBox",
        ref: i,
        class: c(["txt-box", { "over-hidden": o.value }])
      }, [
        f("div", {
          ref_key: "divBox",
          ref: n
        }, [
          r.value && e.unfold && e.position == "end" ? (u(), E(t(k), {
            key: 0,
            onClick: a[0] || (a[0] = (V) => o.value = !o.value),
            class: c({ "over-hidden": o.value, "end-btn": 1 }),
            type: "primary",
            plain: "",
            link: ""
          }, {
            default: p(() => [
              m(_(o.value ? t(s)("fold.unfold") : t(s)("fold.fold")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : y("", !0),
          x(e.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2),
      f("div", H, [
        r.value && e.unfold && e.position == "line" ? (u(), v("div", {
          key: 0,
          class: "expand-btn",
          onClick: a[1] || (a[1] = (V) => o.value = !o.value)
        }, [
          x(e.$slots, "expand", { fold: o.value }, () => [
            w(t(k), {
              type: "primary",
              plain: "",
              link: ""
            }, {
              default: p(() => [
                m(_(o.value ? t(s)("fold.unfold") : t(s)("fold.fold")), 1)
              ]),
              _: 1
            })
          ], !0)
        ])) : y("", !0)
      ])
    ]));
  }
});
const O = /* @__PURE__ */ z(M, [["__scopeId", "data-v-9df6f6a3"]]), T = O;
export {
  T as U
};
