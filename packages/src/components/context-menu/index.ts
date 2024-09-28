import { h, render } from 'vue'
import contextMenu, { ContextMenuApi } from './context-menu.vue'
import { createNode } from '~/util'

export type * from './context-menu.vue'
// 函数式调用
export function UContextMenu(e: MouseEvent, options: ContextMenuApi) {
  let positon = { x: e.pageX, y: e.pageY}
  options.positon = positon
  const { vnode } = createNode(contextMenu, options)

  return vnode
}

export default UContextMenu
