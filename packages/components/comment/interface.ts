import { InjectionKey } from 'vue'
import { EmojiApi } from '~/index'

export interface CommentSubmitParam {
  clear: () => void
  content: string
  parentId?: number
}

export interface CommentApi {
  id: number
  parentId: number | null
  avatar: string
  username: string
  level: number
  address: string
  content: string
  like: number
  createTime: string
  reply?: ReplyApi | null
}

export interface UserApi {
  id: number
  username: string
  avatar: string
  likes: number[]
}

export interface ReplyApi {
  total: number
  list: CommentApi[]
}

export interface ConfigApi {
  user: UserApi
  emoji: EmojiApi
  comments: CommentApi[]
}

export interface ReplyParam {
  replyMore: (parentId: number, show: Function) => void
  replyPage: (parentId: number, pageNum: number, pageSize: number) => void
}

export const InjectionCommentFun: InjectionKey<(obj: CommentSubmitParam) => void> = Symbol()
export const InjectionUserApi: InjectionKey<UserApi> = Symbol()
export const InjectionLikeFun: InjectionKey<(id: number) => void> = Symbol()
export const InjectionLinkFun: InjectionKey<() => void> = Symbol()
export const InjectionReplyMore: InjectionKey<(show: () => void) => void> = Symbol()
export const InjectionReply: InjectionKey<ReplyParam> = Symbol()
