import { InjectionKey, Ref } from "vue";
import { withInstall } from "~/utils";
import commentVue from "./comment.vue";

export interface commentApi {
  id: number
  parentId: number | null
  avatar: string
  username: string
  content: string
  reply?: replyApi | null
}

export interface replyApi {
  total: number
  list: commentApi[]
}

export interface commentFun {
  submit: (clear: () => void, content: string, parentId?: number) => void
}

export const InjectionCommentFun: InjectionKey<commentFun> = Symbol()

export const Comment = withInstall(commentVue)
export default Comment