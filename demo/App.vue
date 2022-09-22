<template>
  <el-config-provider :locale="zhCn">
    <Page :components="components" title="组件测试" />
  </el-config-provider>
</template>
<script setup lang="ts">
import {} from 'vue'
import signVue from './components/sign.vue'
import anchorVue from './components/anchor.vue'
import commentVue from './components/comment.vue'
import dialogVue from './components/dialog.vue'
import editorVue from './components/editor.vue'
import iconVue from './components/icon.vue'
import noticeBarVue from './components/notice-bar.vue'
import searchVue from './components/search.vue'
import tagsVue from './components/tags.vue'
import testVue from './components/test.vue'
import chatVue from './components/chat.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import Page from './components/Page.vue'

const components = [
  commentVue,
  chatVue,
  searchVue,
  noticeBarVue,
  anchorVue,
  dialogVue,
  editorVue,
  iconVue,
  tagsVue,
  testVue,
  signVue
]
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-size: 12px;
}
</style>
