<template>
  <button class="xp-button" :class="classes">
    <span v-if="loading" class="xp-loadingIndicator"></span>
    <!-- 图标 -->
    <div v-if="iconPlacement === 'left' && solts.icon" class="slot-icon-left">
      <slot name="icon"></slot>
    </div>
    <!-- button里面显示文字传 用slot -->
    <slot></slot>
    <!-- 图标 -->
    <div v-if="iconPlacement === 'right' && solts.icon" class="slot-icon-right">
      <slot name="icon"></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue';
import './style/index.less';
const props = defineProps({
  // props传的值进行类型限定和默认值的设置
  theme: {
    type: String,
    default: 'default'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default'
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconPlacement: {
    type: String,
    default: 'left'
  }
});

const { theme, dashed, size, round, disabled, circle } = props;
const solts = useSlots();
const classes = computed(() => {
  // class样式数组
  return {
    [`xp-theme-${theme}`]: theme,
    [`is-dashed`]: dashed,
    [`xp-button-${size}`]: size,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled
  };
});
</script>

<script lang="ts">
export default {
  name: 'xpButton'
};
</script>
