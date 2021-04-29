
const path = require('path')

module.exports = [
    {
        name: 'api',
        mode: 'production',
        entry: `${__dirname}/api/main.ts`,
        output: {
            path: `${__dirname}/dist`,
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
        target: 'electron-main'
    },
    {
        name: 'ui',
        mode: 'production',
        entry: `${__dirname}/src/App.tsx`,
        output: {
            path: `${__dirname}/dist`,
            filename: 'App.js'
        },
        resolve: {
            extensions: ['.tsx', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        target: 'electron-renderer'
    }
]