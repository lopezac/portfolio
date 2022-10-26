const path = require("path");

module.exports = {
  webpack: {
    // extensions: ["js", "ts"],
    alias: {
      Assets: path.resolve(__dirname, "src/assets"),
      Components: path.resolve(__dirname, "src/components"),
      Hooks: path.resolve(__dirname, "src/hooks"),
      Views: path.resolve(__dirname, "src/views"),
      Utils: path.resolve(__dirname, "src/utils"),
    },
  },
  // babel: {
  //   plugins: [
  //     [
  //       "prismjs",
  //       {
  //         languages: ["javascript", "css", "python", "markup"],
  //         plugins: ["line-numbers"],
  //         theme: "twilight",
  //         css: true,
  //       },
  //     ],
  //   ],
  // },
};
