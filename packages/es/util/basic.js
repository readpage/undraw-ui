/*! UndrawUi v1.1.0 */
const i = (e) => e == null ? "" : String(e);
function s(e) {
  let t = ["png", "jpg", "jpeg", "gif", "webp", "svg"], n = e.lastIndexOf("."), r = e.substring(n + 1);
  return t.indexOf(r.toLowerCase()) != -1;
}
function w(e) {
  return window.URL ? window.URL.createObjectURL(e) : window.webkitURL ? window.webkitURL.createObjectURL(e) : "";
}
export {
  w as c,
  s as i,
  i as s
};
