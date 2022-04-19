import { InjectionKey } from 'vue'
import { withInstall } from '~/utils'
import commentVue from './comment.vue'

export interface CommentApi {
  id: number
  parentId: number | null
  avatar: string
  username: string
  content: string
  reply?: replyApi | null
}

export interface ReplyApi {
  total: number
  list: CommentApi[]
}

export interface EmojiApi {
  faceList: string[]
  emojiList: {}[]
}

export interface CommentFun {
  submit: (clear: () => void, content: string, parentId?: number) => void
}

export const InjectionCommentFun: InjectionKey<CommentFun> = Symbol()
export const InjectionEmojiApi: InjectionKey<EmojiApi> = Symbol()

export const UComment = withInstall(commentVue)
export default UComment
