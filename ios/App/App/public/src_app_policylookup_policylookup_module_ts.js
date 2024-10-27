"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_policylookup_policylookup_module_ts"],{

/***/ 94082:
/*!*************************************************************!*\
  !*** ./src/app/policylookup/policylookup-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicylookupPageRoutingModule": () => (/* binding */ PolicylookupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _policylookup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policylookup.page */ 58949);




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

/***/ 53035:
/*!*****************************************************!*\
  !*** ./src/app/policylookup/policylookup.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicylookupPageModule": () => (/* binding */ PolicylookupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _policylookup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policylookup-routing.module */ 94082);
/* harmony import */ var _policylookup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policylookup.page */ 58949);







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

/***/ 58949:
/*!***************************************************!*\
  !*** ./src/app/policylookup/policylookup.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicylookupPage": () => (/* binding */ PolicylookupPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _policylookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policylookup.page.html?ngResource */ 75772);
/* harmony import */ var _policylookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policylookup.page.scss?ngResource */ 70745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);






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
    var number = 'YEKINI, AZEEZAT, ABOSEDE';
    var stringValue = number.replace(/,/g, '');
    console.log(stringValue, 'using String');
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
                _this.policy = false; // this.api.presenttoast(response.result.message);

                _this.api.alertboxshow(response.result.message);
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
              _this.gibspolicy = false; // this.api.presenttoast('Policy record not found');

              _this.api.alertboxshow('Policy record not found');
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
      this.policy = false; // this.api.presenttoast(err.error.message);

      this.api.alertboxshow(err.error.message);
      this.api.hideLoader();
    }); // this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Policies/Motor', Bearertoken).subscribe((res: any) => {
    //   console.log('ressssss', res);
    //   let postdata = {
    //     "productID": "1103",
    //     "entryDate": "2022-10-20T04:29:31.261Z",
    //     "startDate": "2018-03-13T00:00:00",
    //     "endDate": "2019-03-12T00:00:00",
    //     "fxCurrency": "NGN",
    //     "fxRate": 1,
    //     "referrerSource": "AGENT",
    //     "referrerDetails": "string",
    //     "paymentProviderID": "string",
    //     "paymentReferenceID": "string",
    //     "insured": {
    //       "title": "string",
    //       "lastName": "string",
    //       "firstName": "string",
    //       "otherName": "string",
    //       "gender": "MALE",
    //       "email": "user@example.com",
    //       "address": "string",
    //       "phoneLine1": "0803 502 6956",
    //       "phoneLine2": "0803 502 6956",
    //       "isOrg": true,
    //       "orgName": "string",
    //       "orgRegNumber": "string",
    //       "orgRegDate": "2022-10-20T04:29:31.261Z",
    //       "taxIdNumber": "string",
    //       "cityLGA": "string",
    //       "stateID": "string",
    //       "nationality": "string",
    //       "dateOfBirth": "2022-10-20T04:29:31.261Z",
    //       "kycType": "NOT_AVAILABLE",
    //       "kycNumber": "string",
    //       "kycIssueDate": "2022-10-20T04:29:31.261Z",
    //       "kycExpiryDate": "2022-10-20T04:29:31.261Z",
    //       "nextOfKin": {
    //         "title": "string",
    //         "lastName": "string",
    //         "firstName": "string",
    //         "otherName": "string",
    //         "gender": "MALE",
    //         "email": "user@example.com",
    //         "address": "string",
    //         "phoneLine1": "123456",
    //         "phoneLine2": "123456"
    //       }
    //     },
    //     "policySections": [
    //       {
    //         "sectionID": "string",
    //         "sectionSumInsured": 0,
    //         "sectionPremium": 0,
    //         "vehicleRegNo": "string",
    //         "vehicleTypeID": "VAN",
    //         "vehicleUser": "string",
    //         "engineNumber": "string",
    //         "chasisNumber": "string",
    //         "vehicleUsage": "PRIVATE",
    //         "numberOfSeats": 0,
    //         "stateOfIssue": "string",
    //         "vehicleMake": "string",
    //         "vehicleModel": "string",
    //         "manufactureYear": 0,
    //         "vehicleColour": "string",
    //         "engineCapacityHP": "string",
    //         "coverType": "COMPREHENSIVE"
    //       }
    //     ]
    //   }
    //   this.api.postdata('http://testcipapiservices.gibsonline.com/api/Policies/Motor', postdata, Bearertoken).subscribe((res: any) => {
    //     console.log('motor response---', res);
    //   })
    // })
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

/***/ 70745:
/*!****************************************************************!*\
  !*** ./src/app/policylookup/policylookup.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.para {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n  margin-bottom: 5%;\n}\n\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 14px;\n  --padding-end: 15px;\n  --padding-start: 14px;\n  font-size: 14px;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n\n.htxt {\n  padding-bottom: 2%;\n  padding-left: 2%;\n  color: #000;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.htxt1 {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 10%;\n  color: #000;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeWxvb2t1cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFxpbnN1cmFuY2VcXHNyY1xcYXBwXFxwb2xpY3lsb29rdXBcXHBvbGljeWxvb2t1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0UsaUJBQUE7QUNHSjs7QUREQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLDBCQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDU0o7O0FESkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDT0Y7O0FETEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRExBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FDUUY7O0FETkE7RUFDRSxTQUFBO0FDU0Y7O0FEUEE7RUFDRSx5QkFBQTtBQ1VGOztBRFJBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ1dGIiwiZmlsZSI6InBvbGljeWxvb2t1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46MCUgYXV0bztcclxufVxyXG4ucGFyYXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZHJvcGJveDF7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG5cclxufVxyXG4uaW5uZXJib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmJveGlucHV0e1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ldXJvLXRleHQxe1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMjBweDtcclxuXHJcbn1cclxuLmh0eHR7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmJ0bmRpdntcclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmJ0bjF7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmJveC1zdWNjZXNze1xyXG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uaHR4dDF7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ucGFuZWwtYm9keSB7XHJcblxyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvO1xufVxuXG4ucGFyYSB7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHJvcGJveDEge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xufVxuXG4uaW5uZXJib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmJveGlucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZXVyby10ZXh0MSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAyMHB4O1xufVxuXG4uaHR4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5idG5kaXYge1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0bztcbn1cblxuLmJ0bjEge1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5ib3gtc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5odHh0MSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufSJdfQ== */";

/***/ }),

/***/ 75772:
/*!****************************************************************!*\
  !*** ./src/app/policylookup/policylookup.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Verify Policy</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <p class=\"para\">Find your Insurance policy in Seconds!</p>\r\n    <div class=\"htxt\">Policy Type</div>\r\n    <div class=\"dropbox1\">\r\n      <div class=\"innerbox\">\r\n        <ion-input type=\"text\" [(ngModel)]=\"uTitle\" class=\"boxinput\" placeholder=\"Select Policy Type\"\r\n          (click)=\"openlist()\">\r\n        </ion-input>\r\n        <div class=\"imgdiv\" (click)=\"openlist()\">\r\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"show==true\">\r\n        <div *ngFor=\"let list of listarray\" (click)=\"selectTitle(list)\">\r\n          <div class=\"euro-text1\">{{list.Title}}</div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"htxt\">Policy Number</div>\r\n    <div class=\"dropbox1\">\r\n      <div class=\"innerbox\">\r\n        <ion-input type=\"text\" [(ngModel)]=\"policynum\" class=\"boxinput\" placeholder=\"Policy Number/P10 Policy Number\">\r\n        </ion-input>\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"policy==true\">\r\n      <div class=\"htxt1\">Your Policy Information</div>\r\n      <div class=\"box box-success\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table quotetable table-bordered\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Full Name</td>\r\n                  <td style=\"color: black;\">{{full_name}}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td style=\"width: 30%; color: black;\">Insurance Type</td>\r\n                  <td style=\"color: black;\">{{InsuranceType}}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Start Date</td>\r\n                  <td style=\"color: black;\">{{StartDate}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Date of Expiration</td>\r\n                  <td style=\"color: black;\">{{DateofExpiration}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">E-Channel Policy Number</td>\r\n                  <td style=\"color: black;\">{{PolicyNumber}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Policy Number</td>\r\n                  <td style=\"color: black;\">{{P10PolicyNumber}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Policy Status</td>\r\n                  <td style=\"color: black;\">{{statusdesc}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"gibspolicy==true\">\r\n      <div class=\"htxt1\">Your Policy Information</div>\r\n      <div class=\"box box-success\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table quotetable table-bordered\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Customer Name</td>\r\n                  <td style=\"color: black;\">{{full_name}}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td style=\"width: 30%; color: black;\">Insurance Type</td>\r\n                  <td style=\"color: black;\">{{InsuranceType}}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Start Date</td>\r\n                  <td style=\"color: black;\">{{StartDate}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Date of Expiration</td>\r\n                  <td style=\"color: black;\">{{DateofExpiration}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Policy Number</td>\r\n                  <td style=\"color: black;\">{{PolicyNumber}}</td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div class=\"btndiv\">\r\n    <ion-button class=\"btn1\" (click)=\"policylookup()\">Submit</ion-button>\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_policylookup_policylookup_module_ts.js.map