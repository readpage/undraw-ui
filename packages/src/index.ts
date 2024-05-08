import { App } from 'vue'
// import { translate } from './util/lang'

import './styles/index.scss'
// const install = (app: App) => {
//   components.forEach(item => {
//     app.use(item)
//   })

//   app.config.globalProperties.$u = translate
// }
// export { install }
// export default {
//   install
// }

export * from './components'
export * from './hooks'
export * from './util'
import { install } from './components'

export default {
  install
}