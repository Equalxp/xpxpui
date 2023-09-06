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
import xili from '../../../assets/image/carouselImages/xili.png';
import blazer from '../../../assets/image/carouselImages/blazer.png';
import mdla from '../../../assets/image/carouselImages/mdla.jpg';
import staple from '../../../assets/image/carouselImages/staple.jpg';
import milk from '../../../assets/image/carouselImages/milk.png';

const carouselData = [
  {
    img_name: xili
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
  }
];
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
