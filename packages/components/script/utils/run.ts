import { spawn } from 'child_process';

// 执行命令的工具函数
export default async (command: string, path: string) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      //执行命令的路径
      cwd: path,
      //输出共享给父进程
      stdio: 'inherit',
      //mac不需要开启，windows下git base需要开启支持
      shell: true
    });
    //执行完毕关闭并resolve
    app.on('close', resolve);
  });
};
