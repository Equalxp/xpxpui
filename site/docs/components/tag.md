# Tag 标签

## 基础用法

<ClientOnly>

<div  class="example">
<tagDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-tag>爱在西元前</xp-tag>
  <xp-tag type="success">听妈妈的话</xp-tag>
  <xp-tag type="warning">玫瑰花的葬礼</xp-tag>
  <xp-tag type="error">揪心的玩笑与漫长的白日梦</xp-tag>
  <xp-tag type="info">一丝不挂</xp-tag>
</template>
```
:::


## 尺寸

<ClientOnly>

<div  class="example">
<tagDemo2 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <xp-tag type="error" size="small">爱在西元前</xp-tag>
  <xp-tag type="success">一丝不挂</xp-tag>
  <xp-tag type="warning" size="large">玫瑰花的葬礼</xp-tag>
</template>

```
:::


## 可关闭

<ClientOnly>

<div  class="example">
<tagDemo3 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <xp-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closeable>
    {{ tag.name }}
  </xp-tag>
  <xp-tag closeable>Tag9</xp-tag>
</template>
<script setup lang="ts">
import { ref } from "vue";
const tags = ref([
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "error" },
]);
</script>
```
:::


## 颜色

<ClientOnly>

<div  class="example">
<tagDemo4 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <xp-tag :color="{ color: '#BBB', backgroundColor: '#5555555', borderColor: '#555' }">
    告别夜晚 等待天亮
  </xp-tag>
</template>

```
:::


## 动态编辑标签

<ClientOnly>

<div  class="example">
<tagDemo5 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <xp-tag
    v-for="tag in dynamicTags"
    :key="tag"
    closeable
    type="success"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </xp-tag>
  <xp-input
    v-if="inputVisible"
    :ref="(e) => (InputRef = e)"
    v-model="inputValue"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
    size="small"
    style="width: 180px"
  />
  <xp-button v-else size="samll" @click="showInput">+ New Tag</xp-button>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
const inputVisible = ref(false)
const inputValue = ref("")
const InputRef = ref()
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    // 自动获取焦点
    console.log(InputRef.value!.focus());
  })
}

// 在input框中输入东西后 失去焦点+点击保存
const handleInputConfirm = () => {
  if(inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  // input框消失
  inputVisible.value = false
  // input框里的数据清空
  inputValue.value = ""
}
</script>

```
:::

## Tag 属性

| 属性     | 说明                            | 类型    | 可选值                                                       | 默认值    |
| :------- | :------------------------------ | :------ | :----------------------------------------------------------- | :-------- |
| closable | 是否可关闭               | boolean | -                                                            | false     |
| type     | 类型                            | string  | default / primary / info / success / warning / error         | default   |
| size     | 尺寸                            | string  | small/ medium / large                                        | false     |
| color    | 标签颜色，设置该项后　type 无效 | string  |  color?: string, borderColor?: string, textColor?: string  | undefined |

## Tag 插槽
| 插槽名  | 说明     |      |
| :------ | :------- | ---- |
| default | 标签内容 | -    |


<script setup lang="ts">
  import tagDemo1 from './demo/tag/tagDemo1.vue'
  import tagDemo2 from './demo/tag/tagDemo2.vue'
  import tagDemo3 from './demo/tag/tagDemo3.vue'
  import tagDemo4 from './demo/tag/tagDemo4.vue'
  import tagDemo5 from './demo/tag/tagDemo5.vue'
</script>

<style>
.example .xp-tag {
  margin-right:10px;
}
</style>