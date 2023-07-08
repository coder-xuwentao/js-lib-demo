// rollup.config.js
// commonjs
var common = require('./rollup.common.js');

module.exports = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js', // 默认的index.js就给cjs模块吧
        format: 'cjs',
        banner: common.banner,
    },
    plugins: [
        common.getCompiler()
    ]
};
