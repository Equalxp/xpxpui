import type { App, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
// install函数
export default <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
    // 所以要加上这个条件
    const name = (comp as any).name || (comp as any).__name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
// app.use => 找install方法 => 在install中执行component方法
