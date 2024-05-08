/*! UndrawUi v1.1.0 */
function s(r) {
  const a = new FormData();
  return Object.keys(r).forEach((t) => {
    const e = r[t];
    Array.isArray(e) ? e.forEach((n, o) => a.append(t + `[${o}]`, n)) : a.append(t, r[t]);
  }), a;
}
function c(r) {
  return Object.keys(r).filter((a) => r[a] !== null && r[a] !== void 0).reduce((a, t) => ({ ...a, [t]: r[t] }), {});
}
export {
  c as r,
  s as t
};
