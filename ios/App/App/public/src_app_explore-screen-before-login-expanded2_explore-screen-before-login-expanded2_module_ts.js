"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_explore-screen-before-login-expanded2_explore-screen-before-login-expanded2_module_ts"],{

/***/ 63404:
/*!***************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded2/explore-screen-before-login-expanded2-routing.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginExpanded2PageRoutingModule": () => (/* binding */ ExploreScreenBeforeLoginExpanded2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _explore_screen_before_login_expanded2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2.page */ 53023);




const routes = [
    {
        path: '',
        component: _explore_screen_before_login_expanded2_page__WEBPACK_IMPORTED_MODULE_0__.ExploreScreenBeforeLoginExpanded2Page
    }
];
let ExploreScreenBeforeLoginExpanded2PageRoutingModule = class ExploreScreenBeforeLoginExpanded2PageRoutingModule {
};
ExploreScreenBeforeLoginExpanded2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExploreScreenBeforeLoginExpanded2PageRoutingModule);



/***/ }),

/***/ 78937:
/*!*******************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginExpanded2PageModule": () => (/* binding */ ExploreScreenBeforeLoginExpanded2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_screen_before_login_expanded2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2-routing.module */ 63404);
/* harmony import */ var _explore_screen_before_login_expanded2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2.page */ 53023);







let ExploreScreenBeforeLoginExpanded2PageModule = class ExploreScreenBeforeLoginExpanded2PageModule {
};
ExploreScreenBeforeLoginExpanded2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _explore_screen_before_login_expanded2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExploreScreenBeforeLoginExpanded2PageRoutingModule
        ],
        declarations: [_explore_screen_before_login_expanded2_page__WEBPACK_IMPORTED_MODULE_1__.ExploreScreenBeforeLoginExpanded2Page]
    })
], ExploreScreenBeforeLoginExpanded2PageModule);



/***/ }),

/***/ 53023:
/*!*****************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.page.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginExpanded2Page": () => (/* binding */ ExploreScreenBeforeLoginExpanded2Page)
/* harmony export */ });
/* harmony import */ var _Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_screen_before_login_expanded2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2.page.html?ngResource */ 41340);
/* harmony import */ var _explore_screen_before_login_expanded2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2.page.scss?ngResource */ 10376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);








let ExploreScreenBeforeLoginExpanded2Page = class ExploreScreenBeforeLoginExpanded2Page {
  constructor(navCtrl, router, location, actionSheetCtrl, menuCtrl) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.location = location;
    this.actionSheetCtrl = actionSheetCtrl;
    this.menuCtrl = menuCtrl;
    this.show = false;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    this.btnshow = false;
  }

  ngOnInit() {
    if (localStorage.getItem('userid') == null) {
      this.btnshow = false;
    } else {
      this.btnshow = true;
    }
  }

  claim() {// this.navCtrl.navigateForward('makeaclaim')
  }

  toogleShow() {
    this.show = !this.show;
  }

  tab1Click() {
    this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }

  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }

  tab3Click() {
    this.navCtrl.navigateRoot('contactus');
  }

  updateProfile() {
    this.router.navigate(['/profile-update']);
  }

  learnmore() {
    this.router.navigate(['/claimassistance']);
  }

  learnmore2() {
    this.router.navigate(['/claimassistance2']);
  }

  learnmore3() {
    this.router.navigate(['/claimassistance3']);
  }

  presentActionSheet() {
    var _this = this;

    return (0,_Volumes_Office_Ali_github_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.navCtrl.navigateRoot('contactus'); // const actionSheet = await this.actionSheetCtrl.create({
      //   buttons: [
      // {
      //   text: 'Chat with an agent',
      //   data: {
      //     action: 'caht',
      //   },
      // },
      // {
      //   text: 'Make Enquiry',
      //   data: {
      //     action: 'enquiry',
      //   },
      // },
      //     {
      //       text: 'Our Locations',
      //       data: {
      //         action: 'location',
      //       },
      //     }
      //   ],
      // });
      // await actionSheet.present();
      // const result = await actionSheet.onDidDismiss();
      // this.result = JSON.stringify(result, null, 2);
      // console.log('res----',result);
      // if(result.data.action == 'location'){
      //   this.navCtrl.navigateRoot('contactus');
      // }

    })();
  }

  gotologin() {
    this.navCtrl.navigateRoot('sign-in-screen');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

};

ExploreScreenBeforeLoginExpanded2Page.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}];

ExploreScreenBeforeLoginExpanded2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-explore-screen-before-login-expanded2',
  template: _explore_screen_before_login_expanded2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_explore_screen_before_login_expanded2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExploreScreenBeforeLoginExpanded2Page);


/***/ }),

/***/ 10376:
/*!******************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.page.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 31.1px;\n  width: 31.1px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  left: 14%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  .container {\n    width: 85%;\n    margin: 30% auto 15%;\n  }\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQU5KOztBQVFBO0VBRUksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFOSjs7QUFRQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFRQTtFQUNJLHdDQUFBO0VBQ0EsK0NBQUE7QUFMSjs7QUFjQTtFQUtJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFmSjs7QUFpQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBYko7O0FBZUE7RUFDSSxrQkFBQTtBQVpKOztBQWNBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWEo7O0FBYUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVZKOztBQVlBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFB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QUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTNCSjs7QUE0QkU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUExQkg7O0FBNEJFO0VBQ0ksbUJBQUE7QUExQk47O0FBMkJNO0VBQ0UsY0FBQTtBQXpCUjs7QUE0QkU7RUFDQyxpQkFBQTtFQUNBLDZCQUFBO0FBMUJIOztBQTRCRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUExQkg7O0FBaUNBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBOUJGIiwiZmlsZSI6ImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlcntcbi8vICAgICB3aWR0aDogODUlO1xuLy8gICAgIG1hcmdpbjowcHggYXV0bztcbi8vIH1cblxuLnRvcC1jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0bztcbn1cbi5jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTUlIGF1dG87XG59XG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMzYuMDZweDtcbiAgICBoZWlnaHQ6IDM2LjA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBwYWRkaW5nOiAxLjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vLyBpbWcuY2FtLWljb24ge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDc4cHg7XG4vLyAgICAgcmlnaHQ6IDVweDtcbi8vIH1cbi5wcm8taW1ne1xuICAgIGhlaWdodDogMzEuMXB4O1xuICAgIHdpZHRoOiAzMS4xcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnRpdGxlLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xufVxucC5uYW1lLXBhcmEge1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5wLndjLXBhcmEge1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5pb24tc2xpZGVze1xuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kXHQ6d2hpdGUgIWltcG9ydGFudDtcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6d2hpdGUgIWltcG9ydGFudDtcbn1cbi5taWQtZGl2IHtcbiAgLy8gaGVpZ2h0OiAxNzBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogMTJweCA1NnB4IDEycHggMTJweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xuICAvLyBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLm1pZC1zdWItZGl2e1xuICAgIC8vIGRpc3BsYXk6ZmxleDtcbiAgICAvLyBwYWRkaW5nOiAyMnB4IDE1LjVweCAxM3B4IDE0cHg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggN3B4IDE5cHggN3B4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxucC5wMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG59XG5wLnAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbn1cbi5wLWJhcntcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XG59XG5wLnAzIHtcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xufVxuaW9uLWJ1dHRvbi5idG4tc217XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiA3MXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbnAubWlkLXAxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAwLjhweDtcbn1cbnAubWlkLXAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cHg7XG59XG4uYXJyb3d7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDlweDtcbn1cbi5nYy1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBoZWlnaHQ6IDEwM3B4O1xufVxuLmdpbWctZGl2IHtcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbn1cbi5pbWdjbGFzc3tcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5wLmdwLWRpdiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmxzdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxucC5sc3QtcGFyYSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMThweCAxNHB4O1xufVxuLmxpbWctZGl2IHtcbiAgICB3aWR0aDogNjklO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiA2cHggMTdweCAwcHg7XG59XG5cblxuLmltZ3tcbiAgd2lkdGg6IDIxLjVweDtcbiAgaGVpZ2h0OiAyMS41cHg7XG4gIG9wYWNpdHk6IDYwJTtcbn1cbi5hY3RpdmVpbWd7XG5cbiAgICB3aWR0aDogMjEuNXB4O1xuICAgIGhlaWdodDogMjEuNXB4O1xuXG59XG5cbi5mb250e1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDYwJTtcbn1cbi5mb250YWN0aXZle1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY2ltZ3tcbiAgb3BhY2l0eTogNjAleTtcbn1cbmhyIHtcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMTQlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KXtcblxuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIGxlZnQ6IDE0JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzM2cHgpe1xuXG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogMTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byAyNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjgxMnB4KXtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAxNCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo2NjdweCl7XG4gIC5jb250YWluZXJ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDI1JSBhdXRvIDEyJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo3NDBweCl7XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogMTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjQwcHgpe1xuICAvLyBocntcbiAgLy8gICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAvLyAgIHdpZHRoOiAyMHB4O1xuICAvLyAgIGhlaWdodDogNnB4O1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICB0b3A6IDU1cHg7XG4gIC8vICAgcmlnaHQ6IDQ3LjIlO1xuICAvLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLy8gfVxuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAzMCUgYXV0byAxNSU7XG4gIH1cbn1cblxuLmlvcyAuY29udGFpbmVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDI1JSAxNyUgMjQlIDglO1xufVxuXG5cblxuXG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuLm1kIGlvbi10YWJze1xuXG5cdGlvbi10YWItYmFyIHtcblx0XHQtLWJvcmRlcjogMDtcblx0XHQtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDYycHg7XG4gICAgaGVpZ2h0OjYwcHg7XG5cdFx0JjphZnRlcntcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcbiAgICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjojNDI0NzRGO1xuICAgICAgfVxuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXG5cdH1cblxufVxuXG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuLmlvcyBpb24tdGFic3tcblxuXHRpb24tdGFiLWJhciB7XG4gICAgLS1ib3JkZXI6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCA0NXB4IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDY1cHg7XG4gICAgaGVpZ2h0OiA2MnB4O1xuXHRcdCY6YWZ0ZXJ7XG5cdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcbiAgICAgIH1cblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblxuXHR9XG5cbn1cblxuLmlvcyAuY29udGFpbmVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDI1JSAxNyUgMjQlIDglO1xufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 41340:
/*!******************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.page.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header> -->\n<ion-content>\n  <div style=\"background: #1a206d; height: 250px\">\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\n      <ion-col size=\"10\" style=\"padding-left: 27px\"> </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <!-- <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\"> -->\n      </ion-col>\n    </ion-row>\n    <div class=\"top-container\" style=\"margin-top: 20px\">\n      <p class=\"name-para\">Lets!</p>\n      <p class=\"wc-para\">Explore</p>\n\n      <div class=\"slide-div\" style=\"margin-top: 20px\">\n        <ion-slides\n          pager=\"true\"\n          [options]=\"slideOpts\"\n          scrollbar=\"true\"\n          (ionSlideDidChange)=\"active-slide\"\n        >\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button\n                    class=\"btn-sm\"\n                    *ngIf=\"btnshow==true\"\n                    (click)=\"learnmore()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                <div style=\"width: 100%\" (click)=\"learnmore()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt1.jpg\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button\n                    class=\"btn-sm\"\n                    *ngIf=\"btnshow==true\"\n                    (click)=\"learnmore2()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt2.jpg\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button\n                    class=\"btn-sm\"\n                    *ngIf=\"btnshow==true\"\n                    (click)=\"learnmore3()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt3.png\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div style=\"display: flex; align-items: center\">\n      <p class=\"mid-p1\">PRODUCTS</p>\n      <!-- <p class=\"mid-p2\" (click)=\"toogleShow()\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"\n          *ngIf=\"!show\"> <img class=\"arrow\" src=\"assets/images/arrow-up.svg\" alt=\"\" *ngIf=\"show\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding: 0px; width: 100%\">\n      <ion-row style=\"margin-top: 16px\">\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px 6px 6px 0px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/car.svg\" alt=\"\" />\n            </div>\n            <p class=\"gp-div\">Motor Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/travel.svg\" alt=\"\" />\n            </div>\n            <p class=\"gp-div\">Travel Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px 0px 6px 6px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/safe-hand.svg\" alt=\"\" />\n            </div>\n            <p class=\"gp-div\">Home Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/mortarboard.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">School Fees Guarantee</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/investment1.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Investment Plans</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/marine.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Marine Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/truck.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Goods In Transit</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/home-at-fire.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Combined Fire and Burglary</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/drone.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Drone Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/moto-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">My Moto Shield</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/protection-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Gadget Protection Plan</p>\n          </div>\n        </ion-col>\n      </ion-row> -->\n    </ion-grid>\n\n    <div style=\"display: flex; align-items: center; margin-top: 26px\">\n      <p class=\"mid-p1\">Services</p>\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding: 0px; width: 100%\">\n      <ion-row style=\"margin-top: 16px\">\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px 6px 6px 0px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/get-insured.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Get Insured</p>\n          </div>\n        </ion-col>\n\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/report-claim.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Report a Claim</p>\n          </div>\n        </ion-col>\n\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px 0px 6px 6px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img\n                class=\"imgclass\"\n                src=\"assets/images/renew-policy.svg\"\n                alt=\"\"\n              />\n            </div>\n            <p class=\"gp-div\">Renew Policy</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 10px\">\n        <!-- <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Agent Login</p>\n          </div>\n        </ion-col> -->\n\n        <ion-col\n          size=\"4\"\n          style=\"padding: 6px; width: 100%\"\n          (click)=\"gotologin()\"\n        >\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\" />\n            </div>\n            <p class=\"gp-div\">Verify Policy</p>\n          </div>\n        </ion-col>\n\n        <!-- <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Get in Touch</p>\n          </div>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n\n    <div style=\"height: 20px\"></div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-tabs style=\"top: 10px !important\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr />\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\" />\n        <ion-label class=\"fontactive\">Discover</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"img\" />\n        <ion-label class=\"font\">Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"presentActionSheet()\">\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\n        <ion-label class=\"font\">Contact Us</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login-expanded2_explore-screen-before-login-expanded2_module_ts.js.map