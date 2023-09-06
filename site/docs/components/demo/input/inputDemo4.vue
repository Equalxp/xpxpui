<template>
  <!-- 显示密码type -->
  <xp-input placeholder="请输入内容" v-model="value" show-password />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('hello world');
</script>
