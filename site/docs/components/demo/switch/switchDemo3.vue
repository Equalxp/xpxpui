<template>
  <xp-switch v-model="checked" size="small" />
  <xp-switch v-model="checked1" size="default" />
  <xp-switch v-model="checked2" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(false);
const checked1 = ref(false);
const checked2 = ref(false);
</script>
