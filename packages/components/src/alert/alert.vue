<template>
  <transition leave-active-class="animate__fadeOutUp" :duration="300">
    <div class="xp-alert animate__animated" :class="classes" v-if="visible">
      <xp-icon
        class="xp-alert-close-icon"
        :size="18"
        color="#7a7a7a"
        v-if="closeable"
        @click="close"
      >
        <Close />
      </xp-icon>
      <!-- 具名插槽 -->
      <slot name="icon">
        <template v-if="showIcon">
          <xp-icon
            class="xp-alert-icon"
            :size="22"
            v-if="type === 'info'"
            color="#3f7ee8"
          >
            <Info24Filled />
          </xp-icon>
          <xp-icon
            class="xp-alert-icon"
            :size="22"
            v-if="type === 'success'"
            color="#4b9e5f"
          >
            <IosCheckmarkCircle />
          </xp-icon>
          <xp-icon
            class="xp-alert-icon"
            :size="22"
            v-if="type === 'warning'"
            color="#e4a341"
          >
            <WarningFilled />
          </xp-icon>
          <xp-icon
            class="xp-alert-icon"
            :size="22"
            v-if="type === 'error'"
            color="#bf3f53"
          >
            <CloseCircle />
          </xp-icon>
        </template>
      </slot>

      <div class="xp-alert-body">
        <!-- title -->
        <div class="xp-alert-body-title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <!-- 描述的内容 -->
        <div class="xp-alert-body-content" v-if="description">
          <slot>{{ description }}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Info24Filled } from '@vicons/fluent';
import { IosCheckmarkCircle } from '@vicons/ionicons4';
import { WarningFilled } from '@vicons/carbon';
import { CloseCircle, Close } from '@vicons/ionicons5';
import './style/index.less';
// props接收的参数
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'default'
  },
  closeable: {
    type: Boolean,
    default: false
  },
  showIcon: Boolean,
  center: Boolean
});
const emits = defineEmits(['close']);
// 类型 居中 关闭按钮
const classes = computed(() => ({
  [`xp-alert-${props.type}`]: props.type,
  'is-center': props.center,
  'show-close': props.closeable
}));

const visible = ref(true);

const close = () => {
  visible.value = false;
  emits('close');
};
</script>

<script lang="ts">
export default {
  name: 'XpAlert'
};
</script>
