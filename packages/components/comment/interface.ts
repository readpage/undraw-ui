import { InjectionKey } from 'vue'
import { EmojiApi } from '../emoji/interface'

export interface CommentSubmitParam {
  content: string
  parentId: number | null
  finish: () => void
}

export interface CommentApi {
  id: number
  parentId: number | null
  uid: number
  username: string
  avatar: string
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
  getUser: (uid: number, show: Function) => void
  report: (id: number, finish: () => void) => void
  remove: (id: number, parentId: number | null, finish: () => void) => void
}

export const InjectionCommentFun: InjectionKey<(obj: CommentSubmitParam) => void> = Symbol()
export const InjectionReply: InjectionKey<ReplyParam> = Symbol()
export const InjectionContentBox: InjectionKey<ContentBoxParam> = Symbol()
