"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_policyquote_policyquote_module_ts"],{

/***/ 7021:
/*!***********************************************************!*\
  !*** ./src/app/policyquote/policyquote-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePageRoutingModule": () => (/* binding */ PolicyquotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _policyquote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page */ 7981);




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

/***/ 2210:
/*!***************************************************!*\
  !*** ./src/app/policyquote/policyquote.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePageModule": () => (/* binding */ PolicyquotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _policyquote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote-routing.module */ 7021);
/* harmony import */ var _policyquote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page */ 7981);







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

/***/ 7981:
/*!*************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePage": () => (/* binding */ PolicyquotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _policyquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page.html?ngResource */ 165);
/* harmony import */ var _policyquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page.scss?ngResource */ 9302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let PolicyquotePage = class PolicyquotePage {
    constructor(location) {
        this.location = location;
    }
    goback() {
        this.location.back();
    }
    ngOnInit() {
        this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        console.log('', this.Gproduct);
        this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));
        console.log('dsadsads', this.getproduct);
    }
};
PolicyquotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
PolicyquotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5Q0FBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FBT0Y7O0FBTEE7RUFDRSxTQUFBO0FBUUY7O0FBTkE7RUFDRSx5QkFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQVVGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFVRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFVRjs7QUFSQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBV0YiLCJmaWxlIjoicG9saWN5cXVvdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uYm94e1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA1JSlcclxufVxyXG4uYm94LXN1Y2Nlc3N7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYnRuZGl2e1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAtLWJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmJ0bjF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAtLWJvcmRlcjogMXB4IHNvbGlkICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 165:
/*!**************************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <!-- <div class=\"title\">Make a Quote</div> -->\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display:flex;align-items: center;\r\n    justify-content: space-around;\">\r\n      <!-- <img height=\"50px\" src=\"assets/images/access_point.png\"> -->\r\n      <h3 style=\"margin:0px;text-align:center;\">Insurance Request Completed Successfully</h3>\r\n    </div>\r\n    <div class=\"box box-success\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table quotetable table-bordered\">\r\n            <tbody>\r\n              <tr>\r\n                <td style=\"width: 30%; color: black;\">Policy Number</td>\r\n                <td style=\"color: black;\">{{getproduct.policyNo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 30%; color: black;\">Plan of Choice</td>\r\n                <td style=\"color: black;\">{{Gproduct.productName}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"btndiv\">\r\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\">Buy Online Now </ion-button>\r\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\">Get a new quote </ion-button>\r\n    </div> -->\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_policyquote_policyquote_module_ts.js.map