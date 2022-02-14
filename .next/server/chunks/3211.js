"use strict";
exports.id = 3211;
exports.ids = [3211];
exports.modules = {

/***/ 3211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3407);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5335);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3457);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4053);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8802);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const Krypton = ({
  product,
  className
}) => {
  var _image$original;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common'); // const { name, slug, image } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const {
    name,
    image,
    slug,
    min_price,
    max_price,
    product_type
  } = product !== null && product !== void 0 ? product : {};
  const {
    price,
    basePrice,
    discount
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)({
    amount: product.sale_price ? product.sale_price : product.price,
    baseAmount: product.price
  });
  const {
    price: minPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)({
    amount: min_price
  });
  const {
    price: maxPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)({
    amount: max_price
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("article", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('product-card cart-type-krypton h-full rounded border border-border-200 bg-light overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-sm', className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "relative flex items-center justify-center w-auto h-48 sm:h-64",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          className: "sr-only",
          children: t('text-product-image')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
          src: (_image$original = image === null || image === void 0 ? void 0 : image.original) !== null && _image$original !== void 0 ? _image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
          alt: name,
          layout: "fill",
          objectFit: "contain",
          className: "product-image"
        }), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "absolute top-3 end-3 md:top-4 md:end-4 rounded-full text-xs leading-6 font-semibold px-2 md:px-2.5 bg-yellow-500 text-light",
          children: discount
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("header", {
        className: "p-3 md:p-6 text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
          className: "text-sm text-heading font-semibold truncate mb-2",
          children: name
        }), product_type.toLowerCase() === 'variable' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm text-sub-heading",
            children: minPrice
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: " - "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm text-sub-heading",
            children: maxPrice
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex items-center justify-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm text-sub-heading",
            children: price
          }), basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("del", {
            className: "text-sm text-muted ms-2",
            children: basePrice
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Krypton);

/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
  HOME: '/grocery',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  CHANGE_PASSWORD: '/change-password',
  ORDERS: '/orders',
  REFUNDS: '/refunds',
  HELP: '/help',
  LOGOUT: '/logout',
  OFFERS: '/offers',
  ORDER_RECEIVED: '/order-received',
  PRODUCT: '/products',
  ORDER: '/order',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
  SHOPS: '/shops'
};

/***/ })

};
;