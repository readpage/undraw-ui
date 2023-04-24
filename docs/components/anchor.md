---
title: Anchor
---

# 锚点
提取标题元素到导航栏，通过导航栏快速跳转到目标位置

特点: 滑动滚动效果

## 基础用法

:::demo
anchor/basic

:::

## 自定义滚动轴

:::demo
anchor/target
:::

## Anchor 属性

| 属性    |  说明  | 类型 | 默认值 |
|---------|-------|------|--------|
| container| 指定监听的容器，标题元素集合，如h1、h2、h3 | stirng(.test、#test) |  |
| target | 滚动轴 | string | window |