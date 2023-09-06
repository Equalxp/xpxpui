<template>
  <div style="margin: 10px 0px; width: 100%">
    <xp-button theme="default">默认按钮</xp-button>
    <xp-button theme="primary">主要按钮</xp-button>
    <xp-button theme="info">信息按钮</xp-button>
    <xp-button theme="success">成功按钮</xp-button>
    <xp-button theme="warning">警告按钮</xp-button>
    <xp-button theme="error">危险按钮</xp-button>
  </div>

  <div style="margin: 10px 0px; width: 100%">
    <xp-button theme="default" dashed>默认按钮</xp-button>
    <xp-button theme="primary" dashed>主要按钮</xp-button>
    <xp-button theme="info" dashed>信息按钮</xp-button>
    <xp-button theme="success" dashed>成功按钮</xp-button>
    <xp-button theme="warning" dashed>警告按钮</xp-button>
    <xp-button theme="error" dashed>危险按钮</xp-button>
  </div>

  <div style="margin: 10px 0px; width: 100%">
    <xp-button theme="default" round>默认按钮</xp-button>
    <xp-button theme="primary" round>主要按钮</xp-button>
    <xp-button theme="info" round>信息按钮</xp-button>
    <xp-button theme="success" round>成功按钮</xp-button>
    <xp-button theme="warning" round>警告按钮</xp-button>
    <xp-button theme="error" round>危险按钮</xp-button>
  </div>
  <div style="margin: 10px 0px; width: 100%">
    <xp-button theme="default" circle>
      <xp-icon size="16">
        <Add16Regular />
      </xp-icon>
    </xp-button>
    <xp-button theme="primary" circle>
      <xp-icon size="16">
        <Add16Regular />
      </xp-icon>
    </xp-button>
    <xp-button theme="info" circle>
      <xp-icon size="16">
        <Add16Regular />
      </xp-icon>
    </xp-button>
    <xp-button theme="success" circle>
      <xp-icon size="16">
        <Add16Regular />
      </xp-icon>
    </xp-button>
    <xp-button theme="warning" circle>
      <xp-icon size="16">
        <Add16Regular />
      </xp-icon>
    </xp-button>
    <xp-button theme="error" circle>
      <xp-icon size="16">
        <Add16Regular />
      </xp-icon>
    </xp-button>
  </div>
</template>

<script setup lang="ts">
import { Add16Regular } from '@vicons/fluent';
</script>
