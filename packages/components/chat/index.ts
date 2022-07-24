import { withInstall } from '~/util'
import chatVue from './chat.vue'

export * from './interface'
export const UChat = withInstall(chatVue)
export default UChat
