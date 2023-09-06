<template>
  <xp-button @click="open1">Info</xp-button>
  <xp-button @click="open2">success</xp-button>
  <xp-button @click="open3">Warning</xp-button>
  <xp-button @click="open4">Error</xp-button>
</template>

<script setup lang="ts">
import XpMessage from '../../../../../packages/components/src/message/index.ts';

const open1 = () => {
  XpMessage('this is a message.');
};
const open2 = () => {
  XpMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  });
};
const open3 = () => {
  XpMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning'
  });
};
const open4 = () => {
  XpMessage.error('Oops, this is a error message.');
};
</script>
