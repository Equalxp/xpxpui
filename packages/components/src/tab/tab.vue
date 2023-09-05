<template>
  <slot />
</template>

<script setup lang="ts">
defineProps({
  // props传递的值 
  title: String,
});
</script>
<script lang="ts">
export default {
  name: "XpTab",
};
</script>