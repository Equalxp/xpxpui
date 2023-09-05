<template> 
  <!-- button为整个按钮 span为里面的小圆 -->
  <button
    class="xp-switch"
    :class="classes"
    @click="toggle"
    :style="{ background: modelValue ? activeColor : inactiveColor }"
    >
    <span></span>
  </button>
</template>

<script setup lang="ts">
import './style/index.less'
import { computed, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  // 选中
  activeColor: {
    type: String,
    default: "#18a058",
  },
  // 没选中
  inactiveColor: {
    type: String,
    default: "#dbdbdb",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
  if(props.disabled) {
    return;
  }
  emit('update:modelValue',!props.modelValue)
};

const { modelValue, disabled, size } = toRefs(props);

const classes = computed(()=>{
  // 选中？ 禁止？ 大小？
  return {
    [`xp-switch-checked`]: modelValue.value,
    [`xp-switch-disabled`]: disabled.value,
    [`xp-switch-${size.value}`]: size.value,
  };
});
</script>

<script lang="ts">
export default {
  name: "XpSwitch",
};
</script> -->