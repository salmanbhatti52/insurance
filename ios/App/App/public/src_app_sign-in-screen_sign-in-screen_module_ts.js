"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-in-screen_sign-in-screen_module_ts"],{

/***/ 45573:
/*!*****************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreenPageRoutingModule": () => (/* binding */ SignInScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sign_in_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-screen.page */ 10870);




const routes = [
    {
        path: '',
        component: _sign_in_screen_page__WEBPACK_IMPORTED_MODULE_0__.SignInScreenPage
    }
];
let SignInScreenPageRoutingModule = class SignInScreenPageRoutingModule {
};
SignInScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignInScreenPageRoutingModule);



/***/ }),

/***/ 70174:
/*!*********************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreenPageModule": () => (/* binding */ SignInScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sign_in_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-screen-routing.module */ 45573);
/* harmony import */ var _sign_in_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in-screen.page */ 10870);







let SignInScreenPageModule = class SignInScreenPageModule {
};
SignInScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_in_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInScreenPageRoutingModule
        ],
        declarations: [_sign_in_screen_page__WEBPACK_IMPORTED_MODULE_1__.SignInScreenPage]
    })
], SignInScreenPageModule);



/***/ }),

/***/ 10870:
/*!*******************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreenPage": () => (/* binding */ SignInScreenPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sign_in_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in-screen.page.html?ngResource */ 14078);
/* harmony import */ var _sign_in_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in-screen.page.scss?ngResource */ 51886);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);




/* eslint-disable @typescript-eslint/semi */

/* eslint-disable prefer-const */

/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */








let SignInScreenPage = class SignInScreenPage {
  constructor(router, modal, menuCtrl, alert, api, faio, location, navCtrl) {
    this.router = router;
    this.modal = modal;
    this.menuCtrl = menuCtrl;
    this.alert = alert;
    this.api = api;
    this.faio = faio;
    this.location = location;
    this.navCtrl = navCtrl;
    this.userEmail = '';
    this.userPassword = '';
    this.showPass = false;
    this.fingerprintlogo = false;
    this.error = false;
  }

  ngOnInit() {
    this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false); // this.RegisterForm.reset();

    if (localStorage.getItem('fingerprint') == 'true') {
      this.fingerprintlogo = true;
    } else {
      this.fingerprintlogo = false;
    }

    this.getuserEmail = localStorage.getItem('email');
    this.getuserPassword = localStorage.getItem('password');
    console.log('email', localStorage.getItem('email'));
    console.log('password', localStorage.getItem('password'));
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  formSubmit() {
    console.log('Form Submitted!');
  }

  togglePass() {
    this.showPass = !this.showPass;
  }

  signIn() {
    this.api.showLoader();
    let myData = 'myData={\r\n    "email": "' + this.userEmail + '",\r\n    "password": "' + this.userPassword + '",\r\n    "method": "login"\r\n}';
    this.api.insertData(myData).subscribe(res => {
      console.log('res==', res);

      if (res.email) {
        this.api.hideLoader();
        this.api.presenttoast('Welcome!');
        localStorage.setItem('userid', res.user_id);
        localStorage.setItem('token', res.token);
        localStorage.setItem('title', res.title);
        localStorage.setItem('fname', res.first_name);
        localStorage.setItem('lname', res.last_name);
        localStorage.setItem('number', res.phone);
        localStorage.setItem('email', res.email);
        localStorage.setItem('password', this.userPassword);
        this.api.username = res.first_name;
        console.log(localStorage.getItem('userid'));
        console.log(localStorage.getItem('token'));
        localStorage.setItem('loginas', 'user');
        this.api.loginas = 'user'; // this.router.navigate(['/home-page-screen-after-login']);

        this.navCtrl.navigateRoot(['/home-page-screen-after-login']);
      } else {
        this.api.hideLoader();
        this.api.presenttoast('Email or password is incorrect'); // this.error = true
        // this.errormessage = 'Email or password is incorrect'
        // setTimeout(() => {
        //   this.error = false
        // }, 3000);
      }
    }, err => {
      console.log('err==', err);
      this.api.hideLoader();
      this.api.presenttoast(err);
    });
  }

  fflogin() {
    var _this = this;

    return (0,_Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.faio.isAvailable().then(() => {
        _this.faio.show({
          cancelButtonTitle: 'Cancel',
          description: 'Some biometric description',
          disableBackup: true,
          // title: 'Scanner Title',
          fallbackButtonTitle: 'FB Back Button' // subtitle: 'This SubTitle'

        }).then(result => {
          console.log(result);
          let myData = 'myData={\r\n    "email": "' + _this.getuserEmail + '",\r\n    "password": "' + _this.getuserPassword + '",\r\n    "method": "login"\r\n}';

          _this.api.insertData(myData).subscribe(res => {
            console.log('res==', res);

            if (res.email) {
              _this.api.presenttoast('Welcome!');

              localStorage.setItem('userid', res.user_id);
              localStorage.setItem('token', res.token);
              localStorage.setItem('title', res.title);
              localStorage.setItem('fname', res.first_name);
              localStorage.setItem('lname', res.last_name);
              localStorage.setItem('number', res.phone);
              localStorage.setItem('email', res.email);
              localStorage.setItem('password', _this.getuserPassword);
              console.log(localStorage.getItem('userid'));
              console.log(localStorage.getItem('token'));
              localStorage.setItem('loginas', 'user'); // this.router.navigate(['/home-page-screen-after-login']);

              _this.navCtrl.navigateRoot(['/home-page-screen-after-login']);
            } else {
              _this.api.presenttoast(res.message);
            }
          }, err => {
            console.log('err==', err);

            _this.api.presenttoast(err);
          });
        }, err => {
          _this.api.presenttoast(JSON.stringify(err));
        });
      }, err => {
        _this.api.presenttoast('finger print no avaibale---' + err);
      });
    })();
  }

  exScBefLin() {
    this.router.navigate(['/explore-screen-before-login-expanded2']);
  }

  PopupCust() {
    var _this2 = this;

    return (0,_Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.router.navigate(['/agentidpopup']); // const modal = await this.modal.create({
      //   component: AgentidpopupPage,
      //   cssClass: 'AgentPopupclass',
      // });
      // return await modal.present();

    })();
  }

  signUpPage() {
    this.router.navigate(['/sign-up-screen']);
  }

  goback() {
    this.location.back();
  }

  forgot() {
    this.router.navigate(['/forgotpassword']);
  }

};

SignInScreenPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__.FingerprintAIO
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}];

SignInScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-sign-in-screen',
  template: _sign_in_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_sign_in_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignInScreenPage);


/***/ }),

/***/ 51886:
/*!********************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 28px;\n}\n\n.container {\n  width: 75%;\n  margin: 0px auto 0px;\n}\n\n.input-div {\n  margin-top: 26px;\n}\n\n@font-face {\n  font-family: Bliss Pro;\n  src: url(\"/assets/BlissPro-Medium/BlissPro-Medium.ttf\");\n}\n\np.sign-in-para {\n  font-size: 24px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n  text-align: center;\n}\n\n.input {\n  height: 44px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 15px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 5px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.row-div {\n  display: flex;\n  width: 100%;\n  margin: 22px auto 0px;\n  align-items: center;\n}\n\n.radio {\n  height: 16px;\n  width: 16px;\n  --color: #A8B400;\n  --color-checked:#A8B400;\n}\n\n.bull-div {\n  width: 100%;\n  align-items: center;\n}\n\n.para-div {\n  width: 100%;\n  text-align: end;\n}\n\n.para {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.btn {\n  width: 100%;\n  height: 48px;\n  margin-top: 24px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\nspan.p-span {\n  font-size: 16px;\n  font-weight: 500;\n}\n\nspan.arrow-span {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n\n.validation {\n  width: 80%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n\n.fields {\n  width: 100%;\n  margin: 7% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 15px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 44px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start: 5px;\n}\n\n.explore-btn {\n  width: 100%;\n}\n\n.errormsg {\n  margin-left: 4px;\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUdyQzs7QUFBRTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUt2Qzs7QUFGQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsdURBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNJLDRCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBaUJKOztBQWRBO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWZBO0VBRUksV0FBQTtBQWlCSjs7QUFmQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJFO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBaEJFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBbUJKOztBQWpCRTtFQUNFLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBcUJKIiwiZmlsZSI6InNpZ24taW4tc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3djbHN7XG4gIGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5pb3N7XG4gIC5yb3djbHN7XG4gICAgZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAyOHB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xufVxuLmlucHV0LWRpdntcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9CbGlzc1Byby1NZWRpdW0vQmxpc3NQcm8tTWVkaXVtLnR0ZicpO1xufVxucC5zaWduLWluLXBhcmEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnB1dHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOjIwcHggYXV0byAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XG4gICAgLy8gLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOlxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NTAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOjE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cbmlvbi1pbnB1dCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cbi5yb3ctZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMnB4IGF1dG8gMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmFkaW97XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIC0tY29sb3I6ICNBOEI0MDA7XG4gICAgLS1jb2xvci1jaGVja2VkOiNBOEI0MDA7XG59XG4uYnVsbC1kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXJhLWRpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ucGFyYXtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uYnRuLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuc3Bhbi5wLXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuc3Bhbi5hcnJvdy1zcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdG9wOiAxNnB4O1xuXG59XG4udmFsaWRhdGlvbntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogNXB4IGF1dG8gNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGVydEljb257XG5cbiAgICB3aWR0aDogMTNweDtcbn1cbi5lcnJvci1tc2d7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2Q5MzAyNTtcbn1cblxuLy9uYWphbSBwYXNzd29yZCBpbnB1dCBjc3MvLy9cbi5maWVsZHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA3JSBhdXRvIDAlO1xuICB9XG4gIC5pbnB1dGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuICAucGlucHV0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICB9XG4gIC5waC1jc3N7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzY1NjU2NTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICB9XG4gIC5leHBsb3JlLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZXJyb3Jtc2d7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNkOTMwMjU7XG59XG4iXX0= */";

/***/ }),

/***/ 14078:
/*!********************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width: 100%\">\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"\" />\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <!-- <div class=\"title\">Contact Us</div> -->\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img\n          (click)=\"updateProfile()\"\n          class=\"pro-img\"\n          src=\"assets/images/user.png\"\n        />\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div style=\"text-align: center\">\n      <img\n        src=\"assets/images/logo.svg\"\n        style=\"text-align: center; margin-top: 15px\"\n        alt=\"\"\n      />\n    </div>\n\n    <div style=\"margin-top: 15px\">\n      <p class=\"sign-in-para\">Please sign in to continue</p>\n    </div>\n    <form [formGroup]=\"RegisterForm\" (ngSubmit)=\"formSubmit()\">\n      <div class=\"input-div\">\n        <ion-input\n          formControlName=\"email\"\n          [(ngModel)]=\"userEmail\"\n          class=\"input\"\n          type=\"email\"\n          placeholder=\"Email\"\n          ><img\n            style=\"margin: 15px 7px 14px 15px\"\n            src=\"assets/images/icons/email.svg\"\n          />\n        </ion-input>\n        <div\n          class=\"validation\"\n          *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\"\n        >\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n          <span class=\"error-msg\">Enter your email</span>\n        </div>\n        <div\n          class=\"validation\"\n          *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\"\n        >\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n          <span class=\"error-msg\">This is invalid format</span>\n        </div>\n\n        <!-- <ion-input class=\"input\" style=\"--padding-end: 40px;\"  type=\"{{showPass ? 'text':'password' }}\" placeholder=\"Password\" ><img style=\"margin:15px 7px 15px 20px;\" src=\"assets/images/pw-lock.svg\" >\n        <span class=\"arrow-span\">\n          <ion-icon style=\"color:black ;\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\n          <ion-icon style=\"color:black ;\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\n        </span>\n        </ion-input> -->\n        <div class=\"fields\">\n          <div class=\"inputdiv\">\n            <div>\n              <img\n                style=\"margin: 16px 7px 14px 15px\"\n                src=\"assets/images/icons/lock.svg\"\n              />\n            </div>\n            <div class=\"pinput\">\n              <ion-input\n                formControlName=\"password\"\n                [(ngModel)]=\"userPassword\"\n                class=\"ph-css\"\n                placeholder=\"Password\"\n                type=\"{{showPass ? 'text':'password' }}\"\n              ></ion-input>\n              <!-- formControlName=\"password\" [(ngModel)]=\"userPassword\" -->\n            </div>\n            <div class=\"icondiv\" style=\"margin-top: 4px\">\n              <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\n              <ion-icon\n                style=\"color: black; margin-right: 15px\"\n                name=\"eye\"\n                *ngIf=\"!showPass\"\n                (click)=\"togglePass()\"\n              >\n              </ion-icon>\n              <ion-icon\n                style=\"color: black; margin-right: 15px\"\n                name=\"eye-off\"\n                *ngIf=\"showPass\"\n                (click)=\"togglePass()\"\n              ></ion-icon>\n            </div>\n          </div>\n        </div>\n\n        <div\n          class=\"validation\"\n          *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\"\n        >\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\n          <span class=\"error-msg\">Enter your password</span>\n        </div>\n      </div>\n      <div class=\"errormsg\" *ngIf=\"error==true\">{{errormessage}}</div>\n      <div class=\"row-div\">\n        <div class=\"bull-div\" style=\"display: flex\">\n          <ion-radio class=\"radio\" slot=\"start\" value=\"Remember me\"></ion-radio>\n          <p class=\"para\" style=\"margin-left: 12px\">Remember me</p>\n        </div>\n        <div class=\"para-div\">\n          <p class=\"para\" (click)=\"forgot()\">Forgot Password?</p>\n        </div>\n      </div>\n      <div *ngIf=\"fingerprintlogo==false\" style=\"text-align: center\">\n        <ion-button\n          class=\"btn\"\n          type=\"submit\"\n          [disabled]=\"RegisterForm.invalid\"\n          (click)=\"signIn()\"\n          style=\"--background: #a8b400\"\n          >Sign In</ion-button\n        >\n      </div>\n\n      <ion-row *ngIf=\"fingerprintlogo==true\">\n        <ion-col size=\"11\">\n          <ion-button\n            class=\"btn\"\n            type=\"submit\"\n            [disabled]=\"RegisterForm.invalid\"\n            (click)=\"signIn()\"\n            style=\"--background: #a8b400\"\n            >Sign In</ion-button\n          >\n        </ion-col>\n        <ion-col size=\"1\" style=\"padding-top: 40px; text-align: center\">\n          <ion-icon\n            name=\"finger-print-outline\"\n            style=\"font-size: 30px; color: gray\"\n            (click)=\"fflogin()\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </form>\n\n    <p style=\"text-align: center; margin: 10px 0px 0px 0px\">\n      <span class=\"p-span\" style=\"color: #1a206d\">Not registered yet?</span>\n      <span class=\"p-span\" style=\"color: #a8b400\" (click)=\"signUpPage()\"\n        >Sign Up</span\n      >\n    </p>\n    <!-- <div style=\"text-align:center ;\">\n      <ion-button class=\"btn\" type=\"submit\" (click)=\"fflogin()\" style=\"--background: #A8B400;\">FingerPrint/Face Login\n      </ion-button>\n\n    </div> -->\n    <div style=\"text-align: center\">\n      <ion-button\n        class=\"btn\"\n        style=\"--background: #1a206d\"\n        (click)=\"PopupCust()\"\n        >Agent ID Login</ion-button\n      >\n    </div>\n    <div class=\"explore-btn\">\n      <ion-button\n        fill=\"outline\"\n        class=\"btn\"\n        style=\"color: #a8b400; --border-color: #a8b400; margin-top: 20px\"\n        (click)=\"exScBefLin()\"\n        >Tap to Explore</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-footer>\n  <div class=\"explore-btn\">\n    <ion-button fill=\"outline\" class=\"btn\" style=\"color: #A8B400; --border-color:#A8B400 ; margin-top:40px\" (click)=\"exScBefLin()\">Tap to Explore</ion-button>\n  </div>\n</ion-footer> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-in-screen_sign-in-screen_module_ts.js.map