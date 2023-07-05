"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 23509:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 70684);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 24068:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 23509);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 70684);
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ 1700);








let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule,
            angular4_paystack__WEBPACK_IMPORTED_MODULE_7__.Angular4PaystackModule.forRoot('pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f')
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 70684:
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 7916);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 19529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);









let PaymentPage = class PaymentPage {
    constructor(location, router, api, navCtrl) {
        this.location = location;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.value = localStorage.getItem('subProName');
        this.chooosebank = '';
        this.othermethod = false;
        this.payemntmethod = '';
        this.reference = '';
        this.amt = 0;
        this.amtShow = 0;
        this.regNo = '';
        this.engNo = '';
        this.chasisNo = '';
        this.vehclr = '';
        this.clientAddress = '';
        this.dobValue = '';
        this.yomValue = '';
    }
    paymentInit() {
        console.log('Payment initialized');
    }
    ngOnInit() {
        this.productres = JSON.parse(localStorage.getItem('productres'));
        console.log('productres=====', this.productres);
        this.quoteId = this.productres.quote.id;
        this.trxref = this.productres.quote.transaction_ref;
        this.currentdate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD');
        console.log('cdate=', this.currentdate);
        var oneYearFromNow = new Date();
        var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        this.enddate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date(result)).format('YYYY-MM-DD');
        this.subprodName = localStorage.getItem('subProName');
        this.productID = localStorage.getItem('product_id');
        console.log('productId=====', this.productID);
        this.email = localStorage.getItem('email');
        this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
        this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
        for (var i = 0; i < this.quoteItems.length; i++) {
            if (this.quoteItems[i].type == "currency") {
                this.priceofquote = this.quoteItems[i].value;
                localStorage.setItem('priceofquote', this.priceofquote);
                this.amt = this.priceofquote + '00';
                this.amtShow = this.priceofquote;
                console.log('pesyyyyyy-------', localStorage.getItem('priceofquote'));
            }
        }
        console.log('dsdasdasd', localStorage.getItem('productName'));
    }
    paymentDone(ref) {
        this.title = 'Payment successfull';
        console.log('payment succesfull-----', ref);
        if (ref.status == 'success') {
            localStorage.setItem('trxref', ref.trxref);
            this.paystacktrxref = ref.trxref;
            this.payment_method();
            // if (localStorage.getItem('subProName') == 'Third Party') {
            //   var myData = {
            //     sid: 'ECHANNEL2',
            //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
            //   };
            //   this.api.gibsapi(myData).subscribe(
            //     (res: any) => {
            //       this.api.hideLoader()
            //       console.log(res);
            //       let token = res.accessToken;
            //       this.getresult(token);
            //     },
            //     (err) => {
            //       console.log(err);
            //       this.api.hideLoader();
            //     }
            //   );
            //   // 'http://testcipapiservices.gibsonline.com/api/metadata/Policies/Motor' old url
            // } else {
            //   this.api.hideLoader()
            //   this.navCtrl.navigateRoot('paymentresponse')
            // }
        }
    }
    //new paystackapi method////
    payment_method() {
        let paydata = 'myData={"product_id":' +
            this.productID +
            ',"quote_id":' +
            this.quoteId +
            ',"payment_option":' +
            '"paystack"' +
            ',"verify_token":"' +
            localStorage.getItem('token') +
            '","method":"payment_method_select"}';
        this.api.insertData(paydata).subscribe((res) => {
            console.log('payemt response', res);
            if (res.status_no == 1) {
                this.paystackpayment();
            }
            else {
                this.api.presenttoast(res.message);
            }
        }, err => {
            this.api.hideLoader();
        });
    }
    /////////////////
    paystackpayment() {
        let datasend = 'myData={"transaction_ref":' +
            '"' + this.trxref + '"' +
            ',"paystack_transaction_ref":' +
            '"' + this.paystacktrxref + '"' +
            ',"quote_id":' +
            '"' + this.quoteId + '"' +
            ',"verify_token":"' +
            localStorage.getItem('token') +
            '","method":"standalonePaystackConfirm"}';
        this.api.showLoader();
        this.api.insertData(datasend).subscribe((res) => {
            console.log('payemt response', res);
            if (res.message != 'Transaction reference not found') {
                this.api.hideLoader();
                if (localStorage.getItem('productName') == 'Motor Insurance') {
                    this.sendcertificate();
                }
                else {
                    this.api.presenttoast(res.message);
                    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
                    console.log(this.draftArr);
                    for (var i = 0; i < this.draftArr.length; i++) {
                        if (this.draftArr[i].product_id == this.productID) {
                            this.draftArr.splice(i, 1);
                        }
                    }
                    localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
                }
            }
            else {
                this.api.hideLoader();
                this.api.presenttoast(res.message);
            }
        }, err => {
            this.api.hideLoader();
        });
    }
    sendcertificate() {
        this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
        console.log(this.draftArr);
        for (var i = 0; i < this.draftArr.length; i++) {
            if (this.draftArr[i].product_id == this.productID) {
                this.draftArr.splice(i, 1);
            }
        }
        localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
        let datasend = 'myData={"quote_id":' +
            this.quoteId +
            ',"verify_token":"' +
            localStorage.getItem('token') +
            '","method":"send_certificate"}';
        this.api.showLoader();
        this.api.insertData(datasend).subscribe((res) => {
            console.log('payemt response', res);
            this.api.hideLoader();
            if (res.status_no == 1) {
                localStorage.setItem('certificatelink', res.certificate_link);
                // this.paystackpayment()
                // this.paystackurl = this.sanitizer.bypassSecurityTrustResourceUrl(res.paystack.url)
                this.api.presenttoast(res.message);
                this.navCtrl.navigateRoot('paymentresponse');
                // let p = res.fields.callback_url
                // let split = p.split('?')[1]
                // let split2 = p.split('=')[1]
                // let transval = '&' + split
                // let reference = '&reference=' + split2
                // this.referenceval = reference
                // console.log('ddddddddddddddd', transval);
            }
            else {
                this.api.presenttoast(res.message);
            }
            // if (paymentoption == 1) {
            //   this.navCtrl.navigateForward([
            //     'payquote',
            //     {
            //       payres: JSON.stringify(res.transaction),
            //     },
            //   ]);
            // }
        }, err => {
            this.api.hideLoader();
        });
    }
    // getresult(Bearertoken) {
    //   this.api.showLoader()
    //   let postdata = {
    //     // default productID:1001
    //     "productID": '1001',
    //     "entryDate": this.currentdate,
    //     "startDate": this.currentdate,
    //     "endDate": this.enddate,
    //     "fxCurrency": "NGN",
    //     "fxRate": 1,
    //     "agentID": localStorage.getItem('agentcode'),
    //     "paymentAccountID": "1112000044",
    //     "insured": {
    //       "lastName": localStorage.getItem('fname'),
    //       "firstName": localStorage.getItem('lname'),
    //       "gender": this.genderVal,
    //       "email": localStorage.getItem('email'),
    //       "address": localStorage.getItem('clientAddress'),
    //       "phoneLine1": localStorage.getItem('phonenumber'),
    //       "isOrg": false,
    //       "cityLGA": "n/a",
    //       "stateID": "n/a",
    //       "nationality": "bd",
    //       "dateOfBirth": localStorage.getItem('dob'),
    //       "kycType": "NOT_AVAILABLE",
    //       "kycNumber": "n/a"
    //     },
    //     "sections": [
    //       {
    //         "sectionID": "n/a",
    //         "sectionSumInsured": 0,
    //         "sectionPremium": this.amtShow,
    //         "fields": [
    //           {
    //             "name": "VehicleRegNo",
    //             "value": localStorage.getItem('regNo')
    //           },
    //           {
    //             "name": "VehicleTypeID",
    //             "value": "JEEP"
    //           },
    //           {
    //             "name": "VehicleUser",
    //             "value": localStorage.getItem('userfullname')
    //           },
    //           {
    //             "name": "EngineNumber",
    //             "value": localStorage.getItem('engNo')
    //           },
    //           {
    //             "name": "EngineCapacityHP",
    //             "value": "2.5"
    //           },
    //           {
    //             "name": "ChasisNumber",
    //             "value": localStorage.getItem('chasisNo')
    //           },
    //           {
    //             "name": "VehicleUsage",
    //             "value": "PRIVATE"
    //           },
    //           {
    //             "name": "NumberOfSeats",
    //             "value": "1"
    //           },
    //           {
    //             "name": "stateOfIssue",
    //             "value": "Lagos"
    //           },
    //           {
    //             "name": "VehicleMake",
    //             "value": localStorage.getItem('vechilemakeval')
    //           },
    //           {
    //             "name": "VehicleModel",
    //             "value": localStorage.getItem('vechilemodelval')
    //           },
    //           {
    //             "name": "ManufactureYear",
    //             "value": localStorage.getItem('yomValue')
    //           },
    //           {
    //             "name": "VehicleColour",
    //             "value": localStorage.getItem('vehclr')
    //           },
    //           {
    //             "name": "CoverType",
    //             "value": 'THIRD_PARTY_ONLY'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    //   // 'https://cors-anywhere.herokuapp.com/corsdemo/'
    //   this.api
    //     .postdata(
    //       'http://testcipapiservices.gibsonline.com/api/policies',
    //       postdata,
    //       Bearertoken
    //     )
    //     .subscribe(
    //       (res: any) => {
    //         console.log('motor response---', res);
    //         this.api.hideLoader()
    //         localStorage.setItem('gibsProductres', JSON.stringify(res));
    //         this.getcertificate(Bearertoken)
    //       },
    //       (err) => {
    //         this.api.hideLoader()
    //         console.log('errrrrrrr', err);
    //         // let errormsg = err.error.errors[0].message;
    //         // this.api.presenttoast(errormsg)
    //         this.api.presenttoast(err.message)
    //       }
    //     );
    // }
    // getcertificate(token) {
    //   this.productres = JSON.parse(localStorage.getItem('gibsProductres'));
    //   this.policyNo = this.productres.policyNo;
    //   this.api.showLoader();
    //   let encode = encodeURIComponent(this.policyNo);
    //   console.log('eee--', encode);
    //   this.api.get('http://testcipapiservices.gibsonline.com/api/utilities/send/certificate?policyNo=' + encode + '&email=' + this.email, token).subscribe((res: any) => {
    //     console.log('certificate====', res);
    //     this.api.hideLoader()
    //     this.navCtrl.navigateRoot('payment2response');
    //   }, err => {
    //     this.api.hideLoader();
    //     this.api.presenttoast('Something went wrong');
    //   })
    // }
    paymentCancel() {
        console.log('payment failed');
    }
    buyOnlineQuote() {
        this.router.navigate(['/car-insurance-details']);
    }
    getAnewQuote() {
        this.router.navigate(['/home-page-screen-after-login']);
    }
    goback() {
        this.location.back();
    }
    selectmethod(val) {
        console.log('value grt====', val);
        this.payemntmethod = val;
        if (val == 'other') {
            this.othermethod = true;
        }
        else {
            this.othermethod = false;
        }
    }
    onItemChange(ev) {
        console.log(" Value is : ", ev);
        this.chooosebank = ev;
    }
    proceed() {
        if (this.payemntmethod == '') {
            this.api.presenttoast('Choose one payment method');
        }
        else {
            if (this.payemntmethod == 'WebPAY') {
                this.paymentoption = 1;
                // this.paymentapi(this.paymentoption)
            }
            // else {
            //   if (this.payemntmethod == 'other') {
            //     this.paymentoption = 2;
            //     if (this.chooosebank == '') {
            //       this.api.presenttoast('Choose atleast one bank')
            //     } else {
            //       this.paymentapi(this.paymentoption)
            //     }
            //   }
            // }
        }
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payment',
        template: _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 19529:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n\n.btn11 {\n  background: #1A206D;\n  border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.btndiv1 {\n  padding-bottom: 4%;\n  width: 85%;\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 20% auto 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7QUFBRjs7QUFHQTs7RUFFRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRkYiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpXHJcbn1cclxuXHJcbi5ib3gtc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXHJcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG5cclxuLnRhYmxlPnRib2R5PnRyPnRkIHtcclxuICBwYWRkaW5nOjZweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYnRuZGl2IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIC0tYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJ0bjEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5idG4xMXtcclxuICBiYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYnRuZGl2MXtcclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDIwJSBhdXRvIDAlO1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 7916:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\" style=\"color: black\">Make Payment</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display: flex; align-items: center; justify-content: space-around\">\r\n      <img height=\"50px\" src=\"assets/images/access_point.png\" />\r\n      <h1 style=\"margin: 0px; font-size: 22px; margin-left: 6px; color: black\">\r\n        (Amount : ₦ {{quoteItems[quoteItems.length -\r\n        1].value}} )\r\n      </h1>\r\n    </div>\r\n\r\n    <!-- <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n\r\n          <td width=\"10\">\r\n\r\n            <input type=\"radio\" value=\"WEBpay\" name=\"payment-option\" class=\"payment-option-other\"\r\n              (click)=\"selectmethod('WebPAY')\">\r\n\r\n          </td>\r\n\r\n          <td style=\" color: black;\"><strong>WebPay </strong><br><img height=\"100px;\"\r\n              src=\"https://cornerstone.com.ng/devtest/assets/img/cards.png\">\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table> -->\r\n\r\n    <table class=\"table\">\r\n      <tbody>\r\n        <tr>\r\n          <!-- <td width=\"10\">\r\n\r\n            <input type=\"radio\" value=\"paystack\" name=\"payment-option\" class=\"payment-option-other\"\r\n              (click)=\"selectmethod('paystack')\">\r\n\r\n          </td> -->\r\n\r\n          <td style=\"color: black\">\r\n            <strong>Paystack </strong><br /><img height=\"100px;\"\r\n              src=\"https://cornerstone.com.ng/assets/img/paystack.jpeg\" />\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <!-- <table class=\"table\">\r\n\r\n      <tbody>\r\n\r\n        <tr>\r\n\r\n          <td width=\"10\">\r\n\r\n            <input type=\"radio\" name=\"payment-option\" value=\"deposit\" id=\"payment-option-bank\"\r\n              (click)=\"selectmethod('other')\">\r\n\r\n          </td>\r\n\r\n          <td style=\" color: black;\"><strong>Bank Transfer in any of the following banks </strong><br><span class=\"h6\">\r\n              Pay using internet\r\n              banking or directly at any of this banks</span><br>\r\n\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n\r\n    </table> -->\r\n\r\n    <!-- <table class=\"table\" id=\"bank_list\" *ngIf=\"othermethod==true\">\r\n\r\n\r\n      <tbody>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"1\" id=\"FCMB\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/1.png\">\r\n          </td>\r\n\r\n          <td style=\"width: 50%;\">\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0135145093\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"2\" id=\"StanbicIBTC\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/2.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0008384202\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"StanbicIBTC\" class=\"StanbicIBTC\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"3\" id=\"GTBank\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/3.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0108908618\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"GTBank\" class=\"GTBank\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"4\" id=\"FirstBank\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/4.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n           >\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  2024120096\"\r\n              style=\"height:29px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"FirstBank\" class=\"FirstBank\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"6\" id=\"UnionBankGeneral\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/6.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"    0040038431\"\r\n              style=\"height:30px;width:200px;margin-top: 1px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"UnionBankGeneral\" class=\"UnionBankGeneral\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n\r\n\r\n    </table> -->\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <!-- <div class=\"btndiv\">\r\n    <ion-button class=\"btn\" (click)=\"paymentDone()\"> Proceed</ion-button>\r\n  </div> -->\r\n  <div class=\"btndiv\">\r\n    <button angular4-paystack [key]=\"'pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f'\" [email]=\"email\" [amount]=\"amt\"\r\n      [ref]=\"reference\" class=\"btn11\" (paymentInit)=\"paymentInit()\" (onClose)=\"paymentCancel()\"\r\n      (callback)=\"paymentDone($event)\">\r\n      Pay with Paystack\r\n    </button>\r\n    <!-- <ion-button (click)=\"payment_method()\">checkpayemntres</ion-button> -->\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map