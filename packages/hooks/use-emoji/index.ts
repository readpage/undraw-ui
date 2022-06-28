export const useEmojiParse = (emojiList: {}[], val: string): string => {
  //解析表情
  const reg = /\[.+?\]/g
  val = val.replace(reg, (str: any) => {
    let src = ''
    emojiList.map((item: any) => {
      if (item[str]) {
        src = item[str]
      }
    })
    return "<img src= '" + src + "' width='24' height='24' style='margin: 0 1px; vertical-align: text-bottom'/>"
  })
  return val
}
