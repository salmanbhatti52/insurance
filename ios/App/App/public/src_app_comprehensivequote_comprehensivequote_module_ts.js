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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A5b506;\n  --border:1px solid #A5b506;\n  width: 100%;\n  font-size: 14px;\n  --border-radius:4px;\n}\n\n.btn1 {\n  color: #000;\n  --background: #dddddd;\n  --border:1px solid #d1d1d1;\n  font-size: 14px;\n  width: 100%;\n  --border-radius:4px;\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByZWhlbnNpdmVxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtBQVFGOztBQU5BO0VBQ0UseUJBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFVRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFXRiIsImZpbGUiOiJjb21wcmVoZW5zaXZlcXVvdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uYm94e1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA1JSlcclxufVxyXG4uYm94LXN1Y2Nlc3N7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYnRuZGl2e1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZDogI0E1YjUwNjtcclxuICAtLWJvcmRlcjoxcHggc29saWQgI0E1YjUwNjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjRweDtcclxufVxyXG4uYnRuMXtcclxuICBjb2xvcjogIzAwMDtcclxuICAtLWJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbiAgLS1ib3JkZXI6MXB4IHNvbGlkICNkMWQxZDE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbiJdfQ== */";

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