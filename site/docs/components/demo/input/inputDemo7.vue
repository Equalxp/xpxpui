<template>
  <xp-button @click="handleFocus">Focus</xp-button>
  <xp-button @click="handleSelect">Select</xp-button>
  <xp-button @click="handleBlur">Blur</xp-button>
  <xp-input placeholder="请输入内容" v-model="value" ref="inputInstRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('life is fucking movie 人生如戏啊');
const inputInstRef = ref();
const handleFocus = () => {
  inputInstRef.value.focus();
};
const handleBlur = () => {
  inputInstRef.value.blur();
};
const handleSelect = () => {
  inputInstRef.value.select();
};
</script>
