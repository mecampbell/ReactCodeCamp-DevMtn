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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SpeakersToolbar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\"), theme = ref1[0], setTheme = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-colummn flex-lg-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(e) {\n                                                setShowSessions(e.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                            lineNumber: 16,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                            lineNumber: 13,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 m-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: \"light\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersToolbar, \"nfOw7aIB8BPCZX2eqMvCymAN8Yg=\");\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnNUb29sYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDO0FBRWpDLFNBQVNDLGVBQWUsR0FBRzs7SUFFdkIsSUFBd0NELEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBL0NFLFlBQVksR0FBcUJGLEdBQWMsR0FBbkMsRUFBRUcsZUFBZSxHQUFJSCxHQUFjLEdBQWxCO0lBQ3BDLElBQTBCQSxJQUFpQixHQUFqQkEsK0NBQVEsQ0FBQyxPQUFPLENBQUMsRUFBcENJLEtBQUssR0FBY0osSUFBaUIsR0FBL0IsRUFBRUssUUFBUSxHQUFJTCxJQUFpQixHQUFyQjtJQUV0QixxQkFDSSw4REFBQ00sU0FBTztRQUFDQyxTQUFTLEVBQUMsMkJBQTJCO2tCQUMxQyw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDdEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7MEJBQ3BDLDRFQUFDRSxJQUFFO29CQUFDRixTQUFTLEVBQUMsd0NBQXdDOztzQ0FDbEQsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyxpQ0FBaUM7OzhDQUMzQyw4REFBQ0ksR0FBQzs4Q0FBQyx1QkFBeUI7Ozs7O3dDQUFJOzhDQUNoQyw4REFBQ0MsT0FBSztvQ0FBQ0wsU0FBUyxFQUFDLEtBQUs7O3NEQUNsQiw4REFBQ00sT0FBSzs0Q0FDTkMsSUFBSSxFQUFDLFVBQVU7NENBQ2ZDLE9BQU8sRUFBRWIsWUFBWTs0Q0FDckJjLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7Z0RBQ2JkLGVBQWUsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILE9BQU8sQ0FBQyxDQUFDOzZDQUNyQzs7Ozs7Z0RBQ0M7c0RBQ0YsOERBQUNJLE1BQUk7NENBQUNaLFNBQVMsRUFBQyxRQUFROzs7OztnREFBUTs7Ozs7O3dDQUM1Qjs7Ozs7O2dDQUNQO3NDQUNMLDhEQUFDRyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsNENBQTRDOzs4Q0FDdEQsOERBQUNhLFFBQU07OENBQUMsT0FBSzs7Ozs7d0NBQVM7OENBQ3RCLDhEQUFDUixPQUFLO29DQUFDTCxTQUFTLEVBQUMsVUFBVTs4Q0FDdkIsNEVBQUNjLFFBQU07d0NBQUNkLFNBQVMsRUFBQyxvQkFBb0I7d0NBQUNlLEtBQUssRUFBQyxPQUFPOzswREFDaEQsOERBQUNDLFFBQU07Z0RBQUNELEtBQUssRUFBQyxPQUFPOzBEQUFDLE9BQUs7Ozs7O29EQUFTOzBEQUNwQyw4REFBQ0MsUUFBTTtnREFBQ0QsS0FBSyxFQUFDLE1BQU07MERBQUMsTUFBSTs7Ozs7b0RBQVM7Ozs7Ozs0Q0FDN0I7Ozs7O3dDQUNMOzs7Ozs7Z0NBQ1A7Ozs7Ozt3QkFDSjs7Ozs7b0JBQ0g7Ozs7O2dCQUNKOzs7OztZQUNBLENBQ2I7Q0FDSjtHQXJDUXJCLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQXVDeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlcnNUb29sYmFyLmpzPzk0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhcigpIHtcbiAgICBcbiAgICBjb25zdCBbc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sYmFyIGRhcmstdGhlbWUtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvb2xyb3cgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1tbiBmbGV4LWxnLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNob3cgU2Vzc2lvbnMmbmJzcDsmbmJzcDs8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZhdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Nlc3Npb25zKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG1sLXNtLTUgbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiIHZhbHVlPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsInRoZW1lIiwic2V0VGhlbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzcGFuIiwic3Ryb25nIiwic2VsZWN0IiwidmFsdWUiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SpeakersToolbar.js\n"));

/***/ })

});