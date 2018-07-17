const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ts)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'src', 'assets'),
    filename: '[name].js',
  },
  watch: true,
  devServer: {
    contentBase: 'src',
  },
};
