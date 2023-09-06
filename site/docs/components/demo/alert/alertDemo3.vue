<template>
  <xp-alert title="Default 类型" center>
    <template #icon>
      <xp-icon class="xp-alert-icon" :size="22">
        <IosAirplane />
      </xp-icon>
    </template>
  </xp-alert>
  <xp-alert title="Info 类型" type="info" show-icon center />
  <xp-alert title="Success 类型" type="success" show-icon center />
  <xp-alert title="Warning 类型" type="warning" show-icon center />
  <xp-alert title="Error 类型" type="error" show-icon center />
</template>
<script setup lang="ts">
import { IosAirplane } from '@vicons/ionicons4';
</script>

<style>
.xp-alert {
  margin-bottom: 12px;
}
</style>
