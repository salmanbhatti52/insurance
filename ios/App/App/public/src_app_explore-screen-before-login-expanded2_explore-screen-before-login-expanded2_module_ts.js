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
/* harmony import */ var _Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_screen_before_login_expanded2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2.page.html?ngResource */ 41340);
/* harmony import */ var _explore_screen_before_login_expanded2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-screen-before-login-expanded2.page.scss?ngResource */ 10376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);








let ExploreScreenBeforeLoginExpanded2Page = class ExploreScreenBeforeLoginExpanded2Page {
  constructor(navCtrl, router, location, actionSheetCtrl) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.location = location;
    this.actionSheetCtrl = actionSheetCtrl;
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

    return (0,_Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

};

ExploreScreenBeforeLoginExpanded2Page.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 31.1px;\n  width: 31.1px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  left: 14%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  .container {\n    width: 85%;\n    margin: 30% auto 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQU5KOztBQVFBO0VBRUksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFOSjs7QUFRQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFRQTtFQUNJLHdDQUFBO0VBQ0EsK0NBQUE7QUFMSjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUhBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtBQUtKOztBQUhBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVVKOztBQUpDO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixXQUFBO0VBQ0UsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFRSjs7QUFQRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQVNIOztBQVBFO0VBQ0ksbUJBQUE7QUFTTjs7QUFSTTtFQUNFLGNBQUE7QUFVUjs7QUFQRTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUFTSDs7QUFQRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUFTSDs7QUFGQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBRUksYUFBQTtFQUNBLGNBQUE7QUFLSjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFKQTtFQUVFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFFRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFJRjs7RUFGQTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0JBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBSUY7QUFDRjs7QUFGQTtFQVVFO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJleHBsb3JlLXNjcmVlbi1iZWZvcmUtbG9naW4tZXhwYW5kZWQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXJ7XG4vLyAgICAgd2lkdGg6IDg1JTtcbi8vICAgICBtYXJnaW46MHB4IGF1dG87XG4vLyB9XG5cbi50b3AtY29udGFpbmVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAlIGF1dG87XG59XG4uY29udGFpbmVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDE1JSBhdXRvO1xufVxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDM2LjA2cHg7XG4gICAgaGVpZ2h0OiAzNi4wNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgcGFkZGluZzogMS41cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLy8gaW1nLmNhbS1pY29uIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiA3OHB4O1xuLy8gICAgIHJpZ2h0OiA1cHg7XG4vLyB9XG4ucHJvLWltZ3tcbiAgICBoZWlnaHQ6IDMxLjFweDtcbiAgICB3aWR0aDogMzEuMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50aXRsZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbn1cbnAubmFtZS1wYXJhIHtcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxucC53Yy1wYXJhIHtcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuaW9uLXNsaWRlc3tcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZFx0OndoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQtYWN0aXZlOndoaXRlICFpbXBvcnRhbnQ7XG59XG4ubWlkLWRpdiB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggNTZweCAxMnB4IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5taWQtc3ViLWRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgcGFkZGluZzogMjJweCAxNS41cHggMTNweCAxNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxucC5wMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG59XG5wLnAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbn1cbi5wLWJhcntcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XG59XG5wLnAzIHtcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xufVxuaW9uLWJ1dHRvbi5idG4tc217XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiA3MXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbnAubWlkLXAxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAwLjhweDtcbn1cbnAubWlkLXAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cHg7XG59XG4uYXJyb3d7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDlweDtcbn1cbi5nYy1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBoZWlnaHQ6IDEwM3B4O1xufVxuLmdpbWctZGl2IHtcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbn1cbi5pbWdjbGFzc3tcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5wLmdwLWRpdiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmxzdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxucC5sc3QtcGFyYSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMThweCAxNHB4O1xufVxuLmxpbWctZGl2IHtcbiAgICB3aWR0aDogNjklO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiA2cHggMTdweCAwcHg7XG59XG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuaW9uLXRhYnN7XG5cblx0aW9uLXRhYi1iYXIge1xuXHRcdC0tYm9yZGVyOiAwO1xuXHRcdC0tYmFja2dyb3VuZDogIzFBMjA2RDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6MDsgcmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgbWF4LWhlaWdodDogNjJweDtcbiAgICBoZWlnaHQ6NjBweDtcblx0XHQmOmFmdGVye1xuXHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDojMUEyMDZEO1xuICAgICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XG4gICAgICB9XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcblx0XHR9XG5cblx0fVxuXG59XG5cbi5pbWd7XG4gIHdpZHRoOiAyMS41cHg7XG4gIGhlaWdodDogMjEuNXB4O1xuICBvcGFjaXR5OiA2MCU7XG59XG4uYWN0aXZlaW1ne1xuXG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcblxufVxuXG4uZm9udHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiA2MCU7XG59XG4uZm9udGFjdGl2ZXtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmNpbWd7XG4gIG9wYWNpdHk6IDYwJXk7XG59XG5ociB7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAxNCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkgYW5kIChtaW4taGVpZ2h0OjczNnB4KXtcblxuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIGxlZnQ6IDE0JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbiAgLmNvbnRhaW5lcntcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjUlIGF1dG8gMjUlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogMTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6NjY3cHgpe1xuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIGxlZnQ6IDE0JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OjY0MHB4KXtcbiAgLy8gaHJ7XG4gIC8vICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgLy8gICB3aWR0aDogMjBweDtcbiAgLy8gICBoZWlnaHQ6IDZweDtcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgdG9wOiA1NXB4O1xuICAvLyAgIHJpZ2h0OiA0Ny4yJTtcbiAgLy8gICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC8vIH1cbiAgLmNvbnRhaW5lcntcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMzAlIGF1dG8gMTUlO1xuICB9XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 41340:
/*!******************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.page.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header> -->\n<ion-content>\n  <div style=\"background:#1A206D;height: 250px;\">\n    <ion-row style=\"display: flex;\n    align-items: center;padding-top:5%;\">\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <!-- <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\"> -->\n      </ion-col>\n\n\n    </ion-row>\n    <div class=\"top-container\">\n      <p class=\"name-para\">Lets!</p>\n      <p class=\"wc-para\">Explore</p>\n\n\n\n\n      <div class=\"slide-div\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%;\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" *ngIf=\"btnshow==true\" (click)=\"learnmore()\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width:100% ;\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%;\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" *ngIf=\"btnshow==true\" (click)=\"learnmore2()\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width:100% ;\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%;\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" *ngIf=\"btnshow==true\" (click)=\"learnmore3()\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width:100% ;\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n        </ion-slides>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"container\">\n\n    <div style=\"display:flex; align-items: center;\">\n      <p class=\"mid-p1\">PRODUCTS</p>\n      <!-- <p class=\"mid-p2\" (click)=\"toogleShow()\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"\n          *ngIf=\"!show\"> <img class=\"arrow\" src=\"assets/images/arrow-up.svg\" alt=\"\" *ngIf=\"show\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding:0px; width: 100%;\">\n      <ion-row style=\"margin-top:16px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/car.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Motor Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/travel.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Travel Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/safe-hand.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Home Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/mortarboard.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">School Fees Guarantee</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/investment1.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Investment Plans</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/marine.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Marine Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/truck.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Goods In Transit</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/home-at-fire.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Combined Fire and Burglary</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/drone.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Drone Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/moto-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">My Moto Shield</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/protection-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Gadget Protection Plan</p>\n          </div>\n        </ion-col>\n      </ion-row> -->\n\n    </ion-grid>\n\n    <div style=\"display:flex; align-items: center; margin-top: 26px;\">\n      <p class=\"mid-p1\">Services</p>\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding:0px; width: 100%;\">\n\n      <ion-row style=\"margin-top:16px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Get Insured</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Report a Claim</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Renew Policy</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\">\n        <!-- <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Agent Login</p>\n          </div>\n        </ion-col> -->\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Verify Policy</p>\n          </div>\n        </ion-col>\n\n        <!-- <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Get in Touch</p>\n          </div>\n        </ion-col> -->\n      </ion-row>\n\n    </ion-grid>\n\n    <div style=\"height: 20px;\"></div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-tabs style=\"top:10px !important;\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr>\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\">\n        <ion-label class=\"fontactive\">Discover</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"img\">\n        <ion-label class=\"font\">Home</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"presentActionSheet()\">\n        <img src=\"assets/images/contactus.svg\" class=\"img\">\n        <ion-label class=\"font\">Contact Us</ion-label>\n\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login-expanded2_explore-screen-before-login-expanded2_module_ts.js.map