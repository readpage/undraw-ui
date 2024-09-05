<template>
  <el-config-provider :locale="locale">
    <Page />
  </el-config-provider>
</template>
<script setup lang="ts">
import Page from './layouts/page.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
</script>



<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
