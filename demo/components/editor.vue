<template>
  <u-editor v-model="content" placeholder="请输入内容"></u-editor>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
</script>

<style lang="scss" scoped></style>
