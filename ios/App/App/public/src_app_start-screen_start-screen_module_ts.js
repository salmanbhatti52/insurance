"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_start-screen_start-screen_module_ts"],{

/***/ 2698:
/*!*************************************************************!*\
  !*** ./src/app/start-screen/start-screen-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreenPageRoutingModule": () => (/* binding */ StartScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _start_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen.page */ 6885);




const routes = [
    {
        path: '',
        component: _start_screen_page__WEBPACK_IMPORTED_MODULE_0__.StartScreenPage
    }
];
let StartScreenPageRoutingModule = class StartScreenPageRoutingModule {
};
StartScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartScreenPageRoutingModule);



/***/ }),

/***/ 6748:
/*!*****************************************************!*\
  !*** ./src/app/start-screen/start-screen.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreenPageModule": () => (/* binding */ StartScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _start_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen-routing.module */ 2698);
/* harmony import */ var _start_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-screen.page */ 6885);







let StartScreenPageModule = class StartScreenPageModule {
};
StartScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartScreenPageRoutingModule
        ],
        declarations: [_start_screen_page__WEBPACK_IMPORTED_MODULE_1__.StartScreenPage]
    })
], StartScreenPageModule);



/***/ }),

/***/ 6885:
/*!***************************************************!*\
  !*** ./src/app/start-screen/start-screen.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreenPage": () => (/* binding */ StartScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _start_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen.page.html?ngResource */ 9849);
/* harmony import */ var _start_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-screen.page.scss?ngResource */ 2099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let StartScreenPage = class StartScreenPage {
    constructor(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    gotoSignIn() {
        this.router.navigate(['/sign-in-screen']);
    }
};
StartScreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
StartScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-start-screen',
        template: _start_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_start_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartScreenPage);



/***/ }),

/***/ 2099:
/*!****************************************************************!*\
  !*** ./src/app/start-screen/start-screen.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".main-div {\n  margin-top: 15%;\n  position: absolute;\n}\n\n.para-div {\n  position: fixed;\n  bottom: 33%;\n  left: 15%;\n}\n\n.span1 {\n  font-size: 42px;\n  font-weight: 400;\n  color: #A9BB46;\n  font-family: Bliss Pro;\n}\n\n.span2 {\n  font-size: 32px;\n  font-weight: 400;\n  color: #FFFFFF;\n  font-family: Bliss Pro;\n}\n\n.btn {\n  height: 48px;\n  width: 45%;\n  --border-radius: 12px;\n  font-size: 22px;\n  font-weight: 500;\n  text-transform: capitalize;\n  --background: #B0B500;\n  font-family: Bliss Pro;\n  position: fixed;\n  bottom: 40px;\n  left: 100px;\n}\n\nvideo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJQTtFQUlJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBSko7O0FBTUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFRQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FBUEYiLCJmaWxlIjoic3RhcnQtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOjE1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4vLyBpb24tY29udGVudHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFtaWx5LnBuZykgMCAwLzEwMCUgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLnBhcmEtZGl2e1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6IDkwJTtcclxuICAgIC8vIG1hcmdpbjogNTUlIGF1dG8gMjAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMyU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcblxyXG59XHJcbi5zcGFuMXtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0E5QkI0NjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLnNwYW4ye1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIC8vIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIC8vIG1hcmdpbjogNjBweCBhdXRvIDEycHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjQjBCNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxudmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9849:
/*!****************************************************************!*\
  !*** ./src/app/start-screen/start-screen.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>start-screen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <video autoplay loop muted=\"muted\" src=\"assets/shutterstock-1047139603-1.mp4\"></video>\r\n  <div class=\"main-div\">\r\n    <!-- <div style=\"text-align:center\">\r\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ; margin-top: 24.7px;\" alt=\"\">\r\n    </div> -->\r\n    <p class=\"para-div\">\r\n      <span class=\"span1\">Over 30 years</span><br>\r\n      <span class=\"span2\">of providing reliable insurance cover for everyday life</span>\r\n    </p>\r\n    <div style=\"text-align: center;\">\r\n      <ion-button class=\"btn\" (click)=\"gotoSignIn()\">Get Started</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer>\r\n\r\n\r\n</ion-footer>  -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_start-screen_start-screen_module_ts.js.map