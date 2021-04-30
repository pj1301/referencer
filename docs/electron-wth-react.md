# Building Apps With Electron & React (TypeScript)

## Layout

![File tree](./assets/file-tree.png)

&nbsp;

## Configs

### `package.json`

First install the required packages:

```bash
# electron related
npm i -D nodemon electron ts-loader typescript webpack webpack-cli @types/node

# react related
npm i react react-dom 
npm i -D serve @types/react @types/react-dom @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime babel-loader webpack-dev-server html-webpack-plugin css-loader sass-loader node-sass style-loader

# all imports
npm i react react-dom 
npm i -D nodemon electron ts-loader typescript webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime babel-loader @types/node @types/react @types/react-dom  css-loader sass-loader node-sass style-loader

```

Set the following scripts:

```json
"scripts": {
    "build:electron": "webpack --config-name api",
    "start:electron": "electron ./dist/electron/main.js",
    "inspect:electron": "electron --inspect=5000",
    "build:react": "webpack --config-name ui",
    "start:react": "webpack serve ./dist/renderer"
}
```

### `webpack.config.js`

Create a webpack configuration file for both the Electron and the React apps:

```js

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
            extensions: ['.tsx', '.jsx', '.js', '.css', '.scss' ]
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
            contentBase: `${__dirname}/dist/renderer`,
            compress: true,
            port: 3000
        },
        plugins: [
            new HtmlWebPackPlugin({ template: './index.html' })
        ]
    }
]
```

### `.babelrc`

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            { "regenerator": true }
        ]
    ]
}
```

### `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "lib": ["dom", "es2015", "es2016", "es2017", "es2018", "es2019"],
        "jsx": "react",
        "declaration": true,
        "sourceMap": true,
        "outDir": "./dist/electron",
        "strict": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```