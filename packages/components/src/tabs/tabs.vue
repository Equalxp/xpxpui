<template>
  <div class="xp-tabs" :class="classes">
    <!-- tabs的头部 -->
    <div class="xp-tabs-header" ref="container">
      <!-- tabs的文字 -->
      <div 
        class="xp-tabs-header-item"
        :class="{ 'is-active': modelValue == title }"
        v-for="(title,index) in titles"
        :key="index"
        @click="handleTabsItemClick(title)"
        :ref="getHeaderItemRef(title)"
      >
        {{ title }}
      </div>
      <!-- tabs的下划线 -->
      <div
        class="xp-tabs-header-indicator"
        v-if="type === 'line'"
        ref="indicator"
      ></div>
    </div>
    <!-- tabs的内容 -->
    <div class="xp-tabs-content">
      <!-- 内容是 -->
      <component 
        :is="current"
        v-if="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed, ref, onMounted, watchEffect } from "vue";
import Xptab from '../tab/tab.vue'
import './style/index.less'
const props = defineProps({
  // v-model的值 selected
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: 'line'
  }
})

// slot是内容 Xptab的<slot></slot>
const slots = useSlots().default();
// console.log('slots',slots);

// v-model组件之间的自定义事件
const emits = defineEmits(['update:modelValue'])
const { type } = props;
const classes = {
  [`xp-tabs-${type}`]: type
}

slots.forEach((tag) => {
  if(tag.type.name !== Xptab.name) {
    throw new Error('XpTabs 子标签必须是XpTab')
  }
})

const selectedItem = ref<HTMLDivElement>(null);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(() => {
    renderIndicator();
  });
});

// 渲染指示下划线
const renderIndicator = () => {
  // line情况
  if (selectedItem.value && props.type === "line") {
    // 返回一个DOMRect对象
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value.style.width = width + "px";

    // left 元素右边的页面距离父元素左边的距离
    const { left: left1 } = container.value.getBoundingClientRect();

    const { left: left2 } = selectedItem.value.getBoundingClientRect();
    const left = left2 - left1;
    indicator.value.style.left = left + "px";
  }
};

// titles是每一个Xptab的内容值
const titles = slots.map((tag) => tag.props.title)
// 当前的seleted的选项
const current = computed(() => {
  return slots.find((tag) => tag.props.title === props.modelValue)
})

// 通过改变title的值 传递到v-model那边 改变选中状态
const handleTabsItemClick = (title: string) => {
  // v-model传值
  emits('update:modelValue',title)
}

const getHeaderItemRef = (title) => {
  return (e) => {
    if(title === props.modelValue) {
      // selectedItem就是当前选择的<div xxx>xxx</div>
      // console.log('selectedItem',selectedItem.value);
      return selectedItem.value = e
    }
  };
};
</script>

<script lang="ts">
export default {
  name: "XpTabs",
};
</script>

