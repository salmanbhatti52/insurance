"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_allpolicies_allpolicies_module_ts"],{

/***/ 58511:
/*!***********************************************************!*\
  !*** ./src/app/allpolicies/allpolicies-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllpoliciesPageRoutingModule": () => (/* binding */ AllpoliciesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _allpolicies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allpolicies.page */ 17970);




const routes = [
    {
        path: '',
        component: _allpolicies_page__WEBPACK_IMPORTED_MODULE_0__.AllpoliciesPage
    }
];
let AllpoliciesPageRoutingModule = class AllpoliciesPageRoutingModule {
};
AllpoliciesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllpoliciesPageRoutingModule);



/***/ }),

/***/ 8194:
/*!***************************************************!*\
  !*** ./src/app/allpolicies/allpolicies.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllpoliciesPageModule": () => (/* binding */ AllpoliciesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _allpolicies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allpolicies-routing.module */ 58511);
/* harmony import */ var _allpolicies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allpolicies.page */ 17970);







let AllpoliciesPageModule = class AllpoliciesPageModule {
};
AllpoliciesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allpolicies_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllpoliciesPageRoutingModule
        ],
        declarations: [_allpolicies_page__WEBPACK_IMPORTED_MODULE_1__.AllpoliciesPage]
    })
], AllpoliciesPageModule);



/***/ }),

/***/ 17970:
/*!*************************************************!*\
  !*** ./src/app/allpolicies/allpolicies.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllpoliciesPage": () => (/* binding */ AllpoliciesPage)
/* harmony export */ });
/* harmony import */ var E_Eigix_i2_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _allpolicies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allpolicies.page.html?ngResource */ 93657);
/* harmony import */ var _allpolicies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allpolicies.page.scss?ngResource */ 99532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);






let AllpoliciesPage = class AllpoliciesPage {
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

  ngOnInit() {}

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

    return (0,E_Eigix_i2_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.uTitle == '') {
        _this.api.presenttoast('Please select an item from dropdown');
      } else if (_this.policynum == '') {
        _this.api.presenttoast('Policy Number Field is required!');
      } else {
        if (_this.uTitle == 'Gen Business') {
          _this.api.showLoader();

          var myData = {
            sid: 'ECHANNEL2',
            token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
          };

          _this.api.gibsapi(myData).subscribe(res => {
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

          _this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&polnum2=' + _this.policynum + '&process_code=140', '39109f7df56e1CORNERStone9e685066bb852').subscribe(response => {
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
                _this.statusdesc = _this.verifypolicy.statusdesc;
              }
            } else {
              _this.gibspolicy = false;

              _this.api.presenttoast('Policy record not found');
            }
          }, err => {
            _this.gibspolicy = false;
            _this.policy = false;

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
    let url = 'https://testcipapiservices.gibsonline.com/api/policies/' + encode;
    this.api.getpolicy(url, Bearertoken).subscribe(response => {
      this.api.hideLoader();
      console.log(response);
      this.policy = false;
      this.gibspolicy = true;
      this.full_name = response.customerName;
      this.StartDate = response.startDate;
      this.DateofExpiration = response.endDate;
      this.PolicyNumber = response.policyNo;
    }, err => {
      console.log(err);
      this.gibspolicy = false;
      this.policy = false;
      this.api.presenttoast(err.error.title);
      this.api.hideLoader();
    });
  }

};

AllpoliciesPage.ctorParameters = () => [{
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}];

AllpoliciesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-allpolicies',
  template: _allpolicies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_allpolicies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AllpoliciesPage);


/***/ }),

/***/ 99532:
/*!**************************************************************!*\
  !*** ./src/app/allpolicies/allpolicies.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n.wrapper {\n  width: 85%;\n  margin: 0% auto;\n}\n.para {\n  color: #1A206D;\n  font-size: 15px;\n  font-weight: bold;\n}\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n  margin-bottom: 5%;\n}\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 14px;\n  --padding-end: 15px;\n  --padding-start: 14px;\n  font-size: 14px;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n.htxt {\n  padding-bottom: 2%;\n  padding-left: 2%;\n  color: #000;\n}\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n.htxt1 {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 10%;\n  color: #000;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n.table-responsive .table-bordered {\n  border: 0;\n}\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbHBvbGljaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxSUFBQTtBQUtSO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFISjtBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFGRjtBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDRSxpQkFBQTtBQURKO0FBR0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRUY7QUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUdGO0FBREE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFJRjtBQUZBO0VBQ0UsZUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFLSjtBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUdGO0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUFJRjtBQUZBO0VBQ0UsU0FBQTtBQUtGO0FBSEE7RUFDRSx5QkFBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBT0YiLCJmaWxlIjoiYWxscG9saWNpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuLy8gaW9uLWhlYWRlcntcclxuLy8gICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbi8vIH1cclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOjAlIGF1dG87XHJcbn1cclxuLnBhcmF7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRyb3Bib3gxe1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuXHJcbn1cclxuLmlubmVyYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5ib3hpbnB1dHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZXVyby10ZXh0MXtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDIwcHg7XHJcblxyXG59XHJcbi5odHh0e1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwJSBhdXRvO1xyXG59XHJcbi5idG4xe1xyXG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5ib3gtc3VjY2Vzc3tcclxuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmh0eHQxe1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnBhbmVsLWJvZHkge1xyXG5cclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 93657:
/*!**************************************************************!*\
  !*** ./src/app/allpolicies/allpolicies.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">My Policy</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <p class=\"para\">Find your Insurance policy in Seconds!</p>\r\n\r\n    <div class=\"htxt\">Policy Number</div>\r\n    <div class=\"dropbox1\">\r\n      <div class=\"innerbox\">\r\n        <ion-input type=\"text\" [(ngModel)]=\"uTitle\" class=\"boxinput\" placeholder=\"Select Policy Type\"\r\n          (click)=\"openlist()\">\r\n        </ion-input>\r\n        <div class=\"imgdiv\" (click)=\"openlist()\">\r\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"show==true\">\r\n        <div *ngFor=\"let list of listarray\" (click)=\"selectTitle(list)\">\r\n          <div class=\"euro-text1\">{{list.Title}}</div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"htxt\">Policy Number</div>\r\n    <div class=\"dropbox1\">\r\n      <div class=\"innerbox\">\r\n        <ion-input type=\"text\" [(ngModel)]=\"policynum\" class=\"boxinput\" placeholder=\"Policy Number/P10 Policy Number\">\r\n        </ion-input>\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"policy==true\">\r\n      <div class=\"htxt1\">Your Policy Information</div>\r\n      <div class=\"box box-success\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table quotetable table-bordered\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Full Name</td>\r\n                  <td style=\"color: black;\">{{full_name}}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td style=\"width: 30%; color: black;\">Insurance Type</td>\r\n                  <td style=\"color: black;\">{{InsuranceType}}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Start Date</td>\r\n                  <td style=\"color: black;\">{{StartDate}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Date of Expiration</td>\r\n                  <td style=\"color: black;\">{{DateofExpiration}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">E-Channel Policy Number</td>\r\n                  <td style=\"color: black;\">{{PolicyNumber}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Policy Number</td>\r\n                  <td style=\"color: black;\">{{P10PolicyNumber}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Policy Status</td>\r\n                  <td style=\"color: black;\">{{statusdesc}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"gibspolicy==true\">\r\n      <div class=\"htxt1\">Your Policy Information</div>\r\n      <div class=\"box box-success\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table quotetable table-bordered\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Customer Name</td>\r\n                  <td style=\"color: black;\">{{full_name}}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td style=\"width: 30%; color: black;\">Insurance Type</td>\r\n                  <td style=\"color: black;\">{{InsuranceType}}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Start Date</td>\r\n                  <td style=\"color: black;\">{{StartDate}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Date of Expiration</td>\r\n                  <td style=\"color: black;\">{{DateofExpiration}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Policy Number</td>\r\n                  <td style=\"color: black;\">{{PolicyNumber}}</td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div class=\"btndiv\">\r\n    <ion-button class=\"btn1\" (click)=\"policylookup()\">Submit</ion-button>\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_allpolicies_allpolicies_module_ts.js.map