import { withInstall } from '~/utils'
import chatVue from './chat.vue'

export interface ChatApi {
  username: string
  avatar: string
  content: string
  self?: boolean
}

export const UChat = withInstall(chatVue)
export default UChat
