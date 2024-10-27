"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_languagepage_languagepage_module_ts"],{

/***/ 53998:
/*!*************************************************************!*\
  !*** ./src/app/languagepage/languagepage-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagepagePageRoutingModule": () => (/* binding */ LanguagepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _languagepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagepage.page */ 60752);




const routes = [
    {
        path: '',
        component: _languagepage_page__WEBPACK_IMPORTED_MODULE_0__.LanguagepagePage
    }
];
let LanguagepagePageRoutingModule = class LanguagepagePageRoutingModule {
};
LanguagepagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LanguagepagePageRoutingModule);



/***/ }),

/***/ 84767:
/*!*****************************************************!*\
  !*** ./src/app/languagepage/languagepage.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagepagePageModule": () => (/* binding */ LanguagepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _languagepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagepage-routing.module */ 53998);
/* harmony import */ var _languagepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languagepage.page */ 60752);







let LanguagepagePageModule = class LanguagepagePageModule {
};
LanguagepagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _languagepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.LanguagepagePageRoutingModule
        ],
        declarations: [_languagepage_page__WEBPACK_IMPORTED_MODULE_1__.LanguagepagePage]
    })
], LanguagepagePageModule);



/***/ }),

/***/ 60752:
/*!***************************************************!*\
  !*** ./src/app/languagepage/languagepage.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagepagePage": () => (/* binding */ LanguagepagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _languagepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagepage.page.html?ngResource */ 14031);
/* harmony import */ var _languagepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languagepage.page.scss?ngResource */ 42951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let LanguagepagePage = class LanguagepagePage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
LanguagepagePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
LanguagepagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-languagepage',
        template: _languagepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_languagepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LanguagepagePage);



/***/ }),

/***/ 42951:
/*!****************************************************************!*\
  !*** ./src/app/languagepage/languagepage.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.toogleclass {\n  padding: 0px;\n  float: right;\n  --handle-width: 16px;\n  --handle-height: 16px;\n  width: 40px;\n  height: 24px;\n  --background: #5d5d5d;\n  --background-checked: #1A206D;\n  --handle-background-checked: #fff;\n  --handle-background: #c8c7cc;\n  margin-top: 1.5%;\n  --handle-spacing: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlcGFnZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFxpbnN1cmFuY2VcXHNyY1xcYXBwXFxsYW5ndWFnZXBhZ2VcXGxhbmd1YWdlcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNFRiIsImZpbGUiOiJsYW5ndWFnZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50b29nbGVjbGFzc3tcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC0taGFuZGxlLXdpZHRoOiAxNnB4O1xyXG4gIC0taGFuZGxlLWhlaWdodDogMTZweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNWQ1ZDVkO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjYzhjN2NjO1xyXG4gIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgLS1oYW5kbGUtc3BhY2luZzogNHB4O1xyXG59XHJcbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b29nbGVjbGFzcyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWhhbmRsZS13aWR0aDogMTZweDtcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJhY2tncm91bmQ6ICM1ZDVkNWQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNjOGM3Y2M7XG4gIG1hcmdpbi10b3A6IDEuNSU7XG4gIC0taGFuZGxlLXNwYWNpbmc6IDRweDtcbn0iXX0= */";

/***/ }),

/***/ 14031:
/*!****************************************************************!*\
  !*** ./src/app/languagepage/languagepage.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width:100% ;\" (click)=\"goback()\">\r\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Language</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"width: 90%; margin: 5% auto; text-align: center\">\r\n    <ion-label style=\"color: #000; font-size: 18px\">English</ion-label>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_languagepage_languagepage_module_ts.js.map