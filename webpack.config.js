const path = require("path");
const isDevelopment = true;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("public"),
        filename: "bundle.js"
    },
    mode: isDevelopment ? "development" : "production", // can also be "production" to minify code, make it more production friendly
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}