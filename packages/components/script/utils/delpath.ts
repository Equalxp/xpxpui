import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';
//保留的文件
const stayFile = ['package.json', 'README.md'];

// 删除函数
const delPath = async (path: string) => {
  let files: string[] = [];

  // 同步的检测目录是否否存在
  if (fs.existsSync(path)) {
    // 同步读取给定目录的内容 返回一个数组
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      // 链接路径
      const curPath = resolve(path, file);

      // 判断文件目录是否存在
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          // 同步删除指定的文件
          fs.unlinkSync(curPath);
        }
      }
    });

    // 同步删除指定路径下的目录
    if (path != `${pkgPath}/xpxpui`) fs.rmdirSync(path);
  }
};
export default delPath;
