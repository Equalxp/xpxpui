import XpDialog from './dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (
  options = {
    title: () => '标题 Title',
    content: () => '内容 Content',
    confirm: () => {},
    cancel: () => {},
    overlay: true,
    overlayClosable: true
  }
) => {
  const { title, content, confirm, cancel, overlay, overlayClosable } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };

  const app = createApp({
    // 渲染dom节点
    render() {
      // 创建dom节点
      return h(
        XpDialog,
        {
          modelValue: true,
          'onUpdate:modelValue': (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          confirm,
          cancel,
          overlay,
          overlayClosable
        },
        {
          title,
          default: content
        }
      );
    }
  });
  app.mount(div);
};
