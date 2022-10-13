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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page.html?ngResource */ 6759);
/* harmony import */ var _makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page.scss?ngResource */ 6005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);





let MakeaclaimPage = class MakeaclaimPage {
    constructor(api) {
        this.api = api;
        this.show = false;
        this.Insurance = 'Car Insurance';
        this.listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }];
        this.claimdoc = {
            file: "",
            base64: "",
        };
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
};
MakeaclaimPage.ctorParameters = () => [
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
MakeaclaimPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef },] }]
};
MakeaclaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 10% auto 0%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: transparent;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 25px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  --background: #85858a;\n  color: #fff;\n  margin-right: 5%;\n  height: 45px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.label {\n  font-size: 14px;\n  color: #000000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.custom-file-input {\n  color: transparent;\n  width: 100%;\n  margin-top: 2%;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Choose\";\n  display: inline-block;\n  background: #1A206D;\n  border-radius: 5px;\n  padding: 12px 8px;\n  outline: none;\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n  width: 100%;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\np {\n  color: #000;\n  font-size: 13px;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VhY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLDRCQUFBO0FBSUo7O0FBREU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUVBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBRUEsZUFBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBS0oiLCJmaWxlIjoibWFrZWFjbGFpbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDEwJSBhdXRvIDAlO1xyXG59XHJcbi5zZWdtZW50MSB7XHJcbiAgcGFkZGluZzogNXB4IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIC5zYnRuIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzg1ODU4QTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4NTg1OGE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGJveHtcclxuICAgIG1hcmdpbjogNCUgMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuXHJcbiAgfVxyXG4gIC5pbm5lcmRyb3Bib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi44cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgfVxyXG5cclxuICAuZXVyby10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICB9XHJcbiAgLmV1cm8tdGV4dDF7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0ZmllbGQge1xyXG4gICAgbWFyZ2luOiAyJSAwJSA0JSAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmluLXRleHQge1xyXG4gICAgLS1jb2xvcjogIzVENUQ1RDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDclO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJDaG9vc2VcIjtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ0bmRpdntcclxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5idG4xe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 6759:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Claim</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\r\n        <ion-label>New Claim</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"ClaimTracker\" class=\"sbtn\">\r\n        <ion-label>Claim Tracker</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div *ngIf=\"requestsType=='NewClaim'\">\r\n      <!-- <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n          <div class=\"euro-text\">{{Insurance}}</div>\r\n          <div class=\"imgdiv\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div> -->\r\n\r\n      <div class=\"label\">Policy Number or Registration Number</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy Number or Registration Number\" class=\"in-text\"\r\n          [(ngModel)]=\"polnum\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Client Surname</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Client Surname\" class=\"in-text\"\r\n          [(ngModel)]=\"csurname\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Coth name</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Coth name\" class=\"in-text\" [(ngModel)]=\"cothname\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">DD Liabtype</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"DD Liabtype\" class=\"in-text\"\r\n          [(ngModel)]=\"dd_liabtype\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Text message claim</div>\r\n      <div class=\"inputfield\">\r\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Text message claim\" class=\"in-text\"\r\n          [(ngModel)]=\"txt_message_clm\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"label\">Claims Supporting Document</div>\r\n\r\n      <input class=\"custom-file-input\" type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\"\r\n        accept=\"image/x-png,image/gif,image/jpeg\">\r\n\r\n      <div style=\"height: 100px; width:100px; text-align: center;\" *ngIf=\"claimdoc.base64\"><img\r\n          style=\"height: 100px; width:100px\" src=\"{{claimdoc.base64}}\" alt=\"\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"requestsType=='ClaimTracker'\">\r\n\r\n\r\n      <ion-row>\r\n        <ion-col size=\"2\" style=\"text-align: -webkit-center;\">\r\n          <img style=\"    width: 26px;\r\n          margin-top: 24px;\" src=\"assets/tracking/01.svg\">\r\n\r\n        </ion-col>\r\n\r\n\r\n        <ion-col size=\"10\">\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s1.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Claims received and under verification</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s2.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Claim verified and being processed</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s3.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>EDV sent to you and awaiting submission</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s4.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Final Approval</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          <ion-row style=\"margin-top: 32px;\">\r\n            <ion-col size=\"3\">\r\n              <img style=\"    height: 68px;\r\n              width: 50px;\r\n              border: 1px solid #A2BB06;\r\n              border-radius: 10px;\r\n              padding: 10px;\" src=\"assets/tracking/s5.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n\r\n              <p>Payment in progress</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"requestsType=='NewClaim'\">\r\n  <div class=\"btndiv\">\r\n    <ion-button class=\"btn1\" (click)=\"reportclaim()\">Submit claim</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_makeaclaim_makeaclaim_module_ts.js.map