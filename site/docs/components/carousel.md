# Carousel 轮播图

图片轮流播放给你看

## 基础使用

图片自行更改

<div class="example">
<carouselDemo1 />
</div>


::: details 显示代码

```html
<template>
  <div class="container">
    <xp-carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="#000"
    >
      <XpCarouselItem v-for="(item, index) of carouselData" :key="index">
        <img :src="item.img_name" />
      </XpCarouselItem>
    </xp-carousel>
  </div>
</template>
<script setup lang="ts">
import xili from '../../../assets/image/carouselImages/xili.png'
import blazer from "../../../assets/image/carouselImages/blazer.png"
import mdla from "../../../assets/image/carouselImages/mdla.jpg"
import staple from "../../../assets/image/carouselImages/staple.jpg"
import milk from "../../../assets/image/carouselImages/milk.png"

const carouselData = [
  {
    img_name: xili,
  },
  {
    img_name: blazer
  },
  {
    img_name: mdla
  },
  {
    img_name: staple
  },
  {
    img_name: milk
  },
]

</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  margin: auto;
  width: 500px;
  height: 280px;
  scroll-snap-type: x mandatory;
}
img {
  scroll-snap-align: center;
  width: 100%;
  height: 100%;
}
</style>
```
:::

## Carousel 属性

| 属性        | 说明               | 类型    | 可选值       | 默认值 |
| :---------- | :----------------- | :------ | :----------- | :----- |
| autoplay    | 是否自动轮播       | boolean | true / false | true   |
| duration    | 图片停留时间       | number  | -            | 3000   |
| initial     | 起始图片 id        | number  | 0 - (n-1)    | 0      |
| hasDot      | 是否有切换圆点     | boolean | true / false | true   |
| hasDirector | 是否有两侧方向按钮 | boolean | true / false | true   |
| dotBgColor  | 圆点颜色           | string  | -            | -      |


<script setup lang="ts">
  import carouselDemo1 from './demo/carousel/carouselDemo1.vue'
</script>