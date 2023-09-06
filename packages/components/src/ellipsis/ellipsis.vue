<template>
  <div @click="toggle" class="xp-ellipsis" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue';
import './style/index.less';
defineOptions({
  name: 'xp-ellipsis'
});

const props = defineProps({
  lineClamp: {
    type: Number
  },
  expandTrigger: String
});
const { lineClamp, expandTrigger } = props;

const classes = computed(() => ({
  ['xp-ellipsis-line-clamp']: lineClamp,
  ['xp-ellipsis-expand-trigger']: expandTrigger
}));

let styles = reactive({});
const isExpand = ref(false);
styles['-webkit-line-clamp'] = lineClamp;

watch(
  () => isExpand.value,
  () => {
    styles['-webkit-line-clamp'] = !isExpand.value ? lineClamp : '';
  }
);

const toggle = () => {
  if (expandTrigger === 'click') {
    isExpand.value = !isExpand.value;
  }
};
</script>
