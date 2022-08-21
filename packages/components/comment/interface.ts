import { InjectionKey } from 'vue'
import { EmojiApi } from '../emoji/interface'

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
  link: string
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
  replyMore: (parentId: number, closeLoad: Function) => void
  replyPage: (parentId: number, pageNum: number, pageSize: number) => void
}

export interface ContentBoxParam {
  isUserInfo: boolean
  user: UserApi
  like: (id: number) => void
  getUser: (id: number, show: Function) => void
}

export const InjectionCommentFun: InjectionKey<(obj: CommentSubmitParam) => void> = Symbol()
export const InjectionReply: InjectionKey<ReplyParam> = Symbol()
export const InjectionContentBox: InjectionKey<ContentBoxParam> = Symbol()
