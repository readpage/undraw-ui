export function useClipboard() {
  return (text: any) => new Promise((resolve, reject) => {
    // 使用navigator对象对其他现代浏览器支持的API
    navigator.clipboard.writeText(text).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}