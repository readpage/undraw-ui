import { App } from 'vue'
import components from './components/components'
import './base.scss'
export * from './components'

export default {
  install: (app: App) => {
    components.forEach(item => {
      app.use(item)
    })
  }
}
