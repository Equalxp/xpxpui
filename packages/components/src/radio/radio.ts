import { inject, computed } from 'vue';

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  label: {
    type: [String, Number, Boolean],
    default: ''
  },
  disabled: Boolean,
  size: String,
  border: Boolean
};

export const radioEmits = ['update:modelValue'];

export const useRadio = (props, emits) => {
  // 祖代之间的传值 inject
  const radioGroupProp = inject('radioGroupKey', undefined);
  const isGroup = computed(() => !!radioGroupProp);
  const modelValue = computed({
    // 两个radio的v-model都是同一个值
    get() {
      return isGroup.value ? radioGroupProp.modelValue : props.modelValue;
    },
    // 点击radio之后 ModelValue的值被赋值为 props.label 调用set方法 触发emit
    // v-model的值改变 就改变了radio
    set(val) {
      if (isGroup.value) {
        radioGroupProp.changeEvent(val);
      } else {
        emits('update:modelValue', val);
        emits('change', val);
      }
    }
  });
  const disabled = computed(() =>
    props.disabled ? props.disabled : radioGroupProp?.disabled
  );

  const size = computed(() => (props.size ? props.size : radioGroupProp?.size));

  const label = computed(() => props.label);
  const border = computed(() =>
    props.border ? props.border : radioGroupProp?.border
  );

  const classes = computed(() => ({
    // 选中的状态就是让v-model的值和标签的label值相同
    'is-checked': modelValue.value === label.value,
    'is-disabled': disabled.value,
    [`xp-radio-${size.value}`]: size.value,
    'is-bordered': border.value
  }));

  return {
    modelValue,
    disabled,
    size,
    label,
    classes
  };
};
