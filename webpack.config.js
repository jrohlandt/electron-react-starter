const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./ui/build-utils/webpack.${env}`)(env);
const presetConfig = require("./ui/build-utils/loadPresets");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const NotifyWhenDonePlugin = require("./ui/build-utils/plugins/NotifyWhenDonePlugin");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  const baseConfig = {
    mode,
    entry: "./ui/src/index.js",
    output: {
      path: path.resolve(__dirname, "ui", "dist"),
      filename: "./bundle.js",
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new NotifyWhenDonePlugin(),
      new HtmlWebpackPlugin({ template: "./ui/src/index.ejs" }),
    ],
    externals: { electron: "electron" },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },

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
