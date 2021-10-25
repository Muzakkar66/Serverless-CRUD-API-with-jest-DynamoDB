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

/***/ "./src/functions/blog/getBlogList/handler.ts":
/*!***************************************************!*\
  !*** ./src/functions/blog/getBlogList/handler.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBlogListMAIN\": () => (/* binding */ getBlogListMAIN)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nconst dynamodb = new aws_sdk__WEBPACK_IMPORTED_MODULE_3__.DynamoDB.DocumentClient();\r\nconst handler = async (event) => {\r\n    const { body } = event;\r\n    let data = {};\r\n    try {\r\n        const GetBlogList = {\r\n            TableName: 'CRUD-baseTemplate',\r\n        };\r\n        data = await dynamodb.scan(GetBlogList).promise();\r\n    }\r\n    catch (error) {\r\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\r\n            message: 'Error',\r\n            error,\r\n        });\r\n    }\r\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\r\n        received: true,\r\n        message: 'Blogs scaned Successfully',\r\n        data,\r\n        body,\r\n    });\r\n};\r\nconst getBlogListMAIN = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(handler);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2Jsb2cvZ2V0QmxvZ0xpc3QvaGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlLXplcm9jb2RlLWJhc2UtdGVtcGxhdGUvLi4vLi4vQzovTXV6YWtrYXIvWmVyb0NvZGVBUEkgUHJvamVjdC9DUlVELWluLWJhc2UtdGVtcGxhdGUvc2VydmljZS16ZXJvY29kZS1iYXNlLXRlbXBsYXRlL3NyYy9mdW5jdGlvbnMvYmxvZy9nZXRCbG9nTGlzdC9oYW5kbGVyLnRzPzNkNGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB0eXBlIHsgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgZm9ybWF0SlNPTlJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tICcuLi8uLi8uLi9saWJzL2xhbWJkYSc7XG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vc2NoZW1hJztcblxuY29uc3QgZHluYW1vZGIgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG4vKipcbiAqIEBsb2NhbG1lbWJlciBHZXQgQmxvZyBMaXN0XG4gKiBAZGVzY3JpcHRpb24gR2V0dGluZyBMaXN0IG9mIGJsb2dzLlxuICogQHBhcmFtIHtWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IDx0eXBlb2Ygc2NoZW1hPn0gYm9keSB0aGUgbmFtZSB0byBncmVldC5cbiAqIEByZXR1cm4ge0pTT059IHJldHJ1biB0aGUgRFVNUCBvZiB7VmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCA8dHlwZW9mIHNjaGVtYT59LlxuICovXG5jb25zdCBoYW5kbGVyOiBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PHR5cGVvZiBzY2hlbWE+ID0gYXN5bmMgKFxuICBldmVudCxcbikgPT4ge1xuICBjb25zdCB7IGJvZHkgfSA9IGV2ZW50O1xuICBsZXQgZGF0YTogdW5rbm93biA9IHt9O1xuICB0cnkge1xuICAgIGNvbnN0IEdldEJsb2dMaXN0ID0ge1xuICAgICAgVGFibGVOYW1lOiAnQ1JVRC1iYXNlVGVtcGxhdGUnLFxuICAgIH07XG4gICAgZGF0YSA9IGF3YWl0IGR5bmFtb2RiLnNjYW4oR2V0QmxvZ0xpc3QpLnByb21pc2UoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgICAgIG1lc3NhZ2U6ICdFcnJvcicsXG4gICAgICBlcnJvcixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgICByZWNlaXZlZDogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnQmxvZ3Mgc2NhbmVkIFN1Y2Nlc3NmdWxseScsXG4gICAgZGF0YSxcbiAgICBib2R5LFxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0QmxvZ0xpc3RNQUlOID0gbWlkZHlmeShoYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/blog/getBlogList/handler.ts\n");

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

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/blog/getBlogList/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;