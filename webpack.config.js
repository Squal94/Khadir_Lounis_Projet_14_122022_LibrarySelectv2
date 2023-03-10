const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
/**
 * module.exports are used to define the expected components and props and to configure and secure the component and indicates the paths to be used .
 */
module.exports = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              filename: "angle-arrow-down.png",
              esModule: false,
              context: __dirname + "./",
            },
          },
        ],
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
