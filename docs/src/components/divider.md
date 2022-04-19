---
title: divider
---
# divider 分割线

区隔内容的分割线。

## 基础用法
对不同段落的文本进行分割。

::: demo
divider/basic
:::

## 设置文案
可以在分割线上自定义文本内容。

:::demo
divider/custom-content
:::

## 虚线
您可以设置分隔符的样式。
:::demo
divider/dashed
:::

## 垂直分隔线

:::demo
divider/vertical
:::

## Divider 属性
| 属性         | 说明                 | 类型    | 可选值     | 默认值  |
|-------------|----------------------|---------|-----------|----------|
|vertical     | 分割线的方向是否垂直   | boolean |true / false | false |
|border-style | 设置分隔符样式         | string  |[CSS / border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid    |
|position     | 设置分割线文案的位置   | string   | left / right / center | center |