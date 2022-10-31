"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_languagepage_languagepage_module_ts"],{

/***/ 3998:
/*!*************************************************************!*\
  !*** ./src/app/languagepage/languagepage-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagepagePageRoutingModule": () => (/* binding */ LanguagepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _languagepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagepage.page */ 752);




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

/***/ 4634:
/*!*****************************************************!*\
  !*** ./src/app/languagepage/languagepage.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagepagePageModule": () => (/* binding */ LanguagepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _languagepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagepage-routing.module */ 3998);
/* harmony import */ var _languagepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languagepage.page */ 752);







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

/***/ 752:
/*!***************************************************!*\
  !*** ./src/app/languagepage/languagepage.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagepagePage": () => (/* binding */ LanguagepagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _languagepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagepage.page.html?ngResource */ 4031);
/* harmony import */ var _languagepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languagepage.page.scss?ngResource */ 2951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





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

/***/ 2951:
/*!****************************************************************!*\
  !*** ./src/app/languagepage/languagepage.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.toogleclass {\n  padding: 0px;\n  float: right;\n  --handle-width: 16px;\n  --handle-height: 16px;\n  width: 40px;\n  height: 24px;\n  --background: #5d5d5d;\n  --background-checked: #1A206D;\n  --handle-background-checked: #fff;\n  --handle-background: #c8c7cc;\n  margin-top: 1.5%;\n  --handle-spacing: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJsYW5ndWFnZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9vZ2xlY2xhc3N7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWhhbmRsZS13aWR0aDogMTZweDtcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJhY2tncm91bmQ6ICM1ZDVkNWQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNjOGM3Y2M7XG4gIG1hcmdpbi10b3A6IDEuNSU7XG4gIC0taGFuZGxlLXNwYWNpbmc6IDRweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 4031:
/*!****************************************************************!*\
  !*** ./src/app/languagepage/languagepage.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n\n        <div style=\"width:100% ;\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Language</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div style=\"width: 90%;\n  margin: 5% auto;\n  text-align: center;\">\n\n        <ion-label style=\"color: #000; font-size: 18px;\">English</ion-label>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_languagepage_languagepage_module_ts.js.map