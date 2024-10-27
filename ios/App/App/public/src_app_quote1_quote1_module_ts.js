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

module.exports = ".wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color:#5D5D5D;\n  --placeholder-color:#5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight:400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius:12px ;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlMS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFxpbnN1cmFuY2VcXHNyY1xcYXBwXFxxdW90ZTFcXHF1b3RlMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDTUY7O0FESEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUNFLDRCQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNGLGdCQUFBO0VBQ0EsNkJBQUE7QUNTRjs7QURMQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ1FGIiwiZmlsZSI6InF1b3RlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmh0ZXh0e1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmxleC1jbHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ubGFiZWx7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5kcm9wYm94e1xyXG4gIG1hcmdpbjogNCUgMCU7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEzLjQxcHggMTVweDtcclxuXHJcbn1cclxuLmlubmVyZHJvcGJveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG4uZXVyby10ZXh0e1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufVxyXG4uZXVyby10ZXh0MXtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmlucHV0ZmllbGR7XHJcbiAgbWFyZ2luOiA0JSAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmluLXRleHR7XHJcbiAgLS1jb2xvcjojNUQ1RDVEO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NDAwO1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLmJ0bntcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4iLCIud3JhcHBlciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmh0ZXh0IHtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmxleC1jbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmxhYmVsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRyb3Bib3gge1xuICBtYXJnaW46IDQlIDAlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XG59XG5cbi5pbm5lcmRyb3Bib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ldXJvLXRleHQge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZXVyby10ZXh0MSB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24taW5wdXQge1xuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4uaW5wdXRmaWVsZCB7XG4gIG1hcmdpbjogNCUgMCU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5pbi10ZXh0IHtcbiAgLS1jb2xvcjojNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XG4gIC0tcGFkZGluZy1zdGFydDogNyU7XG4gIC0tcGFkZGluZy10b3A6IDUlO1xuICAtLXBhZGRpbmctYm90dG9tOiA1JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjQwMDtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHggO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";

/***/ }),

/***/ 10076:
/*!****************************************************!*\
  !*** ./src/app/quote1/quote1.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"htext\">Your Details</div>\r\n    <div class=\"flex-cls\">\r\n      <!-- <div>\r\n        <img src=\"assets/images/slider/1.svg\">\r\n      </div> -->\r\n      <div style=\"width: 80%; margin: 0% auto\">\r\n        <div class=\"label\">\r\n          Auto Plan of Choice <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openAutoPlan()\">\r\n            <div class=\"euro-text\" style=\"width: 100%\">{{autoPlanVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showAutoPlan==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showAutoPlan==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div\r\n            *ngIf=\"showAutoPlan==true\"\r\n            style=\"height: 90px; overflow: scroll\"\r\n          >\r\n            <div\r\n              *ngFor=\"let list of autoPlanList\"\r\n              (click)=\"selectAutoPlan(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.autoPlan}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- second form ---------------------------->\r\n        <div class=\"label\">\r\n          Vehicle Class <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openEcVehicleClass()\">\r\n            <div class=\"euro-text\" style=\"width: 100%\">\r\n              {{eCvehicleClassVal}}\r\n            </div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showEcVehicleClass==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showEcVehicleClass==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div\r\n            *ngIf=\"showEcVehicleClass==true\"\r\n            style=\"height: 90px; overflow: scroll\"\r\n          >\r\n            <div\r\n              *ngFor=\"let list of eCcarClasses\"\r\n              (click)=\"selectEcCarClass(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- second form ---------------------------->\r\n        <div class=\"label\">\r\n          Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <ion-grid style=\"padding-left: 0px; padding-right: 0px\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" style=\"padding-left: 0px\">\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 12%\">\r\n                    <img\r\n                      style=\"height: 6.6px; width: 11.36px\"\r\n                      src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\"\r\n                    />\r\n                    <img\r\n                      style=\"height: 6.6px; width: 11.36px\"\r\n                      src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div\r\n                  *ngIf=\"showMaker==true\"\r\n                  style=\"height: 100px; overflow: scroll\"\r\n                >\r\n                  <div\r\n                    *ngFor=\"let list of vehicleMake\"\r\n                    (click)=\"selectVehicleMaker(list)\"\r\n                  >\r\n                    <div class=\"euro-text1\">{{list.manufacturer}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" style=\"padding-right: 0px\">\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 12%\">\r\n                    <img\r\n                      style=\"height: 6.6px; width: 11.36px\"\r\n                      src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\"\r\n                    />\r\n                    <img\r\n                      style=\"height: 6.6px; width: 11.36px\"\r\n                      src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div\r\n                  *ngIf=\"showVehicleModel==true\"\r\n                  style=\"height: 100px; overflow: scroll\"\r\n                >\r\n                  <div\r\n                    *ngFor=\"let list of vehicleModel\"\r\n                    (click)=\"selectVehicleModel(list)\"\r\n                  >\r\n                    <div class=\"euro-text1\">{{list.model}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <!----------- fourth form ---------------------------->\r\n        <div class=\"label\">\r\n          Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n            <div class=\"euro-text\">{{policyhldrVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showPolicyholder==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showPolicyholder==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showPolicyholder==true\">\r\n            <div\r\n              *ngFor=\"let list of policyhldrList\"\r\n              (click)=\"selectPolicyholder(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div *ngIf=\"policyhldrVal=='Private'\">\r\n          <div class=\"label\">First Name</div>\r\n          <div class=\"inputfield\">\r\n            <div class=\"innerdropbox\">\r\n              <ion-input\r\n                [(ngModel)]=\"fName\"\r\n                style=\"height: 48px\"\r\n                type=\"email\"\r\n                placeholder=\"John\"\r\n                class=\"in-text\"\r\n              ></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div *ngIf=\"policyhldrVal=='Private'\">\r\n          <div class=\"label\">Last Name</div>\r\n          <div class=\"inputfield\">\r\n            <div class=\"innerdropbox\">\r\n              <ion-input\r\n                [(ngModel)]=\"lName\"\r\n                style=\"height: 48px\"\r\n                type=\"email\"\r\n                placeholder=\"Doe\"\r\n                class=\"in-text\"\r\n              ></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n          <div class=\"label\">Company Name</div>\r\n          <div class=\"inputfield\">\r\n            <div class=\"innerdropbox\">\r\n              <ion-input\r\n                [(ngModel)]=\"compName\"\r\n                style=\"height: 48px\"\r\n                type=\"email\"\r\n                placeholder=\"phenologix\"\r\n                class=\"in-text\"\r\n              ></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">\r\n          Email Address<span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input\r\n              [(ngModel)]=\"userEmail\"\r\n              style=\"height: 48px\"\r\n              type=\"email\"\r\n              placeholder=\"johndoe@gmail.com\"\r\n              class=\"in-text\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- sixth form ---------------------------->\r\n        <div class=\"label\">\r\n          Phone Number <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input\r\n              [(ngModel)]=\"mobNumber\"\r\n              style=\"height: 48px\"\r\n              type=\"tel\"\r\n              placeholder=\"923565466554\"\r\n              class=\"in-text\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- sixth form ---------------------------->\r\n        <div class=\"label\">\r\n          Value of Vehicle <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input\r\n              [(ngModel)]=\"valOfVehicle\"\r\n              style=\"height: 48px\"\r\n              type=\"tel\"\r\n              placeholder=\"\"\r\n              class=\"in-text\"\r\n            ></ion-input>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Flood Extension <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\r\n            <div class=\"euro-text\">{{floodExtVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showFloodExt==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showFloodExt==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showFloodExt==true\">\r\n            <div\r\n              *ngFor=\"let list of floodExtValues\"\r\n              (click)=\"selectFloodExt(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.floodExt}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Excess Buy Back <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\r\n            <div class=\"euro-text\">{{excessBuyBackVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showExcessBuyBack==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showExcessBuyBack==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showExcessBuyBack==true\">\r\n            <div\r\n              *ngFor=\"let list of ExcessBuyBack\"\r\n              (click)=\"selectExcessBuyBack(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.excessByBack}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Vehicle Tracking <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\r\n            <div class=\"euro-text\">{{vehicleTrackingVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showVehicleTracking==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showVehicleTracking==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showVehicleTracking==true\">\r\n            <div\r\n              *ngFor=\"let list of vehicleTrackingValues\"\r\n              (click)=\"selectVehicleTracking(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Strike Riot & Civil Commotion <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openStrikeRiot()\">\r\n            <div class=\"euro-text\">{{strikeRiotVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showStrikeRiot==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showStrikeRiot==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showStrikeRiot==true\">\r\n            <div\r\n              *ngFor=\"let list of StrikeRiotCivilCommotion\"\r\n              (click)=\"selectStrikeRiot(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.strikeRiot}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Increase in Third Party Property Damage\r\n          <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openTPDamageValues()\">\r\n            <div class=\"euro-text\">{{tPdamageVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showTPdagmage==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showTPdagmage==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showTPdagmage==true\">\r\n            <div\r\n              *ngFor=\"let list of tPdamageValues\"\r\n              (click)=\"selectTpDamage(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.tpDamage}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div *ngIf=\"autoPlanVal=='Uber Classic(2.5% Of vehicle value)'\">\r\n          <div class=\"label\">\r\n            Increase in Passenger Liability\r\n            <span style=\"color: #a8b400\">*</span>\r\n          </div>\r\n          <div class=\"dropbox\">\r\n            <div class=\"innerdropbox\" (click)=\"openPassenger()\">\r\n              <div class=\"euro-text\">{{passLiabilityVal}}</div>\r\n              <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n                <img\r\n                  style=\"height: 6.6px; width: 11.36px\"\r\n                  src=\"assets/images/down-arrow.svg\"\r\n                  *ngIf=\"showPassLiabili==false\"\r\n                />\r\n                <img\r\n                  style=\"height: 6.6px; width: 11.36px\"\r\n                  src=\"assets/images/yuparrow.svg\"\r\n                  *ngIf=\"showPassLiabili==true\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"showPassLiabili==true\">\r\n              <div\r\n                *ngFor=\"let list of passengerLiability\"\r\n                (click)=\"selectPassLiab(list)\"\r\n              >\r\n                <div class=\"euro-text1\">{{list.passLiab}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Payment Frequency <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openPaymentFrequency()\">\r\n            <div class=\"euro-text\">{{paymentFrequencyVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showPayFreq==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showPayFreq==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showPayFreq==true\">\r\n            <div\r\n              *ngFor=\"let list of paymentFrequencies\"\r\n              (click)=\"selectPayFreq(list)\"\r\n            >\r\n              <div class=\"euro-text1\">{{list.pfreq}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 90%; margin: 8% auto\" (click)=\"continue()\">\r\n          <ion-button class=\"btn\">Continue</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_quote1_quote1_module_ts.js.map