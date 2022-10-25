"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-in-screen_sign-in-screen_module_ts"],{

/***/ 5573:
/*!*****************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreenPageRoutingModule": () => (/* binding */ SignInScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sign_in_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-screen.page */ 870);




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

/***/ 174:
/*!*********************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreenPageModule": () => (/* binding */ SignInScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sign_in_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-screen-routing.module */ 5573);
/* harmony import */ var _sign_in_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in-screen.page */ 870);







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

/***/ 870:
/*!*******************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreenPage": () => (/* binding */ SignInScreenPage)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sign_in_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in-screen.page.html?ngResource */ 4078);
/* harmony import */ var _sign_in_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in-screen.page.scss?ngResource */ 1886);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 3427);




/* eslint-disable @typescript-eslint/semi */

/* eslint-disable prefer-const */

/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */








let SignInScreenPage = class SignInScreenPage {
  constructor(router, modal, menuCtrl, alert, api, faio, location) {
    this.router = router;
    this.modal = modal;
    this.menuCtrl = menuCtrl;
    this.alert = alert;
    this.api = api;
    this.faio = faio;
    this.location = location;
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
        this.router.navigate(['/home-page-screen-after-login']);
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

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.faio.isAvailable().then(() => {
        _this.faio.show({
          cancelButtonTitle: 'Cancel',
          description: "Some biometric description",
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

              _this.router.navigate(['/home-page-screen-after-login']);
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
    this.router.navigate(['/explore-screen-before-login-expanded']);
  }

  PopupCust() {
    var _this2 = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
}];

SignInScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-sign-in-screen',
  template: _sign_in_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_sign_in_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignInScreenPage);


/***/ }),

/***/ 1886:
/*!********************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 28px;\n}\n\n.container {\n  width: 75%;\n  margin: 0px auto 0px;\n}\n\n.input-div {\n  margin-top: 26px;\n}\n\n@font-face {\n  font-family: Bliss Pro;\n  src: url(\"/assets/BlissPro-Medium/BlissPro-Medium.ttf\");\n}\n\np.sign-in-para {\n  font-size: 24px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n  text-align: center;\n}\n\n.input {\n  height: 44px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 15px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 5px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.row-div {\n  display: flex;\n  width: 100%;\n  margin: 22px auto 0px;\n  align-items: center;\n}\n\n.radio {\n  height: 16px;\n  width: 16px;\n  --color: #A8B400;\n  --color-checked:#A8B400;\n}\n\n.bull-div {\n  width: 100%;\n  align-items: center;\n}\n\n.para-div {\n  width: 100%;\n  text-align: end;\n}\n\n.para {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.btn {\n  width: 100%;\n  height: 48px;\n  margin-top: 24px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\nspan.p-span {\n  font-size: 16px;\n  font-weight: 500;\n}\n\nspan.arrow-span {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n\n.validation {\n  width: 80%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n\n.fields {\n  width: 100%;\n  margin: 7% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 15px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 44px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start: 5px;\n}\n\n.explore-btn {\n  width: 100%;\n}\n\n.errormsg {\n  margin-left: 4px;\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUdyQzs7QUFBRTtFQUNFLGFBQUE7RUFBYyxtQkFBQTtFQUFxQixnQkFBQTtBQUt2Qzs7QUFGQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsdURBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNJLDRCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBaUJKOztBQWRBO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWZBO0VBRUksV0FBQTtBQWlCSjs7QUFmQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJFO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBaEJFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBbUJKOztBQWpCRTtFQUNFLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBcUJKIiwiZmlsZSI6InNpZ24taW4tc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3djbHN7XHJcbiAgZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5pb3N7XHJcbiAgLnJvd2Nsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XHJcbn1cclxuLmlucHV0LWRpdntcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvQmxpc3NQcm8tTWVkaXVtL0JsaXNzUHJvLU1lZGl1bS50dGYnKTtcclxufVxyXG5wLnNpZ24taW4tcGFyYSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjoyMHB4IGF1dG8gMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XHJcbiAgICAvLyAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOjE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLnJvdy1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIycHggYXV0byAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yYWRpb3tcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgLS1jb2xvcjogI0E4QjQwMDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDojQThCNDAwO1xyXG59XHJcbi5idWxsLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGFyYS1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4ucGFyYXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uYnRuLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuc3Bhbi5wLXNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5zcGFuLmFycm93LXNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB0b3A6IDE2cHg7XHJcblxyXG59XHJcbi52YWxpZGF0aW9ue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG8gNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0SWNvbntcclxuXHJcbiAgICB3aWR0aDogMTNweDtcclxufVxyXG4uZXJyb3ItbXNne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZDkzMDI1O1xyXG59XHJcblxyXG4vL25hamFtIHBhc3N3b3JkIGlucHV0IGNzcy8vL1xyXG4uZmllbGRze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDclIGF1dG8gMCU7XHJcbiAgfVxyXG4gIC5pbnB1dGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIC5waW5wdXRcclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICB9XHJcbiAgLnBoLWNzc3tcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM2NTY1NjU7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gIH1cclxuICAuZXhwbG9yZS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmVycm9ybXNne1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZDkzMDI1O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4078:
/*!********************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <!-- <ion-toolbar class=\"headBgGlobal\"> -->\r\n  <ion-row class=\"rowcls\">\r\n    <ion-col size=\"10\" style=\"padding-left: 27px;\">\r\n      <!-- <ion-menu-toggle> -->\r\n      <!-- <ion-buttons> -->\r\n      <div style=\"width:100% ;\">\r\n        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n      </div>\r\n      <!-- </ion-buttons> -->\r\n      <!-- </ion-menu-toggle> -->\r\n    </ion-col>\r\n\r\n    <ion-col class=\"titleclass\" size=\"2\">\r\n      <!-- <div class=\"header-div\" style=\"width: 85%; margin:20px auto 0px; text-align:end ;\"> -->\r\n      <!-- <img src=\"assets/images/icons/notification.svg\"> -->\r\n      <!-- </div> -->\r\n    </ion-col>\r\n\r\n\r\n  </ion-row>\r\n  <!-- </ion-toolbar> -->\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div style=\"text-align:center\">\r\n      <img src=\"assets/images/logo.svg\" style=\"text-align:center ; margin-top:15px;\" alt=\"\">\r\n    </div>\r\n\r\n    <div style=\"margin-top:15px;\">\r\n      <p class=\"sign-in-para\">Please sign in to continue</p>\r\n    </div>\r\n    <form [formGroup]=\"RegisterForm\" (ngSubmit)=\"formSubmit()\">\r\n      <div class=\"input-div\">\r\n        <ion-input formControlName=\"email\" [(ngModel)]=\"userEmail\" class=\"input\" type=\"email\" placeholder=\"Email\"><img\r\n            style=\"margin:15px 7px 14px 15px;\" src=\"assets/images/icons/email.svg\"> </ion-input>\r\n        <div class=\"validation\"\r\n          *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\r\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n          <span class=\"error-msg\">Enter your email</span>\r\n        </div>\r\n        <div class=\"validation\"\r\n          *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\r\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n          <span class=\"error-msg\">This is invalid format</span>\r\n        </div>\r\n\r\n        <!-- <ion-input class=\"input\" style=\"--padding-end: 40px;\"  type=\"{{showPass ? 'text':'password' }}\" placeholder=\"Password\" ><img style=\"margin:15px 7px 15px 20px;\" src=\"assets/images/pw-lock.svg\" >\r\n        <span class=\"arrow-span\">\r\n          <ion-icon style=\"color:black ;\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\r\n          <ion-icon style=\"color:black ;\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\r\n        </span>\r\n        </ion-input> -->\r\n        <div class=\"fields\">\r\n          <div class=\"inputdiv\">\r\n            <div>\r\n              <img style=\"margin:16px 7px 14px 15px;\" src=\"assets/images/icons/lock.svg\">\r\n            </div>\r\n            <div class=\"pinput\">\r\n              <ion-input formControlName=\"password\" [(ngModel)]=\"userPassword\" class=\"ph-css\" placeholder=\"Password\"\r\n                type=\"{{showPass ? 'text':'password' }}\"></ion-input>\r\n              <!-- formControlName=\"password\" [(ngModel)]=\"userPassword\" -->\r\n            </div>\r\n            <div class=\"icondiv\" style=\"margin-top: 4px;\">\r\n              <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n              <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\">\r\n              </ion-icon>\r\n              <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye-off\" *ngIf=\"showPass\"\r\n                (click)=\"togglePass()\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"validation\"\r\n          *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\r\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n          <span class=\"error-msg\">Enter your password</span>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"errormsg\" *ngIf=\"error==true\">{{errormessage}}</div>\r\n      <div class=\"row-div\">\r\n        <div class=\"bull-div\" style=\"display:flex ;\">\r\n          <ion-radio class=\"radio\" slot=\"start\" value=\"Remember me\"></ion-radio>\r\n          <p class=\"para\" style=\"margin-left: 12px;\">Remember me</p>\r\n        </div>\r\n        <div class=\"para-div\">\r\n          <p class=\"para\" (click)=\"forgot()\">Forgot Password?</p>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"fingerprintlogo==false\" style=\"text-align:center;\">\r\n        <ion-button class=\"btn\" type=\"submit\" [disabled]=\"RegisterForm.invalid\" (click)=\"signIn()\"\r\n          style=\"--background: #A8B400;\">Sign In</ion-button>\r\n\r\n      </div>\r\n\r\n      <ion-row *ngIf=\"fingerprintlogo==true\">\r\n        <ion-col size=\"11\">\r\n          <ion-button class=\"btn\" type=\"submit\" [disabled]=\"RegisterForm.invalid\" (click)=\"signIn()\"\r\n            style=\"--background: #A8B400;\">Sign In</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\" style=\"padding-top: 40px;\r\n        text-align: center;\">\r\n          <ion-icon name=\"finger-print-outline\" style=\"font-size:30px;color:gray\" (click)=\"fflogin()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    </form>\r\n\r\n    <p style=\"text-align:center ; margin:10px 0px 0px 0px;\">\r\n      <span class=\"p-span\" style=\"color: #1A206D;\">Not registered yet?</span>\r\n      <span class=\"p-span\" style=\"color: #A8B400;\" (click)=\"signUpPage()\">Sign Up</span>\r\n    </p>\r\n    <!-- <div style=\"text-align:center ;\">\r\n      <ion-button class=\"btn\" type=\"submit\" (click)=\"fflogin()\" style=\"--background: #A8B400;\">FingerPrint/Face Login\r\n      </ion-button>\r\n\r\n    </div> -->\r\n    <div style=\"text-align:center ;\">\r\n      <ion-button class=\"btn\" style=\"--background: #1A206D;\" (click)=\"PopupCust()\">Agent ID Login</ion-button>\r\n    </div>\r\n    <div class=\"explore-btn\">\r\n      <ion-button fill=\"outline\" class=\"btn\" style=\"color: #A8B400; --border-color:#A8B400 ; margin-top:20px;\"\r\n        (click)=\"exScBefLin()\">Tap to Explore</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-footer>\r\n  <div class=\"explore-btn\">\r\n    <ion-button fill=\"outline\" class=\"btn\" style=\"color: #A8B400; --border-color:#A8B400 ; margin-top:40px\" (click)=\"exScBefLin()\">Tap to Explore</ion-button>\r\n  </div>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-in-screen_sign-in-screen_module_ts.js.map