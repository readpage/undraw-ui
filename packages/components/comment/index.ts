import { withInstall } from '~/utils'
import commentVue from './comment.vue'

export * from './interface'
export const UComment = withInstall(commentVue)
export default UComment
