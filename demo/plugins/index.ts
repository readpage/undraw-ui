import { App } from 'vue'
import { animate } from './directives'

export default {
  install: (app: App<Element>) => {
    app.directive('animate', animate)
  }
}
