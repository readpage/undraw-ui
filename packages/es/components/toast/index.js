import { defineComponent as c, useCssVars as l, reactive as p, ref as d, watch as f, onMounted as m, openBlock as i, createElementBlock as v, createVNode as u, Transition as g, withCtx as _, withDirectives as w, createElementVNode as r, createBlock as h, unref as y, createCommentVNode as T, normalizeClass as x, toDisplayString as b, vShow as C } from "vue";
import { UIcon as z } from "undraw-ui";
import { _ as L } from "../anchor/index.js";
import { c as M, r as B } from "../../util/dom.js";
/*! UndrawUi v1.1.0 */
const N = [
  {
    type: "success",
    options: {
      color: "#67c23a",
      bgColor: "#f0f9eb",
      icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2040"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" p-id="2041"></path></svg>'
    }
  },
  {
    type: "info",
    options: {
      color: "#909399",
      bgColor: "#f4f4f5",
      icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1950"><path d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64z m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68 0.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z" p-id="1951"></path></svg>'
    }
  },
  {
    type: "warn",
    options: {
      color: "#fdf6ec",
      bgColor: "#e6a23c",
      icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1980"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256z m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z" p-id="1981"></path></svg>'
    }
  },
  {
    type: "error",
    options: {
      color: "#f56c6c",
      bgColor: "#fef0f0",
      icon: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8851"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z" p-id="8852"></path></svg>'
    }
  }
], k = {
  type: "normal",
  options: { color: "#fff", bgColor: "rgba(0, 0, 0, .5)", icon: "" }
};
function U(o) {
  return N.find((t) => t.type === o);
}
function V() {
  return k;
}
const D = { class: "v-toast" }, A = { class: "inner" }, E = { class: "message" }, G = /* @__PURE__ */ c({
  name: "UToast",
  __name: "index",
  props: {
    message: { default: "" },
    duration: { default: 2e3 },
    type: { default: "normal" }
  },
  setup(o) {
    const t = o;
    l((a) => ({
      "6008e0a6": e.color,
      "3c8482a1": e.bgColor
    }));
    const e = p(V().options), s = d(!1);
    return f(
      () => t.type,
      (a) => {
        const n = U(a);
        n && (e.color = n.options.color, e.bgColor = n.options.bgColor, e.icon = n.options.icon);
      },
      { immediate: !0 }
    ), m(() => {
      s.value = !0, setTimeout(() => {
        s.value = !1;
      }, t.duration);
    }), (a, n) => (i(), v("div", D, [
      u(g, { name: "v-toast" }, {
        default: _(() => [
          w(r("div", A, [
            r("div", E, [
              e.icon ? (i(), h(y(z), {
                key: 0,
                innerHTML: e.icon
              }, null, 8, ["innerHTML"])) : T("", !0),
              r("span", {
                class: x({ normal: a.type != "normal" })
              }, b(a.message), 3)
            ])
          ], 512), [
            [C, s.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
});
const H = /* @__PURE__ */ L(G, [["__scopeId", "data-v-49ddfdd6"]]);
function F(o) {
  let t = o.duration;
  if (!o.message)
    return;
  o.duration = t || 1e3;
  const { vnode: e, div: s } = M(H, o);
  return setTimeout(() => {
    B(s);
  }, o.duration + 300), e;
}
export {
  F as U
};
