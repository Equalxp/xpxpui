# Radio 单选框

## 基础用法

在一组备选项中进行单选

<ClientOnly>

<div class="example">
<radioDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <div style="width: 100%">
    <xp-radio v-model="radio1" label="1" size="large">选项1</xp-radio>
    <xp-radio v-model="radio1" label="2" size="large">选项2</xp-radio>
  </div>
  <div style="width: 100%">
    <xp-radio v-model="radio2" label="1">选项1</xp-radio>
    <xp-radio v-model="radio2" label="2">选项2</xp-radio>
  </div>
  <div style="width: 100%">
    <xp-radio v-model="radio3" label="1" size="small">选项1</xp-radio>
    <xp-radio v-model="radio3" label="2" size="small">选项2</xp-radio>
  </div>
  <div style="width: 100%">
    <xp-radio v-model="radio4" label="1" size="small" disabled>选项1</xp-radio>
    <xp-radio v-model="radio4" label="2" size="small" disabled>选项2</xp-radio>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio1 = ref("1");
const radio2 = ref("1");
const radio3 = ref("1");
const radio4 = ref("1");
</script>
```

:::


## 禁用状态

<ClientOnly>

<div class="example">
<radioDemo2 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-radio v-model="radio" label="1" disabled>选项1</xp-radio>
  <xp-radio v-model="radio" label="2" disabled>选项2</xp-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>
```

:::


## 尺寸

<ClientOnly>

<div class="example">
<radioDemo3 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-radio v-model="radio" label="1" size="small">选项1</xp-radio>
  <xp-radio v-model="radio" label="2">选项2</xp-radio>
  <xp-radio v-model="radio" label="3" size="large">选项3</xp-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>

```

:::



## 单选框组

<ClientOnly>

<div class="example">
<radioDemo4 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-radio-group v-model="radio" size="large">
    <xp-radio label="1">选项 A</xp-radio>
    <xp-radio label="2">选项 B</xp-radio>
    <xp-radio label="3" disabled>选项 C</xp-radio>
  </xp-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>
```

:::


## 边框

<ClientOnly>

<div class="example">
<radioDemo5 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-radio v-model="radio" label="1" size="small" border>选项1</xp-radio>
  <xp-radio v-model="radio" label="2" border>选项2</xp-radio>
  <xp-radio v-model="radio" label="3" size="large" border>选项3</xp-radio>

  <xp-radio v-model="radio1" label="4" size="small" border disabled>选项1</xp-radio>
  <xp-radio v-model="radio1" label="5" border disabled>选项2</xp-radio>
  <xp-radio v-model="radio1" label="6" size="large" border disabled>选项3</xp-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
const radio1 = ref("4");
</script>
```

:::



## Radio Attributes

| 参数          | 说明         | 类型    | 可选值     | 默认  |
| ------------- | ------------ | ------- | --------- | ----- |
| v-model  | 选中项绑定值    | string / number / boolean     | —  | —  |
| label    | 多选框对应的值  | string / number / boolean     | —  | —  |
| disabled | 是否禁用单选框  |  boolean    | —  | —  |
| border | 是否显示边框  |  boolean    | —  | false  |
| size | Radio 的尺寸 |  string | large / default /small | — |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | — | false |

## Radio 事件

| 事件名 | 说明                     | 回调参数 |
| :----- | :----------------------- | :------- |
| change | 当绑定值变化时触发的事件 | value    |


## Radio 插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |


## Radio-group 属性

| 属性     | 说明         | 类型                      | 可选值                 | 默认值 |
| :------- | :----------- | :------------------------ | :--------------------- | :----- |
| v-model  | 绑定值       | string / number / boolean | -                      | -      |
| disabled | 是否禁用     | boolean                   | -                      | false  |
| border   | 是否显示边框 | boolean                   | -                      | false  |
| size     | 单选框组尺寸 | string                    | large / default /small | -      |

## Radio-group 事件

| 事件名 | 说明                   | 回调参数              |
| :----- | :--------------------- | :-------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

## Radio-group 插槽

| 插槽名  | 说明           | 子标签 |
| :------ | :------------- | :----- |
| default | 自定义默认内容 | Radio  |


<script setup lang="ts">
  import radioDemo1 from './demo/radio/radioDemo1.vue'
  import radioDemo2 from './demo/radio/radioDemo2.vue'
  import radioDemo3 from './demo/radio/radioDemo3.vue'
  import radioDemo4 from './demo/radio/radioDemo4.vue'
  import radioDemo5 from './demo/radio/radioDemo5.vue'
</script>