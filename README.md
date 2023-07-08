# clone
实现 Javascript 引用类型数据的深拷贝功能

## 使用者指南
通过 pnpm 下载安装代码
```bash
$ pnpm install js-lib-demo
```

如果使用 webpack 等环境
```js
import { clone } from 'js-lib-demo';
clone ({ a: 1 });
```

## 贡献者指南
首次运行需要先安装依赖
```bash
$ pnpm install
```
一键打包生成生产代码
```bash
$ pnpm run build
```
运行单元测试
```bash
$ pnpm test
```