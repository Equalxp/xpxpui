# Icon 图标

## 基础使用

<div class="example">
    <div>
        <xp-icon name="edit"></xp-icon>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <xp-icon name="edit"></xp-icon>
  </div>
</template>
```
:::

## 圆点提示
<div class="example">
    <div>
        <xp-icon name="edit" dot badge="9"></xp-icon>
    </div>
</div>

::: details 显示代码

```html
<template>
    <div class="example">
        <xp-icon name="edit"  dot badge="9"></xp-icon>
    </div>
</template>
```
:::

## 图标列表

<div class="icon_content">
<div class="icon_list">
    <xp-icon name="edit"></xp-icon>
    <div class="icon_name">edit</div>
</div>
<div class="icon_list">
    <xp-icon name="discount"></xp-icon>
    <div class="icon_name">discount</div>
</div>
    <div class="icon_list">
    <xp-icon name="direction-left"></xp-icon>
    <div class="icon_name">direction-left</div>
</div>
    <div class="icon_list">
    <xp-icon name="eye-close"></xp-icon>
    <div class="icon_name">eye-close</div>
</div>
    <div class="icon_list">
    <xp-icon name="email"></xp-icon>
    <div class="icon_name">email</div>
</div>
    <div class="icon_list">
    <xp-icon name="error"></xp-icon>
    <div class="icon_name">error</div>
</div>
    <div class="icon_list">
    <xp-icon name="favorite"></xp-icon>
    <div class="icon_name">favorite</div>
</div>
    <div class="icon_list">
    <xp-icon name="favorite"></xp-icon>
    <div class="icon_name">favorite</div>
</div>
    <div class="icon_list">
    <xp-icon name="file-common"></xp-icon>
    <div class="icon_name">file-common</div>
</div>
    <div class="icon_list">
    <xp-icon name="file-common"></xp-icon>
    <div class="icon_name">file-common</div>
</div>
<div class="icon_list">
    <xp-icon name="file-delete"></xp-icon>
    <div class="icon_name">file-delete</div>
</div>
<div class="icon_list">
    <xp-icon name="column-4"></xp-icon>
    <div class="icon_name">column-4</div>
</div>
    <div class="icon_list">
    <xp-icon name="customer-service"></xp-icon>
    <div class="icon_name">customer-service</div>
</div>
    <div class="icon_list">
    <xp-icon name="good"></xp-icon>
    <div class="icon_name">good</div>
</div>
<div class="icon_list">
    <xp-icon name="hide"></xp-icon>
    <div class="icon_name">hide</div>
</div>
    <div class="icon_list">
    <xp-icon name="close"></xp-icon>
    <div class="icon_name">close</div>
</div>
<div class="icon_list">
    <xp-icon name="add"></xp-icon>
    <div class="icon_name">add</div>
</div>
<div class="icon_list">
    <xp-icon name="arrow-double-right"></xp-icon>
    <div class="icon_name">arrow-double-right</div>
</div>
<div class="icon_list">
    <xp-icon name="back"></xp-icon>
    <div class="icon_name">back</div>
</div>
<div class="icon_list">
    <xp-icon name="arrow-double-right"></xp-icon>
    <div class="icon_name">arrow-double-right</div>
</div>
</div>


## Attributes

| 参数          | 说明         | 类型    | 可选值                                       | 默认  |
| ------------- | ------------ | ------- | ------------------------------------------ | ----- |
| name          | icon名       | string  | 见上表(图标列表)                             | —     |
| bot           | 图标左上角红点       | boolean  |  —                            | —     |
| badge         | 红点内的数       | string  |  数字                            | —     |



<style>
.xp-icon{
    font-size:24px;
}
.icon_content{
    overflow:hidden;
    border-top:1px solid #f5f5f5;
    border-left:1px solid #f5f5f5;
}
.icon_content .icon_list {
    float:left;
    width:20%;
    height:110px;
    border-right:1px solid #f5f5f5;
    border-bottom:1px solid #f5f5f5;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-wrap:wrap;
    box-sizing:border-box;
    cursor: pointer;
}
.icon_name {
    color:gray;
    font-size:14px;
    width:100%;
    text-align:center
}
</style>
