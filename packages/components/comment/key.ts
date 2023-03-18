import { InjectionKey, Ref } from 'vue'
import { CommentApi, UserApi } from './interface'

export const InjectItemSlot = Symbol()
export const InjectSlots = Symbol()

export interface OperationApi {
  user: Ref<UserApi>
  tools: string[] | undefined
  operate: (type: string, comment: CommentApi, finish: () => void) => void
}

export const InjectOperation: InjectionKey<OperationApi> = Symbol()
