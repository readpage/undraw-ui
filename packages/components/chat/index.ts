import { withInstall } from '~/util'
import chatVue from './chat.vue'

export * from './interface'
export type ChatInstance = InstanceType<typeof chatVue>
export const UChat = withInstall(chatVue)
export default UChat
