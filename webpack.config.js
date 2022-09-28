const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
console.log(mode);

module.exports = {
  mode: mode,

  entry: path.resolve(__dirname, "./src/index"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",

  devServer: {
    static: "./public",
  },
};
