"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts"],{

/***/ 96932:
/*!*************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginExpandedPageRoutingModule": () => (/* binding */ ExploreScreenBeforeLoginExpandedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _explore_screen_before_login_expanded_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login-expanded.page */ 49833);




const routes = [
    {
        path: '',
        component: _explore_screen_before_login_expanded_page__WEBPACK_IMPORTED_MODULE_0__.ExploreScreenBeforeLoginExpandedPage
    }
];
let ExploreScreenBeforeLoginExpandedPageRoutingModule = class ExploreScreenBeforeLoginExpandedPageRoutingModule {
};
ExploreScreenBeforeLoginExpandedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExploreScreenBeforeLoginExpandedPageRoutingModule);



/***/ }),

/***/ 93291:
/*!*****************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginExpandedPageModule": () => (/* binding */ ExploreScreenBeforeLoginExpandedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_screen_before_login_expanded_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-screen-before-login-expanded-routing.module */ 96932);
/* harmony import */ var _explore_screen_before_login_expanded_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login-expanded.page */ 49833);







let ExploreScreenBeforeLoginExpandedPageModule = class ExploreScreenBeforeLoginExpandedPageModule {
};
ExploreScreenBeforeLoginExpandedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _explore_screen_before_login_expanded_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExploreScreenBeforeLoginExpandedPageRoutingModule
        ],
        declarations: [_explore_screen_before_login_expanded_page__WEBPACK_IMPORTED_MODULE_1__.ExploreScreenBeforeLoginExpandedPage]
    })
], ExploreScreenBeforeLoginExpandedPageModule);



/***/ }),

/***/ 49833:
/*!***************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.page.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreScreenBeforeLoginExpandedPage": () => (/* binding */ ExploreScreenBeforeLoginExpandedPage)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_screen_before_login_expanded_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login-expanded.page.html?ngResource */ 8986);
/* harmony import */ var _explore_screen_before_login_expanded_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-screen-before-login-expanded.page.scss?ngResource */ 42355);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);










let ExploreScreenBeforeLoginExpandedPage = class ExploreScreenBeforeLoginExpandedPage {
  constructor(navCtrl, router, location, actionSheetCtrl, api, menuCtrl, iab, platform) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.location = location;
    this.actionSheetCtrl = actionSheetCtrl;
    this.api = api;
    this.menuCtrl = menuCtrl;
    this.iab = iab;
    this.platform = platform;
    this.show = false;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    this.btnshow = false;
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);

    if (localStorage.getItem('userid') == null) {
      this.api.presenttoast('Please Login First');
      this.router.navigate(['/sign-in-screen']);
    } else {
      this.getProducts();
    }
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
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.platform.is('android')) {
        _this.router.navigate(['/contactus']);
      } else {
        const actionSheet = yield _this.actionSheetCtrl.create({
          buttons: [{
            text: 'Chat with an agent',
            data: {
              action: 'chat'
            }
          }, {
            text: 'Make Enquiry',
            data: {
              action: 'chat'
            }
          }, {
            text: 'Our Locations',
            data: {
              action: 'location'
            }
          }]
        });
        yield actionSheet.present();
        const result = yield actionSheet.onDidDismiss();
        _this.result = JSON.stringify(result, null, 2);
        console.log('res----', result);

        if (result.data.action == 'location') {
          _this.navCtrl.navigateRoot('contactus');
        }

        if (result.data.action == 'chat') {
          const browser = _this.iab.create('https://webchat.ebanqo.io/cornerstone', '_blank');
        }
      }
    })();
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

  gotorenewpolicy() {
    this.router.navigate(['/verify-policy-screen-cust']);
  }

  makeaclaim() {
    this.router.navigate(['/makeaclaim']);
  }

  policylookup() {
    this.router.navigate(['/policylookup']);
  }

  presentActionSheet() {
    var _this2 = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.navCtrl.navigateRoot('contactus'); // const actionSheet = await this.actionSheetCtrl.create({
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

  getProducts() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_avilable_products"}';
    this.api.insertData(myData).subscribe(res => {
      console.log(res);

      if (res.message == 'success') {
        this.products = res.myproduct;
      }
    }, err => {
      console.log(err);
    });
  }

  investmentsubProducts() {
    this.router.navigate(['/sub-products']);
  }

  openProduct(product, comingFrom) {
    console.log('seleted product', product);
    localStorage.setItem('productName', product.name);
    localStorage.setItem('productid', product.id);
    this.subProducts(product.id, comingFrom);
  }

  subProducts(id, comingFrom) {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe(res => {
      const subproducts = [];
      console.log('subProducts---------', res);
      res.subproducts.map((value, index) => {
        //old code..
        // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen" && value.name != 'Enhanced Comprehensive' && value.name != 'Auto Variants') {
        //   subproducts.push(value);
        // }
        //new code to add local travel insurance
        if (value.name != 'Pilgrimage Plans' && value.name != 'Student Plan' && value.name != 'Europe / Shengen' && value.name != 'Enhanced Comprehensive' && value.name != 'Auto Variants') {
          subproducts.push(value);
        }
      });
      console.log('subproducts after check---', subproducts); // return;

      localStorage.setItem('subProducts', JSON.stringify(subproducts));
      this.PopupCust(comingFrom);
    }, err => {
      console.log(err);
    });
  }

  PopupCust(comingFrom) {
    this.api.comingFrom = comingFrom;
    this.router.navigate(['/quote-popup']);
  }

  handleImgError(ev, item, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/travel.svg`;
    source.src = imgSrc;
  }

  handleImgError2(ev, item, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/car.svg`;
    source.src = imgSrc;
  }

};

ExploreScreenBeforeLoginExpandedPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}];

ExploreScreenBeforeLoginExpandedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-explore-screen-before-login-expanded',
  template: _explore_screen_before_login_expanded_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_explore_screen_before_login_expanded_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExploreScreenBeforeLoginExpandedPage);


/***/ }),

/***/ 42355:
/*!****************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.page.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 31.1px;\n  width: 31.1px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  height: 96px;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  left: 14%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  .container {\n    width: 85%;\n    margin: 30% auto 15%;\n  }\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0FBTko7O0FBUUE7RUFFSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQU5KOztBQVFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVFBO0VBQ0ksd0NBQUE7RUFDQSwrQ0FBQTtBQUxKOztBQWNBO0VBS0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQWZKOztBQWlCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFlQTtFQUNJLGtCQUFBO0FBWko7O0FBY0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFhQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVEo7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFQSjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBU0E7RUFDRSxZQUFBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtBQVBKOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFORjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUxKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBSko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSEY7O0FBS0E7RUFFSSxhQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSkY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBRUU7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUVFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQUpGOztFQU1BO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0VBSEY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQUhGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFKRjtBQUNGOztBQU1BO0VBVUU7SUFDRSxVQUFBO0lBQ0Esb0JBQUE7RUFiRjtBQUNGOztBQWdCQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQWRGOztBQXdCQztFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtFQUNFLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBcEJKOztBQXFCRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQW5CSDs7QUFxQkU7RUFDSSxtQkFBQTtBQW5CTjs7QUFvQk07RUFDRSxjQUFBO0FBbEJSOztBQXFCRTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUFuQkg7O0FBcUJFO0VBQ0MsZ0JBQUE7RUFDQSw0QkFBQTtBQW5CSDs7QUE4QkM7RUFDRyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTNCSjs7QUE0QkU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUExQkg7O0FBNEJFO0VBQ0ksbUJBQUE7QUExQk47O0FBMkJNO0VBQ0UsY0FBQTtBQXpCUjs7QUE0QkU7RUFDQyxpQkFBQTtFQUNBLDZCQUFBO0FBMUJIOztBQTRCRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUExQkg7O0FBaUNBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBOUJGIiwiZmlsZSI6ImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xyXG4vLyAgICAgd2lkdGg6IDg1JTtcclxuLy8gICAgIG1hcmdpbjowcHggYXV0bztcclxuLy8gfVxyXG5cclxuLnRvcC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG87XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzYuMDZweDtcclxuICAgIGhlaWdodDogMzYuMDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmc6IDEuNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8vIGltZy5jYW0taWNvbiB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDc4cHg7XHJcbi8vICAgICByaWdodDogNXB4O1xyXG4vLyB9XHJcbi5wcm8taW1ne1xyXG4gICAgaGVpZ2h0OiAzMS4xcHg7XHJcbiAgICB3aWR0aDogMzEuMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi50aXRsZS1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG59XHJcbnAubmFtZS1wYXJhIHtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnAud2MtcGFyYSB7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZFx0OndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubWlkLWRpdiB7XHJcbiAgLy8gaGVpZ2h0OiAxNzBweDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMnB4IDU2cHggMTJweCAxMnB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xyXG4gIC8vIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLm1pZC1zdWItZGl2e1xyXG4gICAgLy8gZGlzcGxheTpmbGV4O1xyXG4gICAgLy8gcGFkZGluZzogMjJweCAxNS41cHggMTNweCAxNHB4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwcHggN3B4IDE5cHggN3B4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5wLnAxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG59XHJcbnAucDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbn1cclxuLnAtYmFye1xyXG4gICAgbWFyZ2luLXRvcDogMTUuNXB4O1xyXG59XHJcbnAucDMge1xyXG4gICAgbWFyZ2luOiAxNS41cHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxufVxyXG5pb24tYnV0dG9uLmJ0bi1zbXtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbnAubWlkLXAxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHB4O1xyXG59XHJcbnAubWlkLXAyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHB4O1xyXG59XHJcbi5hcnJvd3tcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDlweDtcclxufVxyXG4uZ2MtZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGhlaWdodDogMTAzcHg7XHJcbn1cclxuLmdpbWctZGl2IHtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNzYgMTgxIDAgLyAxMCUpO1xyXG59XHJcbi5pbWdjbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbnAuZ3AtZGl2IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5sc3QtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzYsMTgxLDAsMzIlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbnAubHN0LXBhcmEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE4cHggMTRweDtcclxufVxyXG4ubGltZy1kaXYge1xyXG4gICAgd2lkdGg6IDY5JTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmc6IDZweCAxN3B4IDBweDtcclxufVxyXG5cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6IDIxLjVweDtcclxuICBoZWlnaHQ6IDIxLjVweDtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmFjdGl2ZWltZ3tcclxuXHJcbiAgICB3aWR0aDogMjEuNXB4O1xyXG4gICAgaGVpZ2h0OiAyMS41cHg7XHJcblxyXG59XHJcblxyXG4uZm9udHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG59XHJcbi5mb250YWN0aXZle1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uY2ltZ3tcclxuICBvcGFjaXR5OiA2MCV5O1xyXG59XHJcbmhyIHtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgbGVmdDogMTQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE0cHgpe1xyXG5cclxuICBociB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGxlZnQ6IDE0JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkgYW5kIChtaW4taGVpZ2h0OjczNnB4KXtcclxuXHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyNSUgYXV0byAyNSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjgxMnB4KXtcclxuICBociB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGxlZnQ6IDE0JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6NjY3cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo3NDBweCl7XHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OjY0MHB4KXtcclxuICAvLyBocntcclxuICAvLyAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgLy8gICB3aWR0aDogMjBweDtcclxuICAvLyAgIGhlaWdodDogNnB4O1xyXG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgdG9wOiA1NXB4O1xyXG4gIC8vICAgcmlnaHQ6IDQ3LjIlO1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC8vIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMzAlIGF1dG8gMTUlO1xyXG4gIH1cclxufVxyXG5cclxuLmlvcyAuY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyNSUgMTclIDI0JSA4JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xyXG4ubWQgaW9uLXRhYnN7XHJcblxyXG5cdGlvbi10YWItYmFyIHtcclxuXHRcdC0tYm9yZGVyOiAwO1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDowOyByaWdodDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MnB4O1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcblx0XHQmOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDojMUEyMDZEO1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjojNDI0NzRGO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cclxuLmlvcyBpb24tdGFic3tcclxuXHJcblx0aW9uLXRhYi1iYXIge1xyXG4gICAgLS1ib3JkZXI6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggNDVweCAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG5cdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG4uaW9zIC5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDI1JSAxNyUgMjQlIDglO1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 8986:
/*!****************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.page.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\r\n\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header> -->\r\n<ion-content>\r\n  <div style=\"background: #1a206d; height: 250px\">\r\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px\"> </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <!-- <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\"> -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"top-container\" style=\"margin-top: 20px\">\r\n      <p class=\"name-para\">Lets!</p>\r\n      <p class=\"wc-para\">Explore</p>\r\n\r\n      <div class=\"slide-div\" style=\"margin-top: 20px\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button\r\n                    class=\"btn-sm\"\r\n                    *ngIf=\"btnshow==true\"\r\n                    (click)=\"learnmore()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore()\">\r\n                  <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt1.jpg\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button\r\n                    class=\"btn-sm\"\r\n                    *ngIf=\"btnshow==true\"\r\n                    (click)=\"learnmore2()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\r\n                  <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt2.jpg\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <!-- <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n\r\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\r\n                  <img\r\n                    style=\"border-radius: 10px 50px 10px 10px\"\r\n                    class=\"ins-nce\"\r\n                    src=\"assets/images/slider/pt3.png\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide> -->\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <p class=\"mid-p1\">PRODUCTS</p>\r\n      <!-- <p class=\"mid-p2\" (click)=\"toogleShow()\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"\r\n          *ngIf=\"!show\"> <img class=\"arrow\" src=\"assets/images/arrow-up.svg\" alt=\"\" *ngIf=\"show\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin: 16px 0px\">\r\n        <!-- padding:6px 6px 6px 0px;  -->\r\n        <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\r\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div style=\"display: flex\" class=\"gimg-div\">\r\n              <img *ngIf=\"p.name =='Travel Insurance'\" (error)=\"handleImgError($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n\r\n              <img *ngIf=\"p.name =='Motor Insurance'\" (error)=\"handleImgError2($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">{{p.name}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col siz=\"4\">\r\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img src=\"assets/images/investmentplan.png\" alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">Investment plans</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- <ion-grid style=\"padding:0px; width: 100%;\">\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/car.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Motor Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/travel.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Travel Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/safe-hand.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Home Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n       <ion-row style=\"margin-top:10px ;\" >\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/mortarboard.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">School Fees Guarantee</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/investment1.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Investment Plans</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/marine.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Marine Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:10px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/truck.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Goods In Transit</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/home-at-fire.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Combined Fire and Burglary</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/drone.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Drone Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:10px ;\" >\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/moto-shield.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">My Moto Shield</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/protection-shield.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Gadget Protection Plan</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid> -->\r\n\r\n    <div style=\"display: flex; align-items: center; margin-top: 26px\">\r\n      <p class=\"mid-p1\">Services</p>\r\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin-top: 16px\">\r\n        <ion-col size=\"4\" style=\"padding: 6px 6px 6px 0px; width: 100%\" (click)=\"tab2Click()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\" />\r\n            </div>\r\n            <p class=\"gp-div\">Get Insured</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding: 6px; width: 100%\" (click)=\"makeaclaim()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\" />\r\n            </div>\r\n            <p class=\"gp-div\">Report a Claim</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding: 6px 0px 6px 6px; width: 100%\" (click)=\"gotorenewpolicy()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\" />\r\n            </div>\r\n            <p class=\"gp-div\">Renew Policy</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 10px\">\r\n        <!-- <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\" >\r\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Agent Login</p>\r\n          </div>\r\n        </ion-col> -->\r\n\r\n        <ion-col size=\"4\" style=\"padding: 6px; width: 100%\" (click)=\"policylookup()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\" />\r\n            </div>\r\n            <p class=\"gp-div\">Verify Policy</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <!-- <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\" >\r\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get in Touch</p>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div style=\"height: 20px\"></div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-tabs style=\"top: 10px !important\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr />\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\" />\r\n        <ion-label class=\"fontactive\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/home.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Contact Us</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts.js.map