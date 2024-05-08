/*! UndrawUi v1.1.0 */
const o = (r, e) => {
  const n = /\[.+?\]/g;
  return e = e.replace(n, (t) => {
    const i = r[t];
    return i ? [
      '<img src="',
      i,
      '" width="20" height="20" alt="',
      t,
      '" title="',
      t,
      '" style="margin: 0 1px; vertical-align: text-bottom"',
      "/>"
    ].join("") : t;
  }), e;
};
export {
  o as u
};
