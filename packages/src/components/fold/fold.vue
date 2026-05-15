<template>
  <div class="u-fold">
    <div ref="textBox" class="txt-box" :class="{ 'over-hidden': fold , 'txt-box-bottom': isOver && unfold}">
      <div class="txt-content" ref="divBox">
        <slot></slot>
        <el-button :class="[ position == 'right' ? 'right': 'left', 'txt-btn']" v-if="isOver && unfold" @click="fold = !fold" type="primary" plain link>
          {{ fold ? $u('fold.unfold') : $u('fold.fold') }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { translate as $u } from 'undraw-ui'
import { ElButton } from 'element-plus'

defineOptions({
  name: 'UFold'
})

interface Props {
  line?: number | string
  unfold?: boolean
  position?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  line: 5,
  position: 'left'
})
const line = computed(() => {
  let line = Math.trunc(Number(props.line))
  return line > 0 ? line : 1
})

// 文本是否是展开状态 默认为收起
const fold = ref(true)
//文本是否超出五行，默认否
const isOver = ref(false)

const divBox = ref<HTMLDivElement>()
const textBox = ref<HTMLDivElement>()

let observer: ResizeObserver

onMounted(() => {
  observer = new ResizeObserver(entry => {
    if (fold.value && divBox.value && textBox.value) {
      //offsetHeight：包括内容可见部分的高度，border，可见的padding，水平方向的scrollbar（如果存在）；不包括margin。
      // clientHeight：包括内容可见部分的高度，可见的padding；不包括border，水平方向的scrollbar，margin。
      //scrollHeight：包括内容的高度（可见与不可见），padding（可见与不可见）；不包括border，margin。
      // isOver.value = divBox.value.offsetHeight < divBox.value.scrollHeight
      //兼容火狐
      isOver.value = textBox.value.clientHeight < divBox.value.scrollHeight
    }
  })
  observer.observe(divBox.value as any)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style lang="scss" scoped>
@use './fold.scss' with (
  $line: v-bind(line),
);
</style>
