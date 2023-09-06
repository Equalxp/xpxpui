<template>
  <xp-radio-group v-model="radio" size="large">
    <xp-radio label="1">选项 A</xp-radio>
    <xp-radio label="2">选项 B</xp-radio>
    <xp-radio label="3" disabled>选项 C</xp-radio>
  </xp-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const radio = ref('1');
</script>
