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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n  font-family: Bliss Pro;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 12% auto 5%;\n  font-family: Bliss Pro;\n}\n\n.label {\n  font-size: 14px;\n  color: #000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btndiv {\n  margin-top: 5%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.btn1 {\n  height: 41px;\n  --background: #13027B;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n\n.btn2 {\n  height: 41px;\n  --background: #A2BB06;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3YWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0aHViJTIwUHJvamVjdHNcXGluc3VyYW5jZVxcc3JjXFxhcHBcXHJlbmV3YWxzXFxyZW5ld2Fscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSw0QkFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FEREE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNJRjs7QURGQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBR0EsY0FBQTtBQ0VGOztBREFBO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0FDQUYiLCJmaWxlIjoicmVuZXdhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaGVhZC1we1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46MTIlIGF1dG8gNSU7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4ubGFiZWx7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG5cclxuLmlucHV0ZmllbGQge1xyXG4gIG1hcmdpbjogMiUgMCUgNCUgMCU7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uaW4tdGV4dCB7XHJcbiAgLS1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNyU7XHJcbiAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxufVxyXG4uYnRuZGl2e1xyXG4gIG1hcmdpbi10b3A6NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYnRuMXtcclxuXHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzEzMDI3QjtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcblxyXG5cclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnRuMntcclxuXHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0EyQkIwNjtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcblxyXG5cclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLy8vLy8vb2xkIGNvZGUgY3NzXHJcbi8vIC5zZWdtZW50MSB7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOm5vbmU7XHJcbi8vICAgLnNidG4ge1xyXG4vLyAgICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbi8vICAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gICAgIC0tbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuLy8gICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xyXG4vLyAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAtLWNvbG9yOiAjODU4NThBO1xyXG4vLyAgICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogI0U4RThFNztcclxuLy8gICB9XHJcbi8vICAgLmFjdGl2ZXtcclxuLy8gICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjQThCNDAwO1xyXG5cclxuLy8gICB9XHJcblxyXG4vLyB9XHJcbi8vIC5kcm9wYm94e1xyXG4vLyAgIG1hcmdpbjogNCUgMCU7XHJcbi8vICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4vLyAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuXHJcbi8vIH1cclxuLy8gLmlubmVyZHJvcGJveHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbi8vICAgcGFkZGluZy10b3A6IDJweDtcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogMi44cHg7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5ldXJvLXRleHR7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4vLyB9XHJcbi8vIC5ldXJvLXRleHQxe1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgIG1hcmdpbi10b3A6IDUlO1xyXG4vLyB9XHJcbi8vIC5mbGV4LWN7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNzYgMTgxIDAgLyAxMCUpO1xyXG4vLyAgICAgcGFkZGluZzogMjJweCA1cHggMjBweCA1cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4vLyB9XHJcbi8vIC5mbGV4LTJ7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuLy8gLmZsZXgtMiBzcGFue1xyXG4vLyAgIGNvbG9yOiAjODU4NThBO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuLy8gfVxyXG4vLyAubGViZWwxe1xyXG4vLyAgIGNvbG9yOiAjMUEyMDZEO1xyXG4vLyAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICBtYXJnaW4tdG9wOiAxMCU7XHJcbi8vIH1cclxuLy8gLmJ0bjF7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcclxuLy8gICB3aWR0aDogMTEwcHg7XHJcbi8vICAgaGVpZ2h0OiAzMnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vIH1cclxuLy8gLmJ0bjJ7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcclxuLy8gICB3aWR0aDogMTEwcHg7XHJcbi8vICAgaGVpZ2h0OiAzMnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vIH1cclxuIiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWQtcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTIlIGF1dG8gNSU7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5pbnB1dGZpZWxkIHtcbiAgbWFyZ2luOiAyJSAwJSA0JSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmluLXRleHQge1xuICAtLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xuICAtLXBhZGRpbmctdG9wOiA1JTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xufVxuXG4uYnRuZGl2IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnRuMSB7XG4gIGhlaWdodDogNDFweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMTMwMjdCO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5idG4yIHtcbiAgaGVpZ2h0OiA0MXB4O1xuICAtLWJhY2tncm91bmQ6ICNBMkJCMDY7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */";

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