<template>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox1" label="选项A" size="large" />
    <xp-checkbox v-model="checkbox2" label="选项B" size="large" />
  </div>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox3" label="选项A" />
    <xp-checkbox v-model="checkbox4" label="选项B" />
  </div>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox5" label="选项A" size="small" />
    <xp-checkbox v-model="checkbox6" label="选项B" size="small" />
  </div>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox7" label="选项A" size="small" disabled />
    <xp-checkbox v-model="checkbox8" label="选项B" size="small" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
const checkbox7 = ref(false);
const checkbox8 = ref(false);
</script>
