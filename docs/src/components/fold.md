---
title: Fold
---

# fold
用于文章或介绍，限制行数隐藏过多的内容。

## 基础用法
:::demo 使用 `line` 来限制显示行数，超出指定行数省略隐藏

fold/basic

:::

## 折叠和展开
:::demo 使用属性 `unfold` 启动展开和折叠功能

fold/unfold

:::

## Fold 属性

| 属性  | 说明 | 类型          | 默认值 |
|-------|------|--------------|:------:|
| line  | 行数 | string / number | 5     |
| unfold| 是否展开 | boolean   | false  |