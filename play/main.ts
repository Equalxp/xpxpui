import { createApp } from "vue";
import App from "./app.vue";

import xpxpui from '@xpxpui/component'
const app = createApp(App);

app.use(xpxpui)
app.mount("#app");
