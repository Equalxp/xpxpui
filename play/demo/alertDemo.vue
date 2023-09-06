<template>
  <div style="width: 300px">
    <xp-alert title="Default 类型" />
    <xp-alert title="Info 类型" type="info" />
    <xp-alert title="Success 类型" type="success" />
    <xp-alert title="Warning 类型" type="warning" />
    <xp-alert title="Error 类型" type="error" />

    <xp-alert title="Default 类型">
      <!-- 加icon -->
      <template #icon>
        <xp-icon class="xp-alert-icon" :size="22">
          <IosAirplane />
        </xp-icon>
      </template>
    </xp-alert>
    <xp-alert title="Info 类型" type="info" show-icon />
    <xp-alert title="Success 类型" type="success" show-icon />
    <xp-alert title="Warning 类型" type="warning" show-icon />
    <xp-alert title="Error 类型" type="error" show-icon center />
    <xp-alert
      title="Success 类型"
      type="success"
      show-icon
      center
      description="这是一段描述"
    />
  </div>
</template>

<script setup lang="ts">
import { IosAirplane } from '@vicons/ionicons4';
</script>

<style lang="less" scoped>
.xp-alert {
  margin: 10px 20px;
}
</style>
