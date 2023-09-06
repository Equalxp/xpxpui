<template>
  <a class="xp-link" :class="classes">
    <!-- 图标icon 左边 -->
    <xp-icon
      v-if="icon && iconPlacement === 'left'"
      :size="iconSize"
      class="xp-icon-left"
    >
      <component :is="icon" />
    </xp-icon>
    <slot></slot>
    <!-- 图标icon 右边 -->
    <xp-icon
      v-if="icon && iconPlacement === 'right'"
      :size="iconSize"
      class="xp-icon-right"
    >
      <component :is="icon" />
    </xp-icon>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './style/index.less';
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    deafult: false
  },
  icon: {
    type: [String, Object]
  },
  iconPlacement: {
    type: String,
    default: 'left'
  },
  iconSize: {
    type: [Number, String],
    default: '18px'
  }
});

const { type, underline, disabled } = props;

const classes = computed(() => {
  return {
    [`xp-link-${type}`]: type,
    ['xp-link-underline']: underline,
    ['xp-link-disabled']: disabled
  };
});
</script>

<script lang="ts">
export default {
  name: 'XpLink'
};
</script>
