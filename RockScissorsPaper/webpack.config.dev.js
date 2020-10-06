const path = require("path");

module.exports = {
  entry: { app: "./src/ts/app.ts" },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
        exclude: [/node_modules/, /\*.dev.ts/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "js"),
    publicPath: "dist/js",
  },
};
