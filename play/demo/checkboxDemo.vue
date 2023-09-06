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
  <div>
    <xp-checkbox v-model="checkbox1" label="选项A" size="large" />
    <xp-checkbox
      v-model="checkbox2"
      label="选项B"
      size="large"
      :disabled="disabled"
    />
  </div>
  <div>
    <xp-checkbox-group v-model="checkList" size="large">
      <xp-checkbox label="选项A" />
      <xp-checkbox label="选项B" />
      <xp-checkbox label="选项C" />
    </xp-checkbox-group>
  </div>
  <div>
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
  </div>
  <div>
    <xp-checkbox v-model="checkbox1" label="选项 A" size="small" border />
    <xp-checkbox v-model="checkbox2" label="选项 B" border />
    <xp-checkbox v-model="checkbox3" label="选项 C" size="large" border />
    <xp-checkbox v-model="checkbox4" label="选项 D" size="small" border />
    <xp-checkbox v-model="checkbox5" label="选项 E" border />
    <xp-checkbox v-model="checkbox6" label="选项 F" size="large" border />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
const checkbox7 = ref(false);
const checkbox8 = ref(false);

const checkAll = ref(false);
const isIndeterminate = ref(true);

const checkedCities = ref(['长安', '洛阳']);
const cities = ['长安', '洛阳', '南京', '北京'];

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
