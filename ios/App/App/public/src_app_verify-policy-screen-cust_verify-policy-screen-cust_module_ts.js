"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts"],{

/***/ 8944:
/*!***************************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyScreenCustPageRoutingModule": () => (/* binding */ VerifyPolicyScreenCustPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _verify_policy_screen_cust_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-screen-cust.page */ 2474);




const routes = [
    {
        path: '',
        component: _verify_policy_screen_cust_page__WEBPACK_IMPORTED_MODULE_0__.VerifyPolicyScreenCustPage
    }
];
let VerifyPolicyScreenCustPageRoutingModule = class VerifyPolicyScreenCustPageRoutingModule {
};
VerifyPolicyScreenCustPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyPolicyScreenCustPageRoutingModule);



/***/ }),

/***/ 7956:
/*!*******************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyScreenCustPageModule": () => (/* binding */ VerifyPolicyScreenCustPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _verify_policy_screen_cust_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-screen-cust-routing.module */ 8944);
/* harmony import */ var _verify_policy_screen_cust_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-screen-cust.page */ 2474);







let VerifyPolicyScreenCustPageModule = class VerifyPolicyScreenCustPageModule {
};
VerifyPolicyScreenCustPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_policy_screen_cust_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyPolicyScreenCustPageRoutingModule
        ],
        declarations: [_verify_policy_screen_cust_page__WEBPACK_IMPORTED_MODULE_1__.VerifyPolicyScreenCustPage]
    })
], VerifyPolicyScreenCustPageModule);



/***/ }),

/***/ 2474:
/*!*****************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyScreenCustPage": () => (/* binding */ VerifyPolicyScreenCustPage)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _verify_policy_screen_cust_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-screen-cust.page.html?ngResource */ 4306);
/* harmony import */ var _verify_policy_screen_cust_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-policy-screen-cust.page.scss?ngResource */ 4107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);










let VerifyPolicyScreenCustPage = class VerifyPolicyScreenCustPage {
  constructor(modal, location, router, api, http) {
    this.modal = modal;
    this.location = location;
    this.router = router;
    this.api = api;
    this.http = http;
    this.show = false;
    this.Insurance = 'Car Insurance';
    this.listarray = [{
      Insurance: 'Car Insurance'
    }, {
      Insurance: 'Car Insurance'
    }, {
      Insurance: 'Car Insurance'
    }];
  }

  ngOnInit() {}

  goback() {
    this.router.navigate(['/home-page-screen-after-login']);
  }

  openlist() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance;
    this.show = false;
  }

  PopupCust() {
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=160&polnum2=CHEF/2011/04/02072', localStorage.getItem('token')).subscribe(response => {
        console.log(response);
      }); // const modal = await this.modal.create({
      //   component: VerifyPolicyPopupCustPage,
      //   cssClass: 'PolicyPopupCust',
      // });
      // modal.onDidDismiss().then((data) => {
      //   console.log('data', data)
      // });
      // return await modal.present();

    })();
  }

};

VerifyPolicyScreenCustPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}];

VerifyPolicyScreenCustPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-verify-policy-screen-cust',
  template: _verify_policy_screen_cust_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_verify_policy_screen_cust_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], VerifyPolicyScreenCustPage);


/***/ }),

/***/ 4107:
/*!******************************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n}\n.container {\n  width: 85%;\n  margin: 10px auto 0px;\n}\n.img-div {\n  text-align: center;\n}\np.con-p1 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n}\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\nlabel.con-l2 {\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n.con-l3 {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A206D;\n  margin-bottom: 15px;\n}\nlabel.con-l4 {\n  /* margin-top: 25px; */\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n.input {\n  height: 48px;\n  width: 100%;\n  margin: 10px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n.btn {\n  width: 70%;\n  --background: #1A206D;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  text-transform: capitalize;\n}\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1wb2xpY3ktc2NyZWVuLWN1c3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFJQUFBO0FBS1I7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBSUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdBO0VBRUksa0JBQUE7QUFESjtBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUlKO0FBRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0o7QUFIQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFNSjtBQUhBO0VBQ0ksNEJBQUE7QUFNSiIsImZpbGUiOiJ2ZXJpZnktcG9saWN5LXNjcmVlbi1jdXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XHJcbi8vIGlvbi1oZWFkZXJ7XHJcbi8vICAgICB3aWR0aDogODUlO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4vLyB9XHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaGVhZC1we1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xyXG59XHJcbi5pbWctZGl2IHtcclxuICAgIC8vIG1hcmdpbi10b3A6IDI0LjdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5wLmNvbi1wMSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZHJvcGJveHtcclxuICAgIG1hcmdpbjogNCUgMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuXHJcbiAgfVxyXG4gIC5pbm5lcmRyb3Bib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi44cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgfVxyXG4gIC5ldXJvLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gIH1cclxuICAuZXVyby10ZXh0MXtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuICBsYWJlbC5jb24tbDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY29uLWwze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxubGFiZWwuY29uLWw0IHtcclxuICAgIC8qIG1hcmdpbi10b3A6IDI1cHg7ICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbiAgLmlucHV0e1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4vL3NldHRpbmcgcGxhY2Vob2xkZXIgZm9udC1mYW1pbHlcclxuaW9uLWlucHV0IHtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 4306:
/*!******************************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Verify Policy</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"img-div\">\r\n      <img src=\"assets/images/policy-tick.svg\" alt=\"\" style=\"width: 110px;\r\n      height:110px;\">\r\n    </div>\r\n\r\n    <div style=\"width: 75%;\r\n    text-align: center;\r\n    margin:20px auto 0px;\">\r\n      <p class=\"con-p1\">Find your policy in seconds!</p>\r\n    </div>\r\n\r\n    <!-- <div style=\"margin-top:25px;\">\r\n      <label class=\"con-l1\">Policy Type</label>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n          <div class=\"euro-text\">{{Insurance}}</div>\r\n          <div class=\"imgdiv\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div style=\"margin-top: 25px;\">\r\n      <label class=\"con-l2\">Policy Number</label>\r\n      <div>\r\n        <ion-input class=\"input\" placeholder=\"13254PA\" [(ngModel)]=\"pnumber\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div style=\"margin-top:25px;\">\r\n      <ion-label class=\"con-l3\">OR</ion-label>\r\n      <label class=\"con-l4\">Vehicle Registration Number</label>\r\n      <div>\r\n        <ion-input class=\"input\" placeholder=\"13254PA\"></ion-input>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"text-align:center ; margin: 0px auto 30px;\">\r\n    <ion-button class=\"btn\" (click)=\"PopupCust()\">Submit</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts.js.map