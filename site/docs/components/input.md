# Input 输入框

::: tip

Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用 v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰
:::

## 基础用法

<div class="example">
  <inputDemo1 />
</div>


::: details 显示代码

```html
<template>
  <xp-input placeholder="请输入内容" v-model="value" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("hello world");
</script>
```

:::


## 禁用状态

<div class="example">
  <inputDemo2 />
</div>

::: details 显示代码

```html
<template>
  <xp-input placeholder="请输入内容" v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("hello world");
</script>
```

:::



## 可清空

<div class="example">
  <inputDemo3 />
</div>


::: details 显示代码

```html
<template>
  <xp-input placeholder="请输入内容" v-model="value" clearable />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello world");
</script>

```

:::



## 密码框

<div class="example">
  <inputDemo4 />
</div>


::: details 显示代码

```html
<template>
  <!-- 显示密码type -->
  <xp-input placeholder="请输入内容" v-model="value" show-password />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello world");
</script>
```

:::



## 文本域

<div class="example">
  <inputDemo5 />
</div>


::: details 显示代码

```html
<template>
  <xp-input
    placeholder="请输入内容"
    v-model="value"
    type="textarea"
    style="width: 300px"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello world");
</script>

```

:::



## 带 icon 的输入框

<div class="example">
  <inputDemo6 />
</div>


::: details 显示代码

```html
<template>
  <xp-input
    placeholder="请输入内容"
    v-model="value"
    :suffixIcon="Search28Filled"
    show-password
    clearable
  />
  <xp-input
    placeholder="请输入内容"
    v-model="value1"
    :prefixIcon="Search28Filled"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search28Filled } from "@vicons/fluent";

const value = ref("hello world");
const value1 = ref("hello world");
</script>

```

:::


## 手动 focus / select / blur

<div class="example">
  <inputDemo7 />
</div>

::: details 显示代码

```html
<template>
  <xp-button @click="handleFocus">Focus</xp-button>
  <xp-button @click="handleSelect">Select</xp-button>
  <xp-button @click="handleBlur">Blur</xp-button>
  <xp-input placeholder="请输入内容" v-model="value" ref="inputInstRef" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("life is fucking movie 人生如戏啊");
const inputInstRef = ref();
const handleFocus = () => {
  inputInstRef.value.focus();
};
const handleBlur = () => {
  inputInstRef.value.blur();
};
const handleSelect = () => {
  inputInstRef.value.select();
};
</script>

```

:::


## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| type          | 类型         | string  | text，textarea 和其他 原生 input 的 type 值                               | text     |
| v-model          | 绑定值         | string / number  | —  | —     |
| placeholder         | 输入框占位文本 | string | —                                                  | — |
| clearable         | 是否可清空 | boolean | —                                                  | false |
| prefix-icon      | 输入框头部图标     | Component | —                                                  | — |
| suffix-icon          | 输入框尾部图标     | Component  | —                                                  | —     |
| readonly | 原生属性，是否只读     | boolean  | —                                         | fasle  |


## Event

| 事件名    |  说明                        | 回调函数 |
| ----------| --------------------------- | -------- |
|  input  |  在 Input 值改变时触发         |  (value: string / number)   |
|  clear  |  在点击由 clearable 属性生成的清空按钮时触发  |   —   |
|  blur   |   在 Input 失去焦点时触发     |  (event: Event)  |
|  focus  |   在 Input 获得焦点时触发     |   (event: Event)  |


## Function
| 方法  |  说明    |     参数     |
| ---- | -----------------  | ----- |
| input | 使 input 获取焦点  |  —   |
| blur | 使 input 失去焦点  |   —  |
| select | 选中 input 中的文字  |  —   |

<script setup lang="ts">
  import inputDemo1 from './demo/input/inputDemo1.vue'
  import inputDemo2 from './demo/input/inputDemo2.vue'
  import inputDemo3 from './demo/input/inputDemo3.vue'
  import inputDemo4 from './demo/input/inputDemo4.vue'
  import inputDemo5 from './demo/input/inputDemo5.vue'
  import inputDemo6 from './demo/input/inputDemo6.vue'
  import inputDemo7 from './demo/input/inputDemo7.vue'
</script>


