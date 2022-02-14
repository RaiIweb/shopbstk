"use strict";
exports.id = 9451;
exports.ids = [9451];
exports.modules = {

/***/ 9451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinButton)
/* harmony export */ });
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1553);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8184);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function JoinButton() {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();

  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    className: "font-semibold",
    size: "small",
    onClick: handleJoin,
    children: t('join-button')
  });
}

/***/ })

};
;