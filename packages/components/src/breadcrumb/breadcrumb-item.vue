<template>
  <div class="xp-breadcrumb-item">
    <!-- 每一个小面包屑都有一个点击跳转函数 -->
    <span
      class="xp-breadcrumb-inner"
      :class="{
        'is-link': to,
      }"
      @click="handleClick"
    >
      <slot></slot>
    </span>
    <!-- 有separatorIcon就用icon 没有就用/ -->
    <xp-icon
      v-if="parent?.separatorIcon"
      class="xp-breadcrumb-separator"
      :size="12"
    >
      <component :is="parent?.separatorIcon" />
    </xp-icon>
    <span v-else class="xp-breadcrumb-separator">
      {{ parent.separator }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from "vue-router";
import './style/index.less'
const props = defineProps({
  // 路由跳转路径
  to: {
    type: Object,
    default: () => {},
  },
  replace: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
// 取得父组件的props的值
const parent = inject("XpBreadcrumbKey", undefined);

// 路由跳转
const handleClick = () => {
  // 进行路由跳转
  if (!props.to || !router) return;
  props.replace ? router.replace(props.to) : router.push(props.to);
};

</script>

<script lang="ts">
export default {
  name: "XpBreadcrumbItem",
};
</script>
