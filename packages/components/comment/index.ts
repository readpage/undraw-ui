import { withInstall } from '~/util'
import commentVue from './comment.vue'

export * from './interface'
export const UComment = withInstall(commentVue)
export default UComment
