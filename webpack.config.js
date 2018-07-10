import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

module.exports = {
    module: {
        rules: {
            text: /\.jsx?$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, 'src')],
            query: {
                presets: [
                    'env',
                    'stage-2',
                    'react'
                ]
            }
        }
    },
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        server: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devtool: 'cheap-module-source-map',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    }
}