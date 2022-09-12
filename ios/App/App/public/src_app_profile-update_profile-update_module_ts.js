"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile-update_profile-update_module_ts"],{

/***/ 1349:
/*!*****************************************************************!*\
  !*** ./src/app/profile-update/profile-update-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUpdatePageRoutingModule": () => (/* binding */ ProfileUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-update.page */ 3082);




const routes = [
    {
        path: '',
        component: _profile_update_page__WEBPACK_IMPORTED_MODULE_0__.ProfileUpdatePage
    }
];
let ProfileUpdatePageRoutingModule = class ProfileUpdatePageRoutingModule {
};
ProfileUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileUpdatePageRoutingModule);



/***/ }),

/***/ 969:
/*!*********************************************************!*\
  !*** ./src/app/profile-update/profile-update.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUpdatePageModule": () => (/* binding */ ProfileUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-update-routing.module */ 1349);
/* harmony import */ var _profile_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-update.page */ 3082);







let ProfileUpdatePageModule = class ProfileUpdatePageModule {
};
ProfileUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileUpdatePageRoutingModule
        ],
        declarations: [_profile_update_page__WEBPACK_IMPORTED_MODULE_1__.ProfileUpdatePage]
    })
], ProfileUpdatePageModule);



/***/ }),

/***/ 3082:
/*!*******************************************************!*\
  !*** ./src/app/profile-update/profile-update.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUpdatePage": () => (/* binding */ ProfileUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-update.page.html?ngResource */ 4885);
/* harmony import */ var _profile_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-update.page.scss?ngResource */ 2562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








let ProfileUpdatePage = class ProfileUpdatePage {
    constructor(router, api, location) {
        this.router = router;
        this.api = api;
        this.location = location;
        this.uTitle = '';
        this.fName = '';
        this.lName = '';
        this.mobNumber = '';
        this.userEmail = '';
        this.userPassword = '';
        this.cuserPassword = '';
        this.show = false;
        this.showPass = false;
        this.cshowPass = false;
        this.usertitle = '';
        this.firstName = '';
        this.lastName = '';
        this.userNumber = '';
        this.useremail = '';
        this.userpwd = '';
        this.cuserpwd = '';
        this.i = 1;
    }
    ngOnInit() {
        if (localStorage.getItem('userid') == null) {
            this.router.navigate(['/sign-in-screen']);
        }
        else {
            this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
                fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
                lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
                cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
            });
            this.RegisterForm.reset();
            this.uTitle = localStorage.getItem('title');
            this.fName = localStorage.getItem('fname');
            this.lName = localStorage.getItem('lname');
            this.mobNumber = localStorage.getItem('number');
            this.userEmail = localStorage.getItem('email');
            this.userPassword = localStorage.getItem('password');
            this.cuserPassword = localStorage.getItem('password');
            console.log(this.usertitle);
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.userNumber);
            console.log(this.useremail);
            console.log(this.userpwd);
            console.log(this.cuserpwd);
        }
    }
    togglePass() {
        this.showPass = !this.showPass;
    }
    confirmtogglePass() {
        this.cshowPass = !this.cshowPass;
    }
    goBack() {
        this.location.back();
    }
    openlist() {
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
    updateProfile() {
        let myData = "myData={\r\n    \"user_id\":\"" + localStorage.getItem('userid') + "\",\r\n    \"title\":\"" + this.uTitle + "\",\r\n    \"first_name\": \"" + this.fName + "\",\r\n    \"last_name\":\"" + this.lName + "\",\r\n    \"phone\":\"" + this.mobNumber + "\",\r\n    \"email\":\"" + this.userEmail + "\",\r\n    \"password\":\"" + this.userPassword + "\",\r\n    \"conf_password\":\"" + this.cuserPassword + "\",\r\n    \"verify_token\":\"" + localStorage.getItem('token') + "\",\r\n    \"method\": \"update_user\" \r\n}";
        if (this.userPassword === this.cuserPassword) {
            console.log(this.userPassword);
            console.log(this.cuserPassword);
            this.api.insertData(myData).subscribe((res) => {
                console.log("res==", res);
                if (res.message === 'Updated done') {
                    console.log(res.message);
                    this.api.presenttoast("Profile updated successfully!");
                    this.router.navigate(['/home-page-screen-after-login']);
                }
                else {
                    this.api.presenttoast(res.message);
                }
            }, (err) => {
                console.log('err==', err);
                this.api.presenttoast(err);
            });
        }
        else {
            this.api.presenttoast('"Password" and "Confirm_password" not matched!');
        }
    }
};
ProfileUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
ProfileUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile-update',
        template: _profile_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileUpdatePage);



/***/ }),

/***/ 2562:
/*!********************************************************************!*\
  !*** ./src/app/profile-update/profile-update.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 85%;\n  margin: 5% auto 5%;\n}\n\np.cont-p1 {\n  font-size: 30px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 5px auto;\n}\n\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\n\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n\n.email {\n  margin: 15px 0px 15px 20px;\n}\n\n.fields {\n  margin: 5% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\n\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\n\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNFLDRCQUFBO0FBRUY7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFFRSxrQkFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUE7RUFHSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FBSEY7O0FBS0E7RUFDRSwyQkFBQTtBQUZGOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFJQTtFQUVJLGtCQUFBO0FBRko7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdFO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFFRSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQUlGIiwiZmlsZSI6InByb2ZpbGUtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogNSUgYXV0byA1JTtcclxufVxyXG5wLmNvbnQtcDEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG4uaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOjE1cHggYXV0byAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcclxuICAgIC8vIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTpcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6MTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmRyb3Bib3h7XHJcbiAgICBtYXJnaW46IDQlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcblxyXG4gIH1cclxuICAuaW5uZXJkcm9wYm94e1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIuOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0MXtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG4gIH1cclxuLmlvbi10eHR7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pdGVtLXBpY2tlcntcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XHJcblxyXG59XHJcblxyXG4uaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG59XHJcbmltZy5wbGNobGRyLWNzcyB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxNXB4O1xyXG59XHJcbi5lbWFpbHtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAyMHB4O1xyXG59XHJcbi8vbmFqYW0gcGFzc3dvcmQgaW5wdXQgY3NzLy8vXHJcbi5maWVsZHN7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDAlO1xyXG4gIH1cclxuICAuaW5wdXRkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICAucGlucHV0XHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5waC1jc3N7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjU2NTY1O1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xyXG4gIH1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxucC5sYXN0LXBhcmEge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbnNwYW4uc3Bhbi1zdGFydCB7XHJcbiAgICBjb2xvcjogIzFBMEY1NTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuc3Bhbi5zcGFuLWVuZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbn1cclxuLnZhbGlkYXRpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHggYXV0byA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hbGVydEljb257XHJcblxyXG4gIHdpZHRoOiAxM3B4O1xyXG59XHJcbi5lcnJvci1tc2d7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogI2Q5MzAyNTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4885:
/*!********************************************************************!*\
  !*** ./src/app/profile-update/profile-update.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div style=\"width: 85%;\r\n  margin: 15px auto 0px;\">\r\n    <div style=\"width: 100%;\">\r\n      <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    \r\n    <div style=\"text-align:center\">\r\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ;\" alt=\"\">\r\n    </div>\r\n    \r\n    <div class=\"title-para\" style=\"text-align: center;\">\r\n      <p class=\"cont-p1\">Update Profile</p>\r\n    </div>\r\n\r\n    <form [formGroup]=\"RegisterForm\" >\r\n      <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"uTitle\" class=\"input\" placeholder=\"{{usertitle}}\" ><img class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n      \r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('title').hasError('required') && RegisterForm.get('title').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your title</span>\r\n      </div>\r\n      \r\n      <ion-input type=\"text\" formControlName=\"fname\" [(ngModel)]=\"fName\" class=\"input\" placeholder=\"{{firstName}}\" ><img class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n\r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('fname').hasError('required') && RegisterForm.get('fname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your first name</span>\r\n      </div>\r\n      \r\n      <ion-input type=\"text\" formControlName=\"lname\" [(ngModel)]=\"lName\" class=\"input\" placeholder=\"{{lastName}}\" ><img class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n      \r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('lname').hasError('required') && RegisterForm.get('lname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your last name</span>\r\n      </div>\r\n      \r\n      <ion-input type=\"tel\" formControlName=\"number\" [(ngModel)]=\"mobNumber\" class=\"input\" placeholder=\"{{userNumber}}\" ><img class=\"plchldr-css\" src=\"assets/images/icons/phone.svg\" alt=\"\"></ion-input>\r\n      \r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('number').hasError('required') && RegisterForm.get('number').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your mobile number</span>\r\n      </div>\r\n      \r\n      <ion-input type=\"email\" formControlName=\"email\" [(ngModel)]=\"userEmail\" class=\"input\" placeholder=\"{{useremail}}\" ><img class=\"plchldr-css\" src=\"assets/images/icons/email.svg\" alt=\"\"></ion-input>\r\n      \r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your email</span>\r\n      </div>\r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">This is invalid format</span>\r\n      </div>\r\n\r\n      <div class=\"fields\"> \r\n        <div class=\"inputdiv\">\r\n          <div >\r\n            <img style=\"margin:15px 10px 13px 15px;\" src=\"assets/images/pw-lock.svg\">\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input formControlName=\"password\" [(ngModel)]=\"userPassword\" class=\"ph-css\" placeholder=\"{{userpwd}}\" type=\"{{showPass ? 'text':'password' }}\" ></ion-input>\r\n            \r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px;\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your password</span>\r\n      </div>\r\n\r\n      <div class=\"fields\"> \r\n        <div class=\"inputdiv\">\r\n          <div >\r\n            <img style=\"margin:15px 10px 13px 15px;\" src=\"assets/images/pw-lock.svg\">\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input formControlName=\"cpassword\" [(ngModel)]=\"cuserPassword\" class=\"ph-css\" placeholder=\"{{cuserpwd}}\" type=\"{{cshowPass ? 'text':'password' }}\" ></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px;\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye\" *ngIf=\"!cshowPass\" (click)=\"confirmtogglePass()\"></ion-icon>\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye-off\" *ngIf=\"cshowPass\" (click)=\"confirmtogglePass()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('cpassword').hasError('required') && RegisterForm.get('cpassword').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Confirm your password</span>\r\n      </div>\r\n\r\n      <div style=\"width: 85%; margin: 30px auto 0px;\">\r\n        <div style=\"text-align:center;\">\r\n          <ion-button type=\"submit\" [disabled]=\"RegisterForm.invalid\" class=\"btn\"  (click)=\"updateProfile()\" style=\"--background: #A8B400;\">Update</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<!-- <ion-footer  >\r\n  \r\n  \r\n  \r\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_profile-update_profile-update_module_ts.js.map