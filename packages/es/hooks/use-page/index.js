/*! UndrawUi v1.1.0 */
const u = (n, l, e) => {
  let t = (n - 1) * l;
  return t + l >= e.length ? e.slice(t, e.length) : e.slice(t, t + l);
};
export {
  u
};
