const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const NotifyWhenDonePlugin = require("./build-utils/plugins/NotifyWhenDonePlugin");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  const baseConfig = {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "myDist"),
      filename: "./bundle.js",
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new NotifyWhenDonePlugin(),
      new HtmlWebpackPlugin(),
    ],
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        // {
        //   test: /\.(jpe?g|svg)$/i,
        //   use: [
        //     {
        //       loader: "url-loader",
        //       options: { limit: 5000 }, // if image is less than 5000 bytes return blog else copy the file to the dist dir and return base64 encoded url
        //     },
        //   ],
        // },
      ],
    },
  };
  return merge(baseConfig, modeConfig(mode), presetConfig({ mode, presets }));
};
