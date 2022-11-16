"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_quote1_quote1_module_ts"],{

/***/ 40719:
/*!*************************************************!*\
  !*** ./src/app/quote1/quote1-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quote1PageRoutingModule": () => (/* binding */ Quote1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _quote1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote1.page */ 51000);




const routes = [
    {
        path: '',
        component: _quote1_page__WEBPACK_IMPORTED_MODULE_0__.Quote1Page
    }
];
let Quote1PageRoutingModule = class Quote1PageRoutingModule {
};
Quote1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Quote1PageRoutingModule);



/***/ }),

/***/ 65035:
/*!*****************************************!*\
  !*** ./src/app/quote1/quote1.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quote1PageModule": () => (/* binding */ Quote1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _quote1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote1-routing.module */ 40719);
/* harmony import */ var _quote1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote1.page */ 51000);







let Quote1PageModule = class Quote1PageModule {
};
Quote1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _quote1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Quote1PageRoutingModule
        ],
        declarations: [_quote1_page__WEBPACK_IMPORTED_MODULE_1__.Quote1Page]
    })
], Quote1PageModule);



/***/ }),

/***/ 51000:
/*!***************************************!*\
  !*** ./src/app/quote1/quote1.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quote1Page": () => (/* binding */ Quote1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _quote1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote1.page.html?ngResource */ 10076);
/* harmony import */ var _quote1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote1.page.scss?ngResource */ 78009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







let Quote1Page = class Quote1Page {
    constructor(router, api, location) {
        this.router = router;
        this.api = api;
        this.location = location;
        this.fName = '';
        this.lName = '';
        this.userEmail = '';
        this.mobNumber = '';
        this.compName = '';
        this.valOfVehicle = '';
        this.show = false;
        this.showAutoPlan = false;
        this.showMaker = false;
        this.showPolicyholder = false;
        this.showVehicleModel = false;
        this.showVehicleUsage = false;
        this.showTPdagmage = false;
        this.showPayFreq = false;
        this.showFloodExt = false;
        this.showExcessBuyBack = false;
        this.showStrikeRiot = false;
        this.showPassLiabili = false;
        this.showEcVehicleClass = false;
        this.showVehicleTracking = false;
        this.eCvehicleClassVal = 'Please Select';
        this.paymentFrequencyVal = 'Please Select';
        this.autoPlanVal = 'Please Select';
        this.tPdamageVal = 'Please Select';
        this.vehicleMakeVal = 'Please Select';
        this.policyhldrVal = 'Please Select';
        this.vehicleModelVal = '';
        this.vehicleUsageVal = 'Personal';
        this.floodExtVal = 'Please Select';
        this.excessBuyBackVal = 'Please Select';
        this.strikeRiotVal = 'Please Select';
        this.passLiabilityVal = 'Please Select';
        this.vehicleTrackingVal = 'Please Select';
        this.vehicleTrackingValues = [{ vehicleTrack: 'Yes' }, { vehicleTrack: 'No' }];
        this.autoPlanList = [{ autoPlan: 'Auto Classic(1.75% Of vehicle value)' }, { autoPlan: 'Auto Plus(3% Of vehicle value)' }, { autoPlan: 'Uber Classic(2.5% Of vehicle value)' }];
        this.policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType: 'Corporate' }];
        this.vehicleUsage = [{ usage: 'Personal' }, { usage: 'Personal' }];
        this.tPdamageValues = [{ tpDamage: 'Yes' }, { tpDamage: 'No' }];
        this.paymentFrequencies = [{ pfreq: 'Once' }, { pfreq: 'Twice' }, { pfreq: 'Thrice' }];
        this.floodExtValues = [{ floodExt: 'Yes' }, { floodExt: 'No' }];
        this.ExcessBuyBack = [{ excessByBack: 'Yes' }, { excessByBack: 'No' }];
        this.StrikeRiotCivilCommotion = [{ strikeRiot: 'Yes' }, { strikeRiot: 'No' }];
        this.passengerLiability = [{ passLiab: 'Yes' }, { passLiab: 'No' }];
    }
    ngOnInit() {
        this.getCarMakeCompanies();
        this.getEcCarClasses();
    }
    ionViewWillEnter() {
        this.autoPlanVal = 'Select Auto Plan';
        this.vehicleMakeVal = 'Manufacturer';
        this.policyhldrVal = 'Please Select';
        this.vehicleModelVal = '';
        this.fName = '';
        this.lName = '';
        this.userEmail = '';
        this.mobNumber = '';
        this.compName = '';
        this.valOfVehicle = '';
        this.vehicleUsageVal = 'Personal';
        this.paymentFrequencyVal = 'Please Select';
        this.tPdamageVal = 'Please Select';
        this.vehicleTrackingVal = 'Please Select';
    }
    getCarMakeCompanies() {
        let myData = "myData={\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"get_car_companies\"}";
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.values != "") {
                this.vehicleMake = res.values;
                console.log(this.vehicleMake);
            }
        }, (err) => {
            console.log(err);
        });
    }
    getVehicleModels() {
        let myData = "myData={\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"get_car_models\",\"manufacturer\":\"" + this.vehicleMakeVal + "\"}";
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.values != "") {
                this.vehicleModel = res.values;
                console.log(this.vehicleModel);
            }
        }, (err) => {
            console.log(err);
        });
    }
    getEcCarClasses() {
        let myData = "myData={\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"get_car_classes\",\"product_class\":\"vehicle_class_enhanced_comprehensive\"}";
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.values != "") {
                this.eCcarClasses = res.values;
                console.log('Enhanced Comprehensive car classes==', this.eCcarClasses);
            }
        }, (err) => {
            console.log(err);
        });
    }
    openVehicleTracking() {
        if (this.showVehicleTracking == true) {
            this.showVehicleTracking = false;
        }
        else {
            this.showVehicleTracking = true;
        }
    }
    openEcVehicleClass() {
        if (this.showEcVehicleClass == true) {
            this.showEcVehicleClass = false;
        }
        else {
            this.showEcVehicleClass = true;
        }
    }
    openPassenger() {
        if (this.showPassLiabili == true) {
            this.showPassLiabili = false;
        }
        else {
            this.showPassLiabili = true;
        }
    }
    openPaymentFrequency() {
        if (this.showPayFreq == true) {
            this.showPayFreq = false;
        }
        else {
            this.showPayFreq = true;
        }
    }
    openExcessBuyBack() {
        if (this.showExcessBuyBack == true) {
            this.showExcessBuyBack = false;
        }
        else {
            this.showExcessBuyBack = true;
        }
    }
    openStrikeRiot() {
        if (this.showStrikeRiot == true) {
            this.showStrikeRiot = false;
        }
        else {
            this.showStrikeRiot = true;
        }
    }
    openFloodExtension() {
        if (this.showFloodExt == true) {
            this.showFloodExt = false;
        }
        else {
            this.showFloodExt = true;
        }
    }
    openAutoPlan() {
        if (this.showAutoPlan == true) {
            this.showAutoPlan = false;
        }
        else {
            this.showAutoPlan = true;
        }
    }
    openTPDamageValues() {
        if (this.showTPdagmage == true) {
            this.showTPdagmage = false;
        }
        else {
            this.showTPdagmage = true;
        }
    }
    openVhclMakeList() {
        if (this.showMaker == true) {
            this.showMaker = false;
        }
        else {
            this.showMaker = true;
        }
    }
    openPolicyhldrList() {
        if (this.showPolicyholder == true) {
            this.showPolicyholder = false;
        }
        else {
            this.showPolicyholder = true;
        }
    }
    opnenVehicleModelList() {
        if (this.showVehicleModel == true) {
            this.showVehicleModel = false;
        }
        else {
            this.showVehicleModel = true;
        }
    }
    opnenVehicleUsageList() {
        if (this.showVehicleUsage == true) {
            this.showVehicleUsage = false;
        }
        else {
            this.showVehicleUsage = true;
        }
    }
    selectVehicleTracking(list) {
        this.vehicleTrackingVal = list.vehicleTrack;
        this.showVehicleTracking = false;
    }
    selectEcCarClass(list) {
        this.eCvehicleClassVal = list;
        this.showEcVehicleClass = false;
    }
    selectPassLiab(list) {
        this.passLiabilityVal = list.passLiab;
        this.showPassLiabili = false;
    }
    selectFloodExt(list) {
        this.floodExtVal = list.floodExt;
        this.showFloodExt = false;
    }
    selectExcessBuyBack(list) {
        this.excessBuyBackVal = list.excessByBack;
        this.showExcessBuyBack = false;
    }
    selectStrikeRiot(list) {
        this.strikeRiotVal = list.strikeRiot;
        this.showStrikeRiot = false;
    }
    selectPayFreq(list) {
        this.paymentFrequencyVal = list.pfreq;
        this.showPayFreq = false;
    }
    selectTpDamage(list) {
        this.tPdamageVal = list.tpDamage;
        this.showTPdagmage = false;
    }
    selectAutoPlan(list) {
        this.autoPlanVal = list.autoPlan;
        this.showAutoPlan = false;
    }
    selectVehicleMaker(list) {
        this.vehicleMakeVal = list.manufacturer;
        this.vehicleModelVal = '';
        this.showMaker = false;
        this.getVehicleModels();
    }
    selectPolicyholder(list) {
        this.policyhldrVal = list.plcyhldrType;
        this.showPolicyholder = false;
    }
    selectVehicleModel(list) {
        this.vehicleModelVal = list.model;
        this.showVehicleModel = false;
    }
    selectVehicleUsage(list) {
        this.vehicleUsageVal = list.usage;
        this.showVehicleUsage = false;
    }
    goback() {
        this.location.back();
    }
    continue() {
        if (this.autoPlanVal == 'Select Auto Plan') {
            this.api.presenttoast('Auto Plan required');
        }
        else if (this.eCvehicleClassVal == 'Please Select') {
            this.api.presenttoast('Vehicle Class required');
        }
        else if (this.vehicleMakeVal == 'Manufacturer') {
            this.api.presenttoast('Manufacturer required');
        }
        else if (this.vehicleModelVal == '') {
            this.api.presenttoast('Model required');
        }
        else if (this.policyhldrVal == 'Please Select') {
            this.api.presenttoast('Policyholder Type required');
        }
        else if (this.policyhldrVal == 'Private') {
            console.log('private');
            if (this.policyhldrVal == 'Private') {
                if (this.fName == '') {
                    this.api.presenttoast('First Name required');
                }
                else if (this.lName == '') {
                    this.api.presenttoast('Last Name required');
                }
                else if (this.userEmail == '') {
                    console.log('not private');
                    this.api.presenttoast('Email Address required');
                }
                else if (this.mobNumber == '') {
                    this.api.presenttoast('Phone Number required');
                }
                else if (this.valOfVehicle == '') {
                    this.api.presenttoast('Value of vehicle required');
                }
                else if (this.tPdamageVal == 'Please Select') {
                    this.api.presenttoast('Increase in third party property damage required');
                }
                else if (this.paymentFrequencyVal == 'Please Select') {
                    this.api.presenttoast('PaymentFrequency required');
                }
                else {
                    this.callingapi();
                }
            }
        }
        else if (this.policyhldrVal == 'Corporate') {
            if (this.compName == '') {
                this.api.presenttoast('company Name required');
            }
            else if (this.userEmail == '') {
                console.log('not private');
                this.api.presenttoast('Email Address required');
            }
            else if (this.mobNumber == '') {
                this.api.presenttoast('Phone Number required');
            }
            else if (this.valOfVehicle == '') {
                this.api.presenttoast('Value of vehicle required');
            }
            else if (this.tPdamageVal == 'Please Select') {
                this.api.presenttoast('Increase in third party property damage required');
            }
            else if (this.paymentFrequencyVal == 'Please Select') {
                this.api.presenttoast('PaymentFrequency required');
            }
            else {
                this.callingapi();
            }
        }
    }
    callingapi() {
        let myData = "myData={\"product_id\":\"" + localStorage.getItem('subProId') + "\",\"vehicle_class\":\"" + this.eCvehicleClassVal + "\",\"vehicle_manufacturer\":\"" + this.vehicleMakeVal + "\", \"vehicle_model\":\"" + this.vehicleModelVal + "\", \"first_name\":\"" + this.fName + "\", \"last_name\":\"" + this.lName + "\",\r\n\"policyholder_type\":\"" + this.policyhldrVal + "\", \"mobile\":\"" + this.mobNumber + "\", \"company_name\": \"" + this.compName + "\", \"email\":\"" + this.userEmail + "\", \"value_of_vehicle\":\"" + this.valOfVehicle + "\", \"flood_extension\":\"" + this.floodExtVal + "\", \"excess_buy_back\":\"" + this.excessBuyBackVal + "\", \"vehicle_tracking\":\"" + this.vehicleTrackingVal + "\", \"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"save_product_quote\"}";
        this.api.insertData(myData).subscribe((data) => {
            console.log(data);
            if (data.message == 'success') {
                this.api.presenttoast(data.info.message);
                // localStorage.setItem('product_id',data.info.product_id);
                // localStorage.setItem('quote_id',data.info.quote_id);
                // console.log(localStorage.getItem('product_id'));
                // console.log(localStorage.getItem('quote_id'));
                this.router.navigate(['/car-insurance-details']);
            }
            else {
                this.api.presenttoast(data.message);
            }
        }, (err) => {
            console.log(err);
        });
    }
};
Quote1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
Quote1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-quote1',
        template: _quote1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quote1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quote1Page);



/***/ }),

/***/ 78009:
/*!****************************************************!*\
  !*** ./src/app/quote1/quote1.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color:#5D5D5D;\n  --placeholder-color:#5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight:400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius:12px ;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLDRCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNGLGdCQUFBO0VBQ0EsNkJBQUE7QUFTRjs7QUFMQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVFGIiwiZmlsZSI6InF1b3RlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaHRleHR7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGV4LWNsc3tcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4ubGFiZWx7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZHJvcGJveHtcbiAgbWFyZ2luOiA0JSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTMuNDFweCAxNXB4O1xuXG59XG4uaW5uZXJkcm9wYm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cbi5ldXJvLXRleHR7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cbi5ldXJvLXRleHQxe1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG4uaW5wdXRmaWVsZHtcbiAgbWFyZ2luOiA0JSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5pbi10ZXh0e1xuICAtLWNvbG9yOiM1RDVENUQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbiAgICAtLXBhZGRpbmctdG9wOiA1JTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NDAwO1xuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XG59XG5cbi5idG57XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 10076:
/*!****************************************************!*\
  !*** ./src/app/quote1/quote1.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Make a Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"htext\">Your Details</div>\n    <div class=\"flex-cls\">\n      <!-- <div>\n        <img src=\"assets/images/slider/1.svg\">\n      </div> -->\n      <div style=\"width:80%;margin:0% auto;\">\n\n\n        <div class=\"label\">Auto Plan of Choice <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openAutoPlan()\">\n            <div class=\"euro-text\" style=\"width: 100%;\">{{autoPlanVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showAutoPlan==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showAutoPlan==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showAutoPlan==true\" style=\"height:90px ; overflow: scroll;\">\n            <div *ngFor=\"let list of autoPlanList\" (click)=\"selectAutoPlan(list)\">\n              <div class=\"euro-text1\">{{list.autoPlan}}</div>\n            </div>\n\n          </div>\n\n        </div>\n        <!----------- second form ---------------------------->\n          <div class=\"label\">Vehicle Class <span style=\"color:#A8B400;\">*</span></div>\n          <div class=\"dropbox\">\n            <div class=\"innerdropbox\" (click)=\"openEcVehicleClass()\">\n              <div class=\"euro-text\" style=\"width: 100%;\">{{eCvehicleClassVal}}</div>\n              <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n                <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showEcVehicleClass==false\">\n                <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showEcVehicleClass==true\">\n              </div>\n            </div>\n            <div *ngIf=\"showEcVehicleClass==true\" style=\"height:90px ; overflow: scroll;\">\n              <div *ngFor=\"let list of eCcarClasses\" (click)=\"selectEcCarClass(list)\">\n                <div class=\"euro-text1\">{{list}}</div>\n              </div>\n  \n            </div>\n  \n          </div>\n          <!----------- second form ---------------------------->\n        <div class=\"label\">Vehicle Make <span style=\"color:#A8B400;\">*</span></div>\n        <ion-grid style=\"padding-left: 0px; padding-right: 0px;\">\n          <ion-row>\n            <ion-col size=\"6\" style=\"padding-left: 0px;\">\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                  <div class=\"euro-text\" style=\"width: 100%;\">{{vehicleMakeVal}}</div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 12%;\">\n                    <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\">\n                    <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\">\n                  </div>\n                </div>\n                <div *ngIf=\"showMaker==true\" style=\"height:100px ; overflow: scroll;\">\n                  <div *ngFor=\"let list of vehicleMake\" (click)=\"selectVehicleMaker(list)\">\n                    <div class=\"euro-text1\">{{list.manufacturer}}</div>\n                  </div>\n      \n                </div>\n      \n              </div>\n            </ion-col>\n            <ion-col size=\"6\" style=\"padding-right: 0px;\">\n              <div class=\"dropbox\" >\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                  <div class=\"euro-text\" style=\"width: 100%;\">{{vehicleModelVal}}</div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 12%;\">\n                    <img style=\"height: 6.6px;width:11.36px \" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleModel==false\">\n                    <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleModel==true\">\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicleModel==true\" style=\"height:100px ; overflow: scroll;\">\n                  <div *ngFor=\"let list of vehicleModel\" (click)=\"selectVehicleModel(list)\">\n                    <div class=\"euro-text1\">{{list.model}}</div>\n                  </div>\n      \n                </div>\n      \n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n\n        <!----------- fourth form ---------------------------->\n        <div class=\"label\">Policyholder Type <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n            <div class=\"euro-text\">{{policyhldrVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPolicyholder==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPolicyholder==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showPolicyholder==true\">\n            <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n              <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n            </div>\n\n          </div>\n\n        </div>\n        <!----------- fifth form ---------------------------->\n        <div *ngIf=\"policyhldrVal=='Private'\">\n          <div class=\"label\">First Name</div>\n          <div class=\"inputfield\">\n            <div class=\"innerdropbox\">\n              <ion-input [(ngModel)]=\"fName\" style=\"height: 48px;\"  type=\"email\" placeholder=\"John\" class=\"in-text\"></ion-input>\n            </div>\n          </div>\n        </div>\n        <!----------- fifth form ---------------------------->\n        <div *ngIf=\"policyhldrVal=='Private'\">\n          <div class=\"label\">Last Name</div>\n          <div class=\"inputfield\">\n            <div class=\"innerdropbox\">\n              <ion-input [(ngModel)]=\"lName\" style=\"height: 48px;\" type=\"email\" placeholder=\"Doe\" class=\"in-text\"></ion-input>\n            </div>\n          </div>\n        </div>\n        <!----------- fifth form ---------------------------->\n        <div *ngIf=\"policyhldrVal=='Corporate'\">\n          <div class=\"label\">Company Name</div>\n          <div class=\"inputfield\">\n            <div class=\"innerdropbox\">\n              <ion-input [(ngModel)]=\"compName\" style=\"height: 48px;\" type=\"email\" placeholder=\"phenologix\" class=\"in-text\"></ion-input>\n            </div>\n          </div>\n        </div>\n        \n\n        <!----------- fifth form ---------------------------->\n        <div class=\"label\">Email Address<span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"inputfield\">\n          <div class=\"innerdropbox\">\n            <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px;\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n          </div>\n        </div>\n\n        \n\n        <!----------- sixth form ---------------------------->\n        <div class=\"label\">Phone Number <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"inputfield\">\n          <div class=\"innerdropbox\">\n            <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px;\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n          </div>\n        </div>\n        <!----------- sixth form ---------------------------->\n        <div class=\"label\">Value of Vehicle <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"inputfield\">\n          <div class=\"innerdropbox\">\n            <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px;\" type=\"tel\" placeholder=\"\" class=\"in-text\"></ion-input>\n          </div>\n        </div>\n\n        <!----------- seventh form ---------------------------->\n        <div class=\"label\">Flood Extension <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\n            <div class=\"euro-text\">{{floodExtVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showFloodExt==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showFloodExt==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showFloodExt==true\">\n            <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\n              <div class=\"euro-text1\">{{list.floodExt}}</div>\n            </div>\n          </div>\n        </div>\n\n        <!----------- seventh form ---------------------------->\n        <div class=\"label\">Excess Buy Back <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\n            <div class=\"euro-text\">{{excessBuyBackVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showExcessBuyBack==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showExcessBuyBack==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showExcessBuyBack==true\">\n            <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\n              <div class=\"euro-text1\">{{list.excessByBack}}</div>\n            </div>\n          </div>\n        </div>\n\n        <!----------- seventh form ---------------------------->\n        <div class=\"label\">Vehicle Tracking <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\n            <div class=\"euro-text\">{{vehicleTrackingVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleTracking==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleTracking==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showVehicleTracking==true\">\n            <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\n              <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\n            </div>\n          </div>\n        </div>\n        <!----------- seventh form ---------------------------->\n        <div class=\"label\">Strike Riot & Civil Commotion <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openStrikeRiot()\">\n            <div class=\"euro-text\">{{strikeRiotVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showStrikeRiot==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showStrikeRiot==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showStrikeRiot==true\">\n            <div *ngFor=\"let list of StrikeRiotCivilCommotion\" (click)=\"selectStrikeRiot(list)\">\n              <div class=\"euro-text1\">{{list.strikeRiot}}</div>\n            </div>\n          </div>\n        </div>\n        <!----------- seventh form ---------------------------->\n        <div class=\"label\">Increase in Third Party Property Damage <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openTPDamageValues()\">\n            <div class=\"euro-text\">{{tPdamageVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showTPdagmage==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showTPdagmage==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showTPdagmage==true\">\n            <div *ngFor=\"let list of tPdamageValues\" (click)=\"selectTpDamage(list)\">\n              <div class=\"euro-text1\">{{list.tpDamage}}</div>\n            </div>\n          </div>\n        </div>\n\n        <!----------- seventh form ---------------------------->\n        <div *ngIf=\"autoPlanVal=='Uber Classic(2.5% Of vehicle value)'\">\n          <div class=\"label\" >Increase in Passenger Liability  <span style=\"color:#A8B400;\">*</span></div>\n          <div class=\"dropbox\">\n            <div class=\"innerdropbox\" (click)=\"openPassenger()\">\n              <div class=\"euro-text\">{{passLiabilityVal}}</div>\n              <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n                <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPassLiabili==false\">\n                <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPassLiabili==true\">\n              </div>\n            </div>\n            <div *ngIf=\"showPassLiabili==true\">\n              <div *ngFor=\"let list of passengerLiability\" (click)=\"selectPassLiab(list)\">\n                <div class=\"euro-text1\">{{list.passLiab}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <!----------- seventh form ---------------------------->\n        <div class=\"label\">Payment Frequency <span style=\"color:#A8B400;\">*</span></div>\n        <div class=\"dropbox\">\n          <div class=\"innerdropbox\" (click)=\"openPaymentFrequency()\">\n            <div class=\"euro-text\">{{paymentFrequencyVal}}</div>\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px;\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPayFreq==false\">\n              <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPayFreq==true\">\n            </div>\n          </div>\n          <div *ngIf=\"showPayFreq==true\">\n            <div *ngFor=\"let list of paymentFrequencies\" (click)=\"selectPayFreq(list)\">\n              <div class=\"euro-text1\">{{list.pfreq}}</div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div style=\"width: 90%;margin:8% auto;\" (click)=\"continue()\">\n          <ion-button class=\"btn\">Continue</ion-button>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_quote1_quote1_module_ts.js.map