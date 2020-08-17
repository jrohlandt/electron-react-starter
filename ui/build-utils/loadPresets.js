const { merge } = require("webpack-merge");

const applyPresets = function (env) {
  const { presets } = env;
  if (typeof presets === "undefined") return {};

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) =>
    require(`./presets/webpack.${presetName}.js`)(env)
  );

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
