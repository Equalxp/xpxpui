<template>
    <div class="shake">
        <k-shake v-model="isshake" @click="isshake = true">点击抖动</k-shake>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const isshake = ref(false)
</script>