"use strict";
(() => {
var exports = {};
exports.id = 8915;
exports.ids = [8915];
exports.modules = {

/***/ 9147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PrivacyPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: ./src/settings/privacy.ts
const privacyPolicy = {
  title: 'policy-main-title',
  date: '01/01/2020',
  content: [{
    id: '1',
    title: 'policy-one-title',
    description: 'policy-one-description'
  }, {
    id: '2',
    title: 'policy-two-title',
    description: 'policy-two-description'
  }, {
    id: '3',
    title: 'policy-three-title',
    description: 'policy-three-description'
  }, {
    id: '4',
    title: 'policy-four-title',
    description: 'policy-four-description'
  }, {
    id: '5',
    title: 'policy-five-title',
    description: 'policy-five-description'
  }, {
    id: '6',
    title: 'policy-six-title',
    description: 'policy-six-description'
  }]
};
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 11 modules
var layout = __webpack_require__(2947);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/privacy.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function makeTitleToDOMId(title) {
  return title.toLowerCase().split(' ').join('_');
}

function PrivacyPage() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('policy');
  const {
    title,
    date,
    content
  } = privacyPolicy;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "max-w-1920 bg-light w-full mx-auto py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "sm:mt-2 xl:mt-4 mb-10 lg:mb-14",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-xl md:text-2xl sm:text-3xl 2xl:text-4xl text-heading font-bold mb-4 sm:mb-5 2xl:mb-7",
        children: t(title)
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm md:text-base text-body-dark 2xl:text-lg px-0.5",
        children: date
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col md:flex-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "md:w-72 xl:w-3/12 mb-8 md:mb-0",
        children: /*#__PURE__*/jsx_runtime_.jsx("ol", {
          className: "sticky md:top-16 lg:top-22 z-10",
          children: content === null || content === void 0 ? void 0 : content.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              spy: true,
              offset: -120,
              smooth: true,
              duration: 500,
              to: makeTitleToDOMId(item.title),
              activeClass: "text-sm lg:text-base text-heading font-semibold",
              className: "cursor-pointer inline-flex py-3 text-sub-heading uppercase",
              children: t(item.title)
            })
          }, item.title))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "md:w-9/12 md:ps-8 md:pb-10",
        children: content === null || content === void 0 ? void 0 : content.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_scroll_.Element, {
          name: makeTitleToDOMId(item.title),
          className: "mb-10",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4",
            children: t(item.title)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-body-dark leading-loose",
            dangerouslySetInnerHTML: {
              __html: t(item.description)
            }
          })]
        }, item.title))
      })]
    })]
  });
}
PrivacyPage.getLayout = layout/* getLayout */.G;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common', 'policy']))
  };
};

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

/***/ 3783:
/***/ ((module) => {

module.exports = require("react-scroll");

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
var __webpack_exports__ = __webpack_require__.X(0, [3061,5152,9583,4318,3844,2923,65,808,9076,2947], () => (__webpack_exec__(9147)));
module.exports = __webpack_exports__;

})();