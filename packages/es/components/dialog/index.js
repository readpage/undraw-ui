import { defineComponent as _, ref as i, watch as r, openBlock as s, createBlock as h, unref as g, createSlots as w, withCtx as u, createElementVNode as d, createElementBlock as c, renderSlot as p, pushScopeId as V, popScopeId as k } from "vue";
import { ElDialog as y } from "element-plus";
import { _ as C } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const v = (o) => (V("data-v-9df85a14"), o = o(), k(), o), B = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, b = /* @__PURE__ */ v(() => /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1)), z = [
  b
], S = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, I = /* @__PURE__ */ v(() => /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1)), M = [
  I
], U = /* @__PURE__ */ _({
  name: "UDialog",
  __name: "dialog",
  props: {
    title: {},
    modelValue: { type: Boolean },
    width: {},
    center: { type: Boolean },
    top: {},
    beforeClose: {},
    closeOnClickModal: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: f }) {
    const m = o, l = i(!1), t = i(!1);
    return r(
      () => m.modelValue,
      (e) => {
        l.value = e;
      },
      {
        immediate: !0
      }
    ), r(
      () => l.value,
      (e) => {
        f("update:modelValue", e);
      }
    ), (e, a) => (s(), h(g(y), {
      modelValue: l.value,
      "onUpdate:modelValue": a[1] || (a[1] = (n) => l.value = n),
      "close-on-click-modal": e.closeOnClickModal,
      title: e.title,
      width: e.width,
      top: e.top,
      fullscreen: t.value,
      center: e.center,
      "before-close": e.beforeClose,
      draggable: ""
    }, w({
      default: u(() => [
        d("div", {
          class: "full-screen",
          onClick: a[0] || (a[0] = (n) => t.value = !t.value)
        }, [
          t.value ? (s(), c("svg", B, z)) : (s(), c("svg", S, M))
        ]),
        p(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.$slots.footer ? {
        name: "footer",
        fn: u(() => [
          p(e.$slots, "footer", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["modelValue", "close-on-click-modal", "title", "width", "top", "fullscreen", "center", "before-close"]));
  }
});
const $ = /* @__PURE__ */ C(U, [["__scopeId", "data-v-9df85a14"]]), O = $;
export {
  O as U
};
