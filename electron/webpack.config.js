
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        name: 'api',
        mode: process.env.NODE_ENV || 'development',
        entry: `${__dirname}/api/main.ts`,
        output: {
            path: `${__dirname}/dist/electron`,
            filename: 'main.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts?/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        devtool: 'source-map',
        target: 'electron-main'
    },
    {
        name: 'ui',
        mode: process.env.NODE_ENV || 'development',
        entry: `${__dirname}/src/index.tsx`,
        output: {
            path: `${__dirname}/dist/renderer`,
            filename: 'index.js'
        },
        resolve: {
            extensions: ['.tsx', '.jsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: 'ts-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: `${__dirname}/dist/renderer`,
            compress: true,
            port: 3000
        },
        plugins: [
            new HtmlWebPackPlugin({ template: './index.html' })
        ]
    }
]