<template>
  <xp-radio v-model="radio" label="1" size="small">选项1</xp-radio>
  <xp-radio v-model="radio" label="2">选项2</xp-radio>
  <xp-radio v-model="radio" label="3" size="large">选项3</xp-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref('1');
</script>
