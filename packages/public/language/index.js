import { reactive } from 'vue'
import zh_CN from './locales/zh_CN.js'

const message = {
  zh: zh_CN
}

export const lang = reactive({
  locale: 'zh',
  messages: message
})

export const translate = (v) => {
  v = lang.locale + '.' + v
  return v.split('.').reduce((obj, key) => obj[key] || '', lang.messages)
}
