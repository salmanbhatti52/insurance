"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_claimassistance_claimassistance_module_ts"],{

/***/ 9429:
/*!*******************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimassistancePageRoutingModule": () => (/* binding */ ClaimassistancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
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

/***/ 450:
/*!***********************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimassistancePageModule": () => (/* binding */ ClaimassistancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _claimassistance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance-routing.module */ 9429);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _claimassistance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance.page.html?ngResource */ 6598);
/* harmony import */ var _claimassistance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance.page.scss?ngResource */ 4821);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





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

/***/ 4821:
/*!**********************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLRiIsImZpbGUiOiJjbGFpbWFzc2lzdGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uaGVhZGNsc3tcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdWJoZWFke1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6598:
/*!**********************************************************************!*\
  !*** ./src/app/claimassistance/claimassistance.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">CLAIM ASSISTANCE</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"headcls\">1. GET IMMEDIATE CLAIM ASSISTANCE</div>\n    <p>Processing motor insurance claim is easier than you think. It’s much simpler using the following steps to settle\n      claims for an accident</p>\n    <div class=\"subhead\">-LONE ACCIDENT</div>\n    <p>Completed claim form. (This can be optional if the mobile app is developed with the claim form interface)<br>\n      Estimate of repairs on a garage letter head.<br>\n      Photographs explicitly showing the registration number and damaged area of the vehicle.<br>\n      Driving license of the driver</p>\n\n    <div class=\"subhead\">- WHEN THIRD-PARTY IS INVOLVED.</div>\n    <p>Certificate of Insurance of the Negligent third-party.<br>\n      Photocopy of the Negligent third-party Driver’s licence.<br>\n      Undertaking letter from the Negligent third-party admitting liability.<br>\n      All require documents for the lone accident\n    </p>\n\n    <div class=\"subhead\">- VANDALIZED VEHICLE</div>\n    <p>Completed vandalized completed claim form.<br>\n      Estimate of repairs on garage letter head.<br>\n      Photographs explicitly showing the registration number and damaged area of the vehicle.<br>\n      Driving license of the driver.<br>\n      Police report</p>\n\n    <div class=\"headcls\">2. EMBER PROMO IS HERE</div>\n    <p>Save money this Ember period when you get our private motor comprehensive policy (auto\n      classic or auto plus). The Ember Promo allows customers to buy a 1-year policy and only\n      pay for 11 months, hence One Month is FREE. So, you are paying for only 11 months\n      instead of 12. The Ember Promo runs from September 1st 2022, to January 31st, 2023.\n      What You Stand to Gain from the Ember Promo<br>\n      <span style=\" color: #1A0F55;\n     font-size: 16px;\n     font-weight: 600;\">The Ember Promo covers you from:</span> <br>\n      - Accidental damage to an insured vehicle.<br>\n      - Loss or damage to an insured vehicle resulting from fire or theft.<br>\n      - Damage caused by a malicious act, a strike, a riot, or a civil commotion (an\n      additional cost for the auto classic plan).<br>\n      - Damage to the third-party vehicle up to a limit of N1,000,000.<br>\n      - Damage to third-party property up to a limit of N1,000,000.<br>\n      - Unlimited (but reasonable) liability for death or bodily injury to third parties.<br>\n      - Refund for medical expenses with limits, and much more.<br>\n      So, make haste today, while the offer lasts.\n    </p>\n\n    <div class=\"headcls\">3. THE IMPORTANCE OF SAVING FOR A RAINY DAY</div>\n    <p>One of the best ways to become financially stable is to learn the habit of saving money. A good savings attitude\n      helps you maintain a\n      debt-free lifestyle. Once life uncertainties like job loss or disability pop up, you’ll be able to settle them\n      with your savings. However,\n      saving for a rainy day isn’t only about planning; it’s about the will to keep some part of your earnings and use\n      them when the need\n      arises. In this article, we’ll introduce you to our iSave plan and the benefits you can get from it.\n    </p>\n    <div class=\"subhead\">Who Needs this Plan</div>\n    <p>\n      iSave Plan is for individuals who want short-term savings to help cover future needs. Whether you’re looking to\n      save funds for a\n      master’s degree, start a business or pay for your house rent, this plan gives you limitless access to achieving\n      your financial goals.\n    </p>\n    <div class=\"subhead\">Features of iSave Plan</div>\n\n    <p>You are eligible to take up this plan if you are under the age of 65<br>\n      Policy term is 2 years renewable and Interest rate is SDR+4% (SDR is the CBN stipulated minimum savings deposit\n      rate banks can pay on savings accounts and is usually 10% of Monetary Policy Rate (MPR)<br>\n      The policy can be surrendered after a minimum of 13 months with no withdrawal fees (earlier surrender will attract\n      charges)<br>\n      The minimum contribution is 5,000</p>\n\n    <div class=\"subhead\">Benefits of iSave Plan</div>\n    Creates capital for future needs (i.e., school fees, home ownership, start own business etc.)<br>\n    The sum assured (Life cover ranging from 100,000 – 1,000,000) requires a one-time payment (known as risk premium) of\n    1% of the sum assured, then the Risk Premium will be N2,000. For a sum assured of N500,000 the Risk Premium will be\n    N10,000 etc.<br>\n    Besides the short-term access, customers get life insurance coverage. This becomes helpful in the event of death as\n    the account balance and sum assured are paid to the named beneficiary\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance_claimassistance_module_ts.js.map