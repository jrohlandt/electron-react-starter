const path = require("path");

module.exports = () => ({
  devtool: "source-maps",
  output: {
    publicPath: "/",
  },
  devServer: {
    open: true,
  },
});
