"use strict";
exports.id = 6137;
exports.ids = [6137];
exports.modules = {

/***/ 6137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1199);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4114);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5335);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8802);
/* harmony import */ var _components_ui_search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5781);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4230);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const BannerWithSearch = ({
  banners,
  layout
}) => {
  const [_, setDisplayHeaderSearch] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_7__/* .displayHeaderSearchAtom */ .y);

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (!currentPosition || currentPosition === 'above') {
      setDisplayHeaderSearch(true);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('hidden lg:block relative bg-light', {
      '!block': layout === 'minimal'
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "overflow-hidden -z-1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
          id: "banner",
          loop: true,
          modules: [_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_],
          resizeObserver: true,
          allowTouchMove: false,
          slidesPerView: 1,
          children: banners === null || banners === void 0 ? void 0 : banners.map((banner, idx) => {
            var _banner$image$origina, _banner$image, _banner$title;

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('relative w-full h-screen', {
                  'max-h-140': layout === 'standard',
                  'max-h-[320px] md:max-h-[680px]': layout === 'minimal'
                }),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                  className: "w-full h-full min-h-140",
                  src: (_banner$image$origina = (_banner$image = banner.image) === null || _banner$image === void 0 ? void 0 : _banner$image.original) !== null && _banner$image$origina !== void 0 ? _banner$image$origina : _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__/* .productPlaceholder */ .Hb,
                  alt: (_banner$title = banner.title) !== null && _banner$title !== void 0 ? _banner$title : '',
                  layout: "fill",
                  objectFit: "cover"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('p-5 md:px-20 mt-8 absolute top-32 w-full flex flex-col items-center justify-center text-center lg:space-y-10', {
                    'space-y-5 md:!space-y-8': layout === 'minimal'
                  }),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h1", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('text-2xl lg:text-4xl xl:text-5xl tracking-tight text-heading font-bold', {
                      '!text-accent': layout === 'minimal'
                    }),
                    children: banner === null || banner === void 0 ? void 0 : banner.title
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                    className: "text-sm lg:text-base xl:text-lg text-heading",
                    children: banner === null || banner === void 0 ? void 0 : banner.description
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                    className: "max-w-4xl w-full",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_search_search__WEBPACK_IMPORTED_MODULE_5__.default, {
                      label: "search"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__.Waypoint, {
                    onLeave: () => setDisplayHeaderSearch(true),
                    onEnter: () => setDisplayHeaderSearch(false),
                    onPositionChange: onWaypointPositionChange
                  })]
                })]
              })
            }, idx);
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithSearch);
});

/***/ })

};
;