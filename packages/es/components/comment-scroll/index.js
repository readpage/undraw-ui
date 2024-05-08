import { defineComponent as k, ref as d, computed as m, openBlock as o, createElementBlock as n, withDirectives as S, renderSlot as h, createElementVNode as C, createBlock as x, unref as t, withCtx as g, createTextVNode as B, toDisplayString as s, createCommentVNode as c } from "vue";
import { translate as r } from "undraw-ui";
import { d as E } from "../../util/core.js";
import { ElLink as N, ElInfiniteScroll as U } from "element-plus";
import { _ as V } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const w = { class: "u-comment-scroll" }, D = ["infinite-scroll-disabled"], I = { class: "scroll-btn" }, M = { key: 1 }, $ = { key: 2 }, L = /* @__PURE__ */ k({
  name: "UCommentScroll",
  __name: "comment-scroll",
  props: {
    disable: { type: Boolean }
  },
  emits: ["more"],
  setup(u, { emit: _ }) {
    const p = u, l = d(!1), e = d(!1), a = m(() => e.value && p.disable), f = m(() => !e.value || l.value || a.value), v = E(() => {
      _("more"), l.value = !1;
    }, 500), y = () => {
      l.value = !0, v();
    };
    return (b, i) => (o(), n("div", w, [
      S((o(), n("div", {
        "infinite-scroll-disabled": f.value,
        "infinite-scroll-distance": "2"
      }, [
        h(b.$slots, "default", {}, void 0, !0),
        C("div", I, [
          e.value ? c("", !0) : (o(), x(t(N), {
            key: 0,
            type: "primary",
            underline: !1,
            onClick: i[0] || (i[0] = (j) => e.value = !e.value)
          }, {
            default: g(() => [
              B(s(t(r)("scroll.content")), 1)
            ]),
            _: 1
          })),
          l.value ? (o(), n("p", M, s(t(r)("scroll.loading")), 1)) : c("", !0),
          a.value ? (o(), n("p", $, s(t(r)("scroll.noMore")), 1)) : c("", !0)
        ])
      ], 8, D)), [
        [t(U), y]
      ])
    ]));
  }
});
const T = /* @__PURE__ */ V(L, [["__scopeId", "data-v-df6831c6"]]), H = T;
export {
  H as U
};
