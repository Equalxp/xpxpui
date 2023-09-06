# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

<div class="example">
<dialogDemo1 />
</div>


::: details 显示代码

```html
<template>
  <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>
  <xp-dialog v-model="visible" />
</template>
  
<script setup lang="ts">
import { ref } from "vue";
const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
</script>
```
:::



<!-- ## 一句话打开Dialog

<div class="example">
<dialogDemo3 />
</div>


::: details 显示代码

```html

```
::: -->


<script setup lang="ts">
  import dialogDemo1 from './demo/dialog/dialogDemo1.vue'
  // import dialogDemo2 from './demo/dialog/dialogDemo2.vue'
  // import dialogDemo3 from './demo/dialog/dialogDemo3.vue'
</script>
