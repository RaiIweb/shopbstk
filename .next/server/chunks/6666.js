"use strict";
exports.id = 6666;
exports.ids = [6666];
exports.modules = {

/***/ 6666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSideView": () => (/* binding */ RightSideView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5734);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const UnverifiedItemList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(3457), __webpack_require__.e(2605), __webpack_require__.e(9229), __webpack_require__.e(5339)]).then(__webpack_require__.bind(__webpack_require__, 5339)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5339)],
    modules: ["../components/checkout/right-side-view.tsx -> " + '@components/checkout/item/unverified-item-list']
  }
});
const VerifiedItemList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(3457), __webpack_require__.e(1860), __webpack_require__.e(2605), __webpack_require__.e(2726), __webpack_require__.e(9229), __webpack_require__.e(2147), __webpack_require__.e(3158), __webpack_require__.e(803)]).then(__webpack_require__.bind(__webpack_require__, 803)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(803)],
    modules: ["../components/checkout/right-side-view.tsx -> " + '@components/checkout/item/verified-item-list']
  }
});
const RightSideView = () => {
  const [verifiedResponse] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_0__/* .verifiedResponseAtom */ .Jb);

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(verifiedResponse)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(UnverifiedItemList, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(VerifiedItemList, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightSideView);

/***/ })

};
;