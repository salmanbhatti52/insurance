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
/* harmony import */ var _Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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

    return (0,_Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,_Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 25px;\n  width: 25px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.9px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.cimg {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 29% 17% 24% 8%;\n}\n\n.md .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFQSjs7QUFTQTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBUEo7O0FBU0E7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBU0E7RUFDSSx3Q0FBQTtFQUNBLCtDQUFBO0FBTko7O0FBZUE7RUFLSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBaEJKOztBQWtCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZko7O0FBaUJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFkSjs7QUFnQkE7RUFDSSxrQkFBQTtBQWJKOztBQWVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWko7O0FBY0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5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QUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBaENIOztBQWtDRTtFQUNJLG1CQUFBO0FBaENOOztBQWlDTTtFQUNFLGNBQUE7QUEvQlI7O0FBa0NFO0VBQ0MsaUJBQUE7RUFDQSw2QkFBQTtBQWhDSDs7QUFrQ0U7RUFDQyxnQkFBQTtFQUNBLDRCQUFBO0FBaENIOztBQXdDQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQXJDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdENGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBdENGIiwiZmlsZSI6ImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlcntcbi8vICAgICB3aWR0aDogODUlO1xuLy8gICAgIG1hcmdpbjowcHggYXV0bztcbi8vIH1cblxuLnRvcC1jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0bztcbn1cbi5jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTUlIGF1dG87XG59XG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMzYuMDZweDtcbiAgICBoZWlnaHQ6IDM2LjA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjQThCNDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBwYWRkaW5nOiAxLjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vLyBpbWcuY2FtLWljb24ge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDc4cHg7XG4vLyAgICAgcmlnaHQ6IDVweDtcbi8vIH1cbi5wcm8taW1ne1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGl0bGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XG59XG5wLm5hbWUtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbnAud2MtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbmlvbi1zbGlkZXN7XG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmRcdDp3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp3aGl0ZSAhaW1wb3J0YW50O1xufVxuLm1pZC1kaXYge1xuICAvLyBoZWlnaHQ6IDE3MHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiAxMnB4IDU2cHggMTJweCAxMnB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XG4gIC8vIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubWlkLXN1Yi1kaXZ7XG4gICAgLy8gZGlzcGxheTpmbGV4O1xuICAgIC8vIHBhZGRpbmc6IDIycHggMTUuNXB4IDEzcHggMTRweDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDBweCA3cHggMTlweCA3cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5wLnAxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbn1cbnAucDIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xufVxuLnAtYmFye1xuICAgIG1hcmdpbi10b3A6IDE1LjVweDtcbn1cbnAucDMge1xuICAgIG1hcmdpbjogMTUuNXB4IDBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG59XG5pb24tYnV0dG9uLmJ0bi1zbXtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDcxcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxucC5taWQtcDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDAuOXB4O1xufVxucC5taWQtcDIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmFycm93e1xuICAgIGhlaWdodDogOHB4O1xuICAgIHdpZHRoOiA5cHg7XG59XG4uZ2MtZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gaGVpZ2h0OiAxMDNweDtcbn1cbi5naW1nLWRpdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XG4gICAgLy8gcGFkZGluZzogMzFweCAxN3B4IDMwcHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbn1cbi5jaW1ne1xuICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxucC5ncC1kaXYge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5sc3QtZGl2IHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luOiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDoxMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxucC5sc3QtcGFyYSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMThweCAxNHB4O1xufVxuLmxpbWctZGl2IHtcbiAgICAvLyB3aWR0aDogNjklO1xuICAgIC8vIHRleHQtYWxpZ246IGVuZDtcbiAgICAvLyBwYWRkaW5nOiA2cHggMTdweCAwcHg7XG59XG5cblxuXG4uaW1ne1xuICB3aWR0aDogMjEuNXB4O1xuICBoZWlnaHQ6IDIxLjVweDtcbiAgb3BhY2l0eTogNjAlO1xufVxuLmFjdGl2ZWltZ3tcblxuICAgIHdpZHRoOiAyMS41cHg7XG4gICAgaGVpZ2h0OiAyMS41cHg7XG5cbn1cblxuLmZvbnR7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogNjAlO1xufVxuLmZvbnRhY3RpdmV7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jaW1ne1xuICBvcGFjaXR5OiA2MCV5O1xufVxuaHJ7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIHJpZ2h0OiA0Ny4yJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KXtcbiAgaHJ7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiA0Ny4yJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzM2cHgpe1xuICBocntcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byA1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6ODEycHgpe1xuICBocntcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6NjY3cHgpe1xuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xuICBocntcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjQwcHgpe1xuICBocntcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XG4gIH1cbn1cblxuXG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuLm1kIGlvbi10YWJze1xuXG5cdGlvbi10YWItYmFyIHtcblx0XHQtLWJvcmRlcjogMDtcblx0XHQtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDYycHg7XG4gICAgaGVpZ2h0OjYwcHg7XG5cdFx0JjphZnRlcntcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcbiAgICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjojNDI0NzRGO1xuICAgICAgfVxuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXG5cdH1cblxufVxuXG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuLmlvcyBpb24tdGFic3tcblxuXHRpb24tdGFiLWJhciB7XG4gICAgLS1ib3JkZXI6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCA0NXB4IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDY1cHg7XG4gICAgaGVpZ2h0OiA2MnB4O1xuXHRcdCY6YWZ0ZXJ7XG5cdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcbiAgICAgIH1cblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblxuXHR9XG5cbn1cblxuXG4uaW9zIC5jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMjklIDE3JSAyNCUgOCU7XG59XG5cblxuLm1kIC50b3BtYXJnaW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmlvcyAudG9wbWFyZ2lue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTIlO1xufVxuIl19 */";

/***/ }),

/***/ 19991:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobalafterlogin\">\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img\n          *ngIf=\"loginas == 'user'\"\n          (click)=\"updateProfile()\"\n          class=\"pro-img\"\n          src=\"assets/images/user.png\"\n          alt=\"profile\"\n        />\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div style=\"background: #1a206d; height: 250px\">\n    <ion-row class=\"topmargin\">\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img\n          *ngIf=\"loginas == 'user'\"\n          (click)=\"updateProfile()\"\n          class=\"pro-img\"\n          src=\"assets/images/user.png\"\n          alt=\"profile\"\n        />\n      </ion-col>\n    </ion-row>\n    <div class=\"top-container\">\n      <p class=\"name-para\">Hi \"{{username}}\",</p>\n      <p class=\"wc-para\">Welcome</p>\n\n      <div class=\"slide-div\">\n        <ion-slides\n          pager=\"true\"\n          [options]=\"slideOpts\"\n          scrollbar=\"true\"\n          (ionSlideDidChange)=\"active-slide\"\n          class=\"slides1\"\n        >\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n\n                <div style=\"width: 100%\" (click)=\"learnmore()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt1.jpg\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore2()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt2.jpg\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore3()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt3.png\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div style=\"display: flex; align-items: center\">\n      <p class=\"mid-p1\">PRODUCTS</p>\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding: 0px; width: 100%\">\n      <ion-row style=\"margin: 16px 0px\">\n        <!-- padding:6px 6px 6px 0px;  -->\n        <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\n            <!-- (click)=\"openQuote(p)\" -->\n            <div class=\"gimg-div\">\n              <img\n                *ngIf=\"p.name =='Travel Insurance'\"\n                (error)=\"handleImgError($event, userIMG)\"\n                src=\"{{p.image}}\"\n                alt=\"\"\n                class=\"cimg\"\n              />\n\n              <img\n                *ngIf=\"p.name =='Motor Insurance'\"\n                (error)=\"handleImgError2($event, userIMG)\"\n                src=\"{{p.image}}\"\n                alt=\"\"\n                class=\"cimg\"\n              />\n            </div>\n            <p class=\"gp-div\">{{p.name}}</p>\n          </div>\n        </ion-col>\n        <ion-col siz=\"4\">\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\n            <!-- (click)=\"openQuote(p)\" -->\n            <div class=\"gimg-div\">\n              <img src=\"assets/images/investmentplan.png\" alt=\"\" class=\"cimg\" />\n            </div>\n            <p class=\"gp-div\">Investment plans</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div style=\"text-align: center; color: #1a206d; font-size: 20px\">\n      Insurance Tips\n    </div>\n    <ion-slides\n      pager=\"true\"\n      [options]=\"slideOpts\"\n      scrollbar=\"true\"\n      (ionSlideDidChange)=\"active-slide\"\n      class=\"slides2\"\n    >\n      <ion-slide style=\"margin: 10px\">\n        <div class=\"lst-div\">\n          <!-- <p class=\"lst-para\">\n            Are you aware you can lodge your claim online, renew your policy and\n            do more from any of our digital channels without visiting any of our\n            branches?\n          </p> -->\n          <div class=\"limg-div\">\n            <img\n              style=\"border-radius: 10px\"\n              src=\"assets/images/slider/it1.jpg\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide style=\"margin: 10px\">\n        <div class=\"lst-div\">\n          <!-- <p class=\"lst-para\">\n            Things just got better with Cornerstone! Investment products are now\n            available on our new mobile app.\n          </p> -->\n          <div class=\"limg-div\">\n            <img\n              style=\"border-radius: 10px\"\n              src=\"assets/images/slider/it2.jpg\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide style=\"margin: 10px\">\n        <div class=\"lst-div\">\n          <!-- <p class=\"lst-para\">\n            Do you know you can verify your policy using our mobile app? Here is\n            how, click on the VERIFY POLICY menu and select if your product is\n            general or life. Then you provide your policy number, its that\n            simple!\n          </p> -->\n          <div class=\"limg-div\">\n            <img\n              style=\"border-radius: 10px\"\n              src=\"assets/images/slider/it3.jpg\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-tabs style=\"top: 10px !important\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr />\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"img\" />\n        <ion-label class=\"font\">Discover</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"activeimg\" />\n        <ion-label class=\"fontactive\">Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"tab3Click()\">\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\n        <ion-label class=\"font\">Contact Us</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts.js.map