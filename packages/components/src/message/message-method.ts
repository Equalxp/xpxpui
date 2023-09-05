import { createVNode, render, ref, VNode, isVNode } from 'vue'
import type { MessageQueue } from './message'
import MessageConstructor from './message.vue'
import { messageTypes } from './message'

let seed = 1
const zIndex = ref(2000)
// vm实例数组
const instances: MessageQueue = []

const message = function (options = {}) {
  // options是一个VNode
  console.log('options',options);
  if(typeof options === 'string' || isVNode(options)) {
    options = { message: options }
  }
  // console.log('options',options);
  // 距离上边框的距离
  let verticalOffset = 20
  // 多个message框的offset计算
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16
  })

  const id = `message_${seed++}`
  const userOnClose = (options as any).onClose
  const props = {
    id,
    offset: verticalOffset,
    zIndex: zIndex.value++,
    ...options,
    onClose: () => {
      close(id, userOnClose)
    }
  } as any

  // 追加的"根组件"
  let appendTo: HTMLElement | null = document.body
  // 
  console.log('typeof options.appendTo',typeof options.appendTo);
  if(options.appendTo instanceof HTMLElement) {
    appendTo = options.appendTo
  } else if (typeof options.appendTo === 'string') {
    appendTo = document.querySelector(options.appendTo)
  }

  // 是否退回默认值
  if (!(appendTo instanceof HTMLElement)) {
    appendTo = document.body;
    throw new Error(
      "JwMessage the appendTo option is not an HTMLElement. Falling back to document.body."
    );
  }

  const container = document.createElement("div")
  container.className = `container_${id}`
  // props传递给了MessageConstructor组件
  // const vm = createVNode(MessageConstructor, props, null)

  // VNode ...options传来的值
  const message = props.message
  
  // 创造vm
  const vm = createVNode(
    MessageConstructor,
    props,
    isVNode(props.message) ? { default: () => message } : null
  );

  // 防止内存泄露 清除消息元素
  vm.props!.onDestroy = () => {
    render(null, container);
  };

  render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild!);

  return {
    // 不是直接调用 onClose 函数，而是设置这个值，这样我们就可以拥有完整的生命周期
    close: () => ((vm.component!.proxy as any).visible = false),
  }
}

// 不同状态
messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options,
      };
    }
    return message({
      ...options,
      type,
    });
  };
});

export function close(id: string, userOnClose?: (vm: VNode) => void): void {
  const index = instances.findIndex(({ vm }) => id === vm.component!.props.id)
  if(index === -1) return

  const { vm } = instances[index]
  if(!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el!.offsetHeight;
  instances.splice(index, 1);

  const len = instances.length;
  if (len < 1) return;

  for (let i = index; i < len; i++) {
    const pos = parseInt(instances[i].vm.el!.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component!.props.offset = pos;
  }
}

export function closeAll(): void {
  for(let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component
    (instance?.proxy as any)?.close();
  }
}
message.closeAll = closeAll;

export default message;