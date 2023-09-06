<template>
  <div class="shake">
    <xp-shake v-model="isshake" @click="isshake = true">点击抖动</xp-shake>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const isshake = ref(false);
</script>
