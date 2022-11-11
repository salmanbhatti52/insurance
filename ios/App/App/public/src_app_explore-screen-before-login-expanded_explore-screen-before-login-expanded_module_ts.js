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
/* harmony import */ var _Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_screen_before_login_expanded_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-screen-before-login-expanded.page.html?ngResource */ 8986);
/* harmony import */ var _explore_screen_before_login_expanded_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-screen-before-login-expanded.page.scss?ngResource */ 42355);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);









let ExploreScreenBeforeLoginExpandedPage = class ExploreScreenBeforeLoginExpandedPage {
  constructor(navCtrl, router, location, actionSheetCtrl, api) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.location = location;
    this.actionSheetCtrl = actionSheetCtrl;
    this.api = api;
    this.show = false;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    this.btnshow = false;
  }

  ionViewWillEnter() {
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

};

ExploreScreenBeforeLoginExpandedPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}];

ExploreScreenBeforeLoginExpandedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 31.1px;\n  width: 31.1px;\n  border-radius: 50%;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-div {\n  height: 170px;\n  border-radius: 12px 56px 12px 12px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  margin-top: 24px;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 22px 15.5px 13px 14px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.8px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n  padding-bottom: 0.8px;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.imgclass {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\n.lst-div {\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  margin-top: 27px;\n  background-color: rgba(176, 181, 0, 0.32);\n  box-shadow: 0px 0px 20px rgba(169, 187, 70, 0.15);\n  border-radius: 12px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.limg-div {\n  width: 69%;\n  text-align: end;\n  padding: 6px 17px 0px;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  left: 14%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    left: 14%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  .container {\n    width: 85%;\n    margin: 30% auto 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0FBTko7O0FBUUE7RUFFSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQU5KOztBQVFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVFBO0VBQ0ksd0NBQUE7RUFDQSwrQ0FBQTtBQUxKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0FBTUo7O0FBSEE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0FBS0o7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBU0o7O0FBUEE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBVUo7O0FBSkM7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQVEsUUFBQTtFQUNSLFdBQUE7RUFDRSxnREFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVFKOztBQVBFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBU0g7O0FBUEU7RUFDSSxtQkFBQTtBQVNOOztBQVJNO0VBQ0UsY0FBQTtBQVVSOztBQVBFO0VBQ0MsaUJBQUE7RUFDQSw2QkFBQTtBQVNIOztBQVBFO0VBQ0MsZ0JBQUE7RUFDQSw0QkFBQTtBQVNIOztBQUZBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSEE7RUFFSSxhQUFBO0VBQ0EsY0FBQTtBQUtKOztBQURBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUpBO0VBRUU7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBTUY7QUFDRjs7QUFIQTtFQUVFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQUlGOztFQUZBO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0VBS0Y7QUFDRjs7QUFIQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFJRjtBQUNGOztBQUZBO0VBVUU7SUFDRSxVQUFBO0lBQ0Esb0JBQUE7RUFMRjtBQUNGIiwiZmlsZSI6ImV4cGxvcmUtc2NyZWVuLWJlZm9yZS1sb2dpbi1leHBhbmRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xuLy8gICAgIHdpZHRoOiA4NSU7XG4vLyAgICAgbWFyZ2luOjBweCBhdXRvO1xuLy8gfVxuXG4udG9wLWNvbnRhaW5lcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvO1xufVxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxNSUgYXV0bztcbn1cbi5jaXJjbGUge1xuICAgIHdpZHRoOiAzNi4wNnB4O1xuICAgIGhlaWdodDogMzYuMDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHBhZGRpbmc6IDEuNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi8vIGltZy5jYW0taWNvbiB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogNzhweDtcbi8vICAgICByaWdodDogNXB4O1xuLy8gfVxuLnByby1pbWd7XG4gICAgaGVpZ2h0OiAzMS4xcHg7XG4gICAgd2lkdGg6IDMxLjFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGl0bGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XG59XG5wLm5hbWUtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbnAud2MtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbmlvbi1zbGlkZXN7XG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmRcdDp3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp3aGl0ZSAhaW1wb3J0YW50O1xufVxuLm1pZC1kaXYge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDU2cHggMTJweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubWlkLXN1Yi1kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHBhZGRpbmc6IDIycHggMTUuNXB4IDEzcHggMTRweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnAucDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xufVxucC5wMiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG59XG4ucC1iYXJ7XG4gICAgbWFyZ2luLXRvcDogMTUuNXB4O1xufVxucC5wMyB7XG4gICAgbWFyZ2luOiAxNS41cHggMHB4IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzVENUQ1RDtcbn1cbmlvbi1idXR0b24uYnRuLXNte1xuICAgIGhlaWdodDogMjJweDtcbiAgICB3aWR0aDogNzFweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5wLm1pZC1wMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMC44cHg7XG59XG5wLm1pZC1wMiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuOHB4O1xufVxuLmFycm93e1xuICAgIGhlaWdodDogOHB4O1xuICAgIHdpZHRoOiA5cHg7XG59XG4uZ2MtZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gaGVpZ2h0OiAxMDNweDtcbn1cbi5naW1nLWRpdiB7XG4gICAgLy8gaGVpZ2h0OiA4NXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XG59XG4uaW1nY2xhc3N7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxucC5ncC1kaXYge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5sc3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NiwxODEsMCwzMiUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbnAubHN0LXBhcmEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE4cHggMTRweDtcbn1cbi5saW1nLWRpdiB7XG4gICAgd2lkdGg6IDY5JTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZzogNnB4IDE3cHggMHB4O1xufVxuXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cbmlvbi10YWJze1xuXG5cdGlvbi10YWItYmFyIHtcblx0XHQtLWJvcmRlcjogMDtcblx0XHQtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDYycHg7XG4gICAgaGVpZ2h0OjYwcHg7XG5cdFx0JjphZnRlcntcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcbiAgICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjojNDI0NzRGO1xuICAgICAgfVxuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXG5cdH1cblxufVxuXG4uaW1ne1xuICB3aWR0aDogMjEuNXB4O1xuICBoZWlnaHQ6IDIxLjVweDtcbiAgb3BhY2l0eTogNjAlO1xufVxuLmFjdGl2ZWltZ3tcblxuICAgIHdpZHRoOiAyMS41cHg7XG4gICAgaGVpZ2h0OiAyMS41cHg7XG5cbn1cblxuLmZvbnR7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogNjAlO1xufVxuLmZvbnRhY3RpdmV7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jaW1ne1xuICBvcGFjaXR5OiA2MCV5O1xufVxuaHIge1xuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICBsZWZ0OiAxNCU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE0cHgpe1xuXG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogMTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAxNCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIC5jb250YWluZXJ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDI1JSBhdXRvIDI1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6ODEycHgpe1xuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIGxlZnQ6IDE0JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjY2N3B4KXtcbiAgLmNvbnRhaW5lcntcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjUlIGF1dG8gMTIlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KXtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAxNCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo2NDBweCl7XG4gIC8vIGhye1xuICAvLyAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIC8vICAgd2lkdGg6IDIwcHg7XG4gIC8vICAgaGVpZ2h0OiA2cHg7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIHRvcDogNTVweDtcbiAgLy8gICByaWdodDogNDcuMiU7XG4gIC8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAvLyB9XG4gIC5jb250YWluZXJ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDMwJSBhdXRvIDE1JTtcbiAgfVxufVxuXG4iXX0= */";

/***/ }),

/***/ 8986:
/*!****************************************************************************************************************!*\
  !*** ./src/app/explore-screen-before-login-expanded/explore-screen-before-login-expanded.page.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header> -->\n<ion-content>\n  <div style=\"background:#1A206D;height: 250px;\">\n    <ion-row style=\"display: flex;\n    align-items: center;padding-top:5%;\">\n      <ion-col size=\"10\" style=\"padding-left: 27px;\">\n\n      </ion-col>\n\n      <ion-col class=\"titleclass\" size=\"2\">\n        <!-- <img class=\"pro-img\" (click)=\"updateProfile()\" src=\"assets/images/profile.svg\" alt=\"profile\"> -->\n      </ion-col>\n\n\n    </ion-row>\n    <div class=\"top-container\">\n      <p class=\"name-para\">Lets!</p>\n      <p class=\"wc-para\">Explore</p>\n\n\n\n\n      <div class=\"slide-div\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\">\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%;\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" *ngIf=\"btnshow==true\" (click)=\"learnmore()\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width:100% ;\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%;\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" *ngIf=\"btnshow==true\" (click)=\"learnmore2()\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width:100% ;\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%;\">\n              <div class=\"mid-sub-div\">\n                <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar class=\"p-bar\" value=\"0.38\" style=\"--progress-background:#1A206D;\">\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" *ngIf=\"btnshow==true\" (click)=\"learnmore3()\">Learn more</ion-button>\n                </div>\n                <div>\n                  <div style=\"width:100% ;\">\n                    <img class=\"ins-nce\" src=\"assets/images/insurance.svg\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n\n        </ion-slides>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"container\">\n\n    <div style=\"display:flex; align-items: center;\">\n      <p class=\"mid-p1\">PRODUCTS</p>\n      <!-- <p class=\"mid-p2\" (click)=\"toogleShow()\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"\n          *ngIf=\"!show\"> <img class=\"arrow\" src=\"assets/images/arrow-up.svg\" alt=\"\" *ngIf=\"show\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding:0px; width: 100%;\">\n      <ion-row style=\"margin:16px 0px ;\">\n        <!-- padding:6px 6px 6px 0px;  -->\n        <ion-col size=\"4\" style=\"width: 100%;\" *ngFor=\"let p of products\">\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\n            <!-- (click)=\"openQuote(p)\" -->\n            <div class=\"gimg-div\">\n              <img src=\"{{p.image}}\" alt=\"\" class=\"cimg\">\n            </div>\n            <p class=\"gp-div\">{{p.name}}</p>\n          </div>\n        </ion-col>\n        <ion-col siz=\"4\">\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\n            <!-- (click)=\"openQuote(p)\" -->\n            <div class=\"gimg-div\">\n              <img src=\"assets/images/investmentplan.png\" alt=\"\" class=\"cimg\">\n            </div>\n            <p class=\"gp-div\">Investment plans</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- <ion-grid style=\"padding:0px; width: 100%;\">\n      <ion-row style=\"margin-top:16px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/car.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Motor Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/travel.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Travel Insurance</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/safe-hand.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Home Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n       <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/mortarboard.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">School Fees Guarantee</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/investment1.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Investment Plans</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/marine.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Marine Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/truck.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Goods In Transit</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/home-at-fire.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Combined Fire and Burglary</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/drone.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Drone Insurance</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\" >\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\" (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/moto-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">My Moto Shield</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"gotologin()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/protection-shield.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Gadget Protection Plan</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid> -->\n\n    <div style=\"display:flex; align-items: center; margin-top: 26px;\">\n      <p class=\"mid-p1\">Services</p>\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n    </div>\n\n    <ion-grid style=\"padding:0px; width: 100%;\">\n\n      <ion-row style=\"margin-top:16px ;\">\n        <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\"  (click)=\"tab2Click()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/get-insured.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Get Insured</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"makeaclaim()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/report-claim.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Report a Claim</p>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\"  (click)=\"gotorenewpolicy()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/renew-policy.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Renew Policy</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top:10px ;\">\n        <!-- <ion-col size=\"4\" style=\"padding:6px 6px 6px 0px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/agent-login.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Agent Login</p>\n          </div>\n        </ion-col> -->\n\n        <ion-col size=\"4\" style=\"padding:6px; width: 100%;\"  (click)=\"policylookup()\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\">\n              <img class=\"imgclass\" src=\"assets/images/sec-doc.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Verify Policy</p>\n          </div>\n        </ion-col>\n\n        <!-- <ion-col size=\"4\" style=\"padding:6px 0px 6px 6px; width: 100%;\">\n          <div class=\"gc-div\">\n            <div class=\"gimg-div\" >\n              <img class=\"imgclass\" src=\"assets/images/helping-staff.svg\" alt=\"\">\n            </div>\n            <p class=\"gp-div\">Get in Touch</p>\n          </div>\n        </ion-col> -->\n      </ion-row>\n\n    </ion-grid>\n\n    <div style=\"height: 20px;\"></div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-tabs style=\"top:10px !important;\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr>\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"activeimg\">\n        <ion-label class=\"fontactive\">Discover</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"img\">\n        <ion-label class=\"font\">Home</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"presentActionSheet()\">\n        <img src=\"assets/images/contactus.svg\" class=\"img\">\n        <ion-label class=\"font\">Contact Us</ion-label>\n\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts.js.map