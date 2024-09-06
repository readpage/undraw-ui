<template>
  <div class="example-show">
    <el-config-provider :locale="locale">
      <component :is="example" />
    </el-config-provider>
  </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, markRaw } from "vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn

export interface Props {
  example: any;
}
const props = defineProps<Props>();

let example = computed(() => markRaw(defineAsyncComponent(props.example)))
</script>

<style lang="scss" scoped>
.example-show {
  padding: 15px;
  margin: 0.5px;
}
</style>
