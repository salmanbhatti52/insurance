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
/* harmony import */ var D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
    let myData = 'myData={"email": "' + this.userEmail + '","password": "' + this.userPassword + '", "method": "login"}';
    this.api.insertData(myData).subscribe(res => {
      console.log('res==', res);
      this.api.hideLoader();

      if (res.email) {
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
        localStorage.setItem('loginas', 'user');
        this.api.loginas = 'user'; // this.router.navigate(['/home-page-screen-after-login']);

        this.navCtrl.navigateRoot(['/home-page-screen-after-login']);
      } else {
        this.api.hideLoader(); // this.api.presenttoast('Email or password is incorrect');

        this.api.alertboxshow(res.message); // this.error = true
        // this.errormessage = 'Email or password is incorrect'
        // setTimeout(() => {
        //   this.error = false
        // }, 3000);
      }
    }, err => {
      this.api.hideLoader();
      console.log('err==', err);
      this.api.presenttoast(err);
    });
  }

  fflogin() {
    var _this = this;

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = ".rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  margin-top: 28px;\n}\n\n.container {\n  width: 75%;\n  margin: 0px auto 0px;\n}\n\n.input-div {\n  margin-top: 26px;\n}\n\n@font-face {\n  font-family: Bliss Pro;\n  src: url(\"/assets/BlissPro-Medium/BlissPro-Medium.ttf\");\n}\n\np.sign-in-para {\n  font-size: 24px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n  text-align: center;\n}\n\n.input {\n  height: 44px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 15px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 5px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.row-div {\n  display: flex;\n  width: 100%;\n  margin: 22px auto 0px;\n  align-items: center;\n}\n\n.radio {\n  height: 16px;\n  width: 16px;\n  --color: #A8B400;\n  --color-checked:#A8B400;\n}\n\n.bull-div {\n  width: 100%;\n  align-items: center;\n}\n\n.para-div {\n  width: 100%;\n  text-align: end;\n}\n\n.para {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.btn {\n  width: 100%;\n  height: 48px;\n  margin-top: 24px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\nspan.p-span {\n  font-size: 16px;\n  font-weight: 500;\n}\n\nspan.arrow-span {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n\n.validation {\n  width: 80%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n\n.fields {\n  width: 100%;\n  margin: 7% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 15px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 44px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start: 5px;\n}\n\n.explore-btn {\n  width: 100%;\n}\n\n.errormsg {\n  margin-left: 4px;\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tc2NyZWVuLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXGluc3VyYW5jZVxcc3JjXFxhcHBcXHNpZ24taW4tc2NyZWVuXFxzaWduLWluLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQWMsbUJBQUE7RUFBcUIsZ0JBQUE7QUNHckM7O0FEQUU7RUFDRSxhQUFBO0VBQWMsbUJBQUE7RUFBcUIsZ0JBQUE7QUNLdkM7O0FERkE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxzQkFBQTtFQUNBLHVEQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDT0o7O0FETEE7RUFDSSw0QkFBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDU0o7O0FEUEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNZSjs7QURWQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDYUo7O0FEWEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNjSjs7QURaQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2VKOztBRGJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2lCSjs7QURkQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2lCSjs7QURmQTtFQUVJLFdBQUE7QUNpQko7O0FEZkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURkQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ2lCSjs7QURmRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDa0JKOztBRGhCRTtFQUVFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDa0JKOztBRGhCRTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ21CSjs7QURqQkU7RUFDRSxXQUFBO0FDb0JKOztBRGxCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ3FCSiIsImZpbGUiOiJzaWduLWluLXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93Y2xze1xyXG4gIGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW9ze1xyXG4gIC5yb3djbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xyXG59XHJcbi5pbnB1dC1kaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL0JsaXNzUHJvLU1lZGl1bS9CbGlzc1Byby1NZWRpdW0udHRmJyk7XHJcbn1cclxucC5zaWduLWluLXBhcmEge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46MjBweCBhdXRvIDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNUQ1RDVEO1xyXG4gICAgLy8gLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOlxyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDo1MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZToxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi5yb3ctZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMnB4IGF1dG8gMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmFkaW97XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIC0tY29sb3I6ICNBOEI0MDA7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6I0E4QjQwMDtcclxufVxyXG4uYnVsbC1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBhcmEtZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuLnBhcmF7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bi1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbnNwYW4ucC1zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuc3Bhbi5hcnJvdy1zcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiAxNnB4O1xyXG5cclxufVxyXG4udmFsaWRhdGlvbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvIDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hbGVydEljb257XHJcblxyXG4gICAgd2lkdGg6IDEzcHg7XHJcbn1cclxuLmVycm9yLW1zZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2Q5MzAyNTtcclxufVxyXG5cclxuLy9uYWphbSBwYXNzd29yZCBpbnB1dCBjc3MvLy9cclxuLmZpZWxkc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA3JSBhdXRvIDAlO1xyXG4gIH1cclxuICAuaW5wdXRkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuICAucGlucHV0XHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5waC1jc3N7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjU2NTY1O1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICB9XHJcbiAgLmV4cGxvcmUtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lcnJvcm1zZ3tcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2Q5MzAyNTtcclxufVxyXG4iLCIucm93Y2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmlvcyAucm93Y2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xufVxuXG4uaW5wdXQtZGl2IHtcbiAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9CbGlzc1Byby1NZWRpdW0vQmxpc3NQcm8tTWVkaXVtLnR0ZlwiKTtcbn1cbnAuc2lnbi1pbi1wYXJhIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDo1MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOjE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuXG5pb24taW5wdXQge1xuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4ucm93LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIycHggYXV0byAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYWRpbyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIC0tY29sb3I6ICNBOEI0MDA7XG4gIC0tY29sb3ItY2hlY2tlZDojQThCNDAwO1xufVxuXG4uYnVsbC1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhcmEtZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnBhcmEge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4tZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5zcGFuLnAtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuc3Bhbi5hcnJvdy1zcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiAxNnB4O1xufVxuXG4udmFsaWRhdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNXB4IGF1dG8gNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxlcnRJY29uIHtcbiAgd2lkdGg6IDEzcHg7XG59XG5cbi5lcnJvci1tc2cge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZDkzMDI1O1xufVxuXG4uZmllbGRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNyUgYXV0byAwJTtcbn1cblxuLmlucHV0ZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4ucGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xufVxuXG4ucGgtY3NzIHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzY1NjU2NTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cblxuLmV4cGxvcmUtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lcnJvcm1zZyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2Q5MzAyNTtcbn0iXX0= */";

/***/ }),

/***/ 14078:
/*!********************************************************************!*\
  !*** ./src/app/sign-in-screen/sign-in-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <div style=\"width: 100%\">\r\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"\" />\r\n        </div> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <!-- <div class=\"title\">Contact Us</div> -->\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img\r\n          (click)=\"updateProfile()\"\r\n          class=\"pro-img\"\r\n          src=\"assets/images/user.png\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div style=\"text-align: center\">\r\n      <img\r\n        src=\"assets/images/logo.svg\"\r\n        style=\"text-align: center; margin-top: 15px\"\r\n        alt=\"\"\r\n      />\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px\">\r\n      <p class=\"sign-in-para\">Please sign in to continue</p>\r\n    </div>\r\n    <form [formGroup]=\"RegisterForm\" (ngSubmit)=\"formSubmit()\">\r\n      <div class=\"input-div\">\r\n        <ion-input\r\n          formControlName=\"email\"\r\n          [(ngModel)]=\"userEmail\"\r\n          class=\"input\"\r\n          type=\"email\"\r\n          placeholder=\"Email\"\r\n          ><img\r\n            style=\"margin: 15px 7px 14px 15px\"\r\n            src=\"assets/images/icons/email.svg\"\r\n          />\r\n        </ion-input>\r\n        <div\r\n          class=\"validation\"\r\n          *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\"\r\n        >\r\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n          <span class=\"error-msg\">Enter your email</span>\r\n        </div>\r\n        <div\r\n          class=\"validation\"\r\n          *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\"\r\n        >\r\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n          <span class=\"error-msg\">This is invalid format</span>\r\n        </div>\r\n\r\n        <!-- <ion-input class=\"input\" style=\"--padding-end: 40px;\"  type=\"{{showPass ? 'text':'password' }}\" placeholder=\"Password\" ><img style=\"margin:15px 7px 15px 20px;\" src=\"assets/images/pw-lock.svg\" >\r\n        <span class=\"arrow-span\">\r\n          <ion-icon style=\"color:black ;\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\"></ion-icon>\r\n          <ion-icon style=\"color:black ;\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\"></ion-icon>\r\n        </span>\r\n        </ion-input> -->\r\n        <div class=\"fields\">\r\n          <div class=\"inputdiv\">\r\n            <div>\r\n              <img\r\n                style=\"margin: 16px 7px 14px 15px\"\r\n                src=\"assets/images/icons/lock.svg\"\r\n              />\r\n            </div>\r\n            <div class=\"pinput\">\r\n              <ion-input\r\n                formControlName=\"password\"\r\n                [(ngModel)]=\"userPassword\"\r\n                class=\"ph-css\"\r\n                placeholder=\"Password\"\r\n                type=\"{{showPass ? 'text':'password' }}\"\r\n              ></ion-input>\r\n              <!-- formControlName=\"password\" [(ngModel)]=\"userPassword\" -->\r\n            </div>\r\n            <div class=\"icondiv\" style=\"margin-top: 4px\">\r\n              <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n              <ion-icon\r\n                style=\"color: black; margin-right: 15px\"\r\n                name=\"eye\"\r\n                *ngIf=\"!showPass\"\r\n                (click)=\"togglePass()\"\r\n              >\r\n              </ion-icon>\r\n              <ion-icon\r\n                style=\"color: black; margin-right: 15px\"\r\n                name=\"eye-off\"\r\n                *ngIf=\"showPass\"\r\n                (click)=\"togglePass()\"\r\n              ></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"validation\"\r\n          *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\"\r\n        >\r\n          <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\" />\r\n          <span class=\"error-msg\">Enter your password</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"errormsg\" *ngIf=\"error==true\">{{errormessage}}</div>\r\n      <div class=\"row-div\">\r\n        <div class=\"bull-div\" style=\"display: flex\">\r\n          <ion-radio class=\"radio\" slot=\"start\" value=\"Remember me\"></ion-radio>\r\n          <p class=\"para\" style=\"margin-left: 12px\">Remember me</p>\r\n        </div>\r\n        <div class=\"para-div\">\r\n          <p class=\"para\" (click)=\"forgot()\">Forgot Password?</p>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"fingerprintlogo==false\" style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"btn\"\r\n          type=\"submit\"\r\n          [disabled]=\"RegisterForm.invalid\"\r\n          (click)=\"signIn()\"\r\n          style=\"--background: #a8b400\"\r\n          >Sign In</ion-button\r\n        >\r\n      </div>\r\n\r\n      <ion-row *ngIf=\"fingerprintlogo==true\">\r\n        <ion-col size=\"11\">\r\n          <ion-button\r\n            class=\"btn\"\r\n            type=\"submit\"\r\n            [disabled]=\"RegisterForm.invalid\"\r\n            (click)=\"signIn()\"\r\n            style=\"--background: #a8b400\"\r\n            >Sign In</ion-button\r\n          >\r\n        </ion-col>\r\n        <ion-col size=\"1\" style=\"padding-top: 40px; text-align: center\">\r\n          <ion-icon\r\n            name=\"finger-print-outline\"\r\n            style=\"font-size: 30px; color: gray\"\r\n            (click)=\"fflogin()\"\r\n          ></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n    <p style=\"text-align: center; margin: 10px 0px 0px 0px\">\r\n      <span class=\"p-span\" style=\"color: #1a206d\">Not registered yet?</span>\r\n      <span class=\"p-span\" style=\"color: #a8b400\" (click)=\"signUpPage()\"\r\n        >Sign Up</span\r\n      >\r\n    </p>\r\n    <!-- <div style=\"text-align:center ;\">\r\n      <ion-button class=\"btn\" type=\"submit\" (click)=\"fflogin()\" style=\"--background: #A8B400;\">FingerPrint/Face Login\r\n      </ion-button>\r\n\r\n    </div> -->\r\n    <div style=\"text-align: center\">\r\n      <ion-button\r\n        class=\"btn\"\r\n        style=\"--background: #1a206d\"\r\n        (click)=\"PopupCust()\"\r\n        >Agent ID Login</ion-button\r\n      >\r\n    </div>\r\n    <div class=\"explore-btn\">\r\n      <ion-button\r\n        fill=\"outline\"\r\n        class=\"btn\"\r\n        style=\"color: #a8b400; --border-color: #a8b400; margin-top: 20px\"\r\n        (click)=\"exScBefLin()\"\r\n        >Tap to Explore</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-footer>\r\n  <div class=\"explore-btn\">\r\n    <ion-button fill=\"outline\" class=\"btn\" style=\"color: #A8B400; --border-color:#A8B400 ; margin-top:40px\" (click)=\"exScBefLin()\">Tap to Explore</ion-button>\r\n  </div>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-in-screen_sign-in-screen_module_ts.js.map