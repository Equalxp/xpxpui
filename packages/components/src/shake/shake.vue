<template>
  <!-- v-bind绑定update:modelValue -->
  <div class="xp-shake" :class="{ ['xp-shakeactive']: props.modelValue }">
    <!-- 传什么就抖动什么 -->
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { watch } from 'vue';
import './style/index.less';
// 另外一种命名方式
defineOptions({
  name: 'xp-shake'
});
// props的类型
type ShakeProps = {
  modelValue?: boolean;
};
// Emit的类型 update:modelValue配合v-model语法糖
type Emits = {
  (e: 'update:modelValue', value: boolean): void;
};
// 获取props属性并且设置默认值  1.props接收值
const props = withDefaults(defineProps<ShakeProps>(), {
  modelValue: false
});

// 接收 返回一个触发器 用于触发事件
const emits = defineEmits<Emits>();

//监听modelValue，为true的话，1s后置为false
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        // 触发的函数 传递的值
        emits('update:modelValue', false);
      }, 1000);
    }
    // 立即监听
  },
  { immediate: true }
);
</script>
