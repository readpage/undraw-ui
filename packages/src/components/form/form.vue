<template>
  <div class="u-form">
    <el-form
      ref="formRef"
      :model="form.data"
      status-icon
      :label-width="form.labelWidth"
      :label-position="form.labelPosition"
      v-bind="$props"
    >
      <template v-for="(item, index) in form.items" :key="index">
        <el-form-item
          :label="item.label"
          :prop="item.prop"
          :class="`form-${item.prop}`"
          :rules="item.required ? { required: true, message: `${item.label}不能为空`, trigger: 'change' } : item.rule"
          :label-width="item.labelWidth"
          v-show="groupType(item.group)"
        >
          <Item :item="item" :data="form.data">
            <template v-if="!item.component" #[`form-${item.prop}`]="v">
              <slot :name="`form-${item.prop}`" v-bind="v" />
            </template>
          </Item>
        </el-form-item>
      </template>
      <slot />
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FormInstance, FormItemRule, ElForm, ElFormItem } from 'element-plus'
import { Arrayable } from 'element-plus/es/utils/typescript'
import { mergeObject } from '~/util'
import Item from './item.vue'

defineOptions({
  name: 'UForm'
})

export interface ComponentApi {
  name: string
  options?: any[] | {label: string, value: string}[]
}

export interface ItemApi {
  label?: string // 标签文本
  prop?: string  // 字段
  value?: any   // 默认值
  width?: number  // 组件宽度
  labelWidth?: number // 表单标签的宽度
  component?: any // 组件
  required?: boolean // 是否必填
  rule?: Arrayable<FormItemRule> // 验证规则
  group?: string // 分组显示
}

interface GroupApi {
  type: 'tabs' | 'collapse' // 分组类型
  labels: string[] // 分组标签列表
  value?: string // 默认值
}

export interface FormApi {
  items: ItemApi[] // 表单项
  data: any // 数据
  labelWidth?: number
  labelPosition?: 'right' | 'left' | 'top' // 标签文本对齐方式
  group?: GroupApi // 分组
}

interface Props {
  form: FormApi
  group?: string
  validate?: (v: Promise<any>) => void
}
const props = defineProps<Props>()

const formRef = ref<FormInstance>()

function init() {
  let form = props.form
  mergeObject(form, {
    labelWidth: 80,
    labelPosition: 'right'
  })
  form.data = form.items.reduce((acc: any, cur) => {
    // @ts-ignore
    acc[cur.prop] = cur.value
    return acc
  }, {})
}
init()

function groupType(v: string | undefined) {
  let group = props.form.group
  if (group && group.type == 'tabs') {
    return group.value == v
  } else if (group?.type) {
    return props.group == v
  }
  return true
}

// 提交校验
function validate(callback: (vaild: boolean, fields: any) => void) {
  formRef.value?.validate((valid, fields) => {
    callback(valid, fields)
  })
}

defineExpose({
  validate: validate,
  resetFields: () => formRef.value?.resetFields()
})
</script>

<style lang="scss" scoped>
span {
  font-size: inherit;
}
</style>
