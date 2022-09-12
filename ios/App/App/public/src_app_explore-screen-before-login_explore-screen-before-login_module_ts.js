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

module.exports = ".cheader {\n  background: #1A206D !important;\n}\n\n.top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 20px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #FFFFFF;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\n.btn {\n  width: 80%;\n  height: 48px;\n  margin-top: 10px;\n  border-color: #A8B400;\n  --background: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\n.btn2 {\n  width: 80%;\n  height: 48px;\n  margin-top: 20px;\n  --border-color: #A8B400;\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-radius: 12px;\n  font-family: Bliss Pro;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n  height: 103px;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 5% auto 10%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 5% auto 15%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSw4QkFBQTtBQUhGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBREY7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0FBSko7O0FBTUE7RUFFSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUpKOztBQU1BO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1BO0VBQ0ksd0NBQUE7RUFDQSwrQ0FBQTtBQUhKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0FBRko7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFB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QUNBLG1CQUFBO0VBTUY7QUFDRjs7QUFIQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoiZXhwbG9yZS1zY3JlZW4tYmVmb3JlLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXJ7XHJcbi8vICAgICB3aWR0aDogODUlO1xyXG4vLyAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4vLyB9XHJcbi5jaGVhZGVye1xyXG4gIGJhY2tncm91bmQ6ICMxQTIwNkQgIWltcG9ydGFudDtcclxufVxyXG4udG9wLWNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDM2LjA2cHg7XHJcbiAgICBoZWlnaHQ6IDM2LjA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAxLjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vLyBpbWcuY2FtLWljb24ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA3OHB4O1xyXG4vLyAgICAgcmlnaHQ6IDVweDtcclxuLy8gfVxyXG4ucHJvLWltZ3tcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi50aXRsZS1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG59XHJcbnAubmFtZS1wYXJhIHtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5wLndjLXBhcmEge1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5pb24tc2xpZGVze1xyXG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmRcdDp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQtYWN0aXZlOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pZC1kaXYge1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggNTZweCAxMnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubWlkLXN1Yi1kaXZ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDE1LjVweCAxM3B4IDE0cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnAucDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxucC5wMiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxufVxyXG4ucC1iYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XHJcbn1cclxucC5wMyB7XHJcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG59XHJcbmlvbi1idXR0b24uYnRuLXNte1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDcxcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi5pbWdjbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuMntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNBOEI0MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG5wLm1pZC1wMSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjhweDtcclxufVxyXG5wLm1pZC1wMiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhweDtcclxufVxyXG4uYXJyb3d7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA5cHg7XHJcbn1cclxuLmdjLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwM3B4O1xyXG59XHJcbi5naW1nLWRpdiB7XHJcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHg7XHJcbn1cclxucC5ncC1kaXYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmxzdC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NiwxODEsMCwzMiUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxucC5sc3QtcGFyYSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMThweCAxNHB4O1xyXG59XHJcbi5saW1nLWRpdiB7XHJcbiAgICB3aWR0aDogNjklO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogNnB4IDE3cHggMHB4O1xyXG59XHJcblxyXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cclxuaW9uLXRhYnN7XHJcblxyXG5cdGlvbi10YWItYmFyIHtcclxuXHRcdC0tYm9yZGVyOiAwO1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDowOyByaWdodDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MnB4O1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcblx0XHQmOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDojMUEyMDZEO1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjojNDI0NzRGO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6IDIxLjVweDtcclxuICBoZWlnaHQ6IDIxLjVweDtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmFjdGl2ZWltZ3tcclxuXHJcbiAgICB3aWR0aDogMjEuNXB4O1xyXG4gICAgaGVpZ2h0OiAyMS41cHg7XHJcblxyXG59XHJcblxyXG4uZm9udHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG59XHJcbi5mb250YWN0aXZle1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4vLyAuY2ltZ3tcclxuLy8gICBvcGFjaXR5OiA2MCV5O1xyXG4vLyB9XHJcbmhye1xyXG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICByaWdodDogNDcuMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE0cHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny40JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG8gMTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6NjY3cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 2329:
/*!**********************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login/explore-screen-before-login.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"--background: #e9e7e7 !important;\">\r\n\r\n\r\n  <div style=\"background:#1A206D;\">\r\n\r\n\r\n    <ion-row style=\"display: flex;align-items: center;padding-top: 5%;\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\r\n\r\n        <div style=\"width:100% ;\">\r\n          <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img class=\"pro-img\" src=\"assets/images/user-Filled1.svg\" alt=\"profile\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n\r\n    <div class=\"top-container\">\r\n      <p class=\"name-para\">Lets!</p>\r\n      <p class=\"wc-para\">Explore</p>\r\n\r\n\r\n\r\n\r\n      <div class=\"slide-div\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width:100%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%;\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\">Learn more</ion-button>\r\n                </div>\r\n                <div>\r\n                  <div style=\"width:100% ;\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display:flex; align-items: center;\">\r\n      <!-- margin-top: 26px; -->\r\n      <p class=\"mid-p1\">Services</p>\r\n      <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p>\r\n    </div>\r\n\r\n    <ion-grid style=\"padding:0px; width: 100%;\">\r\n\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get Insured</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Report a Claim</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Renew Policy</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Agent Login</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Verify Policy</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get in Touch</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n\r\n    <!-- <div style=\"text-align:center ;\">\r\n      <ion-button class=\"btn\" (click)=\"signInScreen()\">Login</ion-button>\r\n      <ion-button class=\"btn2\" (click)=\"signUpScreen()\" fill=\"outline\">Sign up</ion-button>\r\n    </div> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"display: flex;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  padding: 15px 0px;\r\n  background: #1A206D;\r\n  border-radius: 32px 32px 0px 0px;\">\r\n    <hr>\r\n    <div (click)=\"tab1Click()\">\r\n\r\n      <img src=\"assets/images/icons/login.svg\" class=\"img\">\r\n\r\n\r\n      <div class=\"font\">Sign up</div>\r\n    </div>\r\n    <div (click)=\"tab2Click()\">\r\n      <img src=\"assets/images/discover.svg\" class=\"activeimg\">\r\n      <div class=\"fontactive\">Discover</div>\r\n    </div>\r\n    <div (click)=\"tab3Click()\">\r\n      <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\r\n      <div class=\"font\">Sign In</div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-tabs style=\"top:10px !important;\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr>\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/icons/login.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Sign up</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\">\r\n        <ion-label class=\"fontactive\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/icons/pro-ava.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Sign In</ion-label>\r\n\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs> -->\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login_explore-screen-before-login_module_ts.js.map