<template>
  <div :class="classes">
    <!-- input框 -->
    <template v-if="type !== 'textarea'">
      <input
        ref="input"
        :disabled="disabled"
        :type="type"
        :readonly="readonly"
        :value="nativeInputValue"
        class="xp-input-inner"
        autocomplete="off"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <!-- 图标显示在前面 -->
      <span class="xp-input-prefix-icon">
        <!-- icon -->
        <xp-icon
          v-if="prefixIcon"
          class="prefix-icon"
          :size="18"
          color="#dcdfe6"
        >
          <component :is="prefixIcon" />
        </xp-icon>
      </span>
      <!-- 图标显示在input框后面 -->
      <span class="xp-input-suffix-icon">
        <!-- suffix icon -->
        <xp-icon
          v-if="suffixIcon"
          class="suffix-icon"
          :size="18"
          color="#dcdfe6"
        >
          <component :is="suffixIcon" />
        </xp-icon>
        <!-- 可清空按钮 clearable+有值 -->
        <div
          class="close-icon"
          v-if="clearable && nativeInputValue.length > 0 && !disabled"
          @click="hanldeClear"
        >
          <xp-icon :size="18">
            <CloseCircleOutline />
          </xp-icon>
        </div>
        <!-- password showPassword+非禁用-->
        <div
          class="password-icon"
          v-if="showPassword && !disabled"
          @click="handlePasswordVisible"
        >
          <xp-icon :size="18">
            <Eye />
          </xp-icon>
        </div>
      </span>
    </template>
    <!-- textarea框 -->
    <template v-else>
      <textarea
        ref="textarea"
        :readonly="readonly"
        class="xp-textarea-inner"
        autocomplete="off"
        :placeholder="placeholder"
        :value="nativeInputValue"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue';
import { inputEmit, inputProps, useInput } from './input';
import './style/index.less';
import { CloseCircleOutline } from '@vicons/ionicons5';
import { Eye } from '@vicons/fa';

type TargetElement = HTMLInputElement | HTMLTextAreaElement;

// 接收props的类型限定
const props = defineProps(inputProps);
// ()传入自定义事件名数组 接收传来的函数
const emits = defineEmits(inputEmit);

const {
  disabled,
  classes,
  clearable,
  type,
  passwordVisible,
  placeholder,
  suffixIcon,
  prefixIcon,
  readonly,
  nativeInputValue
  // 计算computed
} = useInput(props, emits);

// tag
const input = ref<HTMLInputElement>();
const textarea = ref<HTMLTextAreaElement>();
const inputOrTextarea = computed(() => input.value || textarea.value);

// input输入触发这个函数 函数拿到input框的内容 然后触发返回v-model
const handleChange = (e: event) => {
  console.log('handlechange', e.target.value);
  // e.target.value -> input框的内容
  const { value } = e.target as TargetElement;
  if (value === nativeInputValue.value) {
    return;
  }
  // 触发函数 且传递值
  // v-model值 + value值
  emits('update:modelValue', value);
  emits('input', value);
};

// 清空输入框的内容
const hanldeClear = () => {
  // 触发事件 传值给v-model 值是"""
  emits('update:modelValue', '');
  emits('input', '');
  emits('clear', '');
};

const handleBlur = (e) => {
  emits('blur', e);
};

const handleFocus = (e) => {
  emits('focus', e);
};

const focus = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus();
  });
};

const blur = () => {
  nextTick(() => {
    inputOrTextarea.value?.blur();
    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(inputOrTextarea.value);
    selection.removeAllRanges();
  });
};

// 点击事件显示密码
const handlePasswordVisible = () => {
  // visible
  passwordVisible.value = !passwordVisible.value;
};

const select = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus();

    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(inputOrTextarea.value);
    selection.removeAllRanges();
    selection.addRange(range);
  });
};

// 向外暴露
defineExpose({
  input,
  inputOrTextarea,
  textarea,
  blur,
  focus,
  select
});
</script>

<script lang="ts">
export default {
  name: 'XpInput'
};
</script>
