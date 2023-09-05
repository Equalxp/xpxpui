<template>
  <xp-button @click="open">Show Message</xp-button>
  <xp-button @click="openVn">Vnode</xp-button>
  <br>
  <xp-button @click="open1">Info</xp-button>
  <xp-button @click="open2">success</xp-button>
  <xp-button @click="open3">Warning</xp-button>
  <xp-button @click="open4">Error</xp-button>

</template>

<script setup lang="ts">
import { h } from "vue";
import XpMessage from "../../packages/components/src/message/index";

const open = () => {
  XpMessage("This is a Message");
  // XpMessage();
};

const openVn = () => {
  XpMessage({
    // h返回值会被作为组件的DOM结构 VNode
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};


const open1 = () => {
  XpMessage("this is a message.");
};
const open2 = () => {
  XpMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  XpMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  XpMessage.error("Oops, this is a error message.");
};
</script>
