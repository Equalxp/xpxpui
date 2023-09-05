<template>
  <transition name="slide-fade">
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import './style/index.less'
import {
  getCurrentInstance,
  inject,
  reactive,
  toRefs,
  watch
} from 'vue'

const parentData = inject('XpCarouselParentKey')
const instance = getCurrentInstance()
const state = reactive({
  selfIndex: instance.vnode.key,
  currentIndex: parentData.currentIndex
})
watch(() => {
  return parentData.currentIndex;
}, (value) => {
  state.currentIndex = value
})

const { selfIndex, currentIndex } = toRefs(state)

</script>

<script lang="ts">
export default {
  name: "XpCarouselItem",
};
</script>