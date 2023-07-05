import { ReplyApi } from '~/components'
import { InjectionKey, Ref } from 'vue'
import { CommentApi, ReplyPageParamApi, UserApi } from './interface'

export const InjectItemSlot = Symbol()
export const InjectSlots = Symbol()

// 输入框
export interface SubmitParam2Api {
  content: string
  parentId: string | null
  replyId?: string | null
  reply?: CommentApi
  files?: any[]
  clear: () => void
}
export interface InjectInputBoxApi {
  upload: boolean
  submit: ({ content, parentId, files, clear }: SubmitParam2Api) => void
  focus: () => void
}
export const InjectInputBox: InjectionKey<InjectInputBoxApi> = Symbol()

// 内容盒子
export interface InjectContentBoxApi {
  user: Ref<UserApi>
  relativeTime: boolean
  like: (id: string) => void
  showInfo: (id: string, finish: Function) => void
}
export const InjectContentBox: InjectionKey<InjectContentBoxApi> = Symbol()

// 回复盒子
export interface InjectReplyBoxApi {
  page: boolean
  replyShowSize: number
  comments: Ref<CommentApi[]>
  replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (reply: ReplyApi) => void) => void
}
export const InjectReplyBox: InjectionKey<InjectReplyBoxApi> = Symbol()
