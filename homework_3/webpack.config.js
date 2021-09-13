const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(mp3|mp4)$/i,
        use: { loader: "file-loader" },
      },
      {
        test: /\.(jpg|gif)$/i,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              compress: {
                mode: "high",
                webp: true,
                gifsircle: true,
                disableOnDevelopment: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
    }),
  ],
};
