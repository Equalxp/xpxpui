<template>
  <div>
    <xp-link>默认链接</xp-link>
    <xp-link type="primary">主要链接</xp-link>
    <xp-link type="info">信息链接</xp-link>
    <xp-link type="success">成功链接</xp-link>
    <xp-link type="warning">警告链接</xp-link>
    <xp-link type="error">错误链接</xp-link>

    <xp-link disabled>默认链接</xp-link>
    <xp-link type="primary" disabled>主要链接</xp-link>
    <xp-link type="info" disabled>信息链接</xp-link>
    <xp-link type="success" disabled>成功链接</xp-link>
    <xp-link type="warning" disabled>警告链接</xp-link>
    <xp-link type="error" disabled>错误链接</xp-link>

    <xp-link :underline="false">默认链接</xp-link>
    <xp-link>默认链接</xp-link>

    <xp-link :icon="EditTwotone"> Edit </xp-link>
    <xp-link :icon="CheckSquareOutlined" icon-placement="right">
      Check
    </xp-link>
  </div>
</template>

<script setup lang="ts">
import { EditTwotone, CheckSquareOutlined } from '@vicons/antd';
</script>

<style scoped lang="less">
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    border-bottom: 1px solid;
    cursor: pointer;
    width: 100%;
  }
}
</style>
