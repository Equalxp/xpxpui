<!-- 测试 -->
<template>
  <div>
    <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>
    <xp-dialog v-model="visible" />
  </div>
  <div>
    <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>
    <xp-dialog v-model="visible1" :overlay-closable="false" @onOverlayClick="onOverlayClick">
      我觉得用户应该聪明到点遮罩没用的时候就去点确认了。
    </xp-dialog>
  </div>
  <div>
    <xp-button theme="primary" @click="toggle1">点击打开对话框</xp-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visible = ref(false);
const visible1 = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
const onOverlayClick = () => {
  console.log("我觉得用户应该聪明到点遮罩没用的时候就去点确认了。");
};
import { openDialog } from '../../packages/components/src/dialog/openDialog'
const toggle1 = () => {
  openDialog({
    overlay: true,
    overlayClosable: true,
    title: () => "我是标题",
    content: () => "我是内容",
    confirm: () => {},
    cancel: () => {},
  });
};
</script>

<style scoped></style>