<template>
  <div style="width: 100%">
    <xp-radio v-model="radio1" label="1" size="large">选项1</xp-radio>
    <xp-radio v-model="radio1" label="2" size="large">选项2</xp-radio>
  </div>
  <div style="width: 100%">
    <xp-radio v-model="radio2" label="1">选项1</xp-radio>
    <xp-radio v-model="radio2" label="2">选项2</xp-radio>
  </div>
  <div style="width: 100%">
    <xp-radio v-model="radio3" label="1" size="small">选项1</xp-radio>
    <xp-radio v-model="radio3" label="2" size="small">选项2</xp-radio>
  </div>
  <div style="width: 100%">
    <xp-radio v-model="radio4" label="1" size="small" disabled>选项1</xp-radio>
    <xp-radio v-model="radio4" label="2" size="small" disabled>选项2</xp-radio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
</script>
