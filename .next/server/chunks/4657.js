"use strict";
exports.id = 4657;
exports.ids = [4657];
exports.modules = {

/***/ 7022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchIcon = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
  viewBox: "0 0 17.048 18"
}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z",
    transform: "translate(-367.297 -371.285)",
    fill: "currentColor"
  })
}));

/***/ }),

/***/ 4657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ getLayout)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./src/framework/rest/utils/use-layout.tsx
var use_layout = __webpack_require__(6432);
// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(9300);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/framework/rest/groups/dropdown-menu.tsx + 13 modules
var dropdown_menu = __webpack_require__(920);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(4053);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/layouts/menu/static-menu.tsx






const headerLinks = [{
  href: routes/* ROUTES.SHOPS */.Z.SHOPS,
  icon: null,
  label: 'nav-menu-shops'
}, {
  href: routes/* ROUTES.OFFERS */.Z.OFFERS,
  icon: null,
  label: 'nav-menu-offer'
}, {
  href: routes/* ROUTES.HELP */.Z.HELP,
  label: 'nav-menu-faq'
}, {
  href: routes/* ROUTES.CONTACT */.Z.CONTACT,
  label: 'nav-menu-contact'
}];

const StaticMenu = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: headerLinks.map(({
      href,
      label,
      icon
    }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
        href: href,
        className: "font-normal text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent",
        children: [icon && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-2",
          children: icon
        }), t(label)]
      })
    }, `${href}${label}`))
  });
};

/* harmony default export */ const static_menu = (StaticMenu);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/display-header-search-atom.ts
var display_header_search_atom = __webpack_require__(4230);
;// CONCATENATED MODULE: ./src/store/display-mobile-header-search-atom.ts

const displayMobileHeaderSearchAtom = (0,external_jotai_.atom)(false);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/store/authorization-atom.ts
var authorization_atom = __webpack_require__(7471);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/lib/use-is-homepage.ts

function useIsHomePage() {
  const router = (0,router_.useRouter)();
  return router.pathname === '/[[...pages]]';
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/layouts/header.tsx
















const Search = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3953), __webpack_require__.e(5781)]).then(__webpack_require__.bind(__webpack_require__, 5781)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5781)],
    modules: ["../components/layouts/header.tsx -> " + '@components/ui/search/search']
  }
});
const AuthorizedMenu = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(2562), __webpack_require__.e(8039)]).then(__webpack_require__.bind(__webpack_require__, 8039)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8039)],
    modules: ["../components/layouts/header.tsx -> " + './menu/authorized-menu']
  }
});
const JoinButton = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(9451)]).then(__webpack_require__.bind(__webpack_require__, 9451)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9451)],
    modules: ["../components/layouts/header.tsx -> " + './menu/join-button']
  }
});

const Header = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    layout
  } = (0,use_layout/* default */.Z)();
  const [displayHeaderSearch, setDisplayHeaderSearch] = (0,external_jotai_.useAtom)(display_header_search_atom/* displayHeaderSearchAtom */.y);
  const [displayMobileHeaderSearch] = (0,external_jotai_.useAtom)(displayMobileHeaderSearchAtom);
  const [isAuthorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const isHomePage = useIsHomePage();
  (0,external_react_.useEffect)(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  const isFlattenHeader = !displayHeaderSearch && isHomePage && layout !== 'modern';
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: external_classnames_default()('site-header-with-search h-14 md:h-16 lg:h-22', {
      'lg:!h-auto': isFlattenHeader
    }),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()('flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:px-8 py-5 z-50 fixed bg-light border-b border-border-200 shadow-sm transition-transform duration-300', {
        'lg:absolute lg:bg-transparent lg:shadow-none lg:border-0': isFlattenHeader
      }),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center w-full lg:w-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {
          className: "mx-auto lg:mx-0"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ms-10 me-auto hidden xl:block",
          children: /*#__PURE__*/jsx_runtime_.jsx(dropdown_menu/* default */.Z, {})
        })]
      }), isHomePage ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [(displayHeaderSearch || layout === 'modern') && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden lg:block w-full xl:w-11/12 2xl:w-10/12 mx-auto px-10 overflow-hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(Search, {
            label: t('text-search-label'),
            variant: "minimal"
          })
        }), displayMobileHeaderSearch && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "block lg:hidden w-full absolute top-0 start-0 h-full bg-light pt-1.5 md:pt-2 px-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(Search, {
            label: t('text-search-label'),
            variant: "minimal"
          })
        })]
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "hidden lg:flex items-center flex-shrink-0 space-s-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx(static_menu, {}), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: isAuthorize ? /*#__PURE__*/jsx_runtime_.jsx(AuthorizedMenu, {}) : /*#__PURE__*/jsx_runtime_.jsx(JoinButton, {})
        })]
      })]
    })
  });
};

/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./src/components/ui/search/search-with-suggestion.tsx + 1 modules
var search_with_suggestion = __webpack_require__(2795);
;// CONCATENATED MODULE: ./src/components/layouts/header-minimal.tsx
















const CartCounterIconButton = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 7850).then(__webpack_require__.bind(__webpack_require__, 7850)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7850)],
    modules: ["../components/layouts/header-minimal.tsx -> " + '@components/cart/cart-counter-icon-button']
  }
});
const header_minimal_AuthorizedMenu = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(2562), __webpack_require__.e(8039)]).then(__webpack_require__.bind(__webpack_require__, 8039)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8039)],
    modules: ["../components/layouts/header-minimal.tsx -> " + './menu/authorized-menu']
  }
});
const header_minimal_JoinButton = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1553), __webpack_require__.e(9451)]).then(__webpack_require__.bind(__webpack_require__, 9451)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9451)],
    modules: ["../components/layouts/header-minimal.tsx -> " + './menu/join-button']
  }
});

const HeaderMinimal = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const [_, setDisplayHeaderSearch] = (0,external_jotai_.useAtom)(display_header_search_atom/* displayHeaderSearchAtom */.y);
  const [displayMobileHeaderSearch] = (0,external_jotai_.useAtom)(displayMobileHeaderSearchAtom);
  const [isAuthorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const isHomePage = useIsHomePage();
  (0,external_react_.useEffect)(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: external_classnames_default()('site-header-with-search h-14 md:h-16 lg:h-22'),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()('flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:ps-12 lg:pe-8 py-5 z-50 fixed bg-light border-b border-border-200 shadow-sm transition-transform duration-300'),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center w-full lg:w-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {
          className: "mx-auto lg:mx-0"
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "ms-10 me-auto hidden lg:flex items-center flex-shrink-0 space-s-10",
          children: /*#__PURE__*/jsx_runtime_.jsx(static_menu, {})
        })]
      }), isHomePage ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: displayMobileHeaderSearch && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "block lg:hidden w-full absolute top-0 start-0 h-full bg-light pt-1.5 md:pt-2 px-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(search_with_suggestion/* default */.Z, {
            label: t('text-search-label'),
            variant: "minimal"
          })
        })
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ms-10 hidden lg:flex items-center flex-shrink-0 space-s-9",
        children: [/*#__PURE__*/jsx_runtime_.jsx(dropdown_menu/* default */.Z, {
          variant: "minimal"
        }), /*#__PURE__*/jsx_runtime_.jsx(CartCounterIconButton, {}), isAuthorize ? /*#__PURE__*/jsx_runtime_.jsx(header_minimal_AuthorizedMenu, {
          minimal: true
        }) : /*#__PURE__*/jsx_runtime_.jsx(header_minimal_JoinButton, {})]
      })]
    })
  });
};

/* harmony default export */ const header_minimal = (HeaderMinimal);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./src/components/icons/navbar-icon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const NavbarIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  width: "25.567",
  height: "18",
  viewBox: "0 0 25.567 18"
}, props), {}, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
    transform: "translate(-776 -462)",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "12.749",
      height: "2.499",
      rx: "1.25",
      transform: "translate(776 462)",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "25.567",
      height: "2.499",
      rx: "1.25",
      transform: "translate(776 469.75)",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "17.972",
      height: "2.499",
      rx: "1.25",
      transform: "translate(776 477.501)",
      fill: "currentColor"
    })]
  })
}));
// EXTERNAL MODULE: ./src/components/icons/search-icon.tsx
var search_icon = __webpack_require__(7022);
;// CONCATENATED MODULE: ./src/components/icons/home-icon.tsx
function home_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function home_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { home_icon_ownKeys(Object(source), true).forEach(function (key) { home_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { home_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function home_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const HomeIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", home_icon_objectSpread(home_icon_objectSpread({
  width: "17.996",
  height: "20.442",
  viewBox: "0 0 17.996 20.442"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    transform: "translate(-30.619 0.236)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z",
      transform: "translate(0 0)",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "0.4"
    })
  })
}));
;// CONCATENATED MODULE: ./src/components/icons/shopping-bag-icon.tsx
function shopping_bag_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function shopping_bag_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopping_bag_icon_ownKeys(Object(source), true).forEach(function (key) { shopping_bag_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopping_bag_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopping_bag_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ShoppingBagIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", shopping_bag_icon_objectSpread(shopping_bag_icon_objectSpread({
  width: "18",
  height: "18",
  viewBox: "0 0 18 18"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    transform: "translate(-127 -122)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.583,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.583,13.485,11,11,11Z",
      transform: "translate(125 120)",
      fill: "currentColor",
      fillRule: "evenodd"
    })
  })
}));
;// CONCATENATED MODULE: ./src/components/icons/user-icon.tsx
function user_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function user_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_icon_ownKeys(Object(source), true).forEach(function (key) { user_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function user_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const UserIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", user_icon_objectSpread(user_icon_objectSpread({
  width: "16.577",
  height: "18.6",
  viewBox: "0 0 16.577 18.6"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    transform: "translate(-95.7 -121.203)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z",
      transform: "translate(7819 -2793.5)",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "0.6"
    })
  })
}));
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(7473);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(8184);
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(7349);
// EXTERNAL MODULE: ./src/lib/locals.tsx
var locals = __webpack_require__(5728);
;// CONCATENATED MODULE: ./src/components/layouts/mobile-navigation.tsx



















const MobileNavigation = () => {
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();
  const [isAuthorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const [_, setDrawerView] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);
  const isHomePage = useIsHomePage();
  const {
    isRTL
  } = (0,locals/* useIsRTL */.S)();
  const [, setDisplayMobileHeaderSearch] = (0,external_jotai_.useAtom)(displayMobileHeaderSearchAtom);
  const {
    totalUniqueItems
  } = (0,cart_context/* useCart */.jD)();

  function handleSidebar(view) {
    setDrawerView({
      display: true,
      view: view
    });
  }

  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }

  function toggleMobileSearch() {
    setDisplayMobileHeaderSearch(prev => !prev);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "visible lg:hidden h-12 md:h-14",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "h-12 md:h-14 w-full py-1.5 px-2 flex justify-between fixed start-0 bottom-0 z-10 bg-light shadow-400",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => handleSidebar('MAIN_MENU_VIEW'),
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-burger-menu')
        }), /*#__PURE__*/jsx_runtime_.jsx(NavbarIcon, {
          className: `${isRTL && 'transform rotate-180'}`
        })]
      }), isHomePage && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: toggleMobileSearch,
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-search')
        }), /*#__PURE__*/jsx_runtime_.jsx(search_icon/* SearchIcon */.W, {
          width: "17.05",
          height: "18"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => router.push('/'),
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-home')
        }), /*#__PURE__*/jsx_runtime_.jsx(HomeIcon, {})]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => handleSidebar('cart'),
        className: "flex p-2 product-cart h-full relative items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-cart')
        }), /*#__PURE__*/jsx_runtime_.jsx(ShoppingBagIcon, {}), totalUniqueItems > 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-accent py-1 px-1.5 text-10px leading-none font-semibold text-light rounded-full absolute top-0 end-0 mt-0.5 -me-0.5",
          children: totalUniqueItems
        })]
      }), isAuthorize ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => handleSidebar('AUTH_MENU_VIEW'),
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-user')
        }), /*#__PURE__*/jsx_runtime_.jsx(UserIcon, {})]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: handleJoin,
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-user')
        }), /*#__PURE__*/jsx_runtime_.jsx(UserIcon, {})]
      })]
    })
  });
};

/* harmony default export */ const mobile_navigation = (MobileNavigation);
;// CONCATENATED MODULE: ./src/components/layouts/layout.tsx







const SiteLayout = ({
  children
}) => {
  const {
    layout
  } = (0,use_layout/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col min-h-screen transition-colors duration-150 bg-gray-100",
    children: [layout === 'minimal' ? /*#__PURE__*/jsx_runtime_.jsx(header_minimal, {}) : /*#__PURE__*/jsx_runtime_.jsx(header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(mobile_navigation, {})]
  });
};

const getLayout = page => /*#__PURE__*/jsx_runtime_.jsx(SiteLayout, {
  children: page
});
/* harmony default export */ const layout = ((/* unused pure expression or super */ null && (SiteLayout)));

/***/ }),

/***/ 4927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7022);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["className", "label", "onSubmit", "onClearSearch", "variant", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const classes = {
  normal: 'bg-light ps-6 pe-14 rounded-te-none rounded-be-none  border border-e-0 border-transparent focus:border-accent',
  minimal: 'bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light',
  'with-shadow': 'bg-light ps-10 pe-12 md:ps-14 focus:bg-light '
};

const SearchBox = _ref => {
  let {
    className,
    label,
    onSubmit,
    onClearSearch,
    variant = 'normal',
    value
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
    onSubmit: onSubmit,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('w-full', className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('rounded md:rounded-lg flex relative', {
        'h-14 shadow-900': variant === 'normal',
        'h-11 md:h-12': variant === 'minimal',
        'h-16 shadow-downfall': variant === 'with-shadow'
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
        htmlFor: label,
        className: "sr-only",
        children: label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread({
        id: label,
        type: "text",
        value: value,
        autoComplete: "off",
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded-lg focus:outline-none focus:ring-0', classes[variant])
      }, rest)), value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        type: "button",
        onClick: onClearSearch,
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cursor-pointer h-full w-10 md:w-14 flex items-center justify-center absolute text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover', {
          'end-36': variant === 'normal',
          'end-0': variant !== 'normal'
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "sr-only",
          children: t('common:text-close')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__/* .CloseIcon */ .T, {
          className: "w-3.5 h-3.5 md:w-3 md:h-3"
        })]
      }), variant === 'normal' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "h-full px-8 flex items-center rounded-lg rounded-ts-none rounded-bs-none bg-accent text-light font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover focus:bg-accent-hover",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__/* .SearchIcon */ .W, {
          className: "w-4 h-4 me-2.5"
        }), t('common:text-search')]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "h-full w-10 md:w-14 flex items-center justify-center absolute start-0 text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "sr-only",
          children: t('common:text-search')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__/* .SearchIcon */ .W, {
          className: "w-4 h-4"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);

/***/ }),

/***/ 2795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ search_with_suggestion)
});

// EXTERNAL MODULE: ./src/components/ui/search/search-box.tsx
var search_box = __webpack_require__(4927);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(5903);
// EXTERNAL MODULE: ./src/framework/rest/products/products.query.ts
var products_query = __webpack_require__(65);
// EXTERNAL MODULE: ./src/framework/rest/utils/use-homepage.ts
var use_homepage = __webpack_require__(3585);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/framework/rest/suggestions/suggestion.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const AutoSuggestion = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(876), __webpack_require__.e(3967)]).then(__webpack_require__.bind(__webpack_require__, 3967)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3967)],
    modules: ["../framework/rest/suggestions/suggestion.tsx -> " + '@components/ui/auto-suggestion']
  }
});

const AutoSuggestionBox = ({
  shopId,
  searchQuery,
  className,
  visible
}) => {
  var _ref, _query$pages, _data$pages, _data$pages$, _data$pages2, _data$pages2$, _data$pages2$$data, _data$pages3;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    homePage
  } = (0,use_homepage/* default */.Z)();
  const group = (_ref = (_query$pages = query.pages) === null || _query$pages === void 0 ? void 0 : _query$pages[0]) !== null && _ref !== void 0 ? _ref : homePage === null || homePage === void 0 ? void 0 : homePage.slug;
  const {
    isFetching: loading,
    isError,
    data,
    error
  } = (0,products_query/* useProductsQuery */.kN)(_objectSpread(_objectSpread({}, Boolean(shopId) ? {
    shop_id: Number(shopId)
  } : {
    type: group
  }), {}, {
    name: searchQuery,
    categories: query === null || query === void 0 ? void 0 : query.category
  }), {
    enabled: Boolean(group)
  });
  if (isError && error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });
  return /*#__PURE__*/jsx_runtime_.jsx(AutoSuggestion, {
    suggestions: data === null || data === void 0 ? void 0 : (_data$pages = data.pages) === null || _data$pages === void 0 ? void 0 : (_data$pages$ = _data$pages[0]) === null || _data$pages$ === void 0 ? void 0 : _data$pages$.data,
    notFound: !loading && !(data !== null && data !== void 0 && (_data$pages2 = data.pages) !== null && _data$pages2 !== void 0 && (_data$pages2$ = _data$pages2[0]) !== null && _data$pages2$ !== void 0 && (_data$pages2$$data = _data$pages2$.data) !== null && _data$pages2$$data !== void 0 && _data$pages2$$data.length),
    visible: visible,
    className: className,
    showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages3 = data.pages) !== null && _data$pages3 !== void 0 && _data$pages3.length)
  });
};

/* harmony default export */ const suggestion = (AutoSuggestionBox);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/search/search-with-suggestion.tsx
const _excluded = ["label", "className", "variant"];

function search_with_suggestion_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function search_with_suggestion_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_with_suggestion_ownKeys(Object(source), true).forEach(function (key) { search_with_suggestion_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_with_suggestion_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_with_suggestion_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const SearchWithSuggestion = _ref => {
  let {
    label,
    className,
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    0: searchTerm,
    1: updateSearchTerm
  } = (0,external_react_.useState)('');

  const handleOnChange = e => {
    const {
      value: inputValue
    } = e.target;
    updateSearchTerm(inputValue);
  };

  const onSearch = e => {
    e.preventDefault();
    if (!searchTerm) return;
  };

  function clearSearch() {
    updateSearchTerm('');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('w-full relative', className),
    children: [/*#__PURE__*/jsx_runtime_.jsx(search_box/* default */.Z, search_with_suggestion_objectSpread({
      label: label,
      onSubmit: onSearch,
      onClearSearch: clearSearch,
      onChange: handleOnChange,
      value: searchTerm,
      name: "search",
      placeholder: t('common:text-search-placeholder-minimal'),
      variant: variant
    }, props)), /*#__PURE__*/jsx_runtime_.jsx(suggestion, {
      searchQuery: searchTerm,
      visible: Boolean(searchTerm.length > 2)
    })]
  });
};

/* harmony default export */ const search_with_suggestion = (SearchWithSuggestion);

/***/ }),

/***/ 920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dropdown_menu)
});

// NAMESPACE OBJECT: ./src/components/icons/groups/index.tsx
var groups_namespaceObject = {};
__webpack_require__.r(groups_namespaceObject);
__webpack_require__.d(groups_namespaceObject, {
  "Bakery": () => (Bakery),
  "BookIcon": () => (BookIcon),
  "DressIcon": () => (DressIcon),
  "FacialCare": () => (FacialCare),
  "FruitsVegetable": () => (FruitsVegetable),
  "FurnitureIcon": () => (FurnitureIcon),
  "Handbag": () => (Handbag),
  "MedicineIcon": () => (MedicineIcon),
  "Restaurant": () => (Restaurant)
});

// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(8778);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/lib/get-icon.tsx
var get_icon = __webpack_require__(4318);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/caret-down.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CaretDown = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    width: "10",
    height: "6",
    viewBox: "0 0 10 6"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M128,192l5,5,5-5Z",
      transform: "translate(-128 -192)",
      fill: "currentColor"
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/fruits-vegetable.tsx
function fruits_vegetable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function fruits_vegetable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fruits_vegetable_ownKeys(Object(source), true).forEach(function (key) { fruits_vegetable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fruits_vegetable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fruits_vegetable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FruitsVegetable = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", fruits_vegetable_objectSpread(fruits_vegetable_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.347",
    height: "24.101",
    viewBox: "0 0 20.347 24.101",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Grocery",
      transform: "translate(-39.481 0.052)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17386",
        "data-name": "Path 17386",
        d: "M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z",
        transform: "translate(-294.289 -380.346)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17387",
        "data-name": "Path 17387",
        d: "M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z",
        transform: "translate(-0.5)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/facial-care.tsx
function facial_care_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function facial_care_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { facial_care_ownKeys(Object(source), true).forEach(function (key) { facial_care_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { facial_care_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function facial_care_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FacialCare = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", facial_care_objectSpread(facial_care_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.814",
    height: "24",
    viewBox: "0 0 18.814 24",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Makup",
      transform: "translate(-507.818 -485.385)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17426",
        "data-name": "Path 17426",
        d: "M514.58,502.867a.721.721,0,0,0-.448-.579.411.411,0,0,0-.125-.041v-4.5a.591.591,0,0,0-.29-.5V494.9a6.977,6.977,0,0,0-.675-2.868l0-.009,0-.005a3.2,3.2,0,0,0-.272-.449,1.188,1.188,0,0,0-1.347-.362,2.261,2.261,0,0,0-1.492,1.22l-.022.045a6.315,6.315,0,0,0-.338.874c0,.007-.006.012-.008.019s0,.01,0,.015a7.074,7.074,0,0,0-.292,2.044v1.707c-.336.144-.509.35-.509.613v4.486c-.354.155-.545.364-.57.622,0,.006,0,.011,0,.017a71.956,71.956,0,0,0-.289,10.391c0,.787,1.5,1.38,3.49,1.38s3.49-.593,3.489-1.355a72.1,72.1,0,0,0-.288-10.417ZM512.8,494a5.335,5.335,0,0,1,.085.9v2.779a6.961,6.961,0,0,1-1.5.142,7.622,7.622,0,0,1-1.284-.1v-2.3a6.715,6.715,0,0,1,.043-.751,1.974,1.974,0,0,0,.891.2A2.569,2.569,0,0,0,512.8,494Zm-3.209,4.464a8.613,8.613,0,0,0,3.585,0v4.508a10.2,10.2,0,0,1-3.585,0Zm1.087-5.676a1.447,1.447,0,0,1,.938-.773c.172-.042.394-.067.479.048a2.406,2.406,0,0,1,.206.344v0a.832.832,0,0,1-.006.876,1.743,1.743,0,0,1-1.264.749.87.87,0,0,1-.655-.213c-.017-.023-.055-.077-.019-.21a5.462,5.462,0,0,1,.3-.781Zm3.364,20.4a6.081,6.081,0,0,1-5.316,0,71.567,71.567,0,0,1,.219-9.528,10,10,0,0,0,4.877,0A71.829,71.829,0,0,1,514.038,513.194Z",
        transform: "translate(0 -5.256)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17427",
        "data-name": "Path 17427",
        d: "M618.005,487.378c-.617-1.323-2.2-1.993-4.7-1.993s-4.08.671-4.7,1.994c-1.3,2.781,2.328,7.41,2.923,8.139l-.194,12.539c0,.514.524,1.279,1.969,1.279s1.969-.765,1.969-1.286l-.195-12.532C615.675,494.791,619.3,490.161,618.005,487.378Zm-5.671,10.394.026-1.66a3.555,3.555,0,0,0,.65.1.415.415,0,0,0,.088.01c.013,0,.024,0,.037,0,.058,0,.116,0,.174,0a3.918,3.918,0,0,0,.949-.107l.026,1.66a2.931,2.931,0,0,1-1.949,0Zm-2.966-10.041c.468-1,1.794-1.511,3.94-1.511s3.472.508,3.94,1.511c.836,1.792-1.112,5.009-2.374,6.7a6.637,6.637,0,0,0,.23-1.731.417.417,0,0,0-.417-.417h0a.418.418,0,0,0-.417.417c0,.657-.2,2.461-1.017,2.665a2.056,2.056,0,0,1-.49-1.175.417.417,0,0,0-.826.123,4.453,4.453,0,0,0,.112.518C610.835,493.3,608.46,489.678,609.368,487.731Zm3.94,20.771c-.9,0-1.126-.359-1.134-.438l.146-9.408a4.2,4.2,0,0,0,1.976,0l.146,9.4C614.435,508.143,614.208,508.5,613.308,508.5Z",
        transform: "translate(-91.651)",
        fill: "currentColor"
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/handbag-icon.tsx
function handbag_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function handbag_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { handbag_icon_ownKeys(Object(source), true).forEach(function (key) { handbag_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { handbag_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function handbag_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Handbag = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", handbag_icon_objectSpread(handbag_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "23.878",
    height: "24.3",
    viewBox: "0 0 23.878 24.3",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      id: "Bags",
      d: "M334.087,36.795h6.808a2.594,2.594,0,0,1,1.833.763h0a2.592,2.592,0,0,1,.763,1.833v2.718h3.328a2.384,2.384,0,0,1,1.686.7h0a2.383,2.383,0,0,1,.7,1.686v3.227a5.569,5.569,0,0,1-.606,2.532v6.066a4.48,4.48,0,0,1-4.469,4.469H330.795a4.567,4.567,0,0,1-4.556-4.556V50.26a5.569,5.569,0,0,1-.606-2.532V44.5a2.384,2.384,0,0,1,.7-1.687h0a2.382,2.382,0,0,1,1.688-.7h3.328v-2.58a2.742,2.742,0,0,1,2.736-2.736Zm13.29,15.077a5.6,5.6,0,0,1-3.443,1.462l-.048,0h-.009l-.061,0h-.01l-.066,0h-3.826v.718a1.838,1.838,0,0,1-.541,1.3v0a1.841,1.841,0,0,1-1.3.541h-1.245a1.891,1.891,0,0,1-1.339-.556v0a1.887,1.887,0,0,1-.556-1.337v-.668H331.1l-.066,0h-.01l-.06,0h-.009l-.048,0a5.6,5.6,0,0,1-3.443-1.462v4.367a3.339,3.339,0,0,0,3.328,3.328h13.341a3.252,3.252,0,0,0,3.241-3.241V51.872Zm-3.883-8.533H328.022a1.159,1.159,0,0,0-.82.342h0a1.158,1.158,0,0,0-.339.82v3.227a4.405,4.405,0,0,0,4.161,4.383h0l.11,0h12.574l.11,0h0a4.4,4.4,0,0,0,4.161-4.383V44.5a1.157,1.157,0,0,0-.339-.82l0,0a1.157,1.157,0,0,0-.82-.339Zm-4.807,10.006h-2.53v.668a.669.669,0,0,0,.2.472h0a.667.667,0,0,0,.471.2h1.245a.615.615,0,0,0,.436-.182h0a.62.62,0,0,0,.18-.437v-.718Zm2.208-15.322h-6.808a1.515,1.515,0,0,0-1.509,1.509v2.58h9.688V39.394a1.365,1.365,0,0,0-.4-.968l0,0A1.365,1.365,0,0,0,340.895,38.023Z",
      transform: "translate(-325.483 -36.645)",
      fill: "currentColor",
      stroke: "#fff",
      strokeWidth: "0.3",
      fillRule: "evenodd"
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/dress-icon.tsx
function dress_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function dress_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dress_icon_ownKeys(Object(source), true).forEach(function (key) { dress_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dress_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dress_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DressIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", dress_icon_objectSpread(dress_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.735",
    height: "24.503",
    viewBox: "0 0 14.735 24.503",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      id: "Cloth",
      transform: "translate(-255.389 -266.539)",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17425",
        "data-name": "Path 17425",
        d: "M266.6,273.033c.216-.528.472-1.457.483-1.5a.2.2,0,0,0-.012-.138c-.658-1.409.329-3.9.339-3.925a.2.2,0,0,0-.05-.222,9.5,9.5,0,0,0-1.271-.928.2.2,0,0,0-.3.127c-.339,1.475-1.972,2.824-2.776,3.413a7.168,7.168,0,0,0-.887-.508c-.1-.05-.194-.1-.23-.121a4.167,4.167,0,0,1-1.7-2.76.2.2,0,0,0-.282-.162,5.566,5.566,0,0,0-1.558.942.2.2,0,0,0,0,.227,4.777,4.777,0,0,1,.241,4.008.2.2,0,0,0,0,.125,12.874,12.874,0,0,0,.481,1.277c-.221,1.106-2.826,14.1-3.427,15.87a.2.2,0,0,0,.036.193c.047.056.506.551,2.217.664h.03a3.387,3.387,0,0,1,1.081.17,11.474,11.474,0,0,0,1.552.33,28.226,28.226,0,0,0,3.063.177,16.064,16.064,0,0,0,3.3-.3.2.2,0,0,0,.032-.013s.01,0,.015,0a23.834,23.834,0,0,1,2.73-.686.2.2,0,0,0,.158-.227A134.93,134.93,0,0,0,266.6,273.033Zm-.494-6.225a8.838,8.838,0,0,1,.881.647c-.2.551-.9,2.655-.311,4.042-.061.216-.256.893-.424,1.323h-.518c.21-.487-.209-.482-.441,0h-.086a9.474,9.474,0,0,0-1.866-2.7A7.861,7.861,0,0,0,266.108,266.808ZM259,271.547a5.249,5.249,0,0,0-.227-4.156,6.6,6.6,0,0,1,1.067-.6,4.476,4.476,0,0,0,1.835,2.781,3,3,0,0,0,.273.146,6,6,0,0,1,.958.565l0,0c.045.035.089.071.132.108a8.645,8.645,0,0,1,1.716,2.431h-3.622c-.208-.313-.684-.434-.464,0h-1.187a.231.231,0,0,0-.035-.089A10.391,10.391,0,0,1,259,271.547Zm8.085,17.96a45.2,45.2,0,0,0-1.04-9.177.2.2,0,0,0-.385.114c.834,2.83,1,8.178,1.026,9.188a21.687,21.687,0,0,1-6.073.085,10.977,10.977,0,0,1-1.485-.316,3.862,3.862,0,0,0-1.209-.185,3.8,3.8,0,0,1-1.843-.459c.65-2.122,2.92-13.4,3.347-15.533h6.816a135.764,135.764,0,0,1,3.2,15.711C268.948,289.038,267.708,289.307,267.086,289.507Z",
        transform: "translate(0 0.5)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.5"
      })
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/furniture-icon.tsx
function furniture_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function furniture_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { furniture_icon_ownKeys(Object(source), true).forEach(function (key) { furniture_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { furniture_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function furniture_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FurnitureIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", furniture_icon_objectSpread(furniture_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.1",
    height: "24.1",
    viewBox: "0 0 18.1 24.1",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Furniture",
      transform: "translate(-47.95 -583.95)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17415",
        "data-name": "Path 17415",
        d: "M66.684,585.288A1.5,1.5,0,0,0,65.2,584H58.8a1.5,1.5,0,0,0-1.485,1.288L56,596H68Zm-8.625.1a.753.753,0,0,1,.741-.638h6.4a.753.753,0,0,1,.741.638l1.212,9.862h-10.3Z",
        transform: "translate(-5)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_17416",
        "data-name": "Path 17416",
        d: "M65.25,608H64.5a.75.75,0,0,0-.75.75v.75a.75.75,0,0,0,.75.75v3h-.75a1.5,1.5,0,0,0-1.5-1.5H51.75a1.5,1.5,0,0,0-1.5,1.5H49.5v-3a.75.75,0,0,0,.75-.75v-.75a.75.75,0,0,0-.75-.75h-.75a.75.75,0,0,0-.75.75v.75a.75.75,0,0,0,.75.75v3a.75.75,0,0,0,.75.75h.952a1.5,1.5,0,0,0,1.3.75H55.5v1.5a.75.75,0,0,0,.75.75h.375v.75h-2.25a1.877,1.877,0,0,0-1.875,1.875v1.19a1.125,1.125,0,1,0,.75,0v-1.19a1.126,1.126,0,0,1,1.125-1.125h2.25v2.315a1.125,1.125,0,1,0,.75,0V618.5h2.25a1.126,1.126,0,0,1,1.125,1.125v1.19a1.125,1.125,0,1,0,.75,0v-1.19a1.877,1.877,0,0,0-1.875-1.875h-2.25V617h.375a.75.75,0,0,0,.75-.75v-1.5h3.75a1.5,1.5,0,0,0,1.3-.75H64.5a.75.75,0,0,0,.75-.75v-3a.75.75,0,0,0,.75-.75v-.75A.75.75,0,0,0,65.25,608Zm-16.5,1.5v-.75h.75v.75Zm4.125,12.75a.375.375,0,1,1,.375-.375A.376.376,0,0,1,52.875,622.25Zm8.25-.75a.375.375,0,1,1-.375.375A.376.376,0,0,1,61.125,621.5ZM57,622.25a.375.375,0,1,1,.375-.375A.376.376,0,0,1,57,622.25Zm.75-6h-1.5v-1.5h1.5Zm4.5-2.25H51.75a.75.75,0,0,1,0-1.5h10.5a.75.75,0,0,1,0,1.5Zm3-4.5H64.5v-.75h.75Z",
        transform: "translate(0 -15)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/book-icon.tsx
function book_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function book_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { book_icon_ownKeys(Object(source), true).forEach(function (key) { book_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { book_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function book_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const BookIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", book_icon_objectSpread(book_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24.6",
    height: "19.335",
    viewBox: "0 0 24.6 19.335",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Books",
      transform: "translate(-24.7 -30.187)",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        id: "Group_12308",
        "data-name": "Group 12308",
        transform: "translate(25 32.504)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
          id: "Group_12306",
          "data-name": "Group 12306",
          transform: "translate(0 0)",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17416",
            "data-name": "Path 17416",
            d: "M32.612,50.142h0a34.57,34.57,0,0,0-7.238.8h0l0,0V35a0,0,0,0,1,0,0h.583a0,0,0,0,0,0,0v-.357a0,0,0,0,0,0,0h-.771a.183.183,0,0,0-.183.183V51.164a.182.182,0,0,0,.183.183.181.181,0,0,0,.036,0,28.735,28.735,0,0,1,9.287-.669.006.006,0,0,0,.006,0,.005.005,0,0,0,0-.006Z",
            transform: "translate(-25 -34.629)",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.6"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("g", {
          id: "Group_12307",
          "data-name": "Group 12307",
          transform: "translate(14.922 0)",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17417",
            "data-name": "Path 17417",
            d: "M64.983,34.629h-.776V35H64.8V50.957c-.5-.063-1.009-.13-1.515-.2a47.178,47.178,0,0,0-6.073-.546l-.013,0-1.075.311a.048.048,0,0,0,.017.094,37.04,37.04,0,0,1,7.1.5c.576.076,1.152.152,1.724.223a.183.183,0,0,0,.205-.181V34.812A.183.183,0,0,0,64.983,34.629Z",
            transform: "translate(-56.088 -34.629)",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.6"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        id: "Group_12309",
        "data-name": "Group 12309",
        transform: "translate(26.919 30.542)",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          id: "Path_17418",
          "data-name": "Path 17418",
          d: "M49.16,30.842a.183.183,0,0,0-.166-.182c-.314-.029-7.587-.67-9.915,1.365-2.327-2.035-9.6-1.393-9.915-1.365a.183.183,0,0,0-.166.182v15.7a.183.183,0,0,0,.195.183c.073,0,7.272-.441,9.754,2.133a.187.187,0,0,0,.062.042h0a.186.186,0,0,0,.069.013.182.182,0,0,0,.069-.013h0a.187.187,0,0,0,.062-.042c2.481-2.573,9.682-2.138,9.754-2.133a.187.187,0,0,0,.137-.049.183.183,0,0,0,.058-.134Zm-19.8,15.51V31.011c1.122-.085,7.578-.49,9.531,1.336V48.314c-2.072-1.743-6.2-1.988-8.356-1.988C30.006,46.326,29.594,46.341,29.364,46.352Zm19.429,0c-1.16-.056-6.948-.212-9.531,1.962V32.347c1.954-1.827,8.409-1.421,9.531-1.336Z",
          transform: "translate(-28.998 -30.542)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.6"
        })
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/medicine-icon.tsx
function medicine_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function medicine_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { medicine_icon_ownKeys(Object(source), true).forEach(function (key) { medicine_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { medicine_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function medicine_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MedicineIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", medicine_icon_objectSpread(medicine_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24.2",
    height: "24.2",
    viewBox: "0 0 24.2 24.2",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Medicine",
      transform: "translate(-332.9 -1656.038)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
        id: "Group_12311",
        "data-name": "Group 12311",
        transform: "translate(333 1656.138)",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          id: "Path_17420",
          "data-name": "Path 17420",
          d: "M350.833,1680.138a6.126,6.126,0,0,1-4.361-1.806l-11.666-11.666a6.167,6.167,0,0,1,8.722-8.722l11.666,11.666a6.167,6.167,0,0,1-4.361,10.528Zm-11.666-23.214a5.381,5.381,0,0,0-3.805,9.186l11.666,11.666a5.381,5.381,0,0,0,7.61,0h0a5.381,5.381,0,0,0,0-7.61L342.972,1658.5A5.346,5.346,0,0,0,339.167,1656.924Z",
          transform: "translate(-333 -1656.138)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.2"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        id: "Group_12312",
        "data-name": "Group 12312",
        transform: "translate(340.524 1663.662)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("line", {
          id: "Line_3",
          "data-name": "Line 3",
          y1: "8.166",
          x2: "8.166",
          transform: "translate(0.393 0.393)",
          fill: "#fff",
          stroke: "currentColor",
          strokeWidth: "0.2"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          id: "Path_17421",
          "data-name": "Path 17421",
          d: "M536.93,1868.628a.393.393,0,0,1-.278-.671l8.166-8.166a.393.393,0,0,1,.556.556l-8.166,8.166A.392.392,0,0,1,536.93,1868.628Z",
          transform: "translate(-536.537 -1859.676)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.2"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        id: "Group_12313",
        "data-name": "Group 12313",
        transform: "translate(334.856 1659.668)",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          id: "Path_17423",
          "data-name": "Path 17423",
          d: "M386.6,1759.337a.392.392,0,0,1-.278-.115,10.88,10.88,0,0,1-2.936-4.287,3.121,3.121,0,0,1,.659-3.167.393.393,0,1,1,.579.532,2.353,2.353,0,0,0-.482,2.417,10.161,10.161,0,0,0,2.737,3.949.393.393,0,0,1-.278.671Z",
          transform: "translate(-383.216 -1751.641)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.2"
        })
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/restaurant-icon.tsx
function restaurant_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function restaurant_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { restaurant_icon_ownKeys(Object(source), true).forEach(function (key) { restaurant_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { restaurant_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function restaurant_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Restaurant = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", restaurant_icon_objectSpread(restaurant_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "9",
    height: "14",
    viewBox: "0 0 9.919 14",
    fill: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Food",
      transform: "translate(-760.678 -69.1)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_2721",
        "data-name": "Path 2721",
        d: "M773.859,140.736a5.543,5.543,0,0,1-4.261-2.051l.749,7.838a.482.482,0,0,0,.48.48h6.2a.482.482,0,0,0,.48-.48l.619-7.84A5.544,5.544,0,0,1,773.859,140.736Z",
        transform: "translate(-8.192 -63.904)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_2722",
        "data-name": "Path 2722",
        d: "M765.543,76.5c-.08,0-.159-.005-.238-.011l-.1-.007v-4.5c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v4.29L764,76.223c-.08-.027-.159-.057-.238-.088l-.066-.026V71.979a.629.629,0,0,1,.481-.666l-.062-.724c-.011-.127-.078-.192-.1-.192l-.895.09c-.012,0-.03.016-.047.048a.314.314,0,0,0-.027.163l.455,5.326-.163-.081c-.086-.044-.17-.088-.25-.134l-.048-.027-.149-1.75-.727-2.476c-.031-.106-.1-.163-.133-.163l-.862.294c-.03.01-.066.106-.031.225l.882,3.013-.081.043-.17-.2c-.08-.086-.151-.166-.216-.244l-.174-.217-.659-2.252a.786.786,0,0,1,.011-.49.508.508,0,0,1,.305-.319l.854-.293a.417.417,0,0,1,.134-.022.637.637,0,0,1,.559.489l.12.412L762.6,70.74a.777.777,0,0,1,.107-.476.488.488,0,0,1,.362-.242l.893-.089.042,0a.619.619,0,0,1,.542.616l.065.764h.149V69.769a.612.612,0,0,1,.529-.669h.9a.612.612,0,0,1,.529.669v1.822l.084-.885a.621.621,0,0,1,.543-.61l.048,0,.891.1a.489.489,0,0,1,.36.246.779.779,0,0,1,.1.477l-.075.783.029-.1a.637.637,0,0,1,.559-.489.416.416,0,0,1,.134.022l.855.293a.508.508,0,0,1,.3.319.786.786,0,0,1,.011.49l-.617,2.09-.156.187c-.067.08-.14.163-.224.253l-.162.163-.079-.046.819-2.786a.315.315,0,0,0,.005-.166c-.01-.035-.026-.055-.037-.059l-.856-.293c-.043,0-.109.056-.139.162l-1.247,4.261-.042.02-.126.056c-.079.034-.158.065-.238.094l-.137.051V73.41c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v3.059l-.094.009c-.079.008-.158.014-.238.018l-.107.005v-.88h-.164V76.5Zm.269-1.345V73.41a.63.63,0,0,1,.467-.665V69.769c0-.131-.064-.2-.091-.2h-.9c-.028,0-.091.076-.091.2v1.552a.636.636,0,0,1,.447.658v3.175Zm1.426-2.413a.612.612,0,0,1,.528.669V74.8l.254-.868.289-3.053a.287.287,0,0,0-.04-.188.056.056,0,0,0-.031-.024l-.9-.1c-.027,0-.093.068-.1.191l-.189,1.987Z",
        fill: "currentColor"
      })]
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/bakery-icon.tsx
function bakery_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bakery_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bakery_icon_ownKeys(Object(source), true).forEach(function (key) { bakery_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bakery_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bakery_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Bakery = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", bakery_icon_objectSpread(bakery_icon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    id: "Outline",
    viewBox: "0 0 512 512",
    width: "512",
    height: "512",
    fill: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M213.056,231.438a8,8,0,1,0,5.888-14.876c-18.527-7.335-42.3-11.374-66.944-11.374s-48.417,4.039-66.944,11.374a8,8,0,1,0,5.888,14.876c16.7-6.61,38.382-10.25,61.056-10.25S196.357,224.828,213.056,231.438Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M416,16H384c-23.366,0-43.613,25.444-58.552,73.58-7.08,22.815-12.528,49.446-16.163,78.42H144v.118c-32.288.855-62.486,6.86-85.746,17.149C31.006,197.319,16,214.135,16,232.617c0,15.891,11.317,30.777,32,42.266V422.049a65.688,65.688,0,0,0-23.435,38.717,29.684,29.684,0,0,0,6.2,24.659A28.79,28.79,0,0,0,53.047,496H346.953a28.681,28.681,0,0,0,17.852-6.229A34.1,34.1,0,0,0,384,496h32c23.366,0,43.613-25.444,58.552-73.58C488.383,377.854,496,318.751,496,256s-7.617-121.854-21.448-166.42C459.613,41.444,439.366,16,416,16ZM53.047,480a12.848,12.848,0,0,1-9.929-4.743,13.738,13.738,0,0,1-2.851-11.416,49.465,49.465,0,0,1,29.246-36.168,111.883,111.883,0,0,0-4.867,19.063A47.027,47.027,0,0,0,71.416,480ZM104,480H99.361c-4.729,0-9.3-2.31-12.859-6.5-5.263-6.195-7.531-15.233-6.067-24.177,4-24.452,16.7-44.92,33.932-56.125a86.14,86.14,0,0,0-.505,38.033l9.6,45.7a23.548,23.548,0,0,0,.886,3.067Zm18.94-108.547c-18.246,5.984-33.872,19.364-44.576,37.26A63.07,63.07,0,0,0,64,412.654V270.061a8,8,0,0,0-4.415-7.152C41.8,253.993,32,243.235,32,232.617,32,221.024,43.929,209.1,64.727,199.9,87.905,189.646,118.9,184,152,184s64.1,5.646,87.273,15.9c20.8,9.2,32.727,21.125,32.727,32.718,0,10.618-9.8,21.376-27.585,30.292A8,8,0,0,0,240,270.061v66.433a82.933,82.933,0,0,0-19.088-6.381,104.007,104.007,0,0,0-41.824,0,82.889,82.889,0,0,0-52.978,36.075C124.979,367.91,123.938,369.673,122.94,371.453Zm147.539,56.485-9.6,45.707A8.037,8.037,0,0,1,253.05,480H146.95a8.037,8.037,0,0,1-7.829-6.355l-9.6-45.707a69.688,69.688,0,0,1,9.962-52.964,66.994,66.994,0,0,1,42.8-29.184,88.1,88.1,0,0,1,35.426,0,66.994,66.994,0,0,1,42.8,29.184A69.688,69.688,0,0,1,270.479,427.938ZM313.5,473.5c-3.563,4.193-8.13,6.5-12.859,6.5H275.651a23.579,23.579,0,0,0,.886-3.066l9.6-45.706a86.14,86.14,0,0,0-.5-38.033c17.233,11.2,29.929,31.674,33.932,56.126C321.029,458.265,318.761,467.3,313.5,473.5ZM277.06,371.453c-1-1.78-2.039-3.543-3.17-5.265A84.568,84.568,0,0,0,256,346.53V274.883c20.683-11.489,32-26.375,32-42.266,0-18.482-15.006-35.3-42.254-47.35-.982-.435-2-.848-3-1.267h64.745C305.194,206.984,304,231.205,304,256c0,56.555,6.13,109.782,17.4,152.319C310.705,390.619,295.172,377.393,277.06,371.453Zm79.822,103.8A12.848,12.848,0,0,1,346.953,480H328.584a47.028,47.028,0,0,0,6.77-33.265,111.965,111.965,0,0,0-4.867-19.062,49.463,49.463,0,0,1,29.246,36.169A13.737,13.737,0,0,1,356.882,475.257ZM384,480a18.245,18.245,0,0,1-9.814-3.218,29.809,29.809,0,0,0,1.249-16.016A65.552,65.552,0,0,0,339.708,414.3a401.074,401.074,0,0,1-9.879-42.129c11.047-3.1,35.55-7.273,67.641,3.423v0a8,8,0,1,0,5.058-15.17v0l-.089-.029-.113-.035c-34.435-11.43-61.2-7.762-75.142-4.084a677.754,677.754,0,0,1-7.164-94.85c9.779-3.326,35.077-9.281,69.448,2.176v0a8,8,0,1,0,5.058-15.17v0l-.088-.028-.116-.037c-33.673-11.174-60.012-7.529-74.241-3.655a669.018,669.018,0,0,1,6.836-87.643c9.119-3,35.244-9.227,70.549,2.541v0a8,8,0,1,0,5.058-15.17v0l-.089-.029-.113-.035c-32.393-10.752-57.989-8.143-72.517-4.733a393.693,393.693,0,0,1,10.918-45.292C352.84,55.3,369.016,32,384,32s31.16,23.3,43.271,62.322C440.639,137.4,448,194.812,448,256s-7.361,118.605-20.729,161.678C415.16,456.7,398.984,480,384,480Zm75.271-62.322C447.16,456.7,430.984,480,416,480h-1.859c10.781-12.331,20.367-31.659,28.411-57.58C456.383,377.854,464,318.751,464,256s-7.617-121.854-21.448-166.42c-8.044-25.921-17.63-45.249-28.411-57.58H416c14.984,0,31.16,23.3,43.271,62.322C472.639,137.4,480,194.812,480,256S472.639,374.605,459.271,417.678Z",
      fill: "currentColor"
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/icons/groups/index.tsx









// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
;// CONCATENATED MODULE: ./src/components/icons/arrow-down.tsx
function arrow_down_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function arrow_down_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { arrow_down_ownKeys(Object(source), true).forEach(function (key) { arrow_down_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { arrow_down_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function arrow_down_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ArrowDownIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", arrow_down_objectSpread(arrow_down_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 7.2"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z",
    fill: "currentColor"
  })
}));
;// CONCATENATED MODULE: ./src/components/layouts/menu/groups-menu.tsx













const GroupsMenu = ({
  className,
  groups,
  defaultGroup,
  variant = 'colored'
}) => {
  var _groups$find;

  const router = (0,router_.useRouter)();
  const selectedMenu = (_groups$find = groups === null || groups === void 0 ? void 0 : groups.find(type => router.asPath.includes(type.slug))) !== null && _groups$find !== void 0 ? _groups$find : defaultGroup;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
    as: "div",
    className: "relative inline-block text-left",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Button, {
      className: external_classnames_default()('flex items-center flex-shrink-0 text-sm md:text-base font-semibold h-11 focus:outline-none text-heading xl:px-4', {
        'bg-gray-50 border border-border-200 rounded-lg px-3': variant === 'minimal',
        'bg-light xl:border border-border-200 xl:text-accent xl:min-w-150 rounded': variant === 'colored'
      }, className),
      children: ({
        open
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [variant === 'colored' && (selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.icon) && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex w-5 h-5 me-2 items-center justify-center",
          children: (0,get_icon/* getIcon */.q)({
            iconList: groups_namespaceObject,
            iconName: selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.icon,
            className: 'max-h-full max-w-full'
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "whitespace-nowrap",
          children: selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "flex ps-2.5 pt-1 ms-auto",
          children: [variant === 'colored' && /*#__PURE__*/jsx_runtime_.jsx(CaretDown, {
            className: open ? 'transform rotate-180' : undefined
          }), variant === 'minimal' && /*#__PURE__*/jsx_runtime_.jsx(ArrowDownIcon, {
            className: external_classnames_default()('h-3 w-3', {
              'transform rotate-180': open
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
      as: external_react_.Fragment,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Items, {
        as: "ul",
        className: external_classnames_default()('absolute  mt-2  py-2 w-48 h-56 lg:h-auto min-h-40 max-h-56 sm:max-h-72 bg-light rounded shadow-700 focus:outline-none', {
          'border border-border-200 end-0 origin-top-end': variant === 'minimal',
          'end-0 xl:end-auto xl:start-0 origin-top-end xl:origin-top-start': variant !== 'minimal'
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
          className: "w-full h-full",
          options: {
            scrollbars: {
              autoHide: 'never'
            }
          },
          children: groups === null || groups === void 0 ? void 0 : groups.map(({
            id,
            name,
            slug,
            icon
          }) => /*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Item, {
            children: ({
              active
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
              href: `/${slug}`,
              className: external_classnames_default()('flex space-s-4 items-center w-full px-5 py-2.5 text-sm font-semibold capitalize  transition duration-200 hover:text-accent focus:outline-none', active ? 'text-accent' : 'text-body-dark'),
              children: [icon && variant === 'colored' && /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "flex w-5 h-5 items-center justify-center",
                children: (0,get_icon/* getIcon */.q)({
                  iconList: groups_namespaceObject,
                  iconName: icon,
                  className: 'max-h-full max-w-full'
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: name
              })]
            })
          }, id))
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./src/framework/rest/utils/use-homepage.ts
var use_homepage = __webpack_require__(3585);
// EXTERNAL MODULE: ./src/framework/rest/groups/groups.query.ts
var groups_query = __webpack_require__(7925);
;// CONCATENATED MODULE: ./src/framework/rest/groups/dropdown-menu.tsx





const GroupsDropdownMenu = ({
  variant
}) => {
  const {
    isLoading: loading,
    data,
    error
  } = (0,groups_query/* useGroupsQuery */.RW)();
  const {
    homePage
  } = (0,use_homepage/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx(GroupsMenu, {
    groups: data === null || data === void 0 ? void 0 : data.types,
    defaultGroup: homePage,
    variant: variant
  });
};

/* harmony default export */ const dropdown_menu = (GroupsDropdownMenu);

/***/ }),

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



const useLayout = () => {
  var _page$settings;

  const {
    data
  } = (0,_framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__/* .useGroupsQuery */ .RW)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const regex = /^\/$|^\/\?(.*)/;

  if (regex.test(router === null || router === void 0 ? void 0 : router.asPath)) {
    var _data$types$find, _data$types, _homePage$settings;

    const homePage = (_data$types$find = data === null || data === void 0 ? void 0 : data.types.find(type => {
      var _type$settings;

      return type === null || type === void 0 ? void 0 : (_type$settings = type.settings) === null || _type$settings === void 0 ? void 0 : _type$settings.isHome;
    })) !== null && _data$types$find !== void 0 ? _data$types$find : data === null || data === void 0 ? void 0 : (_data$types = data.types) === null || _data$types === void 0 ? void 0 : _data$types[0];
    return {
      layout: homePage === null || homePage === void 0 ? void 0 : (_homePage$settings = homePage.settings) === null || _homePage$settings === void 0 ? void 0 : _homePage$settings.layoutType,
      page: homePage
    };
  }

  const page = data === null || data === void 0 ? void 0 : data.types.find(type => router.asPath.includes(type.slug));
  return {
    layout: page === null || page === void 0 ? void 0 : (_page$settings = page.settings) === null || _page$settings === void 0 ? void 0 : _page$settings.layoutType,
    page
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayout);

/***/ }),

/***/ 5728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useIsRTL)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const localeRTLList = ['ar', 'he'];
function useIsRTL() {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  if (locale && localeRTLList.includes(locale)) {
    return {
      isRTL: true,
      alignLeft: 'right',
      alignRight: 'left'
    };
  }

  return {
    isRTL: false,
    alignLeft: 'left',
    alignRight: 'right'
  };
}

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

/***/ }),

/***/ 4230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ displayHeaderSearchAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);

const displayHeaderSearchAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);

/***/ })

};
;