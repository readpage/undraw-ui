import { h, render } from 'vue'
import toast from './index.vue'
import type { ToastApi } from './index.vue'

// 函数式调用
export function UToast(options: ToastApi) {
  let duration = options.duration
  if (!options.message) return
  options.duration = duration ? duration : 1000
  // 根据components定义生成虚拟DOM
  const vnode = h(toast, options)
  // 需要创建一个容器div来渲染这个虚拟节点
  const div = document.createElement('div')
  // 然后将container append 到body上面
  document.body.append(div)
  // 这样就成功将虚拟节点渲染到 div
  render(vnode, div)

  setTimeout(() => {
    render(null, div)
  }, options.duration + 300)
  return vnode
}

export default UToast
