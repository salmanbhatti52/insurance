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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A0F55;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A0F55;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius:12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.tickimg {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A0F55;\n  --border-radius:12px ;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWFGOztBQVZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFnQkYiLCJmaWxlIjoidGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDI1JTtcclxufVxyXG4uc2VnbWVudDEge1xyXG4gIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0U4RThFNztcclxuICB3aWR0aDoxMDAlO1xyXG4gIC5zYnRuIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMEY1NTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzg1ODU4QTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuLmh0ZXh0MXtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnIxe1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogNDVweDtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnIye1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogNjVweDtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm1haW57XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmNmbGV4e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNmbGV4MXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50ZXh0e1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50ZXh0MXtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLmNzcGFue1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udGV4dDN7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgd2lkdGg6IDEwMCU7O1xyXG59XHJcbi50ZXh0NHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGV4dDV7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZ2RpdntcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWR0ZXh0e1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG57XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdpZHRoOiAyMDNweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYm94e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG5cclxufVxyXG4uaXRleHR7XHJcbiAgY29sb3I6IzVENUQ1RDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnRpY2tpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxufVxyXG4uYWN0aXZle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XHJcbn1cclxuLmJ0bjF7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEwRjU1O1xyXG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4IDtcclxuICB3aWR0aDogMjczcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 72775:
/*!************************************************!*\
  !*** ./src/app/test/test.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n\r\n\r\n      <!-- ------------------------1-------------------------- -->\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n      border-radius: 12px;\">\r\n\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n          </div>\r\n          <div class=\"text1\">Limits in NGN</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Treatment</div>\r\n            <div class=\"text4\">25,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Accidental Medical Evacaution</div>\r\n            <div class=\"text4\">35,000.00</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Transport of Mortal Remains</div>\r\n            <div class=\"text4\">20,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n            <div class=\"text4\">20,000.00</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">Death</div>\r\n            <div class=\"text4\">50,000.00</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n      <!-- ------------------------2-------------------------- -->\r\n\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n    border-radius: 12px;\">\r\n\r\n    <div class=\"main\">\r\n      <div class=\"cflex\">\r\n        <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n        </div>\r\n        <div class=\"text1\">Limits in NGN</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Treatment</div>\r\n          <div class=\"text4\">50,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Evacaution</div>\r\n          <div class=\"text4\">70,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Transport of Mortal Remains</div>\r\n          <div class=\"text4\">40,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n          <div class=\"text4\">40,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Death</div>\r\n          <div class=\"text4\">100,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"btndiv\">\r\n          <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    <!-- ------------------------3-------------------------- -->\r\n\r\n\r\n\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n    border-radius: 12px;\">\r\n\r\n    <div class=\"main\">\r\n      <div class=\"cflex\">\r\n        <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n        </div>\r\n        <div class=\"text1\">Limits in NGN</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Treatment</div>\r\n          <div class=\"text4\">75,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Evacaution</div>\r\n          <div class=\"text4\">105,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Transport of Mortal Remains</div>\r\n          <div class=\"text4\">60,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n          <div class=\"text4\">60,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Death</div>\r\n          <div class=\"text4\">150,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"btndiv\">\r\n          <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    <!-- ------------------------4-------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n    border-radius: 12px;\">\r\n\r\n    <div class=\"main\">\r\n      <div class=\"cflex\">\r\n        <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n        </div>\r\n        <div class=\"text1\">Limits in NGN</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Treatment</div>\r\n          <div class=\"text4\">100,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Evacaution</div>\r\n          <div class=\"text4\">140,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Transport of Mortal Remains</div>\r\n          <div class=\"text4\">80,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\r\n          <div class=\"text4\">80,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Death</div>\r\n          <div class=\"text4\">200,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"btndiv\">\r\n          <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    <!-- ------------------------5-------------------------- -->\r\n\r\n\r\n\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n    border-radius: 12px;\">\r\n\r\n    <div class=\"main\">\r\n      <div class=\"cflex\">\r\n        <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n        </div>\r\n        <div class=\"text1\">Limits in NGN</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Treatment</div>\r\n          <div class=\"text4\">50,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Transport of Mortal Remains</div>\r\n          <div class=\"text4\">20,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Personal Accident(Death)</div>\r\n          <div class=\"text4\">100,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\r\n          <div class=\"text4\">20,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"btndiv\">\r\n          <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    <!-- ------------------------6-------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n    border-radius: 12px;\">\r\n\r\n    <div class=\"main\">\r\n      <div class=\"cflex\">\r\n        <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n        </div>\r\n        <div class=\"text1\">Limits in NGN</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Treatment</div>\r\n          <div class=\"text4\">75,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Transport of Mortal Remains</div>\r\n          <div class=\"text4\">30,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Personal Accident(Death)</div>\r\n          <div class=\"text4\">150,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\r\n          <div class=\"text4\">30,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"btndiv\">\r\n          <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    <!-- ------------------------7-------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n    <div style=\"border: 1px solid #A8B400;\r\n    border-radius: 12px;\">\r\n\r\n    <div class=\"main\">\r\n      <div class=\"cflex\">\r\n        <div class=\"text\" style=\"text-align: center;\"><b>Schedule of Cover</b>\r\n        </div>\r\n        <div class=\"text1\">Limits in NGN</div>\r\n      </div>\r\n      <div>\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Accidental Medical Treatment</div>\r\n          <div class=\"text4\">100,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Transport of Mortal Remains</div>\r\n          <div class=\"text4\">40,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Personal Accident(Death)</div>\r\n          <div class=\"text4\">200,000.00</div>\r\n        </div>\r\n\r\n        <div class=\"cflex1\">\r\n          <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\r\n          <div class=\"text4\">40,000.00</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"btndiv\">\r\n          <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    <!-- ------------------------7-------------------------- -->\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_test_test_module_ts.js.map