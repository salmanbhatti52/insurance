"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_quote-popup_quote-popup_module_ts"],{

/***/ 9293:
/*!***********************************************************!*\
  !*** ./src/app/quote-popup/quote-popup-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotePopupPageRoutingModule": () => (/* binding */ QuotePopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _quote_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup.page */ 59222);




const routes = [
    {
        path: '',
        component: _quote_popup_page__WEBPACK_IMPORTED_MODULE_0__.QuotePopupPage
    }
];
let QuotePopupPageRoutingModule = class QuotePopupPageRoutingModule {
};
QuotePopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuotePopupPageRoutingModule);



/***/ }),

/***/ 70781:
/*!***************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotePopupPageModule": () => (/* binding */ QuotePopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _quote_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup-routing.module */ 9293);
/* harmony import */ var _quote_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-popup.page */ 59222);







let QuotePopupPageModule = class QuotePopupPageModule {
};
QuotePopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _quote_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuotePopupPageRoutingModule
        ],
        declarations: [_quote_popup_page__WEBPACK_IMPORTED_MODULE_1__.QuotePopupPage]
    })
], QuotePopupPageModule);



/***/ }),

/***/ 59222:
/*!*************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotePopupPage": () => (/* binding */ QuotePopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _quote_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup.page.html?ngResource */ 24504);
/* harmony import */ var _quote_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-popup.page.scss?ngResource */ 40271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);









let QuotePopupPage = class QuotePopupPage {
    constructor(router, modal, location, api, iab) {
        this.router = router;
        this.modal = modal;
        this.location = location;
        this.api = api;
        this.iab = iab;
        this.motorsubproducts = [];
        this.showDropDown = false;
        this.arr1 = [];
        this.arr2 = [];
        this.arr3 = [];
        this.arr4 = [];
        this.arr5 = [];
        this.counter = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        const subproducts = [];
        const subProductsfilter = JSON.parse(localStorage.getItem('subProducts'));
        console.log(subProductsfilter);
        subProductsfilter.filter((value, index) => {
            if (value.name != "Travel Care Premier" && value.name != "Travel Care Visa") {
                subproducts.push(value);
            }
            if (value.name == 'Children Education Fund') {
                value.image = 'assets/images/investmentplans/4.png';
            }
            else if (value.name == 'iSave Plan') {
                value.image = 'assets/images/investmentplans/1.png';
            }
            this.subProducts = subproducts;
            this.arr1 = this.subProducts;
        });
        this.productID = localStorage.getItem('productid');
        console.log('productid', this.productID);
        this.insurancename = localStorage.getItem('productName');
        console.log(this.insurancename);
    }
    showOptions(val) {
        if (this.policyId == val) {
            this.policyId = '';
        }
        else {
            this.policyId = val;
        }
    }
    downloadPolicyDoc(policyId) {
        this.policyId = '';
        let data = {
            'verify_token': localStorage.getItem('token'),
            'method': 'getPolicyCertificate',
            'policyId': policyId
        };
        this.api.showLoader();
        this.api.submitFormData(data).subscribe((res) => {
            this.api.hideLoader();
            console.log('Get Policy Doc Res: ', res);
            if (res.status_no == 1) {
                this.api.presenttoast(res.message);
                localStorage.setItem('policyCertificate', res.certificate_link);
                this.router.navigate(['policy-details']);
            }
            else {
            }
        }, (err) => {
        });
    }
    fetchPolicyTransactions(policyId) {
        this.policyId = '';
        let data = {
            'verify_token': localStorage.getItem('token'),
            'method': 'getTransactionHistoryForReceipt',
            'policyId': policyId
        };
        this.api.showLoader();
        this.api.submitFormData(data).subscribe((res) => {
            this.api.hideLoader();
            console.log('Get Policy Transactions Res: ', res);
            if (res.status_no == 1) {
                // this.api.presenttoast(res.message);
                localStorage.setItem('transactionsHistory', JSON.stringify(res.transactionHistory));
                this.router.navigate(['policy-details']);
            }
            else {
            }
        }, (err) => {
        });
    }
    downloadAccountStatement(policyId) {
        this.policyId = '';
        let data = {
            'verify_token': localStorage.getItem('token'),
            'method': 'getIESAccountStatement',
            'policyId': policyId
        };
        this.api.showLoader();
        this.api.submitFormData(data).subscribe((res) => {
            this.api.hideLoader();
            console.log('Get Account Statement Res: ', res);
            if (res.status_no == 1) {
                this.api.presenttoast(res.message);
                localStorage.setItem('accountStatement', res.accountStatementLink);
                this.router.navigate(['policy-details']);
            }
            else {
                this.api.presenttoast(res.message);
            }
        }, (err) => {
        });
    }
    getPastAndUpcomingPayments(policyId, repaymentStatus) {
        this.policyId = '';
        if (repaymentStatus == true) {
            let data = {
                'verify_token': localStorage.getItem('token'),
                'method': 'getTransactionHistory',
                'policyId': policyId
            };
            this.api.showLoader();
            this.api.submitFormData(data).subscribe((res) => {
                this.api.hideLoader();
                console.log('Get Policy Transactions History Res: ', res);
                if (res.status_no == 1) {
                    // this.api.presenttoast(res.message);
                    localStorage.setItem('nextPayments', JSON.stringify(res.nextPayment));
                    localStorage.setItem('pastPayments', JSON.stringify(res.pastPayment));
                    this.router.navigate(['policy-details']);
                }
                else {
                }
            }, (err) => {
            });
        }
        else {
            this.api.presenttoast('No new payments available for this policy.');
        }
    }
    goback() {
        if (this.counter <= 1) {
            this.location.back();
        }
        else {
            if (this.counter == 2) {
                this.subProducts = this.arr1;
            }
            if (this.counter == 3) {
                this.subProducts = this.arr2;
            }
            if (this.counter == 4) {
                this.subProducts = this.arr3;
            }
            if (this.counter == 5) {
                this.subProducts = this.arr4;
            }
            this.counter--;
        }
        console.log('this.counter--', this.counter);
    }
    dismiss() {
        this.modal.dismiss();
    }
    subProductsshow(id) {
        const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
        this.api.insertData(myData).subscribe((res) => {
            const subproducts = [];
            console.log('subProducts---------11111', res);
            res.subproducts.map((value, index) => {
                if (value.name != "Travel Care Premier" && value.name != "Travel Care Visa") {
                    subproducts.push(value);
                }
                // subproducts.push(value);
            });
            console.log('subproducts after check---22', subproducts);
            this.counter++;
            console.log('this.counter++', this.counter);
            if (this.counter == 1) {
                this.arr1 = subproducts;
            }
            if (this.counter == 2) {
                this.arr2 = subproducts;
            }
            if (this.counter == 3) {
                this.arr3 = subproducts;
            }
            if (this.counter == 4) {
                this.arr4 = subproducts;
            }
            if (this.counter == 5) {
                this.arr5 = subproducts;
            }
            // return;
            this.subProducts = subproducts;
            localStorage.setItem('subProducts', JSON.stringify(subproducts));
        }, (err) => {
            console.log(err);
        });
    }
    seeDetails(sp) {
        console.log(sp);
        if (sp.name == 'Local Travel Insurance') {
            localStorage.setItem('productid2', sp.id);
            this.router.navigate(['/localsubproduct']);
        }
        else {
            if (sp.product_for_quote == 1) {
                if (sp.name == 'Third Party') {
                    // this.router.navigate(['/gibsproducts']);
                    this.router.navigate(['/mypolicies']);
                }
                else {
                    if (sp.name == 'Student Plan' || sp.name == 'Europe / Schengen' || sp.name == 'Travel Care Premier' || sp.name == 'Travel Care Visa') {
                        this.router.navigate(['/mypolicies']);
                    }
                    else {
                        // if(sp.parent_id !=27)
                        localStorage.setItem('localtravel', JSON.stringify(sp));
                        if (sp.name == 'Worldwide Family Cover') {
                            const browser = this.iab.create('https://cornerstone.com.ng/quotes/NjE=', '_system');
                        }
                        else {
                            this.router.navigate(['/internationalinformation']);
                        }
                    }
                }
                // this.router.navigate(['/mypolicies']);
                localStorage.setItem('subProId', sp.id);
                localStorage.setItem('subProName', sp.name);
            }
            else {
                this.subProductsshow(sp.id);
            }
        }
        // else {
        //   if (sp.name == 'Student Plan' || sp.name == 'Europe / Shengen') {
        //     this.router.navigate(['/mypolicies']);
        //   } else {
        //     localStorage.setItem('localtravel', JSON.stringify(sp));
        //     this.router.navigate(['/travelquote']);
        //   }
        // this.modal.dismiss(sp).then(data => {
        //   console.log('data came back from modal');
        //   console.log(data);
        // })
    }
    gibsproducts(sp) {
        localStorage.setItem('subProName', sp);
        this.router.navigate(['/gibsproducts']);
    }
    handleImgError(ev, item, url) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/placeholder.jpg`;
        source.src = imgSrc;
    }
};
QuotePopupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser }
];
QuotePopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-quote-popup',
        template: _quote_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quote_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuotePopupPage);



/***/ }),

/***/ 40271:
/*!**************************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.option_div {\n  position: absolute;\n  background: white;\n  z-index: 12;\n  right: 48px;\n  padding: 9px;\n  border: 1px solid #1A206D;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n  text-transform: uppercase;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background: transparent;\n  --box-shadow: none;\n  --border-radius: 12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJxdW90ZS1wb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzFBMEY1NTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5ib3hkaXYge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcbn1cblxuLmljb25kaXYge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG59XG5cbi5jLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29uLXAxIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ub3B0aW9uX2RpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDEyO1xuICAgIHJpZ2h0OiA0OHB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUEyMDZEO1xufVxuXG4uY29uLXAyIHtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDYlIDAlIDAlIDQlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmxpbmUtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNvbi1wMyB7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5jb24tcDQge1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmNvbi1wNSB7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5idG5kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA3JVxufVxuXG4uYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHdpZHRoOiAxNzFweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG4xIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDE3MXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59Il19 */";

/***/ }),

/***/ 24504:
/*!**************************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row>\n            <ion-col size=\"2\" style=\"padding-left: 25px\">\n                <ion-buttons>\n                    <div style=\"width:100% ;\">\n                        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n                    </div>\n                </ion-buttons>\n\n                <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\">{{insurancename}}</div>\n            </ion-col>\n            <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"container\">\n        <div class=\"c-center\">\n            <p class=\"con-p1\">Choose one to get a Quote</p>\n        </div>\n        <!-- <div style=\"font-size: 20px; color: #000; font-weight: 500; margin-bottom: 3%\">\n            {{insurancename}} products are:\n        </div> -->\n\n        <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\n            <div *ngIf=\"sp.name && sp.name !='Local Travel Insurance'\" style=\"display: flex; margin-bottom: 7%\" (click)=\"seeDetails(sp)\">\n                <img (error)=\"handleImgError($event, userIMG)\" src=\"{{sp.image}}\" alt=\"\" style=\"width: 100px; height: 100px; object-fit: cover\" />\n                <!-- <img *ngIf=\"sp.name == 'Children Education Fund'\" src=\"assets/images/investmentplans/4.png\" alt=\"\">\n          <img *ngIf=\"sp.name == 'iSave Plan'\" src=\"assets/images/investmentplans/1.png\" alt=\"\"> -->\n                <p class=\"con-p2\">{{sp.name}}</p>\n            </div>\n            <!-- <div> -->\n            <!-- <div *ngIf=\"sp.productName\" style=\"display: flex;\n          margin-bottom: 7%;\n          flex-direction: column;\n          padding: 11px;\" >\n        <p class=\"con-p2\" style=\"margin: 0px;\">Name: {{sp.productName}}</p>\n        <p style=\"margin: 0px;\">Policy Id: {{sp.policyId}}</p>\n        <p style=\"margin: 0px;\">Insured Name: {{sp.insuredName}}</p>\n        <p style=\"margin: 0px;\">Amount Paid: {{sp.amountPaid}}</p>\n        <p style=\"margin: 0px;\">New Payment Status: \n          <span *ngIf=\"sp.repayment==false\">N/A</span>\n          <span *ngIf=\"sp.repayment==true\">Available</span>\n        </p>\n        <p style=\"margin: 0px;\">Account Statement Status: \n          <span *ngIf=\"sp.accountStatementAvailable==false\">N/A</span>\n          <span *ngIf=\"sp.accountStatementAvailable==true\">Available</span>\n        </p>\n\n        <ion-icon name=\"ellipsis-vertical\" (click)=\"showOptions(sp.policyId)\" style=\"position: absolute;right: 27px;\"></ion-icon>\n        <div *ngIf=\"policyId==sp.policyId\" class=\"option_div\">\n          <div style=\"margin-bottom: 4px;\" (click)=\"downloadPolicyDoc(sp.policyId)\">Download Policy Certificate</div>\n          <div style=\"margin-bottom: 4px;\" (click)=\"fetchPolicyTransactions(sp.policyId)\">Get transaction history for receipt</div>\n          <div style=\"margin-bottom: 4px;\" (click)=\"downloadAccountStatement(sp.policyId)\">Download IES Account Statement</div>\n          <div style=\"margin-bottom: 4px;\" (click)=\"getPastAndUpcomingPayments(sp.policyId,sp.repayment)\">Get Past and Upcoming Payments</div>\n        </div>\n      </div> -->\n            <!-- </div> -->\n        </div>\n        <div class=\"boxdiv\" *ngIf=\"productID==1\">\n            <div style=\"display: flex; margin-bottom: 7%\" (click)=\"gibsproducts('COMPREHENSIVE')\">\n                <img src=\"assets/images/motorcar.png\" alt=\"\" style=\"width: 100px; height: 100px; object-fit: cover\" />\n                <p style=\"\n            color: #1a206d;\n            font-size: 17px;\n            font-weight: 500;\n            margin: 6% 0% 0% 4%;\n          \">\n                    COMPREHENSIVE MOTOR INSURANCE\n                </p>\n            </div>\n        </div>\n\n        <!-- <div class=\"boxdiv\" *ngFor=\"let gibs of motorsubproducts\">\n      <div *ngIf=\"api.comingFrom === 'Motor Insurance'\" style=\"display:flex;margin-bottom: 7%;\"\n        (click)=\"GProductdetail(gibs.productID)\">\n        <img src=\"assets/images/carimg.png\" alt=\"\" style=\"    width: 100px;\n        height: 100px;\n        object-fit: cover;\">\n        <p style=\"color: #1A206D;\n        font-size: 17px;\n        font-weight: 500;\n        margin: 6% 0% 0% 4%;\">{{gibs.productName}}</p>\n      </div>\n    </div> -->\n        <!-- <div *ngFor=\"let sp of subProducts\">\n      <div class=\"c-center\">\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"margin-top:5%;     width: 100px;\n    height: 100px;\n    object-fit: cover;\">\n        <p class=\"con-p2\">{{sp.name}}</p>\n      </div>\n\n      <div class=\"btndiv\">\n        <ion-button class=\"btn\" (click)=\"seeDetails(sp)\">QUOTE</ion-button>\n      </div>\n      <hr style=\"margin-top:25px; border-top: 5px solid #A8B400; width:70%\">\n    </div> -->\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_quote-popup_quote-popup_module_ts.js.map