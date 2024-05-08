import { defineComponent as W, reactive as w, ref as u, computed as A, onMounted as B, resolveComponent as m, openBlock as o, createElementBlock as a, normalizeStyle as f, createVNode as I, unref as $, withCtx as p, Fragment as N, renderList as R, createBlock as r, createTextVNode as C, toDisplayString as x, createCommentVNode as h, createElementVNode as y, nextTick as S } from "vue";
import { ElCarousel as V } from "element-plus";
import { _ as z } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const E = { key: 0 }, U = /* @__PURE__ */ W({
  name: "UNoticeBar",
  __name: "notice-bar",
  props: {
    data: {},
    size: { default: 14 },
    vertical: { type: Boolean },
    height: { default: 40 },
    delay: { default: 1e3 },
    spped: { default: 100 },
    suffixIcon: {},
    prefixIcon: {},
    color: { default: "--color-warning" },
    background: { default: "var(--color-warning-light-9)" }
  },
  setup(v) {
    const n = v, e = w({
      boxWidth: 0,
      textWidth: 0,
      oneTime: 0,
      twoTime: 0,
      order: 1
    }), l = u({}), i = u({}), _ = A(() => n.delay > 2e3 ? n.delay : 2e3), k = () => {
      S(() => {
        e.boxWidth = l.value.offsetWidth, e.textWidth = i.value.offsetWidth, document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${e.textWidth}px;}}`), document.styleSheets[0].insertRule(
          `@keyframes twoAnimation {0% {left: ${e.boxWidth}px;} 100% {left: -${e.textWidth}px;}}`
        ), g(), setTimeout(() => {
          s();
        }, n.delay);
      });
    }, g = () => {
      e.oneTime = e.textWidth / n.spped, e.twoTime = (e.textWidth + e.boxWidth) / n.spped;
    }, s = () => {
      e.order === 1 ? (i.value.style.cssText = `animation: oneAnimation ${e.oneTime}s linear; opactity: 1;}`, e.order = 2) : i.value.style.cssText = `animation: twoAnimation ${e.twoTime}s linear infinite; opacity: 1;`;
    }, b = () => {
      i.value.addEventListener(
        "animationend",
        () => {
          s();
        },
        !1
      );
    };
    return B(() => {
      n.vertical || (k(), b());
    }), (t, D) => {
      const T = m("el-carousel-item"), c = m("u-icon");
      return o(), a("div", {
        class: "u-notice-bar",
        style: f({ background: t.background, height: `${t.height}px` })
      }, [
        t.vertical ? (o(), a("div", E, [
          I($(V), {
            height: "40px",
            direction: "vertical",
            autoplay: !0,
            "indicator-position": "none",
            interval: _.value
          }, {
            default: p(() => [
              (o(!0), a(N, null, R(t.data, (d) => (o(), r(T, { key: d }, {
                default: p(() => [
                  C(x(d), 1)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          }, 8, ["interval"])
        ])) : (o(), a("div", {
          key: 1,
          style: f({ color: t.color, fontSize: `${t.size}px` }),
          class: "u-notice-bar-wrap"
        }, [
          t.prefixIcon ? (o(), r(c, {
            key: 0,
            name: t.prefixIcon
          }, null, 8, ["name"])) : h("", !0),
          y("div", {
            ref_key: "boxRef",
            ref: l,
            class: "text-box"
          }, [
            y("div", {
              ref_key: "textRef",
              ref: i,
              class: "text"
            }, x(t.data), 513)
          ], 512),
          t.suffixIcon ? (o(), r(c, {
            key: 1,
            name: t.suffixIcon
          }, null, 8, ["name"])) : h("", !0)
        ], 4))
      ], 4);
    };
  }
});
const L = /* @__PURE__ */ z(U, [["__scopeId", "data-v-6c171916"]]), q = L;
export {
  q as U
};
