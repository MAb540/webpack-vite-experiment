const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: "./src/main.js",
    // main: {
    //     import: './src/main.js',
    //     dependOn: 'shared',
    //   },
    //   another: {
    //     import: './src/logger.js',
    //     dependOn: 'shared',
    //   },
    //   shared: 'lodash'
  },
});
