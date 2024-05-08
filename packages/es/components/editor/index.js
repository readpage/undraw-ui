import { defineComponent as W, ref as c, watch as Z, nextTick as G, onMounted as J, withDirectives as j, openBlock as C, createElementBlock as L, normalizeStyle as fe, withKeys as b, withModifiers as I, createVNode as B, unref as k, withCtx as pe, Fragment as Q, renderList as X, normalizeClass as Y, renderSlot as ge, createElementVNode as _, createCommentVNode as me, toDisplayString as he, vShow as q, useCssVars as we, inject as U, toRefs as _e, computed as V, onBeforeUnmount as ye, pushScopeId as xe, popScopeId as Se } from "vue";
import { i as Ce } from "../../util/isEmpty.js";
import { c as Le } from "../../util/clone-deep.js";
import { UToast as be } from "undraw-ui";
import { ElScrollbar as $e, ElEmpty as Ie } from "element-plus";
import { _ as ee } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const ke = ["onKeydown"], Me = ["onClick"], Ee = { class: "userInfo" }, Te = ["src"], He = { class: "username" }, Fe = { class: "empty" }, Re = /* @__PURE__ */ W({
  __name: "mentionList",
  props: {
    isShow: { type: Boolean, default: !1 },
    position: { default: () => ({
      left: 0,
      top: 0
    }) },
    list: { default: () => [] },
    showAvatar: { type: Boolean, default: !0 }
  },
  emits: ["insert", "changeShow"],
  setup(x, { expose: T, emit: u }) {
    const v = x, r = c(), a = c(-1), $ = c(null), g = (n) => {
      var m;
      if (a.value += n, a.value < 0 ? a.value = v.list.length - 1 : a.value >= v.list.length && (a.value = 0), r.value) {
        const f = r.value.wrapRef.children[0].children[a.value];
        if (f) {
          const l = r.value.wrapRef.offsetHeight || 0;
          (m = r.value) == null || m.setScrollTop((a.value - l / f.offsetHeight + 1) * f.offsetHeight);
        }
      }
    }, M = () => {
      if (a.value >= 0 && a.value < v.list.length)
        return v.list[a.value];
    }, H = (n) => {
      a.value = n, u("insert", v.list[a.value]), u("changeShow", !1);
    };
    Z(
      () => v.isShow,
      (n) => {
        n && (a.value = 0, G(() => {
          r.value && r.value.setScrollTop(0);
        }));
      }
    );
    const F = () => {
      a.value = 0;
    };
    return J(() => {
      var n;
      (n = $.value) == null || n.focus();
    }), T({
      moveSelection: g,
      printSelectedItem: M,
      resetSelectIndex: F
    }), (n, m) => j((C(), L("ul", {
      ref_key: "mentionList",
      ref: $,
      class: "mention-list",
      tabindex: "0",
      style: fe(`left: ${n.position.left}px; top: ${n.position.top}px`),
      onKeydown: [
        m[0] || (m[0] = b(I((f) => g(-1), ["prevent"]), ["up"])),
        m[1] || (m[1] = b(I((f) => g(1), ["prevent"]), ["down"])),
        b(I(M, ["prevent"]), ["enter"])
      ]
    }, [
      B(k($e), {
        ref_key: "scrollbarRef",
        ref: r,
        style: { padding: "10px" }
      }, {
        default: pe(() => [
          (C(!0), L(Q, null, X(n.list, (f, l) => (C(), L("li", {
            key: l,
            class: Y({ hover: l === a.value }),
            onClick: (o) => H(l)
          }, [
            ge(n.$slots, "user", {
              item: f,
              index: l
            }, () => [
              _("div", Ee, [
                n.showAvatar ? (C(), L("img", {
                  key: 0,
                  src: f.userAvatar,
                  width: "30",
                  class: "avatar"
                }, null, 8, Te)) : me("", !0),
                _("span", He, he(f.userName), 1)
              ])
            ], !0)
          ], 10, Me))), 128)),
          j(_("div", Fe, [
            B(k(Ie), { description: "暂无匹配数据" })
          ], 512), [
            [q, !n.list.length]
          ])
        ]),
        _: 3
      }, 512)
    ], 44, ke)), [
      [q, n.isShow]
    ]);
  }
});
const De = /* @__PURE__ */ ee(Re, [["__scopeId", "data-v-c67b47c1"]]), Ae = (x) => (xe("data-v-a2f98059"), x = x(), Se(), x), Ke = ["placeholder", "onKeydown", "innerHTML"], Ue = ["src"], Be = ["onClick"], Ne = /* @__PURE__ */ Ae(() => /* @__PURE__ */ _("svg", {
  "data-v-48a7e3c5": "",
  "data-v-7c7c7498": "",
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ _("rect", {
    width: "12",
    height: "12",
    rx: "2",
    fill: "#86909C"
  }),
  /* @__PURE__ */ _("path", {
    "data-v-48a7e3c5": "",
    "data-v-7c7c7498": "",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5.98095 5.49307L8.22012 3.25389C8.28521 3.18881 8.39074 3.18881 8.45582 3.25389L8.69153 3.4896C8.75661 3.55468 8.75661 3.66021 8.69153 3.7253L6.45235 5.96447L8.69153 8.20364C8.75661 8.26873 8.75661 8.37426 8.69153 8.43934L8.45582 8.67505C8.39074 8.74013 8.28521 8.74013 8.22012 8.67505L5.98095 6.43587L3.74178 8.67505C3.67669 8.74013 3.57116 8.74013 3.50608 8.67505L3.27037 8.43934C3.20529 8.37426 3.20529 8.26873 3.27037 8.20364L5.50954 5.96447L3.27037 3.7253C3.20529 3.66021 3.20529 3.55468 3.27037 3.4896L3.50608 3.25389C3.57116 3.18881 3.67669 3.18881 3.74178 3.25389L5.98095 5.49307Z",
    fill: "white"
  })
], -1)), Pe = [
  Ne
], Oe = /* @__PURE__ */ W({
  name: "UEditor",
  __name: "editor",
  props: {
    placeholder: {},
    modelValue: {},
    minHeight: { default: 30 },
    imgList: {}
  },
  emits: ["update:modelValue", "input", "focus", "blur", "submit", "paste", "changeImgListFn"],
  setup(x, { expose: T, emit: u }) {
    const v = x;
    we((e) => ({
      "3923e9fa": te.value,
      b702490a: ne.value
    }));
    const r = c(null), a = c(!1), $ = c({
      left: 0,
      top: 0
    });
    function g(e) {
      a.value = e, e || (h.value = "");
    }
    function M(e) {
      $.value = e;
    }
    function H(e) {
      r.value && r.value.moveSelection(e);
    }
    function F() {
      if (r.value)
        return r.value.printSelectedItem();
    }
    const n = U("mentionConfig"), m = U("changeMetionList"), f = U("mentionSearch"), l = c(), o = c(), N = c(), R = c(!1), E = c(!1), P = c(), { imgList: S } = _e(v), te = V(() => v.minHeight + "px"), ne = V(() => v.minHeight == 30 ? "4px 10px" : "8px 12px"), h = c("");
    Z(
      () => v.modelValue,
      (e, t) => {
        var i;
        if (R.value || (N.value = e), !((i = n == null ? void 0 : n.value) != null && i.show))
          return;
        e = e.replace(/<br>/g, ""), t = t.replace(/<br>/g, ""), (t.length >= e.length && t.slice(-1) === "@" || e.slice(-7) === "@&nbsp;") && g(!1), a.value && e.slice(-6) !== "&nbsp;" ? (h.value = e.split("@").pop() || "", h.value = h.value.replace("'", ""), console.log(h.value), f(h.value), r.value && r.value.resetSelectIndex()) : a.value && e.slice(-6) === "&nbsp;" && g(!1);
        let s = e.match(/<img [^>]*data-id="([^"]*)"[^>]*>/g);
        if (s) {
          let p = s.map((y) => {
            let w = y.match(/data-id="([^"]*)"/);
            return w ? w[1] : null;
          }), d = n.value.userArr.filter(
            (y) => p.includes(`${y[n.value.userIdKey]}`)
          );
          m(d);
        } else
          m([]);
      }
    );
    function D(e) {
      try {
        return e ? e.getRangeAt(0) : void 0;
      } catch {
      }
    }
    function le(e) {
      u("focus", e), R.value = !0, E.value = !0;
    }
    function oe(e) {
      var t;
      try {
        l.value = D(document.getSelection());
      } catch {
      }
      u("blur", e), (t = o.value) != null && t.innerHTML || (E.value = !1), R.value = !1;
    }
    function O(e) {
      H(e);
    }
    function ae(e) {
      var s;
      const { innerHTML: t } = e.target;
      if (e.data === "@" && (n != null && n.value.show)) {
        try {
          l.value = D(window.getSelection());
        } catch {
        }
        let i = (s = l.value) == null ? void 0 : s.getBoundingClientRect();
        g(!0), i && M({
          left: i.left,
          top: i.top + i.height + 10
        });
      }
      u("update:modelValue", t), u("input", e), K();
    }
    function z(e, t) {
      var i, p;
      let s = window.getSelection();
      if (s) {
        if (s.removeAllRanges(), l.value || ((i = o.value) == null || i.focus(), l.value = s.getRangeAt(0)), t && !h.value)
          l.value.startOffset > 0 && (l.value.setStart(l.value.startContainer, l.value.startOffset - 1), l.value.deleteContents());
        else if (t && h.value) {
          let y = h.value.length + 1, w = l.value.startContainer.data.lastIndexOf("@" + h.value);
          w !== -1 && (l.value.setStart(l.value.startContainer, w), l.value.setEnd(l.value.startContainer, w + y), l.value.deleteContents());
        }
        l.value.deleteContents(), l.value.insertNode(l.value.createContextualFragment(e)), l.value.collapse(!1), s.addRange(l.value), u("update:modelValue", ((p = o.value) == null ? void 0 : p.innerHTML) || "");
        const d = o.value;
        u("input", d);
      }
    }
    function se(e) {
      const t = e.clipboardData;
      if (t) {
        const s = t.getData("text/plain"), i = t.items.length > 0 ? t.items[0].getAsFile() : null;
        s ? (e.preventDefault(), document.execCommand("insertText", !1, s)) : i && (console.log(i), e.preventDefault(), u("paste", e, i));
      }
    }
    function ie() {
      o.value && (o.value.innerHTML = "", u("update:modelValue", o.value.innerHTML), E.value = !1);
    }
    function re() {
      G(() => {
        var e;
        (e = o.value) == null || e.focus();
      });
    }
    function A(e) {
      if (e) {
        let t = ve(e);
        z(`${t} `, !0);
      }
    }
    const ue = (e) => {
      if (e.ctrlKey && e.key == "Enter")
        Ce(v.modelValue.replace(/&nbsp;|<br>| /g, "")) ? be({ message: "内容不能为空", type: "info" }) : u("submit");
      else if (e.key == "Enter" && a.value) {
        e.preventDefault();
        const t = F();
        A(t), g(!1);
      }
    }, ce = (e) => {
      var t;
      (t = S == null ? void 0 : S.value) == null || t.splice(e, 1), u("changeImgListFn", Le(S == null ? void 0 : S.value));
    }, K = (e) => {
      o.value && (l.value = D(o == null ? void 0 : o.value.ownerDocument.getSelection()));
    };
    J(() => {
      o != null && o.value && o.value.addEventListener("mousemove", K);
    }), ye(() => {
      o != null && o.value && o.value.removeEventListener("mousemove", K);
    }), T({
      addText: z,
      clear: ie,
      focus: re,
      imageRef: P,
      insertUser: A,
      changeMentionShow: g
    });
    const ve = (e) => {
      const t = e[n.value.userNameKey], s = e[n.value.userIdKey], i = n.value.mentionColor || "#409eff", p = `
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <style>
        .mention-text { font: 14px 'PingFangSC-Regular', 'PingFang SC'; }
      </style>
      <text x="0" y="15" class="mention-text">@${t}</text>
    </svg>
  `, d = document.createElement("div");
      d.style.visibility = "hidden", d.innerHTML = p, document.body.appendChild(d);
      const y = d.querySelector("text");
      let w = 200;
      y && (w = y.getComputedTextLength()), document.body.removeChild(d);
      const de = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="20">
      <style>
        .mention-text { font: 14px 'PingFangSC-Regular', 'PingFang SC'; fill: ${i}; }
      </style>
      <text x="0" y="15" class="mention-text">@${t}</text>
    </svg>
  `;
      return `
    <img src="${`data:image/svg+xml,${encodeURIComponent(de).replace(/'/g, "%27").replace(/"/g, "%22")}`}" alt="@${t}" style="width:${w}px;height:20px;user-select: none;  vertical-align: sub;"
     data-userName="${t}" data-id="${s}"
     draggable="false"
    >`;
    };
    return (e, t) => {
      var s, i;
      return C(), L("div", {
        class: Y(["u-editor", { active: E.value }])
      }, [
        _("div", {
          ref_key: "editorRef",
          ref: o,
          class: "rich-input",
          contenteditable: "",
          placeholder: e.placeholder,
          onFocus: le,
          onInput: ae,
          onBlur: oe,
          onKeydown: [
            b(ue, ["enter"]),
            t[0] || (t[0] = b(I((p) => O(-1), ["prevent"]), ["up"])),
            t[1] || (t[1] = b(I((p) => O(1), ["prevent"]), ["down"]))
          ],
          onPaste: se,
          innerHTML: N.value
        }, null, 40, Ke),
        _("div", {
          ref_key: "imageRef",
          ref: P,
          class: "image-preview-box"
        }, [
          (C(!0), L(Q, null, X(k(S), (p, d) => (C(), L("div", {
            key: d,
            class: "image-preview"
          }, [
            _("img", {
              src: p,
              alt: ""
            }, null, 8, Ue),
            _("div", {
              class: "clean-btn",
              onClick: (y) => ce(d)
            }, Pe, 8, Be)
          ]))), 128))
        ], 512),
        B(De, {
          ref_key: "metionList",
          ref: r,
          "is-show": a.value,
          position: $.value,
          list: (s = k(n)) == null ? void 0 : s.userArr,
          "show-avatar": (i = k(n)) == null ? void 0 : i.showAvatar,
          onInsert: A,
          onChangeShow: g
        }, null, 8, ["is-show", "position", "list", "show-avatar"])
      ], 2);
    };
  }
});
const ze = /* @__PURE__ */ ee(Oe, [["__scopeId", "data-v-a2f98059"]]), Xe = ze;
export {
  Xe as U
};
