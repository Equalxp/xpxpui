<template>
  <xp-radio v-model="radio" label="1" size="small" border>选项1</xp-radio>
  <xp-radio v-model="radio" label="2" border>选项2</xp-radio>
  <xp-radio v-model="radio" label="3" size="large" border>选项3</xp-radio>

  <xp-radio v-model="radio1" label="4" size="small" border disabled
    >选项1</xp-radio
  >
  <xp-radio v-model="radio1" label="5" border disabled>选项2</xp-radio>
  <xp-radio v-model="radio1" label="6" size="large" border disabled
    >选项3</xp-radio
  >
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref('1');
const radio1 = ref('4');
</script>
