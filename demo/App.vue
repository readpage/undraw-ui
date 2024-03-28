<template>
  <el-config-provider :locale="zhCn">
    <Page :components="components" title="组件测试" />
  </el-config-provider>
</template>
<script setup lang="ts">
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
import Fold from './components/fold.vue'
import chatVue from './components/chat.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Page from './components/Page.vue'
import counterVue from './components/counter.vue'
import { cloneDeep, lang } from '~/index'

lang.locale = 'en'
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
  signVue,
  counterVue,
  Fold,
  testVue
]
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
