"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_renewals_renewals_module_ts"],{

/***/ 97951:
/*!*****************************************************!*\
  !*** ./src/app/renewals/renewals-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPageRoutingModule": () => (/* binding */ RenewalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _renewals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals.page */ 69637);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _renewals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals-routing.module */ 97951);
/* harmony import */ var _renewals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewals.page */ 69637);







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

/***/ 69637:
/*!*******************************************!*\
  !*** ./src/app/renewals/renewals.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPage": () => (/* binding */ RenewalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _renewals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals.page.html?ngResource */ 78795);
/* harmony import */ var _renewals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewals.page.scss?ngResource */ 2246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);






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
        // this.api.postdata(' http://testcipapiservices.gibsonline.com/api/policies/P/500/1001/2023/00235', this.bearertoken).subscribe((response: any) => {
        //   console.log('ddddddddddddddddddd', response);
        //   this.api.hideLoader();
        // });
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n  font-family: Bliss Pro;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 12% auto 5%;\n  font-family: Bliss Pro;\n}\n\n.label {\n  font-size: 14px;\n  color: #000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btndiv {\n  margin-top: 5%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.btn1 {\n  height: 41px;\n  --background: #13027B;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n\n.btn2 {\n  height: 41px;\n  --background: #A2BB06;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3YWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUZBO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0FBRUY7O0FBQUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUdBLGNBQUE7QUFBRiIsImZpbGUiOiJyZW5ld2Fscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5oZWFkLXB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjoxMiUgYXV0byA1JTtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcblxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgbWFyZ2luOiAyJSAwJSA0JSAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5pbi10ZXh0IHtcclxuICAtLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcclxuICAtLXBhZGRpbmctdG9wOiA1JTtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1JTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgbWFyZ2luLXRvcDo1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5idG4xe1xyXG5cclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMTMwMjdCO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcblxyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idG4ye1xyXG5cclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQTJCQjA2O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcblxyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4vLy8vLy9vbGQgY29kZSBjc3NcclxuLy8gLnNlZ21lbnQxIHtcclxuLy8gICAtLWJhY2tncm91bmQ6bm9uZTtcclxuLy8gICAuc2J0biB7XHJcbi8vICAgICBoZWlnaHQ6IDQ4cHg7XHJcbi8vICAgICAtLWJvcmRlci13aWR0aDogMDtcclxuLy8gICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vLyAgICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbi8vICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuLy8gICAgIC0tY29sb3I6ICM4NTg1OEE7XHJcbi8vICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4vLyAgIH1cclxuLy8gICAuYWN0aXZle1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNBOEI0MDA7XHJcblxyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuLy8gLmRyb3Bib3h7XHJcbi8vICAgbWFyZ2luOiA0JSAwJTtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG5cclxuLy8gfVxyXG4vLyAuaW5uZXJkcm9wYm94e1xyXG4vLyAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuLy8gICBwYWRkaW5nLXRvcDogMnB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiAyLjhweDtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmV1cm8tdGV4dHtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbi8vIH1cclxuLy8gLmV1cm8tdGV4dDF7XHJcbi8vICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgbWFyZ2luLXRvcDogNSU7XHJcbi8vIH1cclxuLy8gLmZsZXgtY3tcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XHJcbi8vICAgICBwYWRkaW5nOiAyMnB4IDVweCAyMHB4IDVweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vIH1cclxuLy8gLmZsZXgtMntcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAuZmxleC0yIHNwYW57XHJcbi8vICAgY29sb3I6ICM4NTg1OEE7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4vLyB9XHJcbi8vIC5sZWJlbDF7XHJcbi8vICAgY29sb3I6ICMxQTIwNkQ7XHJcbi8vICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgIG1hcmdpbi10b3A6IDEwJTtcclxuLy8gfVxyXG4vLyAuYnRuMXtcclxuLy8gICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4vLyAgIHdpZHRoOiAxMTBweDtcclxuLy8gICBoZWlnaHQ6IDMycHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gfVxyXG4vLyAuYnRuMntcclxuLy8gICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4vLyAgIHdpZHRoOiAxMTBweDtcclxuLy8gICBoZWlnaHQ6IDMycHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gfVxyXG4iXX0= */";

/***/ }),

/***/ 78795:
/*!********************************************************!*\
  !*** ./src/app/renewals/renewals.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <div style=\"width:100% ;\" (click)=\"goback()\">\r\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Renewals</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"renewals\" class=\"sbtn\">\r\n        <ion-label>Renewals</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"subsequent\" class=\"sbtn\" [class.active]=\"requestsType=='subsequent'\"\r\n        style=\"margin-left: 5%;\">\r\n        <ion-label>Subsequent</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment> -->\r\n\r\n    <!-- <div style=\"margin-top:30px;\">\r\n      <label class=\"con-l1\">Policy Type</label>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n          <div class=\"euro-text\">{{Insurance}}</div>\r\n          <div class=\"imgdiv\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"requestsType=='renewals'\">\r\n      <div class=\"flex-c\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn1\">Renewal</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn1\">Renewal</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn1\">Renewal</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!----------------- request type subsequent-------------------->\r\n    <!-- <div *ngIf=\"requestsType=='subsequent'\" >\r\n      <div class=\"flex-c\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn2\">subsequent</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn2\">subsequent</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn2\">subsequent</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"label\">First Name</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input\r\n        style=\"height: 48px\"\r\n        type=\"text\"\r\n        placeholder=\"John\"\r\n        class=\"in-text\"\r\n        [(ngModel)]=\"first_name\"\r\n      >\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Last Name</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input\r\n        style=\"height: 48px\"\r\n        type=\"text\"\r\n        placeholder=\"Doe\"\r\n        class=\"in-text\"\r\n        [(ngModel)]=\"last_name\"\r\n      >\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Email</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input\r\n        style=\"height: 48px\"\r\n        type=\"email\"\r\n        placeholder=\"email\"\r\n        class=\"in-text\"\r\n        [(ngModel)]=\"email\"\r\n      ></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Date Of Birth</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input\r\n        style=\"height: 48px\"\r\n        type=\"text\"\r\n        placeholder=\"YYYY-MM-DD\"\r\n        class=\"in-text\"\r\n        [(ngModel)]=\"dob\"\r\n        value=\"dob\"\r\n      >\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Phone Number</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input\r\n        style=\"height: 48px\"\r\n        type=\"tel\"\r\n        placeholder=\"32154.....\"\r\n        class=\"in-text\"\r\n        [(ngModel)]=\"phone_number\"\r\n      >\r\n      </ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Address</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input\r\n        style=\"height: 48px\"\r\n        type=\"text\"\r\n        placeholder=\" Ligali Ayorinde Street\"\r\n        class=\"in-text\"\r\n        [(ngModel)]=\"address\"\r\n      ></ion-input>\r\n    </div>\r\n\r\n    <!-- <div class=\"label\">Vehicle Make</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Honda \" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Vehicle Model</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Accord\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Sum Insured</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"number\" placeholder=\"3,200,000\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Review Sum Insured </div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Premium</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"3,000\" class=\"in-text\"></ion-input>\r\n    </div> -->\r\n\r\n    <div class=\"btndiv\">\r\n      <ion-button class=\"btn1\" (click)=\"renewals()\"\r\n        >Renew Policy Now</ion-button\r\n      >\r\n      <ion-button class=\"btn2\">Schedule a reminder</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_renewals_renewals_module_ts.js.map