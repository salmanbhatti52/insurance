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
    const imgSrc = `assets/images/tt.png`;
    source.src = imgSrc;
  }

  handleImgError2(ev, item, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/car1.png`;
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 31.1px;\n  width: 31.1px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  left: 14%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  .container {\n    width: 85%;\n    margin: 30% auto 15%;\n  }\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0FBTko7O0FBUUE7RUFFSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQU5KOztBQVFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVFBO0VBQ0ksd0NBQUE7RUFDQSwrQ0FBQTtBQUxKOztBQWNBO0VBS0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQWZKOztBQWlCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFlQTtFQUNJLGtCQUFBO0FBWko7O0FBY0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFhQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFB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QUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBM0JKOztBQTRCRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQTFCSDs7QUE0QkU7RUFDSSxtQkFBQTtBQTFCTjs7QUEyQk07RUFDRSxjQUFBO0FBekJSOztBQTRCRTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUExQkg7O0FBNEJFO0VBQ0MsZ0JBQUE7RUFDQSw0QkFBQTtBQTFCSDs7QUFpQ0E7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUE5QkYiLCJmaWxlIjoiZXhwbG9yZS1zY3JlZW4tYmVmb3JlLWxvZ2luLWV4cGFuZGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXJ7XHJcbi8vICAgICB3aWR0aDogODUlO1xyXG4vLyAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4vLyB9XHJcblxyXG4udG9wLWNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxNSUgYXV0bztcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzNi4wNnB4O1xyXG4gICAgaGVpZ2h0OiAzNi4wNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogMS41cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLy8gaW1nLmNhbS1pY29uIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNzhweDtcclxuLy8gICAgIHJpZ2h0OiA1cHg7XHJcbi8vIH1cclxuLnByby1pbWd7XHJcbiAgICBoZWlnaHQ6IDMxLjFweDtcclxuICAgIHdpZHRoOiAzMS4xcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRpdGxlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn1cclxucC5uYW1lLXBhcmEge1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxucC53Yy1wYXJhIHtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kXHQ6d2hpdGUgIWltcG9ydGFudDtcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5taWQtZGl2IHtcclxuICAvLyBoZWlnaHQ6IDE3MHB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEycHggNTZweCAxMnB4IDEycHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XHJcbiAgLy8gbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubWlkLXN1Yi1kaXZ7XHJcbiAgICAvLyBkaXNwbGF5OmZsZXg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMnB4IDE1LjVweCAxM3B4IDE0cHg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCA3cHggMTlweCA3cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnAucDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxucC5wMiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxufVxyXG4ucC1iYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XHJcbn1cclxucC5wMyB7XHJcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG59XHJcbmlvbi1idXR0b24uYnRuLXNte1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDcxcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxucC5taWQtcDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMC44cHg7XHJcbn1cclxucC5taWQtcDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cHg7XHJcbn1cclxuLmFycm93e1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOXB4O1xyXG59XHJcbi5nYy1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDNweDtcclxufVxyXG4uZ2ltZy1kaXYge1xyXG4gICAgLy8gaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcclxufVxyXG4uaW1nY2xhc3N7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5wLmdwLWRpdiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubHN0LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5wLmxzdC1wYXJhIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XHJcbn1cclxuLmxpbWctZGl2IHtcclxuICAgIHdpZHRoOiA2OSU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTdweCAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOiAyMS41cHg7XHJcbiAgaGVpZ2h0OiAyMS41cHg7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG59XHJcbi5hY3RpdmVpbWd7XHJcblxyXG4gICAgd2lkdGg6IDIxLjVweDtcclxuICAgIGhlaWdodDogMjEuNXB4O1xyXG5cclxufVxyXG5cclxuLmZvbnR7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uZm9udGFjdGl2ZXtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNpbWd7XHJcbiAgb3BhY2l0eTogNjAleTtcclxufVxyXG5ociB7XHJcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIGxlZnQ6IDE0JTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KXtcclxuXHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XHJcblxyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgbGVmdDogMTQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gMjUlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjY2N3B4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gMTIlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgbGVmdDogMTQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo2NDBweCl7XHJcbiAgLy8gaHJ7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIC8vICAgd2lkdGg6IDIwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDZweDtcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIHRvcDogNTVweDtcclxuICAvLyAgIHJpZ2h0OiA0Ny4yJTtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAvLyB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDMwJSBhdXRvIDE1JTtcclxuICB9XHJcbn1cclxuXHJcbi5pb3MgLmNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMjUlIDE3JSAyNCUgOCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cclxuLm1kIGlvbi10YWJze1xyXG5cclxuXHRpb24tdGFiLWJhciB7XHJcblx0XHQtLWJvcmRlcjogMDtcclxuXHRcdC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6MDsgcmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjJweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG5cdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuLy8vYm90dG9tIGJhciBjc3MvLy8vXHJcbi5pb3MgaW9uLXRhYnN7XHJcblxyXG5cdGlvbi10YWItYmFyIHtcclxuICAgIC0tYm9yZGVyOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDQ1cHggMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjVweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuXHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuLmlvcyAuY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyNSUgMTclIDI0JSA4JTtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 8986:
/*!****************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.page.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\r\n\r\n      </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header> -->\r\n<ion-content>\r\n  <div style=\"background: #1a206d; height: 250px\">\r\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\r\n      <ion-col size=\"10\" style=\"padding-left: 27px\"> </ion-col>\r\n\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <!-- <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\"> -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"top-container\" style=\"margin-top: 20px\">\r\n      <p class=\"name-para\">Lets!</p>\r\n      <p class=\"wc-para\">Explore</p>\r\n\r\n      <div class=\"slide-div\" style=\"margin-top: 20px\">\r\n        <ion-slides\r\n          pager=\"true\"\r\n          [options]=\"slideOpts\"\r\n          scrollbar=\"true\"\r\n          (ionSlideDidChange)=\"active-slide\"\r\n        >\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button\r\n                    class=\"btn-sm\"\r\n                    *ngIf=\"btnshow==true\"\r\n                    (click)=\"learnmore()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore()\">\r\n                  <img\r\n                    style=\"border-radius: 10px 50px 10px 10px\"\r\n                    class=\"ins-nce\"\r\n                    src=\"assets/images/slider/pt1.jpg\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button\r\n                    class=\"btn-sm\"\r\n                    *ngIf=\"btnshow==true\"\r\n                    (click)=\"learnmore2()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\r\n                  <img\r\n                    style=\"border-radius: 10px 50px 10px 10px\"\r\n                    class=\"ins-nce\"\r\n                    src=\"assets/images/slider/pt2.jpg\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button\r\n                    class=\"btn-sm\"\r\n                    *ngIf=\"btnshow==true\"\r\n                    (click)=\"learnmore3()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\r\n                  <img\r\n                    style=\"border-radius: 10px 50px 10px 10px\"\r\n                    class=\"ins-nce\"\r\n                    src=\"assets/images/slider/pt3.png\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <p class=\"mid-p1\">PRODUCTS</p>\r\n      <!-- <p class=\"mid-p2\" (click)=\"toogleShow()\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"\r\n          *ngIf=\"!show\"> <img class=\"arrow\" src=\"assets/images/arrow-up.svg\" alt=\"\" *ngIf=\"show\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin: 16px 0px\">\r\n        <!-- padding:6px 6px 6px 0px;  -->\r\n        <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\r\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img\r\n                *ngIf=\"p.name =='Travel Insurance'\"\r\n                (error)=\"handleImgError($event, userIMG)\"\r\n                src=\"{{p.image}}\"\r\n                alt=\"\"\r\n                class=\"cimg\"\r\n              />\r\n\r\n              <img\r\n                *ngIf=\"p.name =='Motor Insurance'\"\r\n                (error)=\"handleImgError2($event, userIMG)\"\r\n                src=\"{{p.image}}\"\r\n                alt=\"\"\r\n                class=\"cimg\"\r\n              />\r\n            </div>\r\n            <p class=\"gp-div\">{{p.name}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col siz=\"4\">\r\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img src=\"assets/images/investmentplan.png\" alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">Investment plans</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- <ion-grid style=\"padding:0px; width: 100%;\">\r\n      <ion-row style=\"margin-top:16px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/car.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Motor Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/travel.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Travel Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/safe-hand.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Home Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n       <ion-row style=\"margin-top:10px ;\" >\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/mortarboard.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">School Fees Guarantee</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/investment1.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Investment Plans</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/marine.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Marine Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:10px ;\">\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/truck.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Goods In Transit</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/home-at-fire.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Combined Fire and Burglary</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/drone.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Drone Insurance</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top:10px ;\" >\r\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/moto-shield.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">My Moto Shield</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/protection-shield.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Gadget Protection Plan</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid> -->\r\n\r\n    <div style=\"display: flex; align-items: center; margin-top: 26px\">\r\n      <p class=\"mid-p1\">Services</p>\r\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin-top: 16px\">\r\n        <ion-col\r\n          size=\"4\"\r\n          style=\"padding: 6px 6px 6px 0px; width: 100%\"\r\n          (click)=\"tab2Click()\"\r\n        >\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img\r\n                class=\"imgclass\"\r\n                src=\"assets/images/get-insured.svg\"\r\n                alt=\"\"\r\n              />\r\n            </div>\r\n            <p class=\"gp-div\">Get Insured</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col\r\n          size=\"4\"\r\n          style=\"padding: 6px; width: 100%\"\r\n          (click)=\"makeaclaim()\"\r\n        >\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img\r\n                class=\"imgclass\"\r\n                src=\"assets/images/report-claim.svg\"\r\n                alt=\"\"\r\n              />\r\n            </div>\r\n            <p class=\"gp-div\">Report a Claim</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col\r\n          size=\"4\"\r\n          style=\"padding: 6px 0px 6px 6px; width: 100%\"\r\n          (click)=\"gotorenewpolicy()\"\r\n        >\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img\r\n                class=\"imgclass\"\r\n                src=\"assets/images/renew-policy.svg\"\r\n                alt=\"\"\r\n              />\r\n            </div>\r\n            <p class=\"gp-div\">Renew Policy</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 10px\">\r\n        <!-- <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\" >\r\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Agent Login</p>\r\n          </div>\r\n        </ion-col> -->\r\n\r\n        <ion-col\r\n          size=\"4\"\r\n          style=\"padding: 6px; width: 100%\"\r\n          (click)=\"policylookup()\"\r\n        >\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\">\r\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\" />\r\n            </div>\r\n            <p class=\"gp-div\">Verify Policy</p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <!-- <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\r\n          <div class=\"gc-div\">\r\n            <div class=\"gimg-div\" >\r\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\r\n            </div>\r\n            <p class=\"gp-div\">Get in Touch</p>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div style=\"height: 20px\"></div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-tabs style=\"top: 10px !important\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr />\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\" />\r\n        <ion-label class=\"fontactive\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/home.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Contact Us</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts.js.map