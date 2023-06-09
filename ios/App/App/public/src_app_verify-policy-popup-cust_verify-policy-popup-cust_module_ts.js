"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-policy-popup-cust_verify-policy-popup-cust_module_ts"],{

/***/ 14745:
/*!*************************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyPopupCustPageRoutingModule": () => (/* binding */ VerifyPolicyPopupCustPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _verify_policy_popup_cust_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-popup-cust.page */ 33043);




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

/***/ 13949:
/*!*****************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyPopupCustPageModule": () => (/* binding */ VerifyPolicyPopupCustPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _verify_policy_popup_cust_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-popup-cust-routing.module */ 14745);
/* harmony import */ var _verify_policy_popup_cust_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-popup-cust.page */ 33043);







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

/***/ 33043:
/*!***************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyPopupCustPage": () => (/* binding */ VerifyPolicyPopupCustPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_policy_popup_cust_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-popup-cust.page.html?ngResource */ 50437);
/* harmony import */ var _verify_policy_popup_cust_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-popup-cust.page.scss?ngResource */ 43355);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





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

/***/ 43355:
/*!****************************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn1 {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n}\n\n.btn2 {\n  margin-top: 16px;\n  --background:white ;\n  border: 2px solid #1A206D;\n  color: #1A206D;\n  border-radius: 12px;\n  width: 171px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1wb2xpY3ktcG9wdXAtY3VzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUVKOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBWUYiLCJmaWxlIjoidmVyaWZ5LXBvbGljeS1wb3B1cC1jdXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5pY29uZGl2e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xufVxuLmMtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29uLXAxe1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb24tcDJ7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4O1xufVxuLmlubGluZS10ZXh0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb24tcDN7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbi1wNHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY29uLXA1e1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbn1cbi5idG5kaXZ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNyVcbn1cbi5idG4xe1xuICAtLWJhY2tncm91bmQ6IzFBMjA2RCA7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICB3aWR0aDoxNzFweCA7XG4gIGhlaWdodDogNDhweDtcbn1cbi5idG4ye1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICAtLWJhY2tncm91bmQ6d2hpdGUgO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUEyMDZEO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICB3aWR0aDoxNzFweCA7XG4gIGhlaWdodDogNDhweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 50437:
/*!****************************************************************************************!*\
  !*** ./src/app/verify-policy-popup-cust/verify-policy-popup-cust.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>verify-policy-popup-cust</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n\n\n  <div class=\"container\">\n\n    <div class=\"icondiv\" (click)=\"dismiss()\">\n      <img src=\"assets/images/cross-icon.svg\" alt=\"\">\n    </div>\n\n    <div class=\"c-center\">\n      <p class=\"con-p1\">Verify Policy Result</p>\n      <img src=\"assets/images/model-car.png\" alt=\"\">\n      <p class=\"con-p2\">Car Insurance</p>\n    </div>\n\n    <div>\n      <div class=\"inline-text\">\n        <p class=\"con-p3\">Start Date</p>\n        <p class=\"con-p4\">25/06/2021</p>\n      </div>\n      <div class=\"inline-text\">\n        <p class=\"con-p3\">End Date</p>\n        <p class=\"con-p4\">25/06/2022</p>\n      </div>\n      <div class=\"inline-text\">\n        <p class=\"con-p3\">Vehicle Registration</p>\n        <p class=\"con-p4\">E7682</p>\n      </div>\n      <div class=\"inline-text\">\n        <p class=\"con-p3\">Policy Number</p>\n        <p class=\"con-p4\">98765</p>\n      </div>\n      <div class=\"inline-text\">\n        <p class=\"con-p3\">Status</p>\n        <p class=\"con-p5\">Active</p>\n      </div>\n    </div>\n\n    <div class=\"btndiv\">\n      <ion-button class=\"btn1\" (click)=\"dismiss()\">RENEW POLICY</ion-button>\n      <ion-button class=\"btn2\"  (click)=\"dismiss()\">BACK</ion-button>\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-policy-popup-cust_verify-policy-popup-cust_module_ts.js.map