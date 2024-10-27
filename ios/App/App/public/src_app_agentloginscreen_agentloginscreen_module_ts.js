"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_agentloginscreen_agentloginscreen_module_ts"],{

/***/ 58339:
/*!*********************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentloginscreenPageRoutingModule": () => (/* binding */ AgentloginscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _agentloginscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentloginscreen.page */ 9150);




const routes = [
    {
        path: '',
        component: _agentloginscreen_page__WEBPACK_IMPORTED_MODULE_0__.AgentloginscreenPage
    }
];
let AgentloginscreenPageRoutingModule = class AgentloginscreenPageRoutingModule {
};
AgentloginscreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgentloginscreenPageRoutingModule);



/***/ }),

/***/ 41756:
/*!*************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentloginscreenPageModule": () => (/* binding */ AgentloginscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _agentloginscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentloginscreen-routing.module */ 58339);
/* harmony import */ var _agentloginscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agentloginscreen.page */ 9150);







let AgentloginscreenPageModule = class AgentloginscreenPageModule {
};
AgentloginscreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agentloginscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgentloginscreenPageRoutingModule
        ],
        declarations: [_agentloginscreen_page__WEBPACK_IMPORTED_MODULE_1__.AgentloginscreenPage]
    })
], AgentloginscreenPageModule);



/***/ }),

/***/ 9150:
/*!***********************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentloginscreenPage": () => (/* binding */ AgentloginscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _agentloginscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentloginscreen.page.html?ngResource */ 74300);
/* harmony import */ var _agentloginscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agentloginscreen.page.scss?ngResource */ 85849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let AgentloginscreenPage = class AgentloginscreenPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
        this.agentdata = JSON.parse(localStorage.getItem('agentdata'));
        console.log(this.agentdata);
        this.agentID = this.agentdata.agentID;
        this.agentName = this.agentdata.agentName;
        this.cityLGA = this.agentdata.cityLGA;
        this.address = this.agentdata.address;
        this.email = this.agentdata.email;
        this.kycExpiryDate = this.agentdata.kycExpiryDate;
        this.kycIssueDate = this.agentdata.kycIssueDate;
    }
    goback() {
        this.location.back();
    }
};
AgentloginscreenPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
AgentloginscreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-agentloginscreen',
        template: _agentloginscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agentloginscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgentloginscreenPage);



/***/ }),

/***/ 85849:
/*!************************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 2% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 5px;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 2%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  /* margin-top: 20px; */\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background: #1A206D;\n}\n\nion-footer {\n  width: 85%;\n  margin: 20px auto 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxcYWdlbnRsb2dpbnNjcmVlblxcYWdlbnRsb2dpbnNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSkY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSEY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGRjs7QURJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FDQUYiLCJmaWxlIjoiYWdlbnRsb2dpbnNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyJSBhdXRvIDEwJTtcclxufVxyXG5wLm5hbWUtcGFyYSB7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDBweCBhdXRvIDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5wLndjLXBhcmEge1xyXG4gIC8vIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmxvZ297XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmhlYWR0aXRsZXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLy8gLm1haW57XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgbWFyZ2luOiAxMCUgYXV0bztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XHJcbi8vICAgcGFkZGluZzogMTdweCAxMnB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vIH1cclxuLnRpdGxlMXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmlubmVyMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLnBhcmF7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbi5wYXJhMXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLnNwe1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aXRsZTJ7XHJcbiAgY29sb3I6I0E4QjQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4uYnRue1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDIwcHggYXV0byAzMHB4O1xyXG59XHJcbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyJSBhdXRvIDEwJTtcbn1cblxucC5uYW1lLXBhcmEge1xuICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0E4QjQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnAud2MtcGFyYSB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGVhZHRpdGxlIHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4udGl0bGUxIHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaW5uZXIxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5wYXJhIHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnBhcmExIHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnNwIHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZTIge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDhweDtcbiAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 74300:
/*!************************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 27px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\" (click)=\"goback()\">\r\n            <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Agent Detail</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- <div style=\"display:flex;align-items: center;\r\n    justify-content: space-around;\">\r\n      <h3 style=\"margin:0px;text-align:center;\">Agent</h3>\r\n    </div> -->\r\n\r\n    <div class=\"box box-success\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"main\">\r\n          <div class=\"title1\">Agent ID</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{agentID}}</div>\r\n          </div>\r\n          <div class=\"title1\">Agent Name</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{agentName}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">Email</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{email}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">Address</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{address}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">CityLGA</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{cityLGA}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">kycIssueDate</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{kycIssueDate}}</div>\r\n          </div>\r\n          <div class=\"title1\">kycExpiryDate</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{kycExpiryDate}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"img-div\">\r\n      <img src=\"assets/images/no-records.svg\">\r\n    </div> -->\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button class=\"btn\" (click)=\"signIn()\">DISCOVER</ion-button>\r\n  </div>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_agentloginscreen_agentloginscreen_module_ts.js.map