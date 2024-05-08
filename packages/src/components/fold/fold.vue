<template>
  <div class="u-fold">
    <!-- over-hidden -->
    <div ref="textBox" class="txt-box" :class="{ 'over-hidden': fold }">
      <div ref="divBox">
        <el-button
          v-if="isOver && unfold && position == 'end'"
          @click="fold = !fold"
          :class="{ 'over-hidden': fold, 'end-btn': 1 }"
          type="primary"
          plain
          link
        >
          {{ fold ? $u('fold.unfold') : $u('fold.fold') }}
        </el-button>
        <slot></slot>
      </div>
    </div>
    <div class="action-box select-none">
      <div v-if="isOver && unfold && position == 'line'" class="expand-btn" @click="fold = !fold">
        <slot name="expand" :fold="fold">
          <el-button type="primary" plain link>{{ fold ? $u('fold.unfold') : $u('fold.fold') }}</el-button>
        </slot>
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
  position?: string
}

const props = withDefaults(defineProps<Props>(), {
  line: 5,
  position: 'line'
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
  $line: v-bind(line)
);
</style>
