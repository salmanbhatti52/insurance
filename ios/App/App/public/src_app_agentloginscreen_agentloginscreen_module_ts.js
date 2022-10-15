"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_agentloginscreen_agentloginscreen_module_ts"],{

/***/ 8339:
/*!*********************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentloginscreenPageRoutingModule": () => (/* binding */ AgentloginscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
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

/***/ 1756:
/*!*************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentloginscreenPageModule": () => (/* binding */ AgentloginscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agentloginscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentloginscreen-routing.module */ 8339);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agentloginscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentloginscreen.page.html?ngResource */ 4300);
/* harmony import */ var _agentloginscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agentloginscreen.page.scss?ngResource */ 5849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let AgentloginscreenPage = class AgentloginscreenPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
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

/***/ 5849:
/*!************************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\np.para {\n  margin: 0px;\n  padding-bottom: 2px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  /* margin-top: 20px; */\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background: #1A206D;\n}\n\n.container {\n  width: 85%;\n  margin: 20px auto 0px;\n}\n\np.con-p1 {\n  margin: 0px;\n  margin-top: 32px;\n  margin-left: 7px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #1A206D;\n}\n\np.con-p2 {\n  margin: 0px;\n  font-size: 33px;\n  font-weight: 700;\n  color: #1A206D;\n  /* width: 60%; */\n}\n\n.img-div {\n  text-align: center;\n  margin: 60px auto 0px 10px;\n}\n\nion-footer {\n  width: 85%;\n  margin: 20px auto 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQUlGIiwiZmlsZSI6ImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5wLnBhcmEge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG59XHJcbnAuY29uLXAxIHtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxuXHJcblxyXG5wLmNvbi1wMiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgLyogd2lkdGg6IDYwJTsgKi9cclxufVxyXG4uaW1nLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvIDBweCAxMHB4O1xyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4300:
/*!************************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 27px;\">\r\n\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\" (click)=\"goback()\">\r\n            <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Agent ID Login</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <div style=\"width: 60%;text-align: center;margin: 70px auto 0px;\">\r\n      <p class=\"con-p2\">Record Doesn't Exist</p>\r\n    </div>\r\n\r\n    <div class=\"img-div\">\r\n      <img src=\"assets/images/no-records.svg\">\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button class=\"btn\" (click)=\"signIn()\">DISCOVER</ion-button>\r\n  </div>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_agentloginscreen_agentloginscreen_module_ts.js.map