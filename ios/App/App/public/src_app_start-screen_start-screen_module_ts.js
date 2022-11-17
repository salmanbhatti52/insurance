"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_start-screen_start-screen_module_ts"],{

/***/ 22698:
/*!*************************************************************!*\
  !*** ./src/app/start-screen/start-screen-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreenPageRoutingModule": () => (/* binding */ StartScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _start_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen.page */ 16885);




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

/***/ 76748:
/*!*****************************************************!*\
  !*** ./src/app/start-screen/start-screen.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreenPageModule": () => (/* binding */ StartScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _start_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen-routing.module */ 22698);
/* harmony import */ var _start_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-screen.page */ 16885);







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

/***/ 16885:
/*!***************************************************!*\
  !*** ./src/app/start-screen/start-screen.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScreenPage": () => (/* binding */ StartScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _start_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen.page.html?ngResource */ 19849);
/* harmony import */ var _start_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-screen.page.scss?ngResource */ 82099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let StartScreenPage = class StartScreenPage {
    constructor(router, menuCtrl, navCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
    }
    gotoSignIn() {
        this.navCtrl.navigateRoot(['/sign-in-screen']);
    }
};
StartScreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
StartScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-start-screen',
        template: _start_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_start_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartScreenPage);



/***/ }),

/***/ 82099:
/*!****************************************************************!*\
  !*** ./src/app/start-screen/start-screen.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".main-div {\n  margin-top: 15%;\n  position: absolute;\n}\n\n.para-div {\n  position: fixed;\n  bottom: 33%;\n  left: 15%;\n}\n\n.span1 {\n  font-size: 42px;\n  font-weight: 400;\n  color: #A9BB46;\n  font-family: Bliss Pro;\n}\n\n.span2 {\n  font-size: 32px;\n  font-weight: 400;\n  color: #FFFFFF;\n  font-family: Bliss Pro;\n}\n\n.btn {\n  height: 48px;\n  width: 45%;\n  --border-radius: 12px;\n  font-size: 22px;\n  font-weight: 500;\n  text-transform: capitalize;\n  --background: #B0B500;\n  font-family: Bliss Pro;\n  position: fixed;\n  bottom: 40px;\n  left: 100px;\n}\n\nvideo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJQTtFQUlJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBSko7O0FBTUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFRQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FBUEYiLCJmaWxlIjoic3RhcnQtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiB7XG4gICAgbWFyZ2luLXRvcDoxNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9mYW1pbHkucG5nKSAwIDAvMTAwJSBuby1yZXBlYXQgIWltcG9ydGFudDtcbi8vIH1cbi5wYXJhLWRpdntcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDkwJTtcbiAgICAvLyBtYXJnaW46IDU1JSBhdXRvIDIwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzMyU7XG4gICAgbGVmdDogMTUlO1xuXG59XG4uc3BhbjF7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNBOUJCNDY7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cbi5zcGFuMntcblxuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICAvLyBmb250LXN0eWxlOiBpdGFsaWM7XG5cbn1cbi5idG57XG4gICAgLy8gbWFyZ2luOiA2MHB4IGF1dG8gMTJweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQjBCNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiAxMDBweDtcbn1cblxuXG52aWRlbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 19849:
/*!****************************************************************!*\
  !*** ./src/app/start-screen/start-screen.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>start-screen</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <!-- <video\n    autoplay\n    loop\n    muted=\"muted\"\n    src=\"assets/shutterstock-1047139603-1.mp4\"\n  ></video> -->\n\n  <video preload=\"auto\" autoplay playsinline muted loop>\n    <source src=\"assets/shutterstock-1047139603-1.mp4\" />\n  </video>\n\n  <div class=\"main-div\">\n    <!-- <div style=\"text-align:center\">\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ; margin-top: 24.7px;\" alt=\"\">\n    </div> -->\n    <p class=\"para-div\">\n      <span class=\"span1\">Over 30 years</span><br />\n      <span class=\"span2\"\n        >of providing reliable insurance cover for everyday life</span\n      >\n    </p>\n    <div style=\"text-align: center\">\n      <ion-button class=\"btn\" (click)=\"gotoSignIn()\">Get Started</ion-button>\n    </div>\n  </div>\n</ion-content>\n<!-- <ion-footer>\n\n\n</ion-footer>  -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_start-screen_start-screen_module_ts.js.map