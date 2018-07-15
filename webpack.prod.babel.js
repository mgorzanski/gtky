const path = require("path");
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UlgifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cssPlugin = new MiniCssExtractPlugin({
  filename: "main.css"
});

const uglify = new UlgifyJSPlugin({
  sourceMap: true
});

const clientConfig = {
  name: 'client',
  target: 'web',
  entry: { client: ["babel-polyfill", path.resolve(__dirname, 'src', 'index.js')] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devtool: "source-map",
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  optimization: {
    minimizer: [
      uglify,
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [cssPlugin, new CleanWebpackPlugin(['build'])],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals({ whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i] })],
  entry: { server: ['babel-polyfill', path.resolve(__dirname, 'src', 'server.js')] },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  devtool: 'inline-source-map',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  optimization: {
    minimizer: [
      uglify,
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

export default [clientConfig, serverConfig];