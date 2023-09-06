<template>
  <div
    class="xp-select"
    :tabindex="disabled ? '' : -1"
    ref="selectRef"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!-- 非多选状态 -->
    <div v-if="!multiple" class="xp-base-select" :tabindex="disabled ? '' : -1">
      <!-- label显示 -->
      <div v-show="modelLabel" class="xp-select-label">{{ modelLabel }}</div>
      <!-- placeholder -->
      <div v-show="!modelLabel" class="xp-select-placeholder">
        {{ placeholder }}
      </div>
      <!-- 后缀图标的显示 -->
      <xp-icon
        :size="18"
        class="xp-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
        color="rgba(194, 194, 194, 1)"
      >
        <CloseCircleOutline
          v-if="closeVisible && modelLabel"
          @click="handleClear"
        />
        <IosArrowDown v-else />
      </xp-icon>
    </div>
    <!-- 多选状态 -->
    <div class="xp-base-select xp-select-tags" v-if="multiple">
      <!-- tag类型的 -->
      <xp-tag
        closeable
        v-for="(item, index) in modelLabel"
        :key="index"
        @close="handleClear(item)"
      >
        {{ item }}
      </xp-tag>
      <div v-show="modelLabel.length === 0" class="xp-select-placeholder">
        {{ placeholder }}
      </div>
      <xp-icon
        :size="18"
        class="xp-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
        color="rgba(194, 194, 194, 1)"
      >
        <CloseCircleOutline
          v-if="closeVisible && modelLabel"
          @click="handleClear"
        />
        <IosArrowDown v-else />
      </xp-icon>
    </div>
    <!-- 下拉框的各个选项 -->
    <div class="xp-select-dropdown">
      <div class="no-options" v-show="options.length === 0">无选项</div>
      <span
        class="xp-select-option"
        v-for="item in options"
        :class="{
          'is-active': multiple
            ? modelValue.includes(item.value)
            : modelValue === item.value,
          'is-disabled': item.disabled,
          'is-multiple': multiple
        }"
        @click="handleOptionClick(item)"
        :key="item.value"
      >
        <xp-ellipsis>{{ item.label }}</xp-ellipsis>
        <xp-icon
          :size="18"
          class="xp-select-option-suffix-icon"
          v-if="multiple && modelValue.includes(item.value)"
        >
          <Check />
        </xp-icon>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { IosArrowDown } from '@vicons/ionicons4';
import { CloseCircleOutline } from '@vicons/ionicons5';
import { Check } from '@vicons/tabler';
import { selectProps, selectEmits, useSelect } from './select';
import './style/index.less';
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

const selectRef = ref();
const {
  options,
  modelValue,
  modelLabel,
  disabled,
  placeholder,
  clearable,
  closeVisible,
  multiple
} = useSelect(props, emits);
// 选中某一个

const handleOptionClick = (item: any) => {
  console.log('点击的item', item.value);
  if (!item.disabled) {
    // emits("update:modelValue", item.value);
    // emits("change", item.value);
    // 是多选的情况
    if (multiple.value) {
      // 多选 modelValue就有多个值 item.value是下拉选择的值
      const isRemove = modelValue.value.includes(item.value);
      isRemove
        ? // 删除这个
          modelValue.value.splice(modelValue.value.indexOf(item.value), 1)
        : modelValue.value.push(item.value);
      emits('update:modelValue', modelValue.value);
      emits('change', modelValue.value);
    }
    if (!multiple.value) {
      selectRef.value.blur();
      emits('update:modelValue', item.value);
      emits('change', item.value);
    }
  }
};
// 清除
const handleClear = (e: any) => {
  // emits('update:modelValue',"")
  // emits('clear',"")
  if (!multiple.value) {
    emits('update:modelValue', '');
    emits('clear', '');
  }
  if (multiple.value) {
    // @ts-ignore
    const value = options.value.find((v) => v.label === e)?.value;
    if (modelValue.value.indexOf(value) > -1) {
      modelValue.value.splice(modelValue.value.indexOf(value), 1);
    } else {
      modelValue.value.splice(0, modelValue.value.length);
    }
    emits('update:modelValue', modelValue.value);
    emits('clear', modelValue.value);
  }
};
// 所有的options / ComputedRef<"x">
// console.log('222',options,modelValue);
</script>

<script lang="ts">
export default {
  name: 'XpSelect'
};
</script>
