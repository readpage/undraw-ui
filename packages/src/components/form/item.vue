<template>
  <template v-if="item.prop && item.component">
    <!-- el-input -->
    <template v-if="item.component.name == 'el-input'">
      <el-input v-model="data[item.prop]" clearable :style="{ width: toPx(item.component.width) }" :placeholder="item.component.placeholder || `请输入${item.label}`" v-bind="item.component"></el-input>
    </template>
    <!-- el-select -->
    <template v-if="item.component.name == 'el-select'">
      <el-select v-model="data[item.prop]" clearable :style="{ width: toPx(item.component.width) }" :placeholder="item.component.placeholder || `请选择${item.label}`" v-bind="item.component">
        <el-option v-for="e in convertOptions(item.component.options)" :key="e.value" :label="e.label" :value="e.value">
          <div v-if="item.component.showValue" style="display: flex; justify-content: space-between; margin-right: 5px;">
            <span>{{ e.label }}</span>
            <span style="color: var(--el-text-color-secondary); font-size: 13px;">{{ e.value }}</span>
          </div>
        </el-option>
      </el-select>
    </template>
    <!-- el-date -->
    <template v-if="item.component.name == 'el-date'">
      <el-date-picker
        v-model="data[item.prop]"
        type="date"
        value-format="YYYY-MM-DD"
        :shortcuts="shortcuts"
        :style="{ width: toPx(item.component.width) }"
        :placeholder="item.component.placeholder || `请选择${item.label}`"
        v-bind="item.component"
      />
    </template>
    <!-- u-search2 -->
    <template v-if="item.component.name == 'u-search2'">
      <u-search2 v-model="data[item.prop]" @remote-search="item.component.remoteSearch" :style="{ width: toPx(item.component.width) }" :placeholder="item.component.placeholder || `请输入${item.label}`" v-bind="item.component"></u-search2>
    </template>
  </template>
  <!-- custom 自定义 -->
  <template v-else-if="item.prop">
    <slot :name="`form-${item.prop}`" :item="item" :data="data"></slot>
  </template>
</template>
<script setup lang="ts">
import { FormItemApi } from './form.vue'
import { Time, mergeObject, toPx } from '~/util'
import { ElInput, ElSelect, ElOption, ElDatePicker } from 'element-plus'
import { USearch2 } from 'undraw-ui'

interface Props {
  item: FormItemApi
  data: any
}
const props = defineProps<Props>()

const shortcuts = [
  {
    text: '今天',
    value: new Date()
  },
  {
    text: '昨天',
    value: new Time().add(-1, 'day')
  },
  {
    text: '一周前',
    value: new Time().add(-1, 'week')
  }
]

function convertOptions(v: any[] | undefined) {
  if (v) {
    return v.map(e => {
      let label = e.label != undefined ? e.label : e
      let value = e.value != undefined ? e.value : label
      return { label: label, value: value }
    })
  }
  return v
}
</script>


<style lang="scss" scoped>
:deep(.el-select__wrapper) {
  width: 100%;
}

:deep(.el-date-editor .el-input__wrapper), :deep(.el-date-editor .el-input) {
  width: auto !important;
}
</style>