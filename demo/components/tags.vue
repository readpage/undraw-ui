<template>
  <u-tags v-model="tagsList" classic @change="onChange"></u-tags>
  <!-- <el-button @click="add('b')">add</el-button> -->
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TagsApi } from '~/components'

const tagsList = ref<TagsApi[]>([
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

const onChange = (val: TagsApi) => {
  console.log(val)
}

const add = (val: string) => {
  tagsList.value.push({ title: val, path: val, isAffix: false })
}
</script>

<style lang="scss" scoped></style>
