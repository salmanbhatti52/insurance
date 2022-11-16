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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 2% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 5px;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 2%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  /* margin-top: 20px; */\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background: #1A206D;\n}\n\nion-footer {\n  width: 85%;\n  margin: 20px auto 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBRUUsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDQTtFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFERjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQUFGIiwiZmlsZSI6ImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwcGVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDIlIGF1dG8gMTAlO1xufVxucC5uYW1lLXBhcmEge1xuICAvLyB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0E4QjQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5wLndjLXBhcmEge1xuICAvLyB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLmxvZ297XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5oZWFkdGl0bGV7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi8vIC5tYWlue1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiAxMCUgYXV0bztcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbi8vICAgcGFkZGluZzogMTdweCAxMnB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAxMnB4O1xuLy8gfVxuLnRpdGxlMXtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmlubmVyMXtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4ucGFyYXtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5wYXJhMXtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5zcHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUye1xuICBjb2xvcjojQThCNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi5idG57XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDhweDtcbiAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 74300:
/*!************************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 27px;\">\n\n        <ion-buttons>\n          <div style=\"width:100% ;\" (click)=\"goback()\">\n            <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Agent Detail</div>\n      </ion-col>\n      <ion-col size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- <div style=\"display:flex;align-items: center;\n    justify-content: space-around;\">\n      <h3 style=\"margin:0px;text-align:center;\">Agent</h3>\n    </div> -->\n\n    <div class=\"box box-success\">\n      <div class=\"panel-body\">\n        <div class=\"main\">\n          <div class=\"title1\">Agent ID</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{agentID}}</div>\n          </div>\n          <div class=\"title1\">Agent Name</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{agentName}}</div>\n          </div>\n\n          <div class=\"title1\">Email</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{email}}</div>\n          </div>\n\n\n          <div class=\"title1\">Address</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{address}}</div>\n          </div>\n\n          <div class=\"title1\">CityLGA</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{cityLGA}}</div>\n          </div>\n\n          <div class=\"title1\">kycIssueDate</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{kycIssueDate}}</div>\n          </div>\n          <div class=\"title1\">kycExpiryDate</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{kycExpiryDate}}</div>\n          </div>\n\n\n        </div>\n\n      </div>\n    </div>\n    <!-- <div class=\"img-div\">\n      <img src=\"assets/images/no-records.svg\">\n    </div> -->\n\n\n\n  </div>\n</ion-content>\n<!-- <ion-footer>\n  <div style=\"text-align: center;\">\n    <ion-button class=\"btn\" (click)=\"signIn()\">DISCOVER</ion-button>\n  </div>\n</ion-footer> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_agentloginscreen_agentloginscreen_module_ts.js.map