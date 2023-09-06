# 提示 Alert

用于页面中展示重要的提示信息

## 基础用法

<div class="example">
<alertDemo1 />
</div>

::: details 显示代码

```html
<template>
  <xp-alert title="Default 类型" />
  <xp-alert title="Info 类型" type="info" />
  <xp-alert title="Success 类型" type="success" />
  <xp-alert title="Warning 类型" type="warning" />
  <xp-alert title="Error 类型" type="error" />
</template>
```
:::

## 为 Alert 设置图标

<div class="example">
<alertDemo2 />
</div>

::: details 显示代码

```html
<template>
  <xp-alert title="Default 类型">
    <template #icon>
      <xp-icon class="xp-alert-icon" :size="22">
        <IosAirplane />
      </xp-icon>
    </template>
  </xp-alert>
  <xp-alert title="Info 类型" type="info" show-icon />
  <xp-alert title="Success 类型" type="success" show-icon />
  <xp-alert title="Warning 类型" type="warning" show-icon />
  <xp-alert title="Error 类型" type="error" show-icon />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>
```
:::

## 使文字居中

<div class="example">
<alertDemo3 />
</div>

::: details 显示代码

```html
<template>
  <xp-alert title="Default 类型" center>
    <template #icon>
      <xp-icon class="xp-alert-icon" :size="22">
        <IosAirplane />
      </xp-icon>
    </template>
  </xp-alert>
  <xp-alert title="Info 类型" type="info" show-icon center />
  <xp-alert title="Success 类型" type="success" show-icon center />
  <xp-alert title="Warning 类型" type="warning" show-icon center />
  <xp-alert title="Error 类型" type="error" show-icon center />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>
```
:::

## 自定义描述文案

<div class="example">
<alertDemo4 />
</div>

::: details 显示代码

```html
<template>
  <xp-alert
    title="Success 类型"
    type="success"
    show-icon
    center
    description="这是一段描述"
  />
</template>
<script setup lang="ts">
</script>

```
:::

## 可以关闭

<div class="example">
<alertDemo5 />
</div>

::: details 显示代码

```html
<template>
  <xp-alert title="Default 类型" closeable description="这是一段描述">
    <template #icon>
      <xp-icon class="xp-alert-icon" :size="22">
        <IosAirplane />
      </xp-icon>
    </template>
  </xp-alert>
  <xp-alert
    title="Info 类型"
    type="info"
    show-icon
    closeable
    description="这是一段描述"
  />
  <xp-alert
    title="Success 类型"
    type="success"
    show-icon
    closeable
    description="这是一段描述"
  />
  <xp-alert
    title="Warning 类型"
    type="warning"
    show-icon
    closeable
    description="这是一段描述"
  />
  <xp-alert
    title="Error 类型"
    type="error"
    show-icon
    closeable
    description="这是一段描述"
  />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>

```
:::

## 属性

| 属性      | 说明         | 类型    | 可选值                                     | 默认值  |
| :-------- | :----------- | :------ | :----------------------------------------- | :------ |
| title     | 标题         | string  | -                                          | -       |
| type      | 类型         | string  | default / info / success / warning / error | default |
| content   | 辅助性文字   | string  | -                                          | -       |
| closable  | 是否可关闭   | boolean | -                                          | false   |
| center    | 文字是否居中 | boolean | -                                          | false   |
| show-icon | 是否显示图标 | boolean | -                                          | false   |

## 事件

| 事件名 | 说明                    | 回调参数 |
| :----- | :---------------------- | :------- |
| close  | 关闭 Alert 时触发的事件 | -        |

## 插槽

| 插槽名  | 说明       |
| :------ | :--------- |
| default | 辅助性文字 |
| icon    | 图标       |
| title   | 标题       |


<script setup lang="ts">
  import alertDemo1 from './demo/alert/alertDemo1.vue'
  import alertDemo2 from './demo/alert/alertDemo2.vue'
  import alertDemo3 from './demo/alert/alertDemo3.vue'
  import alertDemo4 from './demo/alert/alertDemo4.vue'
  import alertDemo5 from './demo/alert/alertDemo5.vue'
</script>