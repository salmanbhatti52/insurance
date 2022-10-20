"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 1836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
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

/***/ 7075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 1836);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 5375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let SettingsPage = class SettingsPage {
    constructor(location, navCtrl) {
        this.location = location;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
    privacy() {
        this.navCtrl.navigateForward('privacy');
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n@media (min-width: 700px) {\n  ion-list {\n    max-width: 600px;\n    margin: auto;\n    margin-top: 40px;\n  }\n}\n\nion-list ion-item {\n  --background:#fff;\n  color: #000;\n}\n\nion-list ion-item {\n  --border-width: 0 0 0.55px 0;\n  --inner-border-width: 0 0 0 0;\n}\n\nion-list ion-icon {\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FBQ047O0FBQ0U7RUFKRjtJQUtNLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBRUo7QUFDRjs7QUFERTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUVFO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQUFOOztBQUVFO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQUROOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7O1xyXG4gIH1cclxuICAvLyBpb24taXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwLjU1cHggMCAwIDA7XHJcbiAgLy8gfVxyXG4gIGlvbi1pdGVte1xyXG4gICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAwO1xyXG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzQyOHhmZik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4ubGlzdC1tZCB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n\n        <div style=\"width:100% ;\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Settings</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"language()\">\n      <ion-label>\n        Language\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"noti()\">\n      <ion-label>\n        Notification\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"privacy()\">\n      <ion-label>\n        Privacy\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-activatable\" detail=\"true\" lines=\"none\" (click)=\"help()\">\n      <ion-label>\n        Help\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map