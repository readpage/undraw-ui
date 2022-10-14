<template>
  <u-tags
    v-model="tagsList"
    classic
    @select="onSelect"
    @refresh="refresh"
    @close="close"
    @close-other="closeOther"
    @close-all="closeAll"
    @full-screen="fullScreen"
  ></u-tags>
  <el-button @click="add('b')">add</el-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TagApi } from 'undraw-ui'

const tagsList = ref<TagApi[]>([
  {
    path: '/home',
    meta: {
      title: '首页',
      isAffix: true
    }
  },
  {
    path: '/user',
    meta: {
      title: '用户管理',
      isAffix: false
    }
  },
  {
    path: '/role',
    meta: {
      title: '角色管理',
      isAffix: false
    }
  },
  {
    path: '/other',
    meta: {
      title: '其 他xxxxxxxxxxxx',
      isAffix: false
    }
  }
])

const onSelect = (tag: TagApi) => {
  console.log('select')
}

let n = 0
const add = (val: string) => {
  tagsList.value.push({ path: `${n++}`, meta: { title: `val-${n++}`, isAffix: false } })
}

const refresh = () => {
  console.log('refresh')
}

const close = (tag: TagApi) => {
  console.log('close')
}

const closeOther = (tag: TagApi) => {
  console.log('closeOther')
}

const closeAll = () => {
  console.log('closeAll')
}

const fullScreen = () => {
  console.log('fullScreen')
}
</script>

<style lang="scss" scoped></style>
