---
title: Icon
---
# Icon 图标
undraw-ui推荐使用[iconfont](https://www.iconfont.cn/)作为图标库

## 基础用法

## iconfont 引入
iconfont引用 详细介绍:[https://www.iconfont.cn/](https://www.iconfont.cn/)

::: demo
icon/basic
:::

## 自定义图标
将自定义 SVG 放入图标。（确保设定了 SVG 的 viewBox 属性）

推荐使用 [xicons](https://www.xicons.org/) 作为图标库。
:::demo
icon/auto
:::

## Icon 属性
| 属性  | 说明          | 类型                         | 默认值 |
|-------|--------------|------------------------------|-------|
| color | svg的fill颜色 | Pick<CSSProperties, 'color'> | -     |
| size  | svg图标的大小 | number / string              | 16    |

## Icon 插槽
| 名称 | 说明   |
|------|--------|
| -    | 自定义 |