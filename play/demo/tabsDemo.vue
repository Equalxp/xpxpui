<template>
  <!-- 基础用法 -->
  <div>
    <xp-tabs v-model="selected">
      <xp-tab title="我们">我们</xp-tab>
      <xp-tab title="半推半就">半推半就</xp-tab>
      <xp-tab title="的">的</xp-tab>
      <xp-tab title="人生">人生</xp-tab>
    </xp-tabs>
  </div>
  <!-- 卡片风格 -->
  <div>
    <xp-tabs v-model="selected1" type="card">
      <xp-tab title="我们">我们</xp-tab>
      <xp-tab title="半推半就">半推半就</xp-tab>
      <xp-tab title="的">的</xp-tab>
      <xp-tab title="人生">人生</xp-tab>
    </xp-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selected = ref('我们');
const selected1 = ref('半推半就');
</script>

<style scoped></style>
