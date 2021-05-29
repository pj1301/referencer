
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
                    exclude: /node_modules/,
                    use: 'ts-loader'
                }
            ]
        },
        devtool: 'source-map',
        target: 'electron-main'
    },
    {
        name: 'ui',
        mode: process.env.NODE_ENV || 'development',
        entry: `${__dirname}/src/App.tsx`,
        output: {
            path: `${__dirname}/dist/renderer`,
            filename: 'index.js'
        },
        resolve: {
            extensions: ['.tsx', '.jsx', '.ts', '.js', '.css', '.scss' ]
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
                    use: 'babel-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            host: 'localhost',
            contentBase: `${__dirname}/dist/renderer`,
            compress: true,
            port: 3000,
            liveReload: true,
            hot: true,
            inline: true,
            historyApiFallback: true
        },
        watchOptions: {
            ignored: /node_modules/,
            poll: true
        },
        plugins: [
            new HtmlWebPackPlugin({ template: './index.html' })
        ]
    }
]