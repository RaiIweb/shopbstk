"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_app_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3510);
/* harmony import */ var _framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3165);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__]);
_framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

 // import CategoriesWithProducts from '@framework/categories-with-products/categories-with-products';
// import Categories from '@framework/categories/categories';
// import Products from '@framework/products/products';
// import { Element } from 'react-scroll';
// import FilterBar from './filter-bar';





const Classic = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_framework_app_banner__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      layout: "classic"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_framework_app_promotions__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {})]
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
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

 // import { Image } from '@components/ui/image';




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
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "px-6 py-5 md:p-8 border-t border-border-200 bg-light",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Swiper */ .tq, {
        id: "offer",
        loop: true,
        breakpoints: offerSliderBreakpoints,
        modules: [_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_],
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        children: sliders === null || sliders === void 0 ? void 0 : sliders.map(d => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "h-100 w-100 py-16 px-10 rounded-md",
            style: {
              backgroundColor: d.color
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
              className: "text-light text-2xl font-bold mb-2",
              children: d.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
              className: "text-light text-xs mb-5",
              children: d.subtitle
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              className: "text-accent bg-light rounded-3xl py-2 px-3 text-xs font-bold",
              children: d.button.text
            })]
          })
        }, d.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent",
        role: "button",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "sr-only",
          children: t('common:text-previous')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .ArrowPrev */ .zF, {
          width: 18,
          height: 18
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent",
        role: "button",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "sr-only",
          children: t('common:text-next')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .ArrowNext */ .Tg, {
          width: 18,
          height: 18
        })]
      })]
    })
  });
}
});

/***/ }),

/***/ 3510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// import { useGroupQuery } from '@framework/groups/groups.query';
// import useHomepage from '@framework/utils/use-homepage';
// import { useRouter } from 'next/router';
 // import { useMemo } from 'react';
// const ErrorMessage = dynamic(() => import('@components/ui/error-message'));


const BannerWithSearch = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(3953), __webpack_require__.e(5781), __webpack_require__.e(6137)]).then(__webpack_require__.bind(__webpack_require__, 6137)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6137)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/banners/banner-with-search']
  }
});
const BannerShort = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => __webpack_require__.e(/* import() */ 8404).then(__webpack_require__.bind(__webpack_require__, 8609)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8609)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/banners/banner-short']
  }
});
const BannerWithoutSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => __webpack_require__.e(/* import() */ 7990).then(__webpack_require__.bind(__webpack_require__, 7990)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7990)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/banners/banner-without-slider']
  }
});
const MAP_BANNER_TO_GROUP = {
  classic: BannerWithSearch,
  modern: BannerShort,
  standard: BannerWithSearch,
  minimal: BannerWithoutSlider,
  default: BannerWithSearch
};
const banners = [{
  "id": 12,
  "type_id": 1,
  "title": "Buy A Car Online in 30 Minutes",
  "description": "Get your vehicles delivered at your doorstep all day everyday",
  "image": {
    "id": 907,
    "original": "/car/background.png",
    "thumbnail": "/car/background.png"
  },
  "created_at": "2021-07-17T13:21:55.000000Z",
  "updated_at": "2021-07-17T13:21:55.000000Z"
}];

const Banner = ({
  layout
}) => {
  // const router = useRouter();
  // const { homePage } = useHomepage();
  // const group = useMemo(
  //   () => router.query.pages?.[0] ?? homePage?.slug,
  //   [router.query.pages, homePage]
  // );
  // const {error } = useGroupQuery(group?.toString()!);
  // if (error) return <ErrorMessage message={error.message} />;
  const Component = layout ? MAP_BANNER_TO_GROUP[layout] : MAP_BANNER_TO_GROUP['default'];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Component, {
    banners: banners,
    layout: layout
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ 3165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7550);
/* harmony import */ var _framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3585);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__]);
_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
 // import ErrorMessage from '@components/ui/error-message';
// import { useGroupQuery } from '@framework/groups/groups.query';






const PromotionSliders = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    homePage
  } = (0,_framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  const group = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    var _router$query$pages$, _router$query$pages;

    return (_router$query$pages$ = (_router$query$pages = router.query.pages) === null || _router$query$pages === void 0 ? void 0 : _router$query$pages[0]) !== null && _router$query$pages$ !== void 0 ? _router$query$pages$ : homePage === null || homePage === void 0 ? void 0 : homePage.slug;
  }, [router.query.pages, homePage]); // const { error } = useGroupQuery(group?.toString()!);

  const data = [{
    id: 902,
    title: 'Covid-19 Updates',
    subtitle: 'with selected items',
    color: '#70C5F8',
    button: {
      text: 'Save Now'
    }
  }, {
    id: 903,
    title: 'Covid-19 Updates',
    subtitle: 'with selected items',
    color: '#8DCBAA',
    button: {
      text: 'Save Now'
    }
  }, {
    id: 904,
    title: 'Covid-19 Updates',
    subtitle: 'with selected items',
    color: '#E57FC8',
    button: {
      text: 'Save Now'
    }
  }, {
    id: 905,
    title: 'Covid-19 Updates',
    subtitle: 'with selected items',
    color: '#FEB36D',
    button: {
      text: 'Save Now'
    }
  }, {
    id: 906,
    title: 'Covid-19 Updates',
    subtitle: 'with selected items',
    color: '#8DCBAA',
    button: {
      text: 'Save Now'
    }
  }]; // if (error) return <ErrorMessage message={error.message} />;
  // if (!data?.type?.promotional_sliders) return null;

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    sliders: data
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromotionSliders);
});

/***/ }),

/***/ 6839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_ssr_common__WEBPACK_IMPORTED_MODULE_3__.b),
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_layouts_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2094);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _framework_ssr_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_classic__WEBPACK_IMPORTED_MODULE_0__]);
_components_layouts_classic__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function HomePage() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_layouts_classic__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {});
}
HomePage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G;
});

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 1199:
/***/ ((module) => {

module.exports = require("react-waypoint");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3061,5152,9583,4318,3844,2923,65,808,9076,2947,102,653], () => (__webpack_exec__(6839)));
module.exports = __webpack_exports__;

})();