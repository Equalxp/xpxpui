import { computed, ref } from 'vue'

export const selectProps = {
  // 接收父组件v-model传的值
  modelValue: {
    type: [String, Number, Boolean, Object],
  },
  options: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  // 多选
  multiple: {
    type: Boolean,
    default: false,
  },
};

// 修改传过来的modelValue props 的(修改)事件
export const selectEmits = ['update:modelValue','change','clear'];

export const useSelect = (props, emits) => {
  const options = computed(() => props.options)
  const modelValue = computed(() => props.modelValue)
  const disabled = computed(() => props.disabled)
  const placeholder = computed(() => props.placeholder);
  const clearable = computed(() => props.clearable);
  const closeVisible = ref(false); 
  const multiple = computed(() => props.multiple);
  // {label,value} options里面的值和v-model的值相同的值
  // console.log('value对应的值',props.options.find((v) => v.value === props.modelValue))
  // console.log(props.options
  //   .filter((v) => modelValue.value.includes(v.value))
  //   .map((v) => v.label));
  
  // options中v-model(modelValue)对应的那一个label值
  const modelLabel = computed({
    get() {
      if(!multiple.value) {
        const item = props.options.find((v) => v.value === props.modelValue)
        return item ? item.label : ""
      } else {
        return props.options
          .filter((v) => modelValue.value.includes(v.value))
          .map((v) => v.label);
      }
    },
    set() {}
  });

  return {
    options,
    modelValue,
    modelLabel,
    disabled,
    placeholder,
    clearable,
    closeVisible,
    multiple,
  };
}