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
/* harmony import */ var D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n.wrapper {\n  width: 85%;\n  margin: 0% auto;\n}\n.para {\n  color: #1A206D;\n  font-size: 15px;\n  font-weight: bold;\n}\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n  margin-bottom: 5%;\n}\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 14px;\n  --padding-end: 15px;\n  --padding-start: 14px;\n  font-size: 14px;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n.htxt {\n  padding-bottom: 2%;\n  padding-left: 2%;\n  color: #000;\n}\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n.htxt1 {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 10%;\n  color: #000;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n.table-responsive .table-bordered {\n  border: 0;\n}\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbHBvbGljaWVzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXGluc3VyYW5jZVxcc3JjXFxhcHBcXGFsbHBvbGljaWVzXFxhbGxwb2xpY2llcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUlBQUE7QUFLUjtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSEo7QURLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDRkY7QURJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0UsaUJBQUE7QUNESjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0VGO0FEQUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNHRjtBRERBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDSUY7QURGQTtFQUNFLGVBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDS0o7QURBQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNHRjtBRERBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNJRjtBRERBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FDSUY7QURGQTtFQUNFLFNBQUE7QUNLRjtBREhBO0VBQ0UseUJBQUE7QUNNRjtBREpBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ09GIiwiZmlsZSI6ImFsbHBvbGljaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XHJcbi8vIGlvbi1oZWFkZXJ7XHJcbi8vICAgICB3aWR0aDogODUlO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4vLyB9XHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjowJSBhdXRvO1xyXG59XHJcbi5wYXJhe1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kcm9wYm94MXtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcblxyXG59XHJcbi5pbm5lcmJveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uYm94aW5wdXR7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmV1cm8tdGV4dDF7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAyMHB4O1xyXG5cclxufVxyXG4uaHR4dHtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uYnRuZGl2e1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4uYnRuMXtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYm94LXN1Y2Nlc3N7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5odHh0MXtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5wYW5lbC1ib2R5IHtcclxuXHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4O1xyXG59XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpO1xuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAlIGF1dG87XG59XG5cbi5wYXJhIHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcm9wYm94MSB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG59XG5cbi5pbm5lcmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uYm94aW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ldXJvLXRleHQxIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDIwcHg7XG59XG5cbi5odHh0IHtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJ0bmRpdiB7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvO1xufVxuXG4uYnRuMSB7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJveC1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmh0eHQxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogIzAwMDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDA7XG59XG5cbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcbn1cblxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogOHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59Il19 */";

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