"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_test_test_module_ts"],{

/***/ 31764:
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": () => (/* binding */ TestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 36103);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestPageRoutingModule);



/***/ }),

/***/ 16615:
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": () => (/* binding */ TestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 31764);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 36103);
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ 1700);








let TestPageModule = class TestPageModule {
};
TestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule,
            angular4_paystack__WEBPACK_IMPORTED_MODULE_7__.Angular4PaystackModule.forRoot('pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f')
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage]
    })
], TestPageModule);



/***/ }),

/***/ 36103:
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page.html?ngResource */ 72775);
/* harmony import */ var _test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page.scss?ngResource */ 97267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TestPage = class TestPage {
    constructor() {
        this.reference = '';
        this.amt = 300000;
    }
    paymentInit() {
        console.log('Payment initialized');
    }
    paymentDone(ref) {
        this.title = 'Payment successfull';
        console.log(this.title, ref);
    }
    paymentCancel() {
        console.log('payment failed');
    }
    ngOnInit() {
        this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    }
};
TestPage.ctorParameters = () => [];
TestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-test',
        template: _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestPage);



/***/ }),

/***/ 97267:
/*!************************************************!*\
  !*** ./src/app/test/test.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A0F55;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A0F55;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius:12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.tickimg {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A0F55;\n  --border-radius:12px ;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxcdGVzdFxcdGVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNHRjs7QURGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTUY7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNRRjs7QUROQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7QUNXRjs7QURUQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNZRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDYUY7O0FEVkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNhRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNjRjs7QURaQTtFQUNFLHlCQUFBO0FDZUY7O0FEYkE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ2dCRiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG8gMjUlO1xyXG59XHJcbi5zZWdtZW50MSB7XHJcbiAgcGFkZGluZzogNXB4IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgLnNidG4ge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC0tbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEwRjU1O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiAjODU4NThBO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG4uaHRleHQxe1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucjF7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ucjJ7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubWFpbntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uY2ZsZXh7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2ZsZXgxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHQxe1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4uY3NwYW57XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50ZXh0M3tcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogMTAwJTs7XHJcbn1cclxuLnRleHQ0e1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDozMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50ZXh0NXtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1nZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZHRleHR7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmJ0bmRpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bntcclxuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2lkdGg6IDIwM3B4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5ib3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG59XHJcbi5pdGV4dHtcclxuICBjb2xvcjojNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4udGlja2ltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcclxufVxyXG4uYnRuMXtcclxuICAtLWJhY2tncm91bmQ6ICMxQTBGNTU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xyXG4gIHdpZHRoOiAyNzNweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuIiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDUlIGF1dG8gMjUlO1xufVxuXG4uc2VnbWVudDEge1xuICBwYWRkaW5nOiA1cHggM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlZ21lbnQxIC5zYnRuIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xuICAtLW1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTBGNTU7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjODU4NThBO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmh0ZXh0MSB7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yMSB7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB3aWR0aDogNDVweDtcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ucjIge1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5jZmxleCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5jZmxleDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMS41JTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0MSB7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jc3BhbiB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZXh0MyB7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dDQge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dDUge1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZ2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkdGV4dCB7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG5kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAyMDNweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uaXRleHQge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRpY2tpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xufVxuXG4uYnRuMSB7XG4gIC0tYmFja2dyb3VuZDogIzFBMEY1NTtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xuICB3aWR0aDogMjczcHg7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";

/***/ }),

/***/ 72775:
/*!************************************************!*\
  !*** ./src/app/test/test.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- ------------------------1-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">25,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Evacaution</div>\r\n            <div class=\"text4\">35,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">20,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n            <div class=\"text4\">20,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Death</div>\r\n            <div class=\"text4\">50,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------2-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">50,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Evacaution</div>\r\n            <div class=\"text4\">70,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">40,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n            <div class=\"text4\">40,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Death</div>\r\n            <div class=\"text4\">100,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------3-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">75,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Evacaution</div>\r\n            <div class=\"text4\">105,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">60,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n            <div class=\"text4\">60,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Death</div>\r\n            <div class=\"text4\">150,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------4-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">100,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Evacaution</div>\r\n            <div class=\"text4\">140,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">80,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n            <div class=\"text4\">80,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Death</div>\r\n            <div class=\"text4\">200,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------5-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">50,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">20,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Personal Accident(Death)</div>\r\n            <div class=\"text4\">100,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\r\n            <div class=\"text4\">20,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------6-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">75,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">30,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Personal Accident(Death)</div>\r\n            <div class=\"text4\">150,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\r\n            <div class=\"text4\">30,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------7-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center\">\r\n            <b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">100,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">40,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Personal Accident(Death)</div>\r\n            <div class=\"text4\">200,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\r\n            <div class=\"text4\">40,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------7-------------------------- -->\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_test_test_module_ts.js.map