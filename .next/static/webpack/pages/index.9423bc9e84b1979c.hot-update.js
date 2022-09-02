"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersList */ \"./src/SpeakersList.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SpeakersToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakersToolbar */ \"./src/SpeakersToolbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Speakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"light\"), theme = ref[0], setTheme = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/Speakers.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersToolbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                theme: theme,\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/Speakers.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data\n            }, void 0, false, {\n                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/Speakers.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/Speakers.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(Speakers, \"uVv1eMZHDj80nGfAj5rqZmm/ENI=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0k7QUFDWjtBQUNrQjtBQUNmO0FBRWpDLFNBQVNLLFFBQVEsR0FBSTs7SUFDakIsSUFBMEJELEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLE9BQU8sQ0FBQyxFQUFwQ0UsS0FBSyxHQUFjRixHQUFpQixHQUEvQixFQUFFRyxRQUFRLEdBQUlILEdBQWlCLEdBQXJCO0lBQ3RCLHFCQUNJLDhEQUFDSSxLQUFHOzswQkFDQSw4REFBQ04sK0NBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNDLHdEQUFlO2dCQUFDRyxLQUFLLEVBQUVBLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7b0JBQUk7MEJBQ3JELDhEQUFDTixxREFBWTtnQkFBQ0QsSUFBSSxFQUFFQSw4Q0FBSTs7Ozs7b0JBQUk7Ozs7OztZQUMxQixDQUNSO0NBQ0w7R0FUUUssUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBV2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IFNwZWFrZXJzTGlzdCBmcm9tICcuL1NwZWFrZXJzTGlzdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBTcGVha2Vyc1Rvb2xiYXIgZnJvbSAnLi9TcGVha2Vyc1Rvb2xiYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzICgpIHtcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U3BlYWtlcnNUb29sYmFyIHRoZW1lPXt0aGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfSAvPlxuICAgICAgICAgICAgPFNwZWFrZXJzTGlzdCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwibmFtZXMiOlsiZGF0YSIsIlNwZWFrZXJzTGlzdCIsIkhlYWRlciIsIlNwZWFrZXJzVG9vbGJhciIsInVzZVN0YXRlIiwiU3BlYWtlcnMiLCJ0aGVtZSIsInNldFRoZW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});