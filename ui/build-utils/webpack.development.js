module.exports = () => ({
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
