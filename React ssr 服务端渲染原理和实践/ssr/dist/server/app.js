/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/app/index.js":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"./src/server/middlewares/react-ssr.js\");\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"koa2\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/pro-config.js */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst port = (_share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default().nodeServerPort) || process.env.PORT;\nconst app = new (koa2__WEBPACK_IMPORTED_MODULE_1___default())(); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use((_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0___default())); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack://ssr/./src/server/app/index.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\src\\\\server\\\\middlewares\\\\react-ssr.js: Support for the experimental syntax 'jsx' isn't currently enabled (13:33):\\n\\n\\u001b[0m \\u001b[90m 11 |\\u001b[39m     console\\u001b[33m.\\u001b[39mlog(\\u001b[32m'-------------------'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 |\\u001b[39m     \\u001b[90m//渲染组件为 html 字符串\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 |\\u001b[39m     \\u001b[36mconst\\u001b[39m html \\u001b[33m=\\u001b[39m renderToString(\\u001b[33m<\\u001b[39m\\u001b[33mStaticRouter\\u001b[39m location\\u001b[33m=\\u001b[39m{path}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m           \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m routeList\\u001b[33m=\\u001b[39m{routeList}\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mApp\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 |\\u001b[39m     \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mStaticRouter\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m     ctx\\u001b[33m.\\u001b[39mbody\\u001b[33m=\\u001b[39m\\u001b[32m`<!DOCTYPE html>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:810:17)\\n    at Parser.raiseWithData (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:803:17)\\n    at Parser.expectOnePlugin (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9995:18)\\n    at Parser.parseExprAtom (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11376:22)\\n    at Parser.parseExprSubscripts (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10954:23)\\n    at Parser.parseUpdate (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10934:21)\\n    at Parser.parseMaybeUnary (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10912:23)\\n    at Parser.parseExprOps (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10769:23)\\n    at Parser.parseMaybeConditional (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10743:23)\\n    at Parser.parseMaybeAssign (E:\\\\git\\\\tanran\\\\React ssr 服务端渲染原理和实践\\\\ssr\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10706:21)\");\n\n//# sourceURL=webpack://ssr/./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "./src/share/pro-config.js":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/***/ ((module) => {

eval("//双端公用的配置文件\nmodule.exports = {\n  wdsPort: 9002,\n  //webpack dev server 服务的运行端口\n  nodeServerPort: 9001 //node server 的监听端口\n\n};\n\n//# sourceURL=webpack://ssr/./src/share/pro-config.js?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "koa2":
/*!***********************!*\
  !*** external "koa2" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa2");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/app/index.js");
/******/ 	
/******/ })()
;