const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./public/index.html",
//   filename: "./index.html"
// });

// module.exports = {
//   target: 'node',
//   externals: [nodeExternals()],
//   entry: ["babel-polyfill", "./src/index.js"],
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "build"),
//     library: 'app',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           { loader: "style-loader/url" },
//           { loader: "file-loader" },
//           { loader: "css-loader", options: { sourceMap: true } },
//           { loader: "postcss-loader" }
//         ]
//       }
//     ]
//   },
//   // plugins: [htmlPlugin],
//   devtool: "inline-source-map"
// };

const common = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader/url" },
          { loader: "file-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader" }
        ]
      }
    ]
  }
};

const clientConfig = {
  ...common,
  name: 'client',
  target: 'web',
  entry: { client: ["babel-polyfill", path.resolve(__dirname, 'src', 'index.js')] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devtool: "inline-source-map"
};

const serverConfig = {
  ...common,
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: { server: ['babel-polyfill', path.resolve(__dirname, 'src', 'server.js')] },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  devtool: 'inline-source-map'
};

export default [clientConfig, serverConfig];