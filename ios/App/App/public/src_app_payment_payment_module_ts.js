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
        else {
            this.api.alertboxshow('Something went Wrong');
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
                // this.api.presenttoast(res.message);
                this.api.alertboxshow(res.message);
            }
        }, err => {
            this.api.alertboxshow('err in payment method select ' + err);
            // this.api.hideLoader()
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
            // this.api.alertboxshow(res);
            if (res.status_no == 1) {
                this.api.hideLoader();
                this.api.alertboxshow(res.message);
                // if (localStorage.getItem('productName') == 'Motor Insurance') {
                this.sendcertificate();
                // } else {
                // this.api.presenttoast(res.message)
                // this.api.alertboxshow(res.message)
                this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
                console.log(this.draftArr);
                // for (var i = 0; i < this.draftArr.length; i++) {
                //   if (this.draftArr[i].product_id == this.productID) {
                //     this.draftArr.splice(i, 1);
                //   }
                // }
                // localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
                // }
            }
            else {
                this.api.hideLoader();
                // this.api.presenttoast(res.message)
                this.api.alertboxshow(res.message);
            }
        }, err => {
            this.api.alertboxshow('error in standalonePaystackConfirm: ' + JSON.stringify(err));
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
        // this.api.showLoader()
        this.api.insertData(datasend).subscribe((res) => {
            console.log('payemt response', res);
            this.api.hideLoader();
            // this.api.alertboxshow(res);
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
                // this.api.presenttoast(res.message)
                this.api.alertboxshow(res.message);
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
            this.api.alertboxshow('err in certificate' + err);
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n\n.btn11 {\n  background: #1A206D;\n  border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.btndiv1 {\n  padding-bottom: 4%;\n  width: 85%;\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 20% auto 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxccGF5bWVudFxccGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBOztFQUVFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNGRiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA1JSlcclxufVxyXG5cclxuLmJveC1zdWNjZXNzIHtcclxuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZCxcclxuLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4O1xyXG59XHJcblxyXG4udGFibGU+dGJvZHk+dHI+dGQge1xyXG4gIHBhZGRpbmc6NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5idG5kaXYge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAtLWJvcmRlcjogMXB4IHNvbGlkICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bjExe1xyXG4gIGJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5idG5kaXYxe1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMjAlIGF1dG8gMCU7XHJcbn1cclxuXHJcbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4uYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5ib3gtc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDA7XG59XG5cbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCxcbi50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uYnRuZGl2IHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJ0bjEge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMUEyMDZEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5idG4xMSB7XG4gIGJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYnRuZGl2MSB7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgd2lkdGg6IDg1JTtcbiAgcGFkZGluZy1ib3R0b206IDQlO1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDIwJSBhdXRvIDAlO1xufSJdfQ== */";

/***/ }),

/***/ 7916:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\" style=\"color: black\">Make Payment</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display: flex; align-items: center; justify-content: space-around\">\r\n      <img height=\"50px\" src=\"assets/images/access_point.png\" />\r\n      <h1 style=\"margin: 0px; font-size: 22px; margin-left: 6px; color: black\">\r\n        (Amount : ₦ {{quoteItems[quoteItems.length -\r\n        1].value}} )\r\n      </h1>\r\n    </div>\r\n\r\n    <!-- <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n\r\n          <td width=\"10\">\r\n\r\n            <input type=\"radio\" value=\"WEBpay\" name=\"payment-option\" class=\"payment-option-other\"\r\n              (click)=\"selectmethod('WebPAY')\">\r\n\r\n          </td>\r\n\r\n          <td style=\" color: black;\"><strong>WebPay </strong><br><img height=\"100px;\"\r\n              src=\"https://cornerstone.com.ng/devtest/assets/img/cards.png\">\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table> -->\r\n\r\n    <table class=\"table\">\r\n      <tbody>\r\n        <tr>\r\n          <!-- <td width=\"10\">\r\n\r\n            <input type=\"radio\" value=\"paystack\" name=\"payment-option\" class=\"payment-option-other\"\r\n              (click)=\"selectmethod('paystack')\">\r\n\r\n          </td> -->\r\n\r\n          <td style=\"color: black\">\r\n            <strong>Paystack </strong><br /><img height=\"100px;\"\r\n              src=\"https://cornerstone.com.ng/assets/img/paystack.jpeg\" />\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <!-- <table class=\"table\">\r\n\r\n      <tbody>\r\n\r\n        <tr>\r\n\r\n          <td width=\"10\">\r\n\r\n            <input type=\"radio\" name=\"payment-option\" value=\"deposit\" id=\"payment-option-bank\"\r\n              (click)=\"selectmethod('other')\">\r\n\r\n          </td>\r\n\r\n          <td style=\" color: black;\"><strong>Bank Transfer in any of the following banks </strong><br><span class=\"h6\">\r\n              Pay using internet\r\n              banking or directly at any of this banks</span><br>\r\n\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n\r\n    </table> -->\r\n\r\n    <!-- <table class=\"table\" id=\"bank_list\" *ngIf=\"othermethod==true\">\r\n\r\n\r\n      <tbody>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"1\" id=\"FCMB\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/1.png\">\r\n          </td>\r\n\r\n          <td style=\"width: 50%;\">\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0135145093\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"2\" id=\"StanbicIBTC\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/2.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0008384202\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"StanbicIBTC\" class=\"StanbicIBTC\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"3\" id=\"GTBank\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/3.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0108908618\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"GTBank\" class=\"GTBank\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"4\" id=\"FirstBank\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/4.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n           >\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  2024120096\"\r\n              style=\"height:29px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"FirstBank\" class=\"FirstBank\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"6\" id=\"UnionBankGeneral\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/6.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n\r\n\r\n            <label style=\" color: black;\">Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"    0040038431\"\r\n              style=\"height:30px;width:200px;margin-top: 1px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"UnionBankGeneral\" class=\"UnionBankGeneral\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n\r\n\r\n    </table> -->\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <!-- <div class=\"btndiv\">\r\n    <ion-button class=\"btn\" (click)=\"paymentDone()\"> Proceed</ion-button>\r\n  </div> -->\r\n  <!-- pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f -->\r\n  <!-- pk_test_ff6f2927d464e23a6ddf592be475db01de695970 -->\r\n  <div class=\"btndiv\">\r\n    <button angular4-paystack [key]=\"'pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f'\" [email]=\"email\" [amount]=\"amt\"\r\n      [ref]=\"reference\" class=\"btn11\" (paymentInit)=\"paymentInit()\" (onClose)=\"paymentCancel()\"\r\n      (callback)=\"paymentDone($event)\">\r\n      Pay with Paystack\r\n    </button>\r\n    <!-- <ion-button (click)=\"payment_method()\">checkpayemntres</ion-button> -->\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map