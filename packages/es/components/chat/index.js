import { _ as b, U as B } from "../anchor/index.js";
import { defineComponent as x, inject as V, ref as h, openBlock as u, createElementBlock as f, createVNode as i, unref as l, withCtx as m, createElementVNode as e, Fragment as T, renderList as q, normalizeClass as U, toDisplayString as A, createCommentVNode as D, nextTick as N, pushScopeId as M, popScopeId as j, provide as R, withKeys as K, createTextVNode as L } from "vue";
import { UIcon as I, UEmoji as F } from "undraw-ui";
import { ElScrollbar as P, ElAvatar as H, ElInput as G, ElButton as J } from "element-plus";
import { u as O } from "../../hooks/use-emoji/index.js";
import { I as S, U as Q } from "../comment/index.js";
import { U as W } from "../comment-nav/index.js";
import { U as X } from "../comment-scroll/index.js";
import { U as Y } from "../counter/index.js";
import { U as Z } from "../dialog/index.js";
import { U as e1 } from "../divider/index.js";
import { U as t1 } from "../editor/index.js";
import { U as z } from "../emoji/index.js";
import { U as o1 } from "../fold/index.js";
import { U as s1 } from "../icon/index.js";
import { U as a1 } from "../notice-bar/index.js";
import { U as l1 } from "../search/index.js";
import { U as n1 } from "../toast/index.js";
import { w as i1 } from "../../util/install.js";
/*! UndrawUi v1.1.0 */
const $ = (s) => (M("data-v-8c8b7d7d"), s = s(), j(), s), c1 = { class: "message" }, r1 = { class: "chat-list" }, d1 = /* @__PURE__ */ $(() => /* @__PURE__ */ e("img", { src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" }, null, -1)), m1 = { class: "content" }, p1 = {
  key: 0,
  class: "username"
}, u1 = ["innerHTML"], f1 = /* @__PURE__ */ $(() => /* @__PURE__ */ e("div", { class: "date" }, null, -1)), _1 = /* @__PURE__ */ x({
  __name: "message",
  props: {
    data: {},
    userId: {}
  },
  setup(s, { expose: p }) {
    const { allEmoji: g } = V(S), r = h();
    return p({
      scroll: () => {
        N(() => {
          const n = document.querySelector(".chat-item:last-child");
          r.value.setScrollTop(n.offsetTop);
        });
      }
    }), (n, w) => (u(), f("div", c1, [
      i(l(P), {
        ref_key: "scrollbarRef",
        ref: r
      }, {
        default: m(() => [
          e("div", r1, [
            (u(!0), f(T, null, q(n.data, (d, _) => (u(), f("div", {
              key: _,
              class: U([{ self: n.userId == d.id }, "chat-item"])
            }, [
              e("div", null, [
                i(l(H), null, {
                  default: m(() => [
                    d1
                  ]),
                  _: 1
                })
              ]),
              e("div", m1, [
                n.userId != d.id ? (u(), f("div", p1, A(d.username), 1)) : D("", !0),
                e("div", {
                  class: "card-box",
                  innerHTML: l(O)(l(g), d.content)
                }, null, 8, u1)
              ]),
              f1
            ], 2))), 128))
          ])
        ]),
        _: 1
      }, 512)
    ]));
  }
});
const h1 = /* @__PURE__ */ b(_1, [["__scopeId", "data-v-8c8b7d7d"]]), v = (s) => (M("data-v-43183f1f"), s = s(), j(), s), v1 = { class: "u-chat" }, g1 = { class: "header" }, U1 = /* @__PURE__ */ v(() => /* @__PURE__ */ e("svg", {
  viewBox: "0 0 1318 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ e("path", {
    d: "M1318.502489 432.779052c0-231.790522-209.29842-419.704826-467.458992-419.704826s-467.56979 188.357498-467.56979 419.704826 209.409219 419.704826 467.56979 419.704826a512.110799 512.110799 0 0 0 183.482363-33.239559l93.292361 93.292361a25.816057 25.816057 0 0 0 44.319412-19.168145L1165.822116 742.350141C1259.336074 665.56676 1318.502489 555.433023 1318.502489 432.779052z",
    fill: "#612273",
    "p-id": "10993"
  }),
  /* @__PURE__ */ e("path", {
    d: "M1034.304263 745.784895a509.673231 509.673231 0 0 1-183.482363 33.239559c-244.532352 0-445.077689-168.524562-465.353819-383.25211-1.107985 12.07704-1.883575 24.264878-1.883575 36.563514 0 231.790522 209.409219 419.704826 467.56979 419.704826a512.110799 512.110799 0 0 0 183.482363-33.239559l93.292361 93.292361a25.816057 25.816057 0 0 0 44.319411-19.168145 25.262064 25.262064 0 0 0-7.5343-17.284571zM1165.822116 669.223112l2.769964 70.689461C1260.44406 663.239991 1318.502489 553.992642 1318.502489 432.779052a366.632331 366.632331 0 0 0-1.883575-36.785111 403.971435 403.971435 0 0 1-150.796798 273.229171z",
    fill: "#612273",
    opacity: ".2",
    "p-id": "10994"
  }),
  /* @__PURE__ */ e("path", {
    d: "M383.25211 432.779052a383.141311 383.141311 0 0 1 41.881844-172.956503c-12.298637-0.997187-24.81887-1.661978-37.449903-1.661978C173.510496 258.160571 0 413.943302 0 606.178749c0 101.713049 48.97295 193.011037 126.421121 256.609392l-5.761524 148.470028a12.187838 12.187838 0 0 0 20.830124 9.08548l94.06795-93.957153A425.577148 425.577148 0 0 0 387.79485 954.196927a404.636226 404.636226 0 0 0 300.37481-128.304696c-177.831638-59.388011-304.91755-212.733175-304.91755-393.113179z",
    fill: "#EB3D72",
    "p-id": "10995"
  }),
  /* @__PURE__ */ e("path", {
    d: "M342.256654 391.672798c0 117.557239 53.958883 223.59143 140.714132 299.71002a391.008007 391.008007 0 0 1-99.718676-258.603766 383.141311 383.141311 0 0 1 41.881844-172.956503c-12.298637-0.997187-24.81887-1.661978-37.449903-1.661978-7.091106 0-14.071413 0-21.05172 0.553993a375.939407 375.939407 0 0 0-24.375677 132.958234zM630.111231 802.181346a407.627786 407.627786 0 0 1-283.533434 110.798528 424.136767 424.136767 0 0 1-152.12638-27.699632l-71.686647 71.686648-2.105173 54.291279a12.187838 12.187838 0 0 0 20.830124 9.08548l94.06795-93.957153A425.577148 425.577148 0 0 0 387.79485 954.196927a404.636226 404.636226 0 0 0 300.37481-128.304696 486.294741 486.294741 0 0 1-58.058429-23.710885zM85.425665 821.792686l-5.761523-4.985934c1.883575 2.215971 3.656351 4.431941 5.650725 6.647911z",
    fill: "#EB3D72",
    opacity: ".5",
    "p-id": "10996"
  }),
  /* @__PURE__ */ e("path", {
    d: "M833.426531 332.395585c64.263147-10.193465 64.041549-66.479117 62.601169-75.342999s-15.400995-54.291279-59.942004-47.200173S799.078987 254.836615 799.078987 254.836615a28.475222 28.475222 0 1 0 56.174854-8.97468s6.315516 3.323956 8.30989 20.27613-11.966241 29.029214-35.455529 33.239559-88.638823-19.943735-104.039819-115.452067C709.110582 96.39472 781.57282 28.253625 838.966457 13.185025a55.399264 55.399264 0 0 0-64.041549-5.318329c-56.064055 35.123134-97.170309 109.579745-85.536464 182.817571 14.957801 93.846354 79.664142 151.904783 144.038087 141.711318zM203.980091 573.825579a53.072495 53.072495 0 0 0 33.90435-67.919498c-2.659165-6.537113-21.162519-38.225492-53.51569-25.040467a30.026401 30.026401 0 0 0-19.832936 40.773858 22.159706 22.159706 0 1 0 40.773858-16.619779s5.318329 1.329582 9.861069 13.739017-3.988747 24.043281-21.05172 31.023588-70.02467 0.553993-98.832288-68.695087C68.916685 417.599654 110.798528 353.558104 151.904783 332.395585a42.879031 42.879031 0 0 0-48.97295 7.423502 146.918849 146.918849 0 0 0-32.574767 152.458775c27.810431 68.141095 86.866046 100.605064 133.623025 81.547717z",
    fill: "#FED150",
    "p-id": "10997"
  })
], -1)), w1 = /* @__PURE__ */ v(() => /* @__PURE__ */ e("div", { style: { "margin-left": "12px" } }, [
  /* @__PURE__ */ e("div", null, "聊天室"),
  /* @__PURE__ */ e("div", { style: { "font-size": "12px" } }, "当前2人在线")
], -1)), y1 = {
  id: "chat-footer",
  class: "footer"
}, E1 = /* @__PURE__ */ v(() => /* @__PURE__ */ e("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7186"
}, [
  /* @__PURE__ */ e("path", {
    d: "M510.944 960c-247.04 0-448-200.96-448-448s200.992-448 448-448c247.008 0 448 200.96 448 448S757.984 960 510.944 960zM510.944 128c-211.744 0-384 172.256-384 384 0 211.744 172.256 384 384 384 211.744 0 384-172.256 384-384C894.944 300.256 722.688 128 510.944 128zM512 773.344c-89.184 0-171.904-40.32-226.912-110.624-10.88-13.92-8.448-34.016 5.472-44.896 13.888-10.912 34.016-8.48 44.928 5.472 42.784 54.688 107.136 86.048 176.512 86.048 70.112 0 134.88-31.904 177.664-87.552 10.784-14.016 30.848-16.672 44.864-5.888 14.016 10.784 16.672 30.88 5.888 44.864C685.408 732.32 602.144 773.344 512 773.344zM368 515.2c-26.528 0-48-21.472-48-48l0-64c0-26.528 21.472-48 48-48s48 21.472 48 48l0 64C416 493.696 394.496 515.2 368 515.2zM656 515.2c-26.496 0-48-21.472-48-48l0-64c0-26.528 21.504-48 48-48s48 21.472 48 48l0 64C704 493.696 682.496 515.2 656 515.2z",
    "p-id": "7187"
  })
], -1)), C1 = /* @__PURE__ */ v(() => /* @__PURE__ */ e("svg", {
  viewBox: "0 0 1025 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15072"
}, [
  /* @__PURE__ */ e("path", {
    d: "M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714286-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857143-105.714286-138.285714 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571429-2.285714-10.857143-4-17.428571-13.428571t-6.571429-20.857143l0-199.428571 493.714286-605.142857-610.857143 528.571429-225.714286-92.571429q-21.142857-8-22.857143-31.428571-1.142857-22.857143 18.285714-33.714286l950.857143-548.571429q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z",
    "p-id": "15073"
  })
], -1)), I1 = /* @__PURE__ */ x({
  name: "UChat",
  __name: "chat",
  props: {
    data: {},
    userId: {},
    emoji: {}
  },
  emits: ["submit"],
  setup(s, { emit: p }) {
    const g = s, r = h(!1), c = h(""), n = h(), w = (t) => {
      const { ctrlKey: o, key: a } = t;
      o && a == "Enter" && _();
    }, d = () => {
      c.value = "", n.value.scroll();
    }, _ = () => {
      let t = c.value;
      t.trim() ? (t = t.replace(/\n/g, "<br/>"), p("submit", { clear: d, content: t })) : n1({ type: "error", message: "内容不能为空" });
    }, k = (t) => {
      let o = document.getElementById("emojiInput"), a = o.selectionStart, y = o.selectionEnd, E = o.value;
      if (a === null || y === null)
        return;
      let C = E.substring(0, a) + t + E.substring(y);
      o.value = C, o.focus(), o.selectionStart = a + t.length, o.selectionEnd = a + t.length, c.value = C;
    };
    return R(S, g.emoji), (t, o) => (u(), f("div", v1, [
      e("div", {
        class: U([{ active: r.value }, "chat-container translate"])
      }, [
        e("div", g1, [
          i(l(I), { size: "32" }, {
            default: m(() => [
              U1
            ]),
            _: 1
          }),
          w1
        ]),
        i(h1, {
          ref_key: "messageRef",
          ref: n,
          data: t.data,
          "user-id": t.userId
        }, null, 8, ["data", "user-id"]),
        e("div", y1, [
          i(l(G), {
            id: "emojiInput",
            modelValue: c.value,
            "onUpdate:modelValue": o[0] || (o[0] = (a) => c.value = a),
            type: "textarea",
            autosize: { minRows: 1, maxRows: 4 },
            placeholder: "请输入内容",
            onKeydown: K(w, ["enter"])
          }, null, 8, ["modelValue", "onKeydown"]),
          i(l(F), {
            style: { margin: "0 8px 0" },
            emoji: t.emoji,
            placement: "top-end",
            onAddEmoji: k
          }, {
            default: m(() => [
              E1
            ]),
            _: 1
          }, 8, ["emoji"]),
          i(l(I), {
            size: "18",
            class: U([{ "submit-btn": c.value.trim() != "" }, "select-none cursor-pointer"]),
            style: { "padding-bottom": "5px" },
            onClick: _
          }, {
            default: m(() => [
              C1
            ]),
            _: 1
          }, 8, ["class"])
        ])
      ], 2),
      i(l(J), {
        class: "chat-btn",
        onClick: o[1] || (o[1] = (a) => r.value = !r.value)
      }, {
        default: m(() => [
          L("chat")
        ]),
        _: 1
      })
    ]));
  }
});
const z1 = /* @__PURE__ */ b(I1, [["__scopeId", "data-v-43183f1f"]]), b1 = z1, x1 = [
  B,
  b1,
  Q,
  W,
  X,
  Y,
  Z,
  e1,
  t1,
  z,
  o1,
  s1,
  a1,
  z,
  l1
], J1 = (s) => {
  x1.forEach((p) => {
    s.use(i1(p));
  });
};
export {
  b1 as U,
  J1 as i
};
