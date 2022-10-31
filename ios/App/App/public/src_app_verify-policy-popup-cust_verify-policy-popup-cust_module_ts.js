"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-policy-popup-cust_verify-policy-popup-cust_module_ts"],{

/***/ 4745:
/*!*************************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyPopupCustPageRoutingModule": () => (/* binding */ VerifyPolicyPopupCustPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _verify_policy_popup_cust_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-popup-cust.page */ 3043);




const routes = [
    {
        path: '',
        component: _verify_policy_popup_cust_page__WEBPACK_IMPORTED_MODULE_0__.VerifyPolicyPopupCustPage
    }
];
let VerifyPolicyPopupCustPageRoutingModule = class VerifyPolicyPopupCustPageRoutingModule {
};
VerifyPolicyPopupCustPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyPolicyPopupCustPageRoutingModule);



/***/ }),

/***/ 3949:
/*!*****************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyPopupCustPageModule": () => (/* binding */ VerifyPolicyPopupCustPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _verify_policy_popup_cust_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-popup-cust-routing.module */ 4745);
/* harmony import */ var _verify_policy_popup_cust_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-popup-cust.page */ 3043);







let VerifyPolicyPopupCustPageModule = class VerifyPolicyPopupCustPageModule {
};
VerifyPolicyPopupCustPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_policy_popup_cust_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyPolicyPopupCustPageRoutingModule
        ],
        declarations: [_verify_policy_popup_cust_page__WEBPACK_IMPORTED_MODULE_1__.VerifyPolicyPopupCustPage]
    })
], VerifyPolicyPopupCustPageModule);



/***/ }),

/***/ 3043:
/*!***************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyPopupCustPage": () => (/* binding */ VerifyPolicyPopupCustPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _verify_policy_popup_cust_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-popup-cust.page.html?ngResource */ 437);
/* harmony import */ var _verify_policy_popup_cust_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-popup-cust.page.scss?ngResource */ 3355);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let VerifyPolicyPopupCustPage = class VerifyPolicyPopupCustPage {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modal.dismiss();
    }
};
VerifyPolicyPopupCustPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
VerifyPolicyPopupCustPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verify-policy-popup-cust',
        template: _verify_policy_popup_cust_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_policy_popup_cust_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyPolicyPopupCustPage);



/***/ }),

/***/ 3355:
/*!****************************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn1 {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n}\n\n.btn2 {\n  margin-top: 16px;\n  --background:white ;\n  border: 2px solid #1A206D;\n  color: #1A206D;\n  border-radius: 12px;\n  width: 171px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1wb2xpY3ktcG9wdXAtY3VzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUVKOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBWUYiLCJmaWxlIjoidmVyaWZ5LXBvbGljeS1wb3B1cC1jdXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmljb25kaXZ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG59XHJcbi5jLWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbi1wMXtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uY29uLXAye1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5pbmxpbmUtdGV4dHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uY29uLXAze1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jb24tcDR7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jb24tcDV7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ0bmRpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNyVcclxufVxyXG4uYnRuMXtcclxuICAtLWJhY2tncm91bmQ6IzFBMjA2RCA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgd2lkdGg6MTcxcHggO1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4uYnRuMntcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIC0tYmFja2dyb3VuZDp3aGl0ZSA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFBMjA2RDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgd2lkdGg6MTcxcHggO1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 437:
/*!****************************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>verify-policy-popup-cust</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"icondiv\" (click)=\"dismiss()\">\r\n      <img src=\"assets/images/cross-icon.svg\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"c-center\">\r\n      <p class=\"con-p1\">Verify Policy Result</p>\r\n      <img src=\"assets/images/model-car.png\" alt=\"\">\r\n      <p class=\"con-p2\">Car Insurance</p>\r\n    </div>\r\n\r\n    <div>\r\n      <div class=\"inline-text\">\r\n        <p class=\"con-p3\">Start Date</p>\r\n        <p class=\"con-p4\">25/06/2021</p>\r\n      </div>\r\n      <div class=\"inline-text\">\r\n        <p class=\"con-p3\">End Date</p>\r\n        <p class=\"con-p4\">25/06/2022</p>\r\n      </div>\r\n      <div class=\"inline-text\">\r\n        <p class=\"con-p3\">Vehicle Registration</p>\r\n        <p class=\"con-p4\">E7682</p>\r\n      </div>\r\n      <div class=\"inline-text\">\r\n        <p class=\"con-p3\">Policy Number</p>\r\n        <p class=\"con-p4\">98765</p>\r\n      </div>\r\n      <div class=\"inline-text\">\r\n        <p class=\"con-p3\">Status</p>\r\n        <p class=\"con-p5\">Active</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btndiv\">\r\n      <ion-button class=\"btn1\" (click)=\"dismiss()\">RENEW POLICY</ion-button>\r\n      <ion-button class=\"btn2\"  (click)=\"dismiss()\">BACK</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-policy-popup-cust_verify-policy-popup-cust_module_ts.js.map