const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (env) => ({
  plugins: [new BundleAnalyzerPlugin()],
});
