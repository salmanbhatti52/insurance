"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_policyquote_policyquote_module_ts"],{

/***/ 27021:
/*!***********************************************************!*\
  !*** ./src/app/policyquote/policyquote-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePageRoutingModule": () => (/* binding */ PolicyquotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _policyquote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page */ 37981);




const routes = [
    {
        path: '',
        component: _policyquote_page__WEBPACK_IMPORTED_MODULE_0__.PolicyquotePage
    }
];
let PolicyquotePageRoutingModule = class PolicyquotePageRoutingModule {
};
PolicyquotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PolicyquotePageRoutingModule);



/***/ }),

/***/ 92210:
/*!***************************************************!*\
  !*** ./src/app/policyquote/policyquote.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePageModule": () => (/* binding */ PolicyquotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _policyquote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote-routing.module */ 27021);
/* harmony import */ var _policyquote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page */ 37981);







let PolicyquotePageModule = class PolicyquotePageModule {
};
PolicyquotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _policyquote_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicyquotePageRoutingModule
        ],
        declarations: [_policyquote_page__WEBPACK_IMPORTED_MODULE_1__.PolicyquotePage]
    })
], PolicyquotePageModule);



/***/ }),

/***/ 37981:
/*!*************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePage": () => (/* binding */ PolicyquotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _policyquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page.html?ngResource */ 30165);
/* harmony import */ var _policyquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page.scss?ngResource */ 9302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let PolicyquotePage = class PolicyquotePage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
        this.overalltax = localStorage.getItem('overalltax');
        this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        console.log('', this.Gproduct);
        this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));
        console.log('dsadsads', this.getproduct);
        console.log('dsadsads', localStorage.getItem('gibsProductres'));
    }
    buyOnlineQuote() {
        console.log('totaltax ---', this.overalltax);
        this.router.navigate(['payment2']);
    }
    getAnewQuote() {
        this.router.navigate(['/home-page-screen-after-login']);
    }
    goback() {
        this.location.back();
    }
};
PolicyquotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PolicyquotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-policyquote',
        template: _policyquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_policyquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PolicyquotePage);



/***/ }),

/***/ 9302:
/*!**************************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5Q0FBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FBT0Y7O0FBTEE7RUFDRSxTQUFBO0FBUUY7O0FBTkE7RUFDRSx5QkFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQVVGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFVRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFVRjs7QUFSQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBV0YiLCJmaWxlIjoicG9saWN5cXVvdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndyYXBwZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5ib3h7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKVxufVxuLmJveC1zdWNjZXNze1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xufVxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcblxufVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbi50YWJsZS1yZXNwb25zaXZlIC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcbn1cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uYnRuZGl2e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5idG57XG4gIGNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uYnRuMXtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */";

/***/ }),

/***/ 30165:
/*!**************************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <ion-buttons>\n          <div style=\"width: 100%\">\n            <img\n              (click)=\"goback()\"\n              src=\"assets/images/back-arrow.svg\"\n              alt=\"sb-btn\"\n            />\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div\n      style=\"display: flex; align-items: center; justify-content: space-around\"\n    >\n      <img height=\"50px\" src=\"assets/images/access_point.png\" />\n      <h1 style=\"margin: 0px\">Your quote is ready.</h1>\n    </div>\n    <div class=\"box box-success\">\n      <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table quotetable table-bordered\">\n            <tbody>\n              <tr>\n                <td style=\"width: 30%; color: black\">First Name</td>\n                <td style=\"color: black\">{{getproduct.insured.firstName}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Last Name</td>\n                <td style=\"color: black\">{{getproduct.insured.lastName}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Email</td>\n                <td style=\"color: black\">{{getproduct.insured.email}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Address</td>\n                <td style=\"color: black\">{{getproduct.insured.address}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Gender</td>\n                <td style=\"color: black\">{{getproduct.insured.gender}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Phone</td>\n                <td style=\"color: black\">{{getproduct.insured.phoneLine1}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Policy Number</td>\n                <td style=\"color: black\">{{getproduct.policyNo}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Plan of Choice</td>\n                <td style=\"color: black\">{{Gproduct.productName}}</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 30%; color: black\">Quote</td>\n                <td style=\"color: black\">{{overalltax}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"btndiv\">\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\"\n        >Buy Online Now\n      </ion-button>\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\"\n        >Get a new quote\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_policyquote_policyquote_module_ts.js.map