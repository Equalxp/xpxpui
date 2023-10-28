# Ellipsis 文本省略

复杂度不会消失，只会转移。

## 基础用法

<ClientOnly>

<div class="example">
<ellipsisDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <div class="example">
    <xp-ellipsis style="max-width: 300px">
      只要有树叶飞舞的地方就会有火在燃烧，那火光会照耀着村子，然后新的树叶会再次萌芽。
    </xp-ellipsis>
  </div>
</template>
```

:::

## 最大行数

<ClientOnly>

<div class="example">
<ellipsisDemo2 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-ellipsis style="max-width: 300px" :line-clamp="2">
    大千世界，无奇不有。我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！
    我叫陈平安，平平安安的平安。我是一名剑客。
  </xp-ellipsis>
</template>
```

:::


## 展开方式

<ClientOnly>

<div class="example">
<ellipsisDemo3 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <xp-ellipsis style="max-width: 300px" :line-clamp="2" expand-trigger="click">
    一场谋杀案使银行家安迪（蒂姆•罗宾斯）蒙冤入狱，
    谋杀妻子及其情人的指控将囚禁他终生。
    在肖申克监狱的首次现身就让监狱“大哥”瑞德（摩根•弗里曼）对他另眼相看。
  </xp-ellipsis>
</template>
```

:::


## 属性

| 属性           | 说明           | 类型            | 可选值 | 默认值 |
| :------------- | :------------- | :-------------- | :----- | :----- |
| expand-trigger | 展开的触发方式 | string          | click  | -      |
| line-clamp     | 最大行数       | number / string | -      | -      |

## 插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 文本省略的内容 |


<script setup lang="ts">
  import ellipsisDemo1 from './demo/ellipsis/ellipsisDemo1.vue'
  import ellipsisDemo2 from './demo/ellipsis/ellipsisDemo2.vue'
  import ellipsisDemo3 from './demo/ellipsis/ellipsisDemo3.vue'
</script>