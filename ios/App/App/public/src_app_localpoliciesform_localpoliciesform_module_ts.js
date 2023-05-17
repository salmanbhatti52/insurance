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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.thirdParty-wrapper {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FscG9saWNpZXNmb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRkY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUpGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFORjs7QUFjQTtFQUNFLHlCQUFBO0FBWEY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBWEY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFuQkY7O0FBdUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXJCRjs7QUF3QkE7RUFDRSw0QkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFyQkY7O0FBeUJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBdEJGOztBQXlCQTtFQUdFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXhCRiIsImZpbGUiOiJsb2NhbHBvbGljaWVzZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwJSBhdXRvIDUlO1xyXG59XHJcblxyXG4uc2VnbWVudDEge1xyXG4gIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0U4RThFNztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnNidG4ge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC0tbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiAjODU4NThBO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLmh0ZXh0MSB7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5yMSB7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ucjIge1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogNjVweDtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uY2ZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNmbGV4MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dDEge1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5jc3BhbiB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50ZXh0MyB7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgO1xyXG59XHJcblxyXG4udGV4dDQge1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQ1IHtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltZ2RpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZHRleHQge1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnRuZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2lkdGg6IDIwM3B4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuXHJcbn1cclxuXHJcbi5pdGV4dCB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vLyAudGlja2ltZ3tcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgcmlnaHQ6IDEwcHg7XHJcbi8vICAgdG9wOiAxMHB4O1xyXG4vLyB9XHJcbi5hY3RpdmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XHJcbn1cclxuXHJcbi5idG4xIHtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiAyNzNweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmFjdGl2ZXByb2R1Y3R7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcclxuICBwYWRkaW5nOjRweCAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tVGhpcmQgUGFyeSBDU1MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnRoaXJkUGFydHktd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4vLyAudGl0bGV7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuLmh0ZXh0IHtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5kcm9wYm94IHtcclxuICBtYXJnaW46IDQlIDAlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XHJcblxyXG59XHJcblxyXG4uaW5uZXJkcm9wYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLmV1cm8tdGV4dCB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG4uZXVyby10ZXh0MSB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG5cclxuLmlucHV0ZmllbGQge1xyXG4gIG1hcmdpbjogNCUgMCU7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uaW4tdGV4dCB7XHJcbiAgLS1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNyU7XHJcbiAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5pdGVtLXBpY2tlciB7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xyXG5cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWRvbmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiJdfQ== */";

/***/ }),

/***/ 92551:
/*!**************************************************************************!*\
  !*** ./src/app/localpoliciesform/localpoliciesform.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width:100% ;\">\r\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Product Offering and Details</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\" *ngIf=\"requestsType=='PurchasePolicies'\">\r\n        <img src=\"assets/images/info.png\" (click)=\"goto()\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <p>Processing</p>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_localpoliciesform_localpoliciesform_module_ts.js.map