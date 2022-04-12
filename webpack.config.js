const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',

        componente: './src/componente.js',


        print: './src/print.js',


    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            chunkFilename: "[id].html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",


        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },

            ],
        })
    ],
    module: {
        rules: [{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }



        ],

    },
    output: {

        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },


};