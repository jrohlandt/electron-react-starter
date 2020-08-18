const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  devtool: "none",
  output: {
    path: path.resolve(__dirname, "..", "..", "app", "assets"),
    filename: "./bundle_[chunkhash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle_[chunkhash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
