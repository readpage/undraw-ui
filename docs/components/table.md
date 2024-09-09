---
title: Table
---

# table
自定义表格

## 基础用法
:::demo
table/basic
:::

## table 属性
| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| table   | 表格参数配置 | TableApi  | null |


## 接口类型
```ts
export interface TableItemApi {
  label?: string  // 标签文本
  prop?: string  // 字段
  value?: any  // 默认值
  width?: number  // 列的宽度
  minWidth?: number // 列的最小宽度
  align?: 'left' | 'center' | 'right' // 对齐方式
  fixed?: 'left' | 'right' | false 
  type?: 'basic' | 'index' | 'selection' | 'img' | 'input' | 'date' | 'select'  // 列的类型
  | 'row-add' | 'custom' | 'operation'
  editor?: boolean // 是否可编辑
  required?: boolean  // 是否必填
  rule?: Arrayable<FormItemRule>  // 验证规则
  options?: {label: any, value: any}[] | any[]  // select组件标签列表
}

export interface TableApi {
  key?: string
  type?: 'page' | 'list' // 表格类型
  columns: TableItemApi[]  // 表格项
  data: {}[] // 表格数据
  total?: number 
  pageSize?: number
  single?: boolean
  number?: string
  refresh?:(finish: () => void, current: number, size: number) => void // 刷新列表
  rowForm?: any
}
```