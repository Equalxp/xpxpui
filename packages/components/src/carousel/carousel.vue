<template>
  <div 
    class="carousel" 
    @mouseenter="mouseEnter" 
    @mouseleave="mouseLeave"
  >
    <div class="inner">
      <CarouselDot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      >
      </CarouselDot>
      <CarouselDirector dir="prev" @dirClick="dirClick"></CarouselDirector>
      <CarouselDirector dir="next" @dirClick="dirClick"></CarouselDirector>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
  provide
} from 'vue';
import './style/index.less'
import CarouselDot from './carouselDot.vue'
import CarouselDirector from './carouselDirector.vue'
const props = defineProps({
  // 自动播放
  autoplay: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  },
  // 起始图片
  initial: {
    type: Number,
    default: 0
  },
  // 是否原点切换
  hasDot: {
    type: Boolean,
    default: true
  },
  // 是两侧方向按钮
  hasDirector: {
    type: Boolean,
    default: true
  },
  // 圆点颜色
  dotBgColor: {
    type: String
  }
})

const instance = getCurrentInstance()
const state = reactive({
  // 当前图片索引
  currentIndex: props.initial,
  itemLen: 0
})

provide('XpCarouselParentKey',state)

let timer = null

// 隔duration就进行自动播放下一张
const autoPlay = () => {
  if(props.autoplay) {
    timer = setInterval(()=>{
      setIndex('next')
    }, props.duration)
  }
}

// 切换下一张
const setIndex = (dir:String) => {
  switch (dir) {
    // next 下一张
    case 'next': 
      state.currentIndex += 1
      if (state.currentIndex === state.itemLen) {
        state.currentIndex = 0
      }
      break
    // prev 上一张
    case 'prev': 
      state.currentIndex -= 1
      if (state.currentIndex === -1) {
        state.currentIndex = state.itemLen - 1
      }
      break;
    default: break
  }
}

// 小圆点点击
const dotClick = (index) => {
  state.currentIndex = index
}
// 左右侧按钮
const dirClick = (dir:Number) => {
  setIndex(dir)
}
// 停止自动播放
const mouseEnter = () => {
  _clearIntervalFn()
}
// 继续自动播放
const mouseLeave = () => {
  autoPlay()
}
onMounted(() => {
  state.itemLen = instance.slots.default()[0].children.length
  autoPlay()
})

onBeforeUnmount(() => {
  _clearIntervalFn()
})

function _clearIntervalFn() {
  clearInterval(timer)
  timer = null
}

const { currentIndex, itemLen } = toRefs(state)


</script>

<script lang="ts">
export default {
  name: "XpCarousel",
};
</script>
