<template>
  <div class="xp-radio" @click="handleChange" :class="classes">
    <span class="xp-radio-input" :class="classes"></span>
    <span class="xp-radio-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRadio, radioProps, radioEmits } from './radio';
import './style/index.less';
const props = defineProps(radioProps);
const emits = defineEmits(radioEmits);

const { modelValue, label, size, disabled, classes } = useRadio(props, emits);

const handleChange = () => {
  if (!disabled.value) {
    modelValue.value = props.label;
  }
};
</script>

<script lang="ts">
export default {
  name: 'XpRadio'
};
</script>
