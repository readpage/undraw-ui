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
 *
 *
 * @param fn 执行的函数
 * @param delay 延迟执行时间(s)
 * @param immedidate 是否立即执行
 * @returns
 *
 * 用法:
 * (1) 定义函数初始化
 * const _debounce = debounce(() => {
 * console.log('防抖...')
 * })
 *
 * 执行:
 * _debounce() 开启， _debounce.cancel() 取消
 */

const debounce = (fn: (...args: any) => void, delay = 200, immedidate = false) => {
  let isInvoke = false // 是否已经执行了一次
  let timer: any = null
  const _debounce = (...args: any) => {
    return new Promise((resolve, reject) => {
      // 清除上一次的执行
      if (timer) clearTimeout(timer)

      // 判断是否需要立即执行
      if (immedidate && !isInvoke) {
        const result = fn.apply(this, args)
        resolve(result)
        isInvoke = true
      } else {
        // 延迟fn函数的执行
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          resolve(result)
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }
  _debounce.cancel = () => {
    if (timer) clearTimeout(timer)
    isInvoke = false
  }

  return _debounce
}

/**
 * 节流
 * 当持续触发事件时，保证一定时间段内只调用一次事件处理函数
 * @param fn 执行的函数
 * @param interval 间隔时间(s)
 * @returns
 *
 * 用法:
 * (1) 定义函数初始化
 * const _throttle = throttle(() => {
 * console.log('节流...')
 * })
 *
 * 执行:
 * _throttle() 开启，_throttle.cancel() 取消
 */

const throttle = (fn: (...args: any) => void, interval = 500) => {
  let lastTime = 0

  const _throttle = (...args: any) => {
    return new Promise((resolve, reject) => {
      // 获取当前事件触发的时间
      const nowTime = new Date().getTime()

      // 使用当前触发的时间和之前的时间间隔以及上一次开始的时间，
      // 计算出还剩余多长事件需要去触发函数
      if (nowTime - lastTime >= interval) {
        // 触发函数
        const result = fn.apply(this, args)
        resolve(result)
        // 保留上一次触发的时间
        lastTime = nowTime
      }
    })
  }
  _throttle.cancel = () => {
    lastTime = new Date().getTime()
  }
  return _throttle
}

/**
 * 定时器 支持(多次)执行切换开启/关闭
 * @param fn 执行的函数
 * @param interval 执行间隔 秒(s)
 * @param immedidate 是否立即执行
 * @returns
 * 用法:
 * (1) 定义函数初始化
 * const task = interval(() => {
 * console.log('定时器正在运行...')
 * })
 *
 * 执行:
 * task() 开启， 再次执行task() 关闭 或使用 task.close()关闭
 */
const interval = (fn: (...args: any) => void, interval = 1000, immedidate = false) => {
  let timer: any = null
  const _interval = (...args: any) => {
    if (!timer) {
      if (immedidate) {
        fn.apply(this, args)
      }
      timer = setInterval(() => {
        fn.apply(this, args)
      }, interval)
    } else {
      _interval.close()
    }
  }
  _interval.close = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }
  return _interval
}

function UUID() {
  // 优先使用原生 crypto.randomUUID()（Chrome 49+, Safari 16.4+）
  if (typeof crypto?.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  // 降级：crypto.getRandomValues（iOS Safari 6+, Android 4.4+）
  const bytes = crypto.getRandomValues(new Uint8Array(16))
  bytes[6] = (bytes[6] & 0x0f) | 0x40 // 设置版本位 (v4)
  bytes[8] = (bytes[8] & 0x3f) | 0x80 // 设置变体位
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'))
  return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`
}

export { debounce, throttle, interval, UUID }
