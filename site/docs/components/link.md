# Link 文字链接

## 基础用法

<ClientOnly>

<div class="example">
<linkDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <div style="display:flex">
    <xp-link href="#" target="_blank">默认链接</xp-link>
    <xp-link type="primary">主要链接</xp-link>
    <xp-link type="info">信息链接</xp-link>
    <xp-link type="success">成功链接</xp-link>
    <xp-link type="warning">警告链接</xp-link>
    <xp-link type="error">错误链接</xp-link>
  </div>
</template>
```

:::

## 禁用状态
<ClientOnly>

<div class="example">
<linkDemo2 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <div style="display:flex">
    <xp-link disabled>默认链接</xp-link>
    <xp-link type="primary" disabled>主要链接</xp-link>
    <xp-link type="info" disabled>信息链接</xp-link>
    <xp-link type="success" disabled>成功链接</xp-link>
    <xp-link type="warning" disabled>警告链接</xp-link>
    <xp-link type="error" disabled>错误链接</xp-link>
  </div>  
</template>

```

:::

## 下划线

<ClientOnly>

<div class="example">
<linkDemo3 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <div style="display:flex">
    <xp-link :underline="false">默认链接</xp-link>
    <xp-link>默认链接</xp-link>
  </div>  
</template>

```

:::

## 图标

<ClientOnly>

<div class="example">
<!-- <linkDemo4 /> -->
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <div style="display:flex">
    <xp-link :icon="EditTwotone">
      Edit
    </xp-link>
    <xp-link :icon="CheckSquareOutlined" icon-placement="right"> Check </xp-link>
  </div>
</template>
<script setup lang="ts">
import { EditTwotone, CheckSquareOutlined } from "@vicons/antd";
</script>

```

:::

## 属性

| 属性           | 说明           | 类型               | 可选值                                      | 默认值  |
| :------------- | :------------- | :----------------- | :------------------------------------------ | :------ |
| type           | 类型           | string             | primary / success / warning / danger / info | default |
| underline      | 是否下划线     | boolean            | -                                           | true    |
| disabled       | 是否禁用状态   | boolean            | -                                           | false   |
| href           | 原生 href 属性 | string             | -                                           | -       |
| icon           | 图标组件       | string / Component | -                                           | -       |
| icon-placement | 图标组件位置   | string             | left / right                                | left    |
| icon-size      | 图标组件大小   | string / number    | -                                           | 18px    |

## 插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |



<script setup lang="ts">
  import linkDemo1 from './demo/link/linkDemo1.vue'
  import linkDemo2 from './demo/link/linkDemo2.vue'
  import linkDemo3 from './demo/link/linkDemo3.vue'
  import linkDemo4 from './demo/link/linkDemo4.vue'
</script>

<style>
.example a {
  margin-right:10px;
}
.xp-link:hover {
  cursor: pointer;
}
</style>
