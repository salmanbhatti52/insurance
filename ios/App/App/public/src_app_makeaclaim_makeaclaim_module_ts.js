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
/* harmony import */ var _Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page.html?ngResource */ 86759);
/* harmony import */ var _makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeaclaim.page.scss?ngResource */ 16005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);










let MakeaclaimPage = class MakeaclaimPage {
  constructor(api, router, alert) {
    this.api = api;
    this.router = router;
    this.alert = alert;
    this.show = false;
    this.Insurance = 'Please Select';
    this.listarray = [{
      Insurance: 'General Business'
    }, {
      Insurance: 'Life Busines'
    }];
    this.claimdoc = {
      file: '',
      base64: ''
    };
    this.showloss = false;
    this.losstype = 'Please Select';
    this.listarrayloss = [{
      Insurance: 'Own Damage',
      value: 1
    }, {
      Insurance: 'Vandalization',
      value: 2
    }, {
      Insurance: 'Negligent insured',
      value: 3
    }, {
      Insurance: 'Own Damage and Negligent insured',
      value: 4
    }, {
      Insurance: 'Negligent third party',
      value: 5
    }, {
      Insurance: 'Fire /Theft Total Loss',
      value: 6
    }, {
      Insurance: 'Fire Partial Loss',
      value: 7
    }, {
      Insurance: 'Property Third Party Damage only',
      value: 8
    }];
    this.showPickerStartDate = false;
    this.showPickerEndDate = false;
    this.tourEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'MM/dd/yyyy');
    this.refnum = '';
    this.name = '';
    this.accidentplace = '';
    this.vechregnum = '';
    this.weathercondition = '';
    this.accidentdescribe = '';
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.csurname = localStorage.getItem('lname');
    this.cothname = localStorage.getItem('fname');
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'NewClaim') {
        this.mySegment.nativeElement.children[0].click();
      }

      if (this.requestsType === 'ClaimTracker') {
        this.mySegment.nativeElement.children[1].click();
      }
    } else {
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
    } else {
      this.show = true;
    }
  }

  openlistloss() {
    if (this.showloss == true) {
      this.showloss = false;
    } else {
      this.showloss = true;
    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance;
    this.show = false;
  }

  selectFile(event, type) {
    console.log('type --- ', type);
    console.log('linceise --- ', event.target.files[0]);
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
    var _this = this;

    if (this.Insurance == 'Life Busines') {
      if (this.claimdoc.file == '') {
        this.api.presenttoast('Choose Document');
      } else {
        var data = new FormData();
        data.append('polnum', this.polnum);
        data.append('csurname', this.csurname);
        data.append('cothname', this.cothname);
        data.append('dd_liabtype', this.dd_liabtype);
        data.append('txt_message_clm', this.txt_message_clm);
        data.append('claimdoc', this.claimdoc.file);
        this.api.showLoader();
        this.api.postdata('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=200', data, '39109f7df56e1CORNERStone9e685066bb852').subscribe( /*#__PURE__*/function () {
          var _ref = (0,_Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            console.log('response claim', res);

            _this.api.hideLoader(); // if (res.result.status == 0) {
            //   this.api.presenttoast(res.result.message)
            // } else {
            //   this.api.presenttoast('Please try again');
            // }


            if (res.result) {
              if (res.result.status == 1) {
                _this.api.presenttoast(res.result.message);
              } else {
                const alert = yield _this.alert.create({
                  header: res.result.message,
                  cssClass: 'fgprintcls',
                  buttons: [{
                    text: 'OK',
                    role: 'confirm',
                    handler: () => {}
                  }]
                });
                yield alert.present(); // this.api.presenttoast(res.result.message);
              }
            } else {
              _this.api.presenttoast('Policy record not found');
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), err => {
          console.log('err======', err);
          this.api.hideLoader();
        });
      }
    } else {
      this.api.showLoader();
      const myData = {
        sid: 'ECHANNEL2',
        token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
      };
      var mydataAPI = {
        "name": this.name,
        "vehicleregno": this.vechregnum,
        "accidentdate": this.tourStartDate,
        "accidentplace": this.accidentplace,
        "accidentdescribe": this.accidentdescribe,
        "weathercondition": this.weathercondition,
        "losstypecode": this.losstype
      }; // var data = new FormData();
      // data.append('name', "najam");
      // data.append('vehicleregno', "MN000");
      // data.append('accidentdate', "2023-11-22");
      // data.append('accidentplace', "nigeria");
      // data.append('accidentdescribe', "dsadasdasd");
      // data.append('weathercondition', "dasdasdsad");
      // data.append('losstypecode', '1');

      this.api.gibsapi(myData).subscribe(res => {
        console.log('token-----', res);
        const token = res.accessToken;
        this.api.newclaim('https://app.cornerstone.com.ng/claimapi/api/ProcessClaim/NewClaim', mydataAPI).subscribe(res => {
          this.api.hideLoader(); // this.api.presenttoast('Clain Number ' + res.claimNo);

          this.alertboxshow(res.Messageresponse);
          console.log('gibs product detail', res); // localStorage.setItem('gibsproduct', JSON.stringify(res))
          // this.router.navigate(['gibsplans']);
        }, err => {
          console.log(err);
          this.api.hideLoader();
          this.alertboxshow(err.error.Message);
        });
      }, err => {
        this.api.presenttoast('Invalid Policy Number');
        console.log(err);
        this.api.hideLoader();
      });
    }
  }

  setOpen(isOpen) {
    if (isOpen == true) {
      this.api.showLoader();
      const myData = {
        sid: 'ECHANNEL2',
        token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
      };
      this.api.gibsapi(myData).subscribe(res => {
        console.log(res);
        this.api.trackclaim('https://app.cornerstone.com.ng/claimapi/api/ProcessClaim/CustomerStatus?regno=' + this.vechregnum).subscribe(response => {
          this.api.hideLoader();
          console.log(response);
          this.isModalOpen = isOpen;

          if (response.Message == "Success") {
            this.claim = response.Messageresponse.toLowerCase();
            console.log('dasdsadsadd', this.claim); // this.alertboxshow('status: ' + this.claim);
          } else {
            this.api.hideLoader();
            this.alertboxshow(response.Messageresponse);
          }
        }, err => {
          console.log(err);
          this.api.hideLoader();
          this.alertboxshow(err.error.Messageresponse);
        });
      }, err => {
        console.log(err);
        this.api.hideLoader();
        this.alertboxshow(err.Messageresponse);
      });
    } else {
      this.isModalOpen = false;
    }
  } // dateChanged(value, type) {
  //   if (type == 'start') {
  //     // this.tourStartDate = value;
  //     this.tourStartDate = moment(value).format('L');
  //     console.log('this.tourStartDate ----', this.tourStartDate);
  //     this.showPickerStartDate = false;
  //   } else {
  //     this.tourEndDate = value;
  //     console.log('this.tourEndDate ----', this.tourEndDate);
  //     this.showPickerEndDate = false;
  //   }
  // }


  onDateChange(val) {
    var dateval = new Date(val);
    console.log('Selected Date:', dateval);
    this.tourStartDate = moment__WEBPACK_IMPORTED_MODULE_4__(dateval).format('L');
  }

  selectInsuranceloss(list) {
    console.log(list);
    this.Insurancename = list.Insurance;
    this.losstype = list.value;
    this.showloss = false;
  }

  alertboxshow(message) {
    var _this2 = this;

    return (0,_Users_salmanahmad_Desktop_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        header: message,
        cssClass: 'fgprintcls',
        buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

};

MakeaclaimPage.ctorParameters = () => [{
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}];

MakeaclaimPage.propDecorators = {
  mySegment: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['mySegment', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
    }]
  }]
};
MakeaclaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-makeaclaim',
  template: _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MakeaclaimPage);


/***/ }),

/***/ 16005:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 0% auto 0%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: transparent;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 25px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  --background: #85858a;\n  color: #fff;\n  margin-right: 5%;\n  height: 45px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.label {\n  font-size: 14px;\n  color: #000000;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.custom-file-input {\n  color: transparent;\n  width: 100%;\n  margin-top: 2%;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Choose\";\n  display: inline-block;\n  background: #1A206D;\n  border-radius: 5px;\n  padding: 12px 8px;\n  outline: none;\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n  width: 100%;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\np {\n  color: #5D5D5D;\n  font-size: 13px;\n  opacity: 0.6;\n}\n\n.iconcls {\n  font-size: 20px;\n  color: #A2BB06;\n}\n\n.htext {\n  margin-left: 10px;\n  color: #1A206D;\n  font-family: Bliss Pro;\n  font-size: 14px;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.active {\n  color: #A2BB06;\n  font-weight: 700;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VhY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLDRCQUFBO0FBSUo7O0FBREU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUVBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQU9KOztBQUhBO0VBR0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdGIiwiZmlsZSI6Im1ha2VhY2xhaW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvIDAlO1xufVxuLnNlZ21lbnQxIHtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6MTAwJTtcbiAgLnNidG4ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIC0tbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogIzg1ODU4QTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjODU4NThhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5kcm9wYm94e1xuICAgIG1hcmdpbjogNCUgMCU7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcblxuICB9XG4gIC5pbm5lcmRyb3Bib3h7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIuOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgfVxuXG4gIC5ldXJvLXRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG5cbiAgfVxuICAuZXVyby10ZXh0MXtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuICAubGFiZWx7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIGlvbi1pbnB1dCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgfVxuXG4gIC5pbnB1dGZpZWxkIHtcbiAgICBtYXJnaW46IDIlIDAlIDQlIDAlO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxuXG4gIC5pbi10ZXh0IHtcbiAgICAtLWNvbG9yOiAjNUQ1RDVEO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbiAgICAtLXBhZGRpbmctdG9wOiA1JTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xuICB9XG4gIC5jdXN0b20tZmlsZS1pbnB1dCB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICB9XG4gIC5jdXN0b20tZmlsZS1pbnB1dDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJDaG9vc2VcIjtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5idG5kaXZ7XG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwJSBhdXRvO1xuICB9XG4gIHB7XG4gICAgY29sb3I6ICM1RDVENUQ7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIC5pY29uY2xze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0EyQkIwNjtcbiAgfVxuICAuaHRleHR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmJ0bjF7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cblxuXG4uaXRlbS1waWNrZXIge1xuICAvLyB3aWR0aDogODUlO1xuICAvLyBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDBweCAxNnB4IDBweDtcblxufVxuLmFjdGl2ZXtcbiAgY29sb3I6ICNBMkJCMDY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 86759:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width:100% ;\">\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Claim</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\n        <ion-label>New Claim</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"ClaimTracker\" class=\"sbtn\">\n        <ion-label>Claim Tracker</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"requestsType=='NewClaim'\">\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\n          <div class=\"euro-text\">{{Insurance}}</div>\n          <div class=\"imgdiv\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n          </div>\n        </div>\n        <div *ngIf=\"show==true\">\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngIf=\"Insurance == 'Life Busines'\">\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">Policy Number</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy Number\" class=\"in-text\" [(ngModel)]=\"polnum\">\n          </ion-input>\n        </div>\n\n        <div class=\"label\">Client Surname</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Client Surname\" class=\"in-text\"\n            [(ngModel)]=\"csurname\">\n          </ion-input>\n        </div>\n\n        <div class=\"label\">Client First name</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Client First name\" class=\"in-text\"\n            [(ngModel)]=\"cothname\">\n          </ion-input>\n        </div>\n\n        <div class=\"label\">Policy type</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Policy type\" class=\"in-text\"\n            [(ngModel)]=\"dd_liabtype\"></ion-input>\n        </div>\n\n        <div class=\"label\">Claim details</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Claim details\" class=\"in-text\"\n            [(ngModel)]=\"txt_message_clm\"></ion-input>\n        </div>\n\n        <div class=\"label\">Claims Supporting Document</div>\n\n        <input class=\"custom-file-input\" type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\"\n          accept=\"image/x-png,image/gif,image/jpeg\">\n\n        <div style=\"height: 100px; width:100px; text-align: center;\" *ngIf=\"claimdoc.base64\"><img\n            style=\"height: 100px; width:100px\" src=\"{{claimdoc.base64}}\" alt=\"\"></div>\n      </div>\n\n      <div *ngIf=\"Insurance == 'General Business'\">\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">name</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"name\" class=\"in-text\" [(ngModel)]=\"name\">\n          </ion-input>\n        </div>\n\n        <!-- Loss Date  -->\n        <div class=\"label\">Accident Date</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" value=\"{{ date | date: 'MM/dd/yyyy' }}\" id=\"date\" class=\"in-text\"\n            [(ngModel)]=\"tourStartDate\">\n          </ion-input>\n        </div>\n        <ion-popover trigger=\"date\" size=\"cover\">\n          <ng-template>\n            <ion-datetime [showDefaultButtons]=\"true\" #popoverDatetime presentation=\"date\" value=\"{{date}}\"\n              (ionChange)=\"onDateChange(popoverDatetime.value)\">\n            </ion-datetime>\n          </ng-template>\n        </ion-popover>\n        <!-- Loss Date  -->\n\n        <!-- End Date  -->\n        <!-- <div class=\"label\">Notify date </div>\n        <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\n          (click)=\"showPickerEndDate = !showPickerEndDate\">\n          <div style=\"display: flex; align-items:center\">\n            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ tourEndDate }}</ion-text>\n          </div>\n        </div>\n        <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"date\"\n          *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\"\n          (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\"\n          (ionCancel)=\"showPickerEndDate=false\"></ion-datetime> -->\n        <!-- End Date  -->\n        <div class=\"label\">Accident Describe</div>\n        <div class=\"inputfield\">\n          <ion-textarea rows=\"4\" type=\"text\" placeholder=\"Loss Description\" class=\"in-text\"\n            [(ngModel)]=\"accidentdescribe\">\n          </ion-textarea>\n        </div>\n\n        <div class=\"label\">Accident Place</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"accidentplace\" class=\"in-text\"\n            [(ngModel)]=\"accidentplace\">\n          </ion-input>\n        </div>\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">Vechile Registration Number</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Reference Number\" class=\"in-text\"\n            [(ngModel)]=\"vechregnum\">\n          </ion-input>\n        </div>\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">Weather Condition</div>\n        <div class=\"inputfield\">\n          <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"eathercondition\" class=\"in-text\"\n            [(ngModel)]=\"weathercondition\">\n          </ion-input>\n        </div>\n\n        <div class=\"label\" style=\"margin: 12px 0px 0px;\">Loss Type</div>\n\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openlistloss()\">\n            <div class=\"euro-text\">{{Insurancename}}</div>\n            <div class=\"imgdiv\">\n              <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\n              <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showloss==true\">\n            <div *ngFor=\"let list of listarrayloss\" (click)=\"selectInsuranceloss(list)\">\n              <div class=\"euro-text1\">{{list.Insurance}}</div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"requestsType=='ClaimTracker'\">\n\n      <div class=\"label\" style=\"margin: 12px 0px 0px;\">Enter Vechile Registration Number</div>\n      <div class=\"inputfield\">\n        <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Reference Number\" class=\"in-text\"\n          [(ngModel)]=\"vechregnum\">\n        </ion-input>\n      </div>\n\n    </div>\n\n    <ion-modal [isOpen]=\"isModalOpen\">\n      <ng-template>\n        <ion-content class=\"ion-padding\">\n          <!-- <div class=\"container\" style=\"transform: translate(0%, 50%)\">\n          <div style=\"display: flex;align-items: center;\">\n            <div>\n              <ion-icon name=\"checkmark-circle\" class=\"iconcls\"></ion-icon>\n            </div>\n            <div class=\"htext\">{{claim}}</div>\n          </div>\n\n          <div style=\"margin-top: 5%;\">\n            <ion-button class=\"btn1\" (click)=\"setOpen(false)\">Close</ion-button>\n          </div>\n        </div> -->\n\n          <ion-row>\n            <ion-col size=\"2\" style=\"text-align: -webkit-center;\">\n              <img style=\"width: 26px;\n              margin-top: 24px;\" src=\"assets/tracking/01.svg\" *ngIf=\"claim==''\">\n              <img style=\"width: 26px;\n                margin-top: 24px;\" src=\"assets/tracking/02.svg\"\n                *ngIf=\"claim=='claims received and under verification'\">\n              <img style=\"width: 26px;\n                margin-top: 24px;\" src=\"assets/tracking/03.svg\" *ngIf=\"claim=='claims verified and being processed'\">\n              <img style=\"width: 26px;\n                 margin-top: 24px;\" src=\"assets/tracking/04.svg\"\n                *ngIf=\"claim=='edv sent to you and awaiting submission'\">\n              <img style=\"    width: 26px;\n                 margin-top: 24px;\" src=\"assets/tracking/05.svg\" *ngIf=\"claim=='final approval'\">\n              <img style=\"    width: 26px;\n                 margin-top: 24px;\" src=\"assets/tracking/06.svg\" *ngIf=\"claim=='payment in progress'\">\n\n            </ion-col>\n            <ion-col size=\"10\">\n              <ion-row>\n                <ion-col size=\"3\">\n                  <img style=\"    height: 68px;\n                    width: 50px;\n                    border: 1px solid #A2BB06;\n                    border-radius: 10px;\n                    padding: 10px;\" src=\"assets/tracking/s1.svg\">\n                </ion-col>\n                <ion-col size=\"9\">\n\n                  <p [class.active]=\"claim=='claims received and under verification'\">Claims received and under\n                    verification</p>\n                </ion-col>\n              </ion-row>\n\n\n              <ion-row style=\"margin-top: 32px;\">\n                <ion-col size=\"3\">\n                  <img style=\"    height: 68px;\n                    width: 50px;\n                    border: 1px solid #A2BB06;\n                    border-radius: 10px;\n                    padding: 10px;\" src=\"assets/tracking/s2.svg\">\n                </ion-col>\n                <ion-col size=\"9\">\n\n                  <p [class.active]=\"claim=='claims verified and being processed'\">Claim verified and being processed\n                  </p>\n                </ion-col>\n              </ion-row>\n\n              <ion-row style=\"margin-top: 32px;\">\n                <ion-col size=\"3\">\n                  <img style=\"    height: 68px;\n                    width: 50px;\n                    border: 1px solid #A2BB06;\n                    border-radius: 10px;\n                    padding: 10px;\" src=\"assets/tracking/s3.svg\">\n                </ion-col>\n                <ion-col size=\"9\">\n\n                  <p [class.active]=\"claim=='edv sent to you and awaiting submission'\">EDV sent to you and awaiting\n                    submission</p>\n                </ion-col>\n              </ion-row>\n\n              <ion-row style=\"margin-top: 32px;\">\n                <ion-col size=\"3\">\n                  <img style=\"    height: 68px;\n                    width: 50px;\n                    border: 1px solid #A2BB06;\n                    border-radius: 10px;\n                    padding: 10px;\" src=\"assets/tracking/s4.svg\">\n                </ion-col>\n                <ion-col size=\"9\">\n\n                  <p [class.active]=\"claim=='final approval'\">Final Approval</p>\n                </ion-col>\n              </ion-row>\n\n\n              <ion-row style=\"margin-top: 32px;\">\n                <ion-col size=\"3\">\n                  <img style=\"    height: 68px;\n                    width: 50px;\n                    border: 1px solid #A2BB06;\n                    border-radius: 10px;\n                    padding: 10px;\" src=\"assets/tracking/s5.svg\">\n                </ion-col>\n                <ion-col size=\"9\">\n\n                  <p [class.active]=\"claim=='payment in progress'\">Payment in progress</p>\n                </ion-col>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n\n          <div style=\"margin-top: 5%;\">\n            <ion-button class=\"btn1\" (click)=\"setOpen(false)\">Close</ion-button>\n          </div>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </div>\n\n\n\n\n\n</ion-content>\n<ion-footer>\n  <div class=\"btndiv\" *ngIf=\"requestsType=='NewClaim'\">\n    <ion-button class=\"btn1\" (click)=\"reportclaim()\">Submit claim</ion-button>\n  </div>\n  <div class=\"btndiv\" *ngIf=\"requestsType=='ClaimTracker'\">\n    <ion-button class=\"btn1\" (click)=\"setOpen(true)\">Track claim</ion-button>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_makeaclaim_makeaclaim_module_ts.js.map