type UnitType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'ms'
export class Time {
  public value: Date = new Date()

  constructor(...params: any) {
    //@ts-ignore
    this.value = formatTime(new Date(...params))
  }
  
  add(n: number, unit: UnitType) {
    let date = new Date(this.value)
    const table = {
      ms: 1,
      second: 1000,
      minute: 1000 * 60,
      hour: 1000 * 60 * 60,
      day: 1000 * 60 * 60 * 24,
      week: 1000 * 60 * 60 * 24 * 7
    }
    if (unit === 'year') {
      date.setFullYear(date.getFullYear() + n)
    } else if (unit === 'month') {
      date.setMonth(date.getMonth() + n)
    } else {
      // @ts-ignore
      date = new Date(date - 0 + table[unit] * n)
    }
    return formatTime(date)
  }

  /**
   * 
   * @param {String} v y-m-d h:i:s 
   * @returns 
   */
  format(v?: any) {
    return formatTime(this.value, v)
  }

  toString() {
    return `${this.value}`
  }
}

/**
 * 人性化时间显示
 *
 * @param {Object} datetime
 */
export function humanTime(datetime: any) {
  if (datetime == null) return ''

  let time = new Date()
  let outTime = new Date(datetime)
  if (/^[0-9]\d*$/.test(datetime)) {
    outTime = new Date(parseInt(datetime))
  }

  if (time.getTime() < outTime.getTime() || time.getFullYear() != outTime.getFullYear()) {
    return formatTime(outTime, 'y-m-d h:i')
  }

  if (time.getMonth() != outTime.getMonth()) {
    return formatTime(outTime, 'm-d h:i')
  }

  if (time.getDate() != outTime.getDate()) {
    let day = outTime.getDate() - time.getDate()
    if (day == -1) {
      return formatTime(outTime, '昨天 h:i')
    }

    if (day == -2) {
      return formatTime(outTime, '前天 h:i')
    }

    return formatTime(outTime, 'm-d h:i')
  }

  let diff = time.getTime() - outTime.getTime()

  if (time.getHours() != outTime.getHours() || diff > 30 * 60 * 1000) {
    return formatTime(outTime, 'h:i')
  }

  let minutes = outTime.getMinutes() - time.getMinutes()
  if (minutes == 0) {
    return '刚刚'
  }

  minutes = Math.abs(minutes)
  return `${minutes}分钟前`
}

/**
 * 时间格式化方法
 *
 * @param {(Object|string|number)} time
 * @param {String} cFormat y-m-d h:i:s
 * @returns {String | null}
 */
export function formatTime(time: any, cFormat?: any) {
  if (arguments.length === 0) {
    return null
  }

  let date = new Date(time)
  const format = cFormat || 'y-m-d h:i:s'

  if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
    time = parseInt(time)
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }

  const time_str = format.replace(/([ymdhisa])+/g, (result: any, key: any) => {
    // @ts-ignore
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }

    return value.toString().padStart(2, '0')
  })

  return time_str
}

/**
 * 当前时间状态
 */
export const timeState = () => {
  // 获取当前时间
  let now = new Date()
  // 获取当前小时
  let hours = now.getHours()
  // 设置默认文字
  let msg = '晚上好!'
  if (hours >= 0 && hours < 6) {
    msg = '凌晨好!'
  } else if (hours < 9) {
    msg = '早上好!'
  } else if (hours < 12) {
    msg = '上午好!'
  } else if (hours < 14) {
    msg = '中午好!'
  } else if (hours < 17) {
    msg = '下午好!'
  } else if (hours < 19) {
    msg = '傍晚好!'
  }
  return msg
}

// 获取指定月份的第一天
export function getFirstDayOfMonth(v?: Date) {
  var date = v ? new Date(v) : new Date()
	var year = date.getFullYear()
	var month = date.getMonth()
  return new Time(year, month, 1)
}

// 获取指定月份的最后一天
export function getLastDayOfMonth(v?: Date) {
  var date = v ? new Date(v) : new Date()
	var year = date.getFullYear()
	var month = date.getMonth()
  return new Time(year, month + 1, 0)
}