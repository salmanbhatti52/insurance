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

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Help</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n\r\n    <div class=\"subhead\">How do I purchase a product online?</div>\r\n    <p>Visit http://www.cornerstone.com.ng and highlight the banner 'buy insurance in 5minutes' or highlight the 'e-insurance' button, select the product of interest and provide the necessary details requested on the screen then make payments via ATM cards.</p>\r\n\r\n    <div class=\"subhead\">What is the difference between purchasing a policy online and manually?</div>\r\n    <p>Online gives you the opportunity to purchase a policy 24/7 anytime, any day of the week via the internet which always gives discount premium on policies compared to manual process.</p>\r\n\r\n    <div class=\"subhead\">Do you accept installmental payment?</div>\r\n    <p>No, the platform doesn't accept installmental payment; it is only in products which have payment frequency (Monthly,Quarterly, Half Yearly & Yearly) such as Investment Plans.</p>\r\n\r\n    <div class=\"subhead\">What is the Minimum Annual Premium payable for LIfe Investment Policy</div>\r\n    <p>The Minimum Annual Premium payable on Life Investment Policy Is N60,000.00.</p>\r\n\r\n    <div class=\"subhead\">Can I pay with cash or cheque?</div>\r\n    <p>Yes, the platform has flexible payment options for users to choose from. When a user arrives on the payment page during purchasing any of our insurance products, select Bank Transfer to partially end the transaction and upon payment confirmation, the insurance documents will be sent to the email address immediately.</p>\r\n\r\n    <div class=\"subhead\">How do I register for claims on this platform?</div>\r\n    <p>You have to visit to fill out e-claim form for motor claims, fire, burglary, goods-in-transit,marine and local travel insurance claims but for other products, kindly email ecare@cornerstone.com.ng to request for a claim form which you will complete and return to same email address alongside repair estimate and pictures.</p>\r\n\r\n    <div class=\"subhead\">How do I increase or Decrease my Life Investment Premium on subsequent payment from the initial amount invested?</div>\r\n    <p>Send a formal letter to ecare@cornerstone.com.ng stating your desire to increase or decrease the subsequent payment to a specific amount and an endorsement letter will be forwarded to you on same to that effect</p>\r\n\r\n    <div class=\"subhead\">How do I change my Beneficiary or Address on my Life investment policy?</div>\r\n    <p>Send a formal letter to ecare@cornerstone.com.ng stating your desire to change details on your policy</p>\r\n\r\n    <div class=\"subhead\">How can I obtain my receipt after payment?</div>\r\n    <p>The moment payment is successful, an E-Receipt will be forwarded to your email address which you provided during the purchase of the policy</p>\r\n\r\n    <div class=\"subhead\">How do I get my policy document?\r\n    </div>\r\n    <p>After the completion of a policy and payment was successful, the certificate and policy document will be forwarded via email.Only online products like Full Comprehensive motor cover and Maximum Investment Plan receive a policy document, however for Full Comp motor cover the client receives policy document only after inspection of vehilce insured has been accomplished by our Underwriter (within 72 hours) while MIP the client receives policy document via email within 72 hours.</p>\r\n\r\n    <div class=\"subhead\">What is Home Insurance?</div>\r\n    <p>Home Insurance provides financial protection against disaster such as buglary, lightening, fire and flooding. You can insure the building and it's property or either one of them individually.</p>\r\n\r\n    <div class=\"subhead\">How much do I need to insure my home?</div>\r\n    <p>The cost to rebuild your home if it's damaged should be the amount needed to insure it. Ie Present value of home.</p>\r\n\r\n    <div class=\"subhead\">I will like to request for my statement of account</div>\r\n    <p>-S end a mail to enquiries@cornerstone.com.ng using STATEMENT OF ACCOUNT as the subject with the following details\r\n      Your name which was used in opening of the policy, your phone number, and your policy number.\r\n\r\n      - Also if you do not remember your policy number, send your name which was used in opening the policy, phone number and the address filled on the proposal form.\r\n      - Alternatively, you may visit a branch if you feel you need to address any issue regarding your statement of account.</p>\r\n\r\n    <div class=\"subhead\">I will like to update my personal details with the company</div>\r\n    <p>\r\n     - Send a mail to enquiries@cornerstone.com.ng using PERSONAL DETAILS UPDATE as the subject\r\n     - Then provide us with the details you would want us to update on your policy account alongside your policy number.\r\n     - If you are changing your address, kindly provide us with the current address and a utility bill to that has the current address to back up the change.\r\n    - Utility bill can be either electricity bill, water bill, or tenancy agreement or receipt.\r\n    </p>\r\n\r\n    <div class=\"subhead\">I want to purchase a third party motor policy</div>\r\n    <p>\r\n      - Log on to https://cornerstone.com.ng/products click on motor Insurance and then click on third party policy to complete your transaction.\r\n     - If you encounter any issue on the portal as regards the third party transaction please send a mail to ecare@cornerstone.com.ng copying enquiries@cornerstone.com.ng\r\n    -  If unable to process via our e-channel route please send a mail to enquiries@cornerstone.com.ng using THIRD PARTY MOTOR INSURANCE as the subject, then provide us with the following details; vehicle license, driver license, phone number, email address, residential address and your evidence of payment. - - You will receive an acknowledgement and certificate will be issued upon payment confirmation.\r\n    -  Payment can be made into this account: 00000000000</p>\r\n\r\n    <div class=\"subhead\">I need a loan(only for Life savings policy holders)</div>\r\n    <p>\r\n     - I need a loan(only for Life savings policy holders)\r\n     - Simply send a mail using the subject REQUEST FOR LOAN then provide the following details; policy number, and phone number.\r\n   -   Only 70% of your fund balance will be processed and paid into your account. Terms and conditions applies.\r\n    </p>\r\n\r\n    <div class=\"subhead\">How to lodge or report a claim?</div>\r\n    <p>\r\n     - Send an email to claimscare@cornerstone.com.ng\r\n    - Go to this link cornerstone.com.ng/claim/MQ==\r\n    - Log on to our website www.cornerstone.com.ng and make an online claim\r\n    </p>\r\n\r\n\r\n    <div class=\"subhead\">When will an engineer Inspect my vehicle after I lodge a claim?</div>\r\n    <p>\r\n     - All required documents must be submitted for each type of motor claim\r\n     - An engineer will be appointed to visit the garage or inspect the vehicle within 24-48 hours after documents must have been submitted.\r\n    </p>\r\n\r\n\r\n    <div class=\"subhead\">How long do I have to wait before I lodge a claim?</div>\r\n    <p>Immediately the accident occurs or within 30 days of the incident.</p>\r\n\r\n\r\n    <div class=\"subhead\">What is the TAT for payment of claims?</div>\r\n    <p>Within 3 working days - 72 working hours after receipt of the executed discharge Voucher.</p>\r\n\r\n\r\n\r\n\r\n</div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helppage_helppage_module_ts.js.map