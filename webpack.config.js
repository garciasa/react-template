const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            { 
                test: /\.(sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader"
            }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
        filename: "styles.css"
    })
  ]
}