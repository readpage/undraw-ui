import { h, render, DefineComponent, Component } from 'vue'

/**
 * 创建node节点
 * @param dom 目标dom
 * @param options 参数
 * @returns
 */
export function createNode(dom: any, options: object) {
  // 根据components定义生成虚拟DOM
  const vnode = h(dom, options)
  // 需要创建一个容器div来渲染这个虚拟节点
  const container = document.createElement('div')
  // 这样就成功将虚拟节点渲染到 div
  render(vnode, container)
  // 然后将container appendChild 到body上面
  document.body.appendChild(container.firstElementChild!)
  return { vnode, container }
}


/**
 * 移除元素
 * @param el 需要移除的元素
 */
export function removeNode(el: HTMLElement) {
  try {
    render(null, el)
    el && el.remove()
  } catch (e) {}
}