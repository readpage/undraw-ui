import commentVue from './src/comment.vue'

export type * from './interface'
export type * from './src/comment.vue'
export type CommentInstance = InstanceType<typeof commentVue>
export const UComment = commentVue
export default UComment
