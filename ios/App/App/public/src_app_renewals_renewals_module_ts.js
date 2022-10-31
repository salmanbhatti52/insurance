"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_renewals_renewals_module_ts"],{

/***/ 7951:
/*!*****************************************************!*\
  !*** ./src/app/renewals/renewals-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPageRoutingModule": () => (/* binding */ RenewalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _renewals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals.page */ 5971);




const routes = [
    {
        path: '',
        component: _renewals_page__WEBPACK_IMPORTED_MODULE_0__.RenewalsPage
    }
];
let RenewalsPageRoutingModule = class RenewalsPageRoutingModule {
};
RenewalsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RenewalsPageRoutingModule);



/***/ }),

/***/ 2433:
/*!*********************************************!*\
  !*** ./src/app/renewals/renewals.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPageModule": () => (/* binding */ RenewalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _renewals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals-routing.module */ 7951);
/* harmony import */ var _renewals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewals.page */ 5971);







let RenewalsPageModule = class RenewalsPageModule {
};
RenewalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _renewals_routing_module__WEBPACK_IMPORTED_MODULE_0__.RenewalsPageRoutingModule
        ],
        declarations: [_renewals_page__WEBPACK_IMPORTED_MODULE_1__.RenewalsPage]
    })
], RenewalsPageModule);



/***/ }),

/***/ 5971:
/*!*******************************************!*\
  !*** ./src/app/renewals/renewals.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPage": () => (/* binding */ RenewalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _renewals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals.page.html?ngResource */ 8795);
/* harmony import */ var _renewals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewals.page.scss?ngResource */ 2246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);






let RenewalsPage = class RenewalsPage {
    constructor(api, location) {
        this.api = api;
        this.location = location;
        this.show = false;
        this.Insurance = 'Car Insurance';
        this.listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }];
    }
    ngOnInit() {
        this.policy = JSON.parse(localStorage.getItem('policydata'));
        console.log('dasdasdsadsad', this.policy);
        if (this.policy) {
            if (this.policy.status == 1) {
                this.first_name = this.policy.first_name;
                this.last_name = this.policy.last_name;
                this.dob = this.policy.dob;
                this.phone_number = this.policy.phone_number;
                this.email = this.policy.email;
                this.address = this.policy.address;
            }
            else {
                this.api.presenttoast(this.policy.message);
            }
        }
        else {
            this.api.presenttoast('Policy record not found');
        }
    }
    goback() {
        this.location.back();
    }
    // ionViewWillEnter() {
    //   if (this.requestsType) {
    //     if (this.requestsType === 'renewals') {
    //       this.mySegment.nativeElement.children[0].click();
    //     }
    //     if (this.requestsType === 'subsequent') {
    //       this.mySegment.nativeElement.children[1].click();
    //     }
    //   } else {
    //     this.requestsType = 'renewals';
    //     this.mySegment.nativeElement.children[0].click();
    //   }
    // }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'renewals') {
            this.requestsType = 'renewals';
        }
        if (ev.detail.value === 'subsequent') {
            this.requestsType = 'subsequent';
        }
        localStorage.setItem('requestType', this.requestsType);
    }
    openlist() {
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
    selectInsurance(list) {
        this.Insurance = list.Insurance;
        this.show = false;
    }
    renewals() {
        var myData = {
            "sid": "ECHANNEL2",
            "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
        };
        this.api.gibsapi(myData).subscribe((res) => {
            console.log(res);
            this.bearertoken = res.accessToken;
            this.result(this.bearertoken);
        }, (err) => {
            console.log(err);
            this.api.hideLoader();
        });
    }
    result(token) {
        let Bearertoken = token;
        let payload = {
            "entryDate": "2022-10-07T10:05:37.919Z",
            "startDate": "2022-10-07T10:05:37.919Z",
            "endDate": "2022-10-07T10:05:37.919Z",
            "fxCurrency": "NGN",
            "fxRate": 2147483647,
            "paymentProviderID": "string",
            "paymentReferenceID": "string",
            "policySections": [
                {
                    "sectionID": "string",
                    "sectionSumInsured": 0,
                    "sectionPremium": 0,
                    "vehicleRegNo": "string",
                    "vehicleTypeID": "VAN",
                    "vehicleUser": "string",
                    "engineNumber": "string",
                    "chasisNumber": "string",
                    "vehicleUsage": "PRIVATE",
                    "numberOfSeats": 0,
                    "stateOfIssue": "string",
                    "vehicleMake": "string",
                    "vehicleModel": "string",
                    "manufactureYear": 0,
                    "vehicleColour": "string",
                    "engineCapacityHP": "string",
                    "coverType": "COMPREHENSIVE"
                }
            ]
        };
        let encode1 = encodeURIComponent('P/500/1002/2022/00082');
        console.log('dasdsadsa', encode1);
        this.api.postdata('http://testcipapiservices.gibsonline.com/api/Policies/Motor/' + encode1 + '/renew', payload, Bearertoken).subscribe((res) => {
            console.log('resssss', res);
            this.api.presenttoast('Success');
        }, err => {
            console.log();
        });
    }
};
RenewalsPage.ctorParameters = () => [
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
RenewalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-renewals',
        template: _renewals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_renewals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenewalsPage);



/***/ }),

/***/ 2246:
/*!********************************************************!*\
  !*** ./src/app/renewals/renewals.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n  font-family: Bliss Pro;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 12% auto 5%;\n  font-family: Bliss Pro;\n}\n\n.label {\n  font-size: 14px;\n  color: #000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btndiv {\n  margin-top: 5%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.btn1 {\n  height: 41px;\n  --background: #13027B;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n\n.btn2 {\n  height: 41px;\n  --background: #A2BB06;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3YWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUZBO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0FBRUY7O0FBQUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUdBLGNBQUE7QUFBRiIsImZpbGUiOiJyZW5ld2Fscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWQtcHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG4ud3JhcHBlcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOjEyJSBhdXRvIDUlO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuLmxhYmVse1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWlucHV0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLmlucHV0ZmllbGQge1xuICBtYXJnaW46IDIlIDAlIDQlIDAlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uaW4tdGV4dCB7XG4gIC0tY29sb3I6ICM1RDVENUQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XG4gIC0tcGFkZGluZy1zdGFydDogNyU7XG4gIC0tcGFkZGluZy10b3A6IDUlO1xuICAtLXBhZGRpbmctYm90dG9tOiA1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcbn1cbi5idG5kaXZ7XG4gIG1hcmdpbi10b3A6NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmJ0bjF7XG5cbiAgaGVpZ2h0OiA0MXB4O1xuICAtLWJhY2tncm91bmQ6ICMxMzAyN0I7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuXG5cbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uYnRuMntcblxuICBoZWlnaHQ6IDQxcHg7XG4gIC0tYmFja2dyb3VuZDogI0EyQkIwNjtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG5cblxuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLy8vLy8vb2xkIGNvZGUgY3NzXG4vLyAuc2VnbWVudDEge1xuLy8gICAtLWJhY2tncm91bmQ6bm9uZTtcbi8vICAgLnNidG4ge1xuLy8gICAgIGhlaWdodDogNDhweDtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMDtcbi8vICAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcbi8vICAgICAtLW1hcmdpbi10b3A6IDVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuLy8gICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuLy8gICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAgIC0tY29sb3I6ICM4NTg1OEE7XG4vLyAgICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xuLy8gICAgIC0tYmFja2dyb3VuZDogI0U4RThFNztcbi8vICAgfVxuLy8gICAuYWN0aXZle1xuLy8gICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjQThCNDAwO1xuXG4vLyAgIH1cblxuLy8gfVxuLy8gLmRyb3Bib3h7XG4vLyAgIG1hcmdpbjogNCUgMCU7XG4vLyAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4vLyAgIHBhZGRpbmc6IDEycHggMTVweDtcblxuLy8gfVxuLy8gLmlubmVyZHJvcGJveHtcbi8vICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbi8vICAgcGFkZGluZy10b3A6IDJweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDIuOHB4O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbi8vIH1cblxuLy8gLmV1cm8tdGV4dHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gICBjb2xvcjogIzAwMDAwMDtcblxuLy8gfVxuLy8gLmV1cm8tdGV4dDF7XG4vLyAgIGNvbG9yOiAjMDAwMDAwO1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIG1hcmdpbi10b3A6IDUlO1xuLy8gfVxuLy8gLmZsZXgtY3tcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XG4vLyAgICAgcGFkZGluZzogMjJweCA1cHggMjBweCA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbi8vIH1cbi8vIC5mbGV4LTJ7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIH1cbi8vIC5mbGV4LTIgc3Bhbntcbi8vICAgY29sb3I6ICM4NTg1OEE7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4vLyB9XG4vLyAubGViZWwxe1xuLy8gICBjb2xvcjogIzFBMjA2RDtcbi8vICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICBtYXJnaW4tdG9wOiAxMCU7XG4vLyB9XG4vLyAuYnRuMXtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuLy8gICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XG4vLyAgIHdpZHRoOiAxMTBweDtcbi8vICAgaGVpZ2h0OiAzMnB4O1xuLy8gICBmb250LXdlaWdodDogNTAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vIH1cbi8vIC5idG4ye1xuLy8gICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcbi8vICAgd2lkdGg6IDExMHB4O1xuLy8gICBoZWlnaHQ6IDMycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gfVxuIl19 */";

/***/ }),

/***/ 8795:
/*!********************************************************!*\
  !*** ./src/app/renewals/renewals.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n\n        <div style=\"width:100% ;\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Renewals</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\n      <ion-segment-button mode=\"ios\" value=\"renewals\" class=\"sbtn\">\n        <ion-label>Renewals</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"subsequent\" class=\"sbtn\" [class.active]=\"requestsType=='subsequent'\"\n        style=\"margin-left: 5%;\">\n        <ion-label>Subsequent</ion-label>\n      </ion-segment-button>\n    </ion-segment> -->\n\n    <!-- <div style=\"margin-top:30px;\">\n      <label class=\"con-l1\">Policy Type</label>\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\n          <div class=\"euro-text\">{{Insurance}}</div>\n          <div class=\"imgdiv\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n          </div>\n        </div>\n        <div *ngIf=\"show==true\">\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n    <div *ngIf=\"requestsType=='renewals'\">\n      <div class=\"flex-c\">\n        <div>\n          <img src=\"assets/images/car.svg\">\n          <div class=\"lebel1\">Motor Insurance</div>\n        </div>\n        <div>\n          <div class=\"flex-2\">\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\n          </div>\n          <div style=\"margin-top:10%;\">\n            <ion-button class=\"btn1\">Renewal</ion-button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex-c\" style=\"margin-top:5%\">\n        <div>\n          <img src=\"assets/images/car.svg\">\n          <div class=\"lebel1\">Motor Insurance</div>\n        </div>\n        <div>\n          <div class=\"flex-2\">\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\n          </div>\n          <div style=\"margin-top:10%;\">\n            <ion-button class=\"btn1\">Renewal</ion-button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex-c\" style=\"margin-top:5%\">\n        <div>\n          <img src=\"assets/images/car.svg\">\n          <div class=\"lebel1\">Motor Insurance</div>\n        </div>\n        <div>\n          <div class=\"flex-2\">\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\n          </div>\n          <div style=\"margin-top:10%;\">\n            <ion-button class=\"btn1\">Renewal</ion-button>\n          </div>\n        </div>\n      </div>\n    </div> -->\n    <!----------------- request type subsequent-------------------->\n    <!-- <div *ngIf=\"requestsType=='subsequent'\" >\n      <div class=\"flex-c\">\n        <div>\n          <img src=\"assets/images/car.svg\">\n          <div class=\"lebel1\">Motor Insurance</div>\n        </div>\n        <div>\n          <div class=\"flex-2\">\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\n          </div>\n          <div style=\"margin-top:10%;\">\n            <ion-button class=\"btn2\">subsequent</ion-button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex-c\" style=\"margin-top:5%\">\n        <div>\n          <img src=\"assets/images/car.svg\">\n          <div class=\"lebel1\">Motor Insurance</div>\n        </div>\n        <div>\n          <div class=\"flex-2\">\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\n          </div>\n          <div style=\"margin-top:10%;\">\n            <ion-button class=\"btn2\">subsequent</ion-button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex-c\" style=\"margin-top:5%\">\n        <div>\n          <img src=\"assets/images/car.svg\">\n          <div class=\"lebel1\">Motor Insurance</div>\n        </div>\n        <div>\n          <div class=\"flex-2\">\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\n          </div>\n          <div style=\"margin-top:10%;\">\n            <ion-button class=\"btn2\">subsequent</ion-button>\n          </div>\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"label\">First Name</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"John\" class=\"in-text\" [(ngModel)]=\"first_name\">\n      </ion-input>\n    </div>\n\n    <div class=\"label\">Last Name</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Doe\" class=\"in-text\" [(ngModel)]=\"last_name\">\n      </ion-input>\n    </div>\n\n    <div class=\"label\">Email</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"email\" placeholder=\"email\" class=\"in-text\" [(ngModel)]=\"email\"></ion-input>\n    </div>\n\n    <div class=\"label\">Date Of Birth</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"YYYY-MM-DD\" class=\"in-text\" [(ngModel)]=\"dob\"\n        value=\"dob\">\n      </ion-input>\n    </div>\n\n    <div class=\"label\">Phone Number</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"tel\" placeholder=\"32154.....\" class=\"in-text\" [(ngModel)]=\"phone_number\">\n      </ion-input>\n    </div>\n\n    <div class=\"label\">Address</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\" Ligali Ayorinde Street\" class=\"in-text\"\n        [(ngModel)]=\"address\"></ion-input>\n    </div>\n\n    <!-- <div class=\"label\">Vehicle Make</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Honda \" class=\"in-text\"></ion-input>\n    </div>\n\n    <div class=\"label\">Vehicle Model</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Accord\" class=\"in-text\"></ion-input>\n    </div>\n\n    <div class=\"label\">Sum Insured</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"number\" placeholder=\"3,200,000\" class=\"in-text\"></ion-input>\n    </div>\n\n    <div class=\"label\">Review Sum Insured </div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"\" class=\"in-text\"></ion-input>\n    </div>\n\n    <div class=\"label\">Premium</div>\n    <div class=\"inputfield\">\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"3,000\" class=\"in-text\"></ion-input>\n    </div> -->\n\n    <div class=\"btndiv\">\n      <ion-button class=\"btn1\" (click)=\"renewals()\">Renew Policy Now</ion-button>\n      <ion-button class=\"btn2\">Schedule a reminder</ion-button>\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_renewals_renewals_module_ts.js.map