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
/* harmony import */ var _Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.products = this.api.allProducts.myproduct; // const myData =
    //   'myData={"verify_token":"' +
    //   localStorage.getItem('token') +
    //   '","method":"get_avilable_products"}';
    // this.api.insertData(myData).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     if (res.message == 'success') {
    //       this.products = res.myproduct;
    //     }
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
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

  goToPolicy1() {
    this.router.navigate(['/policy1']);
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 31.1px;\n  width: 31.1px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background: white !important;\n  --scroll-bar-background-active: white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  height: 96px;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  left: 14%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  .container {\n    width: 85%;\n    margin: 30% auto 15%;\n  }\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 25% 17% 24% 8%;\n}\n\n.cimg {\n  width: 100px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0FBVEo7O0FBWUE7RUFFSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVZKOztBQWFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWNBO0VBQ0kseUNBQUE7RUFDQSxnREFBQTtBQVhKOztBQXNCQTtFQUtJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksa0JBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBdkJKOztBQTBCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBdkJKOztBQTBCQTtFQUNJLFdBQUE7RUFDQSxlQUFB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LE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBL0NSOztBQWdEUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQTlDWjs7QUFnRFE7RUFDSSxtQkFBQTtBQTlDWjs7QUErQ1k7RUFDSSxjQUFBO0FBN0NoQjs7QUFnRFE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0FBOUNaOztBQWdEUTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUE5Q1o7O0FBbURBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0FBaERKOztBQW1EQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBaERKIiwiZmlsZSI6ImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xuLy8gICAgIHdpZHRoOiA4NSU7XG4vLyAgICAgbWFyZ2luOjBweCBhdXRvO1xuLy8gfVxuLnRvcC1jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwJSBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMTUlIGF1dG87XG59XG5cbi5jaXJjbGUge1xuICAgIHdpZHRoOiAzNi4wNnB4O1xuICAgIGhlaWdodDogMzYuMDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHBhZGRpbmc6IDEuNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLy8gaW1nLmNhbS1pY29uIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiA3OHB4O1xuLy8gICAgIHJpZ2h0OiA1cHg7XG4vLyB9XG4ucHJvLWltZyB7XG4gICAgaGVpZ2h0OiAzMS4xcHg7XG4gICAgd2lkdGg6IDMxLjFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50aXRsZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbn1cblxucC5uYW1lLXBhcmEge1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnAud2MtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQtYWN0aXZlOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWlkLWRpdiB7XG4gICAgLy8gaGVpZ2h0OiAxNzBweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4IDU2cHggMTJweCAxMnB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xuICAgIC8vIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5taWQtc3ViLWRpdiB7XG4gICAgLy8gZGlzcGxheTpmbGV4O1xuICAgIC8vIHBhZGRpbmc6IDIycHggMTUuNXB4IDEzcHggMTRweDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDBweCA3cHggMTlweCA3cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnAucDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xufVxuXG5wLnAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbn1cblxuLnAtYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XG59XG5cbnAucDMge1xuICAgIG1hcmdpbjogMTUuNXB4IDBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG59XG5cbmlvbi1idXR0b24uYnRuLXNtIHtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDcxcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5wLm1pZC1wMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMC44cHg7XG59XG5cbnAubWlkLXAyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cHg7XG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDlweDtcbn1cblxuLmdjLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGhlaWdodDogMTAzcHg7XG59XG5cbi5naW1nLWRpdiB7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICAgIC8vIGhlaWdodDogODVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNzYgMTgxIDAgLyAxMCUpO1xufVxuXG4uaW1nY2xhc3Mge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbnAuZ3AtZGl2IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5sc3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NiwgMTgxLCAwLCAzMiUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxucC5sc3QtcGFyYSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMThweCAxNHB4O1xufVxuXG4ubGltZy1kaXYge1xuICAgIHdpZHRoOiA2OSU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDZweCAxN3B4IDBweDtcbn1cblxuLmltZyB7XG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5hY3RpdmVpbWcge1xuICAgIHdpZHRoOiAyMS41cHg7XG4gICAgaGVpZ2h0OiAyMS41cHg7XG59XG5cbi5mb250IHtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgb3BhY2l0eTogNjAlO1xufVxuXG4uZm9udGFjdGl2ZSB7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4vLyAuY2ltZ3tcbi8vICAgb3BhY2l0eTogNjAleTtcbi8vIH1cbmhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogMTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE0cHgpIHtcbiAgICBociB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGxlZnQ6IDE0JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzM2cHgpIHtcbiAgICBociB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGxlZnQ6IDE0JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgbWFyZ2luOiAyNSUgYXV0byAyNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCkge1xuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgbGVmdDogMTQlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo2NjdweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBtYXJnaW46IDI1JSBhdXRvIDEyJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KSB7XG4gICAgaHIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICBsZWZ0OiAxNCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OjY0MHB4KSB7XG4gICAgLy8gaHJ7XG4gICAgLy8gICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIC8vICAgd2lkdGg6IDIwcHg7XG4gICAgLy8gICBoZWlnaHQ6IDZweDtcbiAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgIHRvcDogNTVweDtcbiAgICAvLyAgIHJpZ2h0OiA0Ny4yJTtcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAvLyB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbjogMzAlIGF1dG8gMTUlO1xuICAgIH1cbn1cblxuLmlvcyAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjUlIDE3JSAyNCUgOCU7XG59XG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuLm1kIGlvbi10YWJzIHtcbiAgICBpb24tdGFiLWJhciB7XG4gICAgICAgIC0tYm9yZGVyOiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MnB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0NzRGO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRhYi1idXR0b24ubm90aWZzIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cbi5pb3MgaW9uLXRhYnMge1xuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgLS1ib3JkZXI6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDQ1cHggMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNjVweDtcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgaGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyNDc0RjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlvcyAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjUlIDE3JSAyNCUgOCU7XG59XG5cbi5jaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */";

/***/ }),

/***/ 8986:
/*!****************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.page.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header> -->\n<ion-content>\n    <div style=\"background: #1a206d; height: 250px\">\n        <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\n            <ion-col size=\"10\" style=\"padding-left: 27px\"> </ion-col>\n\n            <ion-col class=\"titleclass\" size=\"2\">\n                <!-- <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\"> -->\n            </ion-col>\n        </ion-row>\n        <div class=\"top-container\" style=\"margin-top: 20px\">\n            <p class=\"name-para\">Lets!</p>\n            <p class=\"wc-para\">Explore</p>\n\n            <div class=\"slide-div\" style=\"margin-top: 20px\">\n                <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\n                    <ion-slide>\n                        <div class=\"mid-div\" style=\"width: 99%\">\n                            <div class=\"mid-sub-div\">\n                                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button\n                    class=\"btn-sm\"\n                    *ngIf=\"btnshow==true\"\n                    (click)=\"learnmore()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                                <div style=\"width: 100%\" (click)=\"learnmore()\">\n                                    <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt1.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </ion-slide>\n\n                    <ion-slide>\n                        <div class=\"mid-div\" style=\"width: 99%\">\n                            <div class=\"mid-sub-div\">\n                                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button\n                    class=\"btn-sm\"\n                    *ngIf=\"btnshow==true\"\n                    (click)=\"learnmore2()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                                <div style=\"width: 100%\" (click)=\"learnmore2()\">\n                                    <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt2.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </ion-slide>\n\n                    <!-- <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt3.png\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide> -->\n                </ion-slides>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div style=\"display: flex; align-items: center\">\n            <p class=\"mid-p1\">PRODUCTS</p>\n            <!-- <p class=\"mid-p2\" (click)=\"toogleShow()\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"\n          *ngIf=\"!show\"> <img class=\"arrow\" src=\"assets/images/arrow-up.svg\" alt=\"\" *ngIf=\"show\"> </p> -->\n        </div>\n\n        <!-- <ion-grid style=\"padding: 0px; width: 100%\">\n            <ion-row style=\"margin: 16px 0px\">\n                <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\n                    <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\n                        <div style=\"display: flex\" class=\"gimg-div\">\n                            <img *ngIf=\"p.name =='Travel Insurance'\" (error)=\"handleImgError($event, userIMG)\" src=\"{{p.image}}\" alt=\"\" class=\"cimg\" />\n\n                            <img *ngIf=\"p.name =='Motor Insurance'\" (error)=\"handleImgError2($event, userIMG)\" src=\"{{p.image}}\" alt=\"\" class=\"cimg\" />\n                        </div>\n                        <p class=\"gp-div\">{{p.name}}</p>\n                    </div>\n                </ion-col>\n                = <ion-col siz=\"4\">\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\n            <div class=\"gimg-div\">\n              <img src=\"assets/images/investmentplan.png\" alt=\"\" class=\"cimg\" />\n            </div>\n            <p class=\"gp-div\">Investment plans</p>\n          </div>\n        </ion-col> \n            </ion-row>\n        </ion-grid> -->\n\n        <ion-grid style=\"padding: 0px; width: 100%\">\n            <ion-row style=\"margin: 16px 0px\">\n                <!-- padding:6px 6px 6px 0px;  -->\n                <ion-col style=\"width: 100%; display: flex;\">\n                    <div class=\"gc-div\" *ngFor=\"let p of products; let i = index\" (click)=\"openProduct(p,p.name)\">\n                        <!-- (click)=\"openQuote(p)\" -->\n                        <div *ngIf=\"p.name !='Investment plans'\" [class.middle-mg]='i%2==0'>\n                            <div class=\"gimg-div\">\n                                <img *ngIf=\"p.name =='Travel Insurance'\" (error)=\"handleImgError($event, userIMG)\" src=\"assets/images/travel.svg\" alt=\"\" class=\"cimg\" />\n\n                                <img *ngIf=\"p.name =='Motor Insurance'\" (error)=\"handleImgError2($event, userIMG)\" src=\"assets/images/car.svg\" alt=\"\" class=\"cimg\" />\n\n                                <!-- <img *ngIf=\"p.name =='Investment plans'\" (error)=\"handleImgError2($event, userIMG)\" src=\"assets/images/investmentplan2.png\" alt=\"\" class=\"cimg\" /> -->\n                            </div>\n                            <p class=\"gp-div\">{{p.name}}</p>\n                        </div>\n                    </div>\n                    <div style=\"margin-left: 10px;\" class=\"gc-div\" (click)=\"goToPolicy1()\">\n                        <div class=\"gimg-div\">\n                            <img src=\"assets/images/investmentplan2.png\" alt=\"\" class=\"cimg\" />\n                        </div>\n                        <p class=\"gp-div\">Investment Plans</p>\n                    </div>\n                </ion-col>\n                <!-- <ion-col siz=\"4\">\n                  <div class=\"gc-div\" (click)=\"goToPolicy1()\">\n                      <div class=\"gimg-div\">\n                          <img src=\"assets/images/policy_plan.svg\" alt=\"\" class=\"cimg\" />\n                      </div>\n                      <p class=\"gp-div\">Policy Plans</p>\n                  </div>\n              </ion-col> -->\n                <!-- (click)=\"openQuote(p)\" -->\n\n            </ion-row>\n        </ion-grid>\n\n\n        <!-- <ion-grid style=\"padding:0px; width: 100%;\">\n      <ion-row style=\"margin-top:16px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/car.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Motor Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/travel.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Travel Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/safe-hand.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Home Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n       <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/mortarboard.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">School Fees Guarantee</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/investment1.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Investment Plans</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/marine.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Marine Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/truck.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Goods In Transit</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/home-at-fire.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Combined Fire and Burglary</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/drone.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Drone Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/moto-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">My Moto Shield</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/protection-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Gadget Protection Plan</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid> -->\n\n        <div style=\"display: flex; align-items: center; margin-top: 26px\">\n            <p class=\"mid-p1\">Services</p>\n            <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n        </div>\n\n        <ion-grid style=\"padding: 0px; width: 100%\">\n            <ion-row style=\"margin-top: 16px\">\n                <ion-col size=\"4\" style=\"padding: 6px 6px 6px 0px; width: 100%\" (click)=\"tab2Click()\">\n                    <div class=\"gc-div\">\n                        <div class=\"gimg-div\">\n                            <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\" />\n                        </div>\n                        <p class=\"gp-div\">Get Insured</p>\n                    </div>\n                </ion-col>\n\n                <ion-col size=\"4\" style=\"padding: 6px; width: 100%\" (click)=\"makeaclaim()\">\n                    <div class=\"gc-div\">\n                        <div class=\"gimg-div\">\n                            <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\" />\n                        </div>\n                        <p class=\"gp-div\">Report a Claim</p>\n                    </div>\n                </ion-col>\n\n                <ion-col size=\"4\" style=\"padding: 6px 0px 6px 6px; width: 100%\" (click)=\"gotorenewpolicy()\">\n                    <div class=\"gc-div\">\n                        <div class=\"gimg-div\">\n                            <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\" />\n                        </div>\n                        <p class=\"gp-div\">Renew Policy</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row style=\"margin-top: 10px\">\n                <!-- <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Agent Login</p>\n          </div>\n        </ion-col> -->\n\n                <ion-col size=\"4\" style=\"padding: 6px; width: 100%\" (click)=\"policylookup()\">\n                    <div class=\"gc-div\">\n                        <div class=\"gimg-div\">\n                            <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\" />\n                        </div>\n                        <p class=\"gp-div\">Verify Policy</p>\n                    </div>\n                </ion-col>\n\n                <!-- <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Get in Touch</p>\n          </div>\n        </ion-col> -->\n            </ion-row>\n        </ion-grid>\n\n        <div style=\"height: 20px\"></div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-tabs style=\"top: 10px !important\">\n        <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n            <hr />\n            <ion-tab-button (click)=\"tab1Click()\">\n                <img src=\"assets/images/discover.svg\" class=\"activeimg\" />\n                <ion-label class=\"fontactive\">Discover</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button (click)=\"tab2Click()\">\n                <img src=\"assets/images/home.svg\" class=\"img\" />\n                <ion-label class=\"font\">Home</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button (click)=\"tab3Click()\">\n                <img src=\"assets/images/contactus.svg\" class=\"img\" />\n                <ion-label class=\"font\">Contact Us</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts.js.map