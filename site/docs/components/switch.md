# Switch 开关

## 基础用法


<div class="example">
<switchDemo1 />
</div>


::: details 显示代码

```html

<template>
  <xp-switch v-model="checked" />
  <xp-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
```
:::

## 自定义颜色

<div class="example">
<switchDemo2 />
</div>


::: details 显示代码

```html
<template>
  <xp-switch v-model="checked" active-color="red" inactive-color="pink"></xp-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
```
:::

## 尺寸

<div class="example">
<switchDemo3 />
</div>


::: details 显示代码

```html
<template>
  <xp-switch v-model="checked" size="small" />
  <xp-switch v-model="checked1" size="default" />
  <xp-switch v-model="checked2" size="large" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
const checked1 = ref(false);
const checked2 = ref(false);
</script>
```
:::

## 属性

| 属性           | 说明                   | 类型    | 可选值                  | 默认值  |
| :------------- | :--------------------- | :------ | :---------------------- | :------ |
| v-model        | 绑定值                 | boolean | -                       | false   |
| active-color   | 在开启状态时的背景颜色 | string  | -                       | #18a058 |
| inactive-color | 在关闭状态时的背景颜色 | string  | -                       | #dbdbdb |
| disabled       | 是否禁用               | boolean | -                       | false   |
| size           | 大小                   | string  | small / default / large | default |


<script setup lang="ts">
  import switchDemo1 from './demo/switch/switchDemo1.vue'
  import switchDemo2 from './demo/switch/switchDemo2.vue'
  import switchDemo3 from './demo/switch/switchDemo3.vue'
</script>

<style>
.example .xp-switch {
  margin-right:10px;
}
</style>