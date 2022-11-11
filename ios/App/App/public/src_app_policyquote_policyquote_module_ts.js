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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _policyquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page.html?ngResource */ 30165);
/* harmony import */ var _policyquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page.scss?ngResource */ 9302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let PolicyquotePage = class PolicyquotePage {
    constructor(location) {
        this.location = location;
    }
    goback() {
        this.location.back();
    }
    ngOnInit() {
        this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        console.log('', this.Gproduct);
        this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));
        console.log('dsadsads', this.getproduct);
        console.log('dsadsads', localStorage.getItem('gibsProductres'));
    }
};
PolicyquotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
PolicyquotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.main {\n  width: 100%;\n  margin: 0% auto;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n  padding: 17px 12px;\n  border-radius: 12px;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 5px;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 2%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A0F55;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A0F55;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 14.5%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUVFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQUE7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVdGOztBQUpDO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixXQUFBO0VBQ0UsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFRSjs7QUFQRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQVNIOztBQVBFO0VBQ0ksbUJBQUE7QUFTTjs7QUFSTTtFQUNFLGNBQUE7QUFVUjs7QUFQRTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUFTSDs7QUFQRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUFTSDs7QUFGQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBRUksYUFBQTtFQUNBLGNBQUE7QUFLSjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQU9GO0FBQ0Y7O0FBSkE7RUFFRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBRUU7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoicG9saWN5cXVvdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud3JhcHBlcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiA1JSBhdXRvIDEwJTtcbn1cbnAubmFtZS1wYXJhIHtcbiAgLy8gd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxucC53Yy1wYXJhIHtcbiAgLy8gd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5sb2dve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaGVhZHRpdGxle1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4ubWFpbntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCUgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbiAgcGFkZGluZzogMTdweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnRpdGxlMXtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmlubmVyMXtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4ucGFyYXtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5wYXJhMXtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5zcHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUye1xuICBjb2xvcjojQThCNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuaW9uLXRhYnN7XG5cblx0aW9uLXRhYi1iYXIge1xuXHRcdC0tYm9yZGVyOiAwO1xuXHRcdC0tYmFja2dyb3VuZDogIzFBMEY1NTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6MDsgcmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgbWF4LWhlaWdodDogNjJweDtcbiAgICBoZWlnaHQ6NjBweDtcblx0XHQmOmFmdGVye1xuXHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDojMUEwRjU1O1xuICAgICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XG4gICAgICB9XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcblx0XHR9XG5cblx0fVxuXG59XG5cbi5pbWd7XG4gIHdpZHRoOiAyMS41cHg7XG4gIGhlaWdodDogMjEuNXB4O1xuICBvcGFjaXR5OiA2MCU7XG59XG4uYWN0aXZlaW1ne1xuXG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcblxufVxuXG4uZm9udHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiA2MCU7XG59XG4uZm9udGFjdGl2ZXtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmNpbWd7XG4gIG9wYWNpdHk6IDYwJXk7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgcmlnaHQ6IDE0LjUlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDE0LjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KXtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 30165:
/*!**************************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width:100% ;\">\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Insurance Request</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display:flex;align-items: center;\n    justify-content: space-around;\">\n      <!-- <img height=\"50px\" src=\"assets/images/access_point.png\"> -->\n      <h3 style=\"margin:0px;text-align:center;color: #000;\">Insurance Request Completed Successfully</h3>\n    </div>\n    <div class=\"box box-success\">\n      <div class=\"panel-body\">\n        <div class=\"main\">\n          <div class=\"title1\">First Name</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.insured.firstName}}</div>\n          </div>\n\n          <div class=\"title1\">Last Name</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.insured.lastName}}</div>\n          </div>\n\n          <div class=\"title1\">Email</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.insured.email}}</div>\n          </div>\n\n\n          <div class=\"title1\">Address</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.insured.address}}</div>\n          </div>\n\n          <div class=\"title1\">Gender</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.insured.gender}}</div>\n          </div>\n\n          <div class=\"title1\">Phone 1</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.insured.phoneLine1}}</div>\n          </div>\n\n          <!-- <div class=\"title1\">Phone 2</div>\n        <div class=\"inner1\">\n          <div class=\"para\">{{getproduct.insured.phoneLine2}}</div>\n        </div> -->\n\n\n          <div class=\"title1\">Policy Number</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{getproduct.policyNo}}</div>\n          </div>\n\n          <div class=\"title1\">Plan of Choice</div>\n          <div class=\"inner1\">\n            <div class=\"para\">{{Gproduct.productName}}</div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- <div class=\"btndiv\">\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\">Buy Online Now </ion-button>\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\">Get a new quote </ion-button>\n    </div> -->\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_policyquote_policyquote_module_ts.js.map