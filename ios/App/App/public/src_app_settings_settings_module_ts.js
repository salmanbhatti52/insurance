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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n@media (min-width: 700px) {\n  ion-list {\n    max-width: 600px;\n    margin: auto;\n    margin-top: 40px;\n  }\n}\n\nion-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\nion-list ion-item {\n  --border-width: 0 0 0.55px 0;\n  --inner-border-width: 0 0 0 0;\n}\n\nion-list ion-icon {\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0U7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FBQU47O0FBRUU7RUFKRjtJQUtNLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQ0o7QUFDRjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUdFO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQUROOztBQUdFO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQUZOOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tbGlzdCB7XG4gIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZjtcbiAgICBjb2xvcjogIzAwMDs7XG4gIH1cbiAgLy8gaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAvLyAgICAgLS1ib3JkZXItd2lkdGg6IDAuNTVweCAwIDAgMDtcbiAgLy8gfVxuICBpb24taXRlbXtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4IDA7XG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgfVxuICBpb24taWNvbntcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICM0Mjh4ZmYpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <!-- <div style=\"width: 100%\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\n        </div> -->\n\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Settings</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"languagepage()\">\n      <ion-label> Language </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"notification()\">\n      <ion-label> Notification </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"privacy()\">\n      <ion-label> Privacy Policy </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"help()\">\n      <ion-label> Help </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"finger()\">\n      <ion-label> Face/Fingerprint ID </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"updateProfile()\">\n      <ion-label>My Account</ion-label>\n    </ion-item>\n\n    <!-- <ion-item\n      class=\"ion-activatable\"\n      detail=\"true\"\n      lines=\"none\"\n      (click)=\"deleteaccount()\"\n    >\n      <ion-label> Delete your account? </ion-label>\n    </ion-item> -->\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map