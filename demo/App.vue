<template>
  <div class="demo">
    <div class="menu">
      <div class="title"><h1>组件测试</h1></div>
      <div class="content">
        <div
          v-for="(tab, index) in tabData"
          :key="index"
          class="menu-li"
          :class="bindClass(tab)"
          @click="switchTab(tab)"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div class="container">
      <component :is="currentTab.tabComp"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, markRaw, computed } from 'vue'
import signVue from '~/components/sign/sign.vue'
import anchorVue from './components/anchor.vue'
import commentVue from './components/comment.vue'
import dialogVue from './components/dialog.vue'
import editorVue from './components/editor.vue'
import iconVue from './components/icon.vue'
import noticeBarVue from './components/notice-bar.vue'
import searchVue from './components/search.vue'
import tagsVue from './components/tags.vue'
import testVue from './components/test.vue'
import buttonVue from './components/button.vue'
import chatVue from './components/chat.vue'

type tabType = {
  name: string
  tabComp: any
}

// type Comp = Pick<tabType, 'tabComp'>
const tabData = reactive<tabType[]>([
  {
    name: 'signVue',
    tabComp: markRaw(signVue)
  },
  {
    name: 'commentVue',
    tabComp: markRaw(commentVue)
  },
  {
    name: 'dialogVue',
    tabComp: markRaw(dialogVue)
  },
  {
    name: 'anchorVue',
    tabComp: markRaw(anchorVue)
  },
  {
    name: 'editorVue',
    tabComp: markRaw(editorVue)
  },
  {
    name: 'iconVue',
    tabComp: markRaw(iconVue)
  },
  {
    name: 'noticeBarVue',
    tabComp: markRaw(noticeBarVue)
  },
  {
    name: 'searchVue',
    tabComp: markRaw(searchVue)
  },
  {
    name: 'tagsVue',
    tabComp: markRaw(tagsVue)
  },
  {
    name: 'testVue',
    tabComp: markRaw(testVue)
  },
  {
    name: 'chatVue',
    tabComp: markRaw(chatVue)
  }
])

const bindClass = (tab: tabType) => {
  return currentTab.name.toLocaleLowerCase() === tab.name.toLocaleLowerCase() ? 'current-tab' : ''
}

//默认选中
let currentTab = reactive<tabType>({
  name: 'commentVue',
  tabComp: tabData.find(item => 'commentVue' == item.name)?.tabComp
})

const switchTab = (tab: tabType) => {
  currentTab.name = tab.name
  currentTab.tabComp = tab.tabComp
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: 12px;
}
.demo {
  display: flex;
  justify-content: start;
  min-height: calc(100vh);
  .menu {
    text-align: center;
    width: 200px;
    border: 1px solid #e1e1e1;
    .menu-li {
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .container {
    padding: 10px;
  }
}
.current-tab {
  color: rgb(30, 128, 255);
}
</style>
