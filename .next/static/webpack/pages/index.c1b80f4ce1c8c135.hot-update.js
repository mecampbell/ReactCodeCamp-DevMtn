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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SpeakersToolbar(param) {\n    var theme = param.theme, setTheme = param.setTheme, showSessions = param.showSessions, setShowSessions = param.setShowSessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 8,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(event) {\n                                                setShowSessions(event.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                            lineNumber: 10,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                            lineNumber: 17,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 9,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                            lineNumber: 7,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(event) {\n                                            setTheme(event.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n                lineNumber: 5,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n            lineNumber: 4,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaelcampbell/Development/Specs/Lectures/Components/src/SpeakersToolbar.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this);\n}\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnNUb29sYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsU0FBU0EsZUFBZSxDQUFDLEtBQWtELEVBQUU7UUFBbERDLEtBQUssR0FBUCxLQUFrRCxDQUFoREEsS0FBSyxFQUFFQyxRQUFRLEdBQWpCLEtBQWtELENBQXpDQSxRQUFRLEVBQUVDLFlBQVksR0FBL0IsS0FBa0QsQ0FBL0JBLFlBQVksRUFBRUMsZUFBZSxHQUFoRCxLQUFrRCxDQUFqQkEsZUFBZTtJQUNyRSxxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsMkJBQTJCO2tCQUM1Qyw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDeEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7MEJBQ3RDLDRFQUFDRSxJQUFFO29CQUFDRixTQUFTLEVBQUMsd0NBQXdDOztzQ0FDcEQsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7OzhDQUM1Qyw4REFBQ0ksR0FBQzs4Q0FBQyx1QkFBeUI7Ozs7O3dDQUFJOzhDQUNoQyw4REFBQ0MsT0FBSztvQ0FBQ0wsU0FBUyxFQUFDLEtBQUs7O3NEQUNwQiw4REFBQ00sT0FBSzs0Q0FDSkMsSUFBSSxFQUFDLFVBQVU7NENBQ2ZDLE9BQU8sRUFBRVgsWUFBWTs0Q0FDckJZLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUs7Z0RBQ25CWixlQUFlLENBQUNZLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSCxPQUFPLENBQUMsQ0FBQzs2Q0FDdkM7Ozs7O2dEQUNEO3NEQUNGLDhEQUFDSSxNQUFJOzRDQUFDWixTQUFTLEVBQUMsUUFBUTs7Ozs7Z0RBQVE7Ozs7Ozt3Q0FDMUI7Ozs7OztnQ0FDTDtzQ0FDTCw4REFBQ0csSUFBRTs0QkFBQ0gsU0FBUyxFQUFDLDZDQUE2Qzs7OENBQ3pELDhEQUFDYSxRQUFNOzhDQUFDLE9BQUs7Ozs7O3dDQUFTOzhDQUN0Qiw4REFBQ1IsT0FBSztvQ0FBQ0wsU0FBUyxFQUFDLFVBQVU7OENBQ3pCLDRFQUFDYyxRQUFNO3dDQUNMZCxTQUFTLEVBQUMsb0JBQW9CO3dDQUM5QmUsS0FBSyxFQUFFcEIsS0FBSzt3Q0FDWmMsUUFBUSxFQUFFLFNBQUNDLEtBQUssRUFBSzs0Q0FDbkJkLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDQyxNQUFNLENBQUNJLEtBQUssQ0FBQyxDQUFDO3lDQUM5Qjs7MERBRUQsOERBQUNDLFFBQU07Z0RBQUNELEtBQUssRUFBQyxPQUFPOzBEQUFDLE9BQUs7Ozs7O29EQUFTOzBEQUNwQyw4REFBQ0MsUUFBTTtnREFBQ0QsS0FBSyxFQUFDLE1BQU07MERBQUMsTUFBSTs7Ozs7b0RBQVM7Ozs7Ozs0Q0FDM0I7Ozs7O3dDQUNIOzs7Ozs7Z0NBQ0w7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Q7Ozs7O2dCQUNGOzs7OztZQUNFLENBQ1Y7Q0FDSDtBQXZDTXJCLEtBQUFBLGVBQWU7QUF5Q3RCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzVG9vbGJhci5qcz85NDU4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhcih7IHRoZW1lLCBzZXRUaGVtZSwgc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sYmFyIGRhcmstdGhlbWUtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvb2xyb3cgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93XCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8Yj5TaG93IFNlc3Npb25zJm5ic3A7Jm5ic3A7PC9iPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93U2Vzc2lvbnMoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG1sLXNtLTUgbWwtMFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhlbWU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj5EYXJrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJTcGVha2Vyc1Rvb2xiYXIiLCJ0aGVtZSIsInNldFRoZW1lIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibGkiLCJiIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInNwYW4iLCJzdHJvbmciLCJzZWxlY3QiLCJ2YWx1ZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SpeakersToolbar.js\n"));

/***/ })

});