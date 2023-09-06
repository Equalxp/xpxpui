<template>
  <xp-button @click="open1">Info</xp-button>
  <xp-button @click="open2">success</xp-button>
  <xp-button @click="open3">Warning</xp-button>
  <xp-button @click="open4">Error</xp-button>
</template>

<script setup lang="ts">
import XpMessage from '../../../../../packages/components/src/message/index.ts';

const open1 = () => {
  XpMessage({
    message: 'this is a message.',
    showClose: true,
    center: true
  });
};
const open2 = () => {
  XpMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    showClose: true,
    center: true
  });
};
const open3 = () => {
  XpMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    showClose: true,
    center: true
  });
};
const open4 = () => {
  XpMessage({
    type: 'error',
    message: 'Oops, this is a error message.',
    showClose: true,
    duration: 0,
    center: true
  });
};
</script>
