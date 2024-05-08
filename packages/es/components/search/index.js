import { defineComponent as O, computed as y, resolveComponent as D, withDirectives as L, openBlock as h, createElementBlock as v, createElementVNode as t, createVNode as p, unref as b, withCtx as f, createTextVNode as E, Fragment as R, renderList as T, createBlock as X, toDisplayString as k, createCommentVNode as N, normalizeClass as V, vShow as K, pushScopeId as Z, popScopeId as j, ref as g, toRef as Y, reactive as U, watch as A, withKeys as ee, vModelText as te } from "vue";
import { ElLink as se, ElTag as ae, ClickOutside as oe } from "element-plus";
import { s as S } from "../../util/storage.js";
import { i as z } from "../../util/isEmpty.js";
import { _ as q } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const C = (l) => (Z("data-v-d833f7f8"), l = l(), j(), l), ne = { class: "card-box u-scrollbar" }, ie = {
  key: 0,
  class: "history"
}, le = { class: "header" }, re = /* @__PURE__ */ C(() => /* @__PURE__ */ t("div", { class: "title" }, "历史搜索", -1)), ce = /* @__PURE__ */ C(() => /* @__PURE__ */ t("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  })
], -1)), de = {
  key: 1,
  class: "trending"
}, he = { class: "title" }, ue = /* @__PURE__ */ C(() => /* @__PURE__ */ t("span", null, "热搜", -1)), ve = /* @__PURE__ */ C(() => /* @__PURE__ */ t("svg", {
  "data-v-5fe91717": "",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: ""
}, [
  /* @__PURE__ */ t("path", {
    "data-v-5fe91717": "",
    d: "M12.8 5.2C13.9532 6.46 14.8 8.2 14.8 10C14.7039 12.8937 12.6843 15.1706 9.97973 15.8159C10.359 12.3442 7.77588 9.35406 7.77588 9.35406C7.77588 9.35406 7.99512 13.7064 6.79514 15.8104C4.03715 15.1428 2 12.7806 2 9.8C2 7.776 2.9336 5.9728 4.4 4.8C5.8608 3.7056 6.8 1.9656 6.8 0C9.684 0.4368 11.894 2.9264 11.894 5.932C11.894 6.5012 11.746 7.0652 11.6 7.6C12.1264 6.9024 12.6184 6.0876 12.8 5.2Z",
    fill: "#F53F3F"
  })
], -1)), pe = { class: "hot-list" }, fe = ["onClick"], _e = { class: "trending-text u-ellipsis" }, me = /* @__PURE__ */ C(() => /* @__PURE__ */ t("div", { class: "trending-mark" }, null, -1)), ge = /* @__PURE__ */ O({
  __name: "card-box",
  props: {
    data: {}
  },
  emits: ["onClose", "submit", "onClear"],
  setup(l, { emit: H }) {
    const w = l, u = y(() => !(z(w.data.historySearchList) && z(w.data.hotSearchList)));
    return (i, c) => {
      const r = D("u-icon");
      return L((h(), v("div", ne, [
        i.data.historySearchList.length != 0 ? (h(), v("div", ie, [
          t("div", le, [
            re,
            p(b(se), {
              underline: !1,
              class: "clear",
              link: "",
              type: "primary",
              onClick: c[0] || (c[0] = (o) => i.$emit("onClear"))
            }, {
              default: f(() => [
                p(r, null, {
                  default: f(() => [
                    ce
                  ]),
                  _: 1
                }),
                E(" 清空 ")
              ]),
              _: 1
            })
          ]),
          (h(!0), v(R, null, T(i.data.historySearchList, (o, d) => (h(), X(b(ae), {
            key: d,
            type: o.type,
            closable: "",
            onClose: (m) => i.$emit("onClose", o.name),
            onClick: (m) => i.$emit("submit", o.name)
          }, {
            default: f(() => [
              E(k(o.name), 1)
            ]),
            _: 2
          }, 1032, ["type", "onClose", "onClick"]))), 128))
        ])) : N("", !0),
        b(z)(i.data.hotSearchList) ? N("", !0) : (h(), v("div", de, [
          t("div", he, [
            ue,
            p(r, { style: { margin: "0 6px" } }, {
              default: f(() => [
                ve
              ]),
              _: 1
            })
          ]),
          t("div", pe, [
            (h(!0), v(R, null, T(i.data.hotSearchList, (o, d) => (h(), v("div", {
              key: d,
              class: "hot-item",
              onClick: (m) => i.$emit("submit", o)
            }, [
              t("div", {
                class: V(["trending-rank", { "trending-rank-top": d < 3 }])
              }, k(d + 1), 3),
              t("div", _e, k(o), 1),
              me
            ], 8, fe))), 128))
          ])
        ]))
      ], 512)), [
        [K, i.data.visible && u.value]
      ]);
    };
  }
});
const ye = /* @__PURE__ */ q(ge, [["__scopeId", "data-v-d833f7f8"]]), B = (l) => (Z("data-v-df2be5d9"), l = l(), j(), l), Ce = { class: "u-search" }, we = { style: { display: "flex", "align-items": "center", "padding-left": "8px" } }, Se = /* @__PURE__ */ B(() => /* @__PURE__ */ t("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7187"
}, [
  /* @__PURE__ */ t("path", {
    d: "M344.16 960c-58.976-124.256-27.552-195.456 17.76-262.528 49.632-73.472 62.432-146.176 62.432-146.176s39.008 51.36 23.424 131.68c68.928-77.696 81.888-201.472 71.52-248.896 155.776 110.272 222.336 348.992 132.64 525.92C1129.024 686.528 770.56 277.376 708.16 231.264c20.8 46.08 24.736 124.128-17.28 161.984C619.744 120 443.84 64 443.84 64c20.8 140.928-75.392 295.008-168.16 410.144-3.264-56.192-6.72-94.976-35.872-148.736-6.56 102.08-83.552 185.28-104.416 287.552-28.256 138.496 21.152 239.904 208.832 347.008L344.16 960zM344.16 960",
    "p-id": "7188",
    fill: "#F53F3F"
  })
], -1)), Le = ["data-before", "data-after"], be = ["placeholder"], xe = { class: "btn" }, $e = /* @__PURE__ */ B(() => /* @__PURE__ */ t("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-78e17ca8": ""
}, [
  /* @__PURE__ */ t("path", {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  }),
  /* @__PURE__ */ t("path", {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  })
], -1)), ke = /* @__PURE__ */ B(() => /* @__PURE__ */ t("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "738"
}, [
  /* @__PURE__ */ t("path", {
    d: "M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z",
    "p-id": "739"
  })
], -1)), ze = /* @__PURE__ */ O({
  name: "USearch",
  __name: "search",
  props: {
    config: {}
  },
  emits: ["submit"],
  setup(l, { expose: H, emit: w }) {
    const u = l, i = g({}), c = Y(u.config, "keywords"), r = g(!1), o = g(0), d = g(!0), m = g(), M = U({
      types: ["success", "info", "warning", "danger"]
      //搜索历史tag样式
    }), e = U({
      search: u.config.search || "",
      visible: !1,
      historySearchList: S.get("searchHistory") || [],
      // 历史搜索数据
      hotSearchList: u.config.hotSearchList
    });
    A(
      () => u.config.hotSearchList,
      (s) => {
        e.hotSearchList = s;
      }
    ), A(
      () => u.config.search,
      (s) => {
        e.search = s || "";
      }
    );
    const F = y(() => {
      let s = c.value[o.value];
      return r.value || e.search ? "" : s;
    }), G = y(() => {
      let s = typeof c.value[o.value + 1] > "u" ? c.value[0] : c.value[o.value + 1];
      return r.value || e.search ? "" : s;
    }), I = y(() => {
      let s = c.value[o.value];
      return r.value ? s : "";
    }), J = y(() => !r.value && !e.search && d.value), x = (s) => {
      if (s != null && s.trim() != "") {
        let a = (n, $) => Math.round(Math.random() * ($ - n)) + n, _ = (n) => e.historySearchList.filter(($) => $.name == n).length != 0;
        if (s && e.historySearchList)
          _(s) || e.historySearchList.unshift({ name: s, type: M.types[a(0, 3)] });
        else {
          let n = r.value ? I : F;
          s = n.value, _(n.value) || e.historySearchList.unshift({ name: n.value, type: M.types[a(0, 3)] });
        }
        S.set("searchHistory", e.historySearchList);
      }
      e.search = s, i.value.focus(), w("submit", s);
    }, P = (s) => {
      e.historySearchList.findIndex((a) => a.name == s), e.historySearchList.splice(
        e.historySearchList.findIndex((a) => a.name == s),
        1
      ), S.set("searchHistory", e.historySearchList);
    }, Q = () => {
      e.historySearchList.length = 0, S.remove("searchHistory");
    }, W = (s) => {
      if (s.pseudoElement == "::after") {
        d.value = !1;
        let a = typeof c.value[o.value + 1] > "u" ? 0 : o.value + 1;
        o.value = a, setTimeout(() => {
          d.value = !0;
        }, 3e3);
      }
    };
    return H({
      close: () => e.visible = !1
    }), (s, a) => {
      const _ = D("u-icon");
      return h(), v("div", Ce, [
        t("div", {
          class: V(["search", { active: r.value }])
        }, [
          t("div", we, [
            p(_, null, {
              default: f(() => [
                Se
              ]),
              _: 1
            })
          ]),
          t("label", {
            ref_key: "labelRef",
            ref: m,
            "data-before": F.value,
            "data-after": G.value,
            class: V({ animate: J.value }),
            onAnimationend: W
          }, [
            L(t("input", {
              ref_key: "inputRef",
              ref: i,
              "onUpdate:modelValue": a[0] || (a[0] = (n) => e.search = n),
              type: "text",
              placeholder: I.value,
              onFocus: a[1] || (a[1] = () => {
                r.value = !0, e.visible = !0;
              }),
              onBlur: a[2] || (a[2] = (n) => r.value = !1),
              onKeyup: a[3] || (a[3] = ee((n) => x(e.search), ["enter"]))
            }, null, 40, be), [
              [te, e.search]
            ])
          ], 42, Le),
          t("div", xe, [
            L(p(_, {
              class: "close",
              onClick: a[4] || (a[4] = (n) => e.search = "")
            }, {
              default: f(() => [
                $e
              ]),
              _: 1
            }, 512), [
              [K, e.search]
            ]),
            t("div", {
              class: "search-btn",
              onClick: a[5] || (a[5] = (n) => x(e.search))
            }, [
              p(_, null, {
                default: f(() => [
                  ke
                ]),
                _: 1
              })
            ])
          ])
        ], 2),
        L(p(ye, {
          data: e,
          onOnClose: P,
          onOnClear: Q,
          onSubmit: x
        }, null, 8, ["data"]), [
          [b(oe), () => e.visible = !1, m.value]
        ])
      ]);
    };
  }
});
const Ve = /* @__PURE__ */ q(ze, [["__scopeId", "data-v-df2be5d9"]]), Ee = Ve;
export {
  Ee as U
};
