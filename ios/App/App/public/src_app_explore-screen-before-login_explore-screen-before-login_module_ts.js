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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explore_screen_before_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login.page.html?ngResource */ 2329);
/* harmony import */ var _explore_screen_before_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login.page.scss?ngResource */ 9942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ExploreScreenBeforeLoginPage = class ExploreScreenBeforeLoginPage {
    constructor(router, navCtrl, menuCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.show = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
    }
    // ionViewDidEnter() {
    //   this.menuCtrl.enable(false);
    //   // this.RegisterForm.reset();
    // }
    // ionViewWillLeave() {
    //   // enable the root left menu when leaving this page
    //   this.menuCtrl.enable(true);
    // }
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
ExploreScreenBeforeLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = ".cheader {\n  background: #1A206D !important;\n}\n\n.rowcls {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .rowcls {\n  display: flex;\n  align-items: center;\n  padding-top: 7.5%;\n}\n\n.top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 20px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #FFFFFF;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  margin-top: 10px;\n  border-color: #A8B400;\n  --background: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\n.btn2 {\n  width: 80%;\n  height: 48px;\n  margin-top: 20px;\n  --border-color: #A8B400;\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n  height: 103px;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 7%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSw4QkFBQTtBQUhGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQUpKOztBQU1BO0VBRUkscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFKSjs7QUFNQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFNQTtFQUNJLHdDQUFBO0VBQ0EsK0NBQUE7QUFISjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JB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O0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFLRjtBQUNGIiwiZmlsZSI6ImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xyXG4vLyAgICAgd2lkdGg6IDg1JTtcclxuLy8gICAgIG1hcmdpbjowcHggYXV0bztcclxuLy8gfVxyXG4uY2hlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjMUEyMDZEICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvd2Nsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbi5pb3N7XHJcbiAgLnJvd2Nsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDcuNSU7XHJcbiAgfVxyXG59XHJcbi50b3AtY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzYuMDZweDtcclxuICAgIGhlaWdodDogMzYuMDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmc6IDEuNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8vIGltZy5jYW0taWNvbiB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDc4cHg7XHJcbi8vICAgICByaWdodDogNXB4O1xyXG4vLyB9XHJcbi5wcm8taW1ne1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRpdGxlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn1cclxucC5uYW1lLXBhcmEge1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnAud2MtcGFyYSB7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZFx0OndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubWlkLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCA1NnB4IDEycHggMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5taWQtc3ViLWRpdntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHBhZGRpbmc6IDIycHggMTUuNXB4IDEzcHggMTRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxucC5wMSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxufVxyXG5wLnAyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG59XHJcbi5wLWJhcntcclxuICAgIG1hcmdpbi10b3A6IDE1LjVweDtcclxufVxyXG5wLnAzIHtcclxuICAgIG1hcmdpbjogMTUuNXB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbn1cclxuaW9uLWJ1dHRvbi5idG4tc217XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogNzFweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmltZ2NsYXNze1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4ye1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0E4QjQwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbnAubWlkLXAxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHB4O1xyXG59XHJcbnAubWlkLXAyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHB4O1xyXG59XHJcbi5hcnJvd3tcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDlweDtcclxufVxyXG4uZ2MtZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAzcHg7XHJcbn1cclxuLmdpbWctZGl2IHtcclxuICAgIC8vIGhlaWdodDogODVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcclxufVxyXG5wLmdwLWRpdiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubHN0LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5wLmxzdC1wYXJhIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XHJcbn1cclxuLmxpbWctZGl2IHtcclxuICAgIHdpZHRoOiA2OSU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTdweCAwcHg7XHJcbn1cclxuXHJcbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xyXG5pb24tdGFic3tcclxuXHJcblx0aW9uLXRhYi1iYXIge1xyXG5cdFx0LS1ib3JkZXI6IDA7XHJcblx0XHQtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYycHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuXHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuLmltZ3tcclxuICB3aWR0aDogMjEuNXB4O1xyXG4gIGhlaWdodDogMjEuNXB4O1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uYWN0aXZlaW1ne1xyXG5cclxuICAgIHdpZHRoOiAyMS41cHg7XHJcbiAgICBoZWlnaHQ6IDIxLjVweDtcclxuXHJcbn1cclxuXHJcbi5mb250e1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmZvbnRhY3RpdmV7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi8vIC5jaW1ne1xyXG4vLyAgIG9wYWNpdHk6IDYwJXk7XHJcbi8vIH1cclxuaHJ7XHJcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHJpZ2h0OiA0Ny4yJTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkgYW5kIChtaW4taGVpZ2h0OjczNnB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gNSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjgxMnB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo2NjdweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDI1JSBhdXRvIDclO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 2329:
/*!**********************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"--background: #e9e7e7 !important;\">\r\n\r\n\r\n  <div style=\"background:#1A206D;height: 275px;\">\r\n\r\n\r\n    <ion-row class=\"rowcls\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\r\n\r\n        <div style=\"width:100% ;\">\r\n          <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img class=\"pro-img\" src=\"assets/images/user-Filled1.svg\" alt=\"profile\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n\r\n    <div class=\"top-container\">\r\n      <p class=\"name-para\">Lets!</p>\r\n      <p class=\"wc-para\">Explore</p>\r\n\r\n\r\n\r\n\r\n      <div class=\"slide-div\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width:100%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display:flex; align-items: center;\">\r\n      <!-- margin-top: 26px; -->\r\n      <p class=\"mid-p1\">Services</p>\r\n      <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p>\r\n    </div>\r\n\r\n    <ion-grid style=\"padding:0px; width: 100%;\">\r\n\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get Insured</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Report a Claim</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Renew Policy</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Agent Login</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Verify Policy</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get in Touch</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n\r\n    <!-- <div style=\"text-align:center ;\">\r\n      <ion-button class=\"btn\" (click)=\"signInScreen()\">Login</ion-button>\r\n      <ion-button class=\"btn2\" (click)=\"signUpScreen()\" fill=\"outline\">Sign up</ion-button>\r\n    </div> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"display: flex;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 15px 0px;\r\n  background: #1A206D;\r\n  border-radius: 32px 32px 0px 0px;\">\r\n    <hr>\r\n    <div (click)=\"tab1Click()\">\r\n\r\n      <img src=\"assets/images/icons/login.svg\" class=\"img\">\r\n\r\n\r\n      <div class=\"font\">Sign up</div>\r\n    </div>\r\n    <div (click)=\"tab2Click()\">\r\n      <img src=\"assets/images/discover.svg\" class=\"activeimg\">\r\n      <div class=\"fontactive\">Discover</div>\r\n    </div>\r\n    <div (click)=\"tab3Click()\">\r\n      <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\r\n      <div class=\"font\">Sign In</div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-tabs style=\"top:10px !important;\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr>\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/icons/login.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Sign up</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\">\r\n        <ion-label class=\"fontactive\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Sign In</ion-label>\r\n\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs> -->\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login_explore-screen-before-login_module_ts.js.map