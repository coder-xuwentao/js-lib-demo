// rollup.config.aio.js
// aio = all in one, 即把所有以来打包进来。
var nodeResolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');

var common = require('./rollup.common.js');

module.exports = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd', // umd 通用模块定义，与 amd、cjs 和 iife 合而为一
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        nodeResolve({
            main: true,
            extensions: ['.js', '.ts']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
    ]
};
