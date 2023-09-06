<template>
  <xp-select
    id="select"
    style="width: 200px"
    :options="options"
    v-model="value"
    clearable
    multiple
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(['1', '9']);
const options = [
  {
    label: '再见杰克',
    value: '1'
  },
  {
    label: '西湖',
    value: '2',
    disabled: true
  },
  {
    label: '为你唱歌',
    value: '3'
  },
  {
    label: '公路之歌',
    value: '4',
    disabled: true
  },
  {
    label: '愿爱无忧',
    value: '5'
  },
  {
    label: '无法离地的飞行',
    value: '6'
  },
  {
    label: '秦皇岛',
    value: '7'
  },
  {
    label: '十万嬉皮',
    value: '8',
    disabled: true
  },
  {
    label: '大石碎胸口',
    value: '9',
    disabled: true
  },
  {
    label: '山雀',
    value: '10'
  }
];
</script>
