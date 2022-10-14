---
title: Icon
---
# Icon 图标
undraw-ui推荐使用[iconPark](https://iconpark.oceanengine.com/)作为图标库

## iconPark 引入
iconfont引用

详细介绍:[iconPark创建项目](https://bytedance.feishu.cn/wiki/wikcnrOVHCJQ4V3a7mDvmLjrePf#RI6q69)

## 基础用法
可以通过size和color定义样式大小和颜色,默认继承父类。

::: demo
icon/basic
:::

然后添加图标到项目里下载SVG Symbol的js文件,组件标识的名称如home,使用`<u-icon name="home"></u-icon>`

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