"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_makeaclaim_makeaclaim_module_ts"],{

/***/ 6326:
/*!*********************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPageRoutingModule": () => (/* binding */ MakeaclaimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _makeaclaim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page */ 406);




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

/***/ 3268:
/*!*************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPageModule": () => (/* binding */ MakeaclaimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _makeaclaim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim-routing.module */ 6326);
/* harmony import */ var _makeaclaim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page */ 406);







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

/***/ 406:
/*!***********************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPage": () => (/* binding */ MakeaclaimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page.html?ngResource */ 6759);
/* harmony import */ var _makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page.scss?ngResource */ 6005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







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
            this.api.presenttoast('general business');
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
                this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Claims' + mydataAPI, token).subscribe((res) => {
                    console.log('gibs product detail', res);
                    localStorage.setItem('gibsproduct', JSON.stringify(res));
                    this.router.navigate(['gibsplans']);
                });
            }, (err) => {
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

/***/ 6005:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 0% auto 0%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: transparent;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 25px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  --background: #85858a;\n  color: #fff;\n  margin-right: 5%;\n  height: 45px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.label {\n  font-size: 14px;\n  color: #000000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.custom-file-input {\n  color: transparent;\n  width: 100%;\n  margin-top: 2%;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Choose\";\n  display: inline-block;\n  background: #1A206D;\n  border-radius: 5px;\n  padding: 12px 8px;\n  outline: none;\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n  width: 100%;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\np {\n  color: #000;\n  font-size: 13px;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VhY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLDRCQUFBO0FBSUo7O0FBREU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUVBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBRUEsZUFBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBS0o7O0FBREE7RUFHRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJtYWtlYWNsYWltLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0byAwJTtcbn1cbi5zZWdtZW50MSB7XG4gIHBhZGRpbmc6IDVweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOjEwMCU7XG4gIC5zYnRuIHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICM4NTg1OEE7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC0tYmFja2dyb3VuZDogIzg1ODU4YTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uZHJvcGJveHtcbiAgICBtYXJnaW46IDQlIDAlO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG5cbiAgfVxuICAuaW5uZXJkcm9wYm94e1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIH1cblxuICAuZXVyby10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gIH1cbiAgLmV1cm8tdGV4dDF7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgLmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICBpb24taW5wdXQge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIH1cblxuICAuaW5wdXRmaWVsZCB7XG4gICAgbWFyZ2luOiAyJSAwJSA0JSAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cblxuICAuaW4tdGV4dCB7XG4gICAgLS1jb2xvcjogIzVENUQ1RDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xuICAgIC0tcGFkZGluZy1zdGFydDogNyU7XG4gICAgLS1wYWRkaW5nLXRvcDogNSU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcbiAgfVxuICAuY3VzdG9tLWZpbGUtaW5wdXQge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgfVxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQ2hvb3NlXCI7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYnRuZGl2e1xuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMCUgYXV0bztcbiAgfVxuICBwe1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5idG4xe1xuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5cblxuLml0ZW0tcGlja2VyIHtcbiAgLy8gd2lkdGg6IDg1JTtcbiAgLy8gaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 6759:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width:100% ;\">\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Claim</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\n        <ion-label>New Claim</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"ClaimTracker\" class=\"sbtn\">\n        <ion-label>Claim Tracker</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"requestsType=='NewClaim'\">\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\n          <div class=\"euro-text\">{{Insurance}}</div>\n          <div class=\"imgdiv\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n          </div>\n        </div>\n        <div *ngIf=\"show==true\">\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngIf=\"Insurance == 'Life Busines'\">\n\n      <div class=\"label\" style=\"margin: 12px 0px 0px;\">Policy Number or Registration Number</div>\n      <div class=\"inputfield\">\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy Number or Registration Number\" class=\"in-text\"\n          [(ngModel)]=\"polnum\">\n        </ion-input>\n      </div>\n\n      <div class=\"label\">Client Surname</div>\n      <div class=\"inputfield\">\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Client Surname\" class=\"in-text\"\n          [(ngModel)]=\"csurname\">\n        </ion-input>\n      </div>\n\n      <div class=\"label\">Coth name</div>\n      <div class=\"inputfield\">\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Coth name\" class=\"in-text\" [(ngModel)]=\"cothname\">\n        </ion-input>\n      </div>\n\n      <div class=\"label\">DD Liabtype</div>\n      <div class=\"inputfield\">\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"DD Liabtype\" class=\"in-text\"\n          [(ngModel)]=\"dd_liabtype\"></ion-input>\n      </div>\n\n      <div class=\"label\">Text message claim</div>\n      <div class=\"inputfield\">\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Text message claim\" class=\"in-text\"\n          [(ngModel)]=\"txt_message_clm\"></ion-input>\n      </div>\n\n      <div class=\"label\">Claims Supporting Document</div>\n\n      <input class=\"custom-file-input\" type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\"\n        accept=\"image/x-png,image/gif,image/jpeg\">\n\n      <div style=\"height: 100px; width:100px; text-align: center;\" *ngIf=\"claimdoc.base64\"><img\n          style=\"height: 100px; width:100px\" src=\"{{claimdoc.base64}}\" alt=\"\"></div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"Insurance == 'General Business'\">\n\n   <div class=\"label\" style=\"margin: 12px 0px 0px;\">Policy Number or Registration Number</div>\n   <div class=\"inputfield\">\n     <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy Number or Registration Number\" class=\"in-text\"\n       [(ngModel)]=\"polnum\">\n     </ion-input>\n   </div>\n\n    <!-- Loss Date  -->\n    <div class=\"label\">Loss date</div>\n    <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\n      (click)=\"showPickerStartDate = !showPickerStartDate\">\n      <div style=\"display: flex; align-items:center\">\n        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ tourStartDate }}</ion-text>\n      </div>\n    </div>\n    <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"date\"\n      *ngIf=\"showPickerStartDate\" #datetime [value]=\"tourStartDate\" size=\"cover\"\n      (ionChange)=\"dateChanged(datetime.value,'start')\" showDefaultButtons=\"true\"\n      (ionCancel)=\"showPickerStartDate=false\"></ion-datetime>\n    <!-- Loss Date  -->\n\n     <!-- End Date  -->\n     <div class=\"label\">Notify date </div>\n     <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\n       (click)=\"showPickerEndDate = !showPickerEndDate\">\n       <div style=\"display: flex; align-items:center\">\n         <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ tourEndDate }}</ion-text>\n       </div>\n     </div>\n     <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"date\"\n       *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\"\n       (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\"\n       (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\n     <!-- End Date  -->\n     <div class=\"label\">Description</div>\n      <div class=\"inputfield\">\n          <ion-textarea rows=\"7\" type=\"text\" placeholder=\"Loss Description\" class=\"in-text\"\n            [(ngModel)]=\"desc\">\n          </ion-textarea>\n        </div>\n\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">Loss Type</div>\n\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openlistloss()\">\n            <div class=\"euro-text\">{{losstype}}</div>\n            <div class=\"imgdiv\">\n              <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n              <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showloss==true\">\n            <div *ngFor=\"let list of listarrayloss\" (click)=\"selectInsuranceloss(list)\">\n              <div class=\"euro-text1\">{{list.Insurance}}</div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">Reference Number</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Reference Number\" class=\"in-text\"\n            [(ngModel)]=\"refnum\">\n          </ion-input>\n        </div>\n    </div>\n  </div>\n\n    <div *ngIf=\"requestsType=='ClaimTracker'\">\n\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: -webkit-center;\">\n          <img style=\"    width: 26px;\n          margin-top: 24px;\" src=\"assets/tracking/01.svg\">\n\n        </ion-col>\n\n\n        <ion-col size=\"10\">\n          <ion-row>\n            <ion-col size=\"3\">\n              <img style=\"    height: 68px;\n              width: 50px;\n              border: 1px solid #A2BB06;\n              border-radius: 10px;\n              padding: 10px;\" src=\"assets/tracking/s1.svg\">\n            </ion-col>\n            <ion-col size=\"9\">\n\n              <p>Claims received and under verification</p>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row style=\"margin-top: 32px;\">\n            <ion-col size=\"3\">\n              <img style=\"    height: 68px;\n              width: 50px;\n              border: 1px solid #A2BB06;\n              border-radius: 10px;\n              padding: 10px;\" src=\"assets/tracking/s2.svg\">\n            </ion-col>\n            <ion-col size=\"9\">\n\n              <p>Claim verified and being processed</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-top: 32px;\">\n            <ion-col size=\"3\">\n              <img style=\"    height: 68px;\n              width: 50px;\n              border: 1px solid #A2BB06;\n              border-radius: 10px;\n              padding: 10px;\" src=\"assets/tracking/s3.svg\">\n            </ion-col>\n            <ion-col size=\"9\">\n\n              <p>EDV sent to you and awaiting submission</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin-top: 32px;\">\n            <ion-col size=\"3\">\n              <img style=\"    height: 68px;\n              width: 50px;\n              border: 1px solid #A2BB06;\n              border-radius: 10px;\n              padding: 10px;\" src=\"assets/tracking/s4.svg\">\n            </ion-col>\n            <ion-col size=\"9\">\n\n              <p>Final Approval</p>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row style=\"margin-top: 32px;\">\n            <ion-col size=\"3\">\n              <img style=\"    height: 68px;\n              width: 50px;\n              border: 1px solid #A2BB06;\n              border-radius: 10px;\n              padding: 10px;\" src=\"assets/tracking/s5.svg\">\n            </ion-col>\n            <ion-col size=\"9\">\n\n              <p>Payment in progress</p>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n\n\n\n\n    </div>\n\n\n</ion-content>\n<ion-footer *ngIf=\"requestsType=='NewClaim'\">\n  <div class=\"btndiv\">\n    <ion-button class=\"btn1\" (click)=\"reportclaim()\">Submit claim</ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_makeaclaim_makeaclaim_module_ts.js.map