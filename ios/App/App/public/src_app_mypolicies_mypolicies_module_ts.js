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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.thirdParty-wrapper {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n  margin-left: 2%;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.in-textnochange {\n  cursor: not-allowed;\n  --padding-start: 7%;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table-responsive {\n  min-height: 0.01%;\n  overflow-x: auto;\n  padding: 0px 3px;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #000000;\n  font-size: 10px;\n}\n\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #A8B400;\n  font-size: 14px;\n}\n\ntr td:first-child {\n  font-size: 12px;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cG9saWNpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU5GOztBQWNBO0VBQ0UseUJBQUE7QUFYRjs7QUFjQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWEY7O0FBY0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQVhGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFYRjs7QUFxQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFuQkY7O0FBdUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXJCRjs7QUF3QkE7RUFDRSw0QkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFyQkY7O0FBd0JBO0VBR0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdkJGOztBQTJCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdkJGOztBQXlCQTtFQUNFLFNBQUE7QUF0QkY7O0FBd0JBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQXJCRjs7QUF1QkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcEJGOztBQXNCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsZUFBQTtBQWxCRjs7QUFvQkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsNENBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJteXBvbGljaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG8gNSU7XHJcbn1cclxuXHJcbi5zZWdtZW50MSB7XHJcbiAgcGFkZGluZzogNXB4IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuc2J0biB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICM4NTg1OEE7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4uaHRleHQxIHtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnIxIHtcclxuICBoZWlnaHQ6IDNweDtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5yMiB7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5jZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2ZsZXgxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmNzcGFuIHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRleHQzIHtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICA7XHJcbn1cclxuXHJcbi50ZXh0NCB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dDUge1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkdGV4dCB7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5idG5kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aWR0aDogMjAzcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG5cclxufVxyXG5cclxuLml0ZXh0IHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8vIC50aWNraW1ne1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICByaWdodDogMTBweDtcclxuLy8gICB0b3A6IDEwcHg7XHJcbi8vIH1cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcclxufVxyXG5cclxuLmJ0bjEge1xyXG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDI3M3B4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYWN0aXZlcHJvZHVjdHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNmY5O1xyXG4gIHBhZGRpbmc6NHB4IDBweDtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS1UaGlyZCBQYXJ5IENTUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4udGhpcmRQYXJ0eS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi8vIC50aXRsZXtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgICAgY29sb3I6ICMxQTIwNkQ7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG4uaHRleHQge1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5kcm9wYm94IHtcclxuICBtYXJnaW46IDQlIDAlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XHJcblxyXG59XHJcblxyXG4uaW5uZXJkcm9wYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLmV1cm8tdGV4dCB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG4uZXVyby10ZXh0MSB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG5cclxuLmlucHV0ZmllbGQge1xyXG4gIG1hcmdpbjogNCUgMCU7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uaW4tdGV4dCB7XHJcbiAgLS1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNyU7XHJcbiAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxufVxyXG4uaW4tdGV4dG5vY2hhbmdle1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5pdGVtLXBpY2tlciB7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xyXG5cclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgbWluLWhlaWdodDogLjAxJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweCAzcHg7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50ZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG50ciB0ZDpmaXJzdC1jaGlsZHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG5cclxufVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZG9uZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIl19 */";

/***/ }),

/***/ 40551:
/*!************************************************************!*\
  !*** ./src/app/mypolicies/mypolicies.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width: 100%\">\r\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Motor Insurance Quote</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\" *ngIf=\"requestsType=='PurchasePolicies'\">\r\n        <img src=\"assets/images/info.png\" (click)=\"goto()\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"PurchasePolicies\" class=\"sbtn\">\r\n        <ion-label>General Bussines</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"InvestmentPlan\" class=\"sbtn\">\r\n        <ion-label>Life Insurance Plan</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment> -->\r\n\r\n    <!------------- Purchase Policies -------------------->\r\n    <div>\r\n      <!-------------- third party discription ------------------->\r\n      <div *ngIf=\"subProName=='Third Party'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />Motor Third-party Insurance Quote\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Please provide your details below to get your quote\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <!-- <div>\r\n              <img src=\"assets/images/slider/1.svg\">\r\n            </div> -->\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <div class=\"label\">\r\n                Vehicle Class <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\" style=\"position: relative\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicle==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicle==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vechilenewarray; let i=index\" (click)=\"selectVehicleCls(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.name}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- second form ---------------------------->\r\n              <div class=\"label\">\r\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.manufacturer}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.model}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fourth form ---------------------------->\r\n              <div class=\"label\">\r\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{policyhldrVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPolicyholder==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPolicyholder==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPolicyholder==true\">\r\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">First Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">Last Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                    </ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n                <div class=\"label\">Company Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fifth form ---------------------------->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Phone Number <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- ---------------------------------------------------------------- -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ------------Enhanced-comprehensive----------------------- -->\r\n      <div *ngIf=\"subProName=='Enhanced Comprehensive'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Your Details\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <div class=\"label\">\r\n                Vehicle Class <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicle==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicle==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of EnchancednewClasses;let i=index\" (click)=\"selectVehicleCls(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.name}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- second form ---------------------------->\r\n              <div class=\"label\">\r\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.manufacturer}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.model}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fourth form ---------------------------->\r\n              <div class=\"label\">\r\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{policyhldrVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPolicyholder==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPolicyholder==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPolicyholder==true\">\r\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">First Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">Last Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                    </ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n                <div class=\"label\">Company Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Phone Number <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Value of Vehicle <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Flood Extension <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{floodExtVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showFloodExt==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showFloodExt==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showFloodExt==true\">\r\n                  <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\r\n                    <div class=\"euro-text1\">{{list.floodExt}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Excess Buy Back <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{excessBuyBackVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showExcessBuyBack==true\">\r\n                  <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\r\n                    <div class=\"euro-text1\">{{list.excessByBack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Would you want Vehicle Tracking?\r\n                <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleTrackingVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleTracking==true\">\r\n                  <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\r\n                    <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- ---------------------------------------------------------------- -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ------------Auto Variants----------------------- -->\r\n      <div *ngIf=\"subProName=='Auto Variants'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" /> Auto Variants\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Your Details\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <div class=\"label\">\r\n                Auto Plan of Choice <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openAutoPlanList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{autoPlanVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPlan==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPlan==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPlan==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of autoPlansOfChoice\" (click)=\"selectAutoPlan(list)\">\r\n                    <div class=\"euro-text1\">{{list.autoPlan}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- second form ---------------------------->\r\n              <div class=\"label\">\r\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleMake\" (click)=\"selectVehicleMaker(list)\">\r\n                    <div class=\"euro-text1\">{{list.manufacturer}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleModel\" (click)=\"selectVehicleModel(list)\">\r\n                    <div class=\"euro-text1\">{{list.model}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fourth form ---------------------------->\r\n              <div class=\"label\">\r\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{policyhldrVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPolicyholder==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPolicyholder==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPolicyholder==true\">\r\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">First Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">Last Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                    </ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n                <div class=\"label\">Company Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fifth form ---------------------------->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Phone Number <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Value of Vehicle <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Flood Extension <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{floodExtVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showFloodExt==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showFloodExt==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showFloodExt==true\">\r\n                  <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\r\n                    <div class=\"euro-text1\">{{list.floodExt}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Excess Buy Back <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{excessBuyBackVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showExcessBuyBack==true\">\r\n                  <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\r\n                    <div class=\"euro-text1\">{{list.excessByBack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Would you want Vehicle Tracking?\r\n                <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleTrackingVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleTracking==true\">\r\n                  <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\r\n                    <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Road Side Assistance <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openRoadSideAssistance()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{roadSideVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showRoadSide==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showRoadSide==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showRoadSide==true\">\r\n                  <div *ngFor=\"let list of roadSideAssistance\" (click)=\"selectRoadSideAssistance(list)\">\r\n                    <div class=\"euro-text1\">{{list.roadSide}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ---------------------------------------------------------------- -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ------------Enhanced-comprehensive----------------------- -->\r\n      <div\r\n        *ngIf=\"subProName=='Worldwide TRAVELLER' || subProName== 'Worldwide PEARL' || subProName== 'Worldwide ECONOMY' || subProName=='Travel Safeguard - Air Transport' || subProName=='Pilgrimage BASIC' || subProName=='Pilgrimage PLUS' || subProName=='Pilgrimage EXTRA' || subProName=='Student Plan' || subProName=='Europe / Schengen' || subProName=='Travel Safeguard - Road Transport' || subProName=='Travel Care Premier' || subProName=='Travel Care Visa'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Your Details\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <!-- Title Field -->\r\n              <div class=\"label\">\r\n                Title<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showTitle==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showTitle==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of titleList\" (click)=\"selectDropDown(list,'title')\">\r\n                    <div class=\"euro-text1\">{{list.title}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Title Field -->\r\n\r\n              <!-- FIRST NAME FIELD NAME -->\r\n              <div class=\"label\">First Name</div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- FIRST NAME FIELD NAME -->\r\n              <!-- LAST NAME FIELD -->\r\n              <div class=\"label\">Last Name</div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- LAST NAME FIELD -->\r\n              <!-- OTHER NAME FIELD -->\r\n              <div class=\"label\">Other Name</div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"otheName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- OTHER NAME FIELD -->\r\n              <!-- EMAIL FIELD -->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- EMAIL FIELD -->\r\n              <!-- PHONE NUMBER FIELD -->\r\n              <div class=\"label\">\r\n                Phone Number<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- PHONE NUMBER FIELD -->\r\n              <!-- Start Date  -->\r\n              <div class=\"label\">\r\n                Start date<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"item-picker\" style=\"\r\n                  margin: 4% 0%;\r\n                  --background: #e8e8e7;\r\n                  height: 48px;\r\n                  padding: 13px 15px;\r\n                \" (click)=\"showPickerStartDate = !showPickerStartDate\">\r\n                <div style=\"display: flex; align-items: center\">\r\n                  <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourStartDate }}</ion-text>\r\n                </div>\r\n              </div>\r\n              <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n                *ngIf=\"showPickerStartDate\" #datetime [value]=\"tourStartDate\" size=\"cover\"\r\n                (ionChange)=\"dateChanged(datetime.value,'start')\" showDefaultButtons=\"true\"\r\n                (ionCancel)=\"showPickerStartDate=false\"></ion-datetime>\r\n              <!-- Start Date  -->\r\n\r\n              <!-- End Date  -->\r\n              <div class=\"label\">\r\n                End date <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"item-picker\" style=\"\r\n                  margin: 4% 0%;\r\n                  --background: #e8e8e7;\r\n                  height: 48px;\r\n                  padding: 13px 15px;\r\n                \" (click)=\"showPickerEndDate = !showPickerEndDate\">\r\n                <div style=\"display: flex; align-items: center\">\r\n                  <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourEndDate }}</ion-text>\r\n                </div>\r\n              </div>\r\n              <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n                *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\"\r\n                (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\"\r\n                (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\r\n              <!-- End Date  -->\r\n              <!-- AGE GROUP FIELD -->\r\n              <div class=\"label\">\r\n                Age Next Birthday<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('age')\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">{{ageGroup}}</div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showAgeGroup==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showAgeGroup==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showAgeGroup==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of ageGroupList\" (click)=\"selectDropDown(list,'age')\">\r\n                    <div class=\"euro-text1\">{{list.title}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- AGE GROUP FIELD -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote('International')\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!------------- Investment Plan -------------------->\r\n    <!------------- Isave Plan -------------------->\r\n    <div\r\n      *ngIf=\"subProName=='iSave Plan' || subProName=='Maximum Investment Plan' || subProName=='Cornerstone Universal Plan' || subProName=='Children Education Fund'\">\r\n      <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n        <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\r\n      </div>\r\n      <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n        Your Details\r\n      </div>\r\n      <div class=\"label\">Title<span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showTitle==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showTitle==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\r\n          <div *ngFor=\"let list of isavetitle;let i=index\" (click)=\"selectTitle(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.title}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"label\">First Name <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- LAST NAME FIELD -->\r\n      <div class=\"label\">Last Name <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- EMAIL FIELD -->\r\n      <div class=\"label\">\r\n        Email Address<span style=\"color: #a8b400\">*</span>\r\n      </div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n            class=\"in-text\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- PHONE NUMBER FIELD -->\r\n      <div class=\"label\">Phone Number<span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n            class=\"in-text\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"label\">\r\n        Payment Frequency<span style=\"color: #a8b400\">*</span>\r\n      </div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openpaymentfrequency()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{Pfrequency}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n              *ngIf=\"showpaymentfrequency==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n              *ngIf=\"showpaymentfrequency==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showpaymentfrequency==true\">\r\n          <div *ngFor=\"let list of Paymentfrequency;let i=index;\" (click)=\"selectpaymentfrequency(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.title}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Monthly Investment FIELD -->\r\n      <div *ngIf=\"Pfrequency!='Please Select'\">\r\n        <div class=\"label\">\r\n          <span *ngIf=\"Pfrequency=='Monthly'\">Monthly Investment</span>\r\n          <span *ngIf=\"Pfrequency=='Quarterly'\">Quarterly Investment</span>\r\n          <span *ngIf=\"Pfrequency=='Half-yearly'\">Half-yearly Investment</span>\r\n          <span *ngIf=\"Pfrequency=='Yearly'\">Yearly Investment</span>\r\n          <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"monthlyinvestment\" type=\"text\" placeholder=\"\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Monthly'\">\r\n          (Minimum 5000 per month)\r\n        </p>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Quarterly'\">\r\n          (Minimum 15000 per quarter)\r\n        </p>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Half-yearly'\">\r\n          (Minimum 30000 per half year)\r\n        </p>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Yearly'\">\r\n          (Minimum 60000 per year)\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Duration -->\r\n      <div class=\"label\">Duration <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"duration\" style=\"height: 48px\" type=\"number\" placeholder=\"2 years\"\r\n            class=\"in-textnochange\" readonly>\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-------- TAble data ------------->\r\n      <div class=\"col-sm-8 table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"6\" class=\"text-01\">\r\n                <strong>Life Table diagram</strong>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td><strong>Sum Assured (NGN)</strong></td>\r\n              <td>100,000</td>\r\n              <td>300,000</td>\r\n              <td>500,000</td>\r\n              <td>700,000</td>\r\n              <td>1,000,000</td>\r\n            </tr>\r\n            <tr class=\"active\">\r\n              <td><strong>Premium(2years) NGN</strong></td>\r\n              <td>2,000</td>\r\n              <td>6,000</td>\r\n              <td>10,000</td>\r\n              <td>14,000</td>\r\n              <td>20,000</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!---------------- Sum Assured ----------------->\r\n      <div class=\"label\">Sum Assured <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"opensumassured()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{sumassured }}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n              *ngIf=\"showsumassured==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showsumassured==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showsumassured==true\" style=\"height: 100px; overflow: scroll\">\r\n          <div *ngFor=\"let list of sumassuredarray;let i=index;\" (click)=\"selectsumassured(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.value}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Life Cover Premium -->\r\n      <div class=\"label\">\r\n        Life Cover Premium <span style=\"color: #a8b400\">*</span>\r\n      </div>\r\n      <p style=\"color: #a8b400; margin: 5px 5px 0px 5px; font-size: 13px\">\r\n        Minimum Amount 2,000 & Maximum Amount 20,000\r\n      </p>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"Premium\" style=\"height: 48px\" type=\"number\" placeholder=\"Life Cover Premium\"\r\n            class=\"in-textnochange\" readonly>\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-------------------------------------------->\r\n    <!-- <div *ngIf=\"requestsType=='InvestmentPlan'\">\r\n      <ion-row style=\"margin-top:5%;\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\" [class.active]=\"box=='checked'\" (click)=\"changed()\">\r\n\r\n            <div class=\"imgdiv\">\r\n\r\n              <img src=\"assets/images/all.svg\" height=\"70\" *ngIf=\"box=='unchecked'\">\r\n              <img src=\"assets/images/tick-all.svg\" height=\"70\" *ngIf=\"box=='checked'\">\r\n              <div class=\"itext\">All</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/saveplan.svg\" height=\"70\">\r\n              <div class=\"itext\">iSave Plan</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:5%;\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/family2.svg\" height=\"70\">\r\n              <div class=\"itext\">Maximum Investment Plan</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cornerstone.svg\" height=\"70\">\r\n              <div class=\"itext\">Cornerstone Universal Plan</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:5%;\">\r\n        <ion-col size=\"3\">\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/fullfamily.svg\" height=\"70\">\r\n              <div class=\"itext\">Children Education Plan</div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\">\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <div style=\"text-align:center;margin-top: 8%;\">\r\n        <ion-button class=\"btn1\">Account Statement</ion-button>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_mypolicies_mypolicies_module_ts.js.map