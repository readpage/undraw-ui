/*! UndrawUi v1.1.0 */
const o = (t) => t ? "localStorage" : "sessionStorage", n = (t, e, s = !0) => {
  (e === "" || e === null || e === void 0) && (e = null), window[o(s)].setItem(t, JSON.stringify(e));
}, c = (t, e = !0) => {
  let s;
  const r = window[o(e)].getItem(t);
  return r && (s = JSON.parse(r)), s;
}, a = (t, e = !0) => {
  window[o(e)].removeItem(t);
}, i = (t = !0) => {
  window[o(t)].clear();
}, g = {
  set: n,
  get: c,
  remove: a,
  clear: i
};
export {
  n as a,
  i as c,
  c as g,
  a as r,
  g as s
};
