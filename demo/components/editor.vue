<template>
  <u-editor v-model="content" placeholder="请输入内容"></u-editor>
  <!-- {{ content }} -->
  <div v-html="content"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'editor'
})

const content = ref('')
</script>

<style lang="scss" scoped></style>
