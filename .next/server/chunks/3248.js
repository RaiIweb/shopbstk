"use strict";
exports.id = 3248;
exports.ids = [3248];
exports.modules = {

/***/ 3248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1553);
/* harmony import */ var _components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5555);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2166);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
  password: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('error-password-required')
});

const EnterNewPasswordView = ({
  onSubmit,
  loading
}) => {
  var _errors$password;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(schema)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({
      label: "text-password"
    }, register('password')), {}, {
      error: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message,
      variant: "outline",
      className: "mb-5"
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      className: "w-full h-11",
      loading: loading,
      disabled: loading,
      children: t('text-reset-password')
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnterNewPasswordView);

/***/ })

};
;