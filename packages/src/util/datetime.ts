/**
 * 人性化时间显示
 *
 * @param {Object} datetime
 */
export function formatTime(datetime: any) {
  if (datetime == null) return ''

  let time = new Date()
  let outTime = new Date(datetime)
  if (/^[0-9]\d*$/.test(datetime)) {
    outTime = new Date(parseInt(datetime))
  }

  if (time.getTime() < outTime.getTime() || time.getFullYear() != outTime.getFullYear()) {
    return parseTime(outTime, '{y}-{m}-{d} {h}:{i}')
  }

  if (time.getMonth() != outTime.getMonth()) {
    return parseTime(outTime, '{m}-{d} {h}:{i}')
  }

  if (time.getDate() != outTime.getDate()) {
    let day = outTime.getDate() - time.getDate()
    if (day == -1) {
      return parseTime(outTime, '昨天 {h}:{i}')
    }

    if (day == -2) {
      return parseTime(outTime, '前天 {h}:{i}')
    }

    return parseTime(outTime, '{m}-{d} {h}:{i}')
  }

  let diff = time.getTime() - outTime.getTime()

  if (time.getHours() != outTime.getHours() || diff > 30 * 60 * 1000) {
    return parseTime(outTime, '{h}:{i}')
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
 * @param {String} cFormat {y}-{m}-{d} {h}:{i}:{s}
 * @returns {String | null}
 */
export function parseTime(time: any, cFormat: any) {
  if (arguments.length === 0) {
    return null
  }

  let date
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'

  if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
    time = parseInt(time)
  }

  date = new Date(time)

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }

  const time_str = format.replace(/{([ymdhisa])+}/g, (result: any, key: any) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }

    return value.toString().padStart(2, '0')
  })

  return time_str
}
