"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payquote_payquote_module_ts"],{

/***/ 44019:
/*!*****************************************************!*\
  !*** ./src/app/payquote/payquote-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayquotePageRoutingModule": () => (/* binding */ PayquotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payquote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payquote.page */ 32967);




const routes = [
    {
        path: '',
        component: _payquote_page__WEBPACK_IMPORTED_MODULE_0__.PayquotePage
    }
];
let PayquotePageRoutingModule = class PayquotePageRoutingModule {
};
PayquotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayquotePageRoutingModule);



/***/ }),

/***/ 92942:
/*!*********************************************!*\
  !*** ./src/app/payquote/payquote.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayquotePageModule": () => (/* binding */ PayquotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payquote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payquote-routing.module */ 44019);
/* harmony import */ var _payquote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payquote.page */ 32967);







let PayquotePageModule = class PayquotePageModule {
};
PayquotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payquote_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayquotePageRoutingModule
        ],
        declarations: [_payquote_page__WEBPACK_IMPORTED_MODULE_1__.PayquotePage]
    })
], PayquotePageModule);



/***/ }),

/***/ 32967:
/*!*******************************************!*\
  !*** ./src/app/payquote/payquote.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayquotePage": () => (/* binding */ PayquotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payquote.page.html?ngResource */ 5235);
/* harmony import */ var _payquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payquote.page.scss?ngResource */ 50424);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






let PayquotePage = class PayquotePage {
    constructor(location, activatedRoute) {
        this.location = location;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        let pay = JSON.parse(this.activatedRoute.snapshot.params['payres']);
        console.log('pay response====', pay);
        this.amount = pay.amount;
        this.transaction_ref = pay.transaction_ref;
        this.policyId = pay.id;
    }
    goback() {
        this.location.back();
    }
};
PayquotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
PayquotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-payquote',
        template: _payquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PayquotePage);



/***/ }),

/***/ 50424:
/*!********************************************************!*\
  !*** ./src/app/payquote/payquote.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table-bordered {\n  border: 1px solid #b8b988;\n}\n\ntd {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border: 1px solid #b8b988;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDRSx5QkFBQTtBQUVKOztBQUFBO0VBQ0UsV0FBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFLRiIsImZpbGUiOiJwYXlxdW90ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbnRhYmxle1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XG59XG50ZHtcbiAgcGFkZGluZzogOHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4OFxufVxuIl19 */";

/***/ }),

/***/ 5235:
/*!********************************************************!*\
  !*** ./src/app/payquote/payquote.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Payment Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display:flex;align-items: center;\">\n      <img height=\"50px\" src=\"assets/images/access_point.png\">\n      <div style=\"margin-left:5%;font-size:35px; color: black;\">Thank You</div>\n    </div>\n    <p style=\" color: black;\">Please make payments to any of the following bank accounts. Your transaction code is TP0813044857646; Kindly use\n      your transaction code as the payment reference. <br> <br>Your policy details will be sent to you once payment is\n      confirmed. Once payment is made, please send an email to enquiries@cornerstone.com.ng or call 07038764536</p>\n\n    <table class=\"table table-bordered watch\">\n\n      <tbody>\n        <tr>\n\n          <td style=\" color: black;\"> Amount to pay: <br><strong>₦ {{amount}}</strong></td>\n\n\n\n        </tr>\n\n        <tr>\n\n          <td style=\" color: black;\"> Transaction Reference: <br><strong>{{transaction_ref}}</strong></td>\n\n\n\n        </tr>\n\n        <tr>\n\n          <td style=\" color: black;\"> Policy Id: <br><strong>{{policyId}}</strong></td>\n\n\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payquote_payquote_module_ts.js.map