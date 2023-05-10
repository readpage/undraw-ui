import { EmojiApi } from '../emoji/interface'

export interface CommentApi {
  id: string | number
  parentId: string | number | null
  uid: string | number
  address: string
  content: string
  likes: number
  contentImg?: string
  createTime: string
  user: CommentUserApi
  reply?: ReplyApi | null
}

export interface ReplyApi {
  total: number
  list: CommentApi[]
}

export interface CommentUserApi {
  username: string
  avatar: string
  level: number
  homeLink: string
}

export interface UserApi {
  id: string | number
  username: string
  avatar: string
  likeIds: string[] | number[]
}

export interface ConfigApi {
  user: UserApi
  emoji: EmojiApi
  comments: CommentApi[]
  total: number
  showSize?: number
  replyShowSize?: number
  tools?: string[]
}

export interface SubmitParamApi {
  content: string
  parentId: string | null
  files?: any[]
  replyUid?: string | null
  finish: (comment: CommentApi) => void
}

export interface ReplyPageParamApi {
  parentId: string
  pageNum: number
  pageSize: number
  finish: (reply: ReplyApi) => void
}