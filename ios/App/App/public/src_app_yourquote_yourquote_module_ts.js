"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_yourquote_yourquote_module_ts"],{

/***/ 21520:
/*!*******************************************************!*\
  !*** ./src/app/yourquote/yourquote-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourquotePageRoutingModule": () => (/* binding */ YourquotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _yourquote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yourquote.page */ 60248);




const routes = [
    {
        path: '',
        component: _yourquote_page__WEBPACK_IMPORTED_MODULE_0__.YourquotePage
    }
];
let YourquotePageRoutingModule = class YourquotePageRoutingModule {
};
YourquotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], YourquotePageRoutingModule);



/***/ }),

/***/ 67762:
/*!***********************************************!*\
  !*** ./src/app/yourquote/yourquote.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourquotePageModule": () => (/* binding */ YourquotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _yourquote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yourquote-routing.module */ 21520);
/* harmony import */ var _yourquote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yourquote.page */ 60248);







let YourquotePageModule = class YourquotePageModule {
};
YourquotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _yourquote_routing_module__WEBPACK_IMPORTED_MODULE_0__.YourquotePageRoutingModule
        ],
        declarations: [_yourquote_page__WEBPACK_IMPORTED_MODULE_1__.YourquotePage]
    })
], YourquotePageModule);



/***/ }),

/***/ 60248:
/*!*********************************************!*\
  !*** ./src/app/yourquote/yourquote.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourquotePage": () => (/* binding */ YourquotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _yourquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yourquote.page.html?ngResource */ 2012);
/* harmony import */ var _yourquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yourquote.page.scss?ngResource */ 84147);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);



/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */



let YourquotePage = class YourquotePage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.value = localStorage.getItem('subProName');
    }
    ngOnInit() {
        this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
    }
    buyOnlineQuote() {
        this.router.navigate(['/car-insurance-details']);
    }
    getAnewQuote() {
        this.router.navigate(['/home-page-screen-after-login']);
    }
    goback() {
        this.location.back();
    }
};
YourquotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
YourquotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-yourquote',
        template: _yourquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_yourquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], YourquotePage);



/***/ }),

/***/ 84147:
/*!**********************************************************!*\
  !*** ./src/app/yourquote/yourquote.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXJxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtBQVFGOztBQU5BO0VBQ0UseUJBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFVRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBVUY7O0FBUkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVdGIiwiZmlsZSI6InlvdXJxdW90ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud3JhcHBlcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuLmJveHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpXG59XG4uYm94LXN1Y2Nlc3N7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG50YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAwO1xufVxuLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4O1xufVxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogOHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5idG5kaXZ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLmJ0bntcbiAgY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5idG4xe1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMUEyMDZEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 2012:
/*!**********************************************************!*\
  !*** ./src/app/yourquote/yourquote.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display:flex;align-items: center;\n    justify-content: space-around;\">\n      <img height=\"50px\" src=\"assets/images/access_point.png\">\n      <h1 style=\"margin:0px;\"> Your quote is ready. </h1>\n    </div>\n    <div class=\"box box-success\" >\n      <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table quotetable table-bordered\">\n            <tbody>\n              <tr *ngFor=\"let items of quoteItems\" >\n                <td style=\"width: 30%; color: black;\">{{items.label}}</td>\n                <td style=\"color: black;\">{{items.value}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"btndiv\">\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\">Buy Online Now </ion-button>\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\">Get a new quote </ion-button>\n    </div>\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_yourquote_yourquote_module_ts.js.map