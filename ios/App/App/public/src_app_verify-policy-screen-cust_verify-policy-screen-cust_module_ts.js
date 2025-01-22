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
/* harmony import */ var _Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
      const token = res.accessToken;
      this.policieshistory(token);
    }, err => {});
  }

  policieshistory(token) {
    this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/policies', token).subscribe(response => {
      this.api.hideLoader();
    }, err => {});
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

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
          const token = res.accessToken;
          _this.bearertoken = res.accessToken;
          let encode1 = encodeURIComponent(_this.pnumber);

          _this.api.renewal('https://testcipapiservices.gibsonline.com/api/policies/' + encode1 + '/renew', _this.bearertoken).subscribe(response => {
            _this.api.hideLoader();
          }, err => {
            _this.api.alertboxshow('Validation Failed');
          }); // let encode1 = encodeURIComponent(this.pnumber);
          // this.api.renewal('https://testcipapiservices.gibsonline.com/api/policies/' + encode1 + '/renew', res.accessToken).subscribe((response: any) => {
          //   this.api.hideLoader();
          // }, err => {
          // });

        }, err => {}); // old one
        // this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=160&polnum2=' + this.pnumber, localStorage.getItem('token')).subscribe((response: any) => {
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
      // }, err => {
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
      //   }, err => {
      //   });
      // const modal = await this.modal.create({
      //   component: VerifyPolicyPopupCustPage,
      //   cssClass: 'PolicyPopupCust',
      // });
      // modal.onDidDismiss().then((data) => {
      // });
      // return await modal.present();

    })();
  }

  rrr() {
    if (!this.pnumber) {
      return;
    }

    this.api.showLoader();
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","registration_number":"' + this.pnumber + '","method":"get_quote_for_renewal"}'; // 'myData={"verify_token":"' + 'fJ1ur7uKfAuJ7LfX' +
    // '","product_id":"' + '2' +
    // '","quote_id":"' + '123' +
    // '","payment_option":"flutterwav' +
    // '","method":"payment_method_select"}';
    // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', myData).subscribe(

    this.api.renewalC('https://www.cornerstone.com.ng/webservice', myData).subscribe(res => {
      this.api.hideLoader(); // if (res.status_no == 1) {

      if (res.status_no != 0) {
        if (res.status == 'paid') {
          this.api.presenttoast('Payment has been already done.');
        } else {
          this.edit_renewal_quote();
        }
      } else {
        this.api.presenttoast(res.message);
      } //   if (this.pastPayment && this.pastPayment.length > 0) {
      //   } else {
      //     this.pastPayment = ''
      //   }
      // }

    }, err => {
      this.api.hideLoader();
    });
  }

  edit_renewal_quote() {
    if (!this.pnumber) {
      return;
    }

    this.api.showLoader();
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","registration_number":"' + this.pnumber + '","method":"edit_renewal_quote"}'; // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', myData).subscribe(

    this.api.renewalC('https://www.cornerstone.com.ng/webservice', myData).subscribe(res => {
      this.api.hideLoader();

      if (res.status_no == 1) {
        this.api.policyamountDue = res.amount;
        this.renewPPP(res);
      } else {}
    }, err => {
      this.api.hideLoader();
    });
  }

  renewPPP(val) {
    var referred_by = '';
    var pep_category = '';

    if (val.fromGibs) {
      for (let i = 0; i < val.quoteItems.length; i++) {
        let vvv = val.quoteItems[i];

        if (vvv.field_name == 'referred_by') {
          referred_by = vvv.value;
          this.referred_by = vvv.value;
        }

        if (vvv.field_name == 'pep_category') {
          pep_category = vvv.value;
        }

        if (vvv.field_name == 'engine_number') {
          this.engine_number = vvv.value;
        }

        if (vvv.field_name == 'chasis_number') {
          this.chasis_number = vvv.value;
        }

        if (vvv.field_name == 'vehicle_colour') {
          this.vehicle_colour = vvv.value;
        }

        if (vvv.field_name == 'address') {
          this.address_vvv = vvv.value;
        }

        if (vvv.field_name == 'year_of_purchase') {
          this.year_of_purchase = vvv.value;
        }

        if (vvv.field_name == 'year_of_manufacture') {
          this.year_of_manufacture = vvv.value;
        }

        if (vvv.field_name == 'date_of_birth') {
          this.date_of_birth = vvv.value;
        }
      }
    } else {
      let vvv = val.quote.details;

      if (vvv) {
        if (vvv.referred_by) {
          referred_by = vvv.referred_by.value;
          this.referred_by = vvv.referred_by.value;
        }

        if (vvv.pep_category) {
          pep_category = vvv.pep_category.value;
        }

        if (vvv.engine_number) {
          this.engine_number = vvv.engine_number.value;
        }

        if (vvv.chasis_number) {
          this.chasis_number = vvv.chasis_number.value;
        }

        if (vvv.vehicle_colour) {
          this.vehicle_colour = vvv.vehicle_colour.value;
        }

        if (vvv.address) {
          this.address_vvv = vvv.address.value;
        }

        if (vvv.year_of_purchase) {
          this.year_of_purchase = vvv.year_of_purchase.value;
        }

        if (vvv.year_of_manufacture) {
          this.year_of_manufacture = vvv.year_of_manufacture.value;
        }

        if (vvv.date_of_birth) {
          this.date_of_birth = vvv.date_of_birth.value;
        }
      }
    } // }


    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","registration_number":"' + this.pnumber + '","referred_by":"' + (this.referred_by ?? 'NO') + '","referrer_details":"' + (this.referred_by ?? 'NO') + '","pep_category":"' + pep_category + '","occupation":"' + '' + '","method":"renew_your_policy"}';
    console.log('myData----------------', myData); // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', myData).subscribe(

    this.api.renewalC('https://www.cornerstone.com.ng/webservice', myData).subscribe(res => {
      this.api.hideLoader();
      console.log('renew_your_policy----------------', JSON.stringify(res));

      if (res.status_no == 1) {
        this.api.nextPayment = res;
        this.router.navigate(['policypay']); // this.save_product_proposal(res)
      } else {
        this.api.presenttoast(res.message);
      }
    }, err => {
      this.api.hideLoader();
    }); // }
  }

  save_product_proposal(val) {
    let datasend = 'myData={"product_id":' + '"' + val.quote.product_id + '"' + ',"quote_id":' + '"' + val.quote.id + '"' + ',"name":' + '"' + val.product.name + '"' + ',"registration_number":' + '"' + this.pnumber + '"' + ',"engine_number":' + '"' + this.engine_number + '"' + ',"chasis_number":' + '"' + this.chasis_number + '"' + ',"vehicle_colour":' + '"' + this.vehicle_colour + '"' + ',"address":' + '"' + this.address_vvv + '"' + ',"year_of_purchase":' + '"' + this.year_of_purchase + '"' + ',"year_of_manufacture":' + '"' + this.year_of_manufacture + '"' + ',"date_of_birth":' + '"' + this.date_of_birth + '"' + ',"referred_by":' + '"' + this.referred_by + '"' + ',"payment_option":' + '"' + 'flutterwave ' + '"' + ',"verify_token":"' + localStorage.getItem('token') + // '","method":"standalonePaystackConfirm"}';
    '","method":"save_product_proposal"}';
    this.api.showLoader(); // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', datasend).subscribe((res: any) => {

    this.api.renewalC('https://www.cornerstone.com.ng/webservice', datasend).subscribe(res => {
      console.log('save_product_proposal---------------', res);

      if (res.status_no == 1) {
        this.api.hideLoader();
        this.api.alertboxshow(res.message);
      } else {
        this.api.hideLoader(); // this.api.presenttoast(res.message)

        this.api.alertboxshow(res.message);
      }
    }, err => {
      this.api.alertboxshow('error in standalonePaystackConfirm: ' + JSON.stringify(err));
      this.api.hideLoader();
    });
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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n}\n.container {\n  width: 85%;\n  margin: 10px auto 0px;\n}\n.img-div {\n  text-align: center;\n}\np.con-p1 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 0px;\n}\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\nlabel.con-l2 {\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n.con-l3 {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A206D;\n  margin-bottom: 15px;\n}\nlabel.con-l4 {\n  /* margin-top: 25px; */\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n.input {\n  height: 48px;\n  width: 100%;\n  margin: 10px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n.btn {\n  width: 70%;\n  --background: #1A206D;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  text-transform: capitalize;\n}\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n.panel-body {\n  padding: 15px;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n.table-responsive .table-bordered {\n  border: 0;\n}\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n.table > tbody > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1wb2xpY3ktc2NyZWVuLWN1c3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFJQUFBO0FBS1I7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBSUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdBO0VBRUksa0JBQUE7QUFESjtBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUlKO0FBRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0o7QUFIQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFNSjtBQUhBO0VBQ0ksNEJBQUE7QUFNSjtBQUhFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5Q0FBQTtBQU1KO0FBSkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFPSjtBQUxFO0VBQ0UsYUFBQTtBQVFKO0FBTkU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBU0o7QUFQRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBVUo7QUFQRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQVVKO0FBUkU7RUFDRSxTQUFBO0FBV0o7QUFURTtFQUNFLHlCQUFBO0FBWUo7QUFWRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFhSiIsImZpbGUiOiJ2ZXJpZnktcG9saWN5LXNjcmVlbi1jdXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XG4vLyBpb24taGVhZGVye1xuLy8gICAgIHdpZHRoOiA4NSU7XG4vLyAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xuLy8gfVxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZC1we1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDEwcHggYXV0byAwcHg7XG59XG4uaW1nLWRpdiB7XG4gICAgLy8gbWFyZ2luLXRvcDogMjQuN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnAuY29uLXAxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5kcm9wYm94e1xuICAgIG1hcmdpbjogNCUgMCU7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcblxuICB9XG4gIC5pbm5lcmRyb3Bib3h7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIuOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgfVxuICAuZXVyby10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gIH1cbiAgLmV1cm8tdGV4dDF7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgbGFiZWwuY29uLWwyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLmNvbi1sM3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxubGFiZWwuY29uLWw0IHtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNXB4OyAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG4gIC5pbnB1dHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG4uYnRuIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4vL3NldHRpbmcgcGxhY2Vob2xkZXIgZm9udC1mYW1pbHlcbmlvbi1pbnB1dCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgfVxuXG4gIC5ib3h7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKVxuICB9XG4gIC5ib3gtc3VjY2Vzc3tcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgLnBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgdGFibGUge1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIH1cbiAgLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcbiAgfVxuICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICB9XG4iXX0= */";

/***/ }),

/***/ 74306:
/*!******************************************************************************************!*\
  !*** ./src/app/verify-policy-screen-cust/verify-policy-screen-cust.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row style=\"display: flex;\n    align-items: center;\">\n            <ion-col size=\"2\" style=\"padding-left: 25px;\">\n                <ion-menu-toggle>\n                    <ion-buttons>\n                        <div style=\"width:100% ;\">\n                            <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\n                        </div>\n                    </ion-buttons>\n                </ion-menu-toggle>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\">Renew Policy</div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <div class=\"container\">\n\n        <div class=\"img-div\">\n            <img src=\"assets/images/policy-tick.svg\" alt=\"\" style=\"width: 110px;\n      height:110px;\">\n        </div>\n\n        <div style=\"\n    text-align: center;\n    margin:20px auto 0px;\">\n            <p class=\"con-p1\">Renew your vehicle policy in minutes</p>\n        </div>\n\n        <!-- <div style=\"margin-top:25px;\">\n      <label class=\"con-l1\">Policy Type</label>\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\n          <div class=\"euro-text\">{{Insurance}}</div>\n          <div class=\"imgdiv\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n          </div>\n        </div>\n        <div *ngIf=\"show==true\">\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\n          </div>\n\n        </div>\n      </div>\n    </div> -->\n\n        <div style=\"margin-top: 25px;\">\n            <label class=\"con-l2\">Vehicle Licence Number</label>\n            <div>\n                <ion-input class=\"input\" placeholder=\"13254PA\" [(ngModel)]=\"pnumber\"></ion-input>\n            </div>\n        </div>\n\n        <!-- <div style=\"margin-top:25px;\">\n      <ion-label class=\"con-l3\">OR</ion-label>\n      <label class=\"con-l4\">Vehicle Registration Number</label>\n      <div>\n        <ion-input class=\"input\" placeholder=\"13254PA\"></ion-input>\n      </div>\n    </div> -->\n        <div *ngIf=\"policy==true\">\n            <div class=\"box box-success\">\n                <div class=\"panel-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table quotetable table-bordered\">\n                            <tbody>\n                                <tr>\n                                    <td style=\"width: 30%; color: black;\">First Name</td>\n                                    <td style=\"color: black;\">{{first_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td style=\"width: 30%; color: black;\">Last Name</td>\n                                    <td style=\"color: black;\">{{last_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td style=\"width: 30%; color: black;\">Date Of Birth</td>\n                                    <td style=\"color: black;\">{{dob}}</td>\n                                </tr>\n                                <tr>\n                                    <td style=\"width: 30%; color: black;\">Email</td>\n                                    <td style=\"color: black;\">{{email}}</td>\n                                </tr>\n                                <tr>\n                                    <td style=\"width: 30%; color: black;\">Phone Number</td>\n                                    <td style=\"color: black;\">{{phone_number}}</td>\n                                </tr>\n                                <tr>\n                                    <td style=\"width: 30%; color: black;\">Address</td>\n                                    <td style=\"color: black;\">{{address}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <div style=\"text-align:center ; margin: 0px auto 30px;\">\n        <ion-button class=\"btn\" (click)=\"rrr()\">Submit</ion-button>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts.js.map