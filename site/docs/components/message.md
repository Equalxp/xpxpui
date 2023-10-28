# message 消息提示

（一般是）从浏览器顶部降下来的神谕。

## 基础使用

<ClientOnly>

<div class="example">
<messageDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-button @click="open">Show Message</xp-button>
  <xp-button @click="openVn">Vnode</xp-button>
</template>

<script setup lang="ts">
import { h } from "vue";
import XpMessage from "@/lib/message/index.ts";

const open = () => {
  XpMessage("This is a Message");
  // XpMessage();
};

const openVn = () => {
  XpMessage({
    // h返回值会被作为组件的DOM结构 VNode
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>
```
:::


## 不同状态

<ClientOnly>

<div class="example">
<messageDemo2 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-button @click="open1">Info</xp-button>
  <xp-button @click="open2">success</xp-button>
  <xp-button @click="open3">Warning</xp-button>
  <xp-button @click="open4">Error</xp-button>
</template>

<script setup lang="ts">
import XpMessage from "@/lib/message/index.ts";

const open1 = () => {
  XpMessage("this is a message.");
};
const open2 = () => {
  XpMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  XpMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  XpMessage.error("Oops, this is a error message.");
};
</script>

```
:::

## 可关闭的消息提示

<ClientOnly>

<div class="example">
<messageDemo3 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-button @click="open1">Info</xp-button>
  <xp-button @click="open2">success</xp-button>
  <xp-button @click="open3">Warning</xp-button>
  <xp-button @click="open4">Error</xp-button>
</template>

<script setup lang="ts">
import XpMessage from "@/lib/message/index.ts";

const open1 = () => {
  XpMessage({
    message: "this is a message.",
    showClose: true,
  });
};
const open2 = () => {
  XpMessage({
    message: "Congrats, this is a success message.",
    type: "success",
    showClose: true,
  });
};
const open3 = () => {
  XpMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
    showClose: true,
  });
};
const open4 = () => {
  XpMessage({
    type: "error",
    message: "Oops, this is a error message.",
    showClose: true,
    duration: 0,
  });
};
</script>

```
:::

## 居中

<ClientOnly>

<div class="example">
<messageDemo4 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-button @click="open1">Info</xp-button>
  <xp-button @click="open2">success</xp-button>
  <xp-button @click="open3">Warning</xp-button>
  <xp-button @click="open4">Error</xp-button>
</template>

<script setup lang="ts">
import XpMessage from "@/lib/message/index.ts";

const open1 = () => {
  XpMessage({
    message: "this is a message.",
    showClose: true,
    center: true,
  });
};
const open2 = () => {
  XpMessage({
    message: "Congrats, this is a success message.",
    type: "success",
    showClose: true,
    center: true,
  });
};
const open3 = () => {
  XpMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
    showClose: true,
    center: true,
  });
};
const open4 = () => {
  XpMessage({
    type: "error",
    message: "Oops, this is a error message.",
    showClose: true,
    duration: 0,
    center: true,
  });
};
</script>
```
:::

## 属性

| 属性       | 说明                                          | 类型                 | 可选值                           | 默认值        |
| :--------- | :-------------------------------------------- | :------------------- | :------------------------------- | :------------ |
| message    | 消息文字                                      | string / VNode       | -                                | -             |
| type       | 消息类型                                      | string               | success / warning / info / error | info          |
| duration   | 显示时间，单位为毫秒。 设为 0 则不会自动关闭  | number               | -                                | 3000          |
| show-close | 是否显示关闭按钮                              | boolean              | -                                | false         |
| center     | 文字是否居中                                  | boolean              | -                                | false         |
| on-close   | 关闭时的回调函数, 参数为被关闭的 message 实例 | function             | -                                | -             |
| offset     | Message 距离窗口顶部的偏移量                  | number               | -                                | 20            |
| appendTo   | 设置组件的根元素                              | string / HTMLElement | -                                | document.body |

## 方法

| 方法  | 说明               | 参数 |
| :---- | :----------------- | :--- |
| close | 关闭当前的 Message | -    |


<script setup lang="ts">
  import messageDemo1 from './demo/message/messageDemo1.vue'
  import messageDemo2 from './demo/message/messageDemo2.vue'
  import messageDemo3 from './demo/message/messageDemo3.vue'
  import messageDemo4 from './demo/message/messageDemo4.vue'
</script>