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

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtGIiwiZmlsZSI6ImhlbHBwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53cmFwcGVye1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG4uaGVhZGNsc3tcbiAgY29sb3I6ICMxQTBGNTU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnN1YmhlYWR7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */";

/***/ }),

/***/ 31881:
/*!********************************************************!*\
  !*** ./src/app/helppage/helppage.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Help</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"subhead\">How do I purchase a product online?</div>\n    <p>\n      Visit http://www.cornerstone.com.ng and highlight the banner 'buy\n      insurance in 5minutes' or highlight the 'e-insurance' button, select the\n      product of interest and provide the necessary details requested on the\n      screen then make payments via ATM cards.\n    </p>\n\n    <div class=\"subhead\">\n      What is the difference between purchasing a policy online and manually?\n    </div>\n    <p>\n      Online gives you the opportunity to purchase a policy 24/7 anytime, any\n      day of the week via the internet which always gives discount premium on\n      policies compared to manual process.\n    </p>\n\n    <div class=\"subhead\">Do you accept installmental payment?</div>\n    <p>\n      No, the platform doesn't accept installmental payment; it is only in\n      products which have payment frequency (Monthly,Quarterly, Half Yearly &\n      Yearly) such as Investment Plans.\n    </p>\n\n    <div class=\"subhead\">\n      What is the Minimum Annual Premium payable for LIfe Investment Policy\n    </div>\n    <p>\n      The Minimum Annual Premium payable on Life Investment Policy Is\n      N60,000.00.\n    </p>\n\n    <div class=\"subhead\">Can I pay with cash or cheque?</div>\n    <p>\n      Yes, the platform has flexible payment options for users to choose from.\n      When a user arrives on the payment page during purchasing any of our\n      insurance products, select Bank Transfer to partially end the transaction\n      and upon payment confirmation, the insurance documents will be sent to the\n      email address immediately.\n    </p>\n\n    <div class=\"subhead\">How do I register for claims on this platform?</div>\n    <p>\n      You have to visit to fill out e-claim form for motor claims, fire,\n      burglary, goods-in-transit,marine and local travel insurance claims but\n      for other products, kindly email ecare@cornerstone.com.ng to request for a\n      claim form which you will complete and return to same email address\n      alongside repair estimate and pictures.\n    </p>\n\n    <div class=\"subhead\">\n      How do I increase or Decrease my Life Investment Premium on subsequent\n      payment from the initial amount invested?\n    </div>\n    <p>\n      Send a formal letter to ecare@cornerstone.com.ng stating your desire to\n      increase or decrease the subsequent payment to a specific amount and an\n      endorsement letter will be forwarded to you on same to that effect\n    </p>\n\n    <div class=\"subhead\">\n      How do I change my Beneficiary or Address on my Life investment policy?\n    </div>\n    <p>\n      Send a formal letter to ecare@cornerstone.com.ng stating your desire to\n      change details on your policy\n    </p>\n\n    <div class=\"subhead\">How can I obtain my receipt after payment?</div>\n    <p>\n      The moment payment is successful, an E-Receipt will be forwarded to your\n      email address which you provided during the purchase of the policy\n    </p>\n\n    <div class=\"subhead\">How do I get my policy document?</div>\n    <p>\n      After the completion of a policy and payment was successful, the\n      certificate and policy document will be forwarded via email.Only online\n      products like Full Comprehensive motor cover and Maximum Investment Plan\n      receive a policy document, however for Full Comp motor cover the client\n      receives policy document only after inspection of vehilce insured has been\n      accomplished by our Underwriter (within 72 hours) while MIP the client\n      receives policy document via email within 72 hours.\n    </p>\n\n    <div class=\"subhead\">What is Home Insurance?</div>\n    <p>\n      Home Insurance provides financial protection against disaster such as\n      buglary, lightening, fire and flooding. You can insure the building and\n      it's property or either one of them individually.\n    </p>\n\n    <div class=\"subhead\">How much do I need to insure my home?</div>\n    <p>\n      The cost to rebuild your home if it's damaged should be the amount needed\n      to insure it. Ie Present value of home.\n    </p>\n\n    <div class=\"subhead\">\n      I will like to request for my statement of account\n    </div>\n    <p>\n      -S end a mail to enquiries@cornerstone.com.ng using STATEMENT OF ACCOUNT\n      as the subject with the following details Your name which was used in\n      opening of the policy, your phone number, and your policy number. - Also\n      if you do not remember your policy number, send your name which was used\n      in opening the policy, phone number and the address filled on the proposal\n      form. - Alternatively, you may visit a branch if you feel you need to\n      address any issue regarding your statement of account.\n    </p>\n\n    <div class=\"subhead\">\n      I will like to update my personal details with the company\n    </div>\n    <p>\n      - Send a mail to enquiries@cornerstone.com.ng using PERSONAL DETAILS\n      UPDATE as the subject - Then provide us with the details you would want us\n      to update on your policy account alongside your policy number. - If you\n      are changing your address, kindly provide us with the current address and\n      a utility bill to that has the current address to back up the change. -\n      Utility bill can be either electricity bill, water bill, or tenancy\n      agreement or receipt.\n    </p>\n\n    <div class=\"subhead\">I want to purchase a third party motor policy</div>\n    <p>\n      - Log on to https://cornerstone.com.ng/products click on motor Insurance\n      and then click on third party policy to complete your transaction. - If\n      you encounter any issue on the portal as regards the third party\n      transaction please send a mail to ecare@cornerstone.com.ng copying\n      enquiries@cornerstone.com.ng - If unable to process via our e-channel\n      route please send a mail to enquiries@cornerstone.com.ng using THIRD PARTY\n      MOTOR INSURANCE as the subject, then provide us with the following\n      details; vehicle license, driver license, phone number, email address,\n      residential address and your evidence of payment. - - You will receive an\n      acknowledgement and certificate will be issued upon payment confirmation.\n      - Payment can be made into this account: 00000000000\n    </p>\n\n    <div class=\"subhead\">\n      I need a loan(only for Life savings policy holders)\n    </div>\n    <p>\n      - I need a loan(only for Life savings policy holders) - Simply send a mail\n      using the subject REQUEST FOR LOAN then provide the following details;\n      policy number, and phone number. - Only 70% of your fund balance will be\n      processed and paid into your account. Terms and conditions applies.\n    </p>\n\n    <div class=\"subhead\">How to lodge or report a claim?</div>\n    <p>\n      - Send an email to claimscare@cornerstone.com.ng - Go to this link\n      cornerstone.com.ng/claim/MQ== - Log on to our website\n      www.cornerstone.com.ng and make an online claim\n    </p>\n\n    <div class=\"subhead\">\n      When will an engineer Inspect my vehicle after I lodge a claim?\n    </div>\n    <p>\n      - All required documents must be submitted for each type of motor claim -\n      An engineer will be appointed to visit the garage or inspect the vehicle\n      within 24-48 hours after documents must have been submitted.\n    </p>\n\n    <div class=\"subhead\">\n      How long do I have to wait before I lodge a claim?\n    </div>\n    <p>Immediately the accident occurs or within 30 days of the incident.</p>\n\n    <div class=\"subhead\">What is the TAT for payment of claims?</div>\n    <p>\n      Within 3 working days - 72 working hours after receipt of the executed\n      discharge Voucher.\n    </p>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helppage_helppage_module_ts.js.map