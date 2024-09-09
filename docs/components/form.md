---
title: Form
---

# form
自定义表单组件

## 基础用法
:::demo 
form/basic
:::

## form 属性
| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| form   | 表单参数配置 | FormApi  | null |


## 接口类型
```ts
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
```