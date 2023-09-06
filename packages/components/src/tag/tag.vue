<template>
  <div class="xp-tag" :class="classes" :style="style">
    <!-- 文字说明 -->
    <xp-ellipsis>
      <!-- <xp-ellipsis> -->
      <slot></slot>
    </xp-ellipsis>
    <!-- 图标 -->
    <xp-icon :size="18" v-if="closeable" @click="handleClose">
      <Close></Close>
    </xp-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './style/index.less';
import { Close } from '@vicons/ionicons5';
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String
  },
  closeable: {
    type: Boolean,
    default: false
  },
  color: {
    type: Object,
    default: undefined
  }
});
// 接收传递的函数
const emits = defineEmits(['close']);
const classes = computed(() => ({
  [`is-${props.type}`]: props.type,
  [`is-${props.size}`]: props.size,
  [`is-closeable`]: props.closeable
}));

const style = computed(() => {
  return props.color
    ? {
        color: props.color.color,
        backgroundColor: props.color.backgroundColor,
        borderColor: props.color.borderColor
      }
    : '';
});

// 点击函数触发事件
const handleClose = () => {
  emits('close');
};
</script>

<script lang="ts">
export default {
  name: 'xp-tag'
};
</script>
