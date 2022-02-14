"use strict";
exports.id = 8778;
exports.ids = [8778];
exports.modules = {

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_icons_cart_check_bag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3900);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1038);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3457);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7349);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7473);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const CartCounterButton = () => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const {
    totalUniqueItems,
    total
  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__/* .useCart */ .jD)();
  const [_, setDisplayCart] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__/* .drawerAtom */ .P);
  const {
    price: totalPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)({
    amount: total
  });

  function handleCartSidebar() {
    setDisplayCart({
      display: true,
      view: 'cart'
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
    className: "hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 end-0 z-40 shadow-900 rounded rounded-te-none rounded-be-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover",
    onClick: handleCartSidebar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
      className: "flex pb-0.5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_icons_cart_check_bag__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        className: "flex-shrink-0",
        width: 14,
        height: 16
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        className: "flex ms-2",
        children: (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_7__/* .formatString */ .U)(totalUniqueItems, t('common:text-item'))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
      className: "bg-light rounded w-full py-2 px-2 text-accent mt-3",
      children: totalPrice
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartCounterButton);

/***/ })

};
;