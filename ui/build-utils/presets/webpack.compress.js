const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env) => ({
  plugins: [new CompressionPlugin()],
});
