"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_explore-screen-before-login_explore-screen-before-login_module_ts"],{

/***/ 5874:
/*!*******************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginPageRoutingModule": () => (/* binding */ ExploreScreenBeforeLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _explore_screen_before_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login.page */ 6356);




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

/***/ 1741:
/*!***********************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginPageModule": () => (/* binding */ ExploreScreenBeforeLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _explore_screen_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login-routing.module */ 5874);
/* harmony import */ var _explore_screen_before_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login.page */ 6356);







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

/***/ 6356:
/*!*********************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginPage": () => (/* binding */ ExploreScreenBeforeLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explore_screen_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login.page.html?ngResource */ 2329);
/* harmony import */ var _explore_screen_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login.page.scss?ngResource */ 9942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);







let ExploreScreenBeforeLoginPage = class ExploreScreenBeforeLoginPage {
    constructor(router, navCtrl, menuCtrl, api) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.show = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.userID = localStorage.getItem('userid');
        console.log('userid---', this.userID);
    }
    // ionViewDidEnter() {
    //   this.menuCtrl.enable(false);
    //   // this.RegisterForm.reset();
    // }
    // ionViewWillLeave() {
    //   // enable the root left menu when leaving this page
    //   this.menuCtrl.enable(true);
    // }
    insured() {
        if (this.userID != null) {
            this.navCtrl.navigateRoot('home-page-screen-after-login');
        }
        else {
            this.api.presenttoast('You are not loggedIn');
            this.navCtrl.navigateRoot('sign-in-screen');
        }
    }
    ReportaClaim() {
        if (this.userID != null) {
            this.navCtrl.navigateRoot('makeaclaim');
        }
        else {
            this.api.presenttoast('You are not loggedIn');
            this.navCtrl.navigateRoot('sign-in-screen');
        }
    }
    RenewPolicy() {
        if (this.userID != null) {
            this.navCtrl.navigateRoot('renewals');
        }
        else {
            this.api.presenttoast('You are not loggedIn');
            this.navCtrl.navigateRoot('sign-in-screen');
        }
    }
    verifyPolicy() {
        if (this.userID != null) {
            this.navCtrl.navigateRoot('verify-policy-screen-cust');
        }
        else {
            this.api.presenttoast('You are not loggedIn');
            this.navCtrl.navigateRoot('sign-in-screen');
        }
    }
    agentlogin() {
        if (this.userID != null) {
            this.navCtrl.navigateRoot('agentidpopup');
        }
        else {
            this.api.presenttoast('You are not loggedIn');
            this.navCtrl.navigateRoot('sign-in-screen');
        }
    }
    getintouch() {
        if (this.userID != null) {
            this.navCtrl.navigateRoot('contactus');
        }
        else {
            this.api.presenttoast('You are not loggedIn');
            this.navCtrl.navigateRoot('sign-in-screen');
        }
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
ExploreScreenBeforeLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
ExploreScreenBeforeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-explore-screen-before-login',
        template: _explore_screen_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_screen_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreScreenBeforeLoginPage);



/***/ }),

/***/ 9942:
/*!**********************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".cheader {\n  background: #1A206D !important;\n}\n\n.rowcls {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  padding-top: 7.5%;\n}\n\n.top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 13% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 20px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #FFFFFF;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  margin-top: 10px;\n  border-color: #A8B400;\n  --background: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\n.btn2 {\n  width: 80%;\n  height: 48px;\n  margin-top: 20px;\n  --border-color: #A8B400;\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n  height: 103px;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 7%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSw4QkFBQTtBQUhGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFKSjs7QUFNQTtFQUVJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBSko7O0FBTUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUE7RUFDSSx3Q0FBQTtFQUNBLCtDQUFBO0FBSEo7O0FBS0E7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdC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QTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFNRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFNRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUlGOztFQUZBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJleHBsb3JlLXNjcmVlbi1iZWZvcmUtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlcntcclxuLy8gICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICBtYXJnaW46MHB4IGF1dG87XHJcbi8vIH1cclxuLmNoZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogIzFBMjA2RCAhaW1wb3J0YW50O1xyXG59XHJcbi5yb3djbHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG4uaW9ze1xyXG4gIC5yb3djbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA3LjUlO1xyXG4gIH1cclxufVxyXG4udG9wLWNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxMyUgYXV0bztcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzNi4wNnB4O1xyXG4gICAgaGVpZ2h0OiAzNi4wNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogMS41cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLy8gaW1nLmNhbS1pY29uIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNzhweDtcclxuLy8gICAgIHJpZ2h0OiA1cHg7XHJcbi8vIH1cclxuLnByby1pbWd7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4udGl0bGUtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcclxufVxyXG5wLm5hbWUtcGFyYSB7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxucC53Yy1wYXJhIHtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kXHQ6d2hpdGUgIWltcG9ydGFudDtcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5taWQtZGl2IHtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDU2cHggMTJweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLm1pZC1zdWItZGl2e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgcGFkZGluZzogMjJweCAxNS41cHggMTNweCAxNHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5wLnAxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG59XHJcbnAucDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbn1cclxuLnAtYmFye1xyXG4gICAgbWFyZ2luLXRvcDogMTUuNXB4O1xyXG59XHJcbnAucDMge1xyXG4gICAgbWFyZ2luOiAxNS41cHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxufVxyXG5pb24tYnV0dG9uLmJ0bi1zbXtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5idG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcclxuICAgIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4uaW1nY2xhc3N7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJ0bjJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxucC5taWQtcDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMC44cHg7XHJcbn1cclxucC5taWQtcDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cHg7XHJcbn1cclxuLmFycm93e1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOXB4O1xyXG59XHJcbi5nYy1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDNweDtcclxufVxyXG4uZ2ltZy1kaXYge1xyXG4gICAgLy8gaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMHB4IDVweCAxNXB4O1xyXG59XHJcbnAuZ3AtZGl2IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5sc3QtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzYsMTgxLDAsMzIlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbnAubHN0LXBhcmEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE4cHggMTRweDtcclxufVxyXG4ubGltZy1kaXYge1xyXG4gICAgd2lkdGg6IDY5JTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmc6IDZweCAxN3B4IDBweDtcclxufVxyXG5cclxuLy8vYm90dG9tIGJhciBjc3MvLy8vXHJcbmlvbi10YWJze1xyXG5cclxuXHRpb24tdGFiLWJhciB7XHJcblx0XHQtLWJvcmRlcjogMDtcclxuXHRcdC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6MDsgcmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjJweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG5cdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOiAyMS41cHg7XHJcbiAgaGVpZ2h0OiAyMS41cHg7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG59XHJcbi5hY3RpdmVpbWd7XHJcblxyXG4gICAgd2lkdGg6IDIxLjVweDtcclxuICAgIGhlaWdodDogMjEuNXB4O1xyXG5cclxufVxyXG5cclxuLmZvbnR7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uZm9udGFjdGl2ZXtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLy8gLmNpbWd7XHJcbi8vICAgb3BhY2l0eTogNjAleTtcclxuLy8gfVxyXG5ocntcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDQ3LjIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzM2cHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyNSUgYXV0byA1JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6ODEycHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjY2N3B4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gNyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo3NDBweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OjY0MHB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gNSU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 2329:
/*!**********************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"--background: #e9e7e7 !important;\">\r\n\r\n\r\n  <div style=\"background:#1A206D;height: 275px;\">\r\n\r\n\r\n    <ion-row class=\"rowcls\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\r\n\r\n        <div style=\"width:100% ;\">\r\n          <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img class=\"pro-img\" src=\"assets/images/user-Filled1.svg\" alt=\"profile\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n\r\n    <div class=\"top-container\">\r\n      <p class=\"name-para\">Lets!</p>\r\n      <p class=\"wc-para\">Explore</p>\r\n\r\n\r\n\r\n\r\n      <div class=\"slide-div\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width:100%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display:flex; align-items: center;\">\r\n      <!-- margin-top: 26px; -->\r\n      <p class=\"mid-p1\">Services</p>\r\n      <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p>\r\n    </div>\r\n\r\n    <ion-grid style=\"padding:0px; width: 100%;\">\r\n\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\" (click)=\"insured()\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get Insured</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\">\r\n          <div class=\"gc-div\" (click)=\"ReportaClaim()\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Report a Claim</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\" (click)=\"RenewPolicy()\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Renew Policy</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\" (click)=\"agentlogin()\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Agent Login</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\">\r\n          <div class=\"gc-div\" (click)=\"verifyPolicy()\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Verify Policy</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\" (click)=\"getintouch()\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get in Touch</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n\r\n    <!-- <div style=\"text-align:center ;\">\r\n      <ion-button class=\"btn\" (click)=\"signInScreen()\">Login</ion-button>\r\n      <ion-button class=\"btn2\" (click)=\"signUpScreen()\" fill=\"outline\">Sign up</ion-button>\r\n    </div> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"display: flex;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 15px 0px;\r\n  background: #1A206D;\r\n  border-radius: 32px 32px 0px 0px;\">\r\n    <hr>\r\n    <div (click)=\"tab1Click()\">\r\n\r\n      <img src=\"assets/images/icons/login.svg\" class=\"img\">\r\n\r\n\r\n      <div class=\"font\">Sign up</div>\r\n    </div>\r\n    <div (click)=\"tab2Click()\">\r\n      <img src=\"assets/images/discover.svg\" class=\"activeimg\">\r\n      <div class=\"fontactive\">Discover</div>\r\n    </div>\r\n    <div (click)=\"tab3Click()\">\r\n      <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\r\n      <div class=\"font\">Sign In</div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-tabs style=\"top:10px !important;\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr>\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/icons/login.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Sign up</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\">\r\n        <ion-label class=\"fontactive\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Sign In</ion-label>\r\n\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs> -->\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login_explore-screen-before-login_module_ts.js.map