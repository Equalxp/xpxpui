<template>
  <xp-tag>爱在西元前</xp-tag>
  <xp-tag type="success">听妈妈的话</xp-tag>
  <xp-tag type="warning">玫瑰花的葬礼</xp-tag>
  <xp-tag type="error">揪心的玩笑与漫长的白日梦</xp-tag>
  <xp-tag type="info">一丝不挂</xp-tag>

  <xp-tag type="error" size="small">爱在西元前</xp-tag>
  <xp-tag type="success">一丝不挂</xp-tag>
  <xp-tag type="warning" size="large">玫瑰花的葬礼</xp-tag>

  <xp-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closeable>
    {{ tag.name }}
  </xp-tag>
  <xp-tag closeable>Tag9</xp-tag>

  <xp-tag
    v-for="tag in dynamicTags"
    :key="tag"
    closeable
    type="success"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </xp-tag>
  <xp-input
    v-if="inputVisible"
    :ref="(e) => (InputRef = e)"
    v-model="inputValue"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
    size="small"
    style="width: 180px"
  />
  <xp-button v-else size="samll" @click="showInput">+ New Tag</xp-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'error' }
]);
import { nextTick, onMounted } from 'vue';
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const inputValue = ref('');
const InputRef = ref();
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    // 自动获取焦点
    console.log(InputRef.value!.focus());
  });
};

// 在input框中输入东西后 失去焦点+点击保存
const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  // input框消失
  inputVisible.value = false;
  // input框里的数据清空
  inputValue.value = '';
};
</script>
