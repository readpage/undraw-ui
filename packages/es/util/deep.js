import { a, c as o } from "./isEmpty.js";
import { c as h } from "./clone-deep.js";
import "vue";
/*! UndrawUi v1.1.0 */
function u(n, t = { parentId: "parentId", children: "children" }) {
  let l = a(t.parentId, "parentId"), d = a(t.children, "children");
  n = h(n);
  const i = [], p = {};
  return n.forEach((r) => p[r.id] = r), n.forEach((r) => {
    const c = p[r[l]];
    c ? (c[d] || (c[d] = [])).push(r) : i.push(r);
  }), i;
}
function m(n = [], t = { parentId: "parentId", children: "children" }) {
  let l = a(t.parentId, "parentId"), d = a(t.children, "children");
  const i = [], p = (r, c) => {
    r.forEach((e) => {
      e.id || (e.id = c++), e[l] = c, i.push(e), e[d] && o(e[d]) && p(e[d], e.id);
    });
  };
  return p(n || [], null), i;
}
const D = (n, t = 1 / 0) => n.flat(t);
export {
  u as d,
  D as f,
  m as r
};
