import button from './button.vue';
// 导出组件的时候 提供install方法
import { withInstall } from '@xpxpui/utils';
const XpButton = withInstall(button);
export default XpButton;
