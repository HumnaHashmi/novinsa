"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/case-study/[slug]";
exports.ids = ["pages/case-study/[slug]"];
exports.modules = {

/***/ "./src/pages/case-study/[slug].js":
/*!****************************************!*\
  !*** ./src/pages/case-study/[slug].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CaseStudy)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CaseStudy() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query; // Accessing the dynamic slug from the URL\n    // For now, you can use the slug to display which project is being viewed\n    // You can replace this with dynamic data fetching from your CMS or API\n    const caseStudyData = {\n        \"rehabs-autism-treatment-app\": {\n            title: \"Rehabs - Autism Treatment App\",\n            description: \"This case study goes over the challenges and solutions for developing a React Native app designed for autistic children and ADHD therapy.\"\n        },\n        \"linkedIn-sales-navigator-scraper\": {\n            title: \"LinkedIn Sales Navigator Scraper\",\n            description: \"Details on creating a high-performance Chrome extension for scraping LinkedIn leads and exporting them as PDFs.\"\n        },\n        \"inventory-pos-system\": {\n            title: \"Inventory & POS System\",\n            description: \"Explore how I built a multi-store, scalable inventory and point-of-sale system with integrated appointment scheduling.\"\n        }\n    };\n    const projectData = caseStudyData[slug];\n    if (!projectData) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/home/humna/Downloads/novinsalabs-portfolio/src/pages/case-study/[slug].js\",\n                lineNumber: 27\n            },\n            __self: this,\n            children: \"Case study not found!\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"max-w-7xl mx-auto py-12 px-6\",\n        __source: {\n            fileName: \"/home/humna/Downloads/novinsalabs-portfolio/src/pages/case-study/[slug].js\",\n            lineNumber: 31\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                className: \"text-4xl font-bold text-center mb-6 text-gray-800\",\n                __source: {\n                    fileName: \"/home/humna/Downloads/novinsalabs-portfolio/src/pages/case-study/[slug].js\",\n                    lineNumber: 32\n                },\n                __self: this,\n                children: [\n                    projectData.title,\n                    \" Case Study\"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: \"text-lg text-gray-700\",\n                __source: {\n                    fileName: \"/home/humna/Downloads/novinsalabs-portfolio/src/pages/case-study/[slug].js\",\n                    lineNumber: 33\n                },\n                __self: this,\n                children: projectData.description\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FzZS1zdHVkeS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBRXhCLFFBQVEsQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDbkMsS0FBSyxDQUFDQyxNQUFNLEdBQUdGLHNEQUFTO0lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUNHLElBQUksRUFBQyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFFLENBQTBDO0lBRXpFLEVBQXlFO0lBQ3pFLEVBQXVFO0lBQ3ZFLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLENBQUM7UUFDckIsQ0FBNkIsOEJBQUUsQ0FBQztZQUM5QkMsS0FBSyxFQUFFLENBQStCO1lBQ3RDQyxXQUFXLEVBQUUsQ0FBMkk7UUFDMUosQ0FBQztRQUNELENBQWtDLG1DQUFFLENBQUM7WUFDbkNELEtBQUssRUFBRSxDQUFrQztZQUN6Q0MsV0FBVyxFQUFFLENBQWlIO1FBQ2hJLENBQUM7UUFDRCxDQUFzQix1QkFBRSxDQUFDO1lBQ3ZCRCxLQUFLLEVBQUUsQ0FBd0I7WUFDL0JDLFdBQVcsRUFBRSxDQUF3SDtRQUN2SSxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQ0MsV0FBVyxHQUFHSCxhQUFhLENBQUNGLElBQUk7SUFFdEMsRUFBRSxHQUFHSyxXQUFXLEVBQUUsQ0FBQztRQUNqQixNQUFNLHNFQUFFQyxDQUFDOzs7Ozs7c0JBQUMsQ0FBcUI7O0lBQ2pDLENBQUM7SUFFRCxNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7OztrRkFDMUNDLENBQUU7Z0JBQUNELFNBQVMsRUFBQyxDQUFtRDs7Ozs7OztvQkFBRUgsV0FBVyxDQUFDRixLQUFLO29CQUFDLENBQVc7OztpRkFDL0ZHLENBQUM7Z0JBQUNFLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7OzBCQUFFSCxXQUFXLENBQUNELFdBQVc7Ozs7QUFJbkUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdmluc2FsYWJzLXBvcnRmb2xpby8uL3NyYy9wYWdlcy9jYXNlLXN0dWR5L1tzbHVnXS5qcz8wOWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZVN0dWR5KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7IC8vIEFjY2Vzc2luZyB0aGUgZHluYW1pYyBzbHVnIGZyb20gdGhlIFVSTFxuXG4gIC8vIEZvciBub3csIHlvdSBjYW4gdXNlIHRoZSBzbHVnIHRvIGRpc3BsYXkgd2hpY2ggcHJvamVjdCBpcyBiZWluZyB2aWV3ZWRcbiAgLy8gWW91IGNhbiByZXBsYWNlIHRoaXMgd2l0aCBkeW5hbWljIGRhdGEgZmV0Y2hpbmcgZnJvbSB5b3VyIENNUyBvciBBUElcbiAgY29uc3QgY2FzZVN0dWR5RGF0YSA9IHtcbiAgICBcInJlaGFicy1hdXRpc20tdHJlYXRtZW50LWFwcFwiOiB7XG4gICAgICB0aXRsZTogXCJSZWhhYnMgLSBBdXRpc20gVHJlYXRtZW50IEFwcFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBjYXNlIHN0dWR5IGdvZXMgb3ZlciB0aGUgY2hhbGxlbmdlcyBhbmQgc29sdXRpb25zIGZvciBkZXZlbG9waW5nIGEgUmVhY3QgTmF0aXZlIGFwcCBkZXNpZ25lZCBmb3IgYXV0aXN0aWMgY2hpbGRyZW4gYW5kIEFESEQgdGhlcmFweS5cIlxuICAgIH0sXG4gICAgXCJsaW5rZWRJbi1zYWxlcy1uYXZpZ2F0b3Itc2NyYXBlclwiOiB7XG4gICAgICB0aXRsZTogXCJMaW5rZWRJbiBTYWxlcyBOYXZpZ2F0b3IgU2NyYXBlclwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGV0YWlscyBvbiBjcmVhdGluZyBhIGhpZ2gtcGVyZm9ybWFuY2UgQ2hyb21lIGV4dGVuc2lvbiBmb3Igc2NyYXBpbmcgTGlua2VkSW4gbGVhZHMgYW5kIGV4cG9ydGluZyB0aGVtIGFzIFBERnMuXCJcbiAgICB9LFxuICAgIFwiaW52ZW50b3J5LXBvcy1zeXN0ZW1cIjoge1xuICAgICAgdGl0bGU6IFwiSW52ZW50b3J5ICYgUE9TIFN5c3RlbVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRXhwbG9yZSBob3cgSSBidWlsdCBhIG11bHRpLXN0b3JlLCBzY2FsYWJsZSBpbnZlbnRvcnkgYW5kIHBvaW50LW9mLXNhbGUgc3lzdGVtIHdpdGggaW50ZWdyYXRlZCBhcHBvaW50bWVudCBzY2hlZHVsaW5nLlwiXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByb2plY3REYXRhID0gY2FzZVN0dWR5RGF0YVtzbHVnXTtcblxuICBpZiAoIXByb2plY3REYXRhKSB7XG4gICAgcmV0dXJuIDxwPkNhc2Ugc3R1ZHkgbm90IGZvdW5kITwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHktMTIgcHgtNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi02IHRleHQtZ3JheS04MDBcIj57cHJvamVjdERhdGEudGl0bGV9IENhc2UgU3R1ZHk8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwXCI+e3Byb2plY3REYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHsvKiBBZGQgbW9yZSBwcm9qZWN0LXNwZWNpZmljIGRldGFpbHMgaGVyZSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDYXNlU3R1ZHkiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJjYXNlU3R1ZHlEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3REYXRhIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/case-study/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/case-study/[slug].js"));
module.exports = __webpack_exports__;

})();