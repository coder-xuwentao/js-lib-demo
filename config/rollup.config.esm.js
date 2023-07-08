// rollup.config.js
// ES output
var common = require('./rollup.common.js');

module.exports = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
        banner: common.banner,
    },
    plugins: [
        common.getCompiler()
    ]
};
