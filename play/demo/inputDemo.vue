<template>
  <div style="width: 400px">
    <xp-input placeholder="请输入内容" v-model="value" />

    <xp-input placeholder="请输入内容" v-model="value" disabled />

    <xp-input placeholder="请输入内容" v-model="value" clearable />

    <xp-input placeholder="请输入内容" v-model="value" show-password />

    <xp-input
      placeholder="请输入内容"
      v-model="value"
      type="textarea"
      style="width: 300px"
    />

    <xp-input
      placeholder="请输入内容"
      v-model="value"
      :suffixIcon="Search28Filled"
      show-password
      clearable
    />
    <xp-input
      placeholder="请输入内容"
      v-model="value1"
      :prefixIcon="Search28Filled"
    />

    <xp-button @click="handleFocus">Focus</xp-button>
    <xp-button @click="handleSelect">Select</xp-button>
    <xp-button @click="handleBlur">Blur</xp-button>
    <xp-input placeholder="请输入内容" v-model="value" ref="inputInstRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search28Filled } from '@vicons/fluent';

const value = ref('hello world');
const value1 = ref('hello world');

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

<style scoped></style>
