import { InjectionKey } from 'vue'

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

export interface EmojiApi {
  faceList: string[]
  emojiList: {}[]
}

export const InjectionCommentFun: InjectionKey<(obj: CommentSubmitParam) => void> = Symbol()
export const InjectionEmojiApi: InjectionKey<EmojiApi> = Symbol()
export const InjectionUserApi: InjectionKey<UserApi> = Symbol()
export const InjectionLikeFun: InjectionKey<(id: number) => void> = Symbol()
export const InjectionLinkFun: InjectionKey<() => void> = Symbol()
