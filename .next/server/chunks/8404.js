"use strict";
exports.id = 8404;
exports.ids = [8404];
exports.modules = {

/***/ 8609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5335);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8802);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5728);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2182);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_0__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









const BannerShort = ({
  banners
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
  const {
    isRTL
  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_3__/* .useIsRTL */ .S)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "relative",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "overflow-hidden -z-1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_0__/* .Swiper */ .tq, {
          id: "banner",
          loop: true,
          modules: [_components_ui_slider__WEBPACK_IMPORTED_MODULE_0__/* .Navigation */ .W_],
          resizeObserver: true,
          allowTouchMove: false,
          slidesPerView: 1,
          navigation: {
            nextEl: '.next',
            prevEl: '.prev'
          },
          children: banners === null || banners === void 0 ? void 0 : banners.map((banner, idx) => {
            var _banner$image$origina, _banner$image, _banner$title;

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_0__/* .SwiperSlide */ .o5, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "relative w-full h-full max-h-[240px] md:max-h-[450px]",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                  className: "w-full h-full",
                  src: (_banner$image$origina = (_banner$image = banner.image) === null || _banner$image === void 0 ? void 0 : _banner$image.original) !== null && _banner$image$origina !== void 0 ? _banner$image$origina : _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .productPlaceholder */ .Hb,
                  alt: (_banner$title = banner.title) !== null && _banner$title !== void 0 ? _banner$title : '',
                  layout: "responsive",
                  width: 1503,
                  height: 450
                })
              })
            }, idx);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "prev cursor-pointer absolute top-2/4 start-4 md:start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 rounded-full bg-light shadow-200 border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200",
          role: "button",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "sr-only",
            children: t('text-previous')
          }), isRTL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .ArrowNext */ .Tg, {
            width: 18,
            height: 18
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .ArrowPrev */ .zF, {
            width: 18,
            height: 18
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "next cursor-pointer absolute top-2/4 end-4 md:end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 rounded-full bg-light shadow-200 border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200",
          role: "button",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "sr-only",
            children: t('text-next')
          }), isRTL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .ArrowPrev */ .zF, {
            width: 18,
            height: 18
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .ArrowNext */ .Tg, {
            width: 18,
            height: 18
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerShort);
});

/***/ })

};
;