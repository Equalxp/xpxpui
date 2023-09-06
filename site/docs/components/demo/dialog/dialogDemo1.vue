<template>
  <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>
  <xp-dialog v-model="visible" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
</script>
