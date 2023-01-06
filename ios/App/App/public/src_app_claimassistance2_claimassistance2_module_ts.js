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

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0YiLCJmaWxlIjoiY2xhaW1hc3Npc3RhbmNlMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5oZWFkY2xze1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN1YmhlYWR7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 46308:
/*!************************************************************************!*\
  !*** ./src/app/claimassistance2/claimassistance2.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width: 100%\">\r\n            <img\r\n              (click)=\"goback()\"\r\n              src=\"assets/images/back-arrow.svg\"\r\n              alt=\"sb-btn\"\r\n            />\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <!-- <div class=\"title\">THE IMPORTANCE OF SAVING FOR THE RAINY DAY</div> -->\r\n        <div class=\"title\"></div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"headcls\">EMBER PROMO IS HERE</div>\r\n    <p>\r\n      Save money this Ember period when you get our private motor comprehensive\r\n      policy (auto classic or auto plus). The Ember Promo allows customers to\r\n      buy a 1-year policy and only pay for 11 months, hence One Month is FREE.\r\n      So, you are paying for only 11 months instead of 12. The Ember Promo runs\r\n      from September 1st 2022, to January 31st, 2023. What You Stand to Gain\r\n      from the Ember Promo<br />\r\n      <span style=\"color: #1a0f55; font-size: 16px; font-weight: 600\"\r\n        >The Ember Promo covers you from:</span\r\n      >\r\n      <br />\r\n      - Accidental damage to an insured vehicle.<br />\r\n      - Loss or damage to an insured vehicle resulting from fire or theft.<br />\r\n      - Damage caused by a malicious act, a strike, a riot, or a civil commotion\r\n      (an additional cost for the auto classic plan).<br />\r\n      - Damage to the third-party vehicle up to a limit of N1,000,000.<br />\r\n      - Damage to third-party property up to a limit of N1,000,000.<br />\r\n      - Unlimited (but reasonable) liability for death or bodily injury to third\r\n      parties.<br />\r\n      - Refund for medical expenses with limits, and much more.<br />\r\n      So, make haste today, while the offer lasts.\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance2_claimassistance2_module_ts.js.map