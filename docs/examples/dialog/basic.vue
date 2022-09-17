<template>
  <el-button text @click="visible = true">Click to open Dialog</el-button>
  <u-dialog v-model="visible" center title="title" width="30%">
    <span>content</span>
    <template #footer>
      <el-button @click="visible = false">Cancel</el-button>
    </template>
  </u-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
