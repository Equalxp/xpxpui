// 拿到导出的组件 一起挂载
import components from './src/index';
export * from './src/index';
import { App } from 'vue';
// install方法 给app.use()要求我们传入的参数具有这个方法
// 全局安装所有组件方法
export default {
  install: (app: App) => {
    components.forEach((c) => app.use(c));
  }
};

// app.use(xx) => xx.install() => vue.component()注册组件
