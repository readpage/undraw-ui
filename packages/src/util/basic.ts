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