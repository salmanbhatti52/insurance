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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table-bordered {\n  border: 1px solid #b8b988;\n}\n\ntd {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border: 1px solid #b8b988;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDRSx5QkFBQTtBQUVKOztBQUFBO0VBQ0UsV0FBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFLRiIsImZpbGUiOiJwYXlxdW90ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbnRhYmxle1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG50ZHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5235:
/*!********************************************************!*\
  !*** ./src/app/payquote/payquote.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Payment Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <img height=\"50px\" src=\"assets/images/access_point.png\" />\r\n      <div style=\"margin-left: 5%; font-size: 35px; color: black\">\r\n        Thank You\r\n      </div>\r\n    </div>\r\n    <p style=\"color: black\">\r\n      Please make payments to any of the following bank accounts. Your\r\n      transaction code is TP0813044857646; Kindly use your transaction code as\r\n      the payment reference. <br />\r\n      <br />Your policy details will be sent to you once payment is confirmed.\r\n      Once payment is made, please send an email to enquiries@cornerstone.com.ng\r\n      or call 07038764536\r\n    </p>\r\n\r\n    <table class=\"table table-bordered watch\">\r\n      <tbody>\r\n        <tr>\r\n          <td style=\"color: black\">\r\n            Amount to pay: <br /><strong>₦ {{amount}}</strong>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td style=\"color: black\">\r\n            Transaction Reference: <br /><strong>{{transaction_ref}}</strong>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td style=\"color: black\">\r\n            Policy Id: <br /><strong>{{policyId}}</strong>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payquote_payquote_module_ts.js.map