"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_claimassistance_claimassistance_module_ts"],{

/***/ 39429:
/*!*******************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimassistancePageRoutingModule": () => (/* binding */ ClaimassistancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claimassistance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance.page */ 5352);




const routes = [
    {
        path: '',
        component: _claimassistance_page__WEBPACK_IMPORTED_MODULE_0__.ClaimassistancePage
    }
];
let ClaimassistancePageRoutingModule = class ClaimassistancePageRoutingModule {
};
ClaimassistancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClaimassistancePageRoutingModule);



/***/ }),

/***/ 50450:
/*!***********************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimassistancePageModule": () => (/* binding */ ClaimassistancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claimassistance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance-routing.module */ 39429);
/* harmony import */ var _claimassistance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance.page */ 5352);







let ClaimassistancePageModule = class ClaimassistancePageModule {
};
ClaimassistancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _claimassistance_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimassistancePageRoutingModule
        ],
        declarations: [_claimassistance_page__WEBPACK_IMPORTED_MODULE_1__.ClaimassistancePage]
    })
], ClaimassistancePageModule);



/***/ }),

/***/ 5352:
/*!*********************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimassistancePage": () => (/* binding */ ClaimassistancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _claimassistance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance.page.html?ngResource */ 92160);
/* harmony import */ var _claimassistance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance.page.scss?ngResource */ 94821);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let ClaimassistancePage = class ClaimassistancePage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
ClaimassistancePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
ClaimassistancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-claimassistance',
        template: _claimassistance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_claimassistance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClaimassistancePage);



/***/ }),

/***/ 94821:
/*!**********************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLRiIsImZpbGUiOiJjbGFpbWFzc2lzdGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndyYXBwZXJ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5oZWFkY2xze1xuICBjb2xvcjogIzFBMEY1NTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3ViaGVhZHtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 92160:
/*!**********************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">CLAIM ASSISTANCE</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"headcls\">GET IMMEDIATE CLAIM ASSISTANCE</div>\n    <p>Processing motor insurance claim is easier than you think. It’s much simpler using the following steps to settle\n      claims for an accident</p>\n    <div class=\"subhead\">-LONE ACCIDENT</div>\n    <p>Completed claim form. (This can be optional if the mobile app is developed with the claim form interface)<br>\n      Estimate of repairs on a garage letter head.<br>\n      Photographs explicitly showing the registration number and damaged area of the vehicle.<br>\n      Driving license of the driver</p>\n\n    <div class=\"subhead\">- WHEN THIRD-PARTY IS INVOLVED.</div>\n    <p>Certificate of Insurance of the Negligent third-party.<br>\n      Photocopy of the Negligent third-party Driver’s licence.<br>\n      Undertaking letter from the Negligent third-party admitting liability.<br>\n      All require documents for the lone accident\n    </p>\n\n    <div class=\"subhead\">- VANDALIZED VEHICLE</div>\n    <p>Completed vandalized completed claim form.<br>\n      Estimate of repairs on garage letter head.<br>\n      Photographs explicitly showing the registration number and damaged area of the vehicle.<br>\n      Driving license of the driver.<br>\n      Police report</p>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance_claimassistance_module_ts.js.map