// button.vue
<template>
  <button class="xp-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
// @ts-ignore
// defineOptions({ name: "xp-button" });
type ButtonProps = {
  type?: string,
  plain?: boolean,
  round?: boolean,
  disabled?: boolean,
  size?: string,
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return {
    [`xp-button--${buttonProps.type}`]: buttonProps.type,
    'is-plain': buttonProps.plain,
    'is-round': buttonProps.round,
    'is-disabled': buttonProps.disabled,
    [`xp-button--${buttonProps.size}`]: buttonProps.size,
  };
});
</script>

<script lang="ts">
export default {
  name:'xp-button'
}
</script>
