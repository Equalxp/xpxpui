<template>
  <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>
</template>

<script setup lang="ts">
const toggle = () => {
  openDialog({
    overlay: true,
    overlayClosable: true,
    title: () => '我是标题',
    content: () => '我是内容',
    confirm: () => {},
    cancel: () => {}
  });
};
</script>
