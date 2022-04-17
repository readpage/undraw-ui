<template>
  <ClientOnly>
    <div class="example">
      <div class="op-btns">
        <u-icon class="op-btn" name="copy"></u-icon>
        <u-icon class="op-btn" name="code"></u-icon>
      </div>
      <u-divider style="margin: 0;" />
      {{decodeURIComponent(description)}}
      <exampleVue :example="example" />
      <sourceCodeVue :source="decodeURIComponent(source)" />
      
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import exampleVue from "./example.vue"
import sourceCodeVue from "./source-code.vue";

export interface DemoProps {
  demos: any
  description: string
  source: string
}
const props = defineProps<DemoProps>()

const example = computed(() => {
  let example = {}
  Object.values(props.demos).forEach((item: any) => {
    example = item.default
  })
  return example
})

</script>

<style lang="scss" scoped>
.example {
  border: 1px solid #dcdfe6;
  border-radius: 4px;

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    line-height: 3rem;
    color: #909399;
    
    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      transition: .2s;
    }
  }
}
</style>
