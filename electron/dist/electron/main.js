/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./api/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var Main = /** @class */ (function () {
    function Main() {
        this.defaultWindowOpt = { width: 800, height: 600 };
        this.app = electron_1.app;
        this.setListeners();
    }
    Main.prototype.createWindow = function (mainWindow, windowOptions) {
        var newWindowOptions = windowOptions !== null && windowOptions !== void 0 ? windowOptions : this.defaultWindowOpt;
        var newWindow;
        if (mainWindow) {
            newWindow = new electron_1.BrowserWindow(newWindowOptions);
            this.session = newWindow.webContents.session;
            newWindow.loadURL('http://localhost:3000');
            this.mainWindow = newWindow;
        }
        else {
            newWindow = new electron_1.BrowserWindow(newWindowOptions);
            this.secondaryWindows.push(newWindow);
        }
        this.checkDevTools(newWindow);
    };
    Main.prototype.checkDevTools = function (window) {
         true && window.webContents.openDevTools();
    };
    Main.prototype.setListeners = function () {
        var _this = this;
        this.app
            .on('ready', function () { return _this.createWindow(true); })
            .on('window-all-closed', function () {
            if (process.platform !== 'darwin')
                _this.app.quit();
        })
            .on('activate', function () {
            if (!_this.mainWindow)
                _this.createWindow(true);
        });
    };
    return Main;
}());
(function () { return new Main(); })();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map