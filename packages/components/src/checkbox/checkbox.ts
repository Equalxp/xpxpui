import { computed, inject } from 'vue';
// props 属性类型的限定
export const checkboxProps = {
  // 子组件v-model传来的值
  modelValue: {
    type: Boolean,
    default: false
  },
  // 单选框对应的值
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  iconSize: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 不确定是否全选
  indeterminate: {
    type: Boolean,
    default: false
  },
  // 边框
  border: {
    type: Boolean,
    default: false
  }
};

// vue3的组件之间双向数据绑定
// 父组件使用子组件 同时v-model 传递数据
// 子组件props接收'modelValue'
// 更新的时候 自定义事件就叫 emit(update:modelValue,回传父组件的值)
export const checkboxEmits = ['update:modelValue', 'change'];

export const useCheckbox = (props, emits) => {
  const checkboxGroupProps = inject('checkboxGroupKey', undefined);
  const isGroup = computed(() => !!checkboxGroupProps);
  // 单选框对应的值
  const label = computed(() => props.label);
  // modelValue 是子组件使用v-model传来的值
  const modelValue = computed<string[] | boolean>({
    get() {
      return isGroup.value ? checkboxGroupProps.modelValue : props.modelValue;
    },
    set(value) {
      if (isGroup.value) {
        checkboxGroupProps.changeEvent(value);
      } else {
        emits('update:modelValue', value);
        emits('change', value);
      }
    }
  });

  // 大小尺寸
  const size = computed(() => props.size);

  // 前面icon的大小
  const iconSize = computed(() => {
    if (props.iconSize) {
      return props.iconSize;
    } else if (size.value === 'large') {
      return '12px';
    } else if (size.value === 'small') {
      return '8px';
    } else {
      return '10px';
    }
  });

  // 禁用框
  const disabled = computed(() => {
    return props.disabled;
  });

  // icon颜色
  const iconColor = computed(() => {
    if (disabled.value) {
      if (!isGroup.value) {
        return modelValue.value ? '#c2c2c2' : '#fff';
      } else {
        return modelValue.value.indexOf(label.value) > -1 ? '#c2c2c2' : '#fff';
      }
    } else {
      return '#fff';
    }
  });

  // 全选是否
  const indeterminate = computed(() => props.indeterminate);
  // 边框
  const border = computed(() => props.border);
  //
  const classes = computed(() => ({
    'is-checked': isGroup.value
      ? modelValue.value.indexOf(label.value) > -1 && !indeterminate.value
      : modelValue.value && !indeterminate.value,
    [`xp-checkbox-${size.value}`]: size.value,
    'is-disabled': disabled.value,
    'is-indeterminate': indeterminate.value,
    'is-border': border.value
  }));
  return {
    modelValue,
    label,
    classes,
    size,
    iconSize,
    disabled,
    iconColor,
    isGroup,
    indeterminate,
    border
  };
};
