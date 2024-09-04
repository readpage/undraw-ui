import commentVue from './src/comment.vue'

export * from './interface'
export type CommentInstance = InstanceType<typeof commentVue>
export const UComment = commentVue
export default UComment
