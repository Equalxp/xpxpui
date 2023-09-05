<template>
  <Icon class="xp-icon" :size="size" :style="{ opacity: `${depth / 10}` }">
    <slot></slot>
  </Icon>
</template>

<script setup lang="ts">
import { Icon } from "@vicons/utils";
defineProps({
  // 设置深度
  depth: Number,
  // 设置大小
  size: {
    type: [Number, String],
    default: "40px",
  },
});
</script>
<script lang="ts">
export default {
  name: "XpIcon",
};
</script>

<style lang="less">
.xp-icon {
  display: inline-block;
  > span {
    display: inline-block;
  }
}
</style>
