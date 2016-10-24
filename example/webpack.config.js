const path = require('path');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/build',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
            },
        ],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
    devServer: {
        contentBase: __dirname,
        port: 2000,
    },
};
