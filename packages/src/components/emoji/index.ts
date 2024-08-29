import emojiVue from './emoji.vue'

export type * from './emoji.vue'
export type EmojiInstance = InstanceType<typeof emojiVue>
export const UEmoji = emojiVue
export default UEmoji
