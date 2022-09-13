"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_splash1_splash1_module_ts"],{

/***/ 8380:
/*!***************************************************!*\
  !*** ./src/app/splash1/splash1-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Splash1PageRoutingModule": () => (/* binding */ Splash1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _splash1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash1.page */ 4950);




const routes = [
    {
        path: '',
        component: _splash1_page__WEBPACK_IMPORTED_MODULE_0__.Splash1Page
    }
];
let Splash1PageRoutingModule = class Splash1PageRoutingModule {
};
Splash1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Splash1PageRoutingModule);



/***/ }),

/***/ 9014:
/*!*******************************************!*\
  !*** ./src/app/splash1/splash1.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Splash1PageModule": () => (/* binding */ Splash1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _splash1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash1-routing.module */ 8380);
/* harmony import */ var _splash1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash1.page */ 4950);







let Splash1PageModule = class Splash1PageModule {
};
Splash1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Splash1PageRoutingModule
        ],
        declarations: [_splash1_page__WEBPACK_IMPORTED_MODULE_1__.Splash1Page]
    })
], Splash1PageModule);



/***/ }),

/***/ 4950:
/*!*****************************************!*\
  !*** ./src/app/splash1/splash1.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Splash1Page": () => (/* binding */ Splash1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _splash1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash1.page.html?ngResource */ 2596);
/* harmony import */ var _splash1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash1.page.scss?ngResource */ 7971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let Splash1Page = class Splash1Page {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            // if (localStorage.getItem('userid') != null) {
            //   this.router.navigate(['home-page-screen-after-login']);
            // } else {
            //   this.router.navigate(['sign-in-screen']);
            // }
            this.router.navigate(['start-screen']);
        }, 3000);
    }
    ngOnInit() {
    }
};
Splash1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Splash1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash1',
        template: _splash1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Splash1Page);



/***/ }),

/***/ 7971:
/*!******************************************************!*\
  !*** ./src/app/splash1/splash1.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGxhc2gxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2596:
/*!******************************************************!*\
  !*** ./src/app/splash1/splash1.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>splash1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content style=\"--background: #000 !important\">\n  <img src=\"assets/splash1.png\" style=\"margin-top:30%;\">\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_splash1_splash1_module_ts.js.map