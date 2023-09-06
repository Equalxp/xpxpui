/**
 * 使用 app.use()的时候它会调用传入参数的 install 方法
 * 给每个组件添加一个 install 方法
 * 再导出整个组件库
 */
import radio from './radio.vue';
import radiogroup from './radio-group.vue';
import { withInstall } from '@xpxpui/utils';
// 每个组件已经安装了
export const XpRadio = withInstall(radio);
export const XpRadioGroup = withInstall(radiogroup);
