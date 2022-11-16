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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 7916);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 19529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);








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
    }
    paymentInit() {
        console.log('Payment initialized');
    }
    paymentDone(ref) {
        this.title = 'Payment successfull';
        console.log('payment succesfull-----', this.title, ref);
    }
    paymentCancel() {
        console.log('payment failed');
    }
    ngOnInit() {
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
                this.paymentapi(this.paymentoption);
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
    paymentapi(paymentoption) {
        let datasend = "myData={\"product_id\":" + localStorage.getItem('subProId') + ",\"quote_id\":" + localStorage.getItem('quote_id') + ",\"payment_option\":" + paymentoption + ",\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"payment_method_select\"}";
        this.api.insertData(datasend).subscribe((res) => {
            console.log('payemt response', res);
            if (paymentoption == 1) {
                this.navCtrl.navigateForward(['payquote', {
                        payres: JSON.stringify(res.transaction)
                    }]);
            }
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\" style=\" color: black;\">Make a Payment</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display:flex;align-items: center;\n    justify-content: space-around;\">\n      <img height=\"50px\" src=\"assets/images/access_point.png\">\n      <h1 style=\"margin: 0px;\n      font-size: 22px;\n      margin-left: 6px;\n      color: black;\">Select your payment Option.(Amount : ₦ {{quoteItems[quoteItems.length - 1].value}} ) </h1>\n    </div>\n\n    <!-- <table class=\"table\">\n\n      <tbody>\n        <tr>\n\n          <td width=\"10\">\n\n            <input type=\"radio\" value=\"WEBpay\" name=\"payment-option\" class=\"payment-option-other\"\n              (click)=\"selectmethod('WebPAY')\">\n\n          </td>\n\n          <td style=\" color: black;\"><strong>WebPay </strong><br><img height=\"100px;\"\n              src=\"https://cornerstone.com.ng/devtest/assets/img/cards.png\">\n\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table> -->\n\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n\n          <!-- <td width=\"10\">\n\n            <input type=\"radio\" value=\"paystack\" name=\"payment-option\" class=\"payment-option-other\"\n              (click)=\"selectmethod('paystack')\">\n\n          </td> -->\n\n          <td style=\" color: black;\"><strong>Paystack </strong><br><img height=\"100px;\"\n              src=\"https://cornerstone.com.ng/assets/img/paystack.jpeg\">\n\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n\n\n    <!-- <table class=\"table\">\n\n      <tbody>\n\n        <tr>\n\n          <td width=\"10\">\n\n            <input type=\"radio\" name=\"payment-option\" value=\"deposit\" id=\"payment-option-bank\"\n              (click)=\"selectmethod('other')\">\n\n          </td>\n\n          <td style=\" color: black;\"><strong>Bank Transfer in any of the following banks </strong><br><span class=\"h6\">\n              Pay using internet\n              banking or directly at any of this banks</span><br>\n\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table> -->\n\n    <!-- <table class=\"table\" id=\"bank_list\" *ngIf=\"othermethod==true\">\n\n\n      <tbody>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"1\" id=\"FCMB\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/1.png\">\n          </td>\n\n          <td style=\"width: 50%;\">\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0135145093\"\n              style=\"height:30px;width:200px\">\n\n          </td>\n\n\n        </tr>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"2\" id=\"StanbicIBTC\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/2.png\">\n          </td>\n\n          <td>\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0008384202\"\n              style=\"height:30px;width:200px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"StanbicIBTC\" class=\"StanbicIBTC\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"3\" id=\"GTBank\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/3.png\">\n          </td>\n\n          <td>\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0108908618\"\n              style=\"height:30px;width:200px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"GTBank\" class=\"GTBank\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"4\" id=\"FirstBank\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/4.png\">\n          </td>\n\n          <td>\n\n           >\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  2024120096\"\n              style=\"height:29px;width:200px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"FirstBank\" class=\"FirstBank\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n\n        <tr>\n\n          <td>\n\n            <input type=\"radio\" value=\"6\" id=\"UnionBankGeneral\" name=\"banklist\" class=\"allbank\"\n              (change)=\"onItemChange($event.target.value)\">\n\n          </td>\n\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/6.png\">\n          </td>\n\n          <td>\n\n\n\n            <label style=\" color: black;\">Account Number:</label>\n\n\n\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"    0040038431\"\n              style=\"height:30px;width:200px;margin-top: 1px\">\n\n          </td>\n\n          <td>\n\n            <table id=\"UnionBankGeneral\" class=\"UnionBankGeneral\">\n\n              <tbody></tbody>\n            </table>\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n\n    </table> -->\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <!-- <div class=\"btndiv\" *ngIf=\"payemntmethod=='WebPAY'\">\n    <ion-button class=\"btn\" (click)=\"proceed()\"> Proceed</ion-button>\n  </div> -->\n  <div class=\"btndiv\">\n\n    <button angular4-paystack [key]=\"'pk_live_a8ca720ed1feb2f3304e6ab91eae45e42706406f'\" [email]=\"email\" [amount]=\"amt\"\n      [ref]=\"reference\" class=\"btn11\" (paymentInit)=\"paymentInit()\" (onClose)=\"paymentCancel()\"\n      (callback)=\"paymentDone($event)\">\n      Pay with Paystack\n    </button>\n\n  </div>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map