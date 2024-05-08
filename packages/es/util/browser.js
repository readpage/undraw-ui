/*! UndrawUi v1.1.0 */
function h() {
  const { clientWidth: o } = document.documentElement, e = navigator.userAgent.toLowerCase();
  let a = (e.match(/firefox|chrome|safari|opera/g) || "other")[0];
  (e.match(/msie|trident/g) || [])[0] && (a = "msie");
  let i = "";
  "ontouchstart" in window || e.indexOf("touch") !== -1 || e.indexOf("mobile") !== -1 ? e.indexOf("ipad") !== -1 ? i = "pad" : e.indexOf("mobile") !== -1 ? i = "mobile" : e.indexOf("android") !== -1 ? i = "androidPad" : i = "pc" : i = "pc";
  let t = "";
  switch (a) {
    case "chrome":
    case "safari":
    case "mobile":
      t = "webkit";
      break;
    case "msie":
      t = "ms";
      break;
    case "firefox":
      t = "Moz";
      break;
    case "opera":
      t = "O";
      break;
    default:
      t = "webkit";
      break;
  }
  const c = e.indexOf("android") > 0 ? "android" : navigator.platform.toLowerCase();
  let s = "full";
  o < 768 ? s = "xs" : o < 992 ? s = "sm" : o < 1200 ? s = "md" : o < 1920 ? s = "xl" : s = "full";
  const f = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), l = (e.match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1], n = i === "pc", r = !n, d = s === "xs" || r, m = window.innerHeight + "px";
  return {
    version: l,
    type: a,
    plat: c,
    tag: i,
    prefix: t,
    isMobile: r,
    isIOS: f,
    isPC: n,
    isMini: d,
    screen: s,
    innerHeight: m
  };
}
export {
  h as u
};
