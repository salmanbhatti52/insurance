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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A0F55;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A0F55;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius:12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.tickimg {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A0F55;\n  --border-radius:12px ;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWFGOztBQVZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFnQkYiLCJmaWxlIjoidGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud3JhcHBlcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiA1JSBhdXRvIDI1JTtcbn1cbi5zZWdtZW50MSB7XG4gIHBhZGRpbmc6IDVweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI0U4RThFNztcbiAgd2lkdGg6MTAwJTtcbiAgLnNidG4ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIC0tbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTBGNTU7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogIzg1ODU4QTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuXG59XG4uaHRleHQxe1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnIxe1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnIye1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm1haW57XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5jZmxleHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNmbGV4MXtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0e1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRleHQxe1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDo3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbi5jc3BhbntcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRleHQze1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTs7XG59XG4udGV4dDR7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OjMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0NXtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1nZGl2e1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWR0ZXh0e1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmJ0bmRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAtLWJvcmRlci1yYWRpdXM6MTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMjAzcHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uYm94e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcblxufVxuLml0ZXh0e1xuICBjb2xvcjojNUQ1RDVEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnRpY2tpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5hY3RpdmV7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XG59XG4uYnRuMXtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEwRjU1O1xuICAtLWJvcmRlci1yYWRpdXM6MTJweCA7XG4gIHdpZHRoOiAyNzNweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuIl19 */";

/***/ }),

/***/ 72775:
/*!************************************************!*\
  !*** ./src/app/test/test.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <!-- <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons> -->\n\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- ------------------------1-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">25,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Evacaution</div>\n            <div class=\"text4\">35,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">20,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\n            <div class=\"text4\">20,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Death</div>\n            <div class=\"text4\">50,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------2-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">50,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Evacaution</div>\n            <div class=\"text4\">70,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">40,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\n            <div class=\"text4\">40,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Death</div>\n            <div class=\"text4\">100,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------3-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">75,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Evacaution</div>\n            <div class=\"text4\">105,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">60,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\n            <div class=\"text4\">60,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Death</div>\n            <div class=\"text4\">150,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------4-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">100,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Evacaution</div>\n            <div class=\"text4\">140,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">80,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Baggage</div>\n            <div class=\"text4\">80,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Death</div>\n            <div class=\"text4\">200,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------5-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">50,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">20,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Personal Accident(Death)</div>\n            <div class=\"text4\">100,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\n            <div class=\"text4\">20,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------6-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">75,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">30,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Personal Accident(Death)</div>\n            <div class=\"text4\">150,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\n            <div class=\"text4\">30,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------7-------------------------- -->\n\n    <div style=\"border: 1px solid #a8b400; border-radius: 12px\">\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\" style=\"text-align: center\">\n            <b>Schedule of Cover</b>\n          </div>\n          <div class=\"text1\">Limits in NGN</div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">Accidental Medical Treatment</div>\n            <div class=\"text4\">100,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Transport of Mortal Remains</div>\n            <div class=\"text4\">40,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Personal Accident(Death)</div>\n            <div class=\"text4\">200,000.00</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">Loss/Theft of Checked-in Personal Effect</div>\n            <div class=\"text4\">40,000.00</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ------------------------7-------------------------- -->\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_test_test_module_ts.js.map