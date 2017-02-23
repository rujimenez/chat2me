var webpack = require("webpack");
var path = require("path");


module.exports = {

    entry: {
      app: "./src/app.js"
    },
    output: {
        filename:"build/bundle.js",
        sourceMapFileName: "bould/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                excludes: /(nodule_modules|bower_components)/,
                loader: 'babel',
                query:{
                    presets:['react', 'es2015']

                }

            }

        ]

    }


}