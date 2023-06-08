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
        this.arr1 = [];
        this.arr2 = [];
        this.arr3 = [];
        this.arr4 = [];
        this.arr5 = [];
        this.counter = 0;
    }
    ngOnInit() {
        this.subProducts = JSON.parse(localStorage.getItem('subProducts'));
        this.arr1 = this.subProducts;
        this.productID = localStorage.getItem('productid');
        console.log('productid', this.productID);
        this.insurancename = localStorage.getItem('productName');
        console.log(this.insurancename);
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
                // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen") {
                //   subproducts.push(value);
                // }
                subproducts.push(value);
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background:transparent ;\n  --box-shadow: none;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWNGIiwiZmlsZSI6InF1b3RlLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXJ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5ib3hkaXZ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XG59XG4uaWNvbmRpdntcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbn1cbi5jLWNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbi1wMXtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmNvbi1wMntcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiA2JSAwJSAwJSA0JTtcbn1cbi5pbmxpbmUtdGV4dHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4uY29uLXAze1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb24tcDR7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbi1wNXtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uYnRuZGl2e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDclXG59XG4uYnRue1xuICAtLWJhY2tncm91bmQ6IzFBMjA2RCA7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICB3aWR0aDoxNzFweCA7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJ0bjF7XG4gIG1hcmdpbi10b3A6IDUlO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICB3aWR0aDoxNzFweCA7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOjFweCBzb2xpZCAjQThCNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuIl19 */";

/***/ }),

/***/ 24504:
/*!**************************************************************!*\
  !*** ./src/app/quote-popup/quote-popup.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">{{insurancename}}</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"c-center\">\n      <p class=\"con-p1\">Choose one to get a Quote</p>\n    </div>\n    <div style=\"font-size: 20px; color: #000; font-weight: 500; margin-bottom: 3%\">\n      {{insurancename}} products are:\n    </div>\n\n    <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"seeDetails(sp)\">\n        <img (error)=\"handleImgError($event, userIMG)\" src=\"{{sp.image}}\" alt=\"\"\n          style=\"width: 100px; height: 100px; object-fit: cover\" />\n        <p class=\"con-p2\">{{sp.name}}</p>\n      </div>\n    </div>\n    <div class=\"boxdiv\" *ngIf=\"productID==1\">\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"gibsproducts('COMPREHENSIVE')\">\n        <img src=\"assets/images/motorcar.png\" alt=\"\" style=\"width: 100px; height: 100px; object-fit: cover\" />\n        <p style=\"\n            color: #1a206d;\n            font-size: 17px;\n            font-weight: 500;\n            margin: 6% 0% 0% 4%;\n          \">\n          COMPREHENSIVE MOTOR INSURANCE\n        </p>\n      </div>\n    </div>\n\n    <!-- <div class=\"boxdiv\" *ngFor=\"let gibs of motorsubproducts\">\n      <div *ngIf=\"api.comingFrom === 'Motor Insurance'\" style=\"display:flex;margin-bottom: 7%;\"\n        (click)=\"GProductdetail(gibs.productID)\">\n        <img src=\"assets/images/carimg.png\" alt=\"\" style=\"    width: 100px;\n        height: 100px;\n        object-fit: cover;\">\n        <p style=\"color: #1A206D;\n        font-size: 17px;\n        font-weight: 500;\n        margin: 6% 0% 0% 4%;\">{{gibs.productName}}</p>\n      </div>\n    </div> -->\n    <!-- <div *ngFor=\"let sp of subProducts\">\n      <div class=\"c-center\">\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"margin-top:5%;     width: 100px;\n    height: 100px;\n    object-fit: cover;\">\n        <p class=\"con-p2\">{{sp.name}}</p>\n      </div>\n\n      <div class=\"btndiv\">\n        <ion-button class=\"btn\" (click)=\"seeDetails(sp)\">QUOTE</ion-button>\n      </div>\n      <hr style=\"margin-top:25px; border-top: 5px solid #A8B400; width:70%\">\n    </div> -->\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_quote-popup_quote-popup_module_ts.js.map