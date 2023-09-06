<template>
  <div style="display: flex">
    <xp-link :icon="EditTwotone"> Edit </xp-link>
    <xp-link :icon="CheckSquareOutlined" icon-placement="right">
      Check
    </xp-link>
  </div>
</template>
<script setup lang="ts">
import { EditTwotone, CheckSquareOutlined } from '@vicons/antd';
</script>
