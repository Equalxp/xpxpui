<template>
  <!-- dot外框 -->
  <div class="dot-wrapper" v-if="hasDot">
    <!-- 每一个dot -->
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{ backgroundColor: (item) - 1 === currentIndex ? dotBgColor : '#fff' }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>    
</template>

<script setup lang="ts">
import './style/index.less'
const props = defineProps({
  itemLen: {
    type: Number,
  },
  currentIndex: {
    type: Number
  },
  hasDot: {
    type: Boolean,
    default: true
  },
  dotBgColor: {
    type: String,
    default: '#ff5000'
  }
})

const emits = defineEmits(['dotClick'])

const dotClick = (index:Number) => {
  emits('dotClick',index)
}

</script>

<script lang="ts">
export default {
  name: "XpCarouselDot",
};
</script>
