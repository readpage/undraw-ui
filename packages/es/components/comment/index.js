import { defineComponent as Z, ref as x, reactive as re, inject as H, withDirectives as Le, openBlock as n, createElementBlock as u, createVNode as b, unref as e, normalizeClass as K, createElementVNode as o, toDisplayString as C, createCommentVNode as _, createBlock as V, withCtx as $, createTextVNode as le, nextTick as ye, h as te, pushScopeId as de, popScopeId as ue, renderSlot as Q, computed as ie, Fragment as pe, renderList as me, watch as xe, toRefs as $e, provide as T, useSlots as Ie, mergeProps as Be } from "vue";
import { ElButton as _e, ClickOutside as Se, ElPopover as ze, ElAvatar as ke, ElImage as Me, ElPagination as Pe } from "element-plus";
import { UEditor as He, UEmoji as Ee, translate as B, UToast as Ve, UIcon as ee, UFold as je } from "undraw-ui";
import { i as ne, a as oe } from "../../util/isEmpty.js";
import { c as Re, i as Te, s as A } from "../../util/basic.js";
import { _ as W } from "../anchor/index.js";
import { u as Fe } from "../../hooks/use-emoji/index.js";
import { u as Ue } from "../../hooks/use-level/index.js";
import { d as Ae } from "../../util/core.js";
/*! UndrawUi v1.1.0 */
const Ne = (f) => (de("data-v-f495b82e"), f = f(), ue(), f), Oe = { class: "comment-box" }, Ze = {
  key: 0,
  class: "action-box"
}, De = /* @__PURE__ */ Ne(() => /* @__PURE__ */ o("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon"
}, [
  /* @__PURE__ */ o("path", {
    "data-v-48a7e3c5": "",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14 1.3335C14.3514 1.3335 14.6394 1.60546 14.6648 1.95041L14.6666 2.00016V14.0002C14.6666 14.3516 14.3947 14.6396 14.0497 14.665L14 14.6668H1.99998C1.64853 14.6668 1.36059 14.3949 1.33514 14.0499L1.33331 14.0002V2.00016C1.33331 1.64871 1.60527 1.36077 1.95023 1.33532L1.99998 1.3335H14ZM13.3333 2.66618H2.66664V13.3328H13.3333V2.66618ZM11.9219 6.7879C11.9719 6.83791 12 6.90574 12 6.97647V11.7993C12 11.9098 11.9104 11.9993 11.8 11.9993H6.81615C6.7975 11.9993 6.77945 11.9968 6.76232 11.992L3.91042 11.9847C3.79996 11.9844 3.71063 11.8947 3.7109 11.7842C3.71102 11.7313 3.73209 11.6807 3.76948 11.6433L6.52468 8.88807C6.62882 8.78393 6.79766 8.78393 6.9018 8.88807L8.17297 10.1593L11.5447 6.7879C11.6489 6.68376 11.8177 6.68376 11.9219 6.7879ZM5.99997 3.99951V5.99951H3.99997V3.99951H5.99997Z"
  })
], -1)), qe = { class: "btn-box" }, Ge = /* @__PURE__ */ Z({
  __name: "input-box",
  props: {
    placeholder: {},
    contentBtn: {},
    parentId: {},
    reply: {},
    cancelBtn: {}
  },
  emits: ["hide", "close"],
  setup(f, { expose: p, emit: t }) {
    const c = f, k = x(""), m = x(!1), w = x(!0), g = x(), j = x(), I = x(), S = x([]), z = x([]), F = re({
      imgLength: 0
    }), l = (r) => {
      z.value = r;
    }, v = (r) => {
      ne(k.value.replace(/&nbsp;|<br>| /g, "")) ? w.value = !0 : w.value = !1;
    }, { upload: L, submit: N, focus: U } = H(Ce), O = H(he), D = () => {
      N({
        content: c.reply && c.parentId != c.reply.id ? `回复 <span style="color: var(--u-color-success-dark-2);">@${c.reply.user.username}:</span> ${k.value}` : k.value,
        parentId: oe(c.parentId, null),
        reply: c.reply,
        files: z.value,
        clear: () => {
          M(), t("close");
        }
      });
    }, q = H("cancelFn"), s = () => {
      M(), t("close"), q();
    }, M = () => {
      g.value.clear(), S.value.length = 0, z.value = [], w.value = !0;
    };
    function P(r) {
      ne(k.value) && !F.imgLength && (m.value = !1, t("hide", r));
    }
    function R() {
      m.value = !0, ye(() => {
        j.value = document.querySelector("div[id^='el-popper-container']");
      }), U();
    }
    function ae() {
      console.log(g.value);
    }
    p({
      focus: () => {
        var r;
        return (r = g.value) == null ? void 0 : r.focus();
      },
      changeMentionShow: (r) => {
        var a;
        return (a = g.value) == null ? void 0 : a.changeMentionShow(r);
      },
      AddMention: ae
    });
    const X = (r, a) => {
      var h;
      a || (S.value.length = 0, z.value.length = 0);
      const d = a ? [a] : (h = I.value) == null ? void 0 : h.files;
      if (F.imgLength = oe(d == null ? void 0 : d.length, 0), d)
        for (let y = 0; y < d.length; y++) {
          let E = d[y].name, G = Re(d[y]);
          z.value.push(d[y]), Te(E) ? S.value.push(G) : Ve({ type: "warn", message: "请选择图片类型文件!", duration: 2500 });
        }
    }, Y = H(se), i = () => te("div", Y.func());
    return (r, a) => Le((n(), u("div", Oe, [
      b(e(He), {
        ref_key: "editorRef",
        ref: g,
        modelValue: k.value,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => k.value = d),
        class: K({ "input-active": m.value }),
        placeholder: c.placeholder,
        "min-height": 64,
        "img-list": S.value,
        onClick: a[1] || (a[1] = () => m.value = !0),
        onFocus: R,
        onInput: v,
        onSubmit: D,
        onPaste: X,
        onChangeImgListFn: l
      }, null, 8, ["modelValue", "class", "placeholder", "img-list"]),
      m.value ? (n(), u("div", Ze, [
        b(e(Ee), {
          emoji: e(O),
          onAddEmoji: a[2] || (a[2] = (d) => {
            var h;
            return (h = g.value) == null ? void 0 : h.addText(d);
          })
        }, null, 8, ["emoji"]),
        e(L) ? (n(), u("div", {
          key: 0,
          class: "picture",
          onClick: a[3] || (a[3] = //@ts-ignore
          (...d) => {
            var h, y;
            return ((h = I.value) == null ? void 0 : h.click) && ((y = I.value) == null ? void 0 : y.click(...d));
          })
        }, [
          De,
          o("span", null, C(e(B)("comment.upload")), 1),
          o("input", {
            id: "comment-upload",
            ref_key: "inputRef",
            ref: I,
            type: "file",
            multiple: "",
            onChange: X
          }, null, 544)
        ])) : _("", !0),
        e(Y).func ? (n(), V(i, { key: 1 })) : _("", !0),
        o("div", qe, [
          b(e(_e), {
            type: "primary",
            disabled: w.value,
            onClick: D
          }, {
            default: $(() => [
              le(C(c.contentBtn), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          c.cancelBtn ? (n(), V(e(_e), {
            key: 0,
            onClick: s
          }, {
            default: $(() => [
              le(C(c.cancelBtn), 1)
            ]),
            _: 1
          })) : _("", !0)
        ])
      ])) : _("", !0)
    ])), [
      [e(Se), P, j.value]
    ]);
  }
});
const we = /* @__PURE__ */ W(Ge, [["__scopeId", "data-v-f495b82e"]]), ge = /* @__PURE__ */ Z({
  __name: "user-card",
  props: {
    uid: {}
  },
  setup(f) {
    const p = x({}), { showInfo: t } = H(ve), c = H(se), k = () => te("div", c.card(p.value));
    return (m, w) => e(c).card ? (n(), V(e(ze), {
      key: 0,
      placement: "top",
      width: 300,
      "show-after": 300,
      onBeforeEnter: w[0] || (w[0] = () => e(t)(m.uid, (g) => p.value = g))
    }, {
      reference: $(() => [
        Q(m.$slots, "default")
      ]),
      default: $(() => [
        b(k)
      ]),
      _: 3
    })) : Q(m.$slots, "default", { key: 1 });
  }
}), fe = (f) => (de("data-v-c2f3a4ad"), f = f(), ue(), f), Je = { class: "comment-sub" }, Ke = ["href", "target"], Qe = { key: 0 }, We = {
  key: 1,
  src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
}, Xe = { class: "comment-primary" }, Ye = { class: "comment-main" }, et = { class: "user-info" }, tt = ["href", "target"], nt = { class: "username" }, ot = {
  class: "name",
  style: { "max-width": "10em" }
}, st = {
  key: 0,
  blank: "true",
  class: "rank"
}, at = {
  key: 0,
  class: "address",
  style: { color: "#939393", "font-size": "12px" }
}, lt = { class: "time" }, it = { class: "content" }, ct = ["innerHTML"], rt = {
  class: "imgbox",
  style: { display: "flex" }
}, dt = { class: "action-box select-none" }, ut = /* @__PURE__ */ fe(() => /* @__PURE__ */ o("svg", {
  t: "1650360973068",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1168",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ o("path", {
    d: "M547.968 138.88c6.656-4.672 14.08-6.976 20.48-5.056 6.08 1.792 22.848 10.752 40.192 56.128 8.576 22.4 27.264 81.536-5.632 197.504a45.44 45.44 0 0 0 42.88 57.984l217.6 3.008h0.448a53.12 53.12 0 0 1 20.096 3.328 16.256 16.256 0 0 1 5.568 3.648 14.464 14.464 0 0 1 3.264 6.4c2.176 7.808 4.608 33.984-0.256 77.248-4.672 41.984-15.936 97.408-38.784 162.368-19.136 54.336-43.52 100.48-81.472 161.792a56.384 56.384 0 0 0-1.664 2.496l-0.128 0.128-1.408 2.112a7.872 7.872 0 0 1-1.28 1.472 3.84 3.84 0 0 1-1.28 0.64 20.48 20.48 0 0 1-6.848 0.96H356.032V421.44c19.712-10.624 40.704-24.576 62.592-47.616 25.472-26.88 51.008-64.768 78.208-121.6 5.568-11.584 9.856-24.384 13.632-36.032l3.072-9.856c2.688-8.448 5.184-16.384 8.064-24.32 8.064-22.4 16.128-36.032 26.368-43.136z m120.96 27.968c-20.48-53.44-48-84.736-81.984-94.912-33.6-9.984-61.952 4.16-76.032 14.08-27.584 19.264-41.28 49.6-50.048 74.048-3.392 9.344-6.464 19.2-9.216 27.968l-2.688 8.448a227.84 227.84 0 0 1-10.432 27.904c-25.28 52.928-47.36 84.544-66.752 104.96-18.944 19.968-36.48 30.464-55.168 39.808a45.376 45.376 0 0 0-25.088 40.576l-0.064 480.64c0 24.96 20.224 45.248 45.184 45.248h423.04c21.76 0 38.144-6.912 50.048-16.96a71.808 71.808 0 0 0 14.528-16.896l0.128-0.256 0.128-0.128 0.832-0.96 1.152-1.92c39.424-63.872 66.816-114.688 88.256-175.68a810.24 810.24 0 0 0 42.048-176.64c5.12-45.632 3.776-81.664-1.6-101.376a77.952 77.952 0 0 0-45.568-52.288 116.544 116.544 0 0 0-45.44-8.64l-192.768-2.688c28.096-115.072 10.048-181.568-2.496-214.336z m-604.864 247.04a45.184 45.184 0 0 1 45.12-47.296h67.008c24.96 0 45.184 20.288 45.184 45.248v480.64c0 24.96-20.224 45.12-45.184 45.12H131.84a45.184 45.184 0 0 1-45.12-43.072l-22.656-480.64z",
    "p-id": "1169"
  })
], -1)), pt = /* @__PURE__ */ fe(() => /* @__PURE__ */ o("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1534"
}, [
  /* @__PURE__ */ o("path", {
    d: "M668.928 166.912c-20.48-53.504-47.9744-84.7872-82.0224-94.9248-33.5872-10.0352-61.952 4.096-76.032 13.9776-27.5456 19.3536-41.216 49.664-50.0224 74.1376-3.3792 9.3184-6.4512 19.0976-9.216 27.9552l-2.6624 8.3968a227.8912 227.8912 0 0 1-10.3936 27.9552c-25.344 52.9408-47.4112 84.5312-66.7648 104.96-18.944 19.968-36.4544 30.464-55.1936 39.7824a45.3632 45.3632 0 0 0-25.088 40.5504l-0.1024 480.7168c0 24.9344 20.2752 45.2096 45.2096 45.2096h423.0656c21.7088 0 38.144-6.912 50.0224-16.9984a72.192 72.192 0 0 0 14.4896-16.896l0.2048-0.2048 0.0512-0.1536 0.8192-1.024 1.2288-1.8944c39.424-63.7952 66.7648-114.688 88.2176-175.616 24.4224-69.4784 36.8128-129.6896 42.0352-176.64 5.12-45.6704 3.7888-81.664-1.5872-101.376a77.9776 77.9776 0 0 0-45.568-52.3264 116.5824 116.5824 0 0 0-45.4144-8.6016l-192.8192-2.6624c28.1088-115.0976 10.0864-181.6064-2.4576-214.3744zM64.0512 413.9008a45.2096 45.2096 0 0 1 45.1584-47.36H176.128c24.9344 0 45.2096 20.2752 45.2096 45.2096v480.6144a45.2096 45.2096 0 0 1-45.2096 45.2096h-44.288a45.2096 45.2096 0 0 1-45.1584-43.0592L64 413.952z",
    "p-id": "1535"
  })
], -1)), mt = { key: 2 }, ft = /* @__PURE__ */ fe(() => /* @__PURE__ */ o("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1320",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ o("path", {
    d: "M147.264 647.296V220.928c0-49.536 40.128-89.728 89.6-89.728H793.6c49.536 0 89.728 40.192 89.728 89.728v426.368c0 49.536-40.128 89.728-89.6 89.728h-145.216a47.04 47.04 0 0 0-28.16 9.408l-194.56 145.792a3.392 3.392 0 0 1-5.12-1.984l-26.752-116.672a47.04 47.04 0 0 0-45.824-36.544H236.992a89.728 89.728 0 0 1-89.728-89.728zM236.864 64A156.928 156.928 0 0 0 80 220.928l0.064 426.368a156.928 156.928 0 0 0 156.928 156.928h94.976l23.232 101.312 0.064 0.448a70.592 70.592 0 0 0 109.696 40.832l190.208-142.592H793.6a156.928 156.928 0 0 0 156.928-156.928l-0.064-426.368A156.928 156.928 0 0 0 793.536 64H236.928z m69.44 442.496a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z m268.8-65.344a65.344 65.344 0 1 1-130.752 0 65.344 65.344 0 0 1 130.752 0z m138.368 65.344a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z",
    "p-id": "1321"
  })
], -1)), vt = { key: 0 }, ht = /* @__PURE__ */ Z({
  __name: "content-box",
  props: {
    reply: { type: Boolean },
    data: {},
    id: {}
  },
  setup(f) {
    const p = f, t = re({
      active: !1
    }), c = x(), k = x(), m = ie(() => {
      let s = p.data.contentImg;
      return ne(s) ? [] : s == null ? void 0 : s.split("||");
    }), { allEmoji: w } = H(he), { like: g, user: j, aTarget: I, showLevel: S, showLikes: z, showAddress: F, showHomeLink: l, showReply: v } = H(
      ve
    );
    function L() {
      t.active = !t.active, t.active && ye(() => {
        var s;
        (s = c.value) == null || s.focus();
      });
    }
    function N(s) {
      var P;
      const M = s.target;
      (P = k.value) != null && P.contains(M) || (t.active = !1);
    }
    const U = H(se), O = () => te("div", U.info(p.data)), D = () => te("div", U.operate(p.data)), q = ie(() => Fe(w, p.data.content));
    return (s, M) => (n(), u("div", {
      class: K(["comment", { reply: p.reply }])
    }, [
      o("div", Je, [
        b(ge, {
          uid: e(A)(s.data.uid)
        }, {
          default: $(() => [
            o("a", {
              href: s.data.user.homeLink,
              target: e(I),
              class: K([{ "pointer-events-none": !e(l) }, "no-underline"]),
              style: { display: "block" }
            }, [
              b(e(ke), {
                style: { "margin-top": "5px" },
                size: 40,
                fit: "cover",
                src: s.data.user.avatar
              }, {
                default: $(() => [
                  s.data.user.avatar ? (n(), u("span", Qe, C(s.data.user.username), 1)) : (n(), u("img", We))
                ]),
                _: 1
              }, 8, ["src"])
            ], 10, Ke)
          ]),
          _: 1
        }, 8, ["uid"])
      ]),
      o("div", Xe, [
        o("div", Ye, [
          o("div", et, [
            b(ge, {
              uid: e(A)(s.data.uid)
            }, {
              default: $(() => [
                o("a", {
                  href: s.data.user.homeLink,
                  target: e(I),
                  class: K([{ "pointer-events-none": !e(l) }, "no-underline"]),
                  style: { display: "block" }
                }, [
                  o("div", nt, [
                    o("span", ot, C(s.data.user.username), 1),
                    e(S) ? (n(), u("span", st, [
                      b(e(ee), {
                        size: "24",
                        innerHTML: e(Ue)(s.data.user.level || 1)
                      }, null, 8, ["innerHTML"])
                    ])) : _("", !0)
                  ])
                ], 10, tt)
              ]),
              _: 1
            }, 8, ["uid"]),
            e(F) ? (n(), u("span", at, "   " + C(s.data.address), 1)) : _("", !0),
            e(U).info ? (n(), V(O, { key: 1 })) : _("", !0),
            o("time", lt, C(s.data.createTime), 1)
          ]),
          o("div", it, [
            b(e(je), { unfold: "" }, {
              default: $(() => [
                o("div", { innerHTML: q.value }, null, 8, ct),
                o("div", rt, [
                  (n(!0), u(pe, null, me(m.value, (P, R) => (n(), V(e(Me), {
                    key: R,
                    src: P,
                    style: { height: "72px", padding: "8px 4px" },
                    lazy: "",
                    "preview-src-list": m.value,
                    "initial-index": R
                  }, null, 8, ["src", "preview-src-list", "initial-index"]))), 128))
                ])
              ]),
              _: 1
            })
          ]),
          o("div", dt, [
            e(z) ? (n(), u("div", {
              key: 0,
              class: "item",
              onClick: M[0] || (M[0] = (P) => e(g)(e(A)(s.data.id)))
            }, [
              e(j).likeIds && e(j).likeIds.map(String).indexOf(e(A)(s.data.id)) == -1 ? (n(), V(e(ee), { key: 0 }, {
                default: $(() => [
                  ut
                ]),
                _: 1
              })) : (n(), V(e(ee), {
                key: 1,
                color: "#1e80ff"
              }, {
                default: $(() => [
                  pt
                ]),
                _: 1
              })),
              s.data.likes != 0 ? (n(), u("span", mt, C(s.data.likes), 1)) : _("", !0)
            ])) : _("", !0),
            e(v) ? (n(), u("div", {
              key: 1,
              ref_key: "btnRef",
              ref: k,
              class: K(["item", { active: t.active }]),
              onClick: L
            }, [
              b(e(ee), null, {
                default: $(() => [
                  ft
                ]),
                _: 1
              }),
              o("span", null, C(t.active ? e(B)("comment.cancelReply") : e(B)("comment.reply")), 1)
            ], 2)) : _("", !0),
            e(U).operate ? (n(), V(D, { key: 2 })) : _("", !0)
          ]),
          t.active ? (n(), u("div", vt, [
            b(we, {
              ref_key: "commentRef",
              ref: c,
              "parent-id": e(A)(s.id),
              placeholder: `${e(B)("comment.placeholder2")}@${s.data.user.username}...`,
              reply: s.data,
              "content-btn": e(B)("comment.contentBtn2"),
              style: { "margin-top": "12px" },
              onHide: N,
              onClose: M[1] || (M[1] = (P) => t.active = !1)
            }, null, 8, ["parent-id", "placeholder", "reply", "content-btn"])
          ])) : _("", !0)
        ]),
        Q(s.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
});
const be = /* @__PURE__ */ W(ht, [["__scopeId", "data-v-c2f3a4ad"]]), _t = (f) => (de("data-v-b799e014"), f = f(), ue(), f), gt = {
  key: 0,
  class: "reply-box"
}, yt = { class: "reply-list" }, kt = {
  key: 0,
  class: "fetch-more"
}, wt = { key: 0 }, bt = { key: 1 }, Ct = { key: 0 }, Lt = /* @__PURE__ */ _t(() => /* @__PURE__ */ o("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: ""
}, [
  /* @__PURE__ */ o("path", {
    "data-v-d6f79dbc": "",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5.99976 7.93206L10.0656 3.86619C10.1633 3.76856 10.3215 3.76856 10.4192 3.86619L10.7727 4.21975C10.8704 4.31738 10.8704 4.47567 10.7727 4.5733L6.35331 8.99272C6.15805 9.18798 5.84147 9.18798 5.6462 8.99272L1.22679 4.5733C1.12916 4.47567 1.12916 4.31738 1.22679 4.21975L1.58034 3.86619C1.67797 3.76856 1.83626 3.76856 1.93389 3.86619L5.99976 7.93206Z"
  })
], -1)), xt = {
  key: 1,
  class: "fetch-more"
}, $t = /* @__PURE__ */ Z({
  __name: "reply-box",
  props: {
    data: {},
    id: {}
  },
  setup(f) {
    const p = f, t = re({
      loading: !1,
      over: !1,
      currentPage: 1,
      pageSize: 5
    }), { replyPage: c, replyShowSize: k, comments: m } = H(ce), { page: w } = H(ce), g = ie(() => {
      let l = {
        total: 0,
        length: 0,
        list: []
      };
      if (p.data) {
        let v = p.data.list.length;
        l = {
          total: p.data.total,
          length: v,
          list: p.data.list
        };
      }
      if (!t.over) {
        let v = l.list.slice(0, k);
        l.list = v;
      }
      return w && (l.list = l.list.slice(0, t.pageSize)), l;
    });
    xe(
      () => {
        var l;
        return (l = p.data) == null ? void 0 : l.total;
      },
      (l) => {
        if (l) {
          let v = Math.ceil(l / t.pageSize), L = t.currentPage > v ? v : t.currentPage;
          L = L < 1 ? 1 : L, t.currentPage != L && S(L);
        }
      }
    );
    const j = () => {
      t.over = !0;
    }, I = (l) => {
      m.value.forEach((v) => {
        v.id == p.id && v.reply && (v.reply = l);
      });
    }, S = (l) => {
      console.log(l), t.currentPage = l, c(p.id, l, t.pageSize, (v) => I(v));
    }, z = (l) => {
      S(l);
    }, F = (l) => {
      t.pageSize = l, c(p.id, t.currentPage, l, (v) => I(v));
    };
    return (l, v) => g.value.length > 0 ? (n(), u("div", gt, [
      o("div", yt, [
        (n(!0), u(pe, null, me(g.value.list, (L, N) => (n(), V(be, {
          id: l.id,
          key: N,
          data: L,
          reply: ""
        }, null, 8, ["id", "data"]))), 128)),
        g.value.length > e(k) ? (n(), u("div", kt, [
          t.loading ? (n(), u("span", wt, C(e(B)("comment.more.loading")), 1)) : (n(), u("div", bt, [
            t.over ? _("", !0) : (n(), u("div", Ct, [
              o("span", {
                class: "fetch-more-comment select-none",
                onClick: j
              }, [
                le(C(e(B)("comment.more.prefixTotal")) + C(g.value.total) + C(e(B)("comment.more.suffixTotal")) + " ", 1),
                Lt
              ])
            ]))
          ]))
        ])) : _("", !0),
        t.over && e(w) ? (n(), u("div", xt, [
          b(e(Pe), {
            small: "",
            "hide-on-single-page": "",
            layout: "total, prev, pager, next",
            total: g.value.total,
            "current-page": t.currentPage,
            "page-size": t.pageSize,
            onCurrentChange: z,
            onSizeChange: F
          }, null, 8, ["total", "current-page", "page-size"])
        ])) : _("", !0)
      ])
    ])) : _("", !0);
  }
});
const It = /* @__PURE__ */ W($t, [["__scopeId", "data-v-b799e014"]]), Bt = {
  key: 0,
  class: "comment-list"
}, St = /* @__PURE__ */ Z({
  __name: "comment-list",
  props: {
    data: {}
  },
  setup(f) {
    return (p, t) => p.data ? (n(), u("div", Bt, [
      (n(!0), u(pe, null, me(p.data, (c) => (n(), V(be, {
        id: e(A)(c.id),
        key: e(A)(c.id),
        data: c
      }, {
        default: $(() => [
          b(It, {
            id: e(A)(c.id),
            data: c.reply
          }, null, 8, ["id", "data"])
        ]),
        _: 2
      }, 1032, ["id", "data"]))), 128))
    ])) : _("", !0);
  }
});
const zt = /* @__PURE__ */ W(St, [["__scopeId", "data-v-33d8416e"]]), Mt = { class: "u-comment" }, Pt = {
  key: 0,
  class: "comment-form"
}, Ht = { class: "header" }, Et = { class: "header-title" }, Vt = { class: "content" }, jt = { class: "avatar-box" }, Rt = { key: 0 }, Tt = {
  key: 1,
  src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
}, Ft = {
  key: 1,
  class: "comment-list-wrapper"
}, Ut = { class: "title" }, At = /* @__PURE__ */ Z({
  name: "UComment",
  __name: "comment",
  props: {
    config: {},
    page: { type: Boolean, default: !1 },
    upload: { type: Boolean, default: !1 },
    relativeTime: { type: Boolean }
  },
  emits: ["submit", "like", "replyPage", "showInfo", "focus", "cancel", "getMentionList", "mentionSearch"],
  setup(f, { expose: p, emit: t }) {
    const c = f, {
      user: k,
      comments: m,
      replyShowSize: w,
      aTarget: g,
      showForm: j = !0,
      showContent: I = !0,
      showLevel: S = !0,
      showLikes: z = !0,
      showAddress: F = !0,
      showHomeLink: l = !0,
      showReply: v = !0,
      mentionConfig: L
    } = $e(c.config), N = ({ content: i, parentId: r, reply: a, files: d, clear: h }) => {
      const y = (E) => {
        if (h(), E)
          if (r) {
            let G = m.value.find((J) => J.id == r);
            if (G) {
              let J = G.reply;
              J ? (J.list.unshift(E), J.total++) : G.reply = {
                total: 1,
                list: [E]
              };
            }
          } else
            m.value.unshift(E);
      };
      t("submit", { content: i, parentId: r, reply: a, files: d, mentionList: R.value, finish: y });
    }, U = {
      upload: c.upload,
      submit: N,
      focus: () => t("focus")
    };
    T(Ce, U), T("cancelFn", () => t("cancel"));
    const O = (i, r) => {
      let a = null;
      m.value.forEach((d) => {
        var h;
        if (d.id == i)
          a = d;
        else {
          let y = (h = d.reply) == null ? void 0 : h.list.find((E) => E.id == i);
          y && (a = y);
        }
      }), a && !ne(a.likes) && (a.likes += r);
    }, q = {
      user: k,
      like: (i) => {
        const r = c.config.user.likeIds;
        r && t("like", i, () => {
          if (r.findIndex((a) => a == i) == -1)
            r.push(i), O(i, 1);
          else {
            let a = r.findIndex((d) => d == i);
            a != -1 && (r.splice(a, 1), O(i, -1));
          }
        });
      },
      showInfo: (i, r) => t("showInfo", i, r),
      aTarget: oe(g, "_blank"),
      showLevel: S,
      showLikes: z,
      showAddress: F,
      showHomeLink: l,
      showReply: v
    };
    T(ve, q);
    const s = {
      page: c.page,
      replyPage: (i, r, a, d) => {
        t("replyPage", { parentId: i, pageNum: r, pageSize: a, finish: d });
      },
      replyShowSize: oe(w == null ? void 0 : w.value, 3),
      comments: m
    };
    T(ce, s);
    const M = (i) => {
      const { parentId: r, id: a } = i;
      if (r) {
        let d = m.value.find((y) => y.id == r), h = d == null ? void 0 : d.reply;
        if (h) {
          let y = h.list.findIndex((E) => E.id == a);
          y != -1 && (h.list.splice(y, 1), h.total--);
        }
      } else {
        let d = m.value.findIndex((h) => h.id == a);
        d != -1 && m.value.splice(d, 1);
      }
    }, P = x(null), R = x([]);
    function ae(i) {
      R.value = i;
    }
    function X() {
      return R.value;
    }
    const Y = Ae((i) => {
      t("mentionSearch", i);
    }, 300);
    return T(he, c.config.emoji), T("mentionConfig", L), T(se, Ie()), T("changeMetionList", ae), T("mentionSearch", Y), p({
      remove: M,
      mentionList: R,
      getMentionList: X,
      setMentionShow: (i) => {
        P.value.setMentionShow(i);
      }
    }), (i, r) => (n(), u("div", Mt, [
      e(j) ? (n(), u("div", Pt, [
        Q(i.$slots, "header", {}, () => [
          o("div", Ht, [
            o("span", Et, C(e(B)("comment.headerTitle")), 1)
          ])
        ], !0),
        o("div", Vt, [
          o("div", jt, [
            b(e(ke), {
              size: 40,
              src: i.config.user.avatar
            }, {
              default: $(() => [
                i.config.user.username ? (n(), u("span", Rt, C(i.config.user.username), 1)) : (n(), u("img", Tt))
              ]),
              _: 1
            }, 8, ["src"])
          ]),
          b(we, Be(i.$attrs, {
            ref_key: "inputBox",
            ref: P,
            placeholder: e(B)("comment.placeholder"),
            "content-btn": e(B)("comment.contentBtn")
          }), null, 16, ["placeholder", "content-btn"])
        ])
      ])) : _("", !0),
      e(I) ? (n(), u("div", Ft, [
        Q(i.$slots, "default", {}, () => [
          o("div", Ut, C(e(B)("comment.title")), 1)
        ], !0),
        b(zt, { data: e(m) }, null, 8, ["data"])
      ])) : _("", !0)
    ]));
  }
});
const Nt = /* @__PURE__ */ W(At, [["__scopeId", "data-v-fb5f55e9"]]), se = Symbol(), Ce = Symbol(), ve = Symbol(), ce = Symbol(), he = Symbol(), Xt = Nt;
export {
  he as I,
  Xt as U,
  se as a,
  Ce as b,
  ve as c,
  ce as d
};
