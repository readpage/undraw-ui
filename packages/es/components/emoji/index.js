import { defineComponent as b, ref as m, openBlock as t, createElementBlock as o, createVNode as p, unref as i, withCtx as _, createElementVNode as e, toDisplayString as k, renderSlot as E, Fragment as u, renderList as v, normalizeClass as S, normalizeStyle as x, pushScopeId as V, popScopeId as H } from "vue";
import { translate as I } from "undraw-ui";
import { ElPopover as $, ElScrollbar as B, ElImage as L } from "element-plus";
import { _ as M } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const Z = (n) => (V("data-v-c14c086b"), n = n(), H(), n), z = { class: "u-emoji" }, U = { class: "face-tooltip-head select-none" }, N = ["onClick"], X = ["src"], A = { class: "emoji-body select-none" }, D = { style: { padding: "0 5px" } }, F = ["onClick"], P = { class: "emoji-btn select-none" }, q = { key: 0 }, G = /* @__PURE__ */ Z(() => /* @__PURE__ */ e("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon"
}, [
  /* @__PURE__ */ e("path", {
    "data-v-9fe533ba": "",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"
  })
], -1)), J = /* @__PURE__ */ b({
  name: "UEmoji",
  __name: "emoji",
  props: {
    emoji: {},
    placement: { default: "bottom" }
  },
  emits: ["addEmoji"],
  setup(n, { emit: O }) {
    const j = n, f = m(0), c = m(0), a = m(new Array(2)), { emojiList: C, faceList: g } = j.emoji;
    function y(s) {
      switch (f.value = s, s) {
        case 0:
          c.value = 0;
          break;
        case 1:
          c.value = -50, a.value[1] = C[1];
          break;
      }
    }
    function w() {
      a.value[0] = C[0];
    }
    return (s, Q) => (t(), o("div", z, [
      p(i($), {
        placement: s.placement,
        "popper-class": "emoji-popover",
        width: 250,
        trigger: "click",
        onBeforeEnter: w
      }, {
        reference: _(() => [
          e("div", P, [
            s.$slots.default ? E(s.$slots, "default", { key: 1 }, void 0, !0) : (t(), o("div", q, [
              G,
              e("span", null, k(i(I)("emoji.content")), 1)
            ]))
          ])
        ]),
        default: _(() => [
          e("div", U, [
            (t(!0), o(u, null, v(i(g), (r, l) => (t(), o("label", {
              key: l,
              class: S(f.value == l ? "active" : ""),
              onClick: (h) => y(l)
            }, [
              e("img", {
                src: r,
                alt: ""
              }, null, 8, X)
            ], 10, N))), 128))
          ]),
          e("div", A, [
            e("div", {
              class: "emjio-container",
              style: x({ transform: `translateX(${c.value}%)` })
            }, [
              (t(!0), o(u, null, v(a.value, (r, l) => (t(), o("div", {
                key: l,
                class: "emoji-wrapper"
              }, [
                p(i(B), null, {
                  default: _(() => [
                    e("div", D, [
                      (t(!0), o(u, null, v(r, (h, d) => (t(), o("span", {
                        key: d,
                        class: "emoji-item",
                        onClick: (R) => s.$emit("addEmoji", d)
                      }, [
                        p(i(L), {
                          src: h,
                          title: String(d),
                          class: "emoji",
                          style: { width: "24px", height: "24px", margin: "5px" },
                          lazy: ""
                        }, null, 8, ["src", "title"])
                      ], 8, F))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]))), 128))
            ], 4)
          ])
        ]),
        _: 3
      }, 8, ["placement"])
    ]));
  }
});
const K = /* @__PURE__ */ M(J, [["__scopeId", "data-v-c14c086b"]]), te = K;
export {
  te as U
};
