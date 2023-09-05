<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div class="director dir-prev" v-else-if="dir === 'prev'">
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>

<script setup lang="ts">
import { useThrottleFn } from "@xpxpui/utils";
import './style/index.less'
const props = defineProps({
  dir: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['dirClick'])

const _dirClick = (dir:String) => {
  emits('dirClick',dir)
}

// 节流
const dirClick = useThrottleFn(_dirClick,500)


</script>

<script lang="ts">
export default {
  name: "XpCarouselDirector",
};
</script>
