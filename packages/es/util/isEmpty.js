/*! UndrawUi v1.1.0 */
function n(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Object.prototype.toString.call(t) === "[object Array]";
}
function i(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function e(t) {
  return !isNaN(Number(t));
}
function s(t) {
  return typeof t == "function";
}
function c(t) {
  return typeof t == "string";
}
function u(t) {
  return typeof t == "boolean";
}
function o(t) {
  return n(t) ? t.length === 0 : i(t) ? Object.keys(t).length === 0 : t === "" || t === void 0 || t === null;
}
const f = (t, r) => o(t) ? r : t;
export {
  f as a,
  e as b,
  n as c,
  i as d,
  s as e,
  c as f,
  u as g,
  o as i
};
