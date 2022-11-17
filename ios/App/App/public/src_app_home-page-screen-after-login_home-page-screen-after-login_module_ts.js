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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_screen_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-screen-after-login.page.html?ngResource */ 19991);
/* harmony import */ var _home_page_screen_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page-screen-after-login.page.scss?ngResource */ 29784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);










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
    const imgSrc = `assets/images/tt.png`;
    source.src = imgSrc;
  }

  handleImgError2(ev, item, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/car1.png`;
    source.src = imgSrc;
  }

};

HomePageScreenAfterLoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
}];

HomePageScreenAfterLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 25px;\n  width: 25px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.9px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.cimg {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 10px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 29% 17% 24% 8%;\n}\n\n.md .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFQSjs7QUFTQTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBUEo7O0FBU0E7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBU0E7RUFDSSx3Q0FBQTtFQUNBLCtDQUFBO0FBTko7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFPQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JB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O0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFNRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUpIOztBQU1FO0VBQ0ksbUJBQUE7QUFKTjs7QUFLTTtFQUNFLGNBQUE7QUFIUjs7QUFNRTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUFKSDs7QUFNRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUFKSDs7QUFZQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQVRGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWRiIsImZpbGUiOiJob21lLXBhZ2Utc2NyZWVuLWFmdGVyLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXJ7XHJcbi8vICAgICB3aWR0aDogODUlO1xyXG4vLyAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4vLyB9XHJcblxyXG4udG9wLWNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxNSUgYXV0bztcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzNi4wNnB4O1xyXG4gICAgaGVpZ2h0OiAzNi4wNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogMS41cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLy8gaW1nLmNhbS1pY29uIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNzhweDtcclxuLy8gICAgIHJpZ2h0OiA1cHg7XHJcbi8vIH1cclxuLnByby1pbWd7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4udGl0bGUtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcclxufVxyXG5wLm5hbWUtcGFyYSB7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5wLndjLXBhcmEge1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5pb24tc2xpZGVze1xyXG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmRcdDp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQtYWN0aXZlOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pZC1kaXYge1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCA1NnB4IDEycHggMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5taWQtc3ViLWRpdntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHBhZGRpbmc6IDIycHggMTUuNXB4IDEzcHggMTRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxucC5wMSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxufVxyXG5wLnAyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG59XHJcbi5wLWJhcntcclxuICAgIG1hcmdpbi10b3A6IDE1LjVweDtcclxufVxyXG5wLnAzIHtcclxuICAgIG1hcmdpbjogMTUuNXB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbn1cclxuaW9uLWJ1dHRvbi5idG4tc217XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogNzFweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5wLm1pZC1wMSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjlweDtcclxufVxyXG5wLm1pZC1wMiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4uYXJyb3d7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA5cHg7XHJcbn1cclxuLmdjLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBoZWlnaHQ6IDEwM3B4O1xyXG59XHJcbi5naW1nLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiA4NXB4O1xyXG4gICAgLy8gcGFkZGluZzogMzFweCAxN3B4IDMwcHggMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcclxufVxyXG4uY2ltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxucC5ncC1kaXYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmxzdC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE2OSAxODcgNzAgLyAxNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5wLmxzdC1wYXJhIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XHJcbn1cclxuLmxpbWctZGl2IHtcclxuICAgIHdpZHRoOiA2OSU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTdweCAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmltZ3tcclxuICB3aWR0aDogMjEuNXB4O1xyXG4gIGhlaWdodDogMjEuNXB4O1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uYWN0aXZlaW1ne1xyXG5cclxuICAgIHdpZHRoOiAyMS41cHg7XHJcbiAgICBoZWlnaHQ6IDIxLjVweDtcclxuXHJcbn1cclxuXHJcbi5mb250e1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmZvbnRhY3RpdmV7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5jaW1ne1xyXG4gIG9wYWNpdHk6IDYwJXk7XHJcbn1cclxuaHJ7XHJcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHJpZ2h0OiA0Ny4yJTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkgYW5kIChtaW4taGVpZ2h0OjczNnB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjUlIGF1dG8gNSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjgxMnB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo2NjdweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDI1JSBhdXRvIDEyJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KXtcclxuICBocntcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDQ3LjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo2NDBweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDI1JSBhdXRvIDEyJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vYm90dG9tIGJhciBjc3MvLy8vXHJcbi5tZCBpb24tdGFic3tcclxuXHJcblx0aW9uLXRhYi1iYXIge1xyXG5cdFx0LS1ib3JkZXI6IDA7XHJcblx0XHQtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYycHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuXHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xyXG4uaW9zIGlvbi10YWJze1xyXG5cclxuXHRpb24tdGFiLWJhciB7XHJcbiAgICAtLWJvcmRlcjogMDtcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCA0NXB4IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcblx0XHQmOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDojMUEyMDZEO1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjojNDI0NzRGO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4uaW9zIC5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDI5JSAxNyUgMjQlIDglO1xyXG59XHJcblxyXG5cclxuLm1kIC50b3BtYXJnaW57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLmlvcyAudG9wbWFyZ2lue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 19991:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobalafterlogin\">\r\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\r\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img\r\n          *ngIf=\"loginas == 'user'\"\r\n          (click)=\"updateProfile()\"\r\n          class=\"pro-img\"\r\n          src=\"assets/images/user.png\"\r\n          alt=\"profile\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div style=\"background: #1a206d; height: 250px\">\r\n    <ion-row class=\"topmargin\">\r\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img\r\n          *ngIf=\"loginas == 'user'\"\r\n          (click)=\"updateProfile()\"\r\n          class=\"pro-img\"\r\n          src=\"assets/images/user.png\"\r\n          alt=\"profile\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"top-container\">\r\n      <p class=\"name-para\">Hi \"{{username}}\",</p>\r\n      <p class=\"wc-para\">Welcome</p>\r\n\r\n      <div class=\"slide-div\">\r\n        <ion-slides\r\n          pager=\"true\"\r\n          [options]=\"slideOpts\"\r\n          scrollbar=\"true\"\r\n          (ionSlideDidChange)=\"active-slide\"\r\n          class=\"slides1\"\r\n        >\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div>\r\n                <div>\r\n                  <div style=\"width: 100%\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore2()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div>\r\n                <div>\r\n                  <div style=\"width: 100%\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore3()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div>\r\n                <div>\r\n                  <div style=\"width: 100%\">\r\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <p class=\"mid-p1\">PRODUCTS</p>\r\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin: 16px 0px\">\r\n        <!-- padding:6px 6px 6px 0px;  -->\r\n        <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\r\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img\r\n                *ngIf=\"p.name =='Travel Insurance'\"\r\n                (error)=\"handleImgError($event, userIMG)\"\r\n                src=\"{{p.image}}\"\r\n                alt=\"\"\r\n                class=\"cimg\"\r\n              />\r\n\r\n              <img\r\n                *ngIf=\"p.name =='Motor Insurance'\"\r\n                (error)=\"handleImgError2($event, userIMG)\"\r\n                src=\"{{p.image}}\"\r\n                alt=\"\"\r\n                class=\"cimg\"\r\n              />\r\n            </div>\r\n            <p class=\"gp-div\">{{p.name}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col siz=\"4\">\r\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img src=\"assets/images/investmentplan.png\" alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">Investment plans</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div style=\"text-align: center; color: #1a206d; font-size: 20px\">\r\n      Insurance Tips\r\n    </div>\r\n    <ion-slides\r\n      pager=\"true\"\r\n      [options]=\"slideOpts\"\r\n      scrollbar=\"true\"\r\n      (ionSlideDidChange)=\"active-slide\"\r\n      class=\"slides2\"\r\n    >\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <p class=\"lst-para\">\r\n            Are you aware you can lodge your claim online, renew your policy and\r\n            do more from any of our digital channels without visiting any of our\r\n            branches?\r\n          </p>\r\n          <div class=\"limg-div\">\r\n            <img src=\"assets/images/tip1.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <p class=\"lst-para\">\r\n            Things just got better with Cornerstone! Investment products are now\r\n            available on our new mobile app.\r\n          </p>\r\n          <div class=\"limg-div\">\r\n            <img src=\"assets/images/tip2.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <p class=\"lst-para\">\r\n            Do you know you can verify your policy using our mobile app? Here is\r\n            how, click on the VERIFY POLICY menu and select if your product is\r\n            general or life. Then you provide your policy number, its that\r\n            simple!\r\n          </p>\r\n          <div class=\"limg-div\">\r\n            <img src=\"assets/images/tip3.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-tabs style=\"top: 10px !important\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr />\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/home.svg\" class=\"activeimg\" />\r\n        <ion-label class=\"fontactive\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Contact Us</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n\r\n<script>\r\n  (function (w, d, s, o, f, js, fjs) {\r\n    w[\"EBANQO-WIDGET\"] = o;\r\n    w[o] =\r\n      w[o] ||\r\n      function () {\r\n        (w[o].q = w[o].q || []).push(arguments);\r\n      };\r\n    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);\r\n    js.id = o;\r\n    js.src = f;\r\n    js.async = 1;\r\n    fjs.parentNode.insertBefore(js, fjs);\r\n  })(\r\n    window,\r\n    document,\r\n    \"script\",\r\n    \"ebanqo_widget\",\r\n    \"https://widget.ebanqo.io/app.js\"\r\n  );\r\n\r\n  ebanqo_widget(\"init\", {\r\n    showChannelButtonsOnSignupForm: true,\r\n    buttonColor: \"#2c2276\",\r\n    promptMessageDelay: 2000,\r\n\r\n    promptMessage: \"Hello, I'm Cici. How may I be of assistance?\",\r\n    instant_chat: {\r\n      buttonColor: \"#2c2276\",\r\n      logoUrl: \"https://ebanqo-logos.s3.amazonaws.com/Cici+Header-1.png\",\r\n      url: \"https://webchat.ebanqo.io/cornerstone\",\r\n      title: \"\",\r\n      logoWidth: 78,\r\n      logoHeight: 37,\r\n      chatHeaderBackgroundColor: \"#2c2276\",\r\n      chatHeaderTextColor: \"#fff\",\r\n    },\r\n  });\r\n</script>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts.js.map