---
title: Crud
---

# crud
表格的增删改查

## 基础用法
:::demo
crud/basic
:::

## crud 属性
| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| form   | 表单参数配置 | FormApi  | null |
| table   | 表格参数配置 | TableApi  | null |
| crud   | 增删改查参数配置 | CrudApi  | null |


## 接口类型
```ts
export interface FormApi {
  items: ItemApi[] // 表单项
  data: any // 数据
  labelWidth?: number
  labelPosition?: 'right' | 'left' | 'top' // 标签文本对齐方式
  group?: GroupApi // 分组
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

export interface CrudApi {
  save?: (val: any, finish: () => void) => void // 添加
  update?: (val: any, finish: () => void) => void // 修改
  remove?: (val: any[], finish: () => void) => void // 删除
}
```