const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'none', //production,development,none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // loader
  //.css -> 모든 css 파일에 use 하겠다.
  // .js -> 모든 js 파일에 use 하겠다.
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  // plugins: [
  //   new MiniCssExtractPlugin()
  // ],
}