"use strict";
(() => {
var exports = {};
exports.id = 2513;
exports.ids = [2513];
exports.modules = {

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OfferPage),
  "getStaticProps": () => (/* reexport */ common/* getStaticProps */.b)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(5335);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: external "react-copy-to-clipboard"
const external_react_copy_to_clipboard_namespaceObject = require("react-copy-to-clipboard");
var external_react_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_react_copy_to_clipboard_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 3 modules
var placeholders = __webpack_require__(8802);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/cards/coupon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const CouponCard = ({
  coupon,
  className
}) => {
  var _image$thumbnail;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    code,
    image,
    is_valid
  } = coupon;
  const {
    0: copyText,
    1: setCopyText
  } = (0,external_react_.useState)({
    value: code,
    copied: false
  });
  (0,external_react_.useEffect)(() => {
    let timeout;

    if (copyText.copied) {
      timeout = setTimeout(() => {
        setCopyText(prev => _objectSpread(_objectSpread({}, prev), {}, {
          copied: false
        }));
      }, 3500);
    }

    return () => clearTimeout(timeout);
  }, [copyText.copied]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('coupon-card', className),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex rounded overflow-hidden bg-gray-200 relative",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
        src: (_image$thumbnail = image === null || image === void 0 ? void 0 : image.thumbnail) !== null && _image$thumbnail !== void 0 ? _image$thumbnail : placeholders/* couponPlaceholder */.Qg,
        alt: code,
        width: "572",
        height: "429"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-11/12 grid grid-flow-col auto-cols-fr items-center py-4 px-5 mx-auto rounded-bl rounded-be shadow-sm bg-light",
      children: is_valid ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-heading font-semibold uppercase focus:outline-none",
          children: copyText.value
        }), !copyText.copied && /*#__PURE__*/jsx_runtime_.jsx((external_react_copy_to_clipboard_default()), {
          text: copyText.value,
          onCopy: () => setCopyText(prev => _objectSpread(_objectSpread({}, prev), {}, {
            copied: true
          })),
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "text-end text-accent text-sm font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: t('text-copy')
            })
          })
        }), copyText.copied && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-end text-accent text-sm font-semibold",
          children: t('text-copied')
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-sm text-center block text-red-500",
        children: t('text-expired')
      })
    })]
  });
};

/* harmony default export */ const coupon = (CouponCard);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(5903);
// EXTERNAL MODULE: ./src/framework/rest/coupons/coupons.query.ts + 1 modules
var coupons_query = __webpack_require__(2147);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: ./src/components/cart/cart-counter-button.tsx
var cart_counter_button = __webpack_require__(6269);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3795);
// EXTERNAL MODULE: ./src/lib/range-map.ts
var range_map = __webpack_require__(9118);
// EXTERNAL MODULE: ./src/components/ui/loaders/coupon-loader.tsx
var coupon_loader = __webpack_require__(2996);
;// CONCATENATED MODULE: ./src/components/coupons/grid-with-loader.tsx










const CouponGridWithLoader = ({
  showLoaders,
  notFound,
  children,
  hasNextPage,
  isLoadingMore,
  onLoadMore,
  limit = 20
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  if (notFound) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-gray-100 min-h-full pt-6 pb-8 px-4 lg:p-8",
      children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
        text: "text-no-coupon"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-1920 bg-gray-100 w-full mx-auto py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 xl:gap-8",
        children: showLoaders ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: (0,range_map/* default */.Z)(limit, i => /*#__PURE__*/jsx_runtime_.jsx(coupon_loader/* default */.Z, {
            uniqueKey: `coupon-${i}`
          }, i))
        }) : children
      }), hasNextPage && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center mt-8 lg:mt-12",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: onLoadMore,
          loading: isLoadingMore,
          children: t('text-load-more')
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(cart_counter_button.default, {})]
  });
};

/* harmony default export */ const grid_with_loader = (CouponGridWithLoader);
;// CONCATENATED MODULE: ./src/framework/rest/coupons/coupons.tsx






function Coupons() {
  var _data$pages, _data$pages$, _data$pages$$data, _data$pages2;

  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error
  } = (0,coupons_query/* useCouponsQuery */.ID)();
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(error_message/* default */.Z, {
    message: error.message
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(grid_with_loader, {
    notFound: !loading && !(data !== null && data !== void 0 && (_data$pages = data.pages) !== null && _data$pages !== void 0 && (_data$pages$ = _data$pages[0]) !== null && _data$pages$ !== void 0 && (_data$pages$$data = _data$pages$.data) !== null && _data$pages$$data !== void 0 && _data$pages$$data.length),
    hasNextPage: Boolean(hasNextPage),
    onLoadMore: handleLoadMore,
    isLoadingMore: loadingMore,
    showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages2 = data.pages) !== null && _data$pages2 !== void 0 && _data$pages2.length),
    children: data === null || data === void 0 ? void 0 : data.pages.map((page, _idx) => {
      var _page$data;

      return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
        children: page === null || page === void 0 ? void 0 : (_page$data = page.data) === null || _page$data === void 0 ? void 0 : _page$data.map(item => /*#__PURE__*/jsx_runtime_.jsx(coupon, {
          coupon: item
        }, item.id))
      }, _idx);
    })
  });
}
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 11 modules
var layout = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/framework/rest/ssr/common.ts
var common = __webpack_require__(102);
;// CONCATENATED MODULE: ./src/pages/offers.tsx




function OfferPage() {
  return /*#__PURE__*/jsx_runtime_.jsx(Coupons, {});
}
OfferPage.getLayout = layout/* getLayout */.G;

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

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3061,5152,9583,4318,3844,2923,65,808,9076,2947,3457,1553,102,3795,6093,8778,2147,9534], () => (__webpack_exec__(5440)));
module.exports = __webpack_exports__;

})();