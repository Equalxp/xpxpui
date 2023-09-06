<template>
  <xp-switch
    v-model="checked"
    active-color="red"
    inactive-color="pink"
  ></xp-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(false);
</script>
