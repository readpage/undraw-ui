import { withInstall } from '~/util'
import emojiVue from './emoji.vue'

export * from './interface'
export const UEmoji = withInstall(emojiVue)
export default UEmoji
