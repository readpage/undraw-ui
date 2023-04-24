---
title: Toast
---

# Toast 吐司
用吐司来代替无聊的警报

功能: 显示提示文字,自定义自动消失的时间,单位为毫秒。

## 基础用法


:::demo
toast/basic
:::

## Toast属性

| 属性     | 说明     | 类型                                    | 默认值 |
|----------|---------|-----------------------------------------|--------|
| message  | 消息文字 | string                                  | -      |
| type     | 消息类型 |'normal' / 'success' / 'warning' / 'info' /'error' | normal
| duration | 显示时间 | number                                  | 2000   |