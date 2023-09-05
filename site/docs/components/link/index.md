# Link 文字链接

## 基础用法

<div class="example">
  <div>
    <xp-link type="primary">主要链接</xp-link>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <xp-link type="primary">主要链接</xp-link>
  </div>
</template>
```

:::

## 禁用状态

<div class="example">
  <div>
    <xp-link type="primary" disabled>主要链接</xp-link>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <xp-link type="primary" disabled>主要链接</xp-link>
  </div>
</template>
```

:::

## 下划线

<div class="example">
  <div>
    <xp-link type="primary" underline>有下划线</xp-link>
    <xp-link type="primary" >无下划线</xp-link>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <xp-link type="primary" underline>有下划线</xp-link>
    <xp-link type="primary" >无下划线</xp-link>
  </div>
</template>
```

:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                       | 默认  |
| ------------- | ------------ | ------- | ------------------------------------------ | ----- |
| type          | 类型       | string  | primary / success / warning / danger / info / —                             | —     |
| disabled           | 禁用       | boolean  |  —                            | —     |
| underline         | 下划线       | boolean  | —                             | —     |


<style>
.example a {
  margin-right:10px;
}
.primary{
  color:#409eff !important
}
</style>
