import { EmojiApi, MentionApi } from '~/components'

export interface ReplyApi {
  total: number
  list: CommentApi[]
}

export interface CommentUserApi {
  username: string
  avatar: string
  level?: number
  homeLink?: string
}

export interface CommentApi {
  id: string | number
  parentId: string | number | null
  uid: string | number
  content: string
  address?: string
  likes?: number
  createTime: string
  user: CommentUserApi
  reply?: ReplyApi | null
}

export interface UserApi {
  id: string | number
  username: string
  avatar: string
  likeIds?: string[] | number[]
}

interface ShowApi {
  form?: boolean
  content?: boolean
  level?: boolean
  likes?: boolean
  address?: boolean
  homeLink?: boolean
  reply?: boolean
}

export interface ConfigApi {
  user: UserApi
  emoji: EmojiApi
  comments: CommentApi[]
  replyShowSize?: number
  show?: ShowApi
  aTarget?: '_blank' | '_parent' | '_self' | '_top'
  mention?: MentionApi
  upload?: (files: File[], finish: (val: string[]) => void) => void
  page?: boolean
  relativeTime?: boolean
}

export interface CommentFunApi {
  like: (id: string) => void
  showInfo: (uid: string, finish: Function) => void
  replyPage: ({ parentId, pageNum, pageSize, finish }: CommentReplyPageApi) => void
  submit: ({ content, parentId, reply, clear }: CommentSubmit2Api) => void
  focus: () => void
  cancelFn: () => void
  mentionSearch: (val: string) => void
  beforeData: (val: any) => void
}

export interface CommentReplyPageApi {
  parentId: string
  pageNum: any
  pageSize: number
  finish: (reply: ReplyApi) => void
}

export interface CommentSubmitApi {
  content: string
  parentId: string | null
  finish: (comment?: CommentApi) => void
  reply?: CommentApi
  mentionList?: any[]
}

export interface CommentSubmit2Api {
  content: string
  parentId: string | null
  reply?: CommentApi
  clear: () => void
}