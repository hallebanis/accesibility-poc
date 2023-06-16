const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    // Add more entry points for other JavaScript files
  },
  output: {
    filename: 'sdk.js', // Set the output filename to 'sdk.js' for the non-minified version
    path: path.resolve(__dirname, 'dist'),
    library: 'SDK', // Export the bundled module as a global variable named 'SDK'
    libraryTarget: 'umd', // Use Universal Module Definition (UMD) to support multiple environments
  },
  optimization: {
    minimize: true, // Enable minification
  },
  devtool: 'source-map', // Generate source map file
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
};
