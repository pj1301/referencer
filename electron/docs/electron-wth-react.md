# Building Apps With Electron & React (TypeScript)

## Configs

### `package.json`

First install the required packages:

```bash
# electron related
npm i -D electron ts-loader typescript webpack webpack-cli @types/node

# react related
npm i react react-dom 
npm i -D serve @types/react @types/react-dom @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime webpack-dev-server
```

Set the following scripts:

```json
"scripts": {
    "build:electron": "webpack --config-name api", // builds the webpack configuration for electron
    "start:electron": "electron ./dist/main.js" // starts the electron application
}
```

### `webpack.config.js`

Create a webpack configuration file for both the Electron and the React apps:

```js

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
```