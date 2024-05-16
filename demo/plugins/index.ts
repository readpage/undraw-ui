import { App } from 'vue'
export * from './day'
import { animate } from './directives'

export default {
  install: (app: App<Element>) => {
    app.directive('animate', animate)
  }
}
