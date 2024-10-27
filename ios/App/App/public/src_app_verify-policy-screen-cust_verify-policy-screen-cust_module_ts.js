"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts"],{

/***/ 78944:
/*!***************************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyScreenCustPageRoutingModule": () => (/* binding */ VerifyPolicyScreenCustPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _verify_policy_screen_cust_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-screen-cust.page */ 82474);




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

/***/ 17956:
/*!*******************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyScreenCustPageModule": () => (/* binding */ VerifyPolicyScreenCustPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _verify_policy_screen_cust_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-policy-screen-cust-routing.module */ 78944);
/* harmony import */ var _verify_policy_screen_cust_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-screen-cust.page */ 82474);







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

/***/ 82474:
/*!*****************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPolicyScreenCustPage": () => (/* binding */ VerifyPolicyScreenCustPage)
/* harmony export */ });
/* harmony import */ var D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_policy_screen_cust_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-policy-screen-cust.page.html?ngResource */ 74306);
/* harmony import */ var _verify_policy_screen_cust_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-policy-screen-cust.page.scss?ngResource */ 4107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);










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
    this.pnumber = '';
    this.policy = false;
  }

  ngOnInit() {
    const myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
    };
    this.api.gibsapi(myData).subscribe(res => {
      console.log(res);
      const token = res.accessToken;
      this.policieshistory(token);
    }, err => {
      console.log(err);
    });
  }

  policieshistory(token) {
    this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/policies', token).subscribe(response => {
      console.log(response);
      this.api.hideLoader();
    }, err => {
      console.log('error to get policies----', err);
    });
  }

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

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // let token = '39109f7df56e1CORNERStone9e685066bb852''
      // P/500/1001/2023/00235
      if (_this.pnumber == '') {
        _this.api.presenttoast('Policy Number Field is required!');
      } else {
        const myData = {
          sid: 'ECHANNEL2',
          token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
        };

        _this.api.gibsapi(myData).subscribe(res => {
          console.log(res);
          const token = res.accessToken;
          _this.bearertoken = res.accessToken;
          let encode1 = encodeURIComponent(_this.pnumber);
          console.log('dasdsadsa', encode1);

          _this.api.renewal('https://testcipapiservices.gibsonline.com/api/policies/' + encode1 + '/renew', _this.bearertoken).subscribe(response => {
            console.log(response);

            _this.api.hideLoader();
          }); // let encode1 = encodeURIComponent(this.pnumber);
          // console.log('dasdsadsa', encode1);
          // this.api.renewal('https://testcipapiservices.gibsonline.com/api/policies/' + encode1 + '/renew', res.accessToken).subscribe((response: any) => {
          //   console.log('ddddddddddddddddddd', response);
          //   this.api.hideLoader();
          // }, err => {
          //   console.log('get policy error', err);
          // });

        }, err => {
          console.log(err);
        }); // old one
        // this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=160&polnum2=' + this.pnumber, localStorage.getItem('token')).subscribe((response: any) => {
        //   console.log(response.result);
        //   this.verifypolicy = response.result
        //   localStorage.setItem('policydata', JSON.stringify(this.verifypolicy));
        //   this.api.hideLoader();
        //   if (this.verifypolicy) {
        //     if (this.verifypolicy.status == 1) {
        //       this.router.navigate(['renewals'])
        //       // this.policy = true;
        //       // this.first_name = this.verifypolicy.first_name
        //       // this.last_name = this.verifypolicy.last_name
        //       // this.dob = this.verifypolicy.dob
        //       // this.phone_number = this.verifypolicy.phone_number
        //       // this.email = this.verifypolicy.email
        //       // this.address = this.verifypolicy.address
        //     } else {
        //       this.api.presenttoast(this.verifypolicy.message)
        //     }
        //   } else {
        //     this.api.presenttoast('Policy record not found');
        //   }
        // });

      } // const params = {
      //   process: 'Processopenledapi',
      //   process_code: '160',
      //   polnum2: 'CHEF/2011/04/02072'
      // }
      // this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php', { params }, localStorage.getItem('token')).pipe(map(data => { })).subscribe(result => {
      //   console.log(result);
      // }, err => {
      //   console.log('error', err);
      // });
      // const headers = new HttpHeaders()
      // headers.set('Authorization', 'Bearer 39109f7df56e1CORNERStone9e685066bb852');
      // headers.set("Access-Control-Allow-Origin", "*");
      // headers.set("Content-Type", "application/json")
      // const myObject = {
      //   process: 'Processopenledapi',
      //   process_code: '160',
      //   polnum2: 'CHEF/2011/04/02072'
      // }
      // const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
      // const options = { params: new HttpParams(httpParams), headers: headers, };
      // this.http.get<any>('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php', options)
      //   .subscribe((data: any) => {
      //     // this.localvar = data;
      //     console.log('data====', data);
      //   }, err => {
      //     console.log('errr====', err);
      //   });
      // const modal = await this.modal.create({
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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n}\n.container {\n  width: 85%;\n  margin: 10px auto 0px;\n}\n.img-div {\n  text-align: center;\n}\np.con-p1 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n}\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\nlabel.con-l2 {\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n.con-l3 {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A206D;\n  margin-bottom: 15px;\n}\nlabel.con-l4 {\n  /* margin-top: 25px; */\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n.input {\n  height: 48px;\n  width: 100%;\n  margin: 10px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n.btn {\n  width: 70%;\n  --background: #1A206D;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  text-transform: capitalize;\n}\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n.panel-body {\n  padding: 15px;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n.table-responsive .table-bordered {\n  border: 0;\n}\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1wb2xpY3ktc2NyZWVuLWN1c3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxcdmVyaWZ5LXBvbGljeS1zY3JlZW4tY3VzdFxcdmVyaWZ5LXBvbGljeS1zY3JlZW4tY3VzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUlBQUE7QUFLUjtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSEo7QURLQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRko7QURJQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQ0RKO0FER0E7RUFFSSxrQkFBQTtBQ0RKO0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUNFSjtBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FDSUo7QURGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNLSjtBREhBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ01KO0FESEE7RUFDSSw0QkFBQTtBQ01KO0FESEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FDTUo7QURKRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ09KO0FETEU7RUFDRSxhQUFBO0FDUUo7QURORTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNTSjtBRFBFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNVSjtBRFBFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FDVUo7QURSRTtFQUNFLFNBQUE7QUNXSjtBRFRFO0VBQ0UseUJBQUE7QUNZSjtBRFZFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ2FKIiwiZmlsZSI6InZlcmlmeS1wb2xpY3ktc2NyZWVuLWN1c3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuLy8gaW9uLWhlYWRlcntcclxuLy8gICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbi8vIH1cclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5oZWFkLXB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAwcHg7XHJcbn1cclxuLmltZy1kaXYge1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjQuN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnAuY29uLXAxIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5kcm9wYm94e1xyXG4gICAgbWFyZ2luOiA0JSAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG5cclxuICB9XHJcbiAgLmlubmVyZHJvcGJveHtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyLjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB9XHJcbiAgLmV1cm8tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgfVxyXG4gIC5ldXJvLXRleHQxe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIGxhYmVsLmNvbi1sMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb24tbDN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5sYWJlbC5jb24tbDQge1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuICAuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi8vc2V0dGluZyBwbGFjZWhvbGRlciBmb250LWZhbWlseVxyXG5pb24taW5wdXQge1xyXG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB9XHJcblxyXG4gIC5ib3h7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKVxyXG4gIH1cclxuICAuYm94LXN1Y2Nlc3N7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB9XHJcbiAgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICAudGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4O1xyXG4gIH1cclxuICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7XG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZC1wIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxQTIwNkQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDEwcHggYXV0byAwcHg7XG59XG5cbi5pbWctZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wLmNvbi1wMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZHJvcGJveCB7XG4gIG1hcmdpbjogNCUgMCU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbn1cblxuLmlubmVyZHJvcGJveCB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAyLjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZXVyby10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmV1cm8tdGV4dDEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxubGFiZWwuY29uLWwyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29uLWwzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWwuY29uLWw0IHtcbiAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggYXV0byAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDcwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLmJveCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uYm94LXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufSJdfQ== */";

/***/ }),

/***/ 74306:
/*!******************************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Renew Policy</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"img-div\">\r\n      <img src=\"assets/images/policy-tick.svg\" alt=\"\" style=\"width: 110px;\r\n      height:110px;\">\r\n    </div>\r\n\r\n    <div style=\"\r\n    text-align: center;\r\n    margin:20px auto 0px;\">\r\n      <p class=\"con-p1\">Renew your vehicle policy in minutes</p>\r\n    </div>\r\n\r\n    <!-- <div style=\"margin-top:25px;\">\r\n      <label class=\"con-l1\">Policy Type</label>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n          <div class=\"euro-text\">{{Insurance}}</div>\r\n          <div class=\"imgdiv\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div style=\"margin-top: 25px;\">\r\n      <label class=\"con-l2\">Policy Number</label>\r\n      <div>\r\n        <ion-input class=\"input\" placeholder=\"13254PA\" [(ngModel)]=\"pnumber\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div style=\"margin-top:25px;\">\r\n      <ion-label class=\"con-l3\">OR</ion-label>\r\n      <label class=\"con-l4\">Vehicle Registration Number</label>\r\n      <div>\r\n        <ion-input class=\"input\" placeholder=\"13254PA\"></ion-input>\r\n      </div>\r\n    </div> -->\r\n    <div *ngIf=\"policy==true\">\r\n      <div class=\"box box-success\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table quotetable table-bordered\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">First Name</td>\r\n                  <td style=\"color: black;\">{{first_name}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Last Name</td>\r\n                  <td style=\"color: black;\">{{last_name}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Date Of Birth</td>\r\n                  <td style=\"color: black;\">{{dob}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Email</td>\r\n                  <td style=\"color: black;\">{{email}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Phone Number</td>\r\n                  <td style=\"color: black;\">{{phone_number}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width: 30%; color: black;\">Address</td>\r\n                  <td style=\"color: black;\">{{address}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"text-align:center ; margin: 0px auto 30px;\">\r\n    <ion-button class=\"btn\" (click)=\"PopupCust()\">Submit</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts.js.map