const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const mainConfig = {
  entry: "./main.js",
  target: 'electron-main',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  node: {
    __dirname: false,
    __filename: false
  },
};

const rendererConfig = {
  entry: "./src/renderer.js",
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'renderer.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new VueLoaderPlugin()
  ],
};

const renderer1Config = {
  entry: "./src/renderer1.js",
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'renderer1.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }]
      }
    ]
  },
  plugins: [
    // filename is important for apps with multiple html files.
    // Witout filename the default is index.html. So this one would
    // clobber the previous index.html
    new HtmlWebpackPlugin({
      filename: "index1.html",
      template: "./src/index1.html"
    }),
    new VueLoaderPlugin()
  ],
};

module.exports = [mainConfig, rendererConfig, renderer1Config];