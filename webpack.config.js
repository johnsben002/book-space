const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map"
  },
  devServer: {
    // contentBase: path.join(__dirname, "public/"),
    // port: 3000,
    publicPath: "http://localhost:8080/dist/",
    proxy: {
      '/': 'http://localhost:3000'
    },
    hotOnly: true
  },
  devtool: "source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()]
};