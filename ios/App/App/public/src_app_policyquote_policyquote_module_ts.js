"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_policyquote_policyquote_module_ts"],{

/***/ 7021:
/*!***********************************************************!*\
  !*** ./src/app/policyquote/policyquote-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePageRoutingModule": () => (/* binding */ PolicyquotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _policyquote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page */ 7981);




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

/***/ 2210:
/*!***************************************************!*\
  !*** ./src/app/policyquote/policyquote.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePageModule": () => (/* binding */ PolicyquotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _policyquote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote-routing.module */ 7021);
/* harmony import */ var _policyquote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page */ 7981);







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

/***/ 7981:
/*!*************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyquotePage": () => (/* binding */ PolicyquotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _policyquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policyquote.page.html?ngResource */ 165);
/* harmony import */ var _policyquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policyquote.page.scss?ngResource */ 9302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 10% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.main {\n  width: 100%;\n  margin: 10% auto;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n  padding: 17px 12px;\n  border-radius: 12px;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 5px;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 2%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A0F55;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A0F55;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 14.5%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUVFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQUE7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFKQztFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtFQUNFLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUUo7O0FBUEU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFTSDs7QUFQRTtFQUNJLG1CQUFBO0FBU047O0FBUk07RUFDRSxjQUFBO0FBVVI7O0FBUEU7RUFDQyxpQkFBQTtFQUNBLDZCQUFBO0FBU0g7O0FBUEU7RUFDQyxnQkFBQTtFQUNBLDRCQUFBO0FBU0g7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUVJLGFBQUE7RUFDQSxjQUFBO0FBS0o7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFPRjtBQUNGOztBQUpBO0VBRUU7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBS0Y7QUFDRjs7QUFIQTtFQUVFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InBvbGljeXF1b3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG59XHJcbnAubmFtZS1wYXJhIHtcclxuICAvLyB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnAud2MtcGFyYSB7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4ubG9nb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaGVhZHRpdGxle1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4ubWFpbntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcclxuICBwYWRkaW5nOiAxN3B4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4udGl0bGUxe1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uaW5uZXIxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4ucGFyYXtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLnBhcmExe1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG4uc3B7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlMntcclxuICBjb2xvcjojQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xyXG5pb24tdGFic3tcclxuXHJcblx0aW9uLXRhYi1iYXIge1xyXG5cdFx0LS1ib3JkZXI6IDA7XHJcblx0XHQtLWJhY2tncm91bmQ6ICMxQTBGNTU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYycHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuXHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiMxQTBGNTU7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuLmltZ3tcclxuICB3aWR0aDogMjEuNXB4O1xyXG4gIGhlaWdodDogMjEuNXB4O1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uYWN0aXZlaW1ne1xyXG5cclxuICAgIHdpZHRoOiAyMS41cHg7XHJcbiAgICBoZWlnaHQ6IDIxLjVweDtcclxuXHJcbn1cclxuXHJcbi5mb250e1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmZvbnRhY3RpdmV7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5jaW1ne1xyXG4gIG9wYWNpdHk6IDYwJXk7XHJcbn1cclxuXHJcbmhyIHtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDE0LjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogMTQuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XHJcblxyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE0LjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XHJcblxyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE0LjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE0LjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 165:
/*!**************************************************************!*\
  !*** ./src/app/policyquote/policyquote.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Insurance Request</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display:flex;align-items: center;\r\n    justify-content: space-around;\">\r\n      <!-- <img height=\"50px\" src=\"assets/images/access_point.png\"> -->\r\n      <h3 style=\"margin:0px;text-align:center;\">Insurance Request Completed Successfully</h3>\r\n    </div>\r\n    <div class=\"box box-success\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"main\">\r\n        <div class=\"title1\">First Name</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.firstName}}</div>\r\n        </div>\r\n\r\n        <div class=\"title1\">Last Name</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.lastName}}</div>\r\n        </div>\r\n\r\n        <div class=\"title1\">Email</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.email}}</div>\r\n        </div>\r\n\r\n\r\n        <div class=\"title1\">Address</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.address}}</div>\r\n        </div>\r\n\r\n        <div class=\"title1\">Gender</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.gender}}</div>\r\n        </div>\r\n\r\n        <div class=\"title1\">Phone 1</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.phoneLine1}}</div>\r\n        </div>\r\n\r\n        <!-- <div class=\"title1\">Phone 2</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.insured.phoneLine2}}</div>\r\n        </div> -->\r\n\r\n\r\n        <div class=\"title1\">Policy Number</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{getproduct.policyNo}}</div>\r\n        </div>\r\n\r\n        <div class=\"title1\">Plan of Choice</div>\r\n        <div class=\"inner1\">\r\n          <div class=\"para\">{{Gproduct.productName}}</div>\r\n        </div>\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"btndiv\">\r\n      <ion-button class=\"btn\" (click)=\"buyOnlineQuote()\">Buy Online Now </ion-button>\r\n      <ion-button class=\"btn1\" (click)=\"getAnewQuote()\">Get a new quote </ion-button>\r\n    </div> -->\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_policyquote_policyquote_module_ts.js.map