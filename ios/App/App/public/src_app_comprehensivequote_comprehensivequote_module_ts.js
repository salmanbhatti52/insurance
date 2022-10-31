"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_comprehensivequote_comprehensivequote_module_ts"],{

/***/ 1280:
/*!*************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprehensivequotePageRoutingModule": () => (/* binding */ ComprehensivequotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _comprehensivequote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprehensivequote.page */ 6103);




const routes = [
    {
        path: '',
        component: _comprehensivequote_page__WEBPACK_IMPORTED_MODULE_0__.ComprehensivequotePage
    }
];
let ComprehensivequotePageRoutingModule = class ComprehensivequotePageRoutingModule {
};
ComprehensivequotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComprehensivequotePageRoutingModule);



/***/ }),

/***/ 4366:
/*!*****************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprehensivequotePageModule": () => (/* binding */ ComprehensivequotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comprehensivequote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprehensivequote-routing.module */ 1280);
/* harmony import */ var _comprehensivequote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comprehensivequote.page */ 6103);







let ComprehensivequotePageModule = class ComprehensivequotePageModule {
};
ComprehensivequotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comprehensivequote_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComprehensivequotePageRoutingModule
        ],
        declarations: [_comprehensivequote_page__WEBPACK_IMPORTED_MODULE_1__.ComprehensivequotePage]
    })
], ComprehensivequotePageModule);



/***/ }),

/***/ 6103:
/*!***************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprehensivequotePage": () => (/* binding */ ComprehensivequotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _comprehensivequote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprehensivequote.page.html?ngResource */ 2758);
/* harmony import */ var _comprehensivequote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comprehensivequote.page.scss?ngResource */ 2745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ComprehensivequotePage = class ComprehensivequotePage {
    constructor() { }
    ngOnInit() {
    }
};
ComprehensivequotePage.ctorParameters = () => [];
ComprehensivequotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comprehensivequote',
        template: _comprehensivequote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comprehensivequote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComprehensivequotePage);



/***/ }),

/***/ 2745:
/*!****************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A5b506;\n  --border:1px solid #A5b506;\n  width: 100%;\n  font-size: 14px;\n  --border-radius:4px;\n}\n\n.btn1 {\n  color: #000;\n  --background: #dddddd;\n  --border:1px solid #d1d1d1;\n  font-size: 14px;\n  width: 100%;\n  --border-radius:4px;\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByZWhlbnNpdmVxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtBQVFGOztBQU5BO0VBQ0UseUJBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFVRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFXRiIsImZpbGUiOiJjb21wcmVoZW5zaXZlcXVvdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndyYXBwZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5ib3h7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKVxufVxuLmJveC1zdWNjZXNze1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xufVxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcblxufVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbi50YWJsZS1yZXNwb25zaXZlIC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcbn1cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uYnRuZGl2e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5idG57XG4gIGNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6ICNBNWI1MDY7XG4gIC0tYm9yZGVyOjFweCBzb2xpZCAjQTViNTA2O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6NHB4O1xufVxuLmJ0bjF7XG4gIGNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQ6ICNkZGRkZGQ7XG4gIC0tYm9yZGVyOjFweCBzb2xpZCAjZDFkMWQxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJvcmRlci1yYWRpdXM6NHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuIl19 */";

/***/ }),

/***/ 2758:
/*!****************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display:flex;align-items: center;\n    justify-content: space-around;\">\n      <img height=\"50px\" src=\"assets/images/access_point.png\">\n      <h1 style=\"margin:0px;\"> Your quote is ready. </h1>\n    </div>\n    <div class=\"box box-success\">\n      <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table quotetable table-bordered\">\n            <tbody>\n              <tr>\n                <td>Auto Plan of Choice</td>\n                <td>Auto Classic A4</td>\n              </tr>\n              <tr>\n                <td>Vehicle Make</td>\n                <td>Audi A4</td>\n              </tr>\n              <tr>\n                <td>Value of Vehicle</td>\n                <td>₦3,500,000.00</td>\n              </tr>\n              <tr>\n                <td>Actual Premium</td>\n                <td>₦61,250.00</td>\n              </tr>\n              <tr>\n                <td>Flood Extension</td>\n                <td>₦0.00</td>\n              </tr>\n              <tr>\n                <td>Excess Buy Back</td>\n                <td>₦0.00</td>\n              </tr>\n              <tr>\n                <td>Strike Riot &amp; Civil Commotion</td>\n                <td>₦0.00</td>\n              </tr>\n              <tr>\n                <td>Increase in Third Party Property Damage</td>\n                <td>₦0.00</td>\n              </tr>\n              <tr>\n                <td>Quote</td>\n                <td>₦61,250.00</td>\n              </tr>\n              <tr>\n                <td>Quote (Single Payment)</td>\n                <td>₦61,250.00</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"btndiv\">\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\">Buy Online Now </ion-button>\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\">Get a new quote </ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_comprehensivequote_comprehensivequote_module_ts.js.map