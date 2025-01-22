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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 7916);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 19529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flutterwave-angular-v3 */ 76210);










let PaymentPage = class PaymentPage {
    constructor(location, router, api, navCtrl, flutterwaveService) {
        this.location = location;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.flutterwaveService = flutterwaveService;
        this.value = localStorage.getItem('subProName');
        this.chooosebank = '';
        this.othermethod = false;
        this.payemntmethod = '';
        this.loggedInUserInfo = '';
        this.paymetdone = '';
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
        this.publicKey = '';
        this.customerDetails = '';
        this.customizations = '';
        this.meta = '';
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
        this.publicKey = this.api.flutterwaveAPIKey;
        this.loggedInUserInfo = JSON.parse(localStorage.getItem('LoginUserInfo'));
        this.publicKey = this.api.flutterwaveAPIKey;
        this.customerDetails = {
            name: this.loggedInUserInfo.first_name + ' ' + this.loggedInUserInfo.last_name,
            email: this.loggedInUserInfo.email,
            phone_number: this.loggedInUserInfo.phone,
        };
        this.customizations = {
            title: "Cornerstone payment",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1eJCezNB-KM9Exk7Pwri7EBDcNP0vbDhsw&s",
        };
        this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
        this.meta = { counsumer_id: this.loggedInUserInfo.user_id, consumer_mac: this.reference };
        this.prepareOpt();
    }
    prepareOpt() {
        console.log('amt-====' + this.quoteItems[this.quoteItems.length - 1].value);
        this.paymentData = {
            public_key: this.publicKey,
            tx_ref: this.generateReference(),
            amount: this.quoteItems[this.quoteItems.length - 1].value,
            currency: "NGN",
            payment_options: "card,ussd",
            redirect_url: "",
            meta: this.meta,
            customer: this.customerDetails,
            customizations: this.customizations,
            callback: this.makePaymentCallback,
            onclose: this.closedPaymentModal,
            callbackContext: this,
        };
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
    /// syed ali plz flutterwave
    paystackpayment() {
        let datasend = 'myData={"transaction_ref":' +
            '"' + this.trxref + '"' +
            ',"flutterwave_transaction_id":' +
            '"' + this.paymetdone.transaction_id + '"' +
            ',"quote_id":' +
            '"' + this.quoteId + '"' +
            ',"verify_token":"' +
            localStorage.getItem('token') +
            // '","method":"standalonePaystackConfirm"}';
            '","method":"standaloneFlutterwaveConfirm"}';
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
    // paymentapi(paymentoption) {
    //   let datasend = "myData={\"product_id\":" + localStorage.getItem('subProId') + ",\"quote_id\":" + localStorage.getItem('quote_id') + ",\"payment_option\":" + paymentoption + ",\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"payment_method_select\"}";
    //   this.api.insertData(datasend).subscribe((res: any) => {
    //     console.log('payemt response', res);
    //     if (paymentoption == 1) {
    //       this.navCtrl.navigateForward(['payquote', {
    //         payres: JSON.stringify(res.transaction)
    //       }])
    //     }
    //   })
    // }
    makePayment() {
        console.log('makePayment,,,,,,,,,,', this.paymentData);
        this.flutterwaveService.inlinePay(this.paymentData);
    }
    makePaymentCallback(response) {
        console.log("Payment callback", JSON.stringify(response));
        this.paymetdone = response;
        this.api.presenttoast('Payment has been done succesfully.');
        this.location.back();
        //{"status":"successful","customer":{"name":"BLESSING DOE","email":"atfar@cornerstone.com.ng","phone_number":"0809765435"},"transaction_id":8289225,"tx_ref":"1735044787946","flw_ref":"FLW-MOCK-e6574da8796e025d097a836dcacaedcb","currency":"NGN","amount":60000,"charged_amount":60000,"charge_response_code":"00","charge_response_message":"Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com","created_at":"2024-12-24T12:54:38.000Z"}
    }
    closedPaymentModal() {
        if (this.paymetdone) {
            console.log("payment is closed");
            this.paystackpayment();
            this.api.presenttoast('Payment has been done succesfully.');
            this.location.back();
        }
    }
    generateReference() {
        let date = new Date();
        return date.getTime().toString();
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_7__.FlutterwaveService }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n\n.btn11 {\n  background: #1A206D;\n  border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.btndiv1 {\n  padding-bottom: 4%;\n  width: 85%;\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 20% auto 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7QUFBRjs7QUFHQTs7RUFFRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRkYiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLmJveCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKVxufVxuXG4uYm94LXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcblxufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSAudGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDA7XG59XG5cbi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZCxcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI5ODg7XG59XG5cbi50YWJsZT50Ym9keT50cj50ZCB7XG4gIHBhZGRpbmc6NnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5idG5kaXYge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnRuMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuXG5cbi5idG4xMXtcbiAgYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5idG5kaXYxe1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyMCUgYXV0byAwJTtcbn1cblxuIl19 */";

/***/ }),

/***/ 7916:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row>\n            <ion-col size=\"2\" style=\"padding-left: 25px\">\n                <ion-buttons>\n                    <div style=\"width:100% ;\">\n                        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n                    </div>\n                </ion-buttons>\n\n                <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\" style=\"color: black\">Make Payment</div>\n            </ion-col>\n            <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\">\n        <div style=\"display: flex; align-items: center; justify-content: space-around\">\n            <img height=\"50px\" src=\"assets/images/access_point.png\" />\n            <h1 style=\"margin: 0px; font-size: 22px; margin-left: 6px; color: black\">\n                (Amount : ₦ {{quoteItems[quoteItems.length - 1].value}} )\n            </h1>\n        </div>\n\n        <!-- <table class=\"table\">\n\n      <tbody>\n        <tr>\n\n          <td width=\"10\">\n\n            <input type=\"radio\" value=\"WEBpay\" name=\"payment-option\" class=\"payment-option-other\"\n              (click)=\"selectmethod('WebPAY')\">\n\n          </td>\n\n          <td style=\" color: black;\"><strong>WebPay </strong><br><img height=\"100px;\"\n              src=\"https://cornerstone.com.ng/devtest/assets/img/cards.png\">\n\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table> -->\n\n        <table class=\"table\">\n            <tbody>\n                <tr>\n                    <!-- <td width=\"10\">\n\n            <input type=\"radio\" value=\"paystack\" name=\"payment-option\" class=\"payment-option-other\"\n              (click)=\"selectmethod('paystack')\">\n\n          </td> -->\n\n                    <td style=\"color: black\">\n                        <strong>Flutterwave  </strong><br /><img height=\"100px;\" src=\"https://flutterwave.com/images/logo/full.svg\" /> </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <!-- <table class=\"table\">\n\n      <tbody>\n\n        <tr>\n\n          <td width=\"10\">\n\n            <input type=\"radio\" name=\"payment-option\" value=\"deposit\" id=\"payment-option-bank\"\n              (click)=\"selectmethod('other')\">\n\n          </td>\n\n          <td style=\" color: black;\"><strong>Bank Transfer in any of the following banks </strong><br><span class=\"h6\">\n              Pay using internet\n              banking or directly at any of this banks</span><br>\n\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table> -->\n\n        <!-- <table class=\"table\" id=\"bank_list\" *ngIf=\"othermethod==true\">\n\n\n      <tbody>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"1\" id=\"FCMB\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/1.png\">\n          </td>\n\n          <td style=\"width: 50%;\">\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0135145093\"\n              style=\"height:30px;width:200px\">\n\n          </td>\n\n\n        </tr>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"2\" id=\"StanbicIBTC\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/2.png\">\n          </td>\n\n          <td>\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0008384202\"\n              style=\"height:30px;width:200px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"StanbicIBTC\" class=\"StanbicIBTC\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"3\" id=\"GTBank\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/3.png\">\n          </td>\n\n          <td>\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0108908618\"\n              style=\"height:30px;width:200px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"GTBank\" class=\"GTBank\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"4\" id=\"FirstBank\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/4.png\">\n          </td>\n\n          <td>\n\n           >\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  2024120096\"\n              style=\"height:29px;width:200px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"FirstBank\" class=\"FirstBank\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"6\" id=\"UnionBankGeneral\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/6.png\">\n          </td>\n\n          <td>\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"    0040038431\"\n              style=\"height:30px;width:200px;margin-top: 1px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"UnionBankGeneral\" class=\"UnionBankGeneral\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n\n    </table> -->\n    </div>\n</ion-content>\n<ion-footer>\n    <!-- <div class=\"btndiv\">\n    <ion-button class=\"btn\" (click)=\"paymentDone()\"> Proceed</ion-button>\n  </div> -->\n    <!-- pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f -->\n    <!-- pk_test_ff6f2927d464e23a6ddf592be475db01de695970 -->\n    <div class=\"btndiv\">\n        <!-- <button angular4-paystack [key]=\"'pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f'\" [email]=\"email\" [amount]=\"amt\"\n      [ref]=\"reference\" class=\"btn11\" (paymentInit)=\"paymentInit()\" (onClose)=\"paymentCancel()\"\n      (callback)=\"paymentDone($event)\">\n      Pay with Paystack\n    </button> -->\n\n\n        <button class=\"btn11\" (click)=\"makePayment()\">\n      Pay with Flutterwave\n  </button>\n        <!-- <ion-button (click)=\"payment_method()\">checkpayemntres</ion-button> -->\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map