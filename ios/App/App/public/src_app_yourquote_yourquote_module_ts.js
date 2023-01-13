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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXJxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtBQVFGOztBQU5BO0VBQ0UseUJBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFVRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBVUY7O0FBUkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVdGIiwiZmlsZSI6InlvdXJxdW90ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5ib3h7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA1JSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKVxyXG59XHJcbi5ib3gtc3VjY2Vzc3tcclxuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4O1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5idG5kaXZ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5idG57XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIC0tYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uYnRuMXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyOiAxcHggc29saWQgIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 2012:
/*!**********************************************************!*\
  !*** ./src/app/yourquote/yourquote.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div\r\n      style=\"display: flex; align-items: center; justify-content: space-around\"\r\n    >\r\n      <img height=\"50px\" src=\"assets/images/access_point.png\" />\r\n      <h1 style=\"margin: 0px\">Your quote is ready.</h1>\r\n    </div>\r\n    <div class=\"box box-success\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table quotetable table-bordered\">\r\n            <tbody>\r\n              <tr *ngFor=\"let items of quoteItems\">\r\n                <td style=\"width: 30%; color: black\">{{items.label}}</td>\r\n                <td style=\"color: black\">{{items.value}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"btndiv\">\r\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\"\r\n        >Buy Online Now\r\n      </ion-button>\r\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\"\r\n        >Get a new quote\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_yourquote_yourquote_module_ts.js.map