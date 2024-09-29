import toast from './index.vue'
import { createNode, mergeObject, removeNode } from '~/util'
import type { ToastApi } from './index.vue'

// 函数式调用
export function UToast(options: ToastApi) {
  if (!options.message) return
  mergeObject(options, {
    duration: 1000,
    type: 'normal'
  })
  const { vnode, container } = createNode(toast as any, options)

  setTimeout(() => {
    removeNode(container)
  }, options.duration + 300)
  return vnode
}

export default UToast
