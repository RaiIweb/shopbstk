"use strict";
exports.id = 2094;
exports.ids = [2094];
exports.modules = {

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tg": () => (/* reexport */ arrow_next/* ArrowNextIcon */.z),
  "zF": () => (/* reexport */ arrow_prev/* ArrowPrevIcon */.W)
});

// UNUSED EXPORTS: Check

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/check-icon.tsx



const Check = ({
  width = 24,
  height = 24,
  className
}) => {
  return /*#__PURE__*/_jsx("svg", {
    width: width,
    height: height,
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    children: /*#__PURE__*/_jsx("path", {
      d: "M20 6L9 17L4 12",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
};

/* harmony default export */ const check_icon = ((/* unused pure expression or super */ null && (Check)));
// EXTERNAL MODULE: ./src/components/icons/arrow-next.tsx
var arrow_next = __webpack_require__(1808);
// EXTERNAL MODULE: ./src/components/icons/arrow-prev.tsx
var arrow_prev = __webpack_require__(693);
;// CONCATENATED MODULE: ./src/components/icons/index.ts




/***/ }),

/***/ 2094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_app_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3510);
/* harmony import */ var _framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3165);
/* harmony import */ var _framework_categories_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _framework_products_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3645);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3783);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1813);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__]);
_framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

 // import CategoriesWithProducts from '@framework/categories-with-products/categories-with-products';









const Classic = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_framework_app_banner__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      layout: "classic"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_filter_bar__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Element, {
      name: "grid",
      className: "flex flex-1 border-t border-solid border-border-200 border-opacity-70",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_framework_categories_categories__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        layout: "classic"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_framework_products_products__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Classic);
});

/***/ }),

/***/ 7550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSlider)
/* harmony export */ });
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2182);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4114);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5335);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 16
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 24
  }
};
function PromotionSlider({
  sliders
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "px-6 py-5 md:p-8 border-t border-border-200 bg-light",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Swiper */ .tq, {
        id: "offer",
        loop: true,
        breakpoints: offerSliderBreakpoints,
        modules: [_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_],
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        children: sliders === null || sliders === void 0 ? void 0 : sliders.map(d => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
            className: "w-full h-auto",
            src: d.original,
            alt: d.id,
            layout: "responsive",
            width: "580",
            height: "270"
          })
        }, d.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent",
        role: "button",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "sr-only",
          children: t('common:text-previous')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .ArrowPrev */ .zF, {
          width: 18,
          height: 18
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent",
        role: "button",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "sr-only",
          children: t('common:text-next')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .ArrowNext */ .Tg, {
          width: 18,
          height: 18
        })]
      })]
    })
  });
}
});

/***/ }),

/***/ 3165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7550);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5903);
/* harmony import */ var _framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7925);
/* harmony import */ var _framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3585);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__]);
_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const PromotionSliders = () => {
  var _data$type, _data$type2;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    homePage
  } = (0,_framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  const group = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    var _router$query$pages$, _router$query$pages;

    return (_router$query$pages$ = (_router$query$pages = router.query.pages) === null || _router$query$pages === void 0 ? void 0 : _router$query$pages[0]) !== null && _router$query$pages$ !== void 0 ? _router$query$pages$ : homePage === null || homePage === void 0 ? void 0 : homePage.slug;
  }, [router.query.pages, homePage]);
  const {
    data,
    error
  } = (0,_framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_2__/* .useGroupQuery */ .xR)(group === null || group === void 0 ? void 0 : group.toString());
  if (error) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__.default, {
    message: error.message
  });
  if (!(data !== null && data !== void 0 && (_data$type = data.type) !== null && _data$type !== void 0 && _data$type.promotional_sliders)) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    sliders: data === null || data === void 0 ? void 0 : (_data$type2 = data.type) === null || _data$type2 === void 0 ? void 0 : _data$type2.promotional_sliders
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromotionSliders);
});

/***/ })

};
;