const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = config = {
    entry: "./src/server.ts",
    output: {
        path: path.resolve(__dirname, "..", "dist", "server", "app"),
        filename: "server.js"
    },
    plugins: [
        new CopyPlugin([
            { from: "package.json", to: path.resolve(__dirname, "..", "dist", "server", "app") },
            // { from: "appAutoInstall.sh", to: path.resolve(__dirname, "..", "dist") },
            // { from: path.resolve(__dirname, "install"), to: path.resolve(__dirname, "..", "dist", "server") },
        ])
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    target: "node",
    mode: "production",
    // externals: ["utf-8-validate", "bufferutil"],
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js"
        ]
    }
}
