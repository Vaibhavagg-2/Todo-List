const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'todo-list',
      template: './src/index.html',
      inject:'body'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          outputPath: 'asset/',
          publicPath: 'asset/'
        },
      },
    ],
  },
  //devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};