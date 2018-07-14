const path = require("path");
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssPlugin = new MiniCssExtractPlugin({
  filename: "main.css"
});

const clientConfig = {
  name: 'client',
  target: 'web',
  entry: { client: ["babel-polyfill", path.resolve(__dirname, 'src', 'index.js')] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devtool: "inline-source-map",
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [cssPlugin],
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

export default [clientConfig, serverConfig];