<template>
    <xp-input v-model="input" autosize type="textarea" placeholder="请输入内容"></xp-input>
    <br>

    <xp-input v-model="input" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="请输入内容"></xp-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>