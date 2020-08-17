// todo don't use this is just an example of presets
module.exports = (env) => ({
  module: {
    rules: [{ test: /\.svg$/i, use: ["svg-inline-loader"] }],
  },
});
