"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mypolicies_mypolicies_module_ts"],{

/***/ 92609:
/*!*********************************************************!*\
  !*** ./src/app/mypolicies/mypolicies-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MypoliciesPageRoutingModule": () => (/* binding */ MypoliciesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mypolicies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mypolicies.page */ 60694);




const routes = [
    {
        path: '',
        component: _mypolicies_page__WEBPACK_IMPORTED_MODULE_0__.MypoliciesPage
    }
];
let MypoliciesPageRoutingModule = class MypoliciesPageRoutingModule {
};
MypoliciesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MypoliciesPageRoutingModule);



/***/ }),

/***/ 87507:
/*!*************************************************!*\
  !*** ./src/app/mypolicies/mypolicies.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MypoliciesPageModule": () => (/* binding */ MypoliciesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mypolicies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mypolicies-routing.module */ 92609);
/* harmony import */ var _mypolicies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mypolicies.page */ 60694);







let MypoliciesPageModule = class MypoliciesPageModule {
};
MypoliciesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mypolicies_routing_module__WEBPACK_IMPORTED_MODULE_0__.MypoliciesPageRoutingModule
        ],
        declarations: [_mypolicies_page__WEBPACK_IMPORTED_MODULE_1__.MypoliciesPage]
    })
], MypoliciesPageModule);



/***/ }),

/***/ 60694:
/*!***********************************************!*\
  !*** ./src/app/mypolicies/mypolicies.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MypoliciesPage": () => (/* binding */ MypoliciesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mypolicies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mypolicies.page.html?ngResource */ 40551);
/* harmony import */ var _mypolicies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mypolicies.page.scss?ngResource */ 85866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);



/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */





let MypoliciesPage = class MypoliciesPage {
    constructor(router, api, location) {
        this.router = router;
        this.api = api;
        this.location = location;
        this.show = false;
        this.box = 'unchecked';
        this.fName = '';
        this.lName = '';
        this.userEmail = '';
        this.mobNumber = '';
        this.compName = '';
        this.valOfVehicle = '';
        this.showPlan = false;
        this.showTitle = false;
        this.showAgeGroup = false;
        this.showVehicle = false;
        this.showMaker = false;
        this.showPolicyholder = false;
        this.showVehicleModel = false;
        this.showVehicleUsage = false;
        this.showFloodExt = false;
        this.showExcessBuyBack = false;
        this.showVehicleTracking = false;
        this.showRoadSide = false;
        this.tourStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.tourEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.otheName = '';
        this.showPickerStartDate = false;
        this.showPickerEndDate = false;
        this.ageGroup = 'Please Select';
        this.useTitle = 'Please Select';
        this.roadSideVal = 'Please Select';
        this.vehicleVal = 'Please Select';
        this.vehicleMakeVal = 'Please Select';
        this.policyhldrVal = 'Please Select';
        this.vehicleModelVal = 'Please Select';
        this.floodExtVal = 'Please Select';
        this.excessBuyBackVal = 'Please Select';
        this.vehicleTrackingVal = 'Please Select';
        this.autoPlanVal = 'Please Auto Plan';
        this.autoPlanName = 'Please Auto Plan';
        this.policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType: 'Corporate' }];
        this.floodExtValues = [{ floodExt: 'Yes' }, { floodExt: 'No' }];
        this.ExcessBuyBack = [{ excessByBack: 'Yes' }, { excessByBack: 'No' }];
        this.vehicleTrackingValues = [{ vehicleTrack: 'Yes' }, { vehicleTrack: 'No' }];
        this.titleList = [
            {
                id: 0,
                title: 'Mr',
            },
            {
                id: 1,
                title: 'Mrs',
            },
            // {
            //   id: 2,
            //   title: 'Mrs',
            // },
            // {
            //   i: 3,
            //   title: 'Miss',
            // },
            {
                autoPlan: 2,
                title: 'Ms',
            },
            {
                autoPlan: 3,
                title: 'Chief',
            },
            {
                id: 4,
                title: 'Dr',
            },
            {
                autoPlan: 5,
                title: 'Air Vice Marshall',
            },
            {
                autoPlan: 6,
                title: 'Alhaji',
            },
            // {
            //   autoPlan: 9,
            //   title: 'Ms',
            // },
            // {
            //   autoPlan: 10,
            //   title: 'Chief',
            // }
        ];
        this.isavetitle = [
            { id: '0', title: 'Mr', active: false },
            { id: '1', title: 'Ms', active: false },
            { id: '2', title: 'Dr', active: false },
            { id: '3', title: 'Air Vice Marshall', active: false },
            { id: '4', title: 'Alhaji', active: false },
            { id: '5', title: 'Ambassador', active: false },
            { id: '6', title: 'Architect', active: false },
            { id: '7', title: 'Barr', active: false },
            { id: '8', title: 'Bishop', active: false },
            { id: '9', title: 'Brig', active: false },
            { id: '10', title: 'Brig GEN', active: false },
            { id: '11', title: 'CAPT', active: false },
            { id: '12', title: 'Chief(Mrs)', active: false },
            { id: '13', title: 'Commander ', active: false },
            { id: '14', title: 'Dr(Mrs)', active: false },
            { id: '15', title: 'Elder', active: false },
            { id: '16', title: 'Hajia', active: false },
            { id: '17', title: 'Hajia(Chief)', active: false },
            { id: '18', title: 'His Excellency', active: false },
            { id: '19', title: 'Lt Col', active: false },
            { id: '21', title: 'Major', active: false },
            { id: '22', title: 'Major Gen', active: false },
            { id: '23', title: 'Master', active: false },
            { id: '24', title: 'Professor', active: false },
            { id: '25', title: 'Rev Sis', active: false },
            { id: '26', title: 'Reverend', active: false },
            { id: '27', title: 'Senator', active: false },
        ];
        this.autoPlansOfChoice = [
            {
                autoPlan: 'Auto Compact (2%) (Third Party Fire & Theft)',
                value: 'auto_compact',
            },
            {
                autoPlan: 'Auto Bronze (2.5%)',
                value: 'auto_bronze',
            },
            {
                autoPlan: 'Auto Silver (3%)',
                value: 'auto_silver',
            },
            {
                autoPlan: 'Auto Gold (3.5%)',
                value: 'auto_gold',
            },
            {
                autoPlan: 'Auto Platinum (4%)',
                value: 'auto_platinum',
            },
        ];
        this.ageGroupList = [
            {
                id: 1,
                title: '18 - 65 Years Old',
            },
            {
                id: 2,
                title: '66 - 75 Years Old',
            },
            {
                id: 3,
                title: '76 - 80 Years Old',
            },
        ];
        this.roadSideAssistance = [{ roadSide: 'Yes' }, { roadSide: 'No' }];
        this.Paymentfrequency = [
            { id: '0', title: 'Monthly', active: false },
            { id: '1', title: 'Quarterly', active: false },
            { id: '2', title: 'Half-yearly', active: false },
            { id: '3', title: 'Yearly', active: false },
        ];
        this.Pfrequency = 'Please Select';
        this.showpaymentfrequency = false;
        this.sumassured = 'Please Select';
        this.showsumassured = false;
        this.sumassuredarray = [
            { id: '0', value: '100000', active: false },
            { id: '1', value: '200000', active: false },
            { id: '2', value: '300000', active: false },
            { id: '3', value: '400000', active: false },
            { id: '4', value: '500000', active: false },
            { id: '5', value: '600000', active: false },
            { id: '6', value: '700000', active: false },
            { id: '7', value: '800000', active: false },
            { id: '8', value: '900000', active: false },
            { id: '9', value: '1000000', active: false },
        ];
        // valuetype = 'Third Party';
        this.vehicleModelNew = [];
        this.draftArr = '';
        // -----------------Third Party---------------------------
        this.vechilenewarray = [];
        this.EnchancednewClasses = [];
        this.vechileMakenew = [];
    }
    ngOnInit() {
        console.log('new Date().toISOString()===', new Date().toISOString());
        this.subProName = localStorage.getItem('subProName');
        console.log('subproduct name-----', this.subProName);
        this.getCarVehicleTypeCls();
        this.getCarMakeCompanies();
        this.userEmail = localStorage.getItem('email');
        this.mobNumber = localStorage.getItem('number');
    }
    goback() {
        this.location.back();
    }
    ionViewWillEnter() {
        // if (this.requestsType) {
        //   if (this.requestsType === 'PurchasePolicies') {
        //     this.mySegment.nativeElement.children[0].click();
        //   }
        //   if (this.requestsType === 'InvestmentPlan') {
        //     this.mySegment.nativeElement.children[1].click();
        //   }
        // } else {
        //   this.requestsType = 'PurchasePolicies';
        //   this.mySegment.nativeElement.children[0].click();
        // }
        this.vehicleVal = 'Please Select';
        this.vehicleMakeVal = 'Select Manufacturer';
        this.policyhldrVal = 'Please Select';
        this.vehicleModelVal = 'Select Model';
        this.fName = localStorage.getItem('fname');
        ;
        this.lName = localStorage.getItem('lname');
        this.compName = '';
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        const data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'PurchasePolicies') {
            this.requestsType = 'PurchasePolicies';
        }
        if (ev.detail.value === 'InvestmentPlan') {
            this.requestsType = 'InvestmentPlan';
        }
        localStorage.setItem('requestType', this.requestsType);
    }
    showdiv() {
        if (this.show === false) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    }
    changed() {
        if (this.box == 'checked') {
            this.box = 'unchecked';
        }
        else {
            this.box = 'checked';
        }
    }
    getQuote() {
        this.router.navigate(['/quote1']);
    }
    getCarVehicleTypeCls() {
        // this.api.showLoader()
        if (this.subProName === 'Third Party') {
            const myData = 'myData={"verify_token":"' +
                localStorage.getItem('token') +
                '","product_class":"vehicle_class_thirdparty","method":"get_car_classes"}';
            this.api.insertData(myData).subscribe((res) => {
                console.log(res);
                this.api.hideLoader();
                if (res.values !== '') {
                    this.vehicleClass = res.values;
                    console.log(this.vehicleClass);
                    this.vehicleClass.map((val, index) => {
                        const data = {
                            name: val,
                            active: false,
                        };
                        this.vechilenewarray.push(data);
                    });
                    console.log('dadasdsadsa======', this.vechilenewarray);
                }
            }, (err) => {
                console.log('err', err);
                this.api.hideLoader();
            });
        }
        else if (this.subProName == 'Enhanced Comprehensive') {
            const myData = 'myData={"verify_token":"' +
                localStorage.getItem('token') +
                '","method":"get_car_classes","product_class":"vehicle_class_enhanced_comprehensive"}';
            this.api.insertData(myData).subscribe((res) => {
                console.log(res);
                this.api.hideLoader();
                if (res.values != '') {
                    this.eCcarClasses = res.values;
                    console.log('Enhanced Comprehensive car classes==', this.eCcarClasses);
                    this.eCcarClasses.map((val, index) => {
                        const data = {
                            name: val,
                            active: false,
                        };
                        this.EnchancednewClasses.push(data);
                    });
                    // console.log('EnchancednewClasses======', this.EnchancednewClasses);
                }
            }, (err) => {
                console.log(err);
            });
        }
        else if (this.subProName == 'Auto Variants') {
        }
        else {
        }
    }
    getCarMakeCompanies() {
        const myData = 'myData={"verify_token":"' +
            localStorage.getItem('token') +
            '","method":"get_car_companies"}';
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.values != '') {
                this.vehicleMake = res.values;
                console.log(this.vehicleMake);
                this.vehicleMake.map((val, index) => {
                    const data = {
                        manufacturer: val.manufacturer,
                        active: false,
                    };
                    this.vechileMakenew.push(data);
                });
                // console.log('vechileMakenew array====', this.vechileMakenew);
            }
        }, (err) => {
            console.log(err);
        });
    }
    getVehicleModels() {
        this.vehicleModelNew = [];
        const myData = 'myData={"verify_token":"' +
            localStorage.getItem('token') +
            '","method":"get_car_models","manufacturer":"' +
            this.vehicleMakeVal +
            '"}';
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.values != '') {
                this.vehicleModel = res.values;
                console.log(this.vehicleModel);
                this.vehicleModel.map((val, index) => {
                    const data = {
                        model: val.model,
                        active: false,
                    };
                    this.vehicleModelNew.push(data);
                });
                console.log('vehicleModelNew', this.vehicleModelNew);
            }
        }, (err) => {
            console.log(err);
        });
    }
    openRoadSideAssistance() {
        if (this.showRoadSide == true) {
            this.showRoadSide = false;
        }
        else {
            this.showRoadSide = true;
        }
    }
    openAutoPlanList() {
        if (this.showPlan == true) {
            this.showPlan = false;
        }
        else {
            this.showPlan = true;
        }
    }
    openDropDwon(type) {
        console.log('DROPDOWN TYPE ----', type);
        if (type == 'title') {
            this.showTitle = !this.showTitle;
        }
        else if (type == 'age') {
            this.showAgeGroup = !this.showAgeGroup;
        }
    }
    openVehicleList() {
        if (this.showVehicle == true) {
            this.showVehicle = false;
        }
        else {
            this.showVehicle = true;
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
    openExcessBuyBack() {
        if (this.showExcessBuyBack == true) {
            this.showExcessBuyBack = false;
        }
        else {
            this.showExcessBuyBack = true;
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
    openVehicleTracking() {
        if (this.showVehicleTracking == true) {
            this.showVehicleTracking = false;
        }
        else {
            this.showVehicleTracking = true;
        }
    }
    openpaymentfrequency() {
        if (this.showpaymentfrequency == true) {
            this.showpaymentfrequency = false;
        }
        else {
            this.showpaymentfrequency = true;
        }
    }
    opensumassured() {
        if (this.showsumassured == true) {
            this.showsumassured = false;
        }
        else {
            this.showsumassured = true;
        }
    }
    selectRoadSideAssistance(list) {
        this.roadSideVal = list.roadSide;
        this.showRoadSide = false;
    }
    selectVehicleTracking(list) {
        this.vehicleTrackingVal = list.vehicleTrack;
        this.showVehicleTracking = false;
    }
    selectAutoPlan(list) {
        this.autoPlanVal = list.autoPlan;
        this.autoPlanName = list.value;
        this.showPlan = false;
    }
    selectFloodExt(list) {
        this.floodExtVal = list.floodExt;
        this.showFloodExt = false;
    }
    selectpaymentfrequency(list, index) {
        this.Pfrequency = list.title;
        this.showpaymentfrequency = false;
        this.Paymentfrequency.map((val, i) => {
            // console.log(i);
            if (index == i) {
                this.Paymentfrequency[i].active = true;
            }
            if (index != i) {
                this.Paymentfrequency[i].active = false;
            }
        });
    }
    selectsumassured(list, index) {
        this.sumassured = list.value;
        this.showsumassured = false;
        this.sumassuredarray.map((val, i) => {
            // console.log(i);
            if (index == i) {
                this.sumassuredarray[i].active = true;
            }
            if (index != i) {
                this.sumassuredarray[i].active = false;
            }
        });
    }
    selectExcessBuyBack(list) {
        this.excessBuyBackVal = list.excessByBack;
        this.showpaymentfrequency = false;
    }
    selectVehicleCls(list, index) {
        this.vehicleVal = list.name;
        this.showVehicle = false;
        if (this.subProName == 'Third Party') {
            this.vechilenewarray.map((val, i) => {
                console.log(this.vechilenewarray);
                if (index == i) {
                    this.vechilenewarray[i].active = true;
                }
                if (index != i) {
                    this.vechilenewarray[i].active = false;
                }
            });
            // console.log('ddddddddddddddddd', this.vechilenewarray);
        }
        if (this.subProName == 'Enhanced Comprehensive') {
            this.EnchancednewClasses.map((val, i) => {
                if (index == i) {
                    this.EnchancednewClasses[i].active = true;
                }
                if (index != i) {
                    this.EnchancednewClasses[i].active = false;
                }
            });
            // console.log('ddddddddddddddddd', this.EnchancednewClasses);
        }
    }
    selectDropDown(list, type) {
        console.log('type----', type);
        console.log('List data ----', list);
        if (type == 'title') {
            this.useTitle = list.title;
            this.showTitle = false;
        }
        else if (type == 'age') {
            this.ageGroup = list.title;
            this.showAgeGroup = false;
        }
    }
    selectVehicleMaker(list, index) {
        this.vehicleMakeVal = list.manufacturer;
        this.vehicleModelVal = '';
        this.showMaker = false;
        this.vechileMakenew.map((val, i) => {
            if (index == i) {
                this.vechileMakenew[i].active = true;
            }
            if (index != i) {
                this.vechileMakenew[i].active = false;
            }
        });
        this.getVehicleModels();
    }
    selectPolicyholder(list) {
        this.policyhldrVal = list.plcyhldrType;
        this.showPolicyholder = false;
    }
    selectTitle(list, index) {
        this.useTitle = list.title;
        this.showTitle = false;
        this.isavetitle.map((val, i) => {
            // console.log(i);
            if (index == i) {
                this.isavetitle[i].active = true;
            }
            if (index != i) {
                this.isavetitle[i].active = false;
            }
        });
    }
    selectVehicleModel(list, index) {
        this.vehicleModelVal = list.model;
        this.showVehicleModel = false;
        this.vehicleModelNew.map((val, i) => {
            if (index == i) {
                this.vehicleModelNew[i].active = true;
            }
            if (index != i) {
                this.vehicleModelNew[i].active = false;
            }
        });
        console.log('vechileMakenew--------', this.vehicleModelNew);
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
    validateIntertaionTravel() {
        const response = { message: 'message', status: false };
        if (this.useTitle == 'Please Select') {
            response.message = 'Title required';
        }
        else if (this.ageGroup == 'Please Select') {
            response.message = 'Age group required';
        }
        else if (this.fName == '') {
            response.message = 'First name required';
        }
        else if (this.lName == '') {
            response.message = 'Last name required';
        }
        // else if (this.otheName == '') {
        //   response.message = 'Other name required';
        // }
        else if (this.mobNumber == '') {
            response.message = 'Phone required';
        }
        else if (this.userEmail == '') {
            response.message = 'Email required';
        }
        else {
            response.message = 'Form validated.';
            response.status = true;
        }
        return response;
    }
    validateThirdParty() {
        const response = { message: 'message', status: false };
        if (this.vehicleVal == 'Please Select') {
            response.message = 'Vehicle Class required';
        }
        else if (this.vehicleMakeVal == 'Manufacturer') {
            response.message = 'Vehicle Make required';
        }
        else if (this.vehicleModelVal == 'Select Model') {
            response.message = 'Vehicle Model required';
        }
        else if (this.policyhldrVal == 'Please Select') {
            response.message = 'Policyholder Type required';
        }
        else if (this.policyhldrVal == 'Private') {
            console.log('private');
            if (this.fName == '') {
                response.message = 'First Name required';
            }
            else if (this.lName == '') {
                response.message = 'Last Name required';
            }
            else if (this.userEmail == '') {
                console.log('not private');
                response.message = 'Email Address required';
            }
            else if (this.mobNumber == '') {
                response.message = 'Phone Number required';
            }
            else {
                response.message = 'Third party validated';
                response.status = true;
            }
        }
        else if (this.policyhldrVal == 'Corporate') {
            if (this.compName == '') {
                response.message = 'Company Name required';
            }
            else if (this.userEmail == '') {
                response.message = 'Email Address required';
            }
            else if (this.mobNumber == '') {
                response.message = 'Phone Number required';
            }
            else {
                response.message = 'Third party validated';
                response.status = true;
            }
        }
        return response;
    }
    validateEnhancedCom() {
        const response = { message: 'message', status: false };
        if (this.vehicleVal == 'Please Select') {
            response.message = 'Vehicle Class required';
        }
        else if (this.vehicleMakeVal == 'Manufacturer') {
            response.message = 'Vehicle Make required';
        }
        else if (this.vehicleModelVal == 'Select Model') {
            this.api.presenttoast('Vehicle Model required');
            response.message = 'Vehicle Model required';
        }
        else if (this.policyhldrVal == 'Please Select') {
            this.api.presenttoast('Policyholder Type required');
            response.message = 'Policyholder Type required';
        }
        else if (this.policyhldrVal == 'Private') {
            console.log('private');
            if (this.policyhldrVal == 'Private') {
                if (this.fName == '') {
                    this.api.presenttoast('First Name required');
                    response.message = 'First Name required';
                }
                else if (this.lName == '') {
                    this.api.presenttoast('Last Name required');
                    response.message = 'Last Name required';
                }
                else if (this.userEmail == '') {
                    console.log('not private');
                    this.api.presenttoast('Email Address required');
                    response.message = 'Email Address required';
                }
                else if (this.mobNumber == '') {
                    this.api.presenttoast('Phone Number required');
                    response.message = 'Phone Number required';
                }
                else if (this.valOfVehicle == '') {
                    this.api.presenttoast('Value of vehicle required');
                    response.message = 'Value of vehicle required';
                }
                else if (this.floodExtVal == 'Please Select') {
                    this.api.presenttoast('Value of Flood Extension required');
                    response.message = 'Value of Flood Extension required';
                }
                else if (this.excessBuyBackVal == 'Please Select') {
                    this.api.presenttoast('Value of Excess Buy Back required');
                    response.message = 'Value of Excess Buy Back required';
                }
                else if (this.vehicleTrackingVal == 'Please Select') {
                    this.api.presenttoast('Value of Vehicle Tracking required');
                    response.message = 'Value of Vehicle Tracking required';
                }
                else {
                    response.message = 'Enhanded valitadted';
                    response.status = true;
                }
            }
        }
        else if (this.policyhldrVal == 'Corporate') {
            if (this.compName == '') {
                this.api.presenttoast('company Name required');
                response.message = 'Company Name required';
            }
            else if (this.userEmail == '') {
                console.log('not private');
                this.api.presenttoast('Email Address required');
                response.message = 'Email Address required';
            }
            else if (this.mobNumber == '') {
                this.api.presenttoast('Phone Number required');
                response.message = 'Phone Number required';
            }
            else if (this.valOfVehicle == '') {
                this.api.presenttoast('Value of vehicle required');
                response.message = 'Value of vehicle required';
            }
            else if (this.floodExtVal == 'Please Select') {
                this.api.presenttoast('Value of Flood Extension required');
                response.message = 'Value of Flood Extension required';
            }
            else if (this.excessBuyBackVal == 'Please Select') {
                this.api.presenttoast('Value of Excess Buy Back required');
                response.message = 'Value of Excess Buy Back required';
            }
            else if (this.vehicleTrackingVal == 'Please Select') {
                this.api.presenttoast('Value of Vehicle Tracking required');
                response.message = 'Value of Vehicle Tracking required';
            }
            else {
                response.message = 'Enhanded valitadted';
                response.status = true;
            }
        }
        return response;
    }
    validateAutoVarient() {
        const response = { message: 'message', status: false };
        if (this.autoPlanVal == 'Please Select') {
            response.message = 'Plan required';
        }
        else if (this.vehicleMakeVal == 'Manufacturer') {
            response.message = 'Vehicle Make required';
        }
        else if (this.vehicleModelVal == 'Select Model') {
            response.message = 'Vehicle Model required';
        }
        else if (this.policyhldrVal == 'Please Select') {
            response.message = 'Policyholder Type required';
        }
        else if (this.policyhldrVal == 'Private') {
            if (this.policyhldrVal == 'Private') {
                if (this.fName == '') {
                    response.message = 'First Name required';
                }
                else if (this.lName == '') {
                    response.message = 'Last Name required';
                }
                else if (this.userEmail == '') {
                    console.log('not private');
                    response.message = 'Email Address required';
                }
                else if (this.mobNumber == '') {
                    response.message = 'Phone Number required';
                }
                else if (this.valOfVehicle == '') {
                    response.message = 'Value of vehicle required';
                }
                else if (this.floodExtVal == 'Please Select') {
                    response.message = 'Value of Flood Extension required';
                }
                else if (this.excessBuyBackVal == 'Please Select') {
                    response.message = 'Value of Excess Buy Back required';
                }
                else if (this.vehicleTrackingVal == 'Please Select') {
                    response.message = 'Value of Vehicle Tracking required';
                }
                else if (this.roadSideVal == 'Please Select') {
                    response.message = 'Road Side Assistance required';
                }
                else {
                    response.message = 'Auto varient validated';
                    response.status = true;
                }
            }
        }
        else if (this.policyhldrVal == 'Corporate') {
            if (this.compName == '') {
                response.message = 'Company Name required';
            }
            else if (this.userEmail == '') {
                console.log('not private');
                response.message = 'Email Address required';
            }
            else if (this.mobNumber == '') {
                response.message = 'Phone Number required';
            }
            else if (this.valOfVehicle == '') {
                response.message = 'Value of vehicle required';
            }
            else if (this.floodExtVal == 'Please Select') {
                response.message = 'Value of Flood Extension required';
            }
            else if (this.excessBuyBackVal == 'Please Select') {
                response.message = 'Value of Excess Buy Back required';
            }
            else if (this.vehicleTrackingVal == 'Please Select') {
                response.message = 'Value of Vehicle Tracking required';
            }
            else if (this.roadSideVal == 'Please Select') {
                response.message = 'Road Side Assistance required';
            }
            else {
                response.message = 'Auto varient validated';
                response.status = true;
            }
        }
        return response;
    }
    createQuote(quoteType) {
        console.log('quoteType---', quoteType);
        let formValidationResult = {
            message: 'This product is under developement',
            status: false,
        };
        console.log('checkTest---', formValidationResult);
        let myData = '';
        switch (quoteType) {
            case 'International':
                formValidationResult = this.validateIntertaionTravel();
                myData =
                    'myData={"product_id":"' +
                        localStorage.getItem('subProId') +
                        '","first_name":"' +
                        this.fName +
                        '","last_name":"' +
                        this.lName +
                        '", "mobile":"' +
                        this.mobNumber +
                        '", "email":"' +
                        this.userEmail +
                        '", "start_date":"' +
                        this.tourStartDate +
                        '",\r\n"end_date":"' +
                        this.tourEndDate +
                        '", "title":"' +
                        this.useTitle +
                        '", "age_group": "' +
                        this.ageGroup +
                        '", "other_name":"' +
                        this.otheName +
                        '","verify_token":"' +
                        localStorage.getItem('token') +
                        '","method":"save_product_quote"}';
                break;
            case 'Third Party':
                formValidationResult = this.validateThirdParty();
                myData =
                    'myData={\r\n    "product_id":"' +
                        localStorage.getItem('subProId') +
                        '",\r\n    "vehicle_class":"' +
                        this.vehicleVal +
                        '",\r\n    "first_name": "' +
                        this.fName +
                        '",\r\n    "last_name":"' +
                        this.lName +
                        '",\r\n    "vehicle_manufacturer":"' +
                        this.vehicleMakeVal +
                        '",\r\n    "vehicle_model":"' +
                        this.vehicleModelVal +
                        '",\r\n    "policyholder_type":"' +
                        this.policyhldrVal +
                        '",\r\n    "mobile":"' +
                        this.mobNumber +
                        '",\r\n    "company_name":"' +
                        this.compName +
                        '",\r\n    "email":"' +
                        this.userEmail +
                        '",\r\n    "verify_token":"' +
                        localStorage.getItem('token') +
                        '",\r\n    "method": "save_product_quote" \r\n}';
                break;
            case 'Enhanced Comprehensive':
                formValidationResult = this.validateEnhancedCom();
                myData =
                    'myData={"product_id":"' +
                        localStorage.getItem('subProId') +
                        '","vehicle_class":"' +
                        this.vehicleVal +
                        '","vehicle_manufacturer":"' +
                        this.vehicleMakeVal +
                        '", "vehicle_model":"' +
                        this.vehicleModelVal +
                        '", "first_name":"' +
                        this.fName +
                        '", "last_name":"' +
                        this.lName +
                        '",\r\n"policyholder_type":"' +
                        this.policyhldrVal +
                        '", "mobile":"' +
                        this.mobNumber +
                        '", "company_name": "' +
                        this.compName +
                        '", "email":"' +
                        this.userEmail +
                        '", "value_of_vehicle":"' +
                        this.valOfVehicle +
                        '", "flood_extension":"' +
                        this.floodExtVal +
                        '", "excess_buy_back":"' +
                        this.excessBuyBackVal +
                        '", "vehicle_tracking":"' +
                        this.vehicleTrackingVal +
                        '", "verify_token":"' +
                        localStorage.getItem('token') +
                        '","method":"save_product_quote"}';
                break;
            case 'Auto Variants':
                formValidationResult = this.validateAutoVarient();
                myData =
                    'myData={"product_id":"' +
                        localStorage.getItem('subProId') +
                        '","insurance_type":"' +
                        this.autoPlanName +
                        '","vehicle_class":"' +
                        this.vehicleVal +
                        '","vehicle_manufacturer":"' +
                        this.vehicleMakeVal +
                        '", "vehicle_model":"' +
                        this.vehicleModelVal +
                        '", "first_name":"' +
                        this.fName +
                        '", "last_name":"' +
                        this.lName +
                        '",\r\n"policyholder_type":"' +
                        this.policyhldrVal +
                        '", "mobile":"' +
                        this.mobNumber +
                        '", "company_name": "' +
                        this.compName +
                        '", "email":"' +
                        this.userEmail +
                        '", "value_of_vehicle":"' +
                        this.valOfVehicle +
                        '", "flood_extension":"' +
                        this.floodExtVal +
                        '", "road_side_assistance":"' +
                        this.roadSideVal +
                        '", "excess_buy_back":"' +
                        this.excessBuyBackVal +
                        '", "vehicle_tracking":"' +
                        this.vehicleTrackingVal +
                        '", "verify_token":"' +
                        localStorage.getItem('token') +
                        '","method":"save_product_quote"}';
                break;
            default:
            // code block
        }
        if (formValidationResult.status) {
            // --- Calling API To create quote --- //
            console.log('this.policyhldrVal---', this.policyhldrVal);
            localStorage.setItem('policyhldrVal', this.policyhldrVal);
            this.api.insertData(myData).subscribe((data) => {
                console.log('data response for products----', data);
                if (data.message == 'success') {
                    //ali
                    var obj = {
                        title: data.info.product_name,
                        product_id: data.info.product_id,
                        quote_id: data.info.quote_id,
                        subProName: data.info.product_name,
                        quoteItems: JSON.stringify(data.quoteItems),
                        image: 'https://www.cornerstone.com.ng/assets/uploads/product/2.jpg',
                        path: '/yourquote',
                        datetime: new Date().toISOString(),
                    };
                    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
                    if (this.draftArr) {
                        this.draftArr.push(obj);
                    }
                    else {
                        this.draftArr = [obj];
                    }
                    localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
                    this.api.presenttoast(data.info.message);
                    localStorage.setItem('userfullname', this.fName + ' ' + this.lName);
                    localStorage.setItem('fname', this.fName);
                    localStorage.setItem('lname', this.lName);
                    localStorage.setItem('email', this.userEmail);
                    localStorage.setItem('product_id', data.info.product_id);
                    localStorage.setItem('quote_id', data.info.quote_id);
                    localStorage.setItem('subProName', data.info.product_name);
                    localStorage.setItem('quoteItems', JSON.stringify(data.quoteItems));
                    localStorage.setItem('vechileval', this.vehicleVal);
                    localStorage.setItem('vechilemakeval', this.vehicleMakeVal);
                    localStorage.setItem('vechilemodelval', this.vehicleModelVal);
                    localStorage.setItem('phonenumber', this.mobNumber);
                    this.router.navigate(['/yourquote']);
                }
                else {
                    this.api.presenttoast(data.message);
                }
            }, (err) => {
                console.log(err);
            });
            // --- Calling API To create quote --- //
        }
        else {
            this.api.presenttoast(formValidationResult.message);
        }
    }
};
MypoliciesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
MypoliciesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mypolicies',
        template: _mypolicies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mypolicies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MypoliciesPage);



/***/ }),

/***/ 85866:
/*!************************************************************!*\
  !*** ./src/app/mypolicies/mypolicies.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.thirdParty-wrapper {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n  margin-left: 2%;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.in-textnochange {\n  cursor: not-allowed;\n  --padding-start: 7%;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table-responsive {\n  min-height: 0.01%;\n  overflow-x: auto;\n  padding: 0px 3px;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #000000;\n  font-size: 10px;\n}\n\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #A8B400;\n  font-size: 14px;\n}\n\ntr td:first-child {\n  font-size: 12px;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cG9saWNpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU5GOztBQWNBO0VBQ0UseUJBQUE7QUFYRjs7QUFjQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWEY7O0FBY0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQVhGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFYRjs7QUFxQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFuQkY7O0FBdUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXJCRjs7QUF3QkE7RUFDRSw0QkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFyQkY7O0FBd0JBO0VBR0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdkJGOztBQTJCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdkJGOztBQXlCQTtFQUNFLFNBQUE7QUF0QkY7O0FBd0JBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQXJCRjs7QUF1QkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcEJGOztBQXNCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsZUFBQTtBQWxCRjs7QUFvQkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsNENBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJteXBvbGljaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvIDUlO1xufVxuXG4uc2VnbWVudDEge1xuICBwYWRkaW5nOiA1cHggM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5zYnRuIHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICM4NTg1OEE7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cblxufVxuXG4uaHRleHQxIHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnIxIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5yMiB7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB3aWR0aDogNjVweDtcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLmNmbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2ZsZXgxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHQge1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dDEge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5jc3BhbiB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZXh0MyB7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xuICA7XG59XG5cbi50ZXh0NCB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0NSB7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWR0ZXh0IHtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ0bmRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAyMDNweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuXG59XG5cbi5pdGV4dCB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4vLyAudGlja2ltZ3tcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICByaWdodDogMTBweDtcbi8vICAgdG9wOiAxMHB4O1xuLy8gfVxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBOEI0MDA7XG59XG5cbi5idG4xIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAyNzNweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGl2ZXByb2R1Y3R7XG4gIGJhY2tncm91bmQ6ICNmNWY2Zjk7XG4gIHBhZGRpbmc6NHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tVGhpcmQgUGFyeSBDU1MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi50aGlyZFBhcnR5LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4vLyAudGl0bGV7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICBjb2xvcjogIzFBMjA2RDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cbi5odGV4dCB7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsZXgtY2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmRyb3Bib3gge1xuICBtYXJnaW46IDQlIDAlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XG5cbn1cblxuLmlubmVyZHJvcGJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4uZXVyby10ZXh0IHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuXG4uZXVyby10ZXh0MSB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24taW5wdXQge1xuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xufVxuXG4uaW5wdXRmaWVsZCB7XG4gIG1hcmdpbjogNCUgMCU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5pbi10ZXh0IHtcbiAgLS1jb2xvcjogIzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbiAgLS1wYWRkaW5nLXRvcDogNSU7XG4gIC0tcGFkZGluZy1ib3R0b206IDUlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xufVxuLmluLXRleHRub2NoYW5nZXtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLml0ZW0tcGlja2VyIHtcbiAgLy8gd2lkdGg6IDg1JTtcbiAgLy8gaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XG5cbn1cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG1pbi1oZWlnaHQ6IC4wMSU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDBweCAzcHg7XG59XG4udGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG50ZHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjojMDAwMDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG50aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnRyIHRkOmZpcnN0LWNoaWxke1xuICBmb250LXNpemU6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcblxufVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZG9uZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiJdfQ== */";

/***/ }),

/***/ 40551:
/*!************************************************************!*\
  !*** ./src/app/mypolicies/mypolicies.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width: 100%\">\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\n        </div>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Motor Insurance Quote</div>\n      </ion-col>\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\" *ngIf=\"requestsType=='PurchasePolicies'\">\n        <img src=\"assets/images/info.png\" (click)=\"goto()\" />\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\n      <ion-segment-button mode=\"ios\" value=\"PurchasePolicies\" class=\"sbtn\">\n        <ion-label>General Bussines</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"InvestmentPlan\" class=\"sbtn\">\n        <ion-label>Life Insurance Plan</ion-label>\n      </ion-segment-button>\n    </ion-segment> -->\n\n    <!------------- Purchase Policies -------------------->\n    <div>\n      <!-------------- third party discription ------------------->\n      <div *ngIf=\"subProName=='Third Party'\">\n        <div class=\"thirdParty-wrapper\">\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />Motor Third-party Insurance Quote\n          </div>\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\n            Please provide your details below to get your quote\n          </div>\n          <div class=\"flex-cls\">\n            <!-- <div>\n              <img src=\"assets/images/slider/1.svg\">\n            </div> -->\n            <div style=\"width: 80%; margin: 0% auto\">\n              <div class=\"label\">\n                Vehicle Class <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\" style=\"position: relative\">\n                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicle==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicle==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vechilenewarray; let i=index\" (click)=\"selectVehicleCls(list,i)\">\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                      {{list.name}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!----------- second form ---------------------------->\n              <div class=\"label\">\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleMakeVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showMaker==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showMaker==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                      {{list.manufacturer}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleModelVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicleModel==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicleModel==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                      {{list.model}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!----------- fourth form ---------------------------->\n              <div class=\"label\">\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{policyhldrVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showPolicyholder==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showPolicyholder==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showPolicyholder==true\">\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"policyhldrVal=='Private'\">\n                <div class=\"label\">First Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\n                      class=\"in-text\"></ion-input>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"policyhldrVal=='Private'\">\n                <div class=\"label\">Last Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                    </ion-input>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\n                <div class=\"label\">Company Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\n                      class=\"in-text\"></ion-input>\n                  </div>\n                </div>\n              </div>\n\n              <!----------- fifth form ---------------------------->\n              <div class=\"label\">\n                Email Address<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n\n              <!----------- sixth form ---------------------------->\n              <div class=\"label\">\n                Phone Number <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n              <!-- ---------------------------------------------------------------- -->\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                <ion-button class=\"btn\">Continue</ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- ------------Enhanced-comprehensive----------------------- -->\n      <div *ngIf=\"subProName=='Enhanced Comprehensive'\">\n        <div class=\"thirdParty-wrapper\">\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\n          </div>\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\n            Your Details\n          </div>\n          <div class=\"flex-cls\">\n            <div style=\"width: 80%; margin: 0% auto\">\n              <div class=\"label\">\n                Vehicle Class <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicle==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicle==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of EnchancednewClasses;let i=index\" (click)=\"selectVehicleCls(list,i)\">\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                      {{list.name}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!----------- second form ---------------------------->\n              <div class=\"label\">\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleMakeVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showMaker==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showMaker==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                      {{list.manufacturer}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleModelVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicleModel==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicleModel==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                      {{list.model}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!----------- fourth form ---------------------------->\n              <div class=\"label\">\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{policyhldrVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showPolicyholder==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showPolicyholder==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showPolicyholder==true\">\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Private'\">\n                <div class=\"label\">First Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\n                      class=\"in-text\"></ion-input>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Private'\">\n                <div class=\"label\">Last Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                    </ion-input>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\n                <div class=\"label\">Company Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\n                      class=\"in-text\"></ion-input>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div class=\"label\">\n                Email Address<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n              <!----------- sixth form ---------------------------->\n              <div class=\"label\">\n                Phone Number <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n              <!----------- sixth form ---------------------------->\n              <div class=\"label\">\n                Value of Vehicle <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\n                  </ion-input>\n                </div>\n              </div>\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Flood Extension <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{floodExtVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showFloodExt==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showFloodExt==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showFloodExt==true\">\n                  <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\n                    <div class=\"euro-text1\">{{list.floodExt}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Excess Buy Back <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{excessBuyBackVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showExcessBuyBack==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showExcessBuyBack==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showExcessBuyBack==true\">\n                  <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\n                    <div class=\"euro-text1\">{{list.excessByBack}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Would you want Vehicle Tracking?\n                <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleTrackingVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicleTracking==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicleTracking==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicleTracking==true\">\n                  <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\n                    <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\n                  </div>\n                </div>\n              </div>\n              <!-- ---------------------------------------------------------------- -->\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                <ion-button class=\"btn\">Continue</ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ------------Auto Variants----------------------- -->\n      <div *ngIf=\"subProName=='Auto Variants'\">\n        <div class=\"thirdParty-wrapper\">\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" /> Auto Variants\n          </div>\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\n            Your Details\n          </div>\n          <div class=\"flex-cls\">\n            <div style=\"width: 80%; margin: 0% auto\">\n              <div class=\"label\">\n                Auto Plan of Choice <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openAutoPlanList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{autoPlanVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showPlan==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showPlan==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showPlan==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of autoPlansOfChoice\" (click)=\"selectAutoPlan(list)\">\n                    <div class=\"euro-text1\">{{list.autoPlan}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- second form ---------------------------->\n              <div class=\"label\">\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleMakeVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showMaker==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showMaker==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vehicleMake\" (click)=\"selectVehicleMaker(list)\">\n                    <div class=\"euro-text1\">{{list.manufacturer}}</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleModelVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicleModel==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicleModel==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of vehicleModel\" (click)=\"selectVehicleModel(list)\">\n                    <div class=\"euro-text1\">{{list.model}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- fourth form ---------------------------->\n              <div class=\"label\">\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{policyhldrVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showPolicyholder==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showPolicyholder==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showPolicyholder==true\">\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Private'\">\n                <div class=\"label\">First Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\n                      class=\"in-text\"></ion-input>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Private'\">\n                <div class=\"label\">Last Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                    </ion-input>\n                  </div>\n                </div>\n              </div>\n              <!----------- fifth form ---------------------------->\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\n                <div class=\"label\">Company Name</div>\n                <div class=\"inputfield\">\n                  <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\n                      class=\"in-text\"></ion-input>\n                  </div>\n                </div>\n              </div>\n\n              <!----------- fifth form ---------------------------->\n              <div class=\"label\">\n                Email Address<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n\n              <!----------- sixth form ---------------------------->\n              <div class=\"label\">\n                Phone Number <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n              <!----------- sixth form ---------------------------->\n              <div class=\"label\">\n                Value of Vehicle <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\n                  </ion-input>\n                </div>\n              </div>\n\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Flood Extension <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{floodExtVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showFloodExt==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showFloodExt==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showFloodExt==true\">\n                  <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\n                    <div class=\"euro-text1\">{{list.floodExt}}</div>\n                  </div>\n                </div>\n              </div>\n\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Excess Buy Back <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{excessBuyBackVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showExcessBuyBack==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showExcessBuyBack==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showExcessBuyBack==true\">\n                  <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\n                    <div class=\"euro-text1\">{{list.excessByBack}}</div>\n                  </div>\n                </div>\n              </div>\n\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Would you want Vehicle Tracking?\n                <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{vehicleTrackingVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showVehicleTracking==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showVehicleTracking==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showVehicleTracking==true\">\n                  <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\n                    <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\n                  </div>\n                </div>\n              </div>\n              <!----------- seventh form ---------------------------->\n              <div class=\"label\">\n                Road Side Assistance <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openRoadSideAssistance()\">\n                  <div class=\"euro-text\" style=\"width: 100%\">\n                    {{roadSideVal}}\n                  </div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showRoadSide==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showRoadSide==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showRoadSide==true\">\n                  <div *ngFor=\"let list of roadSideAssistance\" (click)=\"selectRoadSideAssistance(list)\">\n                    <div class=\"euro-text1\">{{list.roadSide}}</div>\n                  </div>\n                </div>\n              </div>\n\n              <!-- ---------------------------------------------------------------- -->\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                <ion-button class=\"btn\">Continue</ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ------------Enhanced-comprehensive----------------------- -->\n      <div\n        *ngIf=\"subProName=='Worldwide TRAVELLER' || subProName== 'Worldwide PEARL' || subProName== 'Worldwide ECONOMY' || subProName=='Travel Safeguard - Air Transport' || subProName=='Pilgrimage BASIC' || subProName=='Pilgrimage PLUS' || subProName=='Pilgrimage EXTRA' || subProName=='Student Plan' || subProName=='Europe / Shengen' || subProName=='Travel Safeguard - Road Transport'\">\n        <div class=\"thirdParty-wrapper\">\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\n          </div>\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\n            Your Details\n          </div>\n          <div class=\"flex-cls\">\n            <div style=\"width: 80%; margin: 0% auto\">\n              <!-- Title Field -->\n              <div class=\"label\">\n                Title<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\n                  <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showTitle==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showTitle==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of titleList\" (click)=\"selectDropDown(list,'title')\">\n                    <div class=\"euro-text1\">{{list.title}}</div>\n                  </div>\n                </div>\n              </div>\n              <!-- Title Field -->\n\n              <!-- FIRST NAME FIELD NAME -->\n              <div class=\"label\">First Name</div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\n                  </ion-input>\n                </div>\n              </div>\n              <!-- FIRST NAME FIELD NAME -->\n              <!-- LAST NAME FIELD -->\n              <div class=\"label\">Last Name</div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                  </ion-input>\n                </div>\n              </div>\n              <!-- LAST NAME FIELD -->\n              <!-- OTHER NAME FIELD -->\n              <div class=\"label\">Other Name</div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"otheName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                  </ion-input>\n                </div>\n              </div>\n              <!-- OTHER NAME FIELD -->\n              <!-- EMAIL FIELD -->\n              <div class=\"label\">\n                Email Address<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n              <!-- EMAIL FIELD -->\n              <!-- PHONE NUMBER FIELD -->\n              <div class=\"label\">\n                Phone Number<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\n                    class=\"in-text\"></ion-input>\n                </div>\n              </div>\n              <!-- PHONE NUMBER FIELD -->\n              <!-- Start Date  -->\n              <div class=\"label\">\n                Start date<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"item-picker\" style=\"\n                  margin: 4% 0%;\n                  --background: #e8e8e7;\n                  height: 48px;\n                  padding: 13px 15px;\n                \" (click)=\"showPickerStartDate = !showPickerStartDate\">\n                <div style=\"display: flex; align-items: center\">\n                  <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourStartDate }}</ion-text>\n                </div>\n              </div>\n              <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\n                *ngIf=\"showPickerStartDate\" #datetime [value]=\"tourStartDate\" size=\"cover\"\n                (ionChange)=\"dateChanged(datetime.value,'start')\" showDefaultButtons=\"true\"\n                (ionCancel)=\"showPickerStartDate=false\"></ion-datetime>\n              <!-- Start Date  -->\n\n              <!-- End Date  -->\n              <div class=\"label\">\n                End date <span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"item-picker\" style=\"\n                  margin: 4% 0%;\n                  --background: #e8e8e7;\n                  height: 48px;\n                  padding: 13px 15px;\n                \" (click)=\"showPickerEndDate = !showPickerEndDate\">\n                <div style=\"display: flex; align-items: center\">\n                  <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourEndDate }}</ion-text>\n                </div>\n              </div>\n              <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\n                *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\"\n                (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\"\n                (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\n              <!-- End Date  -->\n              <!-- AGE GROUP FIELD -->\n              <div class=\"label\">\n                Age Next Birthday<span style=\"color: #a8b400\">*</span>\n              </div>\n              <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('age')\">\n                  <div class=\"euro-text\" style=\"width: 100%\">{{ageGroup}}</div>\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n                      *ngIf=\"showAgeGroup==false\" />\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n                      *ngIf=\"showAgeGroup==true\" />\n                  </div>\n                </div>\n                <div *ngIf=\"showAgeGroup==true\" style=\"height: 100px; overflow: scroll\">\n                  <div *ngFor=\"let list of ageGroupList\" (click)=\"selectDropDown(list,'age')\">\n                    <div class=\"euro-text1\">{{list.title}}</div>\n                  </div>\n                </div>\n              </div>\n              <!-- AGE GROUP FIELD -->\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote('International')\">\n                <ion-button class=\"btn\">Continue</ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!------------- Investment Plan -------------------->\n    <!------------- Isave Plan -------------------->\n    <div\n      *ngIf=\"subProName=='iSave Plan' || subProName=='Maximum Investment Plan' || subProName=='Cornerstone Universal Plan' || subProName=='Children Education Fund'\">\n      <div class=\"htext\" style=\"margin-bottom: 10px\">\n        <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\n      </div>\n      <div class=\"htext\" style=\"color: black; font-size: 18px\">\n        Your Details\n      </div>\n      <div class=\"label\">Title<span style=\"color: #a8b400\">*</span></div>\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\n          <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showTitle==false\" />\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showTitle==true\" />\n          </div>\n        </div>\n        <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\n          <div *ngFor=\"let list of isavetitle;let i=index\" (click)=\"selectTitle(list,i)\">\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n              {{list.title}}\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"label\">First Name <span style=\"color: #a8b400\">*</span></div>\n      <div class=\"inputfield\">\n        <div class=\"innerdropbox\">\n          <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\n          </ion-input>\n        </div>\n      </div>\n\n      <!-- LAST NAME FIELD -->\n      <div class=\"label\">Last Name <span style=\"color: #a8b400\">*</span></div>\n      <div class=\"inputfield\">\n        <div class=\"innerdropbox\">\n          <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n          </ion-input>\n        </div>\n      </div>\n\n      <!-- EMAIL FIELD -->\n      <div class=\"label\">\n        Email Address<span style=\"color: #a8b400\">*</span>\n      </div>\n      <div class=\"inputfield\">\n        <div class=\"innerdropbox\">\n          <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\n            class=\"in-text\"></ion-input>\n        </div>\n      </div>\n\n      <!-- PHONE NUMBER FIELD -->\n      <div class=\"label\">Phone Number<span style=\"color: #a8b400\">*</span></div>\n      <div class=\"inputfield\">\n        <div class=\"innerdropbox\">\n          <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\n            class=\"in-text\"></ion-input>\n        </div>\n      </div>\n\n      <div class=\"label\">\n        Payment Frequency<span style=\"color: #a8b400\">*</span>\n      </div>\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openpaymentfrequency()\">\n          <div class=\"euro-text\" style=\"width: 100%\">{{Pfrequency}}</div>\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n              *ngIf=\"showpaymentfrequency==false\" />\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\n              *ngIf=\"showpaymentfrequency==true\" />\n          </div>\n        </div>\n        <div *ngIf=\"showpaymentfrequency==true\">\n          <div *ngFor=\"let list of Paymentfrequency;let i=index;\" (click)=\"selectpaymentfrequency(list,i)\">\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n              {{list.title}}\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Monthly Investment FIELD -->\n      <div *ngIf=\"Pfrequency!='Please Select'\">\n        <div class=\"label\">\n          <span *ngIf=\"Pfrequency=='Monthly'\">Monthly Investment</span>\n          <span *ngIf=\"Pfrequency=='Quarterly'\">Quarterly Investment</span>\n          <span *ngIf=\"Pfrequency=='Half-yearly'\">Half-yearly Investment</span>\n          <span *ngIf=\"Pfrequency=='Yearly'\">Yearly Investment</span>\n          <span style=\"color: #a8b400\">*</span>\n        </div>\n        <div class=\"inputfield\">\n          <div class=\"innerdropbox\">\n            <ion-input [(ngModel)]=\"monthlyinvestment\" type=\"text\" placeholder=\"\" class=\"in-text\">\n            </ion-input>\n          </div>\n        </div>\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Monthly'\">\n          (Minimum 5000 per month)\n        </p>\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Quarterly'\">\n          (Minimum 15000 per quarter)\n        </p>\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Half-yearly'\">\n          (Minimum 30000 per half year)\n        </p>\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Yearly'\">\n          (Minimum 60000 per year)\n        </p>\n      </div>\n\n      <!-- Duration -->\n      <div class=\"label\">Duration <span style=\"color: #a8b400\">*</span></div>\n      <div class=\"inputfield\">\n        <div class=\"innerdropbox\">\n          <ion-input [(ngModel)]=\"duration\" style=\"height: 48px\" type=\"number\" placeholder=\"2 years\"\n            class=\"in-textnochange\" readonly>\n          </ion-input>\n        </div>\n      </div>\n\n      <!-------- TAble data ------------->\n      <div class=\"col-sm-8 table-responsive\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th colspan=\"6\" class=\"text-01\">\n                <strong>Life Table diagram</strong>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>Sum Assured (NGN)</strong></td>\n              <td>100,000</td>\n              <td>300,000</td>\n              <td>500,000</td>\n              <td>700,000</td>\n              <td>1,000,000</td>\n            </tr>\n            <tr class=\"active\">\n              <td><strong>Premium(2years) NGN</strong></td>\n              <td>2,000</td>\n              <td>6,000</td>\n              <td>10,000</td>\n              <td>14,000</td>\n              <td>20,000</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!---------------- Sum Assured ----------------->\n      <div class=\"label\">Sum Assured <span style=\"color: #a8b400\">*</span></div>\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"opensumassured()\">\n          <div class=\"euro-text\" style=\"width: 100%\">{{sumassured }}</div>\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\n              *ngIf=\"showsumassured==false\" />\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showsumassured==true\" />\n          </div>\n        </div>\n        <div *ngIf=\"showsumassured==true\" style=\"height: 100px; overflow: scroll\">\n          <div *ngFor=\"let list of sumassuredarray;let i=index;\" (click)=\"selectsumassured(list,i)\">\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n              {{list.value}}\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Life Cover Premium -->\n      <div class=\"label\">\n        Life Cover Premium <span style=\"color: #a8b400\">*</span>\n      </div>\n      <p style=\"color: #a8b400; margin: 5px 5px 0px 5px; font-size: 13px\">\n        Minimum Amount 2,000 & Maximum Amount 20,000\n      </p>\n      <div class=\"inputfield\">\n        <div class=\"innerdropbox\">\n          <ion-input [(ngModel)]=\"Premium\" style=\"height: 48px\" type=\"number\" placeholder=\"Life Cover Premium\"\n            class=\"in-textnochange\" readonly>\n          </ion-input>\n        </div>\n      </div>\n    </div>\n\n    <!-------------------------------------------->\n    <!-- <div *ngIf=\"requestsType=='InvestmentPlan'\">\n      <ion-row style=\"margin-top:5%;\">\n        <ion-col size=\"6\">\n          <div class=\"box\" [class.active]=\"box=='checked'\" (click)=\"changed()\">\n\n            <div class=\"imgdiv\">\n\n              <img src=\"assets/images/all.svg\" height=\"70\" *ngIf=\"box=='unchecked'\">\n              <img src=\"assets/images/tick-all.svg\" height=\"70\" *ngIf=\"box=='checked'\">\n              <div class=\"itext\">All</div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"box\">\n\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/saveplan.svg\" height=\"70\">\n              <div class=\"itext\">iSave Plan</div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:5%;\">\n        <ion-col size=\"6\">\n          <div class=\"box\">\n\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/family2.svg\" height=\"70\">\n              <div class=\"itext\">Maximum Investment Plan</div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"box\">\n\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cornerstone.svg\" height=\"70\">\n              <div class=\"itext\">Cornerstone Universal Plan</div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:5%;\">\n        <ion-col size=\"3\">\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <div class=\"box\">\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/fullfamily.svg\" height=\"70\">\n              <div class=\"itext\">Children Education Plan</div>\n            </div>\n          </div>\n\n\n        </ion-col>\n\n        <ion-col size=\"3\">\n        </ion-col>\n\n      </ion-row>\n      <div style=\"text-align:center;margin-top: 8%;\">\n        <ion-button class=\"btn1\">Account Statement</ion-button>\n      </div>\n    </div> -->\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_mypolicies_mypolicies_module_ts.js.map