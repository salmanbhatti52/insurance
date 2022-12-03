"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_thirdpartydetails_thirdpartydetails_module_ts"],{

/***/ 1399:
/*!***********************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdpartydetailsPageRoutingModule": () => (/* binding */ ThirdpartydetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpartydetails.page */ 74952);




const routes = [
    {
        path: '',
        component: _thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_0__.ThirdpartydetailsPage
    }
];
let ThirdpartydetailsPageRoutingModule = class ThirdpartydetailsPageRoutingModule {
};
ThirdpartydetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThirdpartydetailsPageRoutingModule);



/***/ }),

/***/ 64829:
/*!***************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdpartydetailsPageModule": () => (/* binding */ ThirdpartydetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _thirdpartydetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpartydetails-routing.module */ 1399);
/* harmony import */ var _thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdpartydetails.page */ 74952);







let ThirdpartydetailsPageModule = class ThirdpartydetailsPageModule {
};
ThirdpartydetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _thirdpartydetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThirdpartydetailsPageRoutingModule
        ],
        declarations: [_thirdpartydetails_page__WEBPACK_IMPORTED_MODULE_1__.ThirdpartydetailsPage]
    })
], ThirdpartydetailsPageModule);



/***/ }),

/***/ 74952:
/*!*************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdpartydetailsPage": () => (/* binding */ ThirdpartydetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _thirdpartydetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpartydetails.page.html?ngResource */ 26112);
/* harmony import */ var _thirdpartydetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdpartydetails.page.scss?ngResource */ 80959);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let ThirdpartydetailsPage = class ThirdpartydetailsPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
ThirdpartydetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
ThirdpartydetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-thirdpartydetails',
        template: _thirdpartydetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_thirdpartydetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThirdpartydetailsPage);



/***/ }),

/***/ 80959:
/*!**************************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n.wrapper {\n  width: 85%;\n  margin: 0% auto;\n}\n.htitle {\n  color: #A8B400;\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  margin-top: 14px;\n}\n.p1 {\n  color: #1A206D;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  font-weight: 900;\n}\np.number-styling {\n  font-size: 10px;\n  font-weight: 400;\n  background: #A8B400;\n  height: 13px;\n  width: 16px;\n  color: white;\n  border-radius: 50%;\n  padding-left: 3.5px;\n  padding-bottom: 0px;\n  margin: 0px;\n  margin-right: 8px;\n  margin-top: 2px;\n  font-family: \"Bliss Pro\";\n}\n.p2 {\n  color: #5D5D5D;\n  font-family: Bliss Pro;\n  font-size: 14px;\n  margin: 0px;\n}\n.p3 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\nul li {\n  color: #000000;\n  font-family: Bliss Pro;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.5;\n}\nul {\n  list-style: none;\n}\nul li::before {\n  content: \"•\";\n  color: #A8B400;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n.btn {\n  width: 273px;\n  height: 48px;\n  --background: #1A206D;\n  --border-radius: 12px;\n  opacity: 1;\n  font-size: 20px;\n  font-family: \"Bliss Pro\";\n  text-transform: capitalize;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkcGFydHlkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUdGO0FBREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FBREE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0UsZUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFLSjtBQUhBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBT0Y7QUFMQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUUY7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7QUFQQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVVGO0FBUkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQVdGIiwiZmlsZSI6InRoaXJkcGFydHlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53cmFwcGVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAlIGF1dG87XG59XG4uaHRpdGxle1xuICBjb2xvcjogI0E4QjQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5wMXtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbnAubnVtYmVyLXN0eWxpbmcge1xuICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIGhlaWdodDogMTNweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmctbGVmdDogMy41cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQmxpc3MgUHJvXCI7XG59XG4ucDJ7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnAze1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnVsIGxpe1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxudWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbn1cbi5idG57XG4gIHdpZHRoOiAyNzNweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ0JsaXNzIFBybyc7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */";

/***/ }),

/***/ 26112:
/*!**************************************************************************!*\
  !*** ./src/app/thirdpartydetails/thirdpartydetails.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Product Details</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"htitle\">\n      <img  style=\"height: 16px;\" src=\"assets/images/thirdPartyCorp.svg\" alt=\"\">\n      Third Party\n    </div> \n    <img src=\"assets/images/thridPartyCar.svg\" style=\"border-radius: 12px;\n    margin-top: 5%;background: #EAEAEA;\">\n\n    <span class=\"right_side_des\" style=\"text-align:left;\">\n      <p class=\"p1\">Third party motor insurance provides cover for the following:</p>\n      <div style=\"display:flex ;\"> \n        <p class=\"number-styling\" style=\"width: 13.35px;\" >1</p>\n        <p class=\"p2\">Damage to third party property up to a limit of N1,000,000</p>\n      </div>\n      \n      <div style=\"display:flex ; margin-top: 8px;\">\n        <p class=\"number-styling\">2</p>\n        <p class=\"p2\">Unlimited (but reasonable) liability for death / bodily injury to third parties.</p>\n      </div>\n\n      <p class=\"p3\">To buy product, you will need:</p>\n      <ul>\n        <li>Chassis Number</li>\n        <li>Engine Number</li>\n        <li>Vehicle Registration Number</li>\n      </ul>\n      <p class=\"p2\" style=\"line-height:1.3;\">You can find these on your vehicle license document which you are required\n        to upload on your account\n        after purchase.</p>\n    </span>\n\n    <div style=\"text-align: center; margin-top: 45px;\">\n      <ion-button class=\"btn\">Quote</ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_thirdpartydetails_thirdpartydetails_module_ts.js.map