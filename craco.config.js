const path = require("path");

module.exports = {
  webpack: {
    // extensions: ["js", "ts"],
    alias: {
      Assets: path.resolve(__dirname, "src/Assets/"),
      Components: path.resolve(__dirname, "src/Components/"),
      Hooks: path.resolve(__dirname, "src/Hooks/"),
      Pages: path.resolve(__dirname, "src/Pages/"),
      Utils: path.resolve(__dirname, "src/Utils/"),
    },
  },
};
