const path = require('path');

module.exports = {
  mode: 'production', // or 'production'

  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'Accessibility',
      type: 'umd',
      export: 'default',
    },
  },
  optimization: {
    minimize: true, // Enable minification
  },
  devtool: 'source-map', // Generate source map file
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
};
