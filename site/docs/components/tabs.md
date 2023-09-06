# Tabs 标签页

## 基础用法

<div class="example">
<tabsDemo1 />
</div>

::: details 显示代码

```html
<template>
  <xp-tabs v-model="selected">
    <xp-tab title="我们">我们</xp-tab>
    <xp-tab title="半推半就">半推半就</xp-tab>
    <xp-tab title="的">的</xp-tab>
    <xp-tab title="人生">人生</xp-tab>
  </xp-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";

const selected = ref("半推半就");
</script>
```
:::


## 卡片风格

<div class="example">
<tabsDemo2 />
</div>

::: details 显示代码

```html
<template>
  <xp-tabs v-model="selected" type="card">
    <xp-tab title="我们">我们</xp-tab>
    <xp-tab title="半推半就">半推半就</xp-tab>
    <xp-tab title="的">的</xp-tab>
    <xp-tab title="人生">人生</xp-tab>
  </xp-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";

const selected = ref("我们");
</script>
  
```
:::

## 属性

| 属性    | 说明     | 类型    | 可选值      | 默认值 |
| :------ | :------- | :------ | :---------- | :----- |
| v-model | 绑定值   | boolean | -           | -      |
| type    | 风格类型 | string  | line / card | -      |


<script setup lang="ts">
  import tabsDemo1 from './demo/tabs/tabsDemo1.vue'
  import tabsDemo2 from './demo/tabs/tabsDemo2.vue'
</script>