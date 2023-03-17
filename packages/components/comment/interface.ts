import { InjectionKey, Ref } from 'vue'
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

export interface ReplyApi {
  total: number
  list: CommentApi[]
}

export interface ConfigApi {
  user: UserApi
  emoji: EmojiApi
  comments: CommentApi[]
  total: number
  showSize?: number
  replyShowSize?: number
}

export interface CommentSubmitParam {
  content: string
  parentId: string | null
  files: any[]
  finish: (comment: CommentApi) => void
}

export interface CommentSubmitParam2 {
  content: string
  parentId: string | null
  files: any[]
  finish: () => void
}

export interface ReplyPageParam {
  parentId: string | number
  pageNum: number
  pageSize: number
  finish: (comments: ReplyApi) => void
}

export interface ReplyParam {
  /**
   * 回复分页
   */
  replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (comments: ReplyApi) => void) => void
  /**
   * 回复初始显示的个数
   */
  replyShowSize: number
  /**
   * 评论数据(不包含回复数据)
   */
  comments: Ref<CommentApi[]>
}

export interface ContentBoxParam {
  /**
   * 是否启动hover信息信息栏
   */
  isUserInfo: boolean
  /**
   * 用户数据
   */
  user: Ref<UserApi>
  /**
   * 点赞方法
   */
  like: (id: string) => void
  /**
   * 返回用户id
   */
  showInfo: (uid: string, finish: Function) => void
  /**
   * 举报评论方法
   * finish: 取消禁用举报按钮
   */
  report: (id: string, finish: () => void) => void
  /**
   * 删除评论方法
   * finish: 取消禁用删除按钮
   */
  remove: (id: string, parentId: string | null, finish: () => void) => void
}

export const InjectionCommentFun: InjectionKey<(obj: CommentSubmitParam) => void> = Symbol()
export const InjectionReply: InjectionKey<ReplyParam> = Symbol()
export const InjectionContentBox: InjectionKey<ContentBoxParam> = Symbol()
