"use strict";
(() => {
var exports = {};
exports.id = 6170;
exports.ids = [6170];
exports.modules = {

/***/ 9018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ (useWindowSize_default()))
});

;// CONCATENATED MODULE: external "react-use/lib/useWindowSize"
const useWindowSize_namespaceObject = require("react-use/lib/useWindowSize");
var useWindowSize_default = /*#__PURE__*/__webpack_require__.n(useWindowSize_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/use-window-size.ts


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticPaths": () => (/* reexport */ getStaticPaths),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(4657);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/seo/seo.tsx
const _excluded = ["title", "description", "images", "url"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Seo = _ref => {
  let {
    title,
    description,
    images,
    url
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.NextSeo, _objectSpread({
    title: title,
    openGraph: {
      url: `${""}/${url}`,
      title,
      description,
      images: images === null || images === void 0 ? void 0 : images.map(item => {
        var _item$image;

        return {
          url: item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.original,
          alt: item === null || item === void 0 ? void 0 : item.title
        };
      })
    }
  }, props));
};

/* harmony default export */ const seo = (Seo);
// EXTERNAL MODULE: ./src/framework/rest/utils/use-layout.tsx
var use_layout = __webpack_require__(6432);
// EXTERNAL MODULE: ./src/lib/use-window-size.ts + 1 modules
var use_window_size = __webpack_require__(9018);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
// EXTERNAL MODULE: ./src/framework/rest/app/settings.query.ts
var settings_query = __webpack_require__(168);
// EXTERNAL MODULE: ./src/framework/rest/categories/categories.query.ts
var categories_query = __webpack_require__(6524);
// EXTERNAL MODULE: ./src/framework/rest/groups/groups.query.ts
var groups_query = __webpack_require__(7925);
// EXTERNAL MODULE: ./src/framework/rest/products/products.query.ts
var products_query = __webpack_require__(65);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(6449);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__(9475);
;// CONCATENATED MODULE: ./src/framework/rest/ssr/pages.ts
function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // This function gets called at build time

async function getStaticPaths({
  locales
}) {
  const {
    types
  } = await (0,groups_query/* fetchGroups */.bt)();
  const paths = types === null || types === void 0 ? void 0 : types.flatMap(type => locales === null || locales === void 0 ? void 0 : locales.map(locale => ({
    params: {
      pages: [type.slug]
    },
    locale
  }))); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths: paths.concat(locales === null || locales === void 0 ? void 0 : locales.map(locale => ({
      params: {
        pages: []
      },
      locale
    }))),
    fallback: false
  };
}
const getStaticProps = async ({
  locale,
  params
}) => {
  var _types$find$slug, _types$find, _types$, _params$pages$, _params$pages, _types$find2, _types$find2$settings;

  const queryClient = new external_react_query_.QueryClient();
  await queryClient.prefetchQuery(endpoints/* API_ENDPOINTS.SETTINGS */.P.SETTINGS, settings_query/* fetchSettings */.w);
  const {
    types
  } = await (0,groups_query/* fetchGroups */.bt)();
  const homePage = (_types$find$slug = types === null || types === void 0 ? void 0 : (_types$find = types.find(type => {
    var _type$settings;

    return type === null || type === void 0 ? void 0 : (_type$settings = type.settings) === null || _type$settings === void 0 ? void 0 : _type$settings.isHome;
  })) === null || _types$find === void 0 ? void 0 : _types$find.slug) !== null && _types$find$slug !== void 0 ? _types$find$slug : types === null || types === void 0 ? void 0 : (_types$ = types[0]) === null || _types$ === void 0 ? void 0 : _types$.slug;
  const pageType = (_params$pages$ = params === null || params === void 0 ? void 0 : (_params$pages = params.pages) === null || _params$pages === void 0 ? void 0 : _params$pages[0]) !== null && _params$pages$ !== void 0 ? _params$pages$ : homePage;
  await queryClient.prefetchInfiniteQuery([endpoints/* API_ENDPOINTS.PRODUCTS */.P.PRODUCTS, {
    type: pageType
  }], products_query/* fetchProducts */.t2, {
    staleTime: 60 * 1000
  });
  await queryClient.prefetchQuery([endpoints/* API_ENDPOINTS.CATEGORIES */.P.CATEGORIES, {
    type: pageType,
    limit: 1000,
    parent: (types === null || types === void 0 ? void 0 : (_types$find2 = types.find(t => (t === null || t === void 0 ? void 0 : t.slug) === pageType)) === null || _types$find2 === void 0 ? void 0 : (_types$find2$settings = _types$find2.settings) === null || _types$find2$settings === void 0 ? void 0 : _types$find2$settings.layoutType) === 'minimal' ? 'all' : 'null'
  }], categories_query/* fetchCategories */.p, {
    staleTime: 60 * 1000
  });
  await queryClient.prefetchQuery(endpoints/* API_ENDPOINTS.TYPE */.P.TYPE, groups_query/* fetchGroups */.bt, {
    staleTime: 60 * 1000
  });
  await queryClient.prefetchQuery([endpoints/* API_ENDPOINTS.TYPE */.P.TYPE, pageType], () => (0,groups_query/* fetchGroup */.yi)(pageType), {
    staleTime: 10 * 1000
  });
  return {
    props: pages_objectSpread(pages_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common', 'banner'])), {}, {
      dehydratedState: JSON.parse(JSON.stringify((0,hydration_.dehydrate)(queryClient)))
    }),
    revalidate: 120
  };
};
;// CONCATENATED MODULE: ./src/pages/[[...pages]].tsx












const CartCounterButton = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3457), __webpack_require__.e(6093), __webpack_require__.e(8778)]).then(__webpack_require__.bind(__webpack_require__, 6269)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6269)],
    modules: ["[[...pages]].tsx -> " + '@components/cart/cart-counter-button']
  }
});
const Classic = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(3795), __webpack_require__.e(3645), __webpack_require__.e(1), __webpack_require__.e(3510), __webpack_require__.e(1813), __webpack_require__.e(653), __webpack_require__.e(2094)]).then(__webpack_require__.bind(__webpack_require__, 2094)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2094)],
    modules: ["[[...pages]].tsx -> " + '@components/layouts/classic']
  }
});
const Standard = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(3795), __webpack_require__.e(3645), __webpack_require__.e(1), __webpack_require__.e(3510), __webpack_require__.e(1813), __webpack_require__.e(9434)]).then(__webpack_require__.bind(__webpack_require__, 9434)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9434)],
    modules: ["[[...pages]].tsx -> " + '@components/layouts/standard']
  }
});
const Modern = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(3795), __webpack_require__.e(3645), __webpack_require__.e(1), __webpack_require__.e(3510), __webpack_require__.e(1813), __webpack_require__.e(1010)]).then(__webpack_require__.bind(__webpack_require__, 1010)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1010)],
    modules: ["[[...pages]].tsx -> " + '@components/layouts/modern']
  }
});
const Minimal = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(3510), __webpack_require__.e(3435)]).then(__webpack_require__.bind(__webpack_require__, 3435)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3435)],
    modules: ["[[...pages]].tsx -> " + '@components/layouts/minimal']
  }
});
const MAP_LAYOUT_TO_GROUP = {
  classic: Classic,
  modern: Modern,
  standard: Standard,
  minimal: Minimal,
  default: Classic
};
function Home() {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    layout,
    page
  } = (0,use_layout/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    if (query.text || query.category) {
      external_react_scroll_.scroller.scrollTo('grid', {
        smooth: true,
        offset: -110
      });
    }
  }, [query.text, query.category]);
  let Component = layout ? MAP_LAYOUT_TO_GROUP[layout] : MAP_LAYOUT_TO_GROUP['default'];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo, {
      title: page === null || page === void 0 ? void 0 : page.name,
      url: page === null || page === void 0 ? void 0 : page.slug,
      images: page === null || page === void 0 ? void 0 : page.banners
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, {}), layout !== 'minimal' && width > 1023 && /*#__PURE__*/jsx_runtime_.jsx(CartCounterButton, {})]
  });
}
Home.getLayout = layout/* getLayout */.G;

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

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

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

/***/ 2364:
/***/ ((module) => {

module.exports = require("next-seo");

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

/***/ 9081:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 3783:
/***/ ((module) => {

module.exports = require("react-scroll");

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
var __webpack_exports__ = __webpack_require__.X(0, [3061,5152,4318,3844,2923,65,808,9076,4657,8221], () => (__webpack_exec__(2282)));
module.exports = __webpack_exports__;

})();