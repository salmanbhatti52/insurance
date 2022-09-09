"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sub-products_sub-products_module_ts"],{

/***/ 5915:
/*!*************************************************************!*\
  !*** ./src/app/sub-products/sub-products-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubProductsPageRoutingModule": () => (/* binding */ SubProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sub_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-products.page */ 2004);




const routes = [
    {
        path: '',
        component: _sub_products_page__WEBPACK_IMPORTED_MODULE_0__.SubProductsPage
    }
];
let SubProductsPageRoutingModule = class SubProductsPageRoutingModule {
};
SubProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubProductsPageRoutingModule);



/***/ }),

/***/ 8565:
/*!*****************************************************!*\
  !*** ./src/app/sub-products/sub-products.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubProductsPageModule": () => (/* binding */ SubProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sub_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-products-routing.module */ 5915);
/* harmony import */ var _sub_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-products.page */ 2004);







let SubProductsPageModule = class SubProductsPageModule {
};
SubProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sub_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubProductsPageRoutingModule
        ],
        declarations: [_sub_products_page__WEBPACK_IMPORTED_MODULE_1__.SubProductsPage]
    })
], SubProductsPageModule);



/***/ }),

/***/ 2004:
/*!***************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubProductsPage": () => (/* binding */ SubProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sub_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-products.page.html?ngResource */ 4949);
/* harmony import */ var _sub_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-products.page.scss?ngResource */ 9805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SubProductsPage = class SubProductsPage {
    constructor() { }
    ngOnInit() {
    }
};
SubProductsPage.ctorParameters = () => [];
SubProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sub-products',
        template: _sub_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubProductsPage);



/***/ }),

/***/ 9805:
/*!****************************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItcHJvZHVjdHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4949:
/*!****************************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>sub-products</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    \r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sub-products_sub-products_module_ts.js.map