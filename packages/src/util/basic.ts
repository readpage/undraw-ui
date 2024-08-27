/**
 * 转换字符串，为null转换为空字符串
 * @param val
 * @returns
 */
export const str = <T>(val: T) => {
  if (val == null) {
    return ''
  }
  return String(val)
}

/**
 * 判断是否是图片类型
 * @param filePath
 * @returns
 */
export function isImage(filePath: string) {
  let type = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg']
  // 获取最后一个.的位置
  let index = filePath.lastIndexOf('.')
  //获取后缀
  let suffix = filePath.substring(index + 1)
  return type.indexOf(suffix.toLowerCase()) != -1
}

//获取文件url
export function createObjectURL(blob: any) {
  if (window.URL) {
    return window.URL.createObjectURL(blob)
  } else if (window.webkitURL) {
    return window.webkitURL.createObjectURL(blob)
  } else {
    return ''
  }
}

/**
 * 移动元素位置
 * @param array 数组
 * @param oldIndex 旧索引
 * @param newIndex 新索引
 * @returns
 */
export const moveElement = (array: any[], oldIndex: number, newIndex: number) => {
  // 获取元素
  let element = array[oldIndex]
  // 从旧索引位置删除元素
  array.splice(oldIndex, 1)
  // 插入到新索引位置
  array.splice(newIndex, 0, element)
  return array
}

/**
 * 根据对象数组中某一属性的值删除
 * @returns
 */
export const removeByValue = (arr: any[], attr: string, value: any) => {
  let index = null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][attr] == value) {
      index = i
      break
    }
  }
  if (index != null) {
    arr.splice(index, 1)
  }
}

/**
 * 创建自然数组
 * @param start
 * @param end
 * @returns
 */
export function createNaturalNumArr(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

/**
 * 返回像素
 * @param val
 * @returns
 */
export const toPx = (val: any) => {
  if (isNaN(val) || val == null) {
    return val
  } else {
    return val + 'px'
  }
}

export function mergeObject(target: any, source: any) {
  for (const key in source) {
    if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
