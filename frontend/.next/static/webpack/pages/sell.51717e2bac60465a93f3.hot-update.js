/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leviglendenning/wesBos/advanced-react/Advanced-React/sick-fits/frontend/components/CreateProduct.js\",\n    _s = $RefreshSig$();\n\n\nfunction CreateProduct() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Wes'),\n      name = _useState[0],\n      setName = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"name\",\n      children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        name: \"name\",\n        placeholder: \"name\",\n        value: name,\n        onChange: function onChange(e) {\n          console.log(e.target.value);\n          setName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"price\",\n      children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"price\",\n        name: \"price\",\n        placeholder: \"price\",\n        value: price,\n        onChange: function onChange(e) {\n          console.log(e.target.value);\n          setName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CreateProduct, \"DmPnh4G0FI8YD0xXjVsNJjI5zgA=\");\n\n_c = CreateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzP2UwNTAiXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsa0JBQ2RDLCtDQUFRLENBQUMsS0FBRCxDQURNO0FBQUEsTUFDL0JDLElBRCtCO0FBQUEsTUFDekJDLE9BRHlCOztBQUV0QyxzQkFDRTtBQUFBLDRCQUNFO0FBQU8sYUFBTyxFQUFDLE1BQWY7QUFBQSxzQ0FFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsVUFBRSxFQUFDLE1BRkw7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLG1CQUFXLEVBQUMsTUFKZDtBQUtFLGFBQUssRUFBRUQsSUFMVDtBQU1FLGdCQUFRLEVBQUUsa0JBQUNFLENBQUQsRUFBTztBQUNmQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFyQjtBQUNBTCxpQkFBTyxDQUFDQyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0Q7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFlRTtBQUFPLGFBQU8sRUFBQyxPQUFmO0FBQUEsdUNBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUUsRUFBQyxPQUZMO0FBR0UsWUFBSSxFQUFDLE9BSFA7QUFJRSxtQkFBVyxFQUFDLE9BSmQ7QUFLRSxhQUFLLEVBQUVDLEtBTFQ7QUFNRSxnQkFBUSxFQUFFLGtCQUFDTCxDQUFELEVBQU87QUFDZkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBckI7QUFDQUwsaUJBQU8sQ0FBQ0MsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNEO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQWxDdUJSLGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJ1dlcycpO1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgTmFtZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICBQcmljZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcbiAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgLz5cbiAgICAgICA8L2xhYmVsPlxuICAgIDwvZm9ybT5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ })

});