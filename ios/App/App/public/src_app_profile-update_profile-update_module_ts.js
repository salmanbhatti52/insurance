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

module.exports = "@charset \"UTF-8\";\n.headercls {\n  width: 85%;\n  margin: 15px auto 0px;\n}\n.ios .headercls {\n  width: 85%;\n  margin: 20px auto 0px;\n}\n.container {\n  width: 85%;\n  margin: 5% auto 5%;\n}\np.cont-p1 {\n  font-size: 25px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 5px auto;\n}\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n.email {\n  margin: 15px 0px 15px 20px;\n}\n.fields {\n  margin: 5% auto 0%;\n}\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n.inputfield {\n  margin: 2% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n.texthead {\n  font-size: 25px;\n  font-weight: 500;\n  color: #000;\n  margin: 5px auto;\n}\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n.alertIcon {\n  width: 13px;\n}\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.file-input::before {\n  content: \"Driver’s License\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input2::before {\n  content: \"National ID Card\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input3::before {\n  content: \"Passport (National/International)\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input4::before {\n  content: \"Utility Bil\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 18px;\n  color: #1A206D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFFRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBRUo7QUFDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQURBO0VBQ0ksWUFBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRUo7QUFBQTtFQUNFLDRCQUFBO0FBR0Y7QUFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURFO0VBRUUsa0JBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0E7RUFHSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7QUFGRjtBQUlBO0VBQ0UsMkJBQUE7QUFERjtBQUdBO0VBQ0ksMEJBQUE7QUFBSjtBQUdBO0VBRUksa0JBQUE7QUFESjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUVFO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKO0FBQUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKO0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0o7QUFIQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU1GO0FBSkE7RUFFRSxXQUFBO0FBTUY7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBT0Y7QUFMQTtFQUNFLGtCQUFBO0FBUUY7QUFOQTtFQUNFLDJCQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBUUo7QUFMQTtFQUNFLDJCQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBT0o7QUFKQTtFQUNFLDRDQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBTUo7QUFIQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBS0o7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0YiLCJmaWxlIjoicHJvZmlsZS11cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmNsc3tcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTVweCBhdXRvIDBweDtcclxufVxyXG4uaW9ze1xyXG4gIC5oZWFkZXJjbHN7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4gIH1cclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG8gNSU7XHJcbn1cclxucC5jb250LXAxIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuLmlucHV0e1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjoxNXB4IGF1dG8gMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XHJcbiAgICAvLyAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOjE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAycHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi5kcm9wYm94e1xyXG4gICAgbWFyZ2luOiA0JSAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG5cclxuICB9XHJcbiAgLmlubmVyZHJvcGJveHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDJweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAyLjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB9XHJcbiAgLmV1cm8tdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICB9XHJcbiAgLmV1cm8tdGV4dDF7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMzFweDtcclxuICB9XHJcbi5pb24tdHh0e1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uaXRlbS1waWNrZXJ7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgLy8gaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xyXG5cclxufVxyXG5cclxuLml0ZW0tbmF0aXZlIHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctZW5kKTtcclxufVxyXG5pbWcucGxjaGxkci1jc3Mge1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTVweDtcclxufVxyXG4uZW1haWx7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMjBweDtcclxufVxyXG4vL25hamFtIHBhc3N3b3JkIGlucHV0IGNzcy8vL1xyXG4uZmllbGRze1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogNSUgYXV0byAwJTtcclxuICB9XHJcbiAgLmlucHV0ZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGhlaWdodDogNDhweDtcclxuICB9XHJcbiAgLnBpbnB1dFxyXG4gIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAucGgtY3Nze1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzY1NjU2NTtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjVweDtcclxuICB9XHJcbiAgLmlucHV0ZmllbGR7XHJcbiAgICBtYXJnaW46IDIlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG4gIC50ZXh0aGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgfVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG5wLmxhc3QtcGFyYSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDEwcHggYXV0byAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuc3Bhbi5zcGFuLXN0YXJ0IHtcclxuICAgIGNvbG9yOiAjMUEwRjU1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5zcGFuLnNwYW4tZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxufVxyXG4udmFsaWRhdGlvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCBhdXRvIDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0SWNvbntcclxuXHJcbiAgd2lkdGg6IDEzcHg7XHJcbn1cclxuLmVycm9yLW1zZ3tcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZDkzMDI1O1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uZmlsZS1pbnB1dDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIkRyaXZlcuKAmXMgTGljZW5zZVwiO1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA3cHggMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcbi5maWxlLWlucHV0Mjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIk5hdGlvbmFsIElEIENhcmRcIjtcclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogN3B4IDJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxufVxyXG4uZmlsZS1pbnB1dDM6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJQYXNzcG9ydCAoTmF0aW9uYWwvSW50ZXJuYXRpb25hbClcIjtcclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogN3B4IDJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxufVxyXG4uZmlsZS1pbnB1dDQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJVdGlsaXR5IEJpbFwiO1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA3cHggMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 44885:
/*!********************************************************************!*\
  !*** ./src/app/profile-update/profile-update.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <div class=\"headercls\">\r\n    <div style=\"width: 100%;\">\r\n      <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n</ion-header> -->\r\n\r\n<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width:100% ;\">\r\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\" style=\"padding-top: 0px\">\r\n        <div class=\"title\">Customer Information Profile</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <!-- <div style=\"text-align:center\">\r\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ;\" alt=\"\">\r\n    </div> -->\r\n\r\n    <!-- <div class=\"title-para\" style=\"text-align: center;\">\r\n      <p class=\"cont-p1\">Customer Information Profile</p>\r\n    </div> -->\r\n\r\n    <form [formGroup]=\"RegisterForm\">\r\n      <!-- <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"uTitle\" class=\"input\" placeholder=\"{{usertitle}}\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('title').hasError('required') && RegisterForm.get('title').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your title</span>\r\n      </div> -->\r\n\r\n      <ion-input type=\"text\" formControlName=\"fname\" [(ngModel)]=\"fName\" class=\"input\" placeholder=\"{{firstName}}\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('fname').hasError('required') && RegisterForm.get('fname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your first name</span>\r\n      </div>\r\n\r\n      <ion-input type=\"text\" formControlName=\"lname\" [(ngModel)]=\"lName\" class=\"input\" placeholder=\"{{lastName}}\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('lname').hasError('required') && RegisterForm.get('lname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your last name</span>\r\n      </div>\r\n\r\n      <ion-input type=\"tel\" formControlName=\"number\" [(ngModel)]=\"mobNumber\" class=\"input\" placeholder=\"{{userNumber}}\">\r\n        <img class=\"plchldr-css\" src=\"assets/images/icons/phone.svg\" alt=\"\" />\r\n      </ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('number').hasError('required') && RegisterForm.get('number').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your mobile number</span>\r\n      </div>\r\n\r\n      <ion-input type=\"email\" formControlName=\"email\" [(ngModel)]=\"userEmail\" class=\"input\" placeholder=\"{{useremail}}\">\r\n        <img class=\"plchldr-css\" src=\"assets/images/icons/email.svg\" alt=\"\" />\r\n      </ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your email</span>\r\n      </div>\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">This is invalid format</span>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input formControlName=\"existpassword\" [(ngModel)]=\"existingpass\" class=\"ph-css\"\r\n              placeholder=\"Existing password \" type=\"{{eshowPass ? 'text':'password' }}\"\r\n              (ionChange)=\"existingpassword($event)\"></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!eshowPass\" (click)=\"EtogglePass()\">\r\n            </ion-icon>\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"eshowPass\" (click)=\"EtogglePass()\">\r\n            </ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input formControlName=\"password\" [(ngModel)]=\"userPassword\" class=\"ph-css\"\r\n              placeholder=\"Enter New password \" type=\"{{showPass ? 'text':'password' }}\"\r\n              (ionChange)=\"currentpassword($event)\"></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\">\r\n            </ion-icon>\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\">\r\n            </ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your new password</span>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input formControlName=\"cpassword\" [(ngModel)]=\"cuserPassword\" class=\"ph-css\"\r\n              placeholder=\"new password \" type=\"{{cshowPass ? 'text':'password' }}\" (ionChange)=\"newpassword($event)\">\r\n            </ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!cshowPass\"\r\n              (click)=\"confirmtogglePass()\"></ion-icon>\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"cshowPass\"\r\n              (click)=\"confirmtogglePass()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('cpassword').hasError('required') && RegisterForm.get('cpassword').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Confirm your new password</span>\r\n      </div>\r\n      <!-- //////////////--------------------------//////////////////////////// -->\r\n      <div class=\"texthead\">KYC Documents</div>\r\n      <div style=\"\r\n          font-size: 16px;\r\n          text-transform: capitalize;\r\n          color: #000;\r\n          font-weight: 600;\r\n        \">\r\n        Proof of ID\r\n      </div>\r\n      <div class=\"inputfield\" style=\"padding: 10px 15px\">\r\n        <!-- <input type=\"file\" (change)=\"selectFile($event,'Id')\" accept=\"image/x-png,image/gif,image/jpeg\"> -->\r\n        <div style=\"\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n          \">\r\n          <div style=\"color: #000\">Choose File</div>\r\n\r\n          <div (click)=\"openlist()\">\r\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\" />\r\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"show==true\">\r\n          <input type=\"file\" (change)=\"selectFile($event,'driverlicense')\" accept=\"image/x-png,image/gif,image/jpeg\"\r\n            class=\"file-input\" value=\"\" title=\" \" />\r\n          <input type=\"file\" (change)=\"selectFile($event,'Idcard')\" accept=\"image/x-png,image/gif,image/jpeg\"\r\n            class=\"file-input2\" value=\"\" title=\" \" />\r\n          <input type=\"file\" (change)=\"selectFile($event,'passport')\" accept=\"image/x-png,image/gif,image/jpeg\"\r\n            class=\"file-input3\" value=\"\" title=\" \" />\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"\r\n          height: 100px;\r\n          width: 100px;\r\n          text-align: center;\r\n          margin-bottom: 4%;\r\n        \" *ngIf=\"base64\">\r\n        <img style=\"height: 100px; width: 100px\" src=\"{{base64}}\" alt=\"\" />\r\n      </div>\r\n\r\n      <div style=\"\r\n          font-size: 16px;\r\n          text-transform: capitalize;\r\n          color: #000;\r\n          font-weight: 600;\r\n        \">\r\n        Proof of Address\r\n      </div>\r\n      <div class=\"inputfield\" style=\"\r\n          display: flex;\r\n          height: 44px;\r\n          align-items: center;\r\n          padding: 0px 15px;\r\n        \">\r\n        <input type=\"file\" (change)=\"selectFile($event,'utilityBills')\" accept=\"image/x-png,image/gif,image/jpeg\"\r\n          class=\"file-input4\" value=\"\" title=\" \" />\r\n      </div>\r\n\r\n      <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"utilityBills.base64\">\r\n        <img style=\"height: 100px; width: 100px\" src=\"{{utilityBills.base64}}\" alt=\"\" />\r\n      </div>\r\n\r\n      <!-- //////////////--------------------------//////////////////////////// -->\r\n      <div style=\"width: 85%; margin: 30px auto 0px\">\r\n        <div style=\"text-align: center\">\r\n          <ion-button type=\"submit\" [disabled]=\"RegisterForm.invalid\" class=\"btn\" (click)=\"updateProfile()\"\r\n            style=\"--background: #a8b400\">Update</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-footer  >\r\n\r\n\r\n\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile-update_profile-update_module_ts.js.map