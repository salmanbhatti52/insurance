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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _quote_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup.page.html?ngResource */ 24504);
/* harmony import */ var _quote_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-popup.page.scss?ngResource */ 40271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);








let QuotePopupPage = class QuotePopupPage {
    constructor(router, modal, location, api) {
        this.router = router;
        this.modal = modal;
        this.location = location;
        this.api = api;
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
                        this.router.navigate(['/internationalinformation']);
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
QuotePopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.option_div {\n  position: absolute;\n  background: white;\n  z-index: 12;\n  right: 48px;\n  padding: 9px;\n  border: 1px solid #1A206D;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background:transparent ;\n  --box-shadow: none;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVUY7O0FBUkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVdGOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBWUY7O0FBVkE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBY0YiLCJmaWxlIjoicXVvdGUtcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5ib3hkaXZ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xyXG59XHJcbi5pY29uZGl2e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG4uYy1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb24tcDF7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ub3B0aW9uX2RpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgcmlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQTIwNkQ7XHJcbn1cclxuLmNvbi1wMntcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDYlIDAlIDAlIDQlO1xyXG59XHJcbi5pbmxpbmUtdGV4dHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uY29uLXAze1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jb24tcDR7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jb24tcDV7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ0bmRpdntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNyVcclxufVxyXG4uYnRue1xyXG4gIC0tYmFja2dyb3VuZDojMUEyMDZEIDtcclxuICAtLWJvcmRlci1yYWRpdXM6MTJweDtcclxuICB3aWR0aDoxNzFweCA7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5idG4xe1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudCA7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gIHdpZHRoOjE3MXB4IDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjQThCNDAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 24504:
/*!**************************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">{{insurancename}}</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"c-center\">\r\n      <p class=\"con-p1\" >Choose one to get a Quote</p>\r\n    </div>\r\n    <div style=\"font-size: 20px; color: #000; font-weight: 500; margin-bottom: 3%\">\r\n      {{insurancename}} products are:\r\n    </div>\r\n\r\n    <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\r\n      <div *ngIf=\"sp.name\" style=\"display: flex; margin-bottom: 7%\" (click)=\"seeDetails(sp)\">\r\n        <img (error)=\"handleImgError($event, userIMG)\" src=\"{{sp.image}}\" alt=\"\"\r\n          style=\"width: 100px; height: 100px; object-fit: cover\" />\r\n          <!-- <img *ngIf=\"sp.name == 'Children Education Fund'\" src=\"assets/images/investmentplans/4.png\" alt=\"\">\r\n          <img *ngIf=\"sp.name == 'iSave Plan'\" src=\"assets/images/investmentplans/1.png\" alt=\"\"> -->\r\n        <p class=\"con-p2\">{{sp.name}}</p>\r\n      </div>\r\n      <!-- <div> -->\r\n      <!-- <div *ngIf=\"sp.productName\" style=\"display: flex;\r\n          margin-bottom: 7%;\r\n          flex-direction: column;\r\n          padding: 11px;\" >\r\n        <p class=\"con-p2\" style=\"margin: 0px;\">Name: {{sp.productName}}</p>\r\n        <p style=\"margin: 0px;\">Policy Id: {{sp.policyId}}</p>\r\n        <p style=\"margin: 0px;\">Insured Name: {{sp.insuredName}}</p>\r\n        <p style=\"margin: 0px;\">Amount Paid: {{sp.amountPaid}}</p>\r\n        <p style=\"margin: 0px;\">New Payment Status: \r\n          <span *ngIf=\"sp.repayment==false\">N/A</span>\r\n          <span *ngIf=\"sp.repayment==true\">Available</span>\r\n        </p>\r\n        <p style=\"margin: 0px;\">Account Statement Status: \r\n          <span *ngIf=\"sp.accountStatementAvailable==false\">N/A</span>\r\n          <span *ngIf=\"sp.accountStatementAvailable==true\">Available</span>\r\n        </p>\r\n\r\n        <ion-icon name=\"ellipsis-vertical\" (click)=\"showOptions(sp.policyId)\" style=\"position: absolute;right: 27px;\"></ion-icon>\r\n        <div *ngIf=\"policyId==sp.policyId\" class=\"option_div\">\r\n          <div style=\"margin-bottom: 4px;\" (click)=\"downloadPolicyDoc(sp.policyId)\">Download Policy Certificate</div>\r\n          <div style=\"margin-bottom: 4px;\" (click)=\"fetchPolicyTransactions(sp.policyId)\">Get transaction history for receipt</div>\r\n          <div style=\"margin-bottom: 4px;\" (click)=\"downloadAccountStatement(sp.policyId)\">Download IES Account Statement</div>\r\n          <div style=\"margin-bottom: 4px;\" (click)=\"getPastAndUpcomingPayments(sp.policyId,sp.repayment)\">Get Past and Upcoming Payments</div>\r\n        </div>\r\n      </div> -->\r\n      <!-- </div> -->\r\n    </div>\r\n    <div class=\"boxdiv\" *ngIf=\"productID==1\">\r\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"gibsproducts('COMPREHENSIVE')\">\r\n        <img src=\"assets/images/motorcar.png\" alt=\"\" style=\"width: 100px; height: 100px; object-fit: cover\" />\r\n        <p style=\"\r\n            color: #1a206d;\r\n            font-size: 17px;\r\n            font-weight: 500;\r\n            margin: 6% 0% 0% 4%;\r\n          \">\r\n          COMPREHENSIVE MOTOR INSURANCE\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"boxdiv\" *ngFor=\"let gibs of motorsubproducts\">\r\n      <div *ngIf=\"api.comingFrom === 'Motor Insurance'\" style=\"display:flex;margin-bottom: 7%;\"\r\n        (click)=\"GProductdetail(gibs.productID)\">\r\n        <img src=\"assets/images/carimg.png\" alt=\"\" style=\"    width: 100px;\r\n        height: 100px;\r\n        object-fit: cover;\">\r\n        <p style=\"color: #1A206D;\r\n        font-size: 17px;\r\n        font-weight: 500;\r\n        margin: 6% 0% 0% 4%;\">{{gibs.productName}}</p>\r\n      </div>\r\n    </div> -->\r\n    <!-- <div *ngFor=\"let sp of subProducts\">\r\n      <div class=\"c-center\">\r\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"margin-top:5%;     width: 100px;\r\n    height: 100px;\r\n    object-fit: cover;\">\r\n        <p class=\"con-p2\">{{sp.name}}</p>\r\n      </div>\r\n\r\n      <div class=\"btndiv\">\r\n        <ion-button class=\"btn\" (click)=\"seeDetails(sp)\">QUOTE</ion-button>\r\n      </div>\r\n      <hr style=\"margin-top:25px; border-top: 5px solid #A8B400; width:70%\">\r\n    </div> -->\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_quote-popup_quote-popup_module_ts.js.map