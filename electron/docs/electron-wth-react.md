# Building Apps With Electron & React (TypeScript)

## Configs

### `package.json`

First install the required packages:

```bash
# electron related
npm i -D electron ts-loader typescript webpack webpack-cli

# react related
npm i react react-dom
```

Set the following scripts:

```json
// builds the webpack configuration for electron
"build:electron": "webpack --config-name electron"
```