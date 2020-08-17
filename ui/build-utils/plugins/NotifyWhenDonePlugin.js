const { exec } = require("child_process");

function NotifyWhenDonePlugin() {}

NotifyWhenDonePlugin.prototype.apply = function (compiler) {
  if (typeof process === "undefined") return;

  compiler.plugin("done", function (stats) {
    if (stats.hasErrors()) {
      process.stderr.write("\x07");
    } else {
      console.log("Done!!!!!!!!!!!!!!!!!!");
      exec("notify-send -t 5000 -a Webpack 'Webpack Done!'");
    }
  });

  compiler.plugin("failed", function (err) {
    process.stderr.write("\x07");
  });
};

module.exports = NotifyWhenDonePlugin;
