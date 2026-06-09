const path = require("path");

module.exports = {
  entry: "./src/scripts/index.js", // 輸入檔案的路徑
  output: {
    path: path.resolve(__dirname, "dist"), // 輸出目錄的路徑
    filename: "bundle.js", // 輸出檔案的名稱
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [],
};
