<template>
  <u-tags v-model="tagsList" classic @change="onChange"></u-tags>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tagsList = ref([
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

const onChange = (val: any) => {
  console.log(val)
}
</script>
