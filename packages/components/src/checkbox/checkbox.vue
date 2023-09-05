<template>
  <label class="xp-checkbox" :class="classes" @click="handleChange" tabindex='0'>
    <!-- 选择图标 -->
    <span class="xp-checkbox-input" :class="classes">
      <!-- 选择上的图标icon  -->
      <xp-icon :color="iconColor" :size="iconSize">
        <Subtract12Filled v-if="indeterminate" />
        <Check v-else />
      </xp-icon>
    </span>
    <!-- 选择图标后的文字 -->
    <span class="xp-checkbox-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import './style/index.less'
import { Check } from '@vicons/fa'
import { checkboxProps, checkboxEmits, useCheckbox } from "./checkbox";
import { Subtract12Filled } from "@vicons/fluent";

const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

const {
  modelValue,
  label,
  classes,
  iconSize,
  disabled,
  iconColor,
  isGroup,
  indeterminate,
} = useCheckbox(props, emits);

const handleChange = () => {
  if(!disabled.value) {
    if (isGroup.value) {
      const index = modelValue.value.indexOf(label.value);
      if (index > -1) {
        modelValue.value.splice(index, 1);
      } else {
        modelValue.value.push(label.value);
      }
      modelValue.value = [...modelValue.value];
    } else {
      modelValue.value = !modelValue.value;
    }
  }
}

</script>

<script lang="ts">
export default {
  name: "XpCheckbox",
};
</script>
