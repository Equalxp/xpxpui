<template>
  <label class="xp-checkbox-group">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from "vue";
import { checkboxGroupProps, checkboxGroupEmits } from "./checkbox-group";
const props = defineProps(checkboxGroupProps)
const emits = defineEmits(checkboxGroupEmits);

const changeEvent = (value) => {
  emits("update:modelValue", value);
  emits("change", value);
}

// provide 注入 k-v 直系之间传递 只能在setup里面使用
provide(
  "checkboxGroupKey",
  reactive({
    ...toRefs(props),
    changeEvent,
  })
);

</script>

<script lang="ts">
export default {
  name: "XpCheckboxGroup",
};
</script>