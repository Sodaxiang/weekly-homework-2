const path = require("path");
const webpack = require("webpack");
const htmlPlugin = require("html-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/task2/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./src/dist")
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "import",
                {
                  libraryName: "choerodon-ui",
                  libraryDirectory: "es",
                  style: true
                }
              ]
            ],
            presets: ["env", "react", "stage-0"],
            compact: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|svg)$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".less", ".css", ".scss"]
  },
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: "./src/task2/index.html"
    }),
    new cleanPlugin("dist"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    open: true,
    historyApiFallback: true
  }
};
