"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helppage_helppage_module_ts"],{

/***/ 9468:
/*!*****************************************************!*\
  !*** ./src/app/helppage/helppage-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelppagePageRoutingModule": () => (/* binding */ HelppagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _helppage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helppage.page */ 9002);




const routes = [
    {
        path: '',
        component: _helppage_page__WEBPACK_IMPORTED_MODULE_0__.HelppagePage
    }
];
let HelppagePageRoutingModule = class HelppagePageRoutingModule {
};
HelppagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelppagePageRoutingModule);



/***/ }),

/***/ 180:
/*!*********************************************!*\
  !*** ./src/app/helppage/helppage.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelppagePageModule": () => (/* binding */ HelppagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _helppage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helppage-routing.module */ 9468);
/* harmony import */ var _helppage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helppage.page */ 9002);







let HelppagePageModule = class HelppagePageModule {
};
HelppagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _helppage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelppagePageRoutingModule
        ],
        declarations: [_helppage_page__WEBPACK_IMPORTED_MODULE_1__.HelppagePage]
    })
], HelppagePageModule);



/***/ }),

/***/ 9002:
/*!*******************************************!*\
  !*** ./src/app/helppage/helppage.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelppagePage": () => (/* binding */ HelppagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _helppage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helppage.page.html?ngResource */ 1881);
/* harmony import */ var _helppage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helppage.page.scss?ngResource */ 5832);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let HelppagePage = class HelppagePage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
HelppagePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
HelppagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-helppage',
        template: _helppage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_helppage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelppagePage);



/***/ }),

/***/ 5832:
/*!********************************************************!*\
  !*** ./src/app/helppage/helppage.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtGIiwiZmlsZSI6ImhlbHBwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmhlYWRjbHN7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3ViaGVhZHtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1881:
/*!********************************************************!*\
  !*** ./src/app/helppage/helppage.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Help</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"headcls\">1. GET IMMEDIATE CLAIM ASSISTANCE</div>\r\n    <p>Processing motor insurance claim is easier than you think. It’s much simpler using the following steps to settle\r\n      claims for an accident</p>\r\n    <div class=\"subhead\">-LONE ACCIDENT</div>\r\n    <p>Completed claim form. (This can be optional if the mobile app is developed with the claim form interface)<br>\r\n      Estimate of repairs on a garage letter head.<br>\r\n      Photographs explicitly showing the registration number and damaged area of the vehicle.<br>\r\n      Driving license of the driver</p>\r\n\r\n    <div class=\"subhead\">- WHEN THIRD-PARTY IS INVOLVED.</div>\r\n    <p>Certificate of Insurance of the Negligent third-party.<br>\r\n      Photocopy of the Negligent third-party Driver’s licence.<br>\r\n      Undertaking letter from the Negligent third-party admitting liability.<br>\r\n      All require documents for the lone accident\r\n    </p>\r\n\r\n    <div class=\"subhead\">- VANDALIZED VEHICLE</div>\r\n    <p>Completed vandalized completed claim form.<br>\r\n      Estimate of repairs on garage letter head.<br>\r\n      Photographs explicitly showing the registration number and damaged area of the vehicle.<br>\r\n      Driving license of the driver.<br>\r\n      Police report</p>\r\n\r\n    <div class=\"headcls\">2. EMBER PROMO IS HERE</div>\r\n    <p>Save money this Ember period when you get our private motor comprehensive policy (auto\r\n      classic or auto plus). The Ember Promo allows customers to buy a 1-year policy and only\r\n      pay for 11 months, hence One Month is FREE. So, you are paying for only 11 months\r\n      instead of 12. The Ember Promo runs from September 1st 2022, to January 31st, 2023.\r\n      What You Stand to Gain from the Ember Promo<br>\r\n      <span style=\" color: #1A0F55;\r\n     font-size: 16px;\r\n     font-weight: 600;\">The Ember Promo covers you from:</span> <br>\r\n\r\n      - Accidental damage to an insured vehicle.<br>\r\n      - Loss or damage to an insured vehicle resulting from fire or theft.<br>\r\n      - Damage caused by a malicious act, a strike, a riot, or a civil commotion (an\r\n      additional cost for the auto classic plan).<br>\r\n      - Damage to the third-party vehicle up to a limit of N1,000,000.<br>\r\n      - Damage to third-party property up to a limit of N1,000,000.<br>\r\n      - Unlimited (but reasonable) liability for death or bodily injury to third parties.<br>\r\n      - Refund for medical expenses with limits, and much more.<br>\r\n      So, make haste today, while the offer lasts.\r\n    </p>\r\n\r\n    <div class=\"headcls\">3. THE IMPORTANCE OF SAVING FOR A RAINY DAY</div>\r\n    <p>One of the best ways to become financially stable is to learn the habit of saving money. A good savings attitude\r\n      helps you maintain a\r\n      debt-free lifestyle. Once life uncertainties like job loss or disability pop up, you’ll be able to settle them\r\n      with your savings. However,\r\n      saving for a rainy day isn’t only about planning; it’s about the will to keep some part of your earnings and use\r\n      them when the need\r\n      arises. In this article, we’ll introduce you to our iSave plan and the benefits you can get from it.\r\n    </p>\r\n    <div class=\"subhead\">Who Needs this Plan</div>\r\n    <p>\r\n      iSave Plan is for individuals who want short-term savings to help cover future needs. Whether you’re looking to\r\n      save funds for a\r\n      master’s degree, start a business or pay for your house rent, this plan gives you limitless access to achieving\r\n      your financial goals.\r\n    </p>\r\n    <div class=\"subhead\">Features of iSave Plan</div>\r\n\r\n    <p>You are eligible to take up this plan if you are under the age of 65<br>\r\n      Policy term is 2 years renewable and Interest rate is SDR+4% (SDR is the CBN stipulated minimum savings deposit\r\n      rate banks can pay on savings accounts and is usually 10% of Monetary Policy Rate (MPR)<br>\r\n      The policy can be surrendered after a minimum of 13 months with no withdrawal fees (earlier surrender will attract\r\n      charges)<br>\r\n      The minimum contribution is 5,000</p>\r\n\r\n    <div class=\"subhead\">Benefits of iSave Plan</div>\r\n    Creates capital for future needs (i.e., school fees, home ownership, start own business etc.)<br>\r\n    The sum assured (Life cover ranging from 100,000 – 1,000,000) requires a one-time payment (known as risk premium) of\r\n    1% of the sum assured, then the Risk Premium will be N2,000. For a sum assured of N500,000 the Risk Premium will be\r\n    N10,000 etc.<br>\r\n    Besides the short-term access, customers get life insurance coverage. This becomes helpful in the event of death as\r\n    the account balance and sum assured are paid to the named beneficiary\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helppage_helppage_module_ts.js.map