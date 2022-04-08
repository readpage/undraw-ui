var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, useCssVars, unref, computed, ref, onMounted, onUnmounted, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, toDisplayString, createCommentVNode } from "vue";
const withInstall = (main) => {
  main.install = (app) => {
    app.component(main.name, main);
  };
  return main;
};
var fold_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "u-fold" };
const _hoisted_2 = { class: "action-box user-select" };
const __default__ = {
  name: "UFold"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    line: { default: 5 },
    unfold: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "2b468ff0": unref(line)
    }));
    const line = computed(() => {
      let line2 = Math.trunc(Number(props.line));
      return line2 > 0 ? line2 : 1;
    });
    const fold = ref(true);
    const isOver = ref(false);
    const divBox = ref();
    let observer;
    onMounted(() => {
      observer = new ResizeObserver((entry) => {
        if (fold.value && divBox.value) {
          isOver.value = divBox.value.offsetHeight < divBox.value.scrollHeight;
        }
      });
      observer.observe(divBox.value);
    });
    onUnmounted(() => {
      observer.disconnect();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: normalizeClass(["txt-box", { "over-hidden": fold.value }])
        }, [
          createElementVNode("div", {
            ref_key: "divBox",
            ref: divBox
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 512)
        ], 2),
        createElementVNode("div", _hoisted_2, [
          isOver.value && __props.unfold ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "expand-btn",
            onClick: _cache[0] || (_cache[0] = ($event) => fold.value = !fold.value)
          }, toDisplayString(fold.value ? "\u5C55\u5F00" : "\u6536\u8D77"), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
}));
var foldVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0229244"]]);
const Fold = withInstall(foldVue);
var components = [
  Fold
];
var base = "";
var index = {
  install: (app) => {
    components.forEach((item) => {
      app.use(item);
    });
  }
};
export { Fold, index as default };
