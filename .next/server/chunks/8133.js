"use strict";
exports.id = 8133;
exports.ids = [8133];
exports.modules = {

/***/ 8133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5335);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3457);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4068);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8184);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8802);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9522);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const Neon = ({
  product,
  className
}) => {
  var _image$original;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common'); // const { name, image, quantity } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const {
    name,
    image,
    quantity,
    min_price,
    max_price,
    product_type
  } = product !== null && product !== void 0 ? product : {};
  const {
    price,
    basePrice,
    discount
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: product.sale_price ? product.sale_price : product.price,
    baseAmount: product.price
  });
  const {
    price: minPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: min_price
  });
  const {
    price: maxPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: max_price
  });
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalAction */ .SO)();

  function handleProductQuickView() {
    return openModal('PRODUCT_DETAILS', product.slug);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("article", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card cart-type-neon border border-border-200 rounded h-full bg-light overflow-hidden shadow-sm transition-all duration-200 hover:shadow transform hover:-translate-y-0.5', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64",
      onClick: handleProductQuickView,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
        className: "sr-only",
        children: t('text-product-image')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_0__/* .Image */ .E, {
        src: (_image$original = image === null || image === void 0 ? void 0 : image.original) !== null && _image$original !== void 0 ? _image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
        alt: name,
        layout: "fill",
        objectFit: "contain",
        className: "product-image"
      }), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "absolute top-3 end-3 md:top-4 md:end-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-accent text-light",
        children: discount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("header", {
      className: "p-3 md:p-6",
      children: [product_type.toLowerCase() === 'variable' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mb-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: "text-sm md:text-base text-heading font-semibold",
          children: minPrice
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: " - "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: "text-sm md:text-base text-heading font-semibold",
          children: maxPrice
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center mb-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: "text-sm md:text-base text-heading font-semibold",
          children: price
        }), basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("del", {
          className: "text-xs md:text-sm text-muted ms-2",
          children: basePrice
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
        className: "text-xs md:text-sm text-body truncate mb-4 cursor-pointer",
        onClick: handleProductQuickView,
        children: name
      }), product_type.toLowerCase() === 'variable' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: Number(quantity) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
          onClick: handleProductQuickView,
          className: "group w-full h-7 md:h-9 flex items-center justify-between text-xs md:text-sm text-body-dark rounded bg-gray-100 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "flex-1",
            children: t('text-add')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "w-7 h-7 md:w-9 md:h-9 bg-gray-200 grid place-items-center rounded-te rounded-be transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_7__/* .PlusIcon */ .p, {
              className: "w-4 h-4 stroke-2"
            })
          })]
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: Number(quantity) > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__/* .AddToCart */ .o, {
          variant: "neon",
          data: product
        })
      }), Number(quantity) <= 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "bg-red-500 rounded text-xs text-center text-light px-2 py-1.5 sm:py-2.5",
        children: t('text-out-stock')
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neon);

/***/ })

};
;