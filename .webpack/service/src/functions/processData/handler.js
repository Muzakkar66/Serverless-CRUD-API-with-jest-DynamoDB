/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/processData/handler.ts":
/*!**********************************************!*\
  !*** ./src/functions/processData/handler.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n\r\n\r\n\r\nconst processData = async (event) => (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\r\n    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,\r\n    event,\r\n});\r\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(processData);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3Byb2Nlc3NEYXRhL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZS16ZXJvY29kZS1iYXNlLXRlbXBsYXRlLy4uLy4uL0M6L011emFra2FyL1plcm9Db2RlQVBJIFByb2plY3QvQ1JVRC1pbi1iYXNlLXRlbXBsYXRlL3NlcnZpY2UtemVyb2NvZGUtYmFzZS10ZW1wbGF0ZS9zcmMvZnVuY3Rpb25zL3Byb2Nlc3NEYXRhL2hhbmRsZXIudHM/OTA5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5cbmltcG9ydCB0eXBlIHsgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgZm9ybWF0SlNPTlJlc3BvbnNlIH0gZnJvbSAnQGxpYnMvYXBpR2F0ZXdheSc7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSAnQGxpYnMvbGFtYmRhJztcblxuaW1wb3J0IHNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG4vKipcbiAqIEBsb2NhbG1lbWJlciBwcm9jZXNzRGF0YVxuICogQGRlc2NyaXB0aW9uIEdyZWV0IFVzZXIgT24gQ2FsbC5cbiAqIEBwYXJhbSB7VmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCA8dHlwZW9mIHNjaGVtYT59IGJvZHkgdGhlIG5hbWUgdG8gZ3JlZXQuXG4gKiBAcmV0dXJuIHtKU09OfSByZXRydW4gdGhlIERVTVAgb2Yge1ZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgPHR5cGVvZiBzY2hlbWE+fS5cbiAqL1xuY29uc3QgcHJvY2Vzc0RhdGE6IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8dHlwZW9mIHNjaGVtYT4gPSBhc3luYyAoXG4gIGV2ZW50LFxuKSA9PiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICBtZXNzYWdlOiBgSGVsbG8gJHtldmVudC5ib2R5Lm5hbWV9LCB3ZWxjb21lIHRvIHRoZSBleGNpdGluZyBTZXJ2ZXJsZXNzIHdvcmxkIWAsXG4gIGV2ZW50LFxufSk7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShwcm9jZXNzRGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/processData/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => ({\r\n    statusCode: 200,\r\n    body: JSON.stringify(response),\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZpY2UtemVyb2NvZGUtYmFzZS10ZW1wbGF0ZS8uLi8uLi9DOi9NdXpha2thci9aZXJvQ29kZUFQSSBQcm9qZWN0L0NSVUQtaW4tYmFzZS10ZW1wbGF0ZS9zZXJ2aWNlLXplcm9jb2RlLWJhc2UtdGVtcGxhdGUvc3JjL2xpYnMvYXBpR2F0ZXdheS50cz9jMjYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSAnanNvbi1zY2hlbWEtdG8tdHMnO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gKHtcbiAgc3RhdHVzQ29kZTogMjAwLFxuICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlLXplcm9jb2RlLWJhc2UtdGVtcGxhdGUvLi4vLi4vQzovTXV6YWtrYXIvWmVyb0NvZGVBUEkgUHJvamVjdC9DUlVELWluLWJhc2UtdGVtcGxhdGUvc2VydmljZS16ZXJvY29kZS1iYXNlLXRlbXBsYXRlL3NyYy9saWJzL2xhbWJkYS50cz85YjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tICdAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyJztcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/processData/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;