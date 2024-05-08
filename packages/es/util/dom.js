import { h as r, render as c } from "vue";
/*! UndrawUi v1.1.0 */
function a(e, t) {
  const n = r(e, t), o = document.createElement("div");
  return document.body.append(o), c(n, o), { vnode: n, div: o };
}
function m(e) {
  try {
    e && e.remove();
  } catch {
  }
}
export {
  a as c,
  m as r
};
