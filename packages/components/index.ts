// 拿到导出的组件 一起挂载
import components from "./src/index";
export * from "./src/index";
import { App } from "vue";
export default {
  install: (app: App) => {
    components.forEach((c) => app.use(c));
  },
};

// app.use(xx) => xx.install() => vue.component()注册组件  