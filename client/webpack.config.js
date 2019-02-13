var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
    entry: `${SRC_DIR}/index.tsx`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    devtool: "source-map",
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        { test: /\.jsx?/, include: SRC_DIR, loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
            plugins: ["transform-object-rest-spread"]
          }
        },
        { test: /\.(png|jpg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 40000 // 40 kB
            }
          }]
        },
        { test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },
        { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]}
      ]
    },
};