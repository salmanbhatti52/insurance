"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helppage_helppage_module_ts"],{

/***/ 29468:
/*!*****************************************************!*\
  !*** ./src/app/helppage/helppage-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelppagePageRoutingModule": () => (/* binding */ HelppagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _helppage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helppage.page */ 49002);




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

/***/ 60180:
/*!*********************************************!*\
  !*** ./src/app/helppage/helppage.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelppagePageModule": () => (/* binding */ HelppagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _helppage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helppage-routing.module */ 29468);
/* harmony import */ var _helppage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helppage.page */ 49002);







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

/***/ 49002:
/*!*******************************************!*\
  !*** ./src/app/helppage/helppage.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelppagePage": () => (/* binding */ HelppagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _helppage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helppage.page.html?ngResource */ 31881);
/* harmony import */ var _helppage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helppage.page.scss?ngResource */ 55832);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





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

/***/ 55832:
/*!********************************************************!*\
  !*** ./src/app/helppage/helppage.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtGIiwiZmlsZSI6ImhlbHBwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmhlYWRjbHN7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3ViaGVhZHtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 31881:
/*!********************************************************!*\
  !*** ./src/app/helppage/helppage.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Help</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"subhead\">How do I purchase a product online?</div>\r\n    <p>\r\n      Visit http://www.cornerstone.com.ng and highlight the banner 'buy\r\n      insurance in 5minutes' or highlight the 'e-insurance' button, select the\r\n      product of interest and provide the necessary details requested on the\r\n      screen then make payments via ATM cards.\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      What is the difference between purchasing a policy online and manually?\r\n    </div>\r\n    <p>\r\n      Online gives you the opportunity to purchase a policy 24/7 anytime, any\r\n      day of the week via the internet which always gives discount premium on\r\n      policies compared to manual process.\r\n    </p>\r\n\r\n    <div class=\"subhead\">Do you accept installmental payment?</div>\r\n    <p>\r\n      No, the platform doesn't accept installmental payment; it is only in\r\n      products which have payment frequency (Monthly,Quarterly, Half Yearly &\r\n      Yearly) such as Investment Plans.\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      What is the Minimum Annual Premium payable for LIfe Investment Policy\r\n    </div>\r\n    <p>\r\n      The Minimum Annual Premium payable on Life Investment Policy Is\r\n      N60,000.00.\r\n    </p>\r\n\r\n    <div class=\"subhead\">Can I pay with cash or cheque?</div>\r\n    <p>\r\n      Yes, the platform has flexible payment options for users to choose from.\r\n      When a user arrives on the payment page during purchasing any of our\r\n      insurance products, select Bank Transfer to partially end the transaction\r\n      and upon payment confirmation, the insurance documents will be sent to the\r\n      email address immediately.\r\n    </p>\r\n\r\n    <div class=\"subhead\">How do I register for claims on this platform?</div>\r\n    <p>\r\n      You have to visit to fill out e-claim form for motor claims, fire,\r\n      burglary, goods-in-transit,marine and local travel insurance claims but\r\n      for other products, kindly email ecare@cornerstone.com.ng to request for a\r\n      claim form which you will complete and return to same email address\r\n      alongside repair estimate and pictures.\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      How do I increase or Decrease my Life Investment Premium on subsequent\r\n      payment from the initial amount invested?\r\n    </div>\r\n    <p>\r\n      Send a formal letter to ecare@cornerstone.com.ng stating your desire to\r\n      increase or decrease the subsequent payment to a specific amount and an\r\n      endorsement letter will be forwarded to you on same to that effect\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      How do I change my Beneficiary or Address on my Life investment policy?\r\n    </div>\r\n    <p>\r\n      Send a formal letter to ecare@cornerstone.com.ng stating your desire to\r\n      change details on your policy\r\n    </p>\r\n\r\n    <div class=\"subhead\">How can I obtain my receipt after payment?</div>\r\n    <p>\r\n      The moment payment is successful, an E-Receipt will be forwarded to your\r\n      email address which you provided during the purchase of the policy\r\n    </p>\r\n\r\n    <div class=\"subhead\">How do I get my policy document?</div>\r\n    <p>\r\n      After the completion of a policy and payment was successful, the\r\n      certificate and policy document will be forwarded via email.Only online\r\n      products like Full Comprehensive motor cover and Maximum Investment Plan\r\n      receive a policy document, however for Full Comp motor cover the client\r\n      receives policy document only after inspection of vehilce insured has been\r\n      accomplished by our Underwriter (within 72 hours) while MIP the client\r\n      receives policy document via email within 72 hours.\r\n    </p>\r\n\r\n    <div class=\"subhead\">What is Home Insurance?</div>\r\n    <p>\r\n      Home Insurance provides financial protection against disaster such as\r\n      buglary, lightening, fire and flooding. You can insure the building and\r\n      it's property or either one of them individually.\r\n    </p>\r\n\r\n    <div class=\"subhead\">How much do I need to insure my home?</div>\r\n    <p>\r\n      The cost to rebuild your home if it's damaged should be the amount needed\r\n      to insure it. Ie Present value of home.\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      I will like to request for my statement of account\r\n    </div>\r\n    <p>\r\n      -S end a mail to enquiries@cornerstone.com.ng using STATEMENT OF ACCOUNT\r\n      as the subject with the following details Your name which was used in\r\n      opening of the policy, your phone number, and your policy number. - Also\r\n      if you do not remember your policy number, send your name which was used\r\n      in opening the policy, phone number and the address filled on the proposal\r\n      form. - Alternatively, you may visit a branch if you feel you need to\r\n      address any issue regarding your statement of account.\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      I will like to update my personal details with the company\r\n    </div>\r\n    <p>\r\n      - Send a mail to enquiries@cornerstone.com.ng using PERSONAL DETAILS\r\n      UPDATE as the subject - Then provide us with the details you would want us\r\n      to update on your policy account alongside your policy number. - If you\r\n      are changing your address, kindly provide us with the current address and\r\n      a utility bill to that has the current address to back up the change. -\r\n      Utility bill can be either electricity bill, water bill, or tenancy\r\n      agreement or receipt.\r\n    </p>\r\n\r\n    <div class=\"subhead\">I want to purchase a third party motor policy</div>\r\n    <p>\r\n      - Log on to https://cornerstone.com.ng/products click on motor Insurance\r\n      and then click on third party policy to complete your transaction. - If\r\n      you encounter any issue on the portal as regards the third party\r\n      transaction please send a mail to ecare@cornerstone.com.ng copying\r\n      enquiries@cornerstone.com.ng - If unable to process via our e-channel\r\n      route please send a mail to enquiries@cornerstone.com.ng using THIRD PARTY\r\n      MOTOR INSURANCE as the subject, then provide us with the following\r\n      details; vehicle license, driver license, phone number, email address,\r\n      residential address and your evidence of payment. - - You will receive an\r\n      acknowledgement and certificate will be issued upon payment confirmation.\r\n      - Payment can be made into this account: 00000000000\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      I need a loan(only for Life savings policy holders)\r\n    </div>\r\n    <p>\r\n      - I need a loan(only for Life savings policy holders) - Simply send a mail\r\n      using the subject REQUEST FOR LOAN then provide the following details;\r\n      policy number, and phone number. - Only 70% of your fund balance will be\r\n      processed and paid into your account. Terms and conditions applies.\r\n    </p>\r\n\r\n    <div class=\"subhead\">How to lodge or report a claim?</div>\r\n    <p>\r\n      - Send an email to claimscare@cornerstone.com.ng - Go to this link\r\n      cornerstone.com.ng/claim/MQ== - Log on to our website\r\n      www.cornerstone.com.ng and make an online claim\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      When will an engineer Inspect my vehicle after I lodge a claim?\r\n    </div>\r\n    <p>\r\n      - All required documents must be submitted for each type of motor claim -\r\n      An engineer will be appointed to visit the garage or inspect the vehicle\r\n      within 24-48 hours after documents must have been submitted.\r\n    </p>\r\n\r\n    <div class=\"subhead\">\r\n      How long do I have to wait before I lodge a claim?\r\n    </div>\r\n    <p>Immediately the accident occurs or within 30 days of the incident.</p>\r\n\r\n    <div class=\"subhead\">What is the TAT for payment of claims?</div>\r\n    <p>\r\n      Within 3 working days - 72 working hours after receipt of the executed\r\n      discharge Voucher.\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helppage_helppage_module_ts.js.map