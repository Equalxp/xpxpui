# 抖动

## 使用方法

用于提醒用户某个信息传没有填写

<div class="example">
<demoVue />
</div>

::: details 显示代码

```html
<template>
  <div class="shake">
    <xp-shake v-model="isshake" @click="isshake = true">点击抖动</xp-shake>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const isshake = ref(false);
</script>
```

:::

<script setup lang="ts">
  import demoVue from './demo/shake/shake.vue'
</script>

## Attributes
 
| 参数          | 说明         | 类型    | 可选值     | 默认  |
| ------------- | ------------ | ------- | --------- | ----- |
|   |     |      |
|   |     |      |
|   |     |      |