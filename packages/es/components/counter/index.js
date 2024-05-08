import { defineComponent as g, reactive as S, computed as i, onMounted as x, openBlock as F, createElementBlock as D, toDisplayString as w } from "vue";
import { _ as v } from "../anchor/index.js";
/*! UndrawUi v1.1.0 */
const y = /* @__PURE__ */ g({
  name: "UCounter",
  __name: "counter",
  props: {
    startAmount: { default: 0 },
    endAmount: { default: 0 },
    duration: { default: 3 },
    autoinit: { type: Boolean, default: !0 },
    prefix: { default: "" },
    suffix: { default: "" },
    separator: { default: "," },
    decimalSeparator: { default: "." },
    decimals: { default: 0 }
  },
  emits: ["finished"],
  setup(m, { emit: s }) {
    const e = m, t = S({
      // 时间戳
      timestamp: 0,
      startTimestamp: 0,
      currentAmount: 0,
      currentStartAmount: 0,
      currentDuration: 0,
      paused: !1,
      // 剩下的
      remaining: 0,
      // 动画帧
      animationFrame: 0
    }), c = () => e.endAmount > e.startAmount, d = i(() => {
      const r = /(\d+)(\d{3})/;
      let n = t.currentAmount.toFixed(e.decimals);
      n += "";
      let u = n.split("."), a = u[0], f = u.length > 1 ? e.decimalSeparator + u[1] : "", _ = !isNaN(parseFloat(e.separator));
      if (e.separator && !_)
        for (; r.test(a); )
          a = a.replace(r, "$1" + e.separator + "$2");
      return a + f;
    }), l = i(() => `${e.prefix}${d.value}${e.suffix}`);
    x(() => {
      t.currentAmount = e.startAmount, t.currentStartAmount = e.startAmount, t.currentDuration = e.duration * 1e3, t.remaining = e.duration * 1e3, e.autoinit ? p() : t.paused = !0;
    });
    const p = () => {
      A(), t.currentStartAmount = e.startAmount, t.startTimestamp = 0, t.currentDuration = e.duration * 1e3, t.paused = !1, t.animationFrame = window.requestAnimationFrame(o);
    }, A = () => {
      t.animationFrame && window.cancelAnimationFrame(t.animationFrame);
    }, o = (r) => {
      t.timestamp = r, t.startTimestamp || (t.startTimestamp = r);
      let n = r - t.startTimestamp;
      t.remaining = t.currentDuration - n, c() ? (t.currentAmount = t.currentStartAmount + (e.endAmount - t.currentStartAmount) * (n / t.currentDuration), t.currentAmount = t.currentAmount > e.endAmount ? e.endAmount : t.currentAmount) : (t.currentAmount = t.currentStartAmount - (t.currentStartAmount - e.endAmount) * (n / t.currentDuration), t.currentAmount = t.currentAmount < e.endAmount ? e.endAmount : t.currentAmount), n < t.currentDuration ? t.animationFrame = window.requestAnimationFrame(o) : s("finished");
    };
    return (r, n) => (F(), D("span", null, w(l.value), 1));
  }
});
const h = /* @__PURE__ */ v(y, [["__scopeId", "data-v-10d41305"]]), b = h;
export {
  b as U
};
