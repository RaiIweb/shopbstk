"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3295);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9475);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { fetchSettings } from '@framework/app/settings.query';
// import { fetchGroups } from '@framework/groups/groups.query';
// import { API_ENDPOINTS } from '@framework/utils/endpoints';



const getStaticProps = async ({
  locale
}) => {
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient(); // await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, fetchSettings);
  // await queryClient.prefetchQuery(API_ENDPOINTS.TYPE, fetchGroups);

  return {
    props: _objectSpread(_objectSpread({}, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, ['common'])), {}, {
      dehydratedState: JSON.parse(JSON.stringify((0,react_query_hydration__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)))
    })
  };
};

/***/ })

};
;