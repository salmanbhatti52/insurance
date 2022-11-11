"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_make-a-claim_make-a-claim_module_ts"],{

/***/ 6774:
/*!*************************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAClaimPageRoutingModule": () => (/* binding */ MakeAClaimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _make_a_claim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-a-claim.page */ 37923);




const routes = [
    {
        path: '',
        component: _make_a_claim_page__WEBPACK_IMPORTED_MODULE_0__.MakeAClaimPage
    }
];
let MakeAClaimPageRoutingModule = class MakeAClaimPageRoutingModule {
};
MakeAClaimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeAClaimPageRoutingModule);



/***/ }),

/***/ 34147:
/*!*****************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAClaimPageModule": () => (/* binding */ MakeAClaimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _make_a_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-a-claim-routing.module */ 6774);
/* harmony import */ var _make_a_claim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-a-claim.page */ 37923);







let MakeAClaimPageModule = class MakeAClaimPageModule {
};
MakeAClaimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _make_a_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakeAClaimPageRoutingModule
        ],
        declarations: [_make_a_claim_page__WEBPACK_IMPORTED_MODULE_1__.MakeAClaimPage]
    })
], MakeAClaimPageModule);



/***/ }),

/***/ 37923:
/*!***************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAClaimPage": () => (/* binding */ MakeAClaimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _make_a_claim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-a-claim.page.html?ngResource */ 43339);
/* harmony import */ var _make_a_claim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-a-claim.page.scss?ngResource */ 94223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let MakeAClaimPage = class MakeAClaimPage {
    constructor() {
        this.ph_value = 'Example@Gmail.com';
        this.hide = false;
        this.hide1 = false;
        this.changeview = false;
        this.disvalue = true;
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'NewClaim') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'PreviousClaim') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.requestsType = 'NewClaim';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'NewClaim') {
            this.requestsType = 'NewClaim';
            // if(this.changeview === true){
            //   this.hide = true;
            //   this.hide1 = false;
            // }
        }
        if (ev.detail.value === 'PreviousClaim') {
            this.requestsType = 'PreviousClaim';
            // if(this.changeview === true){
            //   this.hide = false;
            //   this.hide1 = true;
            // }
        }
        localStorage.setItem('requestType1', this.requestsType);
    }
    ngOnInit() {
    }
    changeView() {
        // this.ph_value = 'Enter Customer ID';
        // this.changeview =true;
        this.hide = true;
        // this.hide1 = false;
    }
};
MakeAClaimPage.ctorParameters = () => [];
MakeAClaimPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }]
};
MakeAClaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-make-a-claim',
        template: _make_a_claim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_make_a_claim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MakeAClaimPage);



/***/ }),

/***/ 94223:
/*!****************************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 0% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.con-p1 {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 20px 0px 0px 0px;\n}\n\n.input {\n  height: 48px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  --padding-start: 15px;\n  --padding-end: 20px;\n}\n\nimg.customer {\n  margin: 13px 0px 12px 18px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.car-css {\n  width: 100%;\n  height: 50px;\n}\n\n.con-l1 {\n  font-size: 18px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\n.btn {\n  width: 80px;\n  height: 32px;\n  --background: #1A206D;\n  --border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --box-shadow: none;\n}\n\n.img-div {\n  display: flex;\n  align-items: center;\n  margin: 18px auto 0px 27%;\n  text-align: right;\n}\n\n.con-l2 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-left: 8px;\n  color: #85858A;\n}\n\n.rec-div {\n  display: flex;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2UtYS1jbGFpbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFGSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksMEJBQUE7QUFNSjs7QUFKQTtFQUNJLDRCQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0FBYUoiLCJmaWxlIjoibWFrZS1hLWNsYWltLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwJSBhdXRvIDI1JTtcbn1cbi5zZWdtZW50MSB7XG4gICAgcGFkZGluZzogNXB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLnNidG4ge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIC0tbWFyZ2luLXRvcDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAtLWNvbG9yOiAjODU4NThBO1xuICAgICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59XG4uY29uLXAxe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbn1cbi5pbnB1dHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG59XG5pbWcuY3VzdG9tZXIge1xuICAgIG1hcmdpbjogMTNweCAwcHggMTJweCAxOHB4O1xufVxuaW9uLWlucHV0IHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuLmNhci1jc3N7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbi1sMXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbn1cbi5idG57XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uaW1nLWRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxOHB4IGF1dG8gMHB4IDI3JTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb24tbDJ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBjb2xvcjogIzg1ODU4QTtcbn1cbi5yZWMtZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XG59XG4iXX0= */";

/***/ }),

/***/ 43339:
/*!****************************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width:100% ;\">\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Claim</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\n        <ion-label>New Claim</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"PreviousClaim\" class=\"sbtn\">\n        <ion-label>Previous Claim</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div>\n      <p class=\"con-p1\">Enter Customer ID</p>\n    </div>\n\n    <div>\n      <ion-input class=\"input\" type=\"email\" (ionInput)=\"changeView()\" placeholder=\"Enter Customer ID\" (ionFocus)=\"changeView()\"><img class=\"customer\" src=\"assets/images/cust-logo.svg\"></ion-input>\n      <!-- placeholder=\"{{ph_value}}\" -->\n    </div>\n\n    <div style=\"margin-top:123px ;\" *ngIf=\"hide===false\">\n      <img src=\"assets/images/record-img.svg\" alt=\"\">\n    </div>\n    \n    <!-- -------------------record---------------- -->\n    <div  *ngIf=\"hide===true\">\n      <div class=\"rec-div\" style=\"margin-top: 20px;\">\n        <div style=\"margin: 39px 0px 40px 25px; width: 100%; text-align: center;\">\n          <div style=\"padding: 10px 10px 5px;\">\n            <img class=\"car-css\" src=\"assets/images/car.svg\">\n          </div>\n          <div>\n            <ion-label class=\"con-l1\">Motor Insurance</ion-label>\n          </div>\n          \n        </div>\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='NewClaim'\">\n          <ion-button style=\"margin: 0px; --background:#E8E8E7;\"   class=\"btn\" size=\"small\" [disabled]=true >Status</ion-button>\n          <ion-button style=\"margin: 0px; margin-top: 12px;\" class=\"btn\" size=\"small\" >Claim</ion-button>\n          <div class=\"img-div\" style=\"margin: 18px auto 0px 26%;\">\n            <img src=\"assets/images/john-doe.svg\">\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\n          </div>\n        </div>\n\n        <!-------- PreviousClaim -->\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='PreviousClaim'\">\n          <ion-button style=\"margin: 0px; --background:#A8B400;\"   class=\"btn\" size=\"small\"  >Status</ion-button>\n          <ion-button style=\"margin: 0px; margin-top: 12px; --background:#E8E8E7;\" class=\"btn\" size=\"small\" [disabled]=true>Claim</ion-button>\n          <div class=\"img-div\" style=\"margin: 18px auto 0px 26%;\">\n            <img src=\"assets/images/john-doe.svg\">\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"rec-div\" style=\"margin-top: 16.5px;\">\n        <div style=\"margin: 15px 0px 15px 20px; width: 100%; text-align: center;\">\n          <div style=\"padding: 10px 10px 5px;\">\n            <img class=\"car-css\"  src=\"assets/images/safe-home.svg\">\n          </div>\n          <div style=\"margin-left: 5px;\">\n            <ion-label class=\"con-l1\" >Home Insurance</ion-label>\n          </div>\n         \n        </div>\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='NewClaim'\" >\n          <ion-button style=\"margin: 0px; --background:#E8E8E7;\"   class=\"btn\" size=\"small\" [disabled]=true >Status</ion-button>\n          <ion-button style=\"margin: 0px; margin-top: 12px;\" class=\"btn\" size=\"small\" >Claim</ion-button>\n          <div class=\"img-div\"  >\n            <img src=\"assets/images/john-doe.svg\">\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\n          </div>\n        </div>\n\n        <!-------- PreviousClaim -->\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='PreviousClaim'\">\n          <ion-button style=\"margin: 0px; --background:#A8B400;\"   class=\"btn\" size=\"small\"  >Status</ion-button>\n          <ion-button style=\"margin: 0px; margin-top: 12px; --background:#E8E8E7;\" class=\"btn\" size=\"small\" [disabled]=true>Claim</ion-button>\n          <div class=\"img-div\">\n            <img src=\"assets/images/john-doe.svg\">\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\n          </div>\n        </div>\n        \n      </div>\n\n      <div class=\"rec-div\" style=\"margin-top: 16.5px;\">\n        <div style=\"margin: 15px 0px 15px 20px; width: 100%;text-align:center ;\">\n          <div style=\"padding: 10px 10px 5px;\">\n            <img class=\"car-css\" src=\"assets/images/home-at-fire.svg\">\n          </div>\n          <div style=\"margin-left: 5px;\">\n            <ion-label class=\"con-l1\" >Combined Fire and Burglary</ion-label>\n          </div>\n         \n        </div>\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='NewClaim'\" >\n          <ion-button style=\"margin: 0px; --background:#E8E8E7;\"   class=\"btn\" size=\"small\" [disabled]=true >Status</ion-button>\n          <ion-button style=\"margin: 0px; margin-top: 12px;\" class=\"btn\" size=\"small\" >Claim</ion-button>\n          <div class=\"img-div\"  >\n            <img src=\"assets/images/john-doe.svg\">\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\n          </div>\n        </div>\n\n        <!-------- PreviousClaim -->\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='PreviousClaim'\">\n          <ion-button style=\"margin: 0px; --background:#A8B400;\"   class=\"btn\" size=\"small\"  >Status</ion-button>\n          <ion-button style=\"margin: 0px; margin-top: 12px; --background:#E8E8E7;\" class=\"btn\" size=\"small\" [disabled]=true>Claim</ion-button>\n          <div class=\"img-div\">\n            <img src=\"assets/images/john-doe.svg\">\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n    \n\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_make-a-claim_make-a-claim_module_ts.js.map