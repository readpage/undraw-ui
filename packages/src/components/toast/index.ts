import toast from './index.vue'
import { createNode, removeNode } from '~/util'
import type { ToastApi } from './index.vue'

// 函数式调用
export function UToast(options: ToastApi) {
  let duration = options.duration
  if (!options.message) return
  options.duration = duration ? duration : 1000
  const { vnode, div } = createNode(toast as any, options)

  setTimeout(() => {
    removeNode(div)
  }, options.duration + 300)
  return vnode
}

export default UToast
