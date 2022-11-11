"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_termsandcondition_termsandcondition_module_ts"],{

/***/ 54467:
/*!***********************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandconditionPageRoutingModule": () => (/* binding */ TermsandconditionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _termsandcondition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsandcondition.page */ 75713);




const routes = [
    {
        path: '',
        component: _termsandcondition_page__WEBPACK_IMPORTED_MODULE_0__.TermsandconditionPage
    }
];
let TermsandconditionPageRoutingModule = class TermsandconditionPageRoutingModule {
};
TermsandconditionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsandconditionPageRoutingModule);



/***/ }),

/***/ 39857:
/*!***************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandconditionPageModule": () => (/* binding */ TermsandconditionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _termsandcondition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsandcondition-routing.module */ 54467);
/* harmony import */ var _termsandcondition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsandcondition.page */ 75713);







let TermsandconditionPageModule = class TermsandconditionPageModule {
};
TermsandconditionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _termsandcondition_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsandconditionPageRoutingModule
        ],
        declarations: [_termsandcondition_page__WEBPACK_IMPORTED_MODULE_1__.TermsandconditionPage]
    })
], TermsandconditionPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_termsandcondition_termsandcondition_module_ts.js.map