import { computed, ref } from 'vue';

// 规定props值的类型和默认值
export const inputProps = {
  // 子组件v-model传的值
  modelValue: {
    type: [Number, String]
  },
  placeholder: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 可清除
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  // text / password
  type: {
    type: String,
    default: 'text'
  },
  suffixIcon: {
    type: [String, Object]
  },
  prefixIcon: {
    type: [String, Object]
  },
  readonly: {
    type: Boolean,
    default: false
  }
};

// 自定义事件
export const inputEmit = [
  'update:modelValue',
  'input',
  'clear',
  'blur',
  'focus'
];

// useInput 确定各种属性的值
export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);
  const placeholder = computed(() => props.placeholder);
  const clearable = computed(() => props.clearable);

  // xp-input里写了show-password 那值就是true
  const showPassword = computed(() => props.showPassword);
  const passwordVisible = ref(false);
  const readonly = computed(() => props.readonly);

  const type = computed(() => {
    // showPassword表示是这个框是否是password的type
    // visible代表密码显示与否
    return showPassword.value
      ? passwordVisible.value
        ? 'text' // 看见密码
        : 'password' // 看不见密码
      : props.type;
  });

  // classes 确定值 通过各种属性不同的值 确定不同的class 展示不同的样式
  const classes = computed(() => ({
    'is-disabled': disabled.value,
    'is-clearable': clearable.value,
    'show-password': showPassword.value,
    'xp-input': type.value !== 'textarea',
    'xp-textarea': type.value === 'textarea',
    'xp-input-suffix':
      showPassword.value || clearable.value || props.suffixIcon,
    'xp-input-prefix': props.prefixIcon
  }));

  // 处理v-model的值 变成string类型
  const nativeInputValue = computed(() =>
    props.modelValue === null || props.modelValue === undefined
      ? ''
      : String(props.modelValue)
  );
  return {
    disabled,
    classes,
    clearable,
    showPassword,
    type,
    passwordVisible,
    placeholder,
    suffixIcon: props.suffixIcon,
    prefixIcon: props.prefixIcon,
    readonly,
    nativeInputValue
  };
};
