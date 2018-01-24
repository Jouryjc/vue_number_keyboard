
var webpack = require("webpack")
var path = require("path")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname , 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                loader: cssLoader 
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    // vue: {
    //   loaders: {
    //     css: ExtractTextPlugin.extract("css"),
    //     stylus: ExtractTextPlugin.extract("css!stylus")
    //   }
    // },
    devtool: "#source-map"
}

if (process.env.NODE_ENV === 'production') {

    delete module.exports.devtool
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        // new ExtractTextPlugin("build.css")
    ]
} else {

    // module.exports.plugins = [
    //   new ExtractTextPlugin("build.css")
    // ]
    // module.exports.devtool = '#source-map'
}