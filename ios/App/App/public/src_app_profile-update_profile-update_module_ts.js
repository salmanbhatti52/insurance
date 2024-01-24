"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile-update_profile-update_module_ts"],{

/***/ 51349:
/*!*****************************************************************!*\
  !*** ./src/app/profile-update/profile-update-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUpdatePageRoutingModule": () => (/* binding */ ProfileUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-update-routing.module */ 51349);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-update.page.html?ngResource */ 44885);
/* harmony import */ var _profile_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-update.page.scss?ngResource */ 52562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








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
        this.existingpass = '';
        this.userPassword = '';
        this.cuserPassword = '';
        this.show = false;
        this.eshowPass = false;
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
        this.customerId = {
            file: ""
        };
        this.utilityBills = {
            file: "",
            base64: "",
        };
        this.driverlicense = {
            file: "",
        };
        this.passport = {
            file: "",
        };
        this.base64 = '';
    }
    ngOnInit() {
        if (localStorage.getItem('userid') == null) {
            this.router.navigate(['/sign-in-screen']);
        }
        else {
            this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                // title: new FormControl('', [Validators.required]),
                fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
                lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
                existpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
                cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
            });
            this.RegisterForm.reset();
            this.uTitle = localStorage.getItem('title');
            this.fName = localStorage.getItem('fname');
            this.lName = localStorage.getItem('lname');
            this.mobNumber = localStorage.getItem('number');
            this.userEmail = localStorage.getItem('email');
            this.existingpass = localStorage.getItem('password');
            // this.cuserPassword = localStorage.getItem('password');
            console.log(this.usertitle);
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.userNumber);
            console.log(this.useremail);
            console.log(this.userpwd);
            console.log(this.cuserpwd);
        }
    }
    EtogglePass() {
        this.eshowPass = !this.eshowPass;
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
    existingpassword(ev) {
        console.log('currentpassword', ev.detail.value);
        this.existingpass = ev.detail.value;
    }
    currentpassword(ev) {
        console.log('currentpassword', ev.detail.value);
        this.userPassword = ev.detail.value;
    }
    newpassword(ev) {
        console.log('value', ev.detail.value);
        this.newpass = ev.detail.value;
    }
    updateProfile() {
        let myData = "myData={\r\n    \"user_id\":\"" + localStorage.getItem('userid') + "\",\r\n    \"title\":\"" + this.uTitle + "\",\r\n    \"first_name\": \"" + this.fName + "\",\r\n    \"last_name\":\"" + this.lName + "\",\r\n    \"phone\":\"" + this.mobNumber + "\",\r\n    \"email\":\"" + this.userEmail + "\",\r\n    \"password\":\"" + this.userPassword + "\",\r\n    \"conf_password\":\"" + this.cuserPassword + "\",\r\n    \"verify_token\":\"" + localStorage.getItem('token') + "\",\r\n    \"method\": \"update_user\" \r\n}";
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
    selectFile(event, type) {
        console.log("type --- ", type);
        console.log("linceise --- ", event.target.files[0]);
        this.getBase64(event.target.files[0]).then(data => {
            let file = event.target.files[0];
            let base64 = data;
            if (type == 'driverlicense') {
                this.driverlicense.file = file;
                this.base64 = base64;
            }
            else if (type == 'Idcard') {
                this.customerId.file = file;
                this.base64 = base64;
            }
            else if (type == 'passport') {
                this.passport.file = file;
                this.base64 = base64;
            }
            else if (type == 'utilityBills') {
                this.utilityBills.file = file;
                this.utilityBills.base64 = base64;
            }
        }).catch(err => console.log('Errrrrr', err));
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
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

/***/ 52562:
/*!********************************************************************!*\
  !*** ./src/app/profile-update/profile-update.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.headercls {\n  width: 85%;\n  margin: 15px auto 0px;\n}\n.ios .headercls {\n  width: 85%;\n  margin: 20px auto 0px;\n}\n.container {\n  width: 85%;\n  margin: 5% auto 5%;\n}\np.cont-p1 {\n  font-size: 25px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 5px auto;\n}\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n.email {\n  margin: 15px 0px 15px 20px;\n}\n.fields {\n  margin: 5% auto 0%;\n}\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n.inputfield {\n  margin: 2% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n.texthead {\n  font-size: 25px;\n  font-weight: 500;\n  color: #000;\n  margin: 5px auto;\n}\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n.alertIcon {\n  width: 13px;\n}\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.file-input::before {\n  content: \"Driver’s License\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input2::before {\n  content: \"National ID Card\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input3::before {\n  content: \"Passport (National/International)\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input4::before {\n  content: \"Utility Bil\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 18px;\n  color: #1A206D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFFRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBRUo7QUFDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQURBO0VBQ0ksWUFBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRUo7QUFBQTtFQUNFLDRCQUFBO0FBR0Y7QUFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURFO0VBRUUsa0JBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0E7RUFHSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7QUFGRjtBQUlBO0VBQ0UsMkJBQUE7QUFERjtBQUdBO0VBQ0ksMEJBQUE7QUFBSjtBQUdBO0VBRUksa0JBQUE7QUFESjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUVFO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKO0FBQUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKO0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0o7QUFIQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU1GO0FBSkE7RUFFRSxXQUFBO0FBTUY7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBT0Y7QUFMQTtFQUNFLGtCQUFBO0FBUUY7QUFOQTtFQUNFLDJCQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBUUo7QUFMQTtFQUNFLDJCQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBT0o7QUFKQTtFQUNFLDRDQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBTUo7QUFIQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBS0o7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0YiLCJmaWxlIjoicHJvZmlsZS11cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmNsc3tcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMHB4O1xufVxuLmlvc3tcbiAgLmhlYWRlcmNsc3tcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDUlIGF1dG8gNSU7XG59XG5wLmNvbnQtcDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG59XG4uaW5wdXR7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOjE1cHggYXV0byAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XG4gICAgLy8gLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOlxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NTAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOjE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcbn1cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG4uZHJvcGJveHtcbiAgICBtYXJnaW46IDQlIDAlO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG5cbiAgfVxuICAuaW5uZXJkcm9wYm94e1xuICAgIC8vIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogMnB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAyLjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIH1cbiAgLmV1cm8tdGV4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG5cbiAgfVxuICAuZXVyby10ZXh0MXtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDMxcHg7XG4gIH1cbi5pb24tdHh0e1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6YmxhY2s7XG59XG4uaXRlbS1waWNrZXJ7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICAvLyBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xuXG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpO1xufVxuaW1nLnBsY2hsZHItY3NzIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxNXB4O1xufVxuLmVtYWlse1xuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAyMHB4O1xufVxuLy9uYWphbSBwYXNzd29yZCBpbnB1dCBjc3MvLy9cbi5maWVsZHN7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDUlIGF1dG8gMCU7XG4gIH1cbiAgLmlucHV0ZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG4gIC5waW5wdXRcbiAge1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIH1cbiAgLnBoLWNzc3tcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjU2NTY1O1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjVweDtcbiAgfVxuICAuaW5wdXRmaWVsZHtcbiAgICBtYXJnaW46IDIlIDAlO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxuICAudGV4dGhlYWR7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC5idG4ge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB9XG5wLmxhc3QtcGFyYSB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTBweCBhdXRvIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbnNwYW4uc3Bhbi1zdGFydCB7XG4gICAgY29sb3I6ICMxQTBGNTU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5zcGFuLnNwYW4tZW5kIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbn1cbi52YWxpZGF0aW9ue1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHggYXV0byA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWxlcnRJY29ue1xuXG4gIHdpZHRoOiAxM3B4O1xufVxuLmVycm9yLW1zZ3tcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNkOTMwMjU7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmZpbGUtaW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiRHJpdmVy4oCZcyBMaWNlbnNlXCI7XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDdweCAycHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxufVxuLmZpbGUtaW5wdXQyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIk5hdGlvbmFsIElEIENhcmRcIjtcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogN3B4IDJweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG59XG4uZmlsZS1pbnB1dDM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiUGFzc3BvcnQgKE5hdGlvbmFsL0ludGVybmF0aW9uYWwpXCI7XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDdweCAycHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxufVxuLmZpbGUtaW5wdXQ0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlV0aWxpdHkgQmlsXCI7XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDdweCAycHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxufVxuXG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */";

/***/ }),

/***/ 44885:
/*!********************************************************************!*\
  !*** ./src/app/profile-update/profile-update.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <div class=\"headercls\">\n    <div style=\"width: 100%;\">\n      <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\">\n    </div>\n  </div>\n\n</ion-header> -->\n\n<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width:100% ;\">\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\" style=\"padding-top: 0px\">\n        <div class=\"title\">Customer Information Profile</div>\n      </ion-col>\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <!-- <div style=\"text-align:center\">\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ;\" alt=\"\">\n    </div> -->\n\n    <!-- <div class=\"title-para\" style=\"text-align: center;\">\n      <p class=\"cont-p1\">Customer Information Profile</p>\n    </div> -->\n\n    <form [formGroup]=\"RegisterForm\">\n      <!-- <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"uTitle\" class=\"input\" placeholder=\"{{usertitle}}\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('title').hasError('required') && RegisterForm.get('title').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\n        <span class=\"error-msg\">Enter your title</span>\n      </div> -->\n\n      <ion-input type=\"text\" formControlName=\"fname\" [(ngModel)]=\"fName\" class=\"input\" placeholder=\"{{firstName}}\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('fname').hasError('required') && RegisterForm.get('fname').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your first name</span>\n      </div>\n\n      <ion-input type=\"text\" formControlName=\"lname\" [(ngModel)]=\"lName\" class=\"input\" placeholder=\"{{lastName}}\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('lname').hasError('required') && RegisterForm.get('lname').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your last name</span>\n      </div>\n\n      <ion-input type=\"tel\" formControlName=\"number\" [(ngModel)]=\"mobNumber\" class=\"input\" placeholder=\"{{userNumber}}\">\n        <img class=\"plchldr-css\" src=\"assets/images/icons/phone.svg\" alt=\"\" />\n      </ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('number').hasError('required') && RegisterForm.get('number').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your mobile number</span>\n      </div>\n\n      <ion-input type=\"email\" formControlName=\"email\" [(ngModel)]=\"userEmail\" class=\"input\" placeholder=\"{{useremail}}\">\n        <img class=\"plchldr-css\" src=\"assets/images/icons/email.svg\" alt=\"\" />\n      </ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your email</span>\n      </div>\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">This is invalid format</span>\n      </div>\n\n      <div class=\"fields\">\n        <div class=\"inputdiv\">\n          <div>\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\n          </div>\n          <div class=\"pinput\">\n            <ion-input formControlName=\"existpassword\" [(ngModel)]=\"existingpass\" class=\"ph-css\"\n              placeholder=\"Existing password \" type=\"{{eshowPass ? 'text':'password' }}\"\n              (ionChange)=\"existingpassword($event)\"></ion-input>\n          </div>\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!eshowPass\" (click)=\"EtogglePass()\">\n            </ion-icon>\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"eshowPass\" (click)=\"EtogglePass()\">\n            </ion-icon>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"fields\">\n        <div class=\"inputdiv\">\n          <div>\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\n          </div>\n          <div class=\"pinput\">\n            <ion-input formControlName=\"password\" [(ngModel)]=\"userPassword\" class=\"ph-css\"\n              placeholder=\"Enter New password \" type=\"{{showPass ? 'text':'password' }}\"\n              (ionChange)=\"currentpassword($event)\"></ion-input>\n          </div>\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\">\n            </ion-icon>\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\">\n            </ion-icon>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your new password</span>\n      </div>\n\n      <div class=\"fields\">\n        <div class=\"inputdiv\">\n          <div>\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\n          </div>\n          <div class=\"pinput\">\n            <ion-input formControlName=\"cpassword\" [(ngModel)]=\"cuserPassword\" class=\"ph-css\"\n              placeholder=\"new password \" type=\"{{cshowPass ? 'text':'password' }}\" (ionChange)=\"newpassword($event)\">\n            </ion-input>\n          </div>\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!cshowPass\"\n              (click)=\"confirmtogglePass()\"></ion-icon>\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"cshowPass\"\n              (click)=\"confirmtogglePass()\"></ion-icon>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('cpassword').hasError('required') && RegisterForm.get('cpassword').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Confirm your new password</span>\n      </div>\n      <!-- //////////////--------------------------//////////////////////////// -->\n      <div class=\"texthead\">KYC Documents</div>\n      <div style=\"\n          font-size: 16px;\n          text-transform: capitalize;\n          color: #000;\n          font-weight: 600;\n        \">\n        Proof of ID\n      </div>\n      <div class=\"inputfield\" style=\"padding: 10px 15px\">\n        <!-- <input type=\"file\" (change)=\"selectFile($event,'Id')\" accept=\"image/x-png,image/gif,image/jpeg\"> -->\n        <div style=\"\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n          \">\n          <div style=\"color: #000\">Choose File</div>\n\n          <div (click)=\"openlist()\">\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\" />\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\" />\n          </div>\n        </div>\n\n        <div *ngIf=\"show==true\">\n          <input type=\"file\" (change)=\"selectFile($event,'driverlicense')\" accept=\"image/x-png,image/gif,image/jpeg\"\n            class=\"file-input\" value=\"\" title=\" \" />\n          <input type=\"file\" (change)=\"selectFile($event,'Idcard')\" accept=\"image/x-png,image/gif,image/jpeg\"\n            class=\"file-input2\" value=\"\" title=\" \" />\n          <input type=\"file\" (change)=\"selectFile($event,'passport')\" accept=\"image/x-png,image/gif,image/jpeg\"\n            class=\"file-input3\" value=\"\" title=\" \" />\n        </div>\n      </div>\n\n      <div style=\"\n          height: 100px;\n          width: 100px;\n          text-align: center;\n          margin-bottom: 4%;\n        \" *ngIf=\"base64\">\n        <img style=\"height: 100px; width: 100px\" src=\"{{base64}}\" alt=\"\" />\n      </div>\n\n      <div style=\"\n          font-size: 16px;\n          text-transform: capitalize;\n          color: #000;\n          font-weight: 600;\n        \">\n        Proof of Address\n      </div>\n      <div class=\"inputfield\" style=\"\n          display: flex;\n          height: 44px;\n          align-items: center;\n          padding: 0px 15px;\n        \">\n        <input type=\"file\" (change)=\"selectFile($event,'utilityBills')\" accept=\"image/x-png,image/gif,image/jpeg\"\n          class=\"file-input4\" value=\"\" title=\" \" />\n      </div>\n\n      <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"utilityBills.base64\">\n        <img style=\"height: 100px; width: 100px\" src=\"{{utilityBills.base64}}\" alt=\"\" />\n      </div>\n\n      <!-- //////////////--------------------------//////////////////////////// -->\n      <div style=\"width: 85%; margin: 30px auto 0px\">\n        <div style=\"text-align: center\">\n          <ion-button type=\"submit\" [disabled]=\"RegisterForm.invalid\" class=\"btn\" (click)=\"updateProfile()\"\n            style=\"--background: #a8b400\">Update</ion-button>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n<!-- <ion-footer  >\n\n\n\n</ion-footer> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile-update_profile-update_module_ts.js.map