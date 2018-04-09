const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [

    path.join(__dirname,'src/browser/react/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        query:{
          presets: [ 'es2015', 'react']
        }
      }
    ]
  }


}
