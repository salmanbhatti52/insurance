"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_claimassistance2_claimassistance2_module_ts"],{

/***/ 70922:
/*!*********************************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Claimassistance2PageRoutingModule": () => (/* binding */ Claimassistance2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claimassistance2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance2.page */ 39067);




const routes = [
    {
        path: '',
        component: _claimassistance2_page__WEBPACK_IMPORTED_MODULE_0__.Claimassistance2Page
    }
];
let Claimassistance2PageRoutingModule = class Claimassistance2PageRoutingModule {
};
Claimassistance2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Claimassistance2PageRoutingModule);



/***/ }),

/***/ 84923:
/*!*************************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Claimassistance2PageModule": () => (/* binding */ Claimassistance2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claimassistance2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance2-routing.module */ 70922);
/* harmony import */ var _claimassistance2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance2.page */ 39067);







let Claimassistance2PageModule = class Claimassistance2PageModule {
};
Claimassistance2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _claimassistance2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Claimassistance2PageRoutingModule
        ],
        declarations: [_claimassistance2_page__WEBPACK_IMPORTED_MODULE_1__.Claimassistance2Page]
    })
], Claimassistance2PageModule);



/***/ }),

/***/ 39067:
/*!***********************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Claimassistance2Page": () => (/* binding */ Claimassistance2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _claimassistance2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance2.page.html?ngResource */ 46308);
/* harmony import */ var _claimassistance2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance2.page.scss?ngResource */ 71652);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let Claimassistance2Page = class Claimassistance2Page {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
Claimassistance2Page.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
Claimassistance2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-claimassistance2',
        template: _claimassistance2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_claimassistance2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Claimassistance2Page);



/***/ }),

/***/ 71652:
/*!************************************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZTIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxcY2xhaW1hc3Npc3RhbmNlMlxcY2xhaW1hc3Npc3RhbmNlMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLRiIsImZpbGUiOiJjbGFpbWFzc2lzdGFuY2UyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmhlYWRjbHN7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3ViaGVhZHtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iLCJwIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLmhlYWRjbHMge1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1YmhlYWQge1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";

/***/ }),

/***/ 46308:
/*!************************************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width: 100%\">\r\n            <img\r\n              (click)=\"goback()\"\r\n              src=\"assets/images/back-arrow.svg\"\r\n              alt=\"sb-btn\"\r\n            />\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <!-- <div class=\"title\">THE IMPORTANCE OF SAVING FOR THE RAINY DAY</div> -->\r\n        <div class=\"title\"></div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"headcls\">EMBER PROMO IS HERE</div>\r\n    <p>\r\n      Save money this Ember period when you get our private motor comprehensive\r\n      policy (auto classic or auto plus). The Ember Promo allows customers to\r\n      buy a 1-year policy and only pay for 11 months, hence One Month is FREE.\r\n      So, you are paying for only 11 months instead of 12. The Ember Promo runs\r\n      from September 1st 2022, to January 31st, 2023. What You Stand to Gain\r\n      from the Ember Promo<br />\r\n      <span style=\"color: #1a0f55; font-size: 16px; font-weight: 600\"\r\n        >The Ember Promo covers you from:</span\r\n      >\r\n      <br />\r\n      - Accidental damage to an insured vehicle.<br />\r\n      - Loss or damage to an insured vehicle resulting from fire or theft.<br />\r\n      - Damage caused by a malicious act, a strike, a riot, or a civil commotion\r\n      (an additional cost for the auto classic plan).<br />\r\n      - Damage to the third-party vehicle up to a limit of N1,000,000.<br />\r\n      - Damage to third-party property up to a limit of N1,000,000.<br />\r\n      - Unlimited (but reasonable) liability for death or bodily injury to third\r\n      parties.<br />\r\n      - Refund for medical expenses with limits, and much more.<br />\r\n      So, make haste today, while the offer lasts.\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance2_claimassistance2_module_ts.js.map