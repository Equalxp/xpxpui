<template>
  <xp-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closeable>
    {{ tag.name }}
  </xp-tag>
  <xp-tag closeable>Tag9</xp-tag>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'error' }
]);
</script>
