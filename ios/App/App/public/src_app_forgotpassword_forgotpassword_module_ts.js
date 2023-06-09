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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 55651);




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

/***/ 82488:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 1782);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 55651);







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

/***/ 55651:
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page.html?ngResource */ 33382);
/* harmony import */ var _forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss?ngResource */ 87599);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);








let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(location, api, menuCtrl) {
        this.location = location;
        this.api = api;
        this.menuCtrl = menuCtrl;
        this.userEmail = '';
    }
    ngOnInit() {
        this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)])
        });
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true);
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
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgotpassword',
        template: _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotpasswordPage);



/***/ }),

/***/ 87599:
/*!********************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 28px;\n}\n\n.container {\n  width: 75%;\n  margin: 0px auto 0px;\n}\n\n.input-div {\n  margin-top: 26px;\n}\n\n@font-face {\n  font-family: Bliss Pro;\n  src: url(\"/assets/BlissPro-Medium/BlissPro-Medium.ttf\");\n}\n\np.sign-in-para {\n  font-size: 24px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n  text-align: center;\n}\n\n.input {\n  height: 44px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 15px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 5px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.btn {\n  width: 100%;\n  height: 45px;\n  margin-top: 24px;\n  --border-radius: 12px;\n  font-size: 16px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.validation {\n  width: 80%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUdyQzs7QUFBRTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUt2Qzs7QUFGQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsdURBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNJLDRCQUFBO0FBUUo7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFVRjs7QUFSQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVdGOztBQVRBO0VBRUUsV0FBQTtBQVdGOztBQVRBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFZRiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93Y2xze1xuICBkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaW9ze1xuICAucm93Y2xze1xuICAgIGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMjhweDtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbn1cbi5pbnB1dC1kaXZ7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgc3JjOiB1cmwoJy9hc3NldHMvQmxpc3NQcm8tTWVkaXVtL0JsaXNzUHJvLU1lZGl1bS50dGYnKTtcbn1cbnAuc2lnbi1pbi1wYXJhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXR7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjoyMHB4IGF1dG8gMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNUQ1RDVEO1xuICAgIC8vIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTpcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjUwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZToxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG5pb24taW5wdXQge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG4uYnRuLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOjE2cHg7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udmFsaWRhdGlvbntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1cHggYXV0byA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWxlcnRJY29ue1xuXG4gIHdpZHRoOiAxM3B4O1xufVxuLmVycm9yLW1zZ3tcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNkOTMwMjU7XG59XG4iXX0= */";

/***/ }),

/***/ 33382:
/*!********************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-row class=\"rowcls\">\n    <ion-col size=\"10\" style=\"padding-left: 27px\">\n      <div style=\"width:100% ;\">\n        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n      </div>\n\n      <!-- <ion-menu-toggle>\n        <ion-buttons>\n          <div style=\"width: 100%\">\n            <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n          </div>\n        </ion-buttons>\n      </ion-menu-toggle> -->\n    </ion-col>\n\n    <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div style=\"text-align: center\">\n      <img src=\"assets/images/logo.svg\" style=\"text-align: center; margin-top: 15px\" alt=\"\" />\n    </div>\n\n    <div style=\"margin-top: 15px\">\n      <p class=\"sign-in-para\">Enter Your Email Address</p>\n    </div>\n    <form [formGroup]=\"RegisterForm\" (ngSubmit)=\"formSubmit()\">\n      <div class=\"input-div\">\n        <ion-input formControlName=\"email\" [(ngModel)]=\"userEmail\" class=\"input\" type=\"email\" placeholder=\"Email\"><img\n            style=\"margin: 15px 7px 14px 15px\" src=\"assets/images/icons/email.svg\" />\n        </ion-input>\n        <div class=\"validation\"\n          *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n          <span class=\"error-msg\">Enter your email</span>\n        </div>\n        <div class=\"validation\"\n          *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n          <span class=\"error-msg\">This is invalid format</span>\n        </div>\n      </div>\n\n      <ion-button class=\"btn\" type=\"submit\" [disabled]=\"RegisterForm.invalid\" style=\"--background: #a8b400\">Reset\n        Password</ion-button>\n    </form>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_forgotpassword_forgotpassword_module_ts.js.map