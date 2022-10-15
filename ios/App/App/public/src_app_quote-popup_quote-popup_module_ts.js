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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _quote_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup.page */ 9222);




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

/***/ 781:
/*!***************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotePopupPageModule": () => (/* binding */ QuotePopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _quote_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup-routing.module */ 9293);
/* harmony import */ var _quote_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-popup.page */ 9222);







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

/***/ 9222:
/*!*************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotePopupPage": () => (/* binding */ QuotePopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _quote_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-popup.page.html?ngResource */ 4504);
/* harmony import */ var _quote_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote-popup.page.scss?ngResource */ 271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);








let QuotePopupPage = class QuotePopupPage {
    constructor(router, modal, location, api) {
        this.router = router;
        this.modal = modal;
        this.location = location;
        this.api = api;
    }
    ngOnInit() {
        this.subProducts = JSON.parse(localStorage.getItem('subProducts'));
        this.productID = localStorage.getItem('productid');
        console.log('productid', this.productID);
    }
    goback() {
        this.location.back();
    }
    dismiss() {
        this.modal.dismiss();
    }
    subProductsshow(id) {
        const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
        this.api.insertData(myData).subscribe((res) => {
            let subproducts = [];
            console.log("subProducts---------", res);
            res.subproducts.map((value, index) => {
                // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen") {
                //   subproducts.push(value);
                // }
                subproducts.push(value);
            });
            console.log('subproducts after check---', subproducts);
            // return;
            this.subProducts = subproducts;
            localStorage.setItem('subProducts', JSON.stringify(subproducts));
        }, (err) => {
            console.log(err);
        });
    }
    seeDetails(sp) {
        console.log(sp);
        if (sp == 'null') {
            this.api.presenttoast('Product details not defined');
        }
        else {
            if (sp.product_for_quote == 1) {
                this.router.navigate(['/mypolicies']);
                localStorage.setItem('subProId', sp.id);
                localStorage.setItem('subProName', sp.name);
            }
            else {
                this.subProductsshow(sp.id);
            }
        }
        // this.modal.dismiss(sp).then(data => {
        //   console.log('data came back from modal');
        //   console.log(data);
        // })
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

/***/ 271:
/*!**************************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background:transparent ;\n  --box-shadow: none;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWNGIiwiZmlsZSI6InF1b3RlLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uYm94ZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcclxufVxyXG4uaWNvbmRpdntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbn1cclxuLmMtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29uLXAxe1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uY29uLXAye1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogNiUgMCUgMCUgNCU7XHJcbn1cclxuLmlubGluZS10ZXh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jb24tcDN7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmNvbi1wNHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmNvbi1wNXtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uYnRuZGl2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA3JVxyXG59XHJcbi5idG57XHJcbiAgLS1iYWNrZ3JvdW5kOiMxQTIwNkQgO1xyXG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gIHdpZHRoOjE3MXB4IDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJ0bjF7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50IDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgd2lkdGg6MTcxcHggO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXI6MXB4IHNvbGlkICNBOEI0MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4504:
/*!**************************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Insurance</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"c-center\">\r\n      <p class=\"con-p1\">Make a Quote</p>\r\n    </div>\r\n\r\n    <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\r\n      <div style=\"display:flex;margin-bottom: 7%;\" (click)=\"seeDetails(sp)\">\r\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"width: 170px; height: 83px;\">\r\n        <p class=\"con-p2\">{{sp.name}}</p>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"boxdiv\" *ngIf=\"productID==1\">\r\n      <div style=\"display:flex;margin-bottom: 7%;\" (click)=\"seeDetails('null')\">\r\n        <img src=\"assets/images/carimg.png\" alt=\"\" style=\"width: 170px; height: 83px;\">\r\n        <p style=\"color: #1A206D;\r\n        font-size: 17px;\r\n        font-weight: 500;\r\n        margin: 6% 0% 0% 4%;\">COMPREHENSIVE MOTOR INSURANCE</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div *ngFor=\"let sp of subProducts\">\r\n      <div class=\"c-center\">\r\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"margin-top:5%; width: 170px; height: 83px;\">\r\n        <p class=\"con-p2\">{{sp.name}}</p>\r\n      </div>\r\n\r\n      <div class=\"btndiv\">\r\n        <ion-button class=\"btn\" (click)=\"seeDetails(sp)\">QUOTE</ion-button>\r\n      </div>\r\n      <hr style=\"margin-top:25px; border-top: 5px solid #A8B400; width:70%\">\r\n    </div> -->\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_quote-popup_quote-popup_module_ts.js.map