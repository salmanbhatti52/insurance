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
/* harmony import */ var D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = ".container {\n  width: 85%;\n  margin: 0% auto;\n}\n\np.cont-p1 {\n  font-size: 22px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 0px;\n}\n\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\n\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n\n.email {\n  margin: 15px 0px 15px 20px;\n}\n\n.fields {\n  margin: 5% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\n\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\n\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n\n.flex-c {\n  display: flex;\n  align-items: center;\n  margin-top: 6%;\n}\n\n.lbl {\n  margin-left: 3%;\n  font-size: 15.5px;\n  color: #000;\n}\n\n.check {\n  --background: #fff;\n  --background-checked: #fff;\n  --checkmark-color: #A8B400;\n  --border-color-checked: #A8B400;\n  --size: 17px;\n  --border-color: #A8B400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtc2NyZWVuLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXGluc3VyYW5jZVxcc3JjXFxhcHBcXHNpZ24tdXAtc2NyZWVuXFxzaWduLXVwLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENBO0VBQ0UsNEJBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDRSxvQkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREZFO0VBRUUsa0JBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLDBCQUFBO0FDQ0o7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUdJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7QUNGRjs7QURJQTtFQUNFLDJCQUFBO0FDREY7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREdBO0VBRUksa0JBQUE7QUNESjs7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFFRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREVBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURGQTtFQUVFLFdBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ1FGIiwiZmlsZSI6InNpZ24tdXAtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjowJSBhdXRvO1xyXG59XHJcbnAuY29udC1wMSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbiAgICBtYXJnaW46MHB4O1xyXG59XHJcbi5pbnB1dHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46MTVweCBhdXRvIDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNUQ1RDVEO1xyXG4gICAgLy8gLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOlxyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDo1MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZToxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMnB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4uZHJvcGJveDF7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG5cclxufVxyXG4uaW5uZXJib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuLmJveGlucHV0e1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAycHg7XHJcbn1cclxuLmRyb3Bib3h7XHJcbiAgICBtYXJnaW46IDQlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcblxyXG4gIH1cclxuICAuaW5uZXJkcm9wYm94e1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIuOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0MXtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMjBweDtcclxuXHJcbiAgfVxyXG4uaW9uLXR4dHtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuLml0ZW0tcGlja2Vye1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIC8vIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDBweCAxNnB4IDBweDtcclxuXHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nLWVuZCk7XHJcbn1cclxuaW1nLnBsY2hsZHItY3NzIHtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDE1cHg7XHJcbn1cclxuLmVtYWlse1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDIwcHg7XHJcbn1cclxuLy9uYWphbSBwYXNzd29yZCBpbnB1dCBjc3MvLy9cclxuLmZpZWxkc3tcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG8gMCU7XHJcbiAgfVxyXG4gIC5pbnB1dGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG4gIC5waW5wdXRcclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICB9XHJcbiAgLnBoLWNzc3tcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM2NTY1NjU7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGFkZGluZy1zdGFydDo1cHg7XHJcbiAgfVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG5wLmxhc3QtcGFyYSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDEwcHggYXV0byAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuc3Bhbi5zcGFuLXN0YXJ0IHtcclxuICAgIGNvbG9yOiAjMUEwRjU1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5zcGFuLnNwYW4tZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxufVxyXG4udmFsaWRhdGlvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCBhdXRvIDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0SWNvbntcclxuXHJcbiAgd2lkdGg6IDEzcHg7XHJcbn1cclxuLmVycm9yLW1zZ3tcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZDkzMDI1O1xyXG59XHJcbi5mbGV4LWN7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjYlO1xyXG59XHJcbi5sYmx7XHJcbiAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgZm9udC1zaXplOiAxNS41cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmNoZWNre1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcclxuICAtLWNoZWNrbWFyay1jb2xvcjogI0E4QjQwMDtcclxuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjQThCNDAwO1xyXG4gIC0tc2l6ZTogMTdweDtcclxuICAtLWJvcmRlci1jb2xvcjogI0E4QjQwMDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvO1xufVxuXG5wLmNvbnQtcDEge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDE1cHggYXV0byAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjojNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjUwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6MTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAycHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5kcm9wYm94MSB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG59XG5cbi5pbm5lcmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5ib3hpbnB1dCB7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcbn1cblxuLmRyb3Bib3gge1xuICBtYXJnaW46IDQlIDAlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG59XG5cbi5pbm5lcmRyb3Bib3gge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmV1cm8tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5ldXJvLXRleHQxIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDIwcHg7XG59XG5cbi5pb24tdHh0IHtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pdGVtLXBpY2tlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpO1xufVxuXG5pbWcucGxjaGxkci1jc3Mge1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDE1cHg7XG59XG5cbi5lbWFpbCB7XG4gIG1hcmdpbjogMTVweCAwcHggMTVweCAyMHB4O1xufVxuXG4uZmllbGRzIHtcbiAgbWFyZ2luOiA1JSBhdXRvIDAlO1xufVxuXG4uaW5wdXRkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5waW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG59XG5cbi5waC1jc3Mge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjU2NTY1O1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGFkZGluZy1zdGFydDo1cHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbnAubGFzdC1wYXJhIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5zcGFuLnNwYW4tc3RhcnQge1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuLnNwYW4tZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0E4QjQwMDtcbn1cblxuLnZhbGlkYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHggYXV0byA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGVydEljb24ge1xuICB3aWR0aDogMTNweDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNkOTMwMjU7XG59XG5cbi5mbGV4LWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2JTtcbn1cblxuLmxibCB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgZm9udC1zaXplOiAxNS41cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY2hlY2sge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogI0E4QjQwMDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0E4QjQwMDtcbiAgLS1zaXplOiAxN3B4O1xuICAtLWJvcmRlci1jb2xvcjogI0E4QjQwMDtcbn0iXX0= */";

/***/ }),

/***/ 78882:
/*!********************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width: 100%\">\r\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\" />\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <!-- <div class=\"title\">Contact Us</div> -->\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <!-- <img (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\" /> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"title-para\" style=\"text-align: center; margin-bottom: 20px\">\r\n      <!-- <p class=\"cont-p1\">Hi there <br> -->\r\n      <p class=\"cont-p1\"><span>Create an account to get started</span></p>\r\n\r\n    </div>\r\n    <form [formGroup]=\"RegisterForm\" style=\"margin-top: 11px\">\r\n      <div class=\"dropbox1\">\r\n        <div class=\"innerbox\">\r\n          <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"uTitle\" class=\"boxinput\" placeholder=\"Title\"\r\n            (click)=\"openlist()\"><img class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\r\n          <div class=\"imgdiv\" (click)=\"openlist()\">\r\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\" />\r\n            <img style=\"height: 11px; width: 11px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectTitle(list)\">\r\n            <div class=\"euro-text1\">{{list.Title}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('title').hasError('required') && RegisterForm.get('title').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your title</span>\r\n      </div>\r\n\r\n      <ion-input type=\"text\" formControlName=\"fname\" [(ngModel)]=\"fName\" class=\"input\" placeholder=\"First Name\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('fname').hasError('required') && RegisterForm.get('fname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your first name</span>\r\n      </div>\r\n\r\n      <ion-input type=\"text\" formControlName=\"lname\" [(ngModel)]=\"lName\" class=\"input\" placeholder=\"Last Name\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\" /></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('lname').hasError('required') && RegisterForm.get('lname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your last name</span>\r\n      </div>\r\n\r\n      <ion-input type=\"text\" formControlName=\"date\" [(ngModel)]=\"dateofbirth\" class=\"input\" placeholder=\"YYYY-MM-DD\"\r\n        (click)=\"showPicker = !showPicker\">\r\n        <img class=\"plchldr-css\" src=\"assets/images/icons/calendar.svg\" alt=\"\" />\r\n      </ion-input>\r\n\r\n      <div class=\"validation\" *ngIf=\"RegisterForm.get('date').hasError('required') && RegisterForm.get('date').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your date of birth</span>\r\n      </div>\r\n      <!-- <div class=\"item-picker\" style=\"margin: 15px auto 0px; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\r\n        (click)=\"showPicker = !showPicker\">\r\n        <div style=\"display: flex; align-items:center\">\r\n          <img class=\"cal-css\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\r\n          <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dateValue }}</ion-text>\r\n        </div>\r\n\r\n      </div> -->\r\n      <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 0px; color: black\" presentation=\"date\"\r\n        *ngIf=\"showPicker\" #datetime [value]=\"dateformat\" size=\"cover\" (ionChange)=\"dateChanged(datetime.value)\"\r\n        showDefaultButtons=\"true\" (ionCancel)=\"showPicker=false\"></ion-datetime>\r\n\r\n      <ion-input formControlName=\"number\" [(ngModel)]=\"mobNumber\" type=\"tel\" class=\"input\" placeholder=\"Phone\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/phone.svg\" alt=\"\" /></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('number').hasError('required') && RegisterForm.get('number').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your mobile number</span>\r\n      </div>\r\n\r\n      <ion-input formControlName=\"email\" [(ngModel)]=\"uEmail\" type=\"email\" class=\"input\" placeholder=\"Email\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/email.svg\" alt=\"\" />\r\n      </ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your email</span>\r\n      </div>\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">This is invalid format</span>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input class=\"ph-css\" formControlName=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Password\"\r\n              type=\"{{showPass ? 'text':'password' }}\"></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\">\r\n            </ion-icon>\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\">\r\n            </ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Enter your password</span>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('password').hasError('pattern') && RegisterForm.get('password').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Password should be no less than 8 characters with Capital letter, Number and special\r\n          character</span><br />\r\n        <!-- <span class=\"error-msg\">Lowercase letters</span><br>\r\n        <span class=\"error-msg\">Uppercase letters</span><br>\r\n        <span class=\"error-msg\">Numbers</span> -->\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin: 15px 10px 13px 15px\" src=\"assets/images/pw-lock.svg\" />\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input class=\"ph-css\" formControlName=\"cpassword\" [(ngModel)]=\"cuserPassword\"\r\n              placeholder=\"Confirm Password\" type=\"{{cshowPass ? 'text':'password' }}\"></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye\" *ngIf=\"!cshowPass\"\r\n              (click)=\"confirmtogglePass()\"></ion-icon>\r\n            <ion-icon style=\"color: black; margin-right: 15px\" name=\"eye-off\" *ngIf=\"cshowPass\"\r\n              (click)=\"confirmtogglePass()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('cpassword').hasError('required') && RegisterForm.get('cpassword').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Confirm your password</span>\r\n      </div>\r\n\r\n      <div class=\"flex-c\">\r\n        <ion-checkbox mode=\"md\" class=\"check\" (ionChange)=\"verifyEvent($event)\" formControlName=\"terms\">\r\n        </ion-checkbox>\r\n        <span class=\"lbl\" (click)=\"check()\">I agree to the Terms and Conditions</span>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('terms').hasError('required') && RegisterForm.get('terms').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n        <span class=\"error-msg\">Accept terms and condition</span>\r\n      </div>\r\n      <div style=\"text-align: center; padding-bottom: 5px; margin: 20px auto 0px\">\r\n        <ion-button class=\"btn\" [disabled]=\"RegisterForm.invalid\" (click)=\"signUp()\" style=\"--background: #a8b400\">\r\n          Register</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"width: 85%; margin: 20px auto 15px\">\r\n    <p class=\"last-para\">\r\n      <span class=\"span-start\">Already have an account? </span>\r\n      <span (click)=\"signInPage()\" class=\"span-end\">Sign In</span>\r\n    </p>\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up-screen_sign-up-screen_module_ts.js.map