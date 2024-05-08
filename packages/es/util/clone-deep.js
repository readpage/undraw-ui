/*! UndrawUi v1.1.0 */
function r(e) {
  if (typeof e != "object" || e === null)
    return e;
  let n;
  if (Array.isArray(e)) {
    n = [];
    for (let t = 0; t < e.length; t++)
      n[t] = r(e[t]);
  } else if (e instanceof Date)
    n = new Date(e.getTime());
  else if (e instanceof RegExp)
    n = new RegExp(e.source, e.flags);
  else {
    n = {};
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (n[t] = r(e[t]));
  }
  return n;
}
export {
  r as c
};
