const path = require("path");

module.exports = {
  entry: "./app.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "webpack-tsconfig.json",
            },
          },
        ],
        exclude: [/node_modules/, /\\*.dev.ts/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "js"),
    publicPath: "dist/src",
  },
};
