<template>
  <div ref="contextMenuRef" class="u-context-menu">
    <div class="item" v-for="(item, index) in data" :key="index" @click="rowClick(index)">
      {{ item.label }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, reactive } from 'vue'
import { removeNode } from '~/util'

interface ItemApi {
  label: string
  callback?(done: () => void): void 
}

export interface ContextMenuApi {
  data: ItemApi[]
  positon?: { x: number; y: number }
}
const props = defineProps<ContextMenuApi>()

const contextMenuRef = ref()
const style = reactive({ top: '0px', left: '0px' })

function init() {
  let { x: left, y: top } = props.positon as any
  nextTick(() => {
    const { clientHeight: h1, clientWidth: w1 } = document.body
    const { clientHeight: h2, clientWidth: w2 } = contextMenuRef.value
    if (top + h2 > h1) {
      top = h1 - h2 - 5
    }

    if (left + w2 > w1) {
      left = w1 - w2 - 5
    }
    style.top = top + 'px'
    style.left = left + 'px'
  })
}

function close() {
  removeNode(contextMenuRef.value)
}

function rowClick(val: number) {
  let item = props.data[val]
  item.callback && item.callback(close)
}

function contains(parent: any, node: any) {
  return parent !== node && parent && parent.contains(node)
}

function getMousePos(e: MouseEvent) {
  var x = e.pageX
  var y = e.pageY
  return { x: x, y: y }
}

onMounted(() => {
  init()
  document.body.addEventListener('mousedown', (e: MouseEvent) => {
    let { x, y } = getMousePos(e)
    const el = contextMenuRef.value
    if (!contains(el, e.target) && el != e.target) {
      close()
    }
  })
})
</script>

<style lang="scss" scoped>
.u-context-menu {
  position: absolute;
  z-index: 9999;
  top: v-bind('style.top');
  left: v-bind('style.left');
  width: 160px;
  box-shadow: 0 2px 12px #0000001a;
  background-color: #fff;
  border-radius: 4px;
  .item {
    display: flex;
    align-items: center;
    height: 35px;
    font-size: 12px;
    cursor: pointer;
    padding: 0 15px;
    color: #666;
    &:hover {
      background-color: #d9ecff;
      color: #409eff;
    }
    &:first-child {
      margin-top: 5px;
    }

    &:last-child {
      margin-bottom: 5px;
    }
  }
}
</style>
