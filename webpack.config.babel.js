const {
  resolve,
} = require('path');

module.exports = {
  target: 'async-node',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'lib'),
    library: 'texticsStream',
    libraryTarget: 'commonjs2',
    filename: 'tStream.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: resolve(__dirname, 'src'),
    }],
  },
};
