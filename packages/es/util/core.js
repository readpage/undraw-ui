/*! UndrawUi v1.1.0 */
const u = (o, r = 200, l = !1) => {
  let t = !1, e = null;
  const s = (...c) => new Promise((n, a) => {
    if (e && clearTimeout(e), l && !t) {
      const i = o.apply(void 0, c);
      n(i), t = !0;
    } else
      e = setTimeout(() => {
        const i = o.apply(void 0, c);
        n(i), t = !1, e = null;
      }, r);
  });
  return s.cancel = () => {
    e && clearTimeout(e), t = !1;
  }, s;
}, m = (o, r = 500) => {
  let l = 0;
  const t = (...e) => new Promise((s, c) => {
    const n = (/* @__PURE__ */ new Date()).getTime();
    if (n - l >= r) {
      const a = o.apply(void 0, e);
      s(a), l = n;
    }
  });
  return t.cancel = () => {
    l = (/* @__PURE__ */ new Date()).getTime();
  }, t;
};
export {
  u as d,
  m as t
};
