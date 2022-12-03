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

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0YiLCJmaWxlIjoiY2xhaW1hc3Npc3RhbmNlMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICBjb2xvcjogYmxhY2s7XG59XG4udGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud3JhcHBlcntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuLmhlYWRjbHN7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdWJoZWFke1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIl19 */";

/***/ }),

/***/ 46308:
/*!************************************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">CLAIM ASSISTANCE</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n\n    <div class=\"headcls\">EMBER PROMO IS HERE</div>\n    <p>Save money this Ember period when you get our private motor comprehensive policy (auto\n      classic or auto plus). The Ember Promo allows customers to buy a 1-year policy and only\n      pay for 11 months, hence One Month is FREE. So, you are paying for only 11 months\n      instead of 12. The Ember Promo runs from September 1st 2022, to January 31st, 2023.\n      What You Stand to Gain from the Ember Promo<br>\n      <span style=\" color: #1A0F55;\n     font-size: 16px;\n     font-weight: 600;\">The Ember Promo covers you from:</span> <br>\n      - Accidental damage to an insured vehicle.<br>\n      - Loss or damage to an insured vehicle resulting from fire or theft.<br>\n      - Damage caused by a malicious act, a strike, a riot, or a civil commotion (an\n      additional cost for the auto classic plan).<br>\n      - Damage to the third-party vehicle up to a limit of N1,000,000.<br>\n      - Damage to third-party property up to a limit of N1,000,000.<br>\n      - Unlimited (but reasonable) liability for death or bodily injury to third parties.<br>\n      - Refund for medical expenses with limits, and much more.<br>\n      So, make haste today, while the offer lasts.\n    </p>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance2_claimassistance2_module_ts.js.map