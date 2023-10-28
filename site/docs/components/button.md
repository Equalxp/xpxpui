# 按钮

## 基础用法

常用的操作按钮

<ClientOnly>

<div class="example">
<buttonDemo1 />
</div>
</ClientOnly>

::: details 显示代码

```html
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
import { Add16Regular } from "@vicons/fluent";
</script>
```

:::

## 禁用

<ClientOnly>

<div class="example">
<buttonDemo3 />
</div>
</ClientOnly>

使用`disabled`控制按钮是否能使用

::: details 显示代码

```html
<template>
  <xp-button theme="default" disabled>默认按钮</xp-button>
  <xp-button theme="primary" disabled>主要按钮</xp-button>
  <xp-button theme="info" disabled>信息按钮</xp-button>
  <xp-button theme="success" disabled>成功按钮</xp-button>
  <xp-button theme="warning" disabled>警告按钮</xp-button>
  <xp-button theme="error" disabled>危险按钮</xp-button>
</template>
```
:::


## 图标

<ClientOnly>

<div class="example">
<buttonDemo4 />
</div>
</ClientOnly>


::: details 显示代码

```html
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
import { VehicleBicycle24Filled } from '@vicons/fluent'
</script>

```
:::


## 加载

<ClientOnly>

<div class="example">
<buttonDemo5 />
</div>
</ClientOnly>


::: details 显示代码

```html
<template>
  <xp-button theme="default" loading>loading</xp-button>
  <xp-button theme="primary" loading>loading</xp-button>
  <xp-button theme="info" loading>loading</xp-button>
  <xp-button theme="success" loading>loading</xp-button>
  <xp-button theme="warning" loading>loading</xp-button>
  <xp-button theme="error" loading>loading</xp-button>
  <xp-button theme="primary">loaded</xp-button>
</template>

```
:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| size          | 尺寸         | string  | small / default / large                              | default     |
| theme          | 类型         | string  | primary / success / warning / danger / info  | —     |
| dashed         | 是否朴素按钮 | boolean | —                                                  | false |
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| disabled      | 是否禁用     | boolean | —                                                  | false |
| icon          | 图标类型     | string  | —                                                  | —     |
| loading | 是否显示加载中     | boolean  | —                                         | fasle  |
| icon-placement | 图标位置     | string  | left/right                                         | left  |

<script setup lang="ts">
  import buttonDemo1 from './demo/button/buttonDemo1.vue'
  import buttonDemo2 from './demo/button/buttonDemo2.vue'
  import buttonDemo3 from './demo/button/buttonDemo3.vue'
  import buttonDemo4 from './demo/button/buttonDemo4.vue'
  import buttonDemo5 from './demo/button/buttonDemo5.vue'
</script>