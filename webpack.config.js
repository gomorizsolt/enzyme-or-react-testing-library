const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          title: "Enzyme vs. RTL",
        })
    ],
    devServer: {
      port: 3001
    }
  };