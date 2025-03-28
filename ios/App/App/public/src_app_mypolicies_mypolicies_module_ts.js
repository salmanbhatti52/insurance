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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mypolicies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mypolicies.page.html?ngResource */ 40551);
/* harmony import */ var _mypolicies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mypolicies.page.scss?ngResource */ 85866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);



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
        this.tourStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
        this.tourEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
        this.dob = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
        this.otheName = '';
        this.showPickerStartDate = false;
        this.showPickerEndDate = false;
        this.showPickerEndDatedob = false;
        this.ageGroup = 'Age Next Birthday';
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
        // let data = 'myData={"vehicle_class":"' +
        //   "Cars/Sedan/SUV" +
        //   '","product_name":"' +
        //   "Third Party" +
        //   '","verify_token":"' +
        //   localStorage.getItem('token') +
        //   '","method":"get_motor_price"}'
        // this.api.insertData(data).subscribe(
        //   (data: any) => {
        //     console.log('data response for products----', data);
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // );
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
        console.log('value---------', value);
        console.log('type---------', type);
        const startDate = moment__WEBPACK_IMPORTED_MODULE_3__(value); // Example date
        // Get the current date
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_3__();
        // Calculate the difference in years
        const yearsDifference = currentDate.diff(startDate, 'years');
        console.log(`Difference in years================: ${yearsDifference}`);
        this.ageGroup = yearsDifference + 1;
        if (type == 'start') {
            this.tourStartDate = value;
            console.log('this.tourStartDate ----', this.tourStartDate);
            this.showPickerStartDate = false;
        }
        else if (type == 'dob') {
            this.dob = value;
            console.log('this.tourEndDate ----', this.tourEndDate);
            this.showPickerEndDatedob = false;
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
        else if (this.ageGroup < 18) {
            response.message = 'Your age must be 18 or above for this products!';
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
                        '", "date_of_birth":"' +
                        this.dob +
                        '","verify_token":"' +
                        localStorage.getItem('token') +
                        '","method":"save_product_quote"}';
                localStorage.setItem('policy_birthday_date', this.dob);
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
MypoliciesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.thirdParty-wrapper {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n  margin-left: 2%;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.in-textnochange {\n  cursor: not-allowed;\n  --padding-start: 7%;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table-responsive {\n  min-height: 0.01%;\n  overflow-x: auto;\n  padding: 0px 3px;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #000000;\n  font-size: 10px;\n}\n\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #A8B400;\n  font-size: 14px;\n}\n\ntr td:first-child {\n  font-size: 12px;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cG9saWNpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQVNBO0VBQ0kseUJBQUE7QUFOSjs7QUFTQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBTko7O0FBU0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQU5KOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFQSjs7QUFpQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWlCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWlCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFkSjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWRKOztBQWlCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFkSjs7QUFpQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWlCQTtFQUNJLDRCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFpQkE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFkSjs7QUFrQkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBa0JBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBZko7O0FBa0JBO0VBR0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBakJKOztBQXFCQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFsQko7O0FBcUJBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbEJKOztBQXFCQTtFQUNJLFNBQUE7QUFsQko7O0FBcUJBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQWxCSjs7QUFxQkE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBbEJKOztBQXFCQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFsQko7O0FBcUJBO0VBQ0ksZUFBQTtBQWxCSjs7QUFxQkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsNENBQUE7RUFsQk47QUFDRiIsImZpbGUiOiJteXBvbGljaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDAlIGF1dG8gNSU7XG59XG5cbi5zZWdtZW50MSB7XG4gICAgcGFkZGluZzogNXB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5zYnRuIHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAtLW1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWNvbG9yOiAjODU4NThBO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59XG5cbi5odGV4dDEge1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucjEge1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnIyIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLmNmbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jZmxleDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMS41JTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQxIHtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jc3BhbiB7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZXh0MyB7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgO1xufVxuXG4udGV4dDQge1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQ1IHtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmltZ2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZHRleHQge1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnRuZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICAgIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgd2lkdGg6IDIwM3B4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuLml0ZXh0IHtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi8vIC50aWNraW1ne1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHJpZ2h0OiAxMHB4O1xuLy8gICB0b3A6IDEwcHg7XG4vLyB9XG4uYWN0aXZlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xufVxuXG4uYnRuMSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB3aWR0aDogMjczcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3RpdmVwcm9kdWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY5O1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLVRoaXJkIFBhcnkgQ1NTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4udGhpcmRQYXJ0eS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi8vIC50aXRsZXtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGNvbG9yOiAjMUEyMDZEO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuLmh0ZXh0IHtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uZHJvcGJveCB7XG4gICAgbWFyZ2luOiA0JSAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTMuNDFweCAxNXB4O1xufVxuXG4uaW5uZXJkcm9wYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZXVyby10ZXh0IHtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV1cm8tdGV4dDEge1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24taW5wdXQge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5pbnB1dGZpZWxkIHtcbiAgICBtYXJnaW46IDQlIDAlO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmluLXRleHQge1xuICAgIC0tY29sb3I6ICM1RDVENUQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDclO1xuICAgIC0tcGFkZGluZy10b3A6IDUlO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDUlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XG59XG5cbi5pbi10ZXh0bm9jaGFuZ2Uge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbn1cblxuLmJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pdGVtLXBpY2tlciB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICAvLyBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG1pbi1oZWlnaHQ6IC4wMSU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlcjogMDtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxudGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG50ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZG9uZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iXX0= */";

/***/ }),

/***/ 40551:
/*!************************************************************!*\
  !*** ./src/app/mypolicies/mypolicies.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row style=\"display: flex; align-items: center\">\n            <ion-col size=\"2\" style=\"padding-left: 25px\">\n                <div style=\"width: 100%\">\n                    <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\n                </div>\n\n                <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\">Insurance Quote</div>\n            </ion-col>\n            <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\" *ngIf=\"requestsType=='PurchasePolicies'\">\n                <img src=\"assets/images/info.png\" (click)=\"goto()\" />\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\">\n        <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\n      <ion-segment-button mode=\"ios\" value=\"PurchasePolicies\" class=\"sbtn\">\n        <ion-label>General Bussines</ion-label>\n      </ion-segment-button>\n      <ion-segment-button checked mode=\"ios\" value=\"InvestmentPlan\" class=\"sbtn\">\n        <ion-label>Life Insurance Plan</ion-label>\n      </ion-segment-button>\n    </ion-segment> -->\n\n        <!------------- Purchase Policies -------------------->\n        <div>\n            <!-------------- third party discription ------------------->\n            <div *ngIf=\"subProName=='Third Party'\">\n                <div class=\"thirdParty-wrapper\">\n                    <div class=\"htext\" style=\"color: black; font-size: 18px\">\n                        Please provide your details below to get your quote\n                    </div>\n                    <div class=\"flex-cls\">\n\n                        <div style=\"width: 80%; margin: 0% auto\">\n                            <div class=\"label\">\n                                Vehicle Class <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\" style=\"position: relative\">\n                                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicle==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicle==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vechilenewarray; let i=index\" (click)=\"selectVehicleCls(list,i)\">\n                                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                            {{list.name}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"label\">\n                                Vehicle Make <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleMakeVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\n                                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                            {{list.manufacturer}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleModelVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleModel==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleModel==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\n                                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                            {{list.model}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"label\">\n                                Policyholder Type <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{policyhldrVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPolicyholder==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPolicyholder==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showPolicyholder==true\">\n                                    <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                                        <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"policyhldrVal=='Private'\">\n                                <div class=\"label\">First Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"policyhldrVal=='Private'\">\n                                <div class=\"label\">Last Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                                        </ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"policyhldrVal=='Corporate'\">\n                                <div class=\"label\">Company Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"label\">\n                                Email Address<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n\n                            <div class=\"label\">\n                                Phone Number <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n                            <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                                <ion-button class=\"btn\">Continue</ion-button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- ------------Enhanced-comprehensive----------------------- -->\n            <div *ngIf=\"subProName=='Enhanced Comprehensive'\">\n                <div class=\"thirdParty-wrapper\">\n                    <div class=\"htext\" style=\"margin-bottom: 10px\">\n                        <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\n                    </div>\n                    <div class=\"htext\" style=\"color: black; font-size: 18px\">\n                        Your Details\n                    </div>\n                    <div class=\"flex-cls\">\n                        <div style=\"width: 80%; margin: 0% auto\">\n                            <div class=\"label\">\n                                Vehicle Class <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicle==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicle==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of EnchancednewClasses;let i=index\" (click)=\"selectVehicleCls(list,i)\">\n                                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                            {{list.name}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- second form ---------------------------->\n                            <div class=\"label\">\n                                Vehicle Make <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleMakeVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\n                                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                            {{list.manufacturer}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleModelVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleModel==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleModel==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\n                                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                            {{list.model}}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!----------- fourth form ---------------------------->\n                            <div class=\"label\">\n                                Policyholder Type <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{policyhldrVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPolicyholder==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPolicyholder==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showPolicyholder==true\">\n                                    <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                                        <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div *ngIf=\"policyhldrVal=='Private'\">\n                                <div class=\"label\">First Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div *ngIf=\"policyhldrVal=='Private'\">\n                                <div class=\"label\">Last Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                                        </ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div *ngIf=\"policyhldrVal=='Corporate'\">\n                                <div class=\"label\">Company Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div class=\"label\">\n                                Email Address<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n                            <!----------- sixth form ---------------------------->\n                            <div class=\"label\">\n                                Phone Number <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n                            <!----------- sixth form ---------------------------->\n                            <div class=\"label\">\n                                Value of Vehicle <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\n                                    </ion-input>\n                                </div>\n                            </div>\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Flood Extension <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{floodExtVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showFloodExt==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showFloodExt==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showFloodExt==true\">\n                                    <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\n                                        <div class=\"euro-text1\">{{list.floodExt}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Excess Buy Back <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{excessBuyBackVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showExcessBuyBack==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showExcessBuyBack==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showExcessBuyBack==true\">\n                                    <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\n                                        <div class=\"euro-text1\">{{list.excessByBack}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Would you want Vehicle Tracking?\n                                <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleTrackingVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleTracking==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleTracking==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicleTracking==true\">\n                                    <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\n                                        <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- ---------------------------------------------------------------- -->\n                            <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                                <ion-button class=\"btn\">Continue</ion-button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ------------Auto Variants----------------------- -->\n            <div *ngIf=\"subProName=='Auto Variants'\">\n                <div class=\"thirdParty-wrapper\">\n                    <div class=\"htext\" style=\"margin-bottom: 10px\">\n                        <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" /> Auto Variants\n                    </div>\n                    <div class=\"htext\" style=\"color: black; font-size: 18px\">\n                        Your Details\n                    </div>\n                    <div class=\"flex-cls\">\n                        <div style=\"width: 80%; margin: 0% auto\">\n                            <div class=\"label\">\n                                Auto Plan of Choice <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openAutoPlanList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{autoPlanVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPlan==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPlan==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showPlan==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of autoPlansOfChoice\" (click)=\"selectAutoPlan(list)\">\n                                        <div class=\"euro-text1\">{{list.autoPlan}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- second form ---------------------------->\n                            <div class=\"label\">\n                                Vehicle Make <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleMakeVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vehicleMake\" (click)=\"selectVehicleMaker(list)\">\n                                        <div class=\"euro-text1\">{{list.manufacturer}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleModelVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleModel==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleModel==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of vehicleModel\" (click)=\"selectVehicleModel(list)\">\n                                        <div class=\"euro-text1\">{{list.model}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fourth form ---------------------------->\n                            <div class=\"label\">\n                                Policyholder Type <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{policyhldrVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPolicyholder==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPolicyholder==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showPolicyholder==true\">\n                                    <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                                        <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div *ngIf=\"policyhldrVal=='Private'\">\n                                <div class=\"label\">First Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div *ngIf=\"policyhldrVal=='Private'\">\n                                <div class=\"label\">Last Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                                        </ion-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- fifth form ---------------------------->\n                            <div *ngIf=\"policyhldrVal=='Corporate'\">\n                                <div class=\"label\">Company Name</div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!----------- fifth form ---------------------------->\n                            <div class=\"label\">\n                                Email Address<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n\n                            <!----------- sixth form ---------------------------->\n                            <div class=\"label\">\n                                Phone Number <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n                            <!----------- sixth form ---------------------------->\n                            <div class=\"label\">\n                                Value of Vehicle <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\n                                    </ion-input>\n                                </div>\n                            </div>\n\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Flood Extension <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{floodExtVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showFloodExt==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showFloodExt==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showFloodExt==true\">\n                                    <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\n                                        <div class=\"euro-text1\">{{list.floodExt}}</div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Excess Buy Back <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{excessBuyBackVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showExcessBuyBack==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showExcessBuyBack==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showExcessBuyBack==true\">\n                                    <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\n                                        <div class=\"euro-text1\">{{list.excessByBack}}</div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Would you want Vehicle Tracking?\n                                <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{vehicleTrackingVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleTracking==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleTracking==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showVehicleTracking==true\">\n                                    <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\n                                        <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!----------- seventh form ---------------------------->\n                            <div class=\"label\">\n                                Road Side Assistance <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openRoadSideAssistance()\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">\n                                        {{roadSideVal}}\n                                    </div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showRoadSide==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showRoadSide==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showRoadSide==true\">\n                                    <div *ngFor=\"let list of roadSideAssistance\" (click)=\"selectRoadSideAssistance(list)\">\n                                        <div class=\"euro-text1\">{{list.roadSide}}</div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- ---------------------------------------------------------------- -->\n                            <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                                <ion-button class=\"btn\">Continue</ion-button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ------------Enhanced-comprehensive----------------------- -->\n            <div *ngIf=\"subProName=='Worldwide TRAVELLER' || subProName== 'Worldwide PEARL' || subProName== 'Worldwide ECONOMY' || subProName=='Travel Safeguard - Air Transport' || subProName=='Pilgrimage BASIC' || subProName=='Pilgrimage PLUS' || subProName=='Pilgrimage EXTRA' || subProName=='Student Plan' || subProName=='Europe / Schengen' || subProName=='Travel Safeguard - Road Transport' || subProName=='Travel Care Premier' || subProName=='Travel Care Visa'\">\n                <div class=\"thirdParty-wrapper\">\n                    <div class=\"htext\" style=\"margin-bottom: 10px\">\n                        <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\n                    </div>\n                    <div class=\"htext\" style=\"color: black; font-size: 18px\">\n                        Your Details\n                    </div>\n                    <div class=\"flex-cls\">\n                        <div style=\"width: 80%; margin: 0% auto\">\n                            <!-- Title Field -->\n                            <div class=\"label\">\n                                Title<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\n                                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showTitle==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showTitle==true\" />\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of titleList\" (click)=\"selectDropDown(list,'title')\">\n                                        <div class=\"euro-text1\">{{list.title}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- Title Field -->\n\n                            <!-- FIRST NAME FIELD NAME -->\n                            <div class=\"label\">First Name</div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\n                                    </ion-input>\n                                </div>\n                            </div>\n                            <!-- FIRST NAME FIELD NAME -->\n                            <!-- LAST NAME FIELD -->\n                            <div class=\"label\">Last Name</div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                                    </ion-input>\n                                </div>\n                            </div>\n                            <!-- LAST NAME FIELD -->\n                            <!-- OTHER NAME FIELD -->\n                            <div class=\"label\">Other Name</div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"otheName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                                    </ion-input>\n                                </div>\n                            </div>\n                            <!-- OTHER NAME FIELD -->\n                            <!-- EMAIL FIELD -->\n                            <div class=\"label\">\n                                Email Address<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n                            <!-- EMAIL FIELD -->\n                            <!-- PHONE NUMBER FIELD -->\n                            <div class=\"label\">\n                                Phone Number<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"inputfield\">\n                                <div class=\"innerdropbox\">\n                                    <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n                                </div>\n                            </div>\n                            <!-- PHONE NUMBER FIELD -->\n                            <!-- Start Date  -->\n                            <div class=\"label\">\n                                Start date<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"item-picker\" style=\"\n                  margin: 4% 0%;\n                  --background: #e8e8e7;\n                  height: 48px;\n                  padding: 13px 15px;\n                \" (click)=\"showPickerStartDate = !showPickerStartDate\">\n                                <div style=\"display: flex; align-items: center\">\n                                    <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourStartDate }}</ion-text>\n                                </div>\n                            </div>\n                            <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerStartDate\" #datetime [value]=\"tourStartDate\" size=\"cover\" (ionChange)=\"dateChanged(datetime.value,'start')\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerStartDate=false\"></ion-datetime>\n                            <!-- Start Date  -->\n\n                            <!-- End Date  -->\n                            <div class=\"label\">\n                                End date <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"item-picker\" style=\"\n                  margin: 4% 0%;\n                  --background: #e8e8e7;\n                  height: 48px;\n                  padding: 13px 15px;\n                \" (click)=\"showPickerEndDate = !showPickerEndDate\">\n                                <div style=\"display: flex; align-items: center\">\n                                    <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourEndDate }}</ion-text>\n                                </div>\n                            </div>\n                            <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\" (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\n                            <!-- End Date  -->\n\n\n\n\n\n                            <!-- DOB  -->\n                            <div class=\"label\">\n                                DOB <span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"item-picker\" style=\"\n                    margin: 4% 0%;\n                    --background: #e8e8e7;\n                    height: 48px;\n                    padding: 13px 15px;\n                  \" (click)=\"showPickerEndDatedob = !showPickerEndDatedob\">\n                                <div style=\"display: flex; align-items: center\">\n                                    <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ dob }}</ion-text>\n                                </div>\n                            </div>\n                            <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerEndDatedob\" #datetime [value]=\"dob\" size=\"cover\" (ionChange)=\"dateChanged(datetime.value,'dob')\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\n                            <!-- DOB  -->\n\n                            <!-- AGE GROUP FIELD -->\n                            <div class=\"label\">\n                                Age Next Birthday<span style=\"color: #a8b400\">*</span>\n                            </div>\n                            <div class=\"dropbox\">\n                                <div class=\"innerdropbox\" (click)=\"openDropDwon('age')\">\n                                    <div class=\"euro-text\" style=\"width: 100%\">{{ageGroup}}</div>\n                                    <!-- <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showAgeGroup==false\" />\n                                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showAgeGroup==true\" />\n                                    </div> -->\n                                </div>\n                                <!-- <div *ngIf=\"showAgeGroup==true\" style=\"height: 100px; overflow: scroll\">\n                                    <div *ngFor=\"let list of ageGroupList\" (click)=\"selectDropDown(list,'age')\">\n                                        <div class=\"euro-text1\">{{list.title}}</div>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <!-- AGE GROUP FIELD -->\n                            <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote('International')\">\n                                <ion-button class=\"btn\">Continue</ion-button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!------------- Investment Plan -------------------->\n        <!------------- Isave Plan -------------------->\n        <div *ngIf=\"subProName=='iSave Plan' || subProName=='Maximum Investment Plan' || subProName=='Cornerstone Universal Plan' || subProName=='Children Education Fund'\">\n            <div class=\"htext\" style=\"margin-bottom: 10px\">\n                <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\n            </div>\n            <div class=\"htext\" style=\"color: black; font-size: 18px\">\n                Your Details\n            </div>\n            <div class=\"label\">Title<span style=\"color: #a8b400\">*</span></div>\n            <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\n                    <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\n                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showTitle==false\" />\n                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showTitle==true\" />\n                    </div>\n                </div>\n                <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\n                    <div *ngFor=\"let list of isavetitle;let i=index\" (click)=\"selectTitle(list,i)\">\n                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                            {{list.title}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"label\">First Name <span style=\"color: #a8b400\">*</span></div>\n            <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\n                    </ion-input>\n                </div>\n            </div>\n\n            <!-- LAST NAME FIELD -->\n            <div class=\"label\">Last Name <span style=\"color: #a8b400\">*</span></div>\n            <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                    </ion-input>\n                </div>\n            </div>\n\n            <!-- EMAIL FIELD -->\n            <div class=\"label\">\n                Email Address<span style=\"color: #a8b400\">*</span>\n            </div>\n            <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n                </div>\n            </div>\n\n            <!-- PHONE NUMBER FIELD -->\n            <div class=\"label\">Phone Number<span style=\"color: #a8b400\">*</span></div>\n            <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n                </div>\n            </div>\n\n            <div class=\"label\">\n                Payment Frequency<span style=\"color: #a8b400\">*</span>\n            </div>\n            <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"openpaymentfrequency()\">\n                    <div class=\"euro-text\" style=\"width: 100%\">{{Pfrequency}}</div>\n                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showpaymentfrequency==false\" />\n                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showpaymentfrequency==true\" />\n                    </div>\n                </div>\n                <div *ngIf=\"showpaymentfrequency==true\">\n                    <div *ngFor=\"let list of Paymentfrequency;let i=index;\" (click)=\"selectpaymentfrequency(list,i)\">\n                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                            {{list.title}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Monthly Investment FIELD -->\n            <div *ngIf=\"Pfrequency!='Please Select'\">\n                <div class=\"label\">\n                    <span *ngIf=\"Pfrequency=='Monthly'\">Monthly Investment</span>\n                    <span *ngIf=\"Pfrequency=='Quarterly'\">Quarterly Investment</span>\n                    <span *ngIf=\"Pfrequency=='Half-yearly'\">Half-yearly Investment</span>\n                    <span *ngIf=\"Pfrequency=='Yearly'\">Yearly Investment</span>\n                    <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"monthlyinvestment\" type=\"text\" placeholder=\"\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Monthly'\">\n                    (Minimum 5000 per month)\n                </p>\n                <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Quarterly'\">\n                    (Minimum 15000 per quarter)\n                </p>\n                <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Half-yearly'\">\n                    (Minimum 30000 per half year)\n                </p>\n                <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Yearly'\">\n                    (Minimum 60000 per year)\n                </p>\n            </div>\n\n            <!-- Duration -->\n            <div class=\"label\">Duration <span style=\"color: #a8b400\">*</span></div>\n            <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"duration\" style=\"height: 48px\" type=\"number\" placeholder=\"2 years\" class=\"in-textnochange\" readonly>\n                    </ion-input>\n                </div>\n            </div>\n\n            <!-------- TAble data ------------->\n            <div class=\"col-sm-8 table-responsive\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th colspan=\"6\" class=\"text-01\">\n                                <strong>Life Table diagram</strong>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Sum Assured (NGN)</strong></td>\n                            <td>100,000</td>\n                            <td>300,000</td>\n                            <td>500,000</td>\n                            <td>700,000</td>\n                            <td>1,000,000</td>\n                        </tr>\n                        <tr class=\"active\">\n                            <td><strong>Premium(2years) NGN</strong></td>\n                            <td>2,000</td>\n                            <td>6,000</td>\n                            <td>10,000</td>\n                            <td>14,000</td>\n                            <td>20,000</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <!---------------- Sum Assured ----------------->\n            <div class=\"label\">Sum Assured <span style=\"color: #a8b400\">*</span></div>\n            <div class=\"dropbox\">\n                <div class=\"innerdropbox\" (click)=\"opensumassured()\">\n                    <div class=\"euro-text\" style=\"width: 100%\">{{sumassured }}</div>\n                    <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showsumassured==false\" />\n                        <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showsumassured==true\" />\n                    </div>\n                </div>\n                <div *ngIf=\"showsumassured==true\" style=\"height: 100px; overflow: scroll\">\n                    <div *ngFor=\"let list of sumassuredarray;let i=index;\" (click)=\"selectsumassured(list,i)\">\n                        <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                            {{list.value}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Life Cover Premium -->\n            <div class=\"label\">\n                Life Cover Premium <span style=\"color: #a8b400\">*</span>\n            </div>\n            <p style=\"color: #a8b400; margin: 5px 5px 0px 5px; font-size: 13px\">\n                Minimum Amount 2,000 & Maximum Amount 20,000\n            </p>\n            <div class=\"inputfield\">\n                <div class=\"innerdropbox\">\n                    <ion-input [(ngModel)]=\"Premium\" style=\"height: 48px\" type=\"number\" placeholder=\"Life Cover Premium\" class=\"in-textnochange\" readonly>\n                    </ion-input>\n                </div>\n            </div>\n        </div>\n\n        <!-------------------------------------------->\n        <!-- <div *ngIf=\"requestsType=='InvestmentPlan'\">\n      <ion-row style=\"margin-top:5%;\">\n        <ion-col size=\"6\">\n          <div class=\"box\" [class.active]=\"box=='checked'\" (click)=\"changed()\">\n\n            <div class=\"imgdiv\">\n\n              <img src=\"assets/images/all.svg\" height=\"70\" *ngIf=\"box=='unchecked'\">\n              <img src=\"assets/images/tick-all.svg\" height=\"70\" *ngIf=\"box=='checked'\">\n              <div class=\"itext\">All</div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"box\">\n\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/saveplan.svg\" height=\"70\">\n              <div class=\"itext\">iSave Plan</div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:5%;\">\n        <ion-col size=\"6\">\n          <div class=\"box\">\n\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/family2.svg\" height=\"70\">\n              <div class=\"itext\">Maximum Investment Plan</div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"box\">\n\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/cornerstone.svg\" height=\"70\">\n              <div class=\"itext\">Cornerstone Universal Plan</div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:5%;\">\n        <ion-col size=\"3\">\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <div class=\"box\">\n            <div class=\"imgdiv\">\n              <img src=\"assets/images/fullfamily.svg\" height=\"70\">\n              <div class=\"itext\">Children Education Plan</div>\n            </div>\n          </div>\n\n\n        </ion-col>\n\n        <ion-col size=\"3\">\n        </ion-col>\n\n      </ion-row>\n      <div style=\"text-align:center;margin-top: 8%;\">\n        <ion-button class=\"btn1\">Account Statement</ion-button>\n      </div>\n    </div> -->\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_mypolicies_mypolicies_module_ts.js.map