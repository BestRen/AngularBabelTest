const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/assets"),
        compress: true,
        port: 9000
    }
}