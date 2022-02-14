"use strict";
exports.id = 3967;
exports.ids = [3967];
exports.modules = {

/***/ 3967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8778);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5335);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8802);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4053);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4025);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(876);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const AutoSuggestion = ({
  className,
  suggestions,
  visible,
  notFound,
  showLoaders
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const handleClick = path => {
    router.push(path);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition, {
    show: visible,
    enter: "transition-opacity duration-75",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('w-full absolute top-11 lg:top-16 mt-2 lg:mt-1 left-0', className),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "w-full h-full py-2 shadow-downfall-lg bg-white rounded-lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          className: "w-full h-full",
          children: [notFound && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h3", {
            className: "w-full h-full py-10 flex items-center justify-center font-semibold text-gray-400",
            children: t('text-no-products')
          }), showLoaders && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "w-full h-full py-14 flex items-center justify-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
              simple: true,
              className: "w-9 h-9"
            })
          }), !notFound && !showLoaders && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "max-h-52",
            children: suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(item => {
              var _item$image$original, _item$image, _item$name;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                onClick: () => handleClick(`${_lib_routes__WEBPACK_IMPORTED_MODULE_6__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${item === null || item === void 0 ? void 0 : item.slug}`),
                className: "flex items-center w-full px-5 py-2 border-b border-border-100 last:border-b-0 cursor-pointer transition-colors hover:bg-gray-100",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                  className: "w-8 h-8 relative rounded overflow-hidden",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .E, {
                    className: "w-full h-full",
                    src: (_item$image$original = item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.original) !== null && _item$image$original !== void 0 ? _item$image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .productPlaceholder */ .Hb,
                    alt: (_item$name = item === null || item === void 0 ? void 0 : item.name) !== null && _item$name !== void 0 ? _item$name : '',
                    layout: "responsive",
                    width: 100,
                    height: 100
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "text-sm font-semibold text-heading ml-3",
                  children: item === null || item === void 0 ? void 0 : item.name
                })]
              }, item === null || item === void 0 ? void 0 : item.slug);
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoSuggestion);

/***/ })

};
;