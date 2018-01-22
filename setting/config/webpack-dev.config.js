const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("../paths");

module.exports = {
    bail: false,
    cache: true,
    devtool: "cheap-module-inline-source-map",
    entry: {
        app: [
            "babel-polyfill",
            "react-hot-loader/patch",
            paths.root("src/index")
        ]
    },
    output: {
        path: paths.root("public"),
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].js",
        publicPath: "/",
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            ["env", {
                                "modules": false,
                                "browsers": ["last 2 versions"]
                            }],
                            "react",
                            "stage-2"
                        ],
                        "plugins": [
                            "transform-export-extensions",
                            "transform-decorators-legacy",
                            "react-hot-loader/babel"
                        ],
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { sourceMap: true, minimize: false } },
                    { loader: "postcss-loader", options: { sourceMap: true, config: { path: paths.root("setting/config/postcss.config.js") } } },
                    { loader: "sass-loader", options: { includePaths: [paths.root()], sourceMap: true } }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: paths.root("src/index.html")
        }),
        new ExtractTextPlugin({
            filename: "[name].[chunkhash:8].css",
            disable: true,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [ "node_modules", paths.root()],
        extensions: [".js", ".jsx"]
    },
    performance: { hints: false },
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        compress: true,
        noInfo: false,
        quiet: false,
        inline: true,
        hot: true,
        historyApiFallback: true,
        disableHostCheck: true,
        stats: {
            colors: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }
};
