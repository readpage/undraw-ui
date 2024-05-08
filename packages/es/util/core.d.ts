/**
 * 函数节流（throttle）与 函数防抖（debounce）都是为了限制函数的执行频次，
 * 以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象。
 *
 * 防抖的应用场景很多:
 * 输入框中频繁的输入内容，搜索或者提交信息
 * 频繁的点击按钮，触发某个事件
 * 监听浏览器滚动事件，完成某些特定操作
 * 用户缩放浏览器的resize事件
 *
 * 监听页面的滚动事件；
 * 鼠标移动事件；
 * 用户频繁点击按钮操作；
 * 游戏中的一些设计；
 *
 *
 * 节流的应用场景:
 * 鼠标连续不断地触发某事件（如点击），只在单位时间内只触发一次；
 */
/**
 * 防抖
 * 在持续触发事件中，无论进行时间多长，只有一定时间内没有再触发事件，事件才会执行一次
 * 如果设定的时间到来之前，又一次触发了事件，就重新开始延时
 * @param fn 执行的函数
 * @param delay 延迟执行时间(s)
 * @param immedidate 是否立即执行
 * @returns
 */
declare const debounce: (fn: (...args: any) => void, delay?: number, immedidate?: boolean) => {
    (...args: any): Promise<unknown>;
    cancel(): void;
};
/**
 * 节流
 * 当持续触发事件时，保证一定时间段内只调用一次事件处理函数
 * @param fn 执行的函数
 * @param interval 间隔时间(s)
 * @returns
 */
declare const throttle: (fn: (...args: any) => void, interval?: number) => {
    (...args: any): Promise<unknown>;
    cancel(): void;
};
export { debounce, throttle };
