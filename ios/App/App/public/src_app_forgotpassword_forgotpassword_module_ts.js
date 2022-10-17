"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgotpassword_forgotpassword_module_ts"],{

/***/ 1782:
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": () => (/* binding */ ForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 5651);




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ 2488:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 1782);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 5651);







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ 5651:
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page.html?ngResource */ 3382);
/* harmony import */ var _forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss?ngResource */ 7599);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);







let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(location, api) {
        this.location = location;
        this.api = api;
        this.userEmail = '';
    }
    ngOnInit() {
        this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)])
        });
    }
    goback() {
        this.location.back();
    }
    formSubmit() {
        let myData = 'myData={\r\n "email": "' + this.userEmail + '",\r\n + "method": "forgot_password"\r\n}';
        this.api.insertData(myData).subscribe((res) => {
            console.log('res==', res);
            if (res.status_no == 1) {
                this.api.presenttoast(res.message);
            }
            else {
                this.api.presenttoast(res.message);
            }
        }, (err) => {
            console.log('err==', err);
            this.api.presenttoast(err);
        });
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgotpassword',
        template: _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotpasswordPage);



/***/ }),

/***/ 7599:
/*!********************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 28px;\n}\n\n.container {\n  width: 75%;\n  margin: 0px auto 0px;\n}\n\n.input-div {\n  margin-top: 26px;\n}\n\n@font-face {\n  font-family: Bliss Pro;\n  src: url(\"/assets/BlissPro-Medium/BlissPro-Medium.ttf\");\n}\n\np.sign-in-para {\n  font-size: 24px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n  text-align: center;\n}\n\n.input {\n  height: 44px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 15px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 5px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.btn {\n  width: 100%;\n  height: 48px;\n  margin-top: 24px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.validation {\n  width: 80%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUdyQzs7QUFBRTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUt2Qzs7QUFGQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsdURBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNJLDRCQUFBO0FBUUo7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQVVGOztBQVJBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVEE7RUFFRSxXQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQVlGIiwiZmlsZSI6ImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3djbHN7XHJcbiAgZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5pb3N7XHJcbiAgLnJvd2Nsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XHJcbn1cclxuLmlucHV0LWRpdntcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvQmxpc3NQcm8tTWVkaXVtL0JsaXNzUHJvLU1lZGl1bS50dGYnKTtcclxufVxyXG5wLnNpZ24taW4tcGFyYSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjoyMHB4IGF1dG8gMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XHJcbiAgICAvLyAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOjE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmJ0bi1kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnZhbGlkYXRpb257XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDVweCBhdXRvIDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0SWNvbntcclxuXHJcbiAgd2lkdGg6IDEzcHg7XHJcbn1cclxuLmVycm9yLW1zZ3tcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZDkzMDI1O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3382:
/*!********************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n\n  <ion-row class=\"rowcls\">\n    <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      <div style=\"width:100% ;\">\n        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n      </div>\n\n    </ion-col>\n\n    <ion-col class=\"titleclass\" size=\"2\">\n\n    </ion-col>\n\n\n  </ion-row>\n\n\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div style=\"text-align:center\">\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ; margin-top:15px;\" alt=\"\">\n    </div>\n\n    <div style=\"margin-top:15px;\">\n      <p class=\"sign-in-para\">Enter your Email Address</p>\n    </div>\n    <form [formGroup]=\"RegisterForm\" (ngSubmit)=\"formSubmit()\">\n      <div class=\"input-div\">\n        <ion-input formControlName=\"email\" [(ngModel)]=\"userEmail\" class=\"input\" type=\"email\" placeholder=\"Email\"><img\n            style=\"margin:15px 7px 14px 15px;\" src=\"assets/images/icons/email.svg\"> </ion-input>\n        <div class=\"validation\"\n          *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\n          <span class=\"error-msg\">Enter your email</span>\n        </div>\n        <div class=\"validation\"\n          *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\n          <span class=\"error-msg\">This is invalid format</span>\n        </div>\n      </div>\n\n      <ion-button class=\"btn\" type=\"submit\" [disabled]=\"RegisterForm.invalid\" style=\"--background: #A8B400;\">Forgot\n        Password</ion-button>\n    </form>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgotpassword_forgotpassword_module_ts.js.map