"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_localpoliciesform_localpoliciesform_module_ts"],{

/***/ 26480:
/*!***********************************************************************!*\
  !*** ./src/app/localpoliciesform/localpoliciesform-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalpoliciesformPageRoutingModule": () => (/* binding */ LocalpoliciesformPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _localpoliciesform_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localpoliciesform.page */ 57412);




const routes = [
    {
        path: '',
        component: _localpoliciesform_page__WEBPACK_IMPORTED_MODULE_0__.LocalpoliciesformPage
    }
];
let LocalpoliciesformPageRoutingModule = class LocalpoliciesformPageRoutingModule {
};
LocalpoliciesformPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocalpoliciesformPageRoutingModule);



/***/ }),

/***/ 83434:
/*!***************************************************************!*\
  !*** ./src/app/localpoliciesform/localpoliciesform.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalpoliciesformPageModule": () => (/* binding */ LocalpoliciesformPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _localpoliciesform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localpoliciesform-routing.module */ 26480);
/* harmony import */ var _localpoliciesform_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localpoliciesform.page */ 57412);







let LocalpoliciesformPageModule = class LocalpoliciesformPageModule {
};
LocalpoliciesformPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _localpoliciesform_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalpoliciesformPageRoutingModule
        ],
        declarations: [_localpoliciesform_page__WEBPACK_IMPORTED_MODULE_1__.LocalpoliciesformPage]
    })
], LocalpoliciesformPageModule);



/***/ }),

/***/ 57412:
/*!*************************************************************!*\
  !*** ./src/app/localpoliciesform/localpoliciesform.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalpoliciesformPage": () => (/* binding */ LocalpoliciesformPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _localpoliciesform_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localpoliciesform.page.html?ngResource */ 92551);
/* harmony import */ var _localpoliciesform_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localpoliciesform.page.scss?ngResource */ 47702);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let LocalpoliciesformPage = class LocalpoliciesformPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
LocalpoliciesformPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
LocalpoliciesformPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-localpoliciesform',
        template: _localpoliciesform_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_localpoliciesform_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocalpoliciesformPage);



/***/ }),

/***/ 47702:
/*!**************************************************************************!*\
  !*** ./src/app/localpoliciesform/localpoliciesform.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.thirdParty-wrapper {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FscG9saWNpZXNmb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRkY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUpGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFORjs7QUFjQTtFQUNFLHlCQUFBO0FBWEY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBWEY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFuQkY7O0FBdUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXJCRjs7QUF3QkE7RUFDRSw0QkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFyQkY7O0FBeUJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBdEJGOztBQXlCQTtFQUdFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXhCRiIsImZpbGUiOiJsb2NhbHBvbGljaWVzZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0byA1JTtcbn1cblxuLnNlZ21lbnQxIHtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xuICB3aWR0aDogMTAwJTtcblxuICAuc2J0biB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjODU4NThBO1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG5cbn1cblxuLmh0ZXh0MSB7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5yMSB7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB3aWR0aDogNDVweDtcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ucjIge1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5jZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG87XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNmbGV4MSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQxIHtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uY3NwYW4ge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dDMge1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbiAgO1xufVxuXG4udGV4dDQge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dDUge1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZ2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkdGV4dCB7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG5kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMjAzcHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcblxufVxuXG4uaXRleHQge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLy8gLnRpY2tpbWd7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDEwcHg7XG4vLyAgIHRvcDogMTBweDtcbi8vIH1cbi5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xufVxuXG4uYnRuMSB7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMjczcHg7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmVwcm9kdWN0e1xuICBiYWNrZ3JvdW5kOiAjZjVmNmY5O1xuICBwYWRkaW5nOjRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4vLyAtLS0tLS0tLS0tLS0tLVRoaXJkIFBhcnkgQ1NTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4udGhpcmRQYXJ0eS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLy8gLnRpdGxle1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbi8vICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgY29sb3I6ICMxQTIwNkQ7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4uaHRleHQge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZHJvcGJveCB7XG4gIG1hcmdpbjogNCUgMCU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEzLjQxcHggMTVweDtcblxufVxuXG4uaW5uZXJkcm9wYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi5ldXJvLXRleHQge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG59XG5cbi5ldXJvLXRleHQxIHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5pbnB1dGZpZWxkIHtcbiAgbWFyZ2luOiA0JSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmluLXRleHQge1xuICAtLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xuICAtLXBhZGRpbmctdG9wOiA1JTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XG59XG5cbi5idG4ge1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pdGVtLXBpY2tlciB7XG4gIC8vIHdpZHRoOiA4NSU7XG4gIC8vIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kb25lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIl19 */";

/***/ }),

/***/ 92551:
/*!**************************************************************************!*\
  !*** ./src/app/localpoliciesform/localpoliciesform.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <div style=\"width:100% ;\">\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Product Offering and Details</div>\n      </ion-col>\n      <ion-col size=\"2\" style=\"text-align: center;\n      padding-top: 3%;\" *ngIf=\"requestsType=='PurchasePolicies'\">\n        <img src=\"assets/images/info.png\" (click)=\"goto()\">\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n  <p>Processing</p>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_localpoliciesform_localpoliciesform_module_ts.js.map