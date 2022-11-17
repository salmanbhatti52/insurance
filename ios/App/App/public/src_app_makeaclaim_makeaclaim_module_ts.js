"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_makeaclaim_makeaclaim_module_ts"],{

/***/ 86326:
/*!*********************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPageRoutingModule": () => (/* binding */ MakeaclaimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _makeaclaim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page */ 90406);




const routes = [
    {
        path: '',
        component: _makeaclaim_page__WEBPACK_IMPORTED_MODULE_0__.MakeaclaimPage
    }
];
let MakeaclaimPageRoutingModule = class MakeaclaimPageRoutingModule {
};
MakeaclaimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeaclaimPageRoutingModule);



/***/ }),

/***/ 13268:
/*!*************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPageModule": () => (/* binding */ MakeaclaimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _makeaclaim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim-routing.module */ 86326);
/* harmony import */ var _makeaclaim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page */ 90406);







let MakeaclaimPageModule = class MakeaclaimPageModule {
};
MakeaclaimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _makeaclaim_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakeaclaimPageRoutingModule
        ],
        declarations: [_makeaclaim_page__WEBPACK_IMPORTED_MODULE_1__.MakeaclaimPage]
    })
], MakeaclaimPageModule);



/***/ }),

/***/ 90406:
/*!***********************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPage": () => (/* binding */ MakeaclaimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page.html?ngResource */ 86759);
/* harmony import */ var _makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page.scss?ngResource */ 16005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);







let MakeaclaimPage = class MakeaclaimPage {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.show = false;
        this.Insurance = 'Please Select';
        this.listarray = [{ Insurance: 'General Business' }, { Insurance: 'Life Busines' }];
        this.claimdoc = {
            file: "",
            base64: "",
        };
        this.showloss = false;
        this.losstype = "Please Select";
        this.listarrayloss = [{ Insurance: 'Accidental Damage' }, { Insurance: 'Own Damage' }, { Insurance: 'Others' }];
        this.showPickerStartDate = false;
        this.showPickerEndDate = false;
        this.tourEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.tourStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.desc = '';
        this.refnum = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'NewClaim') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'ClaimTracker') {
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
        }
        if (ev.detail.value === 'ClaimTracker') {
            this.requestsType = 'ClaimTracker';
        }
        localStorage.setItem('requestType1', this.requestsType);
    }
    openlist() {
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
    openlistloss() {
        if (this.showloss == true) {
            this.showloss = false;
        }
        else {
            this.showloss = true;
        }
    }
    selectInsurance(list) {
        this.Insurance = list.Insurance;
        this.show = false;
    }
    selectFile(event, type) {
        console.log("type --- ", type);
        console.log("linceise --- ", event.target.files[0]);
        this.getBase64(event.target.files[0]).then(data => {
            let file = event.target.files[0];
            let base64 = data;
            this.claimdoc.file = file;
            this.claimdoc.base64 = base64;
        }).catch(err => console.log('Errrrrr', err));
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    reportclaim() {
        if (this.Insurance == 'Life Busines') {
            if (this.claimdoc.file == '') {
                this.api.presenttoast('Choose Document');
            }
            else {
                var data = new FormData();
                data.append("polnum", this.polnum);
                data.append("csurname", this.csurname);
                data.append("cothname", this.cothname);
                data.append("dd_liabtype", this.dd_liabtype);
                data.append("txt_message_clm", this.txt_message_clm);
                data.append("claimdoc", this.claimdoc.file);
                this.api.showLoader();
                this.api.postdata('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=200', data, localStorage.getItem('token')).subscribe((res) => {
                    console.log('response claim', res);
                    this.api.hideLoader();
                    // if (res.result.status == 0) {
                    //   this.api.presenttoast(res.result.message)
                    // } else {
                    //   this.api.presenttoast('Please try again');
                    // }
                    if (res.result) {
                        if (res.result.status == 1) {
                            this.api.presenttoast(res.result.message);
                        }
                        else {
                            this.api.presenttoast(res.result.message);
                        }
                    }
                    else {
                        this.api.presenttoast('Policy record not found');
                    }
                });
            }
        }
        else {
            this.api.showLoader();
            const myData = {
                sid: 'ECHANNEL2',
                token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
            };
            var mydataAPI = {
                "policyNo": this.polnum,
                "lossDate": this.tourStartDate,
                "notifyDate": this.tourEndDate,
                "description": this.desc,
                "lossType": this.losstype,
                "reference": this.refnum
            };
            this.api.gibsapi(myData).subscribe((res) => {
                console.log('token-----', res);
                const token = res.accessToken;
                this.api.postdata('http://testcipapiservices.gibsonline.com/api/Claims', mydataAPI, token).subscribe((res) => {
                    this.api.hideLoader();
                    this.api.presenttoast('Clain Number ' + res.claimNo);
                    console.log('gibs product detail', res);
                    // localStorage.setItem('gibsproduct', JSON.stringify(res))
                    // this.router.navigate(['gibsplans']);
                });
            }, (err) => {
                this.api.presenttoast('Invalid Policy Number');
                console.log(err);
                this.api.hideLoader();
            });
        }
    }
    dateChanged(value, type) {
        if (type == 'start') {
            this.tourStartDate = value;
            console.log('this.tourStartDate ----', this.tourStartDate);
            this.showPickerStartDate = false;
        }
        else {
            this.tourEndDate = value;
            console.log('this.tourEndDate ----', this.tourEndDate);
            this.showPickerEndDate = false;
        }
    }
    selectInsuranceloss(list) {
        this.losstype = list.Insurance;
        this.showloss = false;
    }
};
MakeaclaimPage.ctorParameters = () => [
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MakeaclaimPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
MakeaclaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-makeaclaim',
        template: _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MakeaclaimPage);



/***/ }),

/***/ 16005:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 0% auto 0%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: transparent;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 25px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  --background: #85858a;\n  color: #fff;\n  margin-right: 5%;\n  height: 45px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.label {\n  font-size: 14px;\n  color: #000000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.custom-file-input {\n  color: transparent;\n  width: 100%;\n  margin-top: 2%;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Choose\";\n  display: inline-block;\n  background: #1A206D;\n  border-radius: 5px;\n  padding: 12px 8px;\n  outline: none;\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n  width: 100%;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\np {\n  color: #000;\n  font-size: 13px;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VhY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLDRCQUFBO0FBSUo7O0FBREU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUVBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBRUEsZUFBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBS0o7O0FBREE7RUFHRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJtYWtlYWNsYWltLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0byAwJTtcclxufVxyXG4uc2VnbWVudDEge1xyXG4gIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAuc2J0biB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICM4NTg1OEE7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODU4NThhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bib3h7XHJcbiAgICBtYXJnaW46IDQlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblxyXG4gIH1cclxuICAuaW5uZXJkcm9wYm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIH1cclxuXHJcbiAgLmV1cm8tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgfVxyXG4gIC5ldXJvLXRleHQxe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB9XHJcblxyXG4gIC5pbnB1dGZpZWxkIHtcclxuICAgIG1hcmdpbjogMiUgMCUgNCUgMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcblxyXG4gIC5pbi10ZXh0IHtcclxuICAgIC0tY29sb3I6ICM1RDVENUQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcclxuICAgIC0tcGFkZGluZy10b3A6IDUlO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiQ2hvb3NlXCI7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5idG5kaXZ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvO1xyXG4gIH1cclxuICBwe1xyXG4gICAgY29sb3I6ICMwMDA7XHJcblxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuYnRuMXtcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuXHJcbi5pdGVtLXBpY2tlciB7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xyXG5cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 86759:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Claim</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\r\n        <ion-label>New Claim</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"ClaimTracker\" class=\"sbtn\">\r\n        <ion-label>Claim Tracker</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div *ngIf=\"requestsType=='NewClaim'\">\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n          <div class=\"euro-text\">{{Insurance}}</div>\r\n          <div class=\"imgdiv\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"Insurance == 'Life Busines'\">\r\n\r\n      <div class=\"label\" style=\"margin: 12px 0px 0px;\">Policy Number</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy Number\" class=\"in-text\"\r\n          [(ngModel)]=\"polnum\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Client Surname</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Client Surname\" class=\"in-text\"\r\n          [(ngModel)]=\"csurname\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Client First name</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Client First name\" class=\"in-text\" [(ngModel)]=\"cothname\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Policy type</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy type\" class=\"in-text\"\r\n          [(ngModel)]=\"dd_liabtype\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Claim details</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Claim details\" class=\"in-text\"\r\n          [(ngModel)]=\"txt_message_clm\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Claims Supporting Document</div>\r\n\r\n      <input class=\"custom-file-input\" type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\"\r\n        accept=\"image/x-png,image/gif,image/jpeg\">\r\n\r\n      <div style=\"height: 100px; width:100px; text-align: center;\" *ngIf=\"claimdoc.base64\"><img\r\n          style=\"height: 100px; width:100px\" src=\"{{claimdoc.base64}}\" alt=\"\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"Insurance == 'General Business'\">\r\n\r\n      <div class=\"label\" style=\"margin: 12px 0px 0px;\">Policy Number</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy Number\" class=\"in-text\"\r\n          [(ngModel)]=\"polnum\">\r\n        </ion-input>\r\n      </div>\r\n\r\n       <!-- Loss Date  -->\r\n       <div class=\"label\">Loss date</div>\r\n       <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\r\n         (click)=\"showPickerStartDate = !showPickerStartDate\">\r\n         <div style=\"display: flex; align-items:center\">\r\n           <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ tourStartDate }}</ion-text>\r\n         </div>\r\n       </div>\r\n       <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"date\"\r\n         *ngIf=\"showPickerStartDate\" #datetime [value]=\"tourStartDate\" size=\"cover\"\r\n         (ionChange)=\"dateChanged(datetime.value,'start')\" showDefaultButtons=\"true\"\r\n         (ionCancel)=\"showPickerStartDate=false\"></ion-datetime>\r\n       <!-- Loss Date  -->\r\n\r\n        <!-- End Date  -->\r\n        <div class=\"label\">Notify date </div>\r\n        <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\r\n          (click)=\"showPickerEndDate = !showPickerEndDate\">\r\n          <div style=\"display: flex; align-items:center\">\r\n            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ tourEndDate }}</ion-text>\r\n          </div>\r\n        </div>\r\n        <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"date\"\r\n          *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\"\r\n          (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\"\r\n          (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\r\n        <!-- End Date  -->\r\n        <div class=\"label\">Description</div>\r\n         <div class=\"inputfield\">\r\n             <ion-textarea rows=\"7\" type=\"text\" placeholder=\"Loss Description\" class=\"in-text\"\r\n               [(ngModel)]=\"desc\">\r\n             </ion-textarea>\r\n           </div>\r\n\r\n\r\n           <div class=\"label\" style=\"margin: 12px 0px 0px;\">Loss Type</div>\r\n\r\n           <div class=\"dropbox\">\r\n             <div class=\"innerdropbox\" (click)=\"openlistloss()\">\r\n               <div class=\"euro-text\">{{losstype}}</div>\r\n               <div class=\"imgdiv\">\r\n                 <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n                 <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n               </div>\r\n             </div>\r\n             <div *ngIf=\"showloss==true\">\r\n               <div *ngFor=\"let list of listarrayloss\" (click)=\"selectInsuranceloss(list)\">\r\n                 <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n           </div>\r\n\r\n           <div class=\"label\" style=\"margin: 12px 0px 0px;\">Reference Number</div>\r\n           <div class=\"inputfield\">\r\n             <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Reference Number\" class=\"in-text\"\r\n               [(ngModel)]=\"refnum\">\r\n             </ion-input>\r\n           </div>\r\n       </div>\r\n     </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"requestsType=='ClaimTracker'\">\r\n\r\n\r\n      <ion-row>\r\n        <ion-col size=\"2\" style=\"text-align: -webkit-center;\">\r\n          <img style=\"    width: 26px;\r\n          margin-top: 24px;\" src=\"assets/tracking/01.svg\">\r\n\r\n        </ion-col>\r\n\r\n\r\n        <ion-col size=\"10\">\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s1.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Claims received and under verification</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s2.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Claim verified and being processed</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s3.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>EDV sent to you and awaiting submission</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s4.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Final Approval</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s5.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Payment in progress</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"requestsType=='NewClaim'\">\r\n  <div class=\"btndiv\">\r\n    <ion-button class=\"btn1\" (click)=\"reportclaim()\">Submit claim</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_makeaclaim_makeaclaim_module_ts.js.map