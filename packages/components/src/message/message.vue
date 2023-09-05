<template>
  <transition
    :duration="300"
    leave-active-class="animate__zoomOut"
    enter-active-class="animate__zoomIn"
    @before-leave="onClose"
    @after-leave="$emit('destory')"
  >
  <!-- 动画库 animate.css -->
    <div
      class="xp-message animate__animated"
      v-show="visible"
      :style="customStyle"
      :id="id"
      :class="{
        'is-close': close,
        'is-center': center
      }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
    我是傻逼
      <!-- 反！ -->
      <xp-icon
        class="xp-message-icon"
        :size="22"
        v-if="type === 'info'"
        color="#3f7ee8"
      >
        <Info24Filled />
      </xp-icon>
      <!-- 勾 -->
      <xp-icon
        class="xp-message-icon"
        :size="22"
        v-if="type === 'success'"
        color="#4b9e5f"
      >
        <IosCheckmarkCircle />
      </xp-icon>
      <!-- 警告！ -->
      <xp-icon
        class="xp-message-icon"
        :size="22"
        v-if="type === 'warning'"
        color="#e4a341"
      >
        <WarningFilled />
      </xp-icon>
      <!-- 叉 -->
      <xp-icon
        class="xp-message-icon"
        :size="22"
        v-if="type === 'error'"
        color="#bf3f53"
      >
        <CloseCircle />
      </xp-icon>
      <slot>
        {{ message }}
      </slot>
      <!-- 末尾的叉 -->
      <xp-icon v-if="showClose" :size="18" class="xp-close-icon" @click.stop="close">
        <Close />
      </xp-icon>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
import { messageProps, messageEmits } from "./message";
import XpIcon from "../icon/icon.vue";
import { Info24Filled } from "@vicons/fluent";
import { IosCheckmarkCircle } from "@vicons/ionicons4";
import { WarningFilled } from "@vicons/carbon";
import { CloseCircle,Close } from "@vicons/ionicons5";
const props = defineProps(messageProps);
const emits = defineEmits(messageEmits);

const visible = ref(false)
let stopTimer = undefined
// 操作后的style类
const customStyle = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex,
}));

// 鼠标移入清除定时器 message框出现后的消散 
function startTimer() {
  if(props.duration > 0) {
    stopTimer = setTimeout(() => {
      if(visible.value) close()
    }, props.duration)
  }
}
// 移出重置定时器
function clearTimer() {
  clearTimeout(stopTimer)
  stopTimer = undefined
}

function close() {
  visible.value = false
}

// esc清除message
function keydown({ code }:KeyboardEvent) {
  if(code === 'Escape') {
    if(visible.value) {
      close()
    }
  } else {
    startTimer()
  }
}

onMounted(() => {
  startTimer();
  visible.value = true;

  document.addEventListener('keydown', keydown)
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydown);
});

</script>

<script lang="ts">
export default {
  name: "XpMessage",
};
</script>

<style scoped>
.xp-message {
  --xp-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  z-index: 1000;
  left: calc(50% - 190px);
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 20px;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 380px;
  color: rgb(51, 54, 57);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: color 0.3s var(--xp-bezier), box-shadow 0.3s var(--xp-bezier),
    background-color 0.3s var(--xp-bezier), opacity 0.3s var(--xp-bezier),
    transform 0.3s var(--xp-bezier), margin-bottom 0.3s var(--xp-bezier),
    top 0.3s var(--xp-bezier);

  &.is-close {
    padding-right: 38px;
  }
  &.is-center {
    justify-content: center;
  }
  .xp-message-icon {
    margin-right: 10px;
  }
  .xp-close-icon {
    position: absolute;
    right: 20px;
    top: calc(50% - 10px);
    cursor: pointer;
  }
}
</style>