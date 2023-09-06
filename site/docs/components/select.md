# 选择 Select

## 基础用法

<div class="example">
<selectDemo1 />
</div>

::: details 显示代码

```html
<template>
  <xp-select
    id="select"
    style="width: 200px" 
    :options="options" 
    v-model="value"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("3");
const options = [
  {
    label: "再见杰克",
    value: "1",
  },
  {
    label: "西湖",
    value: "2",
  },
  {
    label: "为你唱歌",
    value: "3",
  },
  {
    label: "公路之歌",
    value: "4",
  },
  {
    label: "愿爱无忧",
    value: "5",
  },
  {
    label: "无法离地的飞行",
    value: "6",
  },
  {
    label: "秦皇岛",
    value: "7",
  },
  {
    label: "十万嬉皮",
    value: "8",
  },
  {
    label: "大石碎胸口",
    value: "9",
  },
  {
    label: "山雀",
    value: "10",
  },
];
</script>

```
:::


## 禁用选项

<div class="example">
<selectDemo2 />
</div>


::: details 显示代码

```html
<template>
  <xp-select
    id="select"
    style="width: 200px" 
    :options="options" 
    v-model="value"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("1");
const options = [
  {
    label: "再见杰克",
    value: "1",
    
  },
  {
    label: "西湖",
    value: "2",
    disabled: true,
  },
  {
    label: "为你唱歌",
    value: "3",
  },
  {
    label: "公路之歌",
    value: "4",
    disabled: true,
  },
  {
    label: "愿爱无忧",
    value: "5",
  },
  {
    label: "无法离地的飞行",
    value: "6",
  },
  {
    label: "秦皇岛",
    value: "7",
  },
  {
    label: "十万嬉皮",
    value: "8",
    disabled: true,
  },
  {
    label: "大石碎胸口",
    value: "9",
    disabled: true,
  },
  {
    label: "山雀",
    value: "10",
  },
];
</script>

```
:::


## 禁用状态

<div class="example">
<selectDemo3 />
</div>


::: details 显示代码

```html
<template>
  <xp-select
    id="select"
    style="width: 200px"
    :options="options"
    v-model="value"
    disabled
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("1");
const options = [
  {
    label: "再见杰克",
    value: "1",
    
  },
  {
    label: "西湖",
    value: "2",
    disabled: true,
  },
  {
    label: "为你唱歌",
    value: "3",
  },
  {
    label: "公路之歌",
    value: "4",
    disabled: true,
  },
  {
    label: "愿爱无忧",
    value: "5",
  },
  {
    label: "无法离地的飞行",
    value: "6",
  },
  {
    label: "秦皇岛",
    value: "7",
  },
  {
    label: "十万嬉皮",
    value: "8",
    disabled: true,
  },
  {
    label: "大石碎胸口",
    value: "9",
    disabled: true,
  },
  {
    label: "山雀",
    value: "10",
  },
];
</script>

```
:::


## 可清空单选

<div class="example">
<selectDemo4 />
</div>


::: details 显示代码

```html
<template>
  <xp-select
    id="select"
    style="width: 200px"
    :options="options"
    v-model="value"
    clearable
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("1");
const options = [
  {
    label: "再见杰克",
    value: "1",
    
  },
  {
    label: "西湖",
    value: "2",
    disabled: true,
  },
  {
    label: "为你唱歌",
    value: "3",
  },
  {
    label: "公路之歌",
    value: "4",
    disabled: true,
  },
  {
    label: "愿爱无忧",
    value: "5",
  },
  {
    label: "无法离地的飞行",
    value: "6",
  },
  {
    label: "秦皇岛",
    value: "7",
  },
  {
    label: "十万嬉皮",
    value: "8",
    disabled: true,
  },
  {
    label: "大石碎胸口",
    value: "9",
    disabled: true,
  },
  {
    label: "山雀",
    value: "10",
  },
];
</script>

```
:::


## 多选

<div class="example">
<selectDemo5 />
</div>


::: details 显示代码

```html
<template>
  <xp-select
    id="select"
    style="width: 400px"
    :options="options"
    v-model="value"
    multiple
    placeholder="Please Choose"
    clearable
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref(["3", "9", "1","10"]);
const options = [
  {
    label: "再见杰克",
    value: "1",
  },
  {
    label: "西湖",
    value: "2",
    disabled: true,
  },
  {
    label: "为你唱歌",
    value: "3",
  },
  {
    label: "公路之歌",
    value: "4",
  },
  {
    label: "愿爱无忧",
    value: "5",
  },
  {
    label: "无法离地的飞行",
    value: "6",
  },
  {
    label: "秦皇岛",
    value: "7",
    disabled: true,
  },
  {
    label: "十万嬉皮",
    value: "8",
  },
  {
    label: "大石碎胸口",
    value: "9",
  },
  {
    label: "山雀",
    value: "10",
  },
];
</script>

```
:::

## 属性

| 属性        | 说明             | 类型                      | 可选值 | 默认值 |
| :---------- | :--------------- | :------------------------ | :----- | :----- |
| v-model     | 绑定值           | boolean / string / number | -      | -      |
| placeholder | 占位符           | string                    | -      | 请选择 |
| clearable   | 是否可以清空选项 | boolean                   | -      | false  |
| disabled    | 是否禁用         | boolean                   | -      | false  |
| options     | 配置选项内容     | Array                     | -      | []     |
| multilple   | 是否为多选       | boolean                   | -      | false  |

## 事件

| 事件名 | 说明                                        | 回调参数     |
| :----- | :------------------------------------------ | :----------- |
| change | 选中值发生变化时触发                        | 目前的选中值 |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发 | -            |



<script setup lang="ts">
  import selectDemo1 from './demo/select/selectDemo1.vue'
  import selectDemo2 from './demo/select/selectDemo2.vue'
  import selectDemo3 from './demo/select/selectDemo3.vue'
  import selectDemo4 from './demo/select/selectDemo4.vue'
  import selectDemo5 from './demo/select/selectDemo5.vue'
</script>