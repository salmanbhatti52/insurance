"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_thirdpartydetails_thirdpartydetails_module_ts"],{

/***/ 1399:
/*!***********************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdpartydetailsPageRoutingModule": () => (/* binding */ ThirdpartydetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpartydetails.page */ 74952);




const routes = [
    {
        path: '',
        component: _thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_0__.ThirdpartydetailsPage
    }
];
let ThirdpartydetailsPageRoutingModule = class ThirdpartydetailsPageRoutingModule {
};
ThirdpartydetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThirdpartydetailsPageRoutingModule);



/***/ }),

/***/ 64829:
/*!***************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdpartydetailsPageModule": () => (/* binding */ ThirdpartydetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _thirdpartydetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpartydetails-routing.module */ 1399);
/* harmony import */ var _thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdpartydetails.page */ 74952);







let ThirdpartydetailsPageModule = class ThirdpartydetailsPageModule {
};
ThirdpartydetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _thirdpartydetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThirdpartydetailsPageRoutingModule
        ],
        declarations: [_thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_1__.ThirdpartydetailsPage]
    })
], ThirdpartydetailsPageModule);



/***/ }),

/***/ 74952:
/*!*************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdpartydetailsPage": () => (/* binding */ ThirdpartydetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _thirdpartydetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpartydetails.page.html?ngResource */ 26112);
/* harmony import */ var _thirdpartydetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdpartydetails.page.scss?ngResource */ 80959);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let ThirdpartydetailsPage = class ThirdpartydetailsPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
ThirdpartydetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
ThirdpartydetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-thirdpartydetails',
        template: _thirdpartydetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_thirdpartydetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThirdpartydetailsPage);



/***/ }),

/***/ 80959:
/*!**************************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n.wrapper {\n  width: 85%;\n  margin: 0% auto;\n}\n.htitle {\n  color: #A8B400;\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  margin-top: 14px;\n}\n.p1 {\n  color: #1A206D;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  font-weight: 900;\n}\np.number-styling {\n  font-size: 10px;\n  font-weight: 400;\n  background: #A8B400;\n  height: 13px;\n  width: 16px;\n  color: white;\n  border-radius: 50%;\n  padding-left: 3.5px;\n  padding-bottom: 0px;\n  margin: 0px;\n  margin-right: 8px;\n  margin-top: 2px;\n  font-family: \"Bliss Pro\";\n}\n.p2 {\n  color: #5D5D5D;\n  font-family: Bliss Pro;\n  font-size: 14px;\n  margin: 0px;\n}\n.p3 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\nul li {\n  color: #000000;\n  font-family: Bliss Pro;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.5;\n}\nul {\n  list-style: none;\n}\nul li::before {\n  content: \"•\";\n  color: #A8B400;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n.btn {\n  width: 273px;\n  height: 48px;\n  --background: #1A206D;\n  --border-radius: 12px;\n  opacity: 1;\n  font-size: 20px;\n  font-family: \"Bliss Pro\";\n  text-transform: capitalize;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkcGFydHlkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUdGO0FBREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FBREE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0UsZUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFLSjtBQUhBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBT0Y7QUFMQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUUY7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7QUFQQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVVGO0FBUkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQVdGIiwiZmlsZSI6InRoaXJkcGFydHlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmh0aXRsZXtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnAxe1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxucC5udW1iZXItc3R5bGluZyB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMy41cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJsaXNzIFByb1wiO1xyXG59XHJcbi5wMntcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4ucDN7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxudWwgbGl7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsIGxpOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbn1cclxuLmJ0bntcclxuICB3aWR0aDogMjczcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdCbGlzcyBQcm8nO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 26112:
/*!**************************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Product Details</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"htitle\">\r\n      <img style=\"height: 16px\" src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />\r\n      Third Party\r\n    </div>\r\n    <img\r\n      src=\"assets/images/thridPartyCar.svg\"\r\n      style=\"border-radius: 12px; margin-top: 5%; background: #eaeaea\"\r\n    />\r\n\r\n    <span class=\"right_side_des\" style=\"text-align: left\">\r\n      <p class=\"p1\">\r\n        Third party motor insurance provides cover for the following:\r\n      </p>\r\n      <div style=\"display: flex\">\r\n        <p class=\"number-styling\" style=\"width: 13.35px\">1</p>\r\n        <p class=\"p2\">\r\n          Damage to third party property up to a limit of N1,000,000\r\n        </p>\r\n      </div>\r\n\r\n      <div style=\"display: flex; margin-top: 8px\">\r\n        <p class=\"number-styling\">2</p>\r\n        <p class=\"p2\">\r\n          Unlimited (but reasonable) liability for death / bodily injury to\r\n          third parties.\r\n        </p>\r\n      </div>\r\n\r\n      <p class=\"p3\">To buy product, you will need:</p>\r\n      <ul>\r\n        <li>Chassis Number</li>\r\n        <li>Engine Number</li>\r\n        <li>Vehicle Registration Number</li>\r\n      </ul>\r\n      <p class=\"p2\" style=\"line-height: 1.3\">\r\n        You can find these on your vehicle license document which you are\r\n        required to upload on your account after purchase.\r\n      </p>\r\n    </span>\r\n\r\n    <div style=\"text-align: center; margin-top: 45px\">\r\n      <ion-button class=\"btn\">Quote</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_thirdpartydetails_thirdpartydetails_module_ts.js.map