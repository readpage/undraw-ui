<template>
  <template v-if="item.prop && item.component">
    <!-- el-input -->
    <template v-if="item.component.name == 'el-input'">
      <el-input v-model="data[item.prop]" clearable :style="{ width: toPx(item.width) }" :placeholder="item.component.placeholder || `请选择${item.label}`" v-bind="item.component"></el-input>
    </template>
    <!-- el-select -->
    <template v-if="item.component.name == 'el-select'">
      <el-select v-model="data[item.prop]" :style="{ width: toPx(item.width) }" :placeholder="item.component.placeholder || `请选择${item.label}`" v-bind="item.component">
        <el-option v-for="e in item.component.options" :key="e.value" :label="e.label || e" :value="e.value || e" />
      </el-select>
    </template>
    <!-- el-date -->
    <template v-if="item.component.name == 'el-date'">
      <el-date-picker
        v-model="data[item.prop]"
        type="date"
        value-format="YYYY-MM-DD"
        :shortcuts="shortcuts"
        :style="{ width: toPx(item.width) }"
        :placeholder="item.component.placeholder || `请选择${item.label}`"
        v-bind="item.component"
      />
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
</script>

<style lang="scss" scoped></style>
