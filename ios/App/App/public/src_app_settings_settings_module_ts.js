"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SettingsPage = class SettingsPage {
    constructor(location, navCtrl) {
        this.location = location;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    goback() {
        this.location.back();
    }
    privacy() {
        this.navCtrl.navigateForward('privacypolicy');
    }
    finger() {
        this.navCtrl.navigateForward('privacy');
    }
    languagepage() {
        this.navCtrl.navigateForward('languagepage');
    }
    notification() {
        this.navCtrl.navigateForward('notification');
    }
    help() {
        this.navCtrl.navigateForward('helppage');
    }
    deleteaccount() {
        this.navCtrl.navigateForward('deleteaccount');
    }
    updateProfile() {
        this.navCtrl.navigateRoot('profile-update');
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n@media (min-width: 700px) {\n  ion-list {\n    max-width: 600px;\n    margin: auto;\n    margin-top: 40px;\n  }\n}\n\nion-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\nion-list ion-item {\n  --border-width: 0 0 0.55px 0;\n  --inner-border-width: 0 0 0 0;\n}\n\nion-list ion-icon {\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0U7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FBQU47O0FBRUU7RUFKRjtJQUtNLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQ0o7QUFDRjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUdFO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQUROOztBQUdFO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQUZOOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwOztcclxuICB9XHJcbiAgLy8gaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gIC8vICAgICAtLWJvcmRlci13aWR0aDogMC41NXB4IDAgMCAwO1xyXG4gIC8vIH1cclxuICBpb24taXRlbXtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHggMDtcclxuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICM0Mjh4ZmYpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuLmxpc3QtbWQge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <div style=\"width: 100%\" (click)=\"goback()\">\r\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\r\n        </div> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Settings</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"languagepage()\"\r\n    >\r\n      <ion-label> Language </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"notification()\"\r\n    >\r\n      <ion-label> Notification </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"privacy()\"\r\n    >\r\n      <ion-label> Privacy Policy </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"help()\"\r\n    >\r\n      <ion-label> Help </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"finger()\"\r\n    >\r\n      <ion-label> Face/Fingerprint ID </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"updateProfile()\"\r\n    >\r\n      <ion-label>My Account</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item\r\n      class=\"ion-activatable\"\r\n      detail=\"true\"\r\n      lines=\"none\"\r\n      (click)=\"deleteaccount()\"\r\n    >\r\n      <ion-label> Delete your account? </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map