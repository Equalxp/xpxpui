import dialog from './dialog.vue';
import { openDialog } from './openDialog';
import { withInstall } from '@xpxpui/utils';
export const XpDialog = withInstall(dialog);
export const XpOpenDialog = withInstall(openDialog);
