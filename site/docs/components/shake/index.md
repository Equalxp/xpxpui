# 抖动

用于提醒用户某个信息没有填写

## 使用方法

<div class="example">
<template>
  <div class="shake">
    <k-shake v-model="isshake" @click="isshake = true">点击抖动</k-shake>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const isshake = ref(false)
</script>
</div>

::: details 显示代码

```html
<template>
  <div class="shake">
    <k-shake v-model="isshake" @click="isshake = true">点击抖动</k-shake>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const isshake = ref(false);
</script>
```

:::
