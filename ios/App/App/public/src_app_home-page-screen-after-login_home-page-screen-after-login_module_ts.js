"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts"],{

/***/ 29637:
/*!*********************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageScreenAfterLoginPageRoutingModule": () => (/* binding */ HomePageScreenAfterLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-screen-after-login.page */ 73279);




const routes = [
    {
        path: '',
        component: _home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_0__.HomePageScreenAfterLoginPage
    }
];
let HomePageScreenAfterLoginPageRoutingModule = class HomePageScreenAfterLoginPageRoutingModule {
};
HomePageScreenAfterLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageScreenAfterLoginPageRoutingModule);



/***/ }),

/***/ 91669:
/*!*************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageScreenAfterLoginPageModule": () => (/* binding */ HomePageScreenAfterLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_page_screen_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-screen-after-login-routing.module */ 29637);
/* harmony import */ var _home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-screen-after-login.page */ 73279);







let HomePageScreenAfterLoginPageModule = class HomePageScreenAfterLoginPageModule {
};
HomePageScreenAfterLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_page_screen_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageScreenAfterLoginPageRoutingModule
        ],
        declarations: [_home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_1__.HomePageScreenAfterLoginPage]
    })
], HomePageScreenAfterLoginPageModule);



/***/ }),

/***/ 73279:
/*!***********************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageScreenAfterLoginPage": () => (/* binding */ HomePageScreenAfterLoginPage)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_screen_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-screen-after-login.page.html?ngResource */ 19991);
/* harmony import */ var _home_page_screen_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page-screen-after-login.page.scss?ngResource */ 29784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);











let HomePageScreenAfterLoginPage = class HomePageScreenAfterLoginPage {
  constructor(navCtrl, menuCtrl, router, modal, api, alert, actionSheetCtrl, platform, iab) {
    this.navCtrl = navCtrl;
    this.menuCtrl = menuCtrl;
    this.router = router;
    this.modal = modal;
    this.api = api;
    this.alert = alert;
    this.actionSheetCtrl = actionSheetCtrl;
    this.platform = platform;
    this.iab = iab;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    this.draftArr = '';
    this.calclatedtime = '';
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.loginas = localStorage.getItem('loginas');
    this.username = localStorage.getItem('fname');
    this.api.username = this.username;

    if (localStorage.getItem('userid') == null) {
      this.api.presenttoast('Please Login First');
      this.router.navigate(['/sign-in-screen']);
    } else {
      this.getProducts();
      this.alertbox();
    }
  }

  alertbox() {
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fp = localStorage.getItem('fingerprint');
      console.log('sASAsaSA', fp);

      if (fp == null) {
        const alert = yield _this.alert.create({
          header: 'Do you want to add Finger Print/Face ID login',
          cssClass: 'fgprintcls',
          buttons: [{
            text: 'Yes',
            role: 'confirm',
            handler: () => {
              localStorage.setItem('fingerprint', 'true');
              _this.api.fpval = 'true';
            }
          }, {
            text: 'No',
            role: 'cancel',
            handler: () => {
              localStorage.setItem('fingerprint', 'false');
              _this.api.fpval = 'false';
            }
          }]
        });
        yield alert.present();
      }
    })();
  }

  getProducts() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_avilable_products"}';
    this.api.insertData(myData).subscribe(res => {
      console.log(res);

      if (res.message == 'success') {
        this.api.hideLoader();
        this.products = res.myproduct;
      }
    }, err => {
      console.log(err);
    });
    this.deletedraftafter7days();
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

  tab1Click() {
    if (localStorage.getItem('userid')) {
      this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
    } else {
      this.navCtrl.navigateRoot('explore-screen-before-login-expanded2');
    }
  }

  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }

  updateProfile() {
    this.navCtrl.navigateRoot('profile-update');
  } // async PopupCust() {
  //   const modal = await this.modal.create({
  //     component: QuotePopupPage,
  //     cssClass: 'QuotePopup',
  //   });
  //   modal.onDidDismiss().then((res) => {
  //     console.log('data-------', res);
  //     if(res.data.product_for_quote==1){
  //       this.router.navigate(['/mypolicies']);
  //       localStorage.setItem('subProId',res.data.id);
  //       localStorage.setItem('subProName',res.data.name);
  //     }
  //     else{
  //       this.subProducts(res.data.id);
  //     }
  //   }).catch(error=>console.log("error----",error));
  //   return await modal.present();
  // }


  PopupCust(comingFrom) {
    this.api.comingFrom = comingFrom;
    this.router.navigate(['/quote-popup']);
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

  tab3Click() {
    var _this2 = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.platform.is('android')) {
        _this2.router.navigate(['/contactus']);
      } else {
        const actionSheet = yield _this2.actionSheetCtrl.create({
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
        _this2.result = JSON.stringify(result, null, 2);
        console.log('res----', result);

        if (result.data.action == 'location') {
          _this2.navCtrl.navigateRoot('contactus');
        }

        if (result.data.action == 'chat') {
          const browser = _this2.iab.create('https://webchat.ebanqo.io/cornerstone', '_blank');
        }
      }
    })();
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

  deletedraftafter7days() {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));

    if (this.draftArr == null) {
      this.api.hideLoader();
    } else {
      this.api.hideLoader();

      for (var i = 0; i < this.draftArr.length; i++) {
        this.calclatedtime = moment__WEBPACK_IMPORTED_MODULE_5__(this.draftArr[i].datetime, 'YYYYMMDD').fromNow(); // 11 years ago

        console.log('tt-----', this.calclatedtime);

        if (this.calclatedtime.includes('days')) {
          console.log('day wala ha bhai');
          var day = this.calclatedtime.substring(0, this.calclatedtime.indexOf(' '));

          if (parseInt(day) > 7) {
            this.draftArr.splice(i, 1);
          }
        }
      }

      localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
    }
  }

};

HomePageScreenAfterLoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
}];

HomePageScreenAfterLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home-page-screen-after-login',
  template: _home_page_screen_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_screen_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePageScreenAfterLoginPage);


/***/ }),

/***/ 29784:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 25px;\n  width: 25px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.9px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.cimg {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 29% 17% 24% 8%;\n}\n\n.md .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFQSjs7QUFTQTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBUEo7O0FBU0E7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBU0E7RUFDSSx3Q0FBQTtFQUNBLCtDQUFBO0FBTko7O0FBZUE7RUFLSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBaEJKOztBQWtCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZko7O0FBaUJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFkSjs7QUFnQkE7RUFDSSxrQkFBQTtBQWJKOztBQWVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWko7O0FBY0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5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QUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBaENIOztBQWtDRTtFQUNJLG1CQUFBO0FBaENOOztBQWlDTTtFQUNFLGNBQUE7QUEvQlI7O0FBa0NFO0VBQ0MsaUJBQUE7RUFDQSw2QkFBQTtBQWhDSDs7QUFrQ0U7RUFDQyxnQkFBQTtFQUNBLDRCQUFBO0FBaENIOztBQXdDQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQXJDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdENGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBdENGIiwiZmlsZSI6ImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlcntcclxuLy8gICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICBtYXJnaW46MHB4IGF1dG87XHJcbi8vIH1cclxuXHJcbi50b3AtY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDE1JSBhdXRvO1xyXG59XHJcbi5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDM2LjA2cHg7XHJcbiAgICBoZWlnaHQ6IDM2LjA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAxLjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vLyBpbWcuY2FtLWljb24ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA3OHB4O1xyXG4vLyAgICAgcmlnaHQ6IDVweDtcclxuLy8gfVxyXG4ucHJvLWltZ3tcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi50aXRsZS1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG59XHJcbnAubmFtZS1wYXJhIHtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnAud2MtcGFyYSB7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZFx0OndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubWlkLWRpdiB7XHJcbiAgLy8gaGVpZ2h0OiAxNzBweDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMnB4IDU2cHggMTJweCAxMnB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xyXG4gIC8vIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLm1pZC1zdWItZGl2e1xyXG4gICAgLy8gZGlzcGxheTpmbGV4O1xyXG4gICAgLy8gcGFkZGluZzogMjJweCAxNS41cHggMTNweCAxNHB4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwcHggN3B4IDE5cHggN3B4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5wLnAxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG59XHJcbnAucDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbn1cclxuLnAtYmFye1xyXG4gICAgbWFyZ2luLXRvcDogMTUuNXB4O1xyXG59XHJcbnAucDMge1xyXG4gICAgbWFyZ2luOiAxNS41cHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxufVxyXG5pb24tYnV0dG9uLmJ0bi1zbXtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbnAubWlkLXAxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOXB4O1xyXG59XHJcbnAubWlkLXAyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5hcnJvd3tcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDlweDtcclxufVxyXG4uZ2MtZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGhlaWdodDogMTAzcHg7XHJcbn1cclxuLmdpbWctZGl2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAzMXB4IDE3cHggMzBweCAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNzYgMTgxIDAgLyAxMCUpO1xyXG59XHJcbi5jaW1ne1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5wLmdwLWRpdiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubHN0LWRpdiB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzYsMTgxLDAsMzIlKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbnAubHN0LXBhcmEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE4cHggMTRweDtcclxufVxyXG4ubGltZy1kaXYge1xyXG4gICAgLy8gd2lkdGg6IDY5JTtcclxuICAgIC8vIHRleHQtYWxpZ246IGVuZDtcclxuICAgIC8vIHBhZGRpbmc6IDZweCAxN3B4IDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOiAyMS41cHg7XHJcbiAgaGVpZ2h0OiAyMS41cHg7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG59XHJcbi5hY3RpdmVpbWd7XHJcblxyXG4gICAgd2lkdGg6IDIxLjVweDtcclxuICAgIGhlaWdodDogMjEuNXB4O1xyXG5cclxufVxyXG5cclxuLmZvbnR7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uZm9udGFjdGl2ZXtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNpbWd7XHJcbiAgb3BhY2l0eTogNjAleTtcclxufVxyXG5ocntcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDQ3LjIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzM2cHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyNSUgYXV0byA1JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6ODEycHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjY2N3B4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gMTIlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OjY0MHB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gMTIlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cclxuLm1kIGlvbi10YWJze1xyXG5cclxuXHRpb24tdGFiLWJhciB7XHJcblx0XHQtLWJvcmRlcjogMDtcclxuXHRcdC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6MDsgcmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjJweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG5cdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuLy8vYm90dG9tIGJhciBjc3MvLy8vXHJcbi5pb3MgaW9uLXRhYnN7XHJcblxyXG5cdGlvbi10YWItYmFyIHtcclxuICAgIC0tYm9yZGVyOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDQ1cHggMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjVweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuXHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcbi5pb3MgLmNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMjklIDE3JSAyNCUgOCU7XHJcbn1cclxuXHJcblxyXG4ubWQgLnRvcG1hcmdpbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4uaW9zIC50b3BtYXJnaW57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMiU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 19991:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobalafterlogin\">\r\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\r\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img\r\n          *ngIf=\"loginas == 'user'\"\r\n          (click)=\"updateProfile()\"\r\n          class=\"pro-img\"\r\n          src=\"assets/images/user.png\"\r\n          alt=\"profile\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div style=\"background: #1a206d; height: 250px\">\r\n    <ion-row class=\"topmargin\">\r\n      <ion-col size=\"2\" style=\"padding-left: 27px\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <img src=\"assets/images/cornerlogo.png\" style=\"width: 100px;\">\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img *ngIf=\"loginas == 'user'\" (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\"\r\n          alt=\"profile\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"top-container\">\r\n      <p class=\"name-para\">Hi {{username}},</p>\r\n      <p class=\"wc-para\">Welcome</p>\r\n\r\n      <div class=\"slide-div\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\"\r\n          class=\"slides1\">\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n\r\n                <div style=\"width: 100%\" (click)=\"learnmore()\">\r\n                  <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt1.jpg\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <!-- <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n\r\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\r\n                  <img\r\n                    style=\"border-radius: 10px 50px 10px 10px\"\r\n                    class=\"ins-nce\"\r\n                    src=\"assets/images/slider/pt3.png\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide> -->\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore3()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\r\n                  <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt2.jpg\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <p class=\"mid-p1\">PRODUCTS</p>\r\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin: 16px 0px\">\r\n        <!-- padding:6px 6px 6px 0px;  -->\r\n        <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\r\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img *ngIf=\"p.name =='Travel Insurance'\" (error)=\"handleImgError($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n\r\n              <img *ngIf=\"p.name =='Motor Insurance'\" (error)=\"handleImgError2($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">{{p.name}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col siz=\"4\">\r\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img src=\"assets/images/investmentplan2.png\" alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">Investment plans</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div style=\"text-align: center; color: #1a206d; font-size: 20px\">\r\n      Insurance Tips\r\n    </div>\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\" class=\"slides2\">\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <!-- <p class=\"lst-para\">\r\n            Are you aware you can lodge your claim online, renew your policy and\r\n            do more from any of our digital channels without visiting any of our\r\n            branches?\r\n          </p> -->\r\n          <div class=\"limg-div\">\r\n            <img style=\"border-radius: 10px\" src=\"assets/images/slider/it1.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <!-- <p class=\"lst-para\">\r\n            Things just got better with Cornerstone! Investment products are now\r\n            available on our new mobile app.\r\n          </p> -->\r\n          <div class=\"limg-div\">\r\n            <img style=\"border-radius: 10px\" src=\"assets/images/slider/it2.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <!-- <p class=\"lst-para\">\r\n            Do you know you can verify your policy using our mobile app? Here is\r\n            how, click on the VERIFY POLICY menu and select if your product is\r\n            general or life. Then you provide your policy number, its that\r\n            simple!\r\n          </p> -->\r\n          <div class=\"limg-div\">\r\n            <img style=\"border-radius: 10px\" src=\"assets/images/slider/it3.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-tabs style=\"top: 10px !important\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr />\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/home.svg\" class=\"activeimg\" />\r\n        <ion-label class=\"fontactive\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Contact Us</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts.js.map