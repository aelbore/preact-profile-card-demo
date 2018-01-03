const path = require('path');

const pkg = require(path.resolve(__dirname, 'package.json'));
const names = pkg.name.split('/');
const pkgName = (names.length < 2) ? names : names[1];

module.exports = {
  devtool: 'source-map',
  entry: ['./src/app'],
  output: {
    path: path.resolve(__dirname, "dist/bundles"),
    filename: `${pkgName}.js`
  },
  resolve: {
    extensions: ['.ts','.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loaders: ['ts-loader']
    }]
  }
};
