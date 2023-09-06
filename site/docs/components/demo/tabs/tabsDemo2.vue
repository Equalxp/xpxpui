<template>
  <xp-tabs v-model="selected" type="card">
    <xp-tab title="我们">我们</xp-tab>
    <xp-tab title="半推半就">半推半就</xp-tab>
    <xp-tab title="的">的</xp-tab>
    <xp-tab title="人生">人生</xp-tab>
  </xp-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const selected = ref('我们');
</script>
