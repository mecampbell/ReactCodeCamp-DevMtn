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

/***/ "./src/SpeakersToolbar.js":
/*!********************************!*\
  !*** ./src/SpeakersToolbar.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SpeakersToolbar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), theme = ref1[0], setTheme = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-colummn flex-lg-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(e) {\n                                                setShowSessions(e.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                            lineNumber: 16,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                            lineNumber: 13,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 m-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: \"light\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersToolbar, \"Rivvjcp0KS73NUozfL9SYsVcp+w=\");\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnNUb29sYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDO0FBRWpDLFNBQVNDLGVBQWUsR0FBRzs7SUFFdkIsSUFBd0NELEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBL0NFLFlBQVksR0FBcUJGLEdBQWMsR0FBbkMsRUFBRUcsZUFBZSxHQUFJSCxHQUFjLEdBQWxCO0lBQ3BDLElBQTBCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpDSSxLQUFLLEdBQWNKLElBQWMsR0FBNUIsRUFBRUssUUFBUSxHQUFJTCxJQUFjLEdBQWxCO0lBRXRCLHFCQUNJLDhEQUFDTSxTQUFPO1FBQUNDLFNBQVMsRUFBQywyQkFBMkI7a0JBQzFDLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxXQUFXO3NCQUN0Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLHlCQUF5QjswQkFDcEMsNEVBQUNFLElBQUU7b0JBQUNGLFNBQVMsRUFBQyx3Q0FBd0M7O3NDQUNsRCw4REFBQ0csSUFBRTs0QkFBQ0gsU0FBUyxFQUFDLGlDQUFpQzs7OENBQzNDLDhEQUFDSSxHQUFDOzhDQUFDLHVCQUF5Qjs7Ozs7d0NBQUk7OENBQ2hDLDhEQUFDQyxPQUFLO29DQUFDTCxTQUFTLEVBQUMsS0FBSzs7c0RBQ2xCLDhEQUFDTSxPQUFLOzRDQUNOQyxJQUFJLEVBQUMsVUFBVTs0Q0FDZkMsT0FBTyxFQUFFYixZQUFZOzRDQUNyQmMsUUFBUSxFQUFFLFNBQUNDLENBQUMsRUFBSztnREFDYmQsZUFBZSxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDLENBQUM7NkNBQ3JDOzs7OztnREFDQztzREFDRiw4REFBQ0ksTUFBSTs0Q0FBQ1osU0FBUyxFQUFDLFFBQVE7Ozs7O2dEQUFROzs7Ozs7d0NBQzVCOzs7Ozs7Z0NBQ1A7c0NBQ0wsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyw0Q0FBNEM7OzhDQUN0RCw4REFBQ2EsUUFBTTs4Q0FBQyxPQUFLOzs7Ozt3Q0FBUzs4Q0FDdEIsOERBQUNSLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxVQUFVOzhDQUN2Qiw0RUFBQ2MsUUFBTTt3Q0FBQ2QsU0FBUyxFQUFDLG9CQUFvQjt3Q0FBQ2UsS0FBSyxFQUFDLE9BQU87OzBEQUNoRCw4REFBQ0MsUUFBTTtnREFBQ0QsS0FBSyxFQUFDLE9BQU87MERBQUMsT0FBSzs7Ozs7b0RBQVM7MERBQ3BDLDhEQUFDQyxRQUFNO2dEQUFDRCxLQUFLLEVBQUMsTUFBTTswREFBQyxNQUFJOzs7OztvREFBUzs7Ozs7OzRDQUM3Qjs7Ozs7d0NBQ0w7Ozs7OztnQ0FDUDs7Ozs7O3dCQUNKOzs7OztvQkFDSDs7Ozs7Z0JBQ0o7Ozs7O1lBQ0EsQ0FDYjtDQUNKO0dBckNRckIsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBdUN4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vyc1Rvb2xiYXIuanM/OTQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU3BlYWtlcnNUb29sYmFyKCkge1xuICAgIFxuICAgIGNvbnN0IFtzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW1uIGZsZXgtbGctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+U2hvdyBTZXNzaW9ucyZuYnNwOyZuYnNwOzwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93U2Vzc2lvbnMoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRoZW1lXCIgdmFsdWU9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+RGFyazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc1Rvb2xiYXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU3BlYWtlcnNUb29sYmFyIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIiwidGhlbWUiLCJzZXRUaGVtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ1bCIsImxpIiwiYiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNwYW4iLCJzdHJvbmciLCJzZWxlY3QiLCJ2YWx1ZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SpeakersToolbar.js\n"));

/***/ })

});