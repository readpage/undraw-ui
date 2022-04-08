import { App } from "vue"
import components from "./components"
import "./base.scss"

export * from "./comment"
export * from "./dialog"
export * from "./divider"
export * from "./editor"
export * from "./fold"
export * from "./icon"
export * from "./sign"
export * from "./toast"

export default {
  install: (app: App) => {
    components.forEach(item => {
      app.use(item)
    })
  }
}