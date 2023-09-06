# Checkbox 多选框

## 基础使用

<div class="example">
<checkboxDemo1 />
</div>

::: details 显示代码

```html
<template>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox1" label="选项A" size="large" />
    <xp-checkbox v-model="checkbox2" label="选项B" size="large" />
  </div>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox3" label="选项A" />
    <xp-checkbox v-model="checkbox4" label="选项B" />
  </div>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox5" label="选项A" size="small" />
    <xp-checkbox v-model="checkbox6" label="选项B" size="small" />
  </div>
  <div style="width: 100%">
    <xp-checkbox v-model="checkbox7" label="选项A" size="small" disabled />
    <xp-checkbox v-model="checkbox8" label="选项B" size="small" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
const checkbox7 = ref(false);
const checkbox8 = ref(false);
</script>
```

:::


## 禁用状态

<div class="example">
<checkboxDemo2 />
</div>

::: details 显示代码

```html
<template>
  <div style="width: 100%; display: flex; align-items: center">
    <xp-checkbox 
      v-model="checkbox1" 
      label="选项A" 
      size="large" 
    />
    <xp-checkbox
      v-model="checkbox2"
      label="选项B"
      size="large"
      :disabled="disabled"
    />
    <!-- 绑定switch框 disabled状态的取消 -->
    <xp-switch v-model="disabled" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const disabled = ref(true);
</script>
```

:::


## 多选框组

<div class="example">
<checkboxDemo3 />
</div>

::: details 显示代码

```html
<template>
  <xp-checkbox-group v-model="checkList" size="large">
    <xp-checkbox label="选项A" />
    <xp-checkbox label="选项B" />
    <xp-checkbox label="选项C" />
  </xp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checkList = ref(["选项A"]);
</script>
```

:::


## 中间状态

<div class="example">
<checkboxDemo4 />
</div>

::: details 显示代码

```html
<template>
  <xp-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    label="全选"
  />
  <xp-checkbox-group
    @change="handleCheckedCitiesChange"
    v-model="checkedCities"
    size="large"
  >
    <xp-checkbox v-for="city in cities" :key="city" :label="city" />
  </xp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkAll = ref(false);
const isIndeterminate = ref(true);

const checkedCities = ref(["长安", "洛阳"]);
const cities = ["长安", "洛阳", "南京", "北京"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? [...cities] : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount;
};
</script>

```

:::


## 带有边框

<div class="example">
<checkboxDemo5 />
</div>

::: details 显示代码

```html
<template>
  <xp-checkbox v-model="checkbox1" label="选项 A" size="small" border />
  <xp-checkbox v-model="checkbox2" label="选项 B" border />
  <xp-checkbox v-model="checkbox3" label="选项 C" size="large" border />
  <xp-checkbox v-model="checkbox4" label="选项 D" size="small" border />
  <xp-checkbox v-model="checkbox5" label="选项 E" border />
  <xp-checkbox v-model="checkbox6" label="选项 F" size="large" border />
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
</script>
```

:::


## Checkbox 属性

| 属性     | 说明            | 类型                      | 可选值                 | 默认值 |
| :------- | :-------------- | :------------------------ | :--------------------- | :----- |
| v-model  | 选中项绑定值    | string / number / boolean | -                      | -      |
| label    | 单选框对应的值  | string / number / boolean | -                      | -      |
| disabled | 是否禁用单选框  | boolean                   | -                      | false  |
| border   | 是否显示边框    | boolean                   | -                      | false  |
| size     | Checkbox 的尺寸 | string                    | large / default /small | -      |


## Checkbox 事件

| 事件名 | 说明                   | 回调参数                 |
| :----- | :--------------------- | :----------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Checkbox label 值 |

## Checkbox 插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## Checkbox-group 属性

| 属性     | 说明         | 类型    | 可选值                 | 默认值 |
| :------- | :----------- | :------ | :--------------------- | :----- |
| v-model  | 绑定值       | array   | -                      | []     |
| disabled | 是否禁用     | boolean | -                      | false  |
| border   | 是否显示边框 | boolean | -                      | false  |
| size     | 多选框组尺寸 | string  | large / default /small | -      |

## Checkbox-group 事件

| 事件名 | 说明                     | 回调参数 |
| :----- | :----------------------- | :------- |
| change | 当绑定值变化时触发的事件 | value    |

## Checkbox-group 插槽

| 插槽名  | 说明           | 子标签   |
| :------ | :------------- | :------- |
| default | 自定义默认内容 | Checkbox |



<script setup lang="ts">
  import checkboxDemo1 from './demo/checkbox/checkboxDemo1.vue'
  import checkboxDemo2 from './demo/checkbox/checkboxDemo2.vue'
  import checkboxDemo3 from './demo/checkbox/checkboxDemo3.vue'
  import checkboxDemo4 from './demo/checkbox/checkboxDemo4.vue'
  import checkboxDemo5 from './demo/checkbox/checkboxDemo5.vue'
</script>