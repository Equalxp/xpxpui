<template>
  <xp-button theme="primary" icon-placement="right">
    <template #icon>
      <xp-icon size="20">
        <VehicleBicycle24Filled />
      </xp-icon>
    </template>
    默认按钮
  </xp-button>
  <xp-button theme="primary">
    <template #icon>
      <xp-icon size="20">
        <VehicleBicycle24Filled />
      </xp-icon>
    </template>
    默认按钮
  </xp-button>
</template>
<script setup lang="ts">
import { VehicleBicycle24Filled } from '@vicons/fluent';
</script>
