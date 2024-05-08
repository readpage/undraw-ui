import { defineComponent as y, ref as d, onMounted as h, onUnmounted as m, openBlock as v, createElementBlock as p, createElementVNode as _, createVNode as E, unref as b, Fragment as S, renderList as O, normalizeClass as w, toDisplayString as x, pushScopeId as U, popScopeId as k } from "vue";
import { UDivider as A } from "undraw-ui";
/*! UndrawUi v1.1.0 */
const C = (c) => (U("data-v-592bc389"), c = c(), k(), c), I = { class: "u-anchor" }, L = { class: "toc-content" }, q = /* @__PURE__ */ C(() => /* @__PURE__ */ _("h3", { class: "toc-content-heading" }, "目录", -1)), H = { class: "toc-items" }, N = ["onClick"], V = /* @__PURE__ */ y({
  name: "UAnchor",
  __name: "anchor",
  props: {
    container: {},
    scroll: {},
    targetOffset: { default: 0 }
  },
  setup(c) {
    const t = c, l = d(0), s = d({}), e = d({}), T = (o) => {
      switch (o) {
        case "H1":
        case "H2":
          return "d2";
        case "H3":
          return "d3";
        default:
          return "d4";
      }
    }, u = () => {
      const o = [];
      s.value.forEach((n) => {
        o.push(n.offsetTop);
      });
      const a = (e.value instanceof Element ? e.value.scrollTop : void 0) || document.documentElement.scrollTop || document.body.scrollTop;
      o.forEach((n, f) => {
        a >= n - 10 - t.targetOffset && (l.value = f);
      });
    }, g = (o) => {
      const r = s.value.item(o);
      console.log(r), t.scroll ? e.value.scrollTo({
        top: r.offsetTop - t.targetOffset,
        behavior: "smooth"
      }) : document.documentElement.scrollTo({
        top: r.offsetTop - t.targetOffset,
        behavior: "smooth"
      });
    };
    h(() => {
    }), m(() => {
      e.value.removeEventListener("scroll", u);
    });
    let i;
    return h(() => {
      let o = document.querySelector(t.container);
      i = new ResizeObserver((r) => {
        t.scroll ? e.value = document.querySelector(t.scroll) : e.value = window, s.value = o.querySelectorAll("h1, h2, h3, h4, h5, h6"), e.value.addEventListener("scroll", u);
      }), i.observe(o);
    }), m(() => {
      e.value.removeEventListener("scroll", u), i.disconnect();
    }), (o, r) => (v(), p("div", I, [
      _("nav", L, [
        q,
        E(b(A)),
        _("ul", H, [
          (v(!0), p(S, null, O(s.value, (a, n) => (v(), p("li", {
            key: n,
            class: w([{ active: l.value == n }, T(a.nodeName)]),
            onClick: (f) => g(n)
          }, x(a.innerText), 11, N))), 128))
        ])
      ])
    ]));
  }
});
const z = (c, t) => {
  const l = c.__vccOpts || c;
  for (const [s, e] of t)
    l[s] = e;
  return l;
}, B = /* @__PURE__ */ z(V, [["__scopeId", "data-v-592bc389"]]), M = B;
export {
  M as U,
  z as _
};
