import chatVue from './chat.vue'

export * from './interface'
export type ChatInstance = InstanceType<typeof chatVue>
export const UChat = chatVue
export default UChat
