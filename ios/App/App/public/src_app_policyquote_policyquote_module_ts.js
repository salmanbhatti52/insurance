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
    constructor(location, router, activated) {
        this.location = location;
        this.router = router;
        this.activated = activated;
    }
    ngOnInit() {
        this.quoteitems = JSON.parse(localStorage.getItem('quoteItemsvalues'));
        console.log(this.quoteitems);
        // this.overalltax = Math.floor(Number(localStorage.getItem('overalltax')));
        // this.fname = localStorage.getItem('fname');
        // this.lname = localStorage.getItem('lname');
        // this.userEmail = localStorage.getItem('userEmail');
        // this.mobNumber = localStorage.getItem('mobNumber');
        // this.address = localStorage.getItem('address');
        // this.gender = localStorage.getItem('gender');
        // console.log('fname', this.fname);
        // this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        // console.log('', this.Gproduct);
        // this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));
        // console.log('dsadsads', this.getproduct);
        // console.log('dsadsads', localStorage.getItem('gibsProductres'));
        this.value = localStorage.getItem('valueofvechile');
        this.vechilemake = localStorage.getItem('vechilemake');
        this.vechilemodel = localStorage.getItem('vechilemodel');
        this.productType = localStorage.getItem('productType');
        // this.prices = JSON.parse(localStorage.getItem('motorprices'))
        // console.log(this.prices);
    }
    buyOnlineQuote() {
        console.log('totaltax ---', this.overalltax);
        this.router.navigate(['vehicleinformation']);
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeXF1b3RlLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXGluc3VyYW5jZVxcc3JjXFxhcHBcXHBvbGljeXF1b3RlXFxwb2xpY3lxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNPRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQ09GOztBRExBO0VBQ0UsU0FBQTtBQ1FGOztBRE5BO0VBQ0UseUJBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNVRjs7QURQQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1dGIiwiZmlsZSI6InBvbGljeXF1b3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmJveHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpXHJcbn1cclxuLmJveC1zdWNjZXNze1xyXG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ucGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLmJ0bmRpdntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLmJ0bntcclxuICBjb2xvcjogI2ZmZjtcclxuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5idG4xe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4uYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5ib3gtc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDA7XG59XG5cbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcbn1cblxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogOHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5idG5kaXYge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnRuMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogNDBweDtcbn0iXX0= */";

/***/ }),

/***/ 30165:
/*!**************************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width: 100%\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display: flex; align-items: center; justify-content: space-around\">\r\n      <img height=\"50px\" src=\"assets/images/access_point.png\" />\r\n      <h1 style=\"margin: 0px;color: #000;\">Your quote is ready.</h1>\r\n    </div>\r\n    <div class=\"box box-success\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table quotetable table-bordered\">\r\n            <tbody *ngFor=\"let item of quoteitems\">\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">{{item.label}}</td>\r\n                <td style=\"color: black\" *ngIf=\"item.type==''\">{{item.value}}</td>\r\n                <td style=\"color: black\" *ngIf=\"item.type=='currency'\">₦{{item.value}}</td>\r\n              </tr>\r\n\r\n              <!-- <tr>\r\n                <td style=\"width: 55%; color: black\">Vehicle Make</td>\r\n                <td style=\"color: black\">{{vechilemake}} {{vechilemodel}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Value of Vehicle</td>\r\n                <td style=\"color: black\">₦{{value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Actual Premium</td>\r\n                <td style=\"color: black\">₦{{prices.actual}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Flood Extension</td>\r\n                <td style=\"color: black\">₦{{prices.flood_value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Excess Buy Back</td>\r\n                <td style=\"color: black\">₦{{prices.excess_value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Strike Riot & Civil Commotion</td>\r\n                <td style=\"color: black\">₦{{prices.srcc_value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Increase in Third Party Property Damage</td>\r\n                <td style=\"color: black\">₦{{prices.tppd_value}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Partial Payment</td>\r\n                <td style=\"color: black\">₦{{prices.partial_payment}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Quote (Single Payment)</td>\r\n                <td style=\"color: black\">₦{{prices.Quote}}</td>\r\n              </tr> -->\r\n            </tbody>\r\n\r\n            <!-- <tbody *ngIf=\"productType=='Auto Plus'\">\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Auto Plan of Choice</td>\r\n                <td style=\"color: black\">{{productType}} {{vechilemodel}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Vehicle Make</td>\r\n                <td style=\"color: black\">{{vechilemake}} {{vechilemodel}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Value of Vehicle</td>\r\n                <td style=\"color: black\">₦{{value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Actual Premium</td>\r\n                <td style=\"color: black\">₦{{prices.actual}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Increase in Third Party Property Damage</td>\r\n                <td style=\"color: black\">₦{{prices.tppd_value}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Partial Payment</td>\r\n                <td style=\"color: black\">₦{{prices.partial_payment}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Quote (Single Payment)</td>\r\n                <td style=\"color: black\">₦{{prices.Quote}}</td>\r\n              </tr>\r\n            </tbody>\r\n\r\n            <tbody *ngIf=\"productType=='Uber Classic'\">\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Auto Plan of Choice</td>\r\n                <td style=\"color: black\">{{productType}} {{vechilemodel}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Vehicle Make</td>\r\n                <td style=\"color: black\">{{vechilemake}} {{vechilemodel}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Value of Vehicle</td>\r\n                <td style=\"color: black\">₦{{value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Actual Premium</td>\r\n                <td style=\"color: black\">₦{{prices.actual}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Flood Extension</td>\r\n                <td style=\"color: black\">₦{{prices.flood_value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Excess Buy Back</td>\r\n                <td style=\"color: black\">₦{{prices.excess_value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Strike Riot & Civil Commotion</td>\r\n                <td style=\"color: black\">₦{{prices.srcc_value}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Increase in Third Party Property Damage</td>\r\n                <td style=\"color: black\">₦{{prices.tppd_value}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Partial Payment</td>\r\n                <td style=\"color: black\">₦{{prices.partial_payment}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 55%; color: black\">Quote (Single Payment)</td>\r\n                <td style=\"color: black\">₦{{prices.Quote}}</td>\r\n              </tr>\r\n            </tbody> -->\r\n          </table>\r\n          <!-- <table class=\"table quotetable table-bordered\">\r\n            <tbody>\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">First Name</td>\r\n                <td style=\"color: black\">{{fname}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Last Name</td>\r\n                <td style=\"color: black\">{{lname}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Email</td>\r\n                <td style=\"color: black\">{{userEmail}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Address</td>\r\n                <td style=\"color: black\">{{address}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Gender</td>\r\n                <td style=\"color: black\">{{gender}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Phone</td>\r\n                <td style=\"color: black\">{{mobNumber}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Policy Number</td>\r\n                <td style=\"color: black\">{{getproduct.policyNo}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Plan of Choice</td>\r\n                <td style=\"color: black\">{{Gproduct.productName}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 30%; color: black\">Quote</td>\r\n                <td style=\"color: black\">{{overalltax}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"btndiv\">\r\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\">Buy Online Now\r\n      </ion-button>\r\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\">Get a new quote\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_policyquote_policyquote_module_ts.js.map