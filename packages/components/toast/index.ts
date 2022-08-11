import toast from './index.vue'
import { createGlobalNode, removeGlobalNode } from '~/util'
import type { ToastApi } from './index.vue'

// 函数式调用
export function UToast(options: ToastApi) {
  let duration = options.duration
  if (!options.message) return
  options.duration = duration ? duration : 1000
  const { vnode, div } = createGlobalNode(toast as any, options)

  setTimeout(() => {
    removeGlobalNode(div)
  }, options.duration + 300)
  return vnode
}

export default UToast
