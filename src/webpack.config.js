
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "src/images", to: "public/images" },
        ],
      }),
    ],
  },
}
