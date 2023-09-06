<template>
  <div ref="radioGroupRef" class="jw-radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  disabled: Boolean,
  size: String,
  border: Boolean
});
const emits = defineEmits(['update:modelValue', 'change']);

const changeEvent = (value: any) => {
  emits('update:modelValue', value);
  emits('change', value);
};

// provide k-v
provide(
  'radioGroupKey',
  reactive({
    ...toRefs(props),
    changeEvent
  })
);
</script>

<script lang="ts">
export default {
  name: 'XpRadioGroup'
};
</script>

<style scoped></style>
