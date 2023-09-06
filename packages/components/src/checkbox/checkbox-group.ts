export const checkboxGroupProps = {
  // 子组件接收的props数据 进行数据的类型限定
  modelValue: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

export const checkboxGroupEmits = ['update:modelValue', 'change'];
