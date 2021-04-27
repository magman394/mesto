const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  target: 'es5',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
        
      }
    },
      {
        test: /\.css$/i,
         use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader'
        ],

  }, {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            	esModule: false
            }
          },
        ],
      },
    ],
  },
    plugins: [
    new HtmlWebpackPlugin({
    	filename: 'index.html',
    	template: './src/index.html'
    	}),
    new MiniCssExtractPlugin()
    ]

};