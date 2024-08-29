import { EmojiApi, MentionApi, SubmitParam2Api } from '~/components'

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
  address?: string
  content: string
  likes?: number
  contentImg?: string
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
  upload?: boolean
  page?: boolean
  relativeTime?: boolean
}

export interface CommentFunApi {
  like: (id: string) => void
  showInfo: (uid: string, finish: Function) => void
  replyPage: (parentId: string, pageNum: any, pageSize: number, finish: (reply: ReplyApi) => void) => void
  submit: ({ content, parentId, reply, files, clear }: SubmitParam2Api) => void
  focus: () => void
  cancelFn: () => void
}
