<template>
  <div class="u-comment-scroll">
    <div v-infinite-scroll="load" :infinite-scroll-disabled="disabled" infinite-scroll-distance="2">
      <slot></slot>
      <div class="scroll-btn">
        <el-link v-if="!active" type="primary" :underline="false" @click="active = !active">加载更多</el-link>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { debounce } from '~/util'
import { vInfiniteScroll, ElLink } from '~/element'

defineOptions({
  name: 'UCommentScroll'
})

interface Props {
  disable: boolean
  // show: boolean
}

const props = defineProps<Props>()

// 是否开启加载
const loading = ref(false)
// 是否使用
const active = ref(false)

const emit = defineEmits<{
  (e: 'more'): void
}>()

const noMore = computed(() => active.value && props.disable)
const disabled = computed(() => !active.value || loading.value || noMore.value)

const _debounce = debounce(() => {
  emit('more')
  loading.value = false
}, 500)

const load = () => {
  loading.value = true
  _debounce()
}
</script>

<style lang="scss" scoped>
.u-comment-scroll {
  position: relative;
  font-size: 10px;
  .scroll-btn {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 10px;
  }
}
</style>
