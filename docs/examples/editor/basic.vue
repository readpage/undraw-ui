<template>
  <u-editor v-model="content" placeholder="请输入内容"></u-editor>
  <span>{{ content }}</span>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
</script>
