"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privacy_privacy_module_ts"],{

/***/ 7947:
/*!***************************************************!*\
  !*** ./src/app/privacy/privacy-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageRoutingModule": () => (/* binding */ PrivacyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page */ 3879);




const routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPage
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPageRoutingModule);



/***/ }),

/***/ 5489:
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageModule": () => (/* binding */ PrivacyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-routing.module */ 7947);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page */ 3879);







let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPageRoutingModule
        ],
        declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPage]
    })
], PrivacyPageModule);



/***/ }),

/***/ 3879:
/*!*****************************************!*\
  !*** ./src/app/privacy/privacy.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPage": () => (/* binding */ PrivacyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page.html?ngResource */ 7931);
/* harmony import */ var _privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page.scss?ngResource */ 1296);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);






let PrivacyPage = class PrivacyPage {
    constructor(location, api) {
        this.location = location;
        this.api = api;
    }
    ngOnInit() {
        this.fp = localStorage.getItem('fingerprint');
        console.log('fingerprint====', this.fp);
        this.api.fpval = this.fp;
    }
    goback() {
        this.location.back();
    }
    toogle(ev) {
        console.log(ev);
        if (ev.detail.checked == true) {
            this.api.fpval = 'true';
            localStorage.setItem('fingerprint', 'true');
        }
        else {
            this.api.fpval = 'false';
            localStorage.setItem('fingerprint', 'false');
        }
    }
};
PrivacyPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
PrivacyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-privacy',
        template: _privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrivacyPage);



/***/ }),

/***/ 1296:
/*!******************************************************!*\
  !*** ./src/app/privacy/privacy.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.toogleclass {\n  padding: 0px;\n  float: right;\n  --handle-width: 16px;\n  --handle-height: 16px;\n  width: 40px;\n  height: 24px;\n  --background: #5d5d5d;\n  --background-checked: #1A206D;\n  --handle-background-checked: #fff;\n  --handle-background: #c8c7cc;\n  margin-top: 1.5%;\n  --handle-spacing: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRUYiLCJmaWxlIjoicHJpdmFjeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvb2dsZWNsYXNze1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDE2cHg7XHJcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICAtLWJhY2tncm91bmQ6ICM1ZDVkNWQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNjOGM3Y2M7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuICAtLWhhbmRsZS1zcGFjaW5nOiA0cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7931:
/*!******************************************************!*\
  !*** ./src/app/privacy/privacy.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n\n        <div style=\"width:100% ;\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Privacy</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div style=\"width: 90%;\n  margin: 5% auto;\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"9\">\n        <ion-label style=\"color: #000; font-size: 18px;\">Enable Face/Fingerprint ID</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-toggle class=\"toogleclass\" (ionChange)=\"toogle($event)\" checked *ngIf=\"api.fpval=='true'\">\n        </ion-toggle>\n        <ion-toggle class=\"toogleclass\" (ionChange)=\"toogle($event)\" *ngIf=\"api.fpval=='false'\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privacy_privacy_module_ts.js.map