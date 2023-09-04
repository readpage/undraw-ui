<template>
  <u-search :config="config" style="margin-left: 20px" @submit="submit"></u-search>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { SearchConfig } from 'undraw-ui'

const config = ref<SearchConfig>({
  search: '', //可选输入框默认值
  keywords: ['斗罗大陆', '斗破苍穹', '吞噬星空', '凡人修仙传', '一念永恒'], // 搜索框关键字滚动
  hotSearchList: [
    '斗罗大陆',
    '斗破苍穹',
    '吞噬星空',
    '凡人修仙传',
    '一念永恒',
    '完美世界',
    '鬼灭之刃',
    '间谍过家家',
    '武动乾坤',
    '神印王座'
  ] // top10 热门搜索 最多显示10条数据
})

const submit = (val: string) => {
  console.log(val)
  window.open('/all?keyword=' + val)
}
</script>

<style lang="scss" scoped></style>
