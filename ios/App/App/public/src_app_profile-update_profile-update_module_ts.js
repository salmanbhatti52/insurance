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

module.exports = "@charset \"UTF-8\";\n.headercls {\n  width: 85%;\n  margin: 15px auto 0px;\n}\n.ios .headercls {\n  width: 85%;\n  margin: 20px auto 0px;\n}\n.container {\n  width: 85%;\n  margin: 5% auto 5%;\n}\np.cont-p1 {\n  font-size: 25px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 5px auto;\n}\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n.email {\n  margin: 15px 0px 15px 20px;\n}\n.fields {\n  margin: 5% auto 0%;\n}\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n.inputfield {\n  margin: 2% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n.texthead {\n  font-size: 25px;\n  font-weight: 500;\n  color: #000;\n  margin: 5px auto;\n}\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n.alertIcon {\n  width: 13px;\n}\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.file-input::before {\n  content: \"Driver’s License\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input2::before {\n  content: \"National ID Card\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input3::before {\n  content: \"Passport (National/International)\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.file-input4::before {\n  content: \"Utility Bil\";\n  display: inline-block;\n  padding: 7px 2px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  text-transform: capitalize;\n}\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 18px;\n  color: #1A206D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXGluc3VyYW5jZVxcc3JjXFxhcHBcXHByb2ZpbGUtdXBkYXRlXFxwcm9maWxlLXVwZGF0ZS5wYWdlLnNjc3MiLCJwcm9maWxlLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FERUY7QUNDRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBREVKO0FDQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0FBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FER0o7QUNEQTtFQUNJLFlBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBREVKO0FDQUE7RUFDRSw0QkFBQTtBREdGO0FDREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FESUo7QUNERTtFQUVFLGtCQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURDSjtBQ0VFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENKO0FDRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENKO0FDRUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0NBO0VBR0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEQUo7QUNLQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0FERkY7QUNJQTtFQUNFLDJCQUFBO0FEREY7QUNHQTtFQUNJLDBCQUFBO0FEQUo7QUNHQTtFQUVJLGtCQUFBO0FEREo7QUNHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEQUo7QUNFRTtFQUVFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEQUo7QUNFRTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRENKO0FDQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBREVKO0FDQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0FFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURFSjtBQ0FBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FER0Y7QUNEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURJSjtBQ0ZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBREtKO0FDSEE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURNRjtBQ0pBO0VBRUUsV0FBQTtBRE1GO0FDSkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBRE9GO0FDTEE7RUFDRSxrQkFBQTtBRFFGO0FDTkE7RUFDRSwyQkFBQTtFQUVBLHFCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBRFFKO0FDTEE7RUFDRSwyQkFBQTtFQUVBLHFCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBRE9KO0FDSkE7RUFDRSw0Q0FBQTtFQUVBLHFCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBRE1KO0FDSEE7RUFDRSxzQkFBQTtFQUVBLHFCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBREtKO0FDQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREdGIiwiZmlsZSI6InByb2ZpbGUtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5oZWFkZXJjbHMge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDE1cHggYXV0byAwcHg7XG59XG5cbi5pb3MgLmhlYWRlcmNscyB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogNSUgYXV0byA1JTtcbn1cblxucC5jb250LXAxIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0E4QjQwMDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmlucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDE1cHggYXV0byAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjojNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjUwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6MTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAycHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5kcm9wYm94IHtcbiAgbWFyZ2luOiA0JSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xufVxuXG4uaW5uZXJkcm9wYm94IHtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ldXJvLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZXVyby10ZXh0MSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uaW9uLXR4dCB7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaXRlbS1waWNrZXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctZW5kKTtcbn1cblxuaW1nLnBsY2hsZHItY3NzIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxNXB4O1xufVxuXG4uZW1haWwge1xuICBtYXJnaW46IDE1cHggMHB4IDE1cHggMjBweDtcbn1cblxuLmZpZWxkcyB7XG4gIG1hcmdpbjogNSUgYXV0byAwJTtcbn1cblxuLmlucHV0ZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4ucGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xufVxuXG4ucGgtY3NzIHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzY1NjU2NTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xufVxuXG4uaW5wdXRmaWVsZCB7XG4gIG1hcmdpbjogMiUgMCU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi50ZXh0aGVhZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5idG4ge1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbnAubGFzdC1wYXJhIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5zcGFuLnNwYW4tc3RhcnQge1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuLnNwYW4tZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0E4QjQwMDtcbn1cblxuLnZhbGlkYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHggYXV0byA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGVydEljb24ge1xuICB3aWR0aDogMTNweDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNkOTMwMjU7XG59XG5cbi5jdXN0b20tZmlsZS1pbnB1dDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5maWxlLWlucHV0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIkRyaXZlcuKAmXMgTGljZW5zZVwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDdweCAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmZpbGUtaW5wdXQyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIk5hdGlvbmFsIElEIENhcmRcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA3cHggMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5maWxlLWlucHV0Mzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJQYXNzcG9ydCAoTmF0aW9uYWwvSW50ZXJuYXRpb25hbClcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA3cHggMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5maWxlLWlucHV0NDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJVdGlsaXR5IEJpbFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDdweCAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIuaGVhZGVyY2xze1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMHB4O1xyXG59XHJcbi5pb3N7XHJcbiAgLmhlYWRlcmNsc3tcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogNSUgYXV0byA1JTtcclxufVxyXG5wLmNvbnQtcDEge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG4uaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOjE1cHggYXV0byAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcclxuICAgIC8vIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTpcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6MTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmRyb3Bib3h7XHJcbiAgICBtYXJnaW46IDQlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcblxyXG4gIH1cclxuICAuaW5uZXJkcm9wYm94e1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIuOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0MXtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG4gIH1cclxuLmlvbi10eHR7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pdGVtLXBpY2tlcntcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XHJcblxyXG59XHJcblxyXG4uaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG59XHJcbmltZy5wbGNobGRyLWNzcyB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxNXB4O1xyXG59XHJcbi5lbWFpbHtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAyMHB4O1xyXG59XHJcbi8vbmFqYW0gcGFzc3dvcmQgaW5wdXQgY3NzLy8vXHJcbi5maWVsZHN7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDAlO1xyXG4gIH1cclxuICAuaW5wdXRkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICAucGlucHV0XHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5waC1jc3N7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjU2NTY1O1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xyXG4gIH1cclxuICAuaW5wdXRmaWVsZHtcclxuICAgIG1hcmdpbjogMiUgMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbiAgLnRleHRoZWFke1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbnAubGFzdC1wYXJhIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5zcGFuLnNwYW4tc3RhcnQge1xyXG4gICAgY29sb3I6ICMxQTBGNTU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbnNwYW4uc3Bhbi1lbmQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG59XHJcbi52YWxpZGF0aW9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4IGF1dG8gNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWxlcnRJY29ue1xyXG5cclxuICB3aWR0aDogMTNweDtcclxufVxyXG4uZXJyb3ItbXNne1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNkOTMwMjU7XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5maWxlLWlucHV0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiRHJpdmVy4oCZcyBMaWNlbnNlXCI7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDdweCAycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbn1cclxuLmZpbGUtaW5wdXQyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiTmF0aW9uYWwgSUQgQ2FyZFwiO1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA3cHggMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcbi5maWxlLWlucHV0Mzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlBhc3Nwb3J0IChOYXRpb25hbC9JbnRlcm5hdGlvbmFsKVwiO1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA3cHggMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcbi5maWxlLWlucHV0NDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlV0aWxpdHkgQmlsXCI7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDdweCAycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbn1cclxuXHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */";

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