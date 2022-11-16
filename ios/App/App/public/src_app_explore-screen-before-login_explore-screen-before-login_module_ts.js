"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_explore-screen-before-login_explore-screen-before-login_module_ts"],{

/***/ 45874:
/*!*******************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginPageRoutingModule": () => (/* binding */ ExploreScreenBeforeLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _explore_screen_before_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login.page */ 26356);




const routes = [
    {
        path: '',
        component: _explore_screen_before_login_page__WEBPACK_IMPORTED_MODULE_0__.ExploreScreenBeforeLoginPage
    }
];
let ExploreScreenBeforeLoginPageRoutingModule = class ExploreScreenBeforeLoginPageRoutingModule {
};
ExploreScreenBeforeLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExploreScreenBeforeLoginPageRoutingModule);



/***/ }),

/***/ 61741:
/*!***********************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginPageModule": () => (/* binding */ ExploreScreenBeforeLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_screen_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login-routing.module */ 45874);
/* harmony import */ var _explore_screen_before_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login.page */ 26356);







let ExploreScreenBeforeLoginPageModule = class ExploreScreenBeforeLoginPageModule {
};
ExploreScreenBeforeLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _explore_screen_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExploreScreenBeforeLoginPageRoutingModule
        ],
        declarations: [_explore_screen_before_login_page__WEBPACK_IMPORTED_MODULE_1__.ExploreScreenBeforeLoginPage]
    })
], ExploreScreenBeforeLoginPageModule);



/***/ }),

/***/ 26356:
/*!*********************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginPage": () => (/* binding */ ExploreScreenBeforeLoginPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_screen_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login.page.html?ngResource */ 32329);
/* harmony import */ var _explore_screen_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-screen-before-login.page.scss?ngResource */ 19942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _agentidpopup_agentidpopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agentidpopup/agentidpopup.page */ 78483);








let ExploreScreenBeforeLoginPage = class ExploreScreenBeforeLoginPage {
  constructor(router, navCtrl, menuCtrl, modal, actionSheetCtrl) {
    this.router = router;
    this.navCtrl = navCtrl;
    this.menuCtrl = menuCtrl;
    this.modal = modal;
    this.actionSheetCtrl = actionSheetCtrl;
    this.show = false;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    this.userID = localStorage.getItem('userid');
    console.log(this.userID, 'dsadsadddddddddd----');
  }

  openMenu() {
    console.log('open menu');
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true); // this.RegisterForm.reset();
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(false);
  }

  profileupdate() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen');
    } else {
      this.navCtrl.navigateRoot('profile-update');
    }
  }

  insured() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen');
    } else {
      this.navCtrl.navigateRoot('home-page-screen-after-login');
    }
  }

  ReportaClaim() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen');
    } else {
      this.navCtrl.navigateRoot('makeaclaim');
    }
  }

  RenewPolicy() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen');
    } else {
      this.navCtrl.navigateRoot('verify-policy-screen-cust');
    }
  }

  agentlogin() {
    var _this = this;

    return (0,_Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modal.create({
        component: _agentidpopup_agentidpopup_page__WEBPACK_IMPORTED_MODULE_3__.AgentidpopupPage,
        cssClass: 'AgentPopupclass'
      });
      return yield modal.present();
    })();
  }

  verifyPolicy() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen');
    } else {
      this.navCtrl.navigateRoot('policylookup');
    }
  }

  getintouch() {
    this.navCtrl.navigateRoot('contactus');
  }

  tab1Click() {
    this.navCtrl.navigateRoot('sign-up-screen');
  }

  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }

  tab3Click() {
    this.navCtrl.navigateRoot('sign-in-screen');
  }

  toogleShow() {
    this.show = !this.show;
  }

  signInScreen() {
    this.router.navigate(['/sign-in-screen']);
  }

  signUpScreen() {
    this.router.navigate(['/sign-up-screen']);
  }

};

ExploreScreenBeforeLoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}];

ExploreScreenBeforeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-explore-screen-before-login',
  template: _explore_screen_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_explore_screen_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExploreScreenBeforeLoginPage);


/***/ }),

/***/ 19942:
/*!**********************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".cheader {\n  background: #1A206D !important;\n}\n\n.rowcls {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  padding-top: 7.5%;\n}\n\n.top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 13% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 20px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #FFFFFF;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  margin-top: 10px;\n  border-color: #A8B400;\n  --background: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\n.btn2 {\n  width: 80%;\n  height: 48px;\n  margin-top: 20px;\n  --border-color: #A8B400;\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n  height: 103px;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 7%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSw4QkFBQTtBQUhGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFKSjs7QUFNQTtFQUVJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBSko7O0FBTUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUE7RUFDSSx3Q0FBQTtFQUNBLCtDQUFBO0FBSEo7O0FBS0E7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUhBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFVSjs7QUFSQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWFKOztBQVhBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWNKOztBQVRBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBWUY7O0FBVkE7RUFFSSxhQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVBBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVVGOztBQU5BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBU0Y7QUFDRjs7QUFOQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQVFGOztFQU5BO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBU0Y7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQVNGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQVNGO0FBQ0Y7O0FBTkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFRRjtBQUNGOztBQUxBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBT0Y7O0VBTEE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFRRjtBQUNGOztBQUNDO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixXQUFBO0VBQ0UsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFERTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUdIOztBQURFO0VBQ0ksbUJBQUE7QUFHTjs7QUFGTTtFQUNFLGNBQUE7QUFJUjs7QUFERTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUFHSDs7QUFERTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUFHSDs7QUFRQztFQUNHLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7O0FBTUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFKSDs7QUFNRTtFQUNJLG1CQUFBO0FBSk47O0FBS007RUFDRSxjQUFBO0FBSFI7O0FBTUU7RUFDQyxpQkFBQTtFQUNBLDZCQUFBO0FBSkg7O0FBTUU7RUFDQyxnQkFBQTtFQUNBLDRCQUFBO0FBSkg7O0FBV0E7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUFSRiIsImZpbGUiOiJleHBsb3JlLXNjcmVlbi1iZWZvcmUtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlcntcbi8vICAgICB3aWR0aDogODUlO1xuLy8gICAgIG1hcmdpbjowcHggYXV0bztcbi8vIH1cbi5jaGVhZGVye1xuICBiYWNrZ3JvdW5kOiAjMUEyMDZEICFpbXBvcnRhbnQ7XG59XG4ucm93Y2xze1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG4uaW9ze1xuICAucm93Y2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNy41JTtcbiAgfVxufVxuLnRvcC1jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0bztcbn1cbi5jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTMlIGF1dG87XG59XG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMzYuMDZweDtcbiAgICBoZWlnaHQ6IDM2LjA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBwYWRkaW5nOiAxLjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vLyBpbWcuY2FtLWljb24ge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDc4cHg7XG4vLyAgICAgcmlnaHQ6IDVweDtcbi8vIH1cbi5wcm8taW1ne1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGl0bGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XG59XG5wLm5hbWUtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5wLndjLXBhcmEge1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5pb24tc2xpZGVze1xuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kXHQ6d2hpdGUgIWltcG9ydGFudDtcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6d2hpdGUgIWltcG9ydGFudDtcbn1cbi5taWQtZGl2IHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggNTZweCAxMnB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5taWQtc3ViLWRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgcGFkZGluZzogMjJweCAxNS41cHggMTNweCAxNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxucC5wMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG59XG5wLnAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbn1cbi5wLWJhcntcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XG59XG5wLnAzIHtcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xufVxuaW9uLWJ1dHRvbi5idG4tc217XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiA3MXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5idG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG4uaW1nY2xhc3N7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYnRuMntcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5wLm1pZC1wMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMC44cHg7XG59XG5wLm1pZC1wMiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuOHB4O1xufVxuLmFycm93e1xuICAgIGhlaWdodDogOHB4O1xuICAgIHdpZHRoOiA5cHg7XG59XG4uZ2MtZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDNweDtcbn1cbi5naW1nLWRpdiB7XG4gICAgLy8gaGVpZ2h0OiA4NXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcbn1cbnAuZ3AtZGl2IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ubHN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDI3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzYsMTgxLDAsMzIlKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5wLmxzdC1wYXJhIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XG59XG4ubGltZy1kaXYge1xuICAgIHdpZHRoOiA2OSU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDZweCAxN3B4IDBweDtcbn1cblxuXG5cbi5pbWd7XG4gIHdpZHRoOiAyMS41cHg7XG4gIGhlaWdodDogMjEuNXB4O1xuICBvcGFjaXR5OiA2MCU7XG59XG4uYWN0aXZlaW1ne1xuXG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcblxufVxuXG4uZm9udHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiA2MCU7XG59XG4uZm9udGFjdGl2ZXtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLy8gLmNpbWd7XG4vLyAgIG9wYWNpdHk6IDYwJXk7XG4vLyB9XG5ocntcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgcmlnaHQ6IDQ3LjIlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE0cHgpe1xuICBocntcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XG4gIGhye1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogNDcuNCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIC5jb250YWluZXJ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDI1JSBhdXRvIDUlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XG4gIGhye1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogNDcuMiU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo2NjdweCl7XG4gIC5jb250YWluZXJ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDI1JSBhdXRvIDclO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KXtcbiAgaHJ7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiA0Ny4yJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjQwcHgpe1xuICBocntcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byA1JTtcbiAgfVxufVxuXG5cblxuXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cbi5tZCBpb24tdGFic3tcblxuXHRpb24tdGFiLWJhciB7XG5cdFx0LS1ib3JkZXI6IDA7XG5cdFx0LS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDowOyByaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MnB4O1xuICAgIGhlaWdodDo2MHB4O1xuXHRcdCY6YWZ0ZXJ7XG5cdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcbiAgICAgIH1cblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblxuXHR9XG5cbn1cblxuXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cbi5pb3MgaW9uLXRhYnN7XG5cblx0aW9uLXRhYi1iYXIge1xuICAgIC0tYm9yZGVyOiAwO1xuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHggNDVweCAwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xuICAgIGhlaWdodDogNjJweDtcblx0XHQmOmFmdGVye1xuXHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDojMUEyMDZEO1xuICAgICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XG4gICAgICB9XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcblx0XHR9XG5cblx0fVxuXG59XG5cbi5pb3MgLmNvbnRhaW5lcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyNSUgMTclIDI0JSA4JTtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 32329:
/*!**********************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"--background: #e9e7e7 !important\">\n  <div style=\"background: #1a206d; height: 275px; margin-top: 20px\">\n    <ion-row class=\"rowcls\">\n      <ion-col size=\"10\" style=\"padding-left: 27px\">\n        <!-- <ion-buttons >\n          <ion-menu-button>  <img  src=\"assets/images/menuicon.svg\" alt=\"sb-btn\"></ion-menu-button>\n        </ion-buttons> -->\n        <!-- <div style=\"width:100% ;\">\n          <img (click)=\"openMenu()\" src=\"assets/images/menuicon.svg\" alt=\"sb-btn\">\n        </div> -->\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\" (click)=\"profileupdate()\">\n        <img\n          class=\"pro-img\"\n          src=\"assets/images/user-Filled1.svg\"\n          alt=\"profile\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <div class=\"top-container\" style=\"margin-top: 20px\">\n      <p class=\"name-para\">Lets!</p>\n      <p class=\"wc-para\">Explore</p>\n\n      <div class=\"slide-div\">\n        <ion-slides\n          pager=\"true\"\n          [options]=\"slideOpts\"\n          scrollbar=\"true\"\n          (ionSlideDidChange)=\"active-slide\"\n        >\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 100%\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width: 100%\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width: 100%\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width: 100%\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div style=\"display: flex; align-items: center\">\n      <!-- margin-top: 26px; -->\n      <p class=\"mid-p1\">Services</p>\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding: 0px; width: 100%\">\n      <ion-row style=\"margin-top: 16px\">\n        <ion-col size=\"4\" style=\"padding: 6px 6px 6px 0px; width: 100%\">\n          <div class=\"gc-div\" (click)=\"insured()\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/get-insured.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Get Insured</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding: 6px; width: 100%\">\n          <div class=\"gc-div\" (click)=\"ReportaClaim()\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/report-claim.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Report a Claim</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding: 6px 0px 6px 6px; width: 100%\">\n          <div class=\"gc-div\" (click)=\"RenewPolicy()\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/renew-policy.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Renew Policy</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 16px\">\n        <ion-col size=\"4\" style=\"padding: 6px 6px 6px 0px; width: 100%\">\n          <div class=\"gc-div\" (click)=\"agentlogin()\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/agent-login.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Agent Login</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding: 6px; width: 100%\">\n          <div class=\"gc-div\" (click)=\"verifyPolicy()\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\" />\n            </div>\n            <p class=\"gp-div\">Verify Policy</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding: 6px 0px 6px 6px; width: 100%\">\n          <div class=\"gc-div\" (click)=\"getintouch()\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/helping-staff.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Get in Touch</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- <div style=\"text-align:center ;\">\n      <ion-button class=\"btn\" (click)=\"signInScreen()\">Login</ion-button>\n      <ion-button class=\"btn2\" (click)=\"signUpScreen()\" fill=\"outline\">Sign up</ion-button>\n    </div> -->\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div\n    style=\"\n      display: flex;\n      justify-content: space-around;\n      text-align: center;\n      padding: 15px 0px;\n      background: #1a206d;\n      border-radius: 32px 32px 0px 0px;\n    \"\n  >\n    <hr />\n    <div (click)=\"tab1Click()\">\n      <img src=\"assets/images/icons/login.svg\" class=\"img\" />\n\n      <div class=\"font\">Sign up</div>\n    </div>\n    <div (click)=\"tab2Click()\">\n      <img src=\"assets/images/discover.svg\" class=\"activeimg\" />\n      <div class=\"fontactive\">Discover</div>\n    </div>\n    <div (click)=\"tab3Click()\">\n      <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\" />\n      <div class=\"font\">Sign In</div>\n    </div>\n  </div>\n  <!-- <ion-tabs style=\"top:10px !important;\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr>\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/icons/login.svg\" class=\"img\">\n        <ion-label class=\"font\">Sign up</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\">\n        <ion-label class=\"fontactive\">Discover</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab3Click()\">\n        <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\n        <ion-label class=\"font\">Sign In</ion-label>\n\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs> -->\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login_explore-screen-before-login_module_ts.js.map