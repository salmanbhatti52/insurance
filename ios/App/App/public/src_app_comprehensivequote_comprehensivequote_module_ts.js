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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 5% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A0F55;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A0F55;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A0F55;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius:12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.tickimg {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A0F55;\n  --border-radius:12px ;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByZWhlbnNpdmVxdW90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWFGOztBQVZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFnQkYiLCJmaWxlIjoiY29tcHJlaGVuc2l2ZXF1b3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG8gMjUlO1xyXG59XHJcbi5zZWdtZW50MSB7XHJcbiAgcGFkZGluZzogNXB4IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgLnNidG4ge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC0tbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEwRjU1O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiAjODU4NThBO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG4uaHRleHQxe1xyXG4gIGNvbG9yOiMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnIxe1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogNDVweDtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnIye1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogNjVweDtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm1haW57XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmNmbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2ZsZXgxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHQxe1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4uY3NwYW57XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50ZXh0M3tcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogMTAwJTs7XHJcbn1cclxuLnRleHQ0e1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDozMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50ZXh0NXtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1nZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZHRleHR7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmJ0bmRpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bntcclxuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2lkdGg6IDIwM3B4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5ib3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG59XHJcbi5pdGV4dHtcclxuICBjb2xvcjojNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4udGlja2ltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcclxufVxyXG4uYnRuMXtcclxuICAtLWJhY2tncm91bmQ6ICMxQTBGNTU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xyXG4gIHdpZHRoOiAyNzNweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 82758:
/*!****************************************************************************!*\
  !*** ./src/app/comprehensivequote/comprehensivequote.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div\r\n      style=\"border: 1px solid #a8b400; border-radius: 12px\"\r\n      *ngIf=\"productname=='PRIVATE MOTOR-AUTO CLASSIC'\"\r\n    >\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\">\r\n            <b>AUTO CLASS</b><br /><span\r\n              class=\"cspan\"\r\n              style=\"padding-left: 2.5%\"\r\n              >Comprehensive</span\r\n            >\r\n          </div>\r\n          <div class=\"text1\">\r\n            1.75%<br /><span class=\"cspan\">Of vehicle value</span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">3RD PARTY PROPERTY DAMAGE</div>\r\n            <div class=\"text4\">Up To N1 Million</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">3RD PARTY BODILY INJURY</div>\r\n            <div class=\"text4\">Up To N60 Million</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">THIFT</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">FIRE</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">ACCIDENTAL DAMAGE</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">AUTHORIZED REPAIR LIMIT</div>\r\n            <div class=\"text4\">2.5% Of The Car Value</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">TOWING LIMIT</div>\r\n            <div class=\"text4\">N 12,500</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">DEPRECIATION RATE</div>\r\n            <div class=\"text4\">Graduated</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">MINIMUM SUM INSURED</div>\r\n            <div class=\"text4\">₦2,000,000</div>\r\n          </div>\r\n\r\n          <div class=\"headtext\">ADDITIONAL COVERS AT NO EXTRA COST</div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">REFUND OF MEDICAL EXPENSES</div>\r\n            <div class=\"text4\">Up To ₦10,000</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">LOSS OF PERSONAL EFFECT</div>\r\n            <div class=\"text4\">UP TO N 10,000</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">TRACKING INSTALLATION</div>\r\n            <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\r\n          </div>\r\n\r\n          <div class=\"headtext\">TOP UP COVERS AVAILABLE AT EXTRA COST</div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">EXCESS BUY BACK</div>\r\n            <div class=\"text4\">0.5% Of Sum Insured</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">FLOOD EXTENSION</div>\r\n            <div class=\"text4\">0.25% Of Sum Insured</div>\r\n          </div>\r\n\r\n          <!-- <div class=\"cflex1\">\r\n            <div class=\"text3\">TRACKING INSTALLATION</div>\r\n            <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\r\n          </div> -->\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">\r\n              PASSENGER LIABILITY OF ₦250,000 PER PASSENGER. ANNUAL AGGREGATE OF\r\n              N 2,000,000\r\n            </div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">INCREASE IN PASSENGER LIABILITY</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">\r\n              PAYMENT PLAN (AN ADDITIONAL 0.25% WILL BE APPLIED ON THE RATE FOR\r\n              PAYMENTS MADE OVER 3 INSTALLMENTS)\r\n            </div>\r\n            <div class=\"text4\">Up To 3 Consecutive And Equal Payments</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      style=\"border: 1px solid #a8b400; border-radius: 12px\"\r\n      *ngIf=\"productname=='PRIVATE MOTOR-AUTO PLUS'\"\r\n    >\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\">\r\n            <b>Auto Plus</b><br /><span class=\"cspan\" style=\"padding-left: 2.5%\"\r\n              >Comprehensive</span\r\n            >\r\n          </div>\r\n          <div class=\"text1\">\r\n            3%<br /><span class=\"cspan\">Of vehicle value</span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">3RD PARTY PROPERTY DAMAGE</div>\r\n            <div class=\"text4\">Up To N1 Million</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">3RD PARTY BODILY INJURY</div>\r\n            <div class=\"text4\">Up To N60 Million</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">THIFT</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">FIRE</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">ACCIDENTAL DAMAGE</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">AUTHORIZED REPAIR LIMIT</div>\r\n            <div class=\"text4\">5% Of The Car Value</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">TOWING LIMIT</div>\r\n            <div class=\"text4\">N 15,000</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">DEPRECIATION RATE</div>\r\n            <div class=\"text4\">Graduated</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">MINIMUM SUM INSURED</div>\r\n            <div class=\"text4\">₦3,500,000</div>\r\n          </div>\r\n\r\n          <div class=\"headtext\">ADDITIONAL COVERS AT NO EXTRA COST</div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">REFUND OF MEDICAL EXPENSES</div>\r\n            <div class=\"text4\">Up To ₦50,000</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">LOSS OF PERSONAL EFFECT</div>\r\n            <div class=\"text4\">UP TO N 50,000</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">TRACKING INSTALLATION</div>\r\n            <div class=\"text4\">Free For Vehicles Of N3,500,000 And Above</div>\r\n          </div>\r\n\r\n          <div class=\"headtext\">TOP UP COVERS AVAILABLE AT EXTRA COST</div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">EXCESS BUY BACK</div>\r\n            <div class=\"text4\">Included</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">FLOOD EXTENSION</div>\r\n            <div class=\"text4\">Included</div>\r\n          </div>\r\n\r\n          <!-- <div class=\"cflex1\">\r\n          <div class=\"text3\">TRACKING INSTALLATION</div>\r\n          <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\r\n        </div> -->\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">\r\n              PASSENGER LIABILITY OF ₦250,000 PER PASSENGER. ANNUAL AGGREGATE OF\r\n              N 2,000,000\r\n            </div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">INCREASE IN PASSENGER LIABILITY</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">\r\n              PAYMENT PLAN (AN ADDITIONAL 0.25% WILL BE APPLIED ON THE RATE FOR\r\n              PAYMENTS MADE OVER 3 INSTALLMENTS)\r\n            </div>\r\n            <div class=\"text4\">Up To 3 Consecutive And Equal Payments</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      style=\"border: 1px solid #a8b400; border-radius: 12px\"\r\n      *ngIf=\"productname=='UBER CLASSIC MOTOR'\"\r\n    >\r\n      <div class=\"main\">\r\n        <div class=\"cflex\">\r\n          <div class=\"text\">\r\n            <b>Uber Classic</b><br /><span\r\n              class=\"cspan\"\r\n              style=\"padding-left: 2.5%\"\r\n              >Comprehensive</span\r\n            >\r\n          </div>\r\n          <div class=\"text1\">\r\n            2.5%<br /><span class=\"cspan\">Of vehicle value</span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">3RD PARTY PROPERTY DAMAGE</div>\r\n            <div class=\"text4\">Up To N1 Million</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">3RD PARTY BODILY INJURY</div>\r\n            <div class=\"text4\">Up To N60 Million</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">THIFT</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">FIRE</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">ACCIDENTAL DAMAGE</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">AUTHORIZED REPAIR LIMIT</div>\r\n            <div class=\"text4\">5% Of The Car Value</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">TOWING LIMIT</div>\r\n            <div class=\"text4\">N 12,500</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">DEPRECIATION RATE</div>\r\n            <div class=\"text4\">Flat</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">MINIMUM SUM INSURED</div>\r\n            <div class=\"text4\">₦1,500,000</div>\r\n          </div>\r\n\r\n          <div class=\"headtext\">ADDITIONAL COVERS AT NO EXTRA COST</div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">REFUND OF MEDICAL EXPENSES</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">LOSS OF PERSONAL EFFECT</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">TRACKING INSTALLATION</div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cross.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"headtext\">TOP UP COVERS AVAILABLE AT EXTRA COST</div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">EXCESS BUY BACK</div>\r\n            <div class=\"text4\">1% of sum insured</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">FLOOD EXTENSION</div>\r\n            <div class=\"text4\">0.25% of Sum Insured</div>\r\n          </div>\r\n\r\n          <!-- <div class=\"cflex1\">\r\n          <div class=\"text3\">TRACKING INSTALLATION</div>\r\n          <div class=\"text4\">Free For Vehicles Of N5,000,000 And Above</div>\r\n        </div> -->\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">\r\n              PASSENGER LIABILITY OF ₦250,000 PER PASSENGER. ANNUAL AGGREGATE OF\r\n              N 2,000,000\r\n            </div>\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/tick.svg\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text5\">INCREASE IN PASSENGER LIABILITY</div>\r\n            <div class=\"text4\">@ 0.375% of increased benefit</div>\r\n          </div>\r\n\r\n          <div class=\"cflex1\">\r\n            <div class=\"text3\">\r\n              PAYMENT PLAN (AN ADDITIONAL 0.25% WILL BE APPLIED ON THE RATE FOR\r\n              PAYMENTS MADE OVER 3 INSTALLMENTS)\r\n            </div>\r\n            <div class=\"text4\">Once</div>\r\n          </div>\r\n\r\n          <div class=\"btndiv\">\r\n            <ion-button class=\"btn\" (click)=\"goto()\">Get Quote</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_comprehensivequote_comprehensivequote_module_ts.js.map