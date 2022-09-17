<template>
  <u-tags v-model="tagsList" classic @select="onSelect" @refresh="refresh" @full-screen="fullScreen"></u-tags>
  <el-button @click="add('b')">add</el-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TagApi } from '~/components'

const tagsList = ref<TagApi[]>([
  {
    title: '首页',
    path: '/home',
    isAffix: true
  },
  {
    title: '用户管理',
    path: '/user',
    isAffix: false
  },
  {
    title: '角色管理',
    path: '/role',
    isAffix: false
  },
  {
    title: '其 他xxxxxxxxxxxx',
    path: '/other',
    isAffix: false
  }
])

const onSelect = (val: TagApi) => {
  console.log(val)
}

const add = (val: string) => {
  tagsList.value.push({ title: val, path: val, isAffix: false })
}

const refresh = () => {
  console.log('refresh')
}

const fullScreen = () => {
  console.log('fullScreen')
}
</script>

<style lang="scss" scoped></style>
