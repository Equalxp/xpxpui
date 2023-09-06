# 面包屑 Breadcrumb

## 基础用法

<div class="example">
<breadcrumbDemo1 />
</div>


::: details 显示代码

```html
<template>
  <xp-breadcrumb>
    <xp-breadcrumb-item :to="{ path: '/' }">homepage</xp-breadcrumb-item>
    <xp-breadcrumb-item>
      <a href="/">promotion management</a>
    </xp-breadcrumb-item>
    <xp-breadcrumb-item>promotion list</xp-breadcrumb-item>
    <xp-breadcrumb-item>promotion detail</xp-breadcrumb-item>
  </xp-breadcrumb>
</template>

```
:::


## 图标分隔符

<div class="example">
<breadcrumbDemo2 />
</div>


::: details 显示代码

```html
<template>
  <xp-breadcrumb :separator-icon="ArrowForwardIosSharp">
    <xp-breadcrumb-item :to="{ path: '/' }">homepage</xp-breadcrumb-item>
    <xp-breadcrumb-item>
      <a href="/">promotion management</a>
    </xp-breadcrumb-item>
    <xp-breadcrumb-item>promotion list</xp-breadcrumb-item>
    <xp-breadcrumb-item>promotion detail</xp-breadcrumb-item>
  </xp-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowForwardIosSharp } from "@vicons/material";
</script>
```
:::

## Breadcrumb 属性

| 属性           | 说明                     | 类型      | 可选值 | 默认值 |
| :------------- | :----------------------- | :-------- | :----- | :----- |
| separator      | 分隔符                   | string    | -      | /      |
| separator-icon | 图标分隔符的组件或组件名 | Component | -      | -      |

## Breadcrumb 插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## Breadcrumb Item 属性

| 属性           | 说明                                          | 类型    | 可选值 | 默认值 |
| :------------- | :-------------------------------------------- | :------ | :----- | :----- |
| to             | 路由跳转目标，同 vue-router 的 to属性         | object  | -      | /      |
| separator-icon | 如果设置该属性为 true, 导航将不会留下历史记录 | boolean | -      | false  |

## Breadcrumb Item 插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |



<script setup lang="ts">
  import breadcrumbDemo1 from './demo/breadcrumb/breadcrumbDemo1.vue'
  import breadcrumbDemo2 from './demo/breadcrumb/breadcrumbDemo2.vue'
</script>