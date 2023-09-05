<template>
  <!-- modelValue控制显示 -->
  <template v-if="modelValue">
    <Teleport to="body">
      <!-- dialog背景 -->
      <div
        class="xp-dialog-overlay"
        v-if="overlay"
        @click="onOverlayClick"
      >
      </div>
      <div class="xp-dialog">
        <!-- dialog框 -->
        <div class="xp-dialog-wrapper">
          <header>
            <slot name="title">{{ title }}</slot>
            <span class="xp-dialog-close" @click="close">
              <!-- <CloseOutline /> -->
            </span>
          </header>
          <main>
            <slot>
              <p>这是一条消息</p>
            </slot>
          </main>
          <footer>
            <slot name="footer">
              <xp-button @click="cancel">取消</xp-button>
              <xp-button theme="primary" @click="confirm">确认</xp-button>
            </slot>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import { CloseOutline } from '@vicons/ionicons5'
import './style/index.less'
const props = defineProps({
  // v-model传递的值
  modelValue: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: true,
    default: true,
  },
  title: {
    type: String,
    default: "标题",
  },
  overlayClosable: {
    type: Boolean,
    default: true,
  },
  confirm: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
});

const emit = defineEmits(["update:modelValue", "onOverlayClick"]);

// 关闭按钮
const close = () => {
  emit("update:modelValue", false);
};

const onOverlayClick = () => {
  if (props.overlayClosable) {
    close();
  }
  emit("onOverlayClick");
};

// 确定按钮
const confirm = () => {
  if (props.confirm?.() !== false) {
    close();
  }
};

// 取消按钮
const cancel = () => {
  if (props.cancel?.() !== false) {
    close();
  }
};
</script>
<script lang="ts">
export default {
  name: "XpDialog",
};
</script>