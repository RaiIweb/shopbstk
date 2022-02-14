"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = [
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5903);
/* harmony import */ var _framework_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6524);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3585);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const StickySidebarListCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(4318), __webpack_require__.e(3795), __webpack_require__.e(3921), __webpack_require__.e(6875), __webpack_require__.e(8430)]).then(__webpack_require__.bind(__webpack_require__, 8430)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8430)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/sticky-sidebar-list-categories']
  }
});
const SlidingVerticalRectangleCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(3795), __webpack_require__.e(653), __webpack_require__.e(5545)]).then(__webpack_require__.bind(__webpack_require__, 5545)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5545)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/sliding-vertical-rectangle-categories']
  }
});
const StickySidebarBoxedCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(4318), __webpack_require__.e(3795), __webpack_require__.e(3921), __webpack_require__.e(6875), __webpack_require__.e(3846)]).then(__webpack_require__.bind(__webpack_require__, 3846)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3846)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/sticky-sidebar-boxed-categories']
  }
});
const FilterCategoryGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(3844), __webpack_require__.e(65), __webpack_require__.e(1553), __webpack_require__.e(3795), __webpack_require__.e(3645), __webpack_require__.e(3921), __webpack_require__.e(9967)]).then(__webpack_require__.bind(__webpack_require__, 9967)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9967)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/filter-category-grid']
  }
});
const MAP_CATEGORY_TO_GROUP = {
  classic: StickySidebarListCategories,
  modern: StickySidebarBoxedCategories,
  standard: SlidingVerticalRectangleCategories,
  minimal: FilterCategoryGrid,
  default: StickySidebarListCategories
};

const Categories = ({
  layout,
  className
}) => {
  var _ref, _query$pages, _data$categories, _data$categories$data, _data$categories2;

  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    homePage
  } = (0,_framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
  const {
    data,
    isLoading: loading,
    error
  } = (0,_framework_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__/* .useCategoriesQuery */ .E)({
    type: (_ref = (_query$pages = query.pages) === null || _query$pages === void 0 ? void 0 : _query$pages[0]) !== null && _ref !== void 0 ? _ref : homePage === null || homePage === void 0 ? void 0 : homePage.slug,
    limit: 1000,
    parent: layout === 'minimal' ? 'all' : 'null'
  });
  if (error) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__.default, {
    message: error.message
  });
  const Component = layout ? MAP_CATEGORY_TO_GROUP[layout] : MAP_CATEGORY_TO_GROUP['default'];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, {
    notFound: !Boolean(data === null || data === void 0 ? void 0 : (_data$categories = data.categories) === null || _data$categories === void 0 ? void 0 : (_data$categories$data = _data$categories.data) === null || _data$categories$data === void 0 ? void 0 : _data$categories$data.length),
    categories: data === null || data === void 0 ? void 0 : (_data$categories2 = data.categories) === null || _data$categories2 === void 0 ? void 0 : _data$categories2.data,
    loading: loading,
    className: className
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ })
];
;