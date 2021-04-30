# Referencer

## Run

There are several different configurations for this application. 

### In Development

Whilst in development:

```bash
# electron - debug
npm run start-inspect:electron
# electron - live reload
npm run dev:electron

# react - allow changes to be reflected upon save
npm run dev:react # you will need to start the server in a separate tab
npm run start:react
```

### Production

Production is much simpler as we will not need to watch the build/compilation process.

```bash
npm run build:electron
npm run build:react
npm run start:react
npm run start:electron
```

> [!Important]
> You must start the React server before the electron server.

&nbsp;

## Development Guide

For information on the development of this application, refer to the guides inside the doc directory:

* [Electron guide](./docs/electron-with-react.md)

&nbsp;

## Author

**pj1301**
