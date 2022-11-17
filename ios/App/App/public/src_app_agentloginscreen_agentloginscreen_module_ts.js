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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 2% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 5px;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 2%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  /* margin-top: 20px; */\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background: #1A206D;\n}\n\nion-footer {\n  width: 85%;\n  margin: 20px auto 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBRUUsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDQTtFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFERjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQUFGIiwiZmlsZSI6ImFnZW50bG9naW5zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMiUgYXV0byAxMCU7XHJcbn1cclxucC5uYW1lLXBhcmEge1xyXG4gIC8vIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwcHggYXV0byAwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxucC53Yy1wYXJhIHtcclxuICAvLyB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcbi5sb2dve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5oZWFkdGl0bGV7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi8vIC5tYWlue1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG1hcmdpbjogMTAlIGF1dG87XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNzYgMTgxIDAgLyAxMCUpO1xyXG4vLyAgIHBhZGRpbmc6IDE3cHggMTJweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4vLyB9XHJcbi50aXRsZTF7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5pbm5lcjF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi5wYXJhe1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG4ucGFyYTF7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbi5zcHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGUye1xyXG4gIGNvbG9yOiNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLmJ0bntcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 74300:
/*!************************************************************************!*\
  !*** ./src/app/agentloginscreen/agentloginscreen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 27px;\">\r\n\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\" (click)=\"goback()\">\r\n            <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Agent Detail</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- <div style=\"display:flex;align-items: center;\r\n    justify-content: space-around;\">\r\n      <h3 style=\"margin:0px;text-align:center;\">Agent</h3>\r\n    </div> -->\r\n\r\n    <div class=\"box box-success\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"main\">\r\n          <div class=\"title1\">Agent ID</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{agentID}}</div>\r\n          </div>\r\n          <div class=\"title1\">Agent Name</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{agentName}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">Email</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{email}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"title1\">Address</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{address}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">CityLGA</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{cityLGA}}</div>\r\n          </div>\r\n\r\n          <div class=\"title1\">kycIssueDate</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{kycIssueDate}}</div>\r\n          </div>\r\n          <div class=\"title1\">kycExpiryDate</div>\r\n          <div class=\"inner1\">\r\n            <div class=\"para\">{{kycExpiryDate}}</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"img-div\">\r\n      <img src=\"assets/images/no-records.svg\">\r\n    </div> -->\r\n\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button class=\"btn\" (click)=\"signIn()\">DISCOVER</ion-button>\r\n  </div>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_agentloginscreen_agentloginscreen_module_ts.js.map