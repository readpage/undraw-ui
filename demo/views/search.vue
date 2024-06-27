<template>
  <u-search ref="searchRef" :config="config" style="margin-left: 20px" @submit="submit"></u-search>
  <div>{{ config.search }}</div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { SearchConfig, SearchInstance } from '~/index'

defineOptions({
  name: 'search'
})

const searchRef = ref<SearchInstance>()

const config = reactive<SearchConfig>({
  keywords: [],
  hotSearchList: []
})

onMounted(() => {
  setTimeout(() => {
    config.keywords = ['斗罗大陆', '斗破苍穹', '吞噬星空', '凡人修仙传', '一念永恒'] // 搜索框关键字滚动
    config.hotSearchList = ['斗罗大陆', '斗破苍穹', '吞噬星空', '凡人修仙传', '一念永恒', '完美世界', '鬼灭之刃', '间谍过家家', '武动乾坤', '神印王座'] // top10 热门搜索 最多显示10条数据
  }, 200)
})
const submit = (val: string) => {
  console.log(val)
  window.open('/all?keyword=' + val)
}
setTimeout(() => {
  config.search = 'test'
}, 2000)
</script>

<style lang="scss" scoped></style>
