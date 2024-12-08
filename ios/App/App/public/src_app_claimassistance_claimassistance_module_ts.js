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

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLRiIsImZpbGUiOiJjbGFpbWFzc2lzdGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uaGVhZGNsc3tcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdWJoZWFke1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 92160:
/*!**********************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">CLAIM ASSISTANCE</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"headcls\">GET IMMEDIATE CLAIM ASSISTANCE</div>\r\n    <p>\r\n      Processing motor insurance claim is easier than you think. It’s much\r\n      simpler using the following steps to settle claims for an accident\r\n    </p>\r\n    <div class=\"subhead\">-LONE ACCIDENT</div>\r\n    <p>\r\n      Completed claim form. (This can be optional if the mobile app is developed\r\n      with the claim form interface)<br />\r\n      Estimate of repairs on a garage letter head.<br />\r\n      Photographs explicitly showing the registration number and damaged area of\r\n      the vehicle.<br />\r\n      Driving license of the driver\r\n    </p>\r\n\r\n    <div class=\"subhead\">- WHEN THIRD-PARTY IS INVOLVED.</div>\r\n    <p>\r\n      Certificate of Insurance of the Negligent third-party.<br />\r\n      Photocopy of the Negligent third-party Driver’s licence.<br />\r\n      Undertaking letter from the Negligent third-party admitting liability.<br />\r\n      All require documents for the lone accident\r\n    </p>\r\n\r\n    <div class=\"subhead\">- VANDALIZED VEHICLE</div>\r\n    <p>\r\n      Completed vandalized completed claim form.<br />\r\n      Estimate of repairs on garage letter head.<br />\r\n      Photographs explicitly showing the registration number and damaged area of\r\n      the vehicle.<br />\r\n      Driving license of the driver.<br />\r\n      Police report\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance_claimassistance_module_ts.js.map