<template>
  <ClientOnly>
    <p v-html="decodeURIComponent(description)"></p>
    <div class="example">
      <exampleVue :example="examples[path]" />
      <u-divider style="margin: 0;" />
      <div class="op-btns">
        <el-tooltip content="复制代码">
          <u-icon class="op-btn" name="copy" @click="copyCode"></u-icon>
        </el-tooltip>
        <el-tooltip content="显示源代码">
          <u-icon class="op-btn" name="code" @click="sourceVisible = !sourceVisible"></u-icon>
        </el-tooltip>
      </div>
      <el-collapse-transition v-show="sourceVisible">
        <sourceCodeVue :source="decodeURIComponent(source)" />
      </el-collapse-transition>
      <transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="sourceVisible = !sourceVisible">
            <u-icon name="top"></u-icon>
            <span>隐藏源代码</span>
        </div>
      </transition>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import exampleVue from './example.vue'
import sourceCodeVue from './source-code.vue'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'

export interface DemoProps {
  path: string
  demos: any
  description: string
  source: string
  rawSource: string
}
const props = defineProps<DemoProps>()

const sourceVisible = ref(false)
const { copy, isSupported } =  useClipboard({
  source: decodeURIComponent(props.rawSource)
})

const examples = computed(() => {
  let examples: any[] = []
  Object.keys(props.demos).forEach((key: any) => {
    examples[key.replace('../../examples/', '').replace('.vue', '')] = props.demos[key].default
  })
  return examples
})

async function copyCode() {
  if (!isSupported) {
    ElMessage.error('复制失败')
  } 
  try {
    await copy()
    ElMessage.success('复制成功')
  } catch (e: any) {
    ElMessage.error(e.message)
  }
}

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
    height: 2rem;
    line-height: 2rem;
    
    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      transition: .2s;
    }

    .u-icon {
      display: inline-flex;
      color: #909399;
    }

    .u-icon:hover {
      color: #303133
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }  
}
</style>
