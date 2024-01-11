"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-up-screen_sign-up-screen_module_ts"],{

/***/ 14291:
/*!*****************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpScreenPageRoutingModule": () => (/* binding */ SignUpScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sign_up_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-screen.page */ 46964);




const routes = [
    {
        path: '',
        component: _sign_up_screen_page__WEBPACK_IMPORTED_MODULE_0__.SignUpScreenPage
    }
];
let SignUpScreenPageRoutingModule = class SignUpScreenPageRoutingModule {
};
SignUpScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpScreenPageRoutingModule);



/***/ }),

/***/ 58067:
/*!*********************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpScreenPageModule": () => (/* binding */ SignUpScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sign_up_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-screen-routing.module */ 14291);
/* harmony import */ var _sign_up_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-screen.page */ 46964);







let SignUpScreenPageModule = class SignUpScreenPageModule {
};
SignUpScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpScreenPageRoutingModule
        ],
        declarations: [_sign_up_screen_page__WEBPACK_IMPORTED_MODULE_1__.SignUpScreenPage]
    })
], SignUpScreenPageModule);



/***/ }),

/***/ 46964:
/*!*******************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpScreenPage": () => (/* binding */ SignUpScreenPage)
/* harmony export */ });
/* harmony import */ var _Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sign_up_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-screen.page.html?ngResource */ 78882);
/* harmony import */ var _sign_up_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up-screen.page.scss?ngResource */ 20634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../termsandcondition/termsandcondition.page */ 75713);












let SignUpScreenPage = class SignUpScreenPage {
  constructor(router, api, location, modal, menuCtrl) {
    this.router = router;
    this.api = api;
    this.location = location;
    this.modal = modal;
    this.menuCtrl = menuCtrl;
    this.uTitle = '';
    this.fName = '';
    this.lName = '';
    this.dob = '';
    this.mobNumber = '';
    this.uEmail = '';
    this.userPassword = '';
    this.cuserPassword = '';
    this.show = false;
    this.Title = 'Select Title';
    this.listarray = [{
      Title: 'Mr'
    }, {
      Title: 'Miss'
    }, {
      Title: 'Mrs.'
    }];
    this.showPicker = false;
    this.dateformat = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
    this.dateValue = 'Date of birth';
    this.dateofbirth = ''; // formattedString = '';

    this.showPass = false;
    this.cshowPass = false;
    this.checkbox = false; // this.setToday();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    // ^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*?&#])[A-Za-z\\d^a-zA-Z0-9].{5,50}$
    this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*?&#-])[A-Za-z\\d^a-zA-Z0-9].{5,50}')]),
      cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    console.log(this.dateValue); // console.log(this.formattedString);

    this.RegisterForm.reset();
  } // setToday(){
  //   this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') ), ' MMM d, yyyy');
  // }


  togglePass() {
    this.showPass = !this.showPass;
  }

  confirmtogglePass() {
    this.cshowPass = !this.cshowPass;
  }

  dateChanged(value) {
    this.dateofbirth = value;
    console.log('date value', this.dateValue); // this.formattedString = format(parseISO(value), ' MMM d, yyyy')

    this.showPicker = false;
  }

  openlist() {
    console.log('show value====', this.show);

    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  selectTitle(list) {
    this.uTitle = list.Title;
    this.show = false;
  }

  signUp() {
    // let myData = "myData={\r\n    \"email\": \""+this.userEmail+"\",\r\n    \"password\": \""+this.userPassword+"\",\r\n    \"method\": \"login\"\r\n}";
    const myData = 'myData={\r\n    "title":"' + this.uTitle + '",\r\n    "first_name": "' + this.fName + '",\r\n    "last_name":"' + this.lName + '",\r\n    "date_of_birth":"' + this.dateValue + '",\r\n    "mobile":"' + this.mobNumber + '",\r\n    "email":"' + this.uEmail + '",\r\n    "password":"' + this.userPassword + '",\r\n    "conf_password":"' + this.cuserPassword + '",\r\n    "method": "save_user" \r\n}';

    if (this.userPassword != this.cuserPassword) {
      this.api.presenttoast('"Password" and "Confirm_password" not matched!');
    } else if (this.checkbox == false) {
      this.api.presenttoast('Accept terms and condition');
    } else {
      this.api.insertData(myData).subscribe(res => {
        console.log('res==', res);

        if (res.message === 'Email address already exist') {
          // this.api.presenttoast(res.message);
          this.api.alertboxshow(res.message);
        } else {
          this.api.presenttoast(res.message);
          localStorage.setItem('loginas', 'user');
          this.api.loginas = 'user';
          this.router.navigate(['/sign-in-screen']);
        }
      }, err => {
        console.log('err==', err); // this.api.presenttoast(err);

        this.api.alertboxshow(err);
      });
    }
  }

  verifyEvent(ev) {
    console.log(ev.detail);
    this.checkbox = ev.detail.checked;
  }

  signInPage() {
    this.router.navigate(['/sign-in-screen']);
  }

  goBack() {
    this.location.back();
  }

  showPickerDate() {
    this.showPicker = true;
  }

  check() {
    var _this = this;

    return (0,_Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modal.create({
        component: _termsandcondition_termsandcondition_page__WEBPACK_IMPORTED_MODULE_4__.TermsandconditionPage,
        cssClass: 'terms'
      });
      modal.present();
    })();
  }

};

SignUpScreenPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController
}];

SignUpScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-sign-up-screen',
  template: _sign_up_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_sign_up_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignUpScreenPage);


/***/ }),

/***/ 20634:
/*!********************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 85%;\n  margin: 0% auto;\n}\n\np.cont-p1 {\n  font-size: 22px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 0px;\n}\n\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\n\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n\n.email {\n  margin: 15px 0px 15px 20px;\n}\n\n.fields {\n  margin: 5% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\n\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\n\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n\n.flex-c {\n  display: flex;\n  align-items: center;\n  margin-top: 6%;\n}\n\n.lbl {\n  margin-left: 3%;\n  font-size: 15.5px;\n  color: #000;\n}\n\n.check {\n  --background: #fff;\n  --background-checked: #fff;\n  --checkmark-color: #A8B400;\n  --border-color-checked: #A8B400;\n  --size: 17px;\n  --border-color: #A8B400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDRSw0QkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNFLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFFRSxrQkFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7QUFDSjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBR0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQUZGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBR0E7RUFFSSxrQkFBQTtBQURKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTtFQUVFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBRUUsV0FBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBUUYiLCJmaWxlIjoic2lnbi11cC1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46MCUgYXV0bztcbn1cbnAuY29udC1wMSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgbWFyZ2luOjBweDtcbn1cbi5pbnB1dHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46MTVweCBhdXRvIDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcbiAgICAvLyAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDo1MDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6MTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMnB4O1xufVxuaW9uLWlucHV0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cbi5kcm9wYm94MXtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcblxufVxuLmlubmVyYm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLmJveGlucHV0e1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcbn1cbi5kcm9wYm94e1xuICAgIG1hcmdpbjogNCUgMCU7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcblxuICB9XG4gIC5pbm5lcmRyb3Bib3h7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIC8vIHBhZGRpbmctdG9wOiAycHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIuOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgfVxuICAuZXVyby10ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcblxuICB9XG4gIC5ldXJvLXRleHQxe1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDIwcHg7XG5cbiAgfVxuLmlvbi10eHR7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6YmxhY2s7XG4gIH1cbi5pdGVtLXBpY2tlcntcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIC8vIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XG5cbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nLWVuZCk7XG59XG5pbWcucGxjaGxkci1jc3Mge1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDE1cHg7XG59XG4uZW1haWx7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDIwcHg7XG59XG4vL25hamFtIHBhc3N3b3JkIGlucHV0IGNzcy8vL1xuLmZpZWxkc3tcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogNSUgYXV0byAwJTtcbiAgfVxuICAuaW5wdXRkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgLnBpbnB1dFxuICB7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgfVxuICAucGgtY3Nze1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM2NTY1NjU7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xuICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLmJ0biB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cbnAubGFzdC1wYXJhIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuc3Bhbi5zcGFuLXN0YXJ0IHtcbiAgICBjb2xvcjogIzFBMEY1NTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbnNwYW4uc3Bhbi1lbmQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xufVxuLnZhbGlkYXRpb257XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweCBhdXRvIDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGVydEljb257XG5cbiAgd2lkdGg6IDEzcHg7XG59XG4uZXJyb3ItbXNne1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2Q5MzAyNTtcbn1cbi5mbGV4LWN7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBtYXJnaW4tdG9wOjYlO1xufVxuLmxibHtcbiAgbWFyZ2luLWxlZnQ6MyU7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5jaGVja3tcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcbiAgLS1jaGVja21hcmstY29sb3I6ICNBOEI0MDA7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNBOEI0MDA7XG4gIC0tc2l6ZTogMTdweDtcbiAgLS1ib3JkZXItY29sb3I6ICNBOEI0MDA7XG59XG4iXX0= */";

/***/ }),

/***/ 78882:
/*!********************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width: 100%\">\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\" />\n        </div>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <!-- <div class=\"title\">Contact Us</div> -->\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <!-- <img (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\" /> -->\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"title-para\" style=\"text-align: center; margin-bottom: 20px\">\n      <!-- <p class=\"cont-p1\">Hi there <br> -->\n      <p class=\"cont-p1\"><span>Create an account to get started</span></p>\n\n    </div>\n    <form [formGroup]=\"RegisterForm\" style=\"margin-top: 11px\">\n      <div class=\"dropbox1\">\n        <div class=\"innerbox\">\n          <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"uTitle\" class=\"boxinput\" placeholder=\"Title\"\n            (click)=\"openlist()\"><img class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\n          <div class=\"imgdiv\" (click)=\"openlist()\">\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\" />\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\" />\n          </div>\n        </div>\n        <div *ngIf=\"show==true\">\n          <div *ngFor=\"let list of listarray\" (click)=\"selectTitle(list)\">\n            <div class=\"euro-text1\">{{list.Title}}</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('title').hasError('required') && RegisterForm.get('title').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your title</span>\n      </div>\n\n      <ion-input type=\"text\" formControlName=\"fname\" [(ngModel)]=\"fName\" class=\"input\" placeholder=\"First Name\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('fname').hasError('required') && RegisterForm.get('fname').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your first name</span>\n      </div>\n\n      <ion-input type=\"text\" formControlName=\"lname\" [(ngModel)]=\"lName\" class=\"input\" placeholder=\"Last Name\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('lname').hasError('required') && RegisterForm.get('lname').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your last name</span>\n      </div>\n\n      <ion-input type=\"text\" formControlName=\"date\" [(ngModel)]=\"dateofbirth\" class=\"input\" placeholder=\"YYYY-MM-DD\"\n        (click)=\"showPicker = !showPicker\">\n        <img class=\"plchldr-css\" src=\"assets/images/icons/calendar.svg\" alt=\"\" />\n      </ion-input>\n\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('date').hasError('required') && RegisterForm.get('date').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your date of birth</span>\n      </div>\n      <!-- <div class=\"item-picker\" style=\"margin: 15px auto 0px; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\n        (click)=\"showPicker = !showPicker\">\n        <div style=\"display: flex; align-items:center\">\n          <img class=\"cal-css\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\n          <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dateValue }}</ion-text>\n        </div>\n\n      </div> -->\n      <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 0px; color: black\" presentation=\"date\"\n        *ngIf=\"showPicker\" #datetime [value]=\"dateformat\" size=\"cover\" (ionChange)=\"dateChanged(datetime.value)\"\n        showDefaultButtons=\"true\" (ionCancel)=\"showPicker=false\"></ion-datetime>\n\n      <ion-input formControlName=\"number\" [(ngModel)]=\"mobNumber\" type=\"tel\" class=\"input\" placeholder=\"Phone\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/phone.svg\" alt=\"\" /></ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('number').hasError('required') && RegisterForm.get('number').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your mobile number</span>\n      </div>\n\n      <ion-input formControlName=\"email\" [(ngModel)]=\"uEmail\" type=\"email\" class=\"input\" placeholder=\"Email\"><img\n          class=\"plchldr-css\" src=\"assets/images/icons/email.svg\" alt=\"\" />\n      </ion-input>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your email</span>\n      </div>\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">This is invalid format</span>\n      </div>\n\n      <div class=\"fields\">\n        <div class=\"inputdiv\">\n          <div>\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\n          </div>\n          <div class=\"pinput\">\n            <ion-input class=\"ph-css\" formControlName=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Password\"\n              type=\"{{showPass ? 'text':'password' }}\"></ion-input>\n          </div>\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\">\n            </ion-icon>\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\">\n            </ion-icon>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Enter your password</span>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('password').hasError('pattern') && RegisterForm.get('password').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Password should be no less than 8 characters with Capital letter, Number and special\n          character</span><br />\n        <!-- <span class=\"error-msg\">Lowercase letters</span><br>\n        <span class=\"error-msg\">Uppercase letters</span><br>\n        <span class=\"error-msg\">Numbers</span> -->\n      </div>\n\n      <div class=\"fields\">\n        <div class=\"inputdiv\">\n          <div>\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\n          </div>\n          <div class=\"pinput\">\n            <ion-input class=\"ph-css\" formControlName=\"cpassword\" [(ngModel)]=\"cuserPassword\"\n              placeholder=\"Confirm Password\" type=\"{{cshowPass ? 'text':'password' }}\"></ion-input>\n          </div>\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!cshowPass\"\n              (click)=\"confirmtogglePass()\"></ion-icon>\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"cshowPass\"\n              (click)=\"confirmtogglePass()\"></ion-icon>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('cpassword').hasError('required') && RegisterForm.get('cpassword').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Confirm your password</span>\n      </div>\n\n      <div class=\"flex-c\">\n        <ion-checkbox mode=\"md\" class=\"check\" (ionChange)=\"verifyEvent($event)\" formControlName=\"terms\">\n        </ion-checkbox>\n        <span class=\"lbl\" (click)=\"check()\">I agree to the Terms and Conditions</span>\n      </div>\n\n      <div class=\"validation\"\n        *ngIf=\"RegisterForm.get('terms').hasError('required') && RegisterForm.get('terms').touched\">\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n        <span class=\"error-msg\">Accept terms and condition</span>\n      </div>\n      <div style=\"text-align: center; padding-bottom: 5px; margin: 20px auto 0px\">\n        <ion-button class=\"btn\" [disabled]=\"RegisterForm.invalid\" (click)=\"signUp()\" style=\"--background: #a8b400\">\n          Register</ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div style=\"width: 85%; margin: 20px auto 15px\">\n    <p class=\"last-para\">\n      <span class=\"span-start\">Already have an account? </span>\n      <span (click)=\"signInPage()\" class=\"span-end\">Sign In</span>\n    </p>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up-screen_sign-up-screen_module_ts.js.map