<template>
  <xp-button @click="open">Show Message</xp-button>
  <xp-button @click="openVn">Vnode</xp-button>
</template>

<script setup lang="ts">
import { h } from 'vue';
import XpMessage from '../../../../../packages/components/src/message/index.ts';

const open = () => {
  XpMessage('This is a Message');
  // XpMessage();
};

const openVn = () => {
  XpMessage({
    // h返回值会被作为组件的DOM结构 VNode
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  });
};
</script>
