"use strict";
exports.id = 8888;
exports.ids = [8888];
exports.modules = {

/***/ 8888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart_sidebar_view)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/components/icons/cart-check-bag.tsx
var cart_check_bag = __webpack_require__(3900);
// EXTERNAL MODULE: ./src/components/icons/empty-cart.tsx
var empty_cart = __webpack_require__(2605);
// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(730);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(5335);
// EXTERNAL MODULE: ./src/settings/site.ts
var site = __webpack_require__(2562);
// EXTERNAL MODULE: ./src/components/ui/counter.tsx
var counter = __webpack_require__(6004);
// EXTERNAL MODULE: ./src/lib/motion/fade-in-out.ts
var fade_in_out = __webpack_require__(533);
// EXTERNAL MODULE: ./src/lib/use-price.tsx
var use_price = __webpack_require__(3457);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(7473);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/cart/cart-item.tsx












const CartItem = ({
  item
}) => {
  var _item$image, _siteSettings$product;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    isInStock,
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart
  } = (0,cart_context/* useCart */.jD)();
  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: item.price
  });
  const {
    price: itemPrice
  } = (0,use_price/* default */.ZP)({
    amount: item.itemTotal
  });

  function handleIncrement(e) {
    e.stopPropagation();
    addItemToCart(item, 1);
  }

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItemFromCart(item.id);
  };

  const outOfStock = !isInStock(item.id);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
    layout: true,
    initial: "from",
    animate: "to",
    exit: "from",
    variants: (0,fade_in_out/* fadeInOut */.I)(0.25),
    className: "flex items-center py-4 px-4 sm:px-6 text-sm border-b border-solid border-border-200 border-opacity-75",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-shrink-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(counter/* default */.Z, {
        value: item.quantity,
        onDecrement: handleRemoveClick,
        onIncrement: handleIncrement,
        variant: "pillVertical",
        disabled: outOfStock
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center overflow-hidden bg-gray-100 mx-4 flex-shrink-0 relative",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
        src: (_item$image = item === null || item === void 0 ? void 0 : item.image) !== null && _item$image !== void 0 ? _item$image : site/* siteSettings */.U === null || site/* siteSettings */.U === void 0 ? void 0 : (_siteSettings$product = site/* siteSettings.product */.U.product) === null || _siteSettings$product === void 0 ? void 0 : _siteSettings$product.placeholderImage,
        alt: item.name,
        layout: "fill",
        objectFit: "contain"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-bold text-heading",
        children: item.name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "my-2.5 font-semibold text-accent",
        children: price
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-body",
        children: [item.quantity, " X ", item.unit]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ms-auto font-bold text-heading",
      children: itemPrice
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "w-7 h-7 ms-3 -me-2 flex items-center justify-center flex-shrink-0 rounded-full text-muted transition-all duration-200 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 hover:text-red-600 focus:text-red-600",
      onClick: () => clearItemFromCart(item.id),
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "sr-only",
        children: t('text-close')
      }), /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
        className: "w-3 h-3"
      })]
    })]
  });
};

/* harmony default export */ const cart_item = (CartItem);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(4053);
// EXTERNAL MODULE: ./src/lib/format-string.tsx
var format_string = __webpack_require__(1038);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(7349);
;// CONCATENATED MODULE: ./src/components/cart/cart-sidebar-view.tsx

















const CartSidebarView = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    items,
    totalUniqueItems,
    total
  } = (0,cart_context/* useCart */.jD)();
  const [_, closeSidebar] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);
  const router = (0,router_.useRouter)();

  function handleCheckout() {
    router.push(routes/* ROUTES.CHECKOUT */.Z.CHECKOUT);
    closeSidebar({
      display: false,
      view: ''
    });
  }

  const {
    price: totalPrice
  } = (0,use_price/* default */.ZP)({
    amount: total
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "flex flex-col h-full relative",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "fixed max-w-md w-full top-0 z-10 bg-light py-4 px-6 flex items-center justify-between border-b border-border-200 border-opacity-75",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex text-accent font-semibold",
        children: [/*#__PURE__*/jsx_runtime_.jsx(cart_check_bag/* default */.Z, {
          className: "flex-shrink-0",
          width: 24,
          height: 22
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex ms-2",
          children: (0,format_string/* formatString */.U)(totalUniqueItems, t('text-item'))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: () => closeSidebar({
          display: false,
          view: ''
        }),
        className: "w-7 h-7 ms-3 -me-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-close')
        }), /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
          className: "w-3 h-3"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
        layout: true,
        className: "flex-grow pt-16",
        children: items.length > 0 ? items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(cart_item, {
          item: item
        }, item.id)) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
          layout: true,
          initial: "from",
          animate: "to",
          exit: "from",
          variants: (0,fade_in_out/* fadeInOut */.I)(0.25),
          className: "h-full flex flex-col items-center justify-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(empty_cart/* default */.Z, {
            width: 140,
            height: 176
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "mt-6 text-base font-semibold",
            children: t('text-no-products')
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: "sticky start-0 bottom-0 w-full py-5 px-6 z-10 bg-light",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover",
        onClick: handleCheckout,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex flex-1 items-center h-full px-5 text-light",
          children: t('text-checkout')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex items-center flex-shrink-0 h-full bg-light text-accent rounded-full px-5",
          children: totalPrice
        })]
      })
    })]
  });
};

/* harmony default export */ const cart_sidebar_view = (CartSidebarView);

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