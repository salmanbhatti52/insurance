"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_comprehensivequote_comprehensivequote_module_ts"],{

/***/ 51280:
/*!*************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprehensivequotePageRoutingModule": () => (/* binding */ ComprehensivequotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _comprehensivequote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprehensivequote.page */ 96103);




const routes = [
    {
        path: '',
        component: _comprehensivequote_page__WEBPACK_IMPORTED_MODULE_0__.ComprehensivequotePage
    }
];
let ComprehensivequotePageRoutingModule = class ComprehensivequotePageRoutingModule {
};
ComprehensivequotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComprehensivequotePageRoutingModule);



/***/ }),

/***/ 84366:
/*!*****************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprehensivequotePageModule": () => (/* binding */ ComprehensivequotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _comprehensivequote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprehensivequote-routing.module */ 51280);
/* harmony import */ var _comprehensivequote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comprehensivequote.page */ 96103);







let ComprehensivequotePageModule = class ComprehensivequotePageModule {
};
ComprehensivequotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comprehensivequote_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComprehensivequotePageRoutingModule
        ],
        declarations: [_comprehensivequote_page__WEBPACK_IMPORTED_MODULE_1__.ComprehensivequotePage]
    })
], ComprehensivequotePageModule);



/***/ }),

/***/ 96103:
/*!***************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprehensivequotePage": () => (/* binding */ ComprehensivequotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _comprehensivequote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comprehensivequote.page.html?ngResource */ 82758);
/* harmony import */ var _comprehensivequote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comprehensivequote.page.scss?ngResource */ 22745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let ComprehensivequotePage = class ComprehensivequotePage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
        this.gibsproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        this.productname = this.gibsproduct.productName;
    }
    goback() {
        this.location.back();
    }
    goto() {
        this.router.navigate(['gibsplans']);
    }
};
ComprehensivequotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ComprehensivequotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-comprehensivequote',
        template: _comprehensivequote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comprehensivequote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComprehensivequotePage);



/***/ }),

/***/ 22745:
/*!****************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A0F55;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A0F55;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius:12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.tickimg {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A0F55;\n  --border-radius:12px ;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByZWhlbnNpdmVxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWFGOztBQVZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFnQkYiLCJmaWxlIjoiY29tcHJlaGVuc2l2ZXF1b3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53cmFwcGVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDUlIGF1dG8gMjUlO1xufVxuLnNlZ21lbnQxIHtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xuICB3aWR0aDoxMDAlO1xuICAuc2J0biB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMEY1NTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjODU4NThBO1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG5cbn1cbi5odGV4dDF7XG4gIGNvbG9yOiMxQTBGNTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5yMXtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5yMntcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA2NXB4O1xuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tYWlue1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG4uY2ZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG87XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jZmxleDF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dHtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xuICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0MXtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4uY3NwYW57XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZXh0M3tcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7O1xufVxuLnRleHQ0e1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDozMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGV4dDV7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZ2RpdntcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkdGV4dHtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5idG5kaXZ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG57XG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDIwM3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmJveHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG5cbn1cbi5pdGV4dHtcbiAgY29sb3I6IzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi50aWNraW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG4uYWN0aXZle1xuICBib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xufVxuLmJ0bjF7XG4gIC0tYmFja2dyb3VuZDogIzFBMEY1NTtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xuICB3aWR0aDogMjczcHg7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 82758:
/*!****************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <!-- <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons> -->\n\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div\n      style=\"border: 1px solid #a8b400; border-radius: 12px\"\n      *ngIf=\"productname=='PRIVATE MOTOR-AUTO CLASSIC'\"\n    >\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\">\n            <b>AUTO CLASS</b><br /><span\n              class=\"cspan\"\n              style=\"padding-left: 2.5%\"\n              >Comprehensive</span\n            >\n          </div>\n          <div class=\"text1\">\n            1.75%<br /><span class=\"cspan\">Of vehicle value</span>\n          </div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">3RD PARTY PROPERTY DAMAGE</div>\n            <div class=\"text4\">Up To N1 Million</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">3RD PARTY BODILY INJURY</div>\n            <div class=\"text4\">Up To N60 Million</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">THIFT</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">FIRE</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">ACCIDENTAL DAMAGE</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">AUTHORIZED REPAIR LIMIT</div>\n            <div class=\"text4\">2.5% Of The Car Value</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">TOWING LIMIT</div>\n            <div class=\"text4\">N 12,500</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">DEPRECIATION RATE</div>\n            <div class=\"text4\">Graduated</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">MINIMUM SUM INSURED</div>\n            <div class=\"text4\">₦2,000,000</div>\n          </div>\n\n          <div class=\"headtext\">ADDITIONAL COVERS AT NO EXTRA COST</div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">REFUND OF MEDICAL EXPENSES</div>\n            <div class=\"text4\">Up To ₦10,000</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">LOSS OF PERSONAL EFFECT</div>\n            <div class=\"text4\">UP TO N 10,000</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">TRACKING INSTALLATION</div>\n            <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\n          </div>\n\n          <div class=\"headtext\">TOP UP COVERS AVAILABLE AT EXTRA COST</div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">EXCESS BUY BACK</div>\n            <div class=\"text4\">0.5% Of Sum Insured</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">FLOOD EXTENSION</div>\n            <div class=\"text4\">0.25% Of Sum Insured</div>\n          </div>\n\n          <!-- <div class=\"cflex1\">\n            <div class=\"text3\">TRACKING INSTALLATION</div>\n            <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\n          </div> -->\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">\n              PASSENGER LIABILITY OF ₦250,000 PER PASSENGER. ANNUAL AGGREGATE OF\n              N 2,000,000\n            </div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">INCREASE IN PASSENGER LIABILITY</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">\n              PAYMENT PLAN (AN ADDITIONAL 0.25% WILL BE APPLIED ON THE RATE FOR\n              PAYMENTS MADE OVER 3 INSTALLMENTS)\n            </div>\n            <div class=\"text4\">Up To 3 Consecutive And Equal Payments</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div\n      style=\"border: 1px solid #a8b400; border-radius: 12px\"\n      *ngIf=\"productname=='PRIVATE MOTOR-AUTO PLUS'\"\n    >\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\">\n            <b>Auto Plus</b><br /><span class=\"cspan\" style=\"padding-left: 2.5%\"\n              >Comprehensive</span\n            >\n          </div>\n          <div class=\"text1\">\n            3%<br /><span class=\"cspan\">Of vehicle value</span>\n          </div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">3RD PARTY PROPERTY DAMAGE</div>\n            <div class=\"text4\">Up To N1 Million</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">3RD PARTY BODILY INJURY</div>\n            <div class=\"text4\">Up To N60 Million</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">THIFT</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">FIRE</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">ACCIDENTAL DAMAGE</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">AUTHORIZED REPAIR LIMIT</div>\n            <div class=\"text4\">5% Of The Car Value</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">TOWING LIMIT</div>\n            <div class=\"text4\">N 15,000</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">DEPRECIATION RATE</div>\n            <div class=\"text4\">Graduated</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">MINIMUM SUM INSURED</div>\n            <div class=\"text4\">₦3,500,000</div>\n          </div>\n\n          <div class=\"headtext\">ADDITIONAL COVERS AT NO EXTRA COST</div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">REFUND OF MEDICAL EXPENSES</div>\n            <div class=\"text4\">Up To ₦50,000</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">LOSS OF PERSONAL EFFECT</div>\n            <div class=\"text4\">UP TO N 50,000</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">TRACKING INSTALLATION</div>\n            <div class=\"text4\">Free For Vehicles Of N3,500,000 And Above</div>\n          </div>\n\n          <div class=\"headtext\">TOP UP COVERS AVAILABLE AT EXTRA COST</div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">EXCESS BUY BACK</div>\n            <div class=\"text4\">Included</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">FLOOD EXTENSION</div>\n            <div class=\"text4\">Included</div>\n          </div>\n\n          <!-- <div class=\"cflex1\">\n          <div class=\"text3\">TRACKING INSTALLATION</div>\n          <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\n        </div> -->\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">\n              PASSENGER LIABILITY OF ₦250,000 PER PASSENGER. ANNUAL AGGREGATE OF\n              N 2,000,000\n            </div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">INCREASE IN PASSENGER LIABILITY</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">\n              PAYMENT PLAN (AN ADDITIONAL 0.25% WILL BE APPLIED ON THE RATE FOR\n              PAYMENTS MADE OVER 3 INSTALLMENTS)\n            </div>\n            <div class=\"text4\">Up To 3 Consecutive And Equal Payments</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div\n      style=\"border: 1px solid #a8b400; border-radius: 12px\"\n      *ngIf=\"productname=='UBER CLASSIC MOTOR'\"\n    >\n      <div class=\"main\">\n        <div class=\"cflex\">\n          <div class=\"text\">\n            <b>Uber Classic</b><br /><span\n              class=\"cspan\"\n              style=\"padding-left: 2.5%\"\n              >Comprehensive</span\n            >\n          </div>\n          <div class=\"text1\">\n            2.5%<br /><span class=\"cspan\">Of vehicle value</span>\n          </div>\n        </div>\n        <div>\n          <div class=\"cflex1\">\n            <div class=\"text3\">3RD PARTY PROPERTY DAMAGE</div>\n            <div class=\"text4\">Up To N1 Million</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">3RD PARTY BODILY INJURY</div>\n            <div class=\"text4\">Up To N60 Million</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">THIFT</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">FIRE</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">ACCIDENTAL DAMAGE</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">AUTHORIZED REPAIR LIMIT</div>\n            <div class=\"text4\">5% Of The Car Value</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">TOWING LIMIT</div>\n            <div class=\"text4\">N 12,500</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">DEPRECIATION RATE</div>\n            <div class=\"text4\">Flat</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">MINIMUM SUM INSURED</div>\n            <div class=\"text4\">₦1,500,000</div>\n          </div>\n\n          <div class=\"headtext\">ADDITIONAL COVERS AT NO EXTRA COST</div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">REFUND OF MEDICAL EXPENSES</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">LOSS OF PERSONAL EFFECT</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">TRACKING INSTALLATION</div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cross.svg\" />\n            </div>\n          </div>\n\n          <div class=\"headtext\">TOP UP COVERS AVAILABLE AT EXTRA COST</div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">EXCESS BUY BACK</div>\n            <div class=\"text4\">1% of sum insured</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">FLOOD EXTENSION</div>\n            <div class=\"text4\">0.25% of Sum Insured</div>\n          </div>\n\n          <!-- <div class=\"cflex1\">\n          <div class=\"text3\">TRACKING INSTALLATION</div>\n          <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\n        </div> -->\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">\n              PASSENGER LIABILITY OF ₦250,000 PER PASSENGER. ANNUAL AGGREGATE OF\n              N 2,000,000\n            </div>\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/tick.svg\" />\n            </div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text5\">INCREASE IN PASSENGER LIABILITY</div>\n            <div class=\"text4\">@ 0.375% of increased benefit</div>\n          </div>\n\n          <div class=\"cflex1\">\n            <div class=\"text3\">\n              PAYMENT PLAN (AN ADDITIONAL 0.25% WILL BE APPLIED ON THE RATE FOR\n              PAYMENTS MADE OVER 3 INSTALLMENTS)\n            </div>\n            <div class=\"text4\">Once</div>\n          </div>\n\n          <div class=\"btndiv\">\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_comprehensivequote_comprehensivequote_module_ts.js.map