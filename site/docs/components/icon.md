# Icon 图标

Xpxp-UI 推荐使用
  <a style="text-decoration: underline; color: #18a058" href="https://www.xicons.org/#/" target="_blank">xicons</a>作为图标库。

## 基础使用

<ClientOnly>

<div class="example">
  <iconDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html

```
:::

## 自定义图标

<ClientOnly>

<div class="example">
  <iconDemo2 />
</div>
</ClientOnly>

::: details 显示代码

```html

```
:::

## 深度
<ClientOnly>

<div class="example">
  <iconDemo3 />
</div>
</ClientOnly>

::: details 显示代码

```html

```
:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                       | 默认  |
| ------------- | ------------ | ------- | ------------------------------------------ | ----- |
| name          | icon名       | string  | 见上表(图标列表)                             | —     |
| bot           | 图标左上角红点       | boolean  |  —                            | —     |
| badge         | 红点内的数       | string  |  数字                            | —     |

<script setup lang="ts">
  import iconDemo1 from './demo/icon/iconDemo1.vue'
  import iconDemo2 from './demo/icon/iconDemo2.vue'
  import iconDemo3 from './demo/icon/iconDemo3.vue'
</script>


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
