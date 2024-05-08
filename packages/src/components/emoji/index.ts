import emojiVue from './emoji.vue'

export * from './interface'
export type EmojiInstance = InstanceType<typeof emojiVue>
export const UEmoji = emojiVue
export default UEmoji
