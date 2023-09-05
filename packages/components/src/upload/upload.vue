<template>
  <div class="xp-upload">
    <input type="file" :multiple="props.multiple" :accept="props.accept" ref="Xppt" @change="getFiles" v-show="false">
    <div @click="fileUpload" v-if="!props.drag">
      <slot />
    </div>
    <Drager v-else @getFilesList="getFilesList" @fileUpload="fileUpload" />
    <!-- 展示选中的文件 -->
    <div class="xp-upload-list">
      <!-- 遍历文件数组中的数据 -->
      <div class="xp-upload-list_item" v-for="(item, index) in filesList" :key="index">
        <!-- 文件名 -->
        <div class="xp-upload-list_item-name">
          {{ item.name }}
        </div>
        <!-- 删除的一个小icon -->
        <div class="xp-upload-list_item-status-label">
          <Icon name="ashbin" @click="delFile(index)" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import './style/index.less'
import { ref } from 'vue'
import Icon from '../icon/icon.vue'
import Drager from './dragger.vue'

export type Emits = {
  (e: 'getFilesList', value: File[]): void
}
defineOptions({
  name: 'xp-upload',
});
type UploadType = {
  // 多选
  multiple?: boolean,
  // 接收文件的类型
  accept?: string,
  // 可拖拽进行上传
  drag?: boolean,
}
const props = defineProps<UploadType>()
// 获取dom元素
const Xppt = ref()

const emits = defineEmits<Emits>()
// 文件数组 用于存放上传的文件 并且用于展示
const filesList = ref<File[]>([])
const fileUpload = () => {
  // 点击触发input事件
  Xppt.value.click()
}

// 文件列表
const getFiles = (e: Event) => {

  const files = (e.target as HTMLInputElement).files
  if (!files) return

  filesList.value.push(...Array.from(files))
  // 触发自定义事件 将文件列表传递给父组件
  emits('getFilesList', filesList.value)
}

// 删除文件
const delFile = (index: number) => {
  filesList.value.splice(index, 1)
  emits('getFilesList', filesList.value)
}

const getFilesList = (file: File[]) => {
  filesList.value = file
  emits('getFilesList', file)
}

</script>