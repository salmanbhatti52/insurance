"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_policylookup_policylookup_module_ts"],{

/***/ 4082:
/*!*************************************************************!*\
  !*** ./src/app/policylookup/policylookup-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicylookupPageRoutingModule": () => (/* binding */ PolicylookupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _policylookup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policylookup.page */ 8949);




const routes = [
    {
        path: '',
        component: _policylookup_page__WEBPACK_IMPORTED_MODULE_0__.PolicylookupPage
    }
];
let PolicylookupPageRoutingModule = class PolicylookupPageRoutingModule {
};
PolicylookupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PolicylookupPageRoutingModule);



/***/ }),

/***/ 3035:
/*!*****************************************************!*\
  !*** ./src/app/policylookup/policylookup.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicylookupPageModule": () => (/* binding */ PolicylookupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _policylookup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policylookup-routing.module */ 4082);
/* harmony import */ var _policylookup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policylookup.page */ 8949);







let PolicylookupPageModule = class PolicylookupPageModule {
};
PolicylookupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _policylookup_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicylookupPageRoutingModule
        ],
        declarations: [_policylookup_page__WEBPACK_IMPORTED_MODULE_1__.PolicylookupPage]
    })
], PolicylookupPageModule);



/***/ }),

/***/ 8949:
/*!***************************************************!*\
  !*** ./src/app/policylookup/policylookup.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicylookupPage": () => (/* binding */ PolicylookupPage)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _policylookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policylookup.page.html?ngResource */ 5772);
/* harmony import */ var _policylookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policylookup.page.scss?ngResource */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);






let PolicylookupPage = class PolicylookupPage {
  constructor(api) {
    this.api = api;
    this.show = false;
    this.Title = 'Select Policy Type';
    this.listarray = [{
      Title: 'Gen Business'
    }, {
      Title: 'Life/Investment'
    }];
    this.uTitle = '';
    this.policy = false;
    this.policynum = '';
    this.gibspolicy = false;
  }

  ngOnInit() {
    var number = "YEKINI, AZEEZAT, ABOSEDE";
    var stringValue = number.replace(/,/g, '');
    console.log(stringValue, "using String");
  }

  openlist() {
    console.log('show value====', this.show);

    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  selectTitle(list) {
    this.uTitle = list.Title;
    this.show = false;
  }

  policylookup() {
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.uTitle == '') {
        _this.api.presenttoast('Please select an item from dropdown');
      } else if (_this.policynum == '') {
        _this.api.presenttoast('Policy Number Field is required!');
      } else {
        if (_this.uTitle == 'Gen Business') {
          _this.api.showLoader();

          var myData = {
            "sid": "ECHANNEL2",
            "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
          };

          _this.api.gettoken(myData).subscribe(res => {
            console.log(res);
            let token = res.accessToken;

            _this.policyresult(token);
          }, err => {
            console.log(err);

            _this.api.hideLoader();
          });
        }

        if (_this.uTitle == 'Life/Investment') {
          let token = '39109f7df56e1CORNERStone9e685066bb852';

          _this.api.showLoader();

          _this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&polnum2=' + _this.policynum + '&process_code=140', token).subscribe(response => {
            _this.api.hideLoader();

            console.log(response);
            _this.verifypolicy = response.result;

            if (_this.verifypolicy) {
              if (response.result.status == 0) {
                _this.gibspolicy = false;
                _this.policy = false;

                _this.api.presenttoast(response.result.message);
              } else {
                _this.gibspolicy = false;
                _this.policy = true;
                var name = _this.verifypolicy.insured;
                _this.full_name = name.replace(/,/g, '');
                _this.StartDate = _this.verifypolicy.issuedate;
                _this.DateofExpiration = _this.verifypolicy.mat_date;
                _this.PolicyNumber = _this.verifypolicy.polnum; // this.InsuranceType =

                _this.P10PolicyNumber = _this.verifypolicy.polnum2;
              }
            } else {
              _this.gibspolicy = false;

              _this.api.presenttoast('Policy record not found');
            }
          }, err => {
            _this.api.hideLoader();
          });
        }
      }
    })();
  }

  policyresult(token) {
    // P/500/4000/2022/00007
    let encode = encodeURIComponent(this.policynum);
    console.log('eee--', encode);
    let Bearertoken = token;
    let url = 'http://testcipapiservices.gibsonline.com/api/Policies/' + encode;
    this.api.getpolicy(url, Bearertoken).subscribe(response => {
      this.api.hideLoader();
      console.log(response);
      this.policy = false;
      this.gibspolicy = true;
      this.full_name = response.insured.firstName + ' ' + response.insured.lastName;
      this.StartDate = response.startDate;
      this.DateofExpiration = response.endDate;
      this.PolicyNumber = response.policyNo;
    }, err => {
      console.log(err);
      this.api.presenttoast(err.error.title);
      this.api.hideLoader();
    });
  }

};

PolicylookupPage.ctorParameters = () => [{
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}];

PolicylookupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-policylookup',
  template: _policylookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_policylookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PolicylookupPage);


/***/ }),

/***/ 745:
/*!****************************************************************!*\
  !*** ./src/app/policylookup/policylookup.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.para {\n  color: #1A206D;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n  margin-bottom: 5%;\n}\n\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 14px;\n  --padding-end: 15px;\n  --padding-start: 14px;\n  font-size: 14px;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n\n.htxt {\n  padding-bottom: 2%;\n  padding-left: 2%;\n  color: #000;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.htxt1 {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 10%;\n  color: #000;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeWxvb2t1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0UsaUJBQUE7QUFHSjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLDBCQUFBO0FBS0Y7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBT0Y7O0FBTEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBU0o7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVFGOztBQUxBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FBUUY7O0FBTkE7RUFDRSxTQUFBO0FBU0Y7O0FBUEE7RUFDRSx5QkFBQTtBQVVGOztBQVJBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQVdGIiwiZmlsZSI6InBvbGljeWxvb2t1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46MCUgYXV0bztcclxufVxyXG4ucGFyYXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZHJvcGJveDF7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG5cclxufVxyXG4uaW5uZXJib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmJveGlucHV0e1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ldXJvLXRleHQxe1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMjBweDtcclxuXHJcbn1cclxuLmh0eHR7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmJ0bmRpdntcclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmJ0bjF7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmJveC1zdWNjZXNze1xyXG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uaHR4dDF7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ucGFuZWwtYm9keSB7XHJcblxyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5772:
/*!****************************************************************!*\
  !*** ./src/app/policylookup/policylookup.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width:100% ;\">\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Find Policy</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <p class=\"para\">Find your Cornerstone Insurance policy in Seconds!</p>\n    <div class=\"htxt\">Policy Type</div>\n    <div class=\"dropbox1\">\n      <div class=\"innerbox\">\n        <ion-input type=\"text\" [(ngModel)]=\"uTitle\" class=\"boxinput\" placeholder=\"Select Policy Type\"\n          (click)=\"openlist()\">\n        </ion-input>\n        <div class=\"imgdiv\" (click)=\"openlist()\">\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n        </div>\n\n      </div>\n      <div *ngIf=\"show==true\">\n        <div *ngFor=\"let list of listarray\" (click)=\"selectTitle(list)\">\n          <div class=\"euro-text1\">{{list.Title}}</div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"htxt\">Policy Number</div>\n    <div class=\"dropbox1\">\n      <div class=\"innerbox\">\n        <ion-input type=\"text\" [(ngModel)]=\"policynum\" class=\"boxinput\" placeholder=\"Policy Number/P10 Policy Number\">\n        </ion-input>\n\n      </div>\n    </div>\n    <div *ngIf=\"policy==true\">\n      <div class=\"htxt1\">Your Policy Information</div>\n      <div class=\"box box-success\">\n        <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table quotetable table-bordered\">\n              <tbody>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Full Name</td>\n                  <td style=\"color: black;\">{{full_name}}</td>\n                </tr>\n                <!-- <tr>\n                  <td style=\"width: 30%; color: black;\">Insurance Type</td>\n                  <td style=\"color: black;\">{{InsuranceType}}</td>\n                </tr> -->\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Start Date</td>\n                  <td style=\"color: black;\">{{StartDate}}</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Date of Expiration</td>\n                  <td style=\"color: black;\">{{DateofExpiration}}</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">E-Channel Policy Number</td>\n                  <td style=\"color: black;\">{{PolicyNumber}}</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Policy Number</td>\n                  <td style=\"color: black;\">{{P10PolicyNumber}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div *ngIf=\"gibspolicy==true\">\n      <div class=\"htxt1\">Your Policy Information</div>\n      <div class=\"box box-success\">\n        <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table quotetable table-bordered\">\n              <tbody>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Full Name</td>\n                  <td style=\"color: black;\">{{full_name}}</td>\n                </tr>\n                <!-- <tr>\n                  <td style=\"width: 30%; color: black;\">Insurance Type</td>\n                  <td style=\"color: black;\">{{InsuranceType}}</td>\n                </tr> -->\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Start Date</td>\n                  <td style=\"color: black;\">{{StartDate}}</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Date of Expiration</td>\n                  <td style=\"color: black;\">{{DateofExpiration}}</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 30%; color: black;\">Policy Number</td>\n                  <td style=\"color: black;\">{{PolicyNumber}}</td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"btndiv\">\n    <ion-button class=\"btn1\" (click)=\"policylookup()\">Submit</ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_policylookup_policylookup_module_ts.js.map