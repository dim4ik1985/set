const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа для сборки проекта
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    filename: 'index_bundle.js', // Имя выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }), new MiniCssExtractPlugin({
    filename: 'style.css',
    chunkFilename: '[id].css',
  }),
  ],
};
