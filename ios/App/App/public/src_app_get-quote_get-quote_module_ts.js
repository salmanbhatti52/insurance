"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_get-quote_get-quote_module_ts"],{

/***/ 4091:
/*!*******************************************************!*\
  !*** ./src/app/get-quote/get-quote-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetQuotePageRoutingModule": () => (/* binding */ GetQuotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _get_quote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-quote.page */ 5502);




const routes = [
    {
        path: '',
        component: _get_quote_page__WEBPACK_IMPORTED_MODULE_0__.GetQuotePage
    }
];
let GetQuotePageRoutingModule = class GetQuotePageRoutingModule {
};
GetQuotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GetQuotePageRoutingModule);



/***/ }),

/***/ 682:
/*!***********************************************!*\
  !*** ./src/app/get-quote/get-quote.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetQuotePageModule": () => (/* binding */ GetQuotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _get_quote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-quote-routing.module */ 4091);
/* harmony import */ var _get_quote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-quote.page */ 5502);







let GetQuotePageModule = class GetQuotePageModule {
};
GetQuotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _get_quote_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetQuotePageRoutingModule
        ],
        declarations: [_get_quote_page__WEBPACK_IMPORTED_MODULE_1__.GetQuotePage]
    })
], GetQuotePageModule);



/***/ }),

/***/ 5502:
/*!*********************************************!*\
  !*** ./src/app/get-quote/get-quote.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetQuotePage": () => (/* binding */ GetQuotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _get_quote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-quote.page.html?ngResource */ 2612);
/* harmony import */ var _get_quote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-quote.page.scss?ngResource */ 377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




// import { ModalController } from '@ionic/angular';
// import { QuotePopupPage } from '../quote-popup/quote-popup.page';


let GetQuotePage = class GetQuotePage {
    constructor(router, 
    // public modal: ModalController,
    location) {
        this.router = router;
        this.location = location;
        this.result = '';
        this.logo = false;
    }
    ngOnInit() {
    }
    goback() {
        this.router.navigate(['/home-page-screen-after-login']);
    }
    crazyEvent(ev) {
        this.result = ev.detail.value;
    }
    GetQuote() {
        if (this.result == '') {
            this.logo = true;
        }
    }
};
GetQuotePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
GetQuotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-get-quote',
        template: _get_quote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_get_quote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GetQuotePage);



/***/ }),

/***/ 377:
/*!**********************************************************!*\
  !*** ./src/app/get-quote/get-quote.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.title-div {\n  display: flex;\n  width: 85%;\n  margin: 20px auto 0px;\n  align-items: center;\n}\n\np.para {\n  margin: 0px;\n  padding-bottom: 2px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n}\n\n.input {\n  height: 48px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  --padding-start: 8px;\n  --padding-end: 20px;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  /* margin-top: 20px; */\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background: #1A206D;\n}\n\n.container {\n  width: 85%;\n  margin: 20px auto 0px;\n}\n\np.con-p1 {\n  margin: 0px;\n  margin-top: 32px;\n  margin-left: 7px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #1A206D;\n}\n\np.con-p2 {\n  margin: 0px;\n  font-size: 33px;\n  font-weight: 700;\n  color: #1A206D;\n  /* width: 60%; */\n}\n\n.img-div {\n  text-align: center;\n  margin: 60px auto 0px 10px;\n}\n\n.btn-footer {\n  width: 85%;\n  margin: 20px auto 30px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1xdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7QUFRSjs7QUFOQTtFQUNJLDRCQUFBO0FBU0oiLCJmaWxlIjoiZ2V0LXF1b3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGl0bGUtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnAucGFyYSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxufVxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn1cclxucC5jb24tcDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxufVxyXG5cclxuXHJcbnAuY29uLXAyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgLyogd2lkdGg6IDYwJTsgKi9cclxufVxyXG4uaW1nLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0byAwcHggMTBweDtcclxufVxyXG4uYnRuLWZvb3RlciB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2612:
/*!**********************************************************!*\
  !*** ./src/app/get-quote/get-quote.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Get Quote</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <p class=\"con-p1\">Enter Customer Email ID</p>\r\n\r\n    <ion-input class=\"input\" type=\"email\" placeholder=\"Example@Gmail.com\"><img style=\"margin:15px 7px 14px 15px;\"\r\n        src=\"assets/images/icons/email.svg\" (ionChange)=\"crazyEvent($event)\"></ion-input>\r\n\r\n    <div style=\"width: 60%;text-align: center;margin:30px auto 0px;\" *ngIf=\"logo==true\">\r\n      <p class=\"con-p2\">Record Doesn't Exist</p>\r\n    </div>\r\n\r\n    <div class=\"img-div\" *ngIf=\"logo==true\">\r\n      <img src=\"assets/images/file-not-found.svg\">\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"btn-footer\" style=\"text-align: center;\">\r\n    <ion-button class=\"btn\" (click)=\"GetQuote()\">Get Quote</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_get-quote_get-quote_module_ts.js.map