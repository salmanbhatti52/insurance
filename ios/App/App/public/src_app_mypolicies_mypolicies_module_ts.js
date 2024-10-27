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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.htext1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.r1 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 45px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.r2 {\n  height: 3px;\n  border-width: 0;\n  box-sizing: content-box;\n  width: 65px;\n  background: #A8B400;\n  margin-top: 3px;\n}\n\n.main {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.cflex {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n}\n\n.cflex1 {\n  display: flex;\n  width: 100%;\n  margin: 5% auto;\n  align-items: center;\n}\n\n.text {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  padding-left: 1.5%;\n  width: 100%;\n}\n\n.text1 {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n}\n\n.cspan {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text3 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.text4 {\n  color: #5D5D5D;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  width: 100%;\n}\n\n.text5 {\n  color: #1A206D;\n  font-size: 12px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\n.headtext {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.btndiv {\n  text-align: center;\n}\n\n.btn {\n  --background: #A8B400;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  width: 203px;\n  height: 48px;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.box {\n  position: relative;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n\n.itext {\n  color: #5D5D5D;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n.active {\n  border: 1px solid #A8B400;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 273px;\n  height: 48px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: Bliss Pro;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.thirdParty-wrapper {\n  width: 100%;\n  margin: 5% auto;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n  margin-left: 2%;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.in-textnochange {\n  cursor: not-allowed;\n  --padding-start: 7%;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table-responsive {\n  min-height: 0.01%;\n  overflow-x: auto;\n  padding: 0px 3px;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #000000;\n  font-size: 10px;\n}\n\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  color: #A8B400;\n  font-size: 14px;\n}\n\ntr td:first-child {\n  font-size: 12px;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cG9saWNpZXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxcbXlwb2xpY2llc1xcbXlwb2xpY2llcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNKRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTkY7O0FEY0E7RUFDRSx5QkFBQTtBQ1hGOztBRGNBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNYRjs7QURjQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDWEY7O0FEY0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRHFCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ2xCRjs7QURzQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ25CRjs7QUR1QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDcEJGOztBRHdCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDckJGOztBRHdCQTtFQUNFLDRCQUFBO0FDckJGOztBRHdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDckJGOztBRHdCQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDckJGOztBRHdCQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ3JCRjs7QUR3QkE7RUFHRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN2QkY7O0FEMkJBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7O0FEeUJBO0VBQ0UsU0FBQTtBQ3RCRjs7QUR3QkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDckJGOztBRHVCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ25CRjs7QURxQkE7RUFDRSxlQUFBO0FDbEJGOztBRG9CQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSw0Q0FBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6Im15cG9saWNpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMCUgYXV0byA1JTtcclxufVxyXG5cclxuLnNlZ21lbnQxIHtcclxuICBwYWRkaW5nOiA1cHggM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5zYnRuIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogIzg1ODU4QTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5odGV4dDEge1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ucjEge1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogNDVweDtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnIyIHtcclxuICBoZWlnaHQ6IDNweDtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLmNmbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jZmxleDEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMS41JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQxIHtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uY3NwYW4ge1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udGV4dDMge1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIDtcclxufVxyXG5cclxuLnRleHQ0IHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0NSB7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWdkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWR0ZXh0IHtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJ0bmRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdpZHRoOiAyMDNweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4uaXRleHQge1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLy8gLnRpY2tpbWd7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHJpZ2h0OiAxMHB4O1xyXG4vLyAgIHRvcDogMTBweDtcclxuLy8gfVxyXG4uYWN0aXZlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQThCNDAwO1xyXG59XHJcblxyXG4uYnRuMSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMjczcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5hY3RpdmVwcm9kdWN0e1xyXG4gIGJhY2tncm91bmQ6ICNmNWY2Zjk7XHJcbiAgcGFkZGluZzo0cHggMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLVRoaXJkIFBhcnkgQ1NTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi50aGlyZFBhcnR5LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLy8gLnRpdGxle1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBjb2xvcjogIzFBMjA2RDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcbi5odGV4dCB7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1jbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLmRyb3Bib3gge1xyXG4gIG1hcmdpbjogNCUgMCU7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEzLjQxcHggMTVweDtcclxuXHJcbn1cclxuXHJcbi5pbm5lcmRyb3Bib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG4uZXVyby10ZXh0IHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbn1cclxuXHJcbi5ldXJvLXRleHQxIHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcblxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgbWFyZ2luOiA0JSAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5pbi10ZXh0IHtcclxuICAtLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcclxuICAtLXBhZGRpbmctdG9wOiA1JTtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG59XHJcbi5pbi10ZXh0bm9jaGFuZ2V7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLml0ZW0tcGlja2VyIHtcclxuICAvLyB3aWR0aDogODUlO1xyXG4gIC8vIGhlaWdodDogNDhweDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XHJcblxyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBtaW4taGVpZ2h0OiAuMDElO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgcGFkZGluZzogMHB4IDNweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbnRke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY29sb3I6IzAwMDAwMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxudGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY29sb3I6ICNBOEI0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbnRyIHRkOmZpcnN0LWNoaWxke1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcblxyXG59XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kb25lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4iLCIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0byA1JTtcbn1cblxuLnNlZ21lbnQxIHtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWdtZW50MSAuc2J0biB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDVweDtcbiAgLS1tYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMUEyMDZEO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogIzg1ODU4QTtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5odGV4dDEge1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucjEge1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnIyIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA2NXB4O1xuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tYWluIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4uY2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4uY2ZsZXgxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHQge1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dDEge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3NwYW4ge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dDMge1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQ0IHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQ1IHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWdkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZHRleHQge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnRuZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDIwM3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbi5pdGV4dCB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcbn1cblxuLmJ0bjEge1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDI3M3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWN0aXZlcHJvZHVjdCB7XG4gIGJhY2tncm91bmQ6ICNmNWY2Zjk7XG4gIHBhZGRpbmc6IDRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aGlyZFBhcnR5LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG4uaHRleHQge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5kcm9wYm94IHtcbiAgbWFyZ2luOiA0JSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTMuNDFweCAxNXB4O1xufVxuXG4uaW5uZXJkcm9wYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZXVyby10ZXh0IHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV1cm8tdGV4dDEge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLmlucHV0ZmllbGQge1xuICBtYXJnaW46IDQlIDAlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uaW4tdGV4dCB7XG4gIC0tY29sb3I6ICM1RDVENUQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1RDVENUQ7XG4gIC0tcGFkZGluZy1zdGFydDogNyU7XG4gIC0tcGFkZGluZy10b3A6IDUlO1xuICAtLXBhZGRpbmctYm90dG9tOiA1JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbi10ZXh0bm9jaGFuZ2Uge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xufVxuXG4uYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaXRlbS1waWNrZXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG1pbi1oZWlnaHQ6IDAuMDElO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAwcHggM3B4O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbnRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG50ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICB9XG59Il19 */";

/***/ }),

/***/ 40551:
/*!************************************************************!*\
  !*** ./src/app/mypolicies/mypolicies.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width: 100%\">\r\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Insurance Quote</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\" *ngIf=\"requestsType=='PurchasePolicies'\">\r\n        <img src=\"assets/images/info.png\" (click)=\"goto()\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"PurchasePolicies\" class=\"sbtn\">\r\n        <ion-label>General Bussines</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"InvestmentPlan\" class=\"sbtn\">\r\n        <ion-label>Life Insurance Plan</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment> -->\r\n\r\n    <!------------- Purchase Policies -------------------->\r\n    <div>\r\n      <!-------------- third party discription ------------------->\r\n      <div *ngIf=\"subProName=='Third Party'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />Motor Third-party Insurance Quote\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Please provide your details below to get your quote\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <!-- <div>\r\n              <img src=\"assets/images/slider/1.svg\">\r\n            </div> -->\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <div class=\"label\">\r\n                Vehicle Class <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\" style=\"position: relative\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicle==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicle==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vechilenewarray; let i=index\" (click)=\"selectVehicleCls(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.name}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- second form ---------------------------->\r\n              <div class=\"label\">\r\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.manufacturer}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.model}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fourth form ---------------------------->\r\n              <div class=\"label\">\r\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{policyhldrVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPolicyholder==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPolicyholder==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPolicyholder==true\">\r\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">First Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">Last Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                    </ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n                <div class=\"label\">Company Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fifth form ---------------------------->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Phone Number <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- ---------------------------------------------------------------- -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ------------Enhanced-comprehensive----------------------- -->\r\n      <div *ngIf=\"subProName=='Enhanced Comprehensive'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Your Details\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <div class=\"label\">\r\n                Vehicle Class <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicle==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicle==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of EnchancednewClasses;let i=index\" (click)=\"selectVehicleCls(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.name}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- second form ---------------------------->\r\n              <div class=\"label\">\r\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.manufacturer}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\r\n                    <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                      {{list.model}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fourth form ---------------------------->\r\n              <div class=\"label\">\r\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{policyhldrVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPolicyholder==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPolicyholder==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPolicyholder==true\">\r\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">First Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">Last Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                    </ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n                <div class=\"label\">Company Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Phone Number <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Value of Vehicle <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Flood Extension <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{floodExtVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showFloodExt==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showFloodExt==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showFloodExt==true\">\r\n                  <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\r\n                    <div class=\"euro-text1\">{{list.floodExt}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Excess Buy Back <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{excessBuyBackVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showExcessBuyBack==true\">\r\n                  <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\r\n                    <div class=\"euro-text1\">{{list.excessByBack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Would you want Vehicle Tracking?\r\n                <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleTrackingVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleTracking==true\">\r\n                  <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\r\n                    <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- ---------------------------------------------------------------- -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ------------Auto Variants----------------------- -->\r\n      <div *ngIf=\"subProName=='Auto Variants'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" /> Auto Variants\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Your Details\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <div class=\"label\">\r\n                Auto Plan of Choice <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openAutoPlanList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{autoPlanVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPlan==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPlan==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPlan==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of autoPlansOfChoice\" (click)=\"selectAutoPlan(list)\">\r\n                    <div class=\"euro-text1\">{{list.autoPlan}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- second form ---------------------------->\r\n              <div class=\"label\">\r\n                Vehicle Make <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleMakeVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showMaker==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showMaker==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleMake\" (click)=\"selectVehicleMaker(list)\">\r\n                    <div class=\"euro-text1\">{{list.manufacturer}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleModelVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleModel==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleModel==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of vehicleModel\" (click)=\"selectVehicleModel(list)\">\r\n                    <div class=\"euro-text1\">{{list.model}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fourth form ---------------------------->\r\n              <div class=\"label\">\r\n                Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{policyhldrVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showPolicyholder==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showPolicyholder==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showPolicyholder==true\">\r\n                  <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n                    <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">First Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Private'\">\r\n                <div class=\"label\">Last Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                    </ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- fifth form ---------------------------->\r\n              <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n                <div class=\"label\">Company Name</div>\r\n                <div class=\"inputfield\">\r\n                  <div class=\"innerdropbox\">\r\n                    <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n                      class=\"in-text\"></ion-input>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- fifth form ---------------------------->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Phone Number <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!----------- sixth form ---------------------------->\r\n              <div class=\"label\">\r\n                Value of Vehicle <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"valOfVehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Flood Extension <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openFloodExtension()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{floodExtVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showFloodExt==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showFloodExt==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showFloodExt==true\">\r\n                  <div *ngFor=\"let list of floodExtValues\" (click)=\"selectFloodExt(list)\">\r\n                    <div class=\"euro-text1\">{{list.floodExt}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Excess Buy Back <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openExcessBuyBack()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{excessBuyBackVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showExcessBuyBack==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showExcessBuyBack==true\">\r\n                  <div *ngFor=\"let list of ExcessBuyBack\" (click)=\"selectExcessBuyBack(list)\">\r\n                    <div class=\"euro-text1\">{{list.excessByBack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Would you want Vehicle Tracking?\r\n                <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openVehicleTracking()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{vehicleTrackingVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showVehicleTracking==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showVehicleTracking==true\">\r\n                  <div *ngFor=\"let list of vehicleTrackingValues\" (click)=\"selectVehicleTracking(list)\">\r\n                    <div class=\"euro-text1\">{{list.vehicleTrack}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!----------- seventh form ---------------------------->\r\n              <div class=\"label\">\r\n                Road Side Assistance <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openRoadSideAssistance()\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">\r\n                    {{roadSideVal}}\r\n                  </div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showRoadSide==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showRoadSide==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showRoadSide==true\">\r\n                  <div *ngFor=\"let list of roadSideAssistance\" (click)=\"selectRoadSideAssistance(list)\">\r\n                    <div class=\"euro-text1\">{{list.roadSide}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ---------------------------------------------------------------- -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ------------Enhanced-comprehensive----------------------- -->\r\n      <div\r\n        *ngIf=\"subProName=='Worldwide TRAVELLER' || subProName== 'Worldwide PEARL' || subProName== 'Worldwide ECONOMY' || subProName=='Travel Safeguard - Air Transport' || subProName=='Pilgrimage BASIC' || subProName=='Pilgrimage PLUS' || subProName=='Pilgrimage EXTRA' || subProName=='Student Plan' || subProName=='Europe / Schengen' || subProName=='Travel Safeguard - Road Transport' || subProName=='Travel Care Premier' || subProName=='Travel Care Visa'\">\r\n        <div class=\"thirdParty-wrapper\">\r\n          <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n            <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\r\n          </div>\r\n          <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n            Your Details\r\n          </div>\r\n          <div class=\"flex-cls\">\r\n            <div style=\"width: 80%; margin: 0% auto\">\r\n              <!-- Title Field -->\r\n              <div class=\"label\">\r\n                Title<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showTitle==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showTitle==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of titleList\" (click)=\"selectDropDown(list,'title')\">\r\n                    <div class=\"euro-text1\">{{list.title}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Title Field -->\r\n\r\n              <!-- FIRST NAME FIELD NAME -->\r\n              <div class=\"label\">First Name</div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- FIRST NAME FIELD NAME -->\r\n              <!-- LAST NAME FIELD -->\r\n              <div class=\"label\">Last Name</div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- LAST NAME FIELD -->\r\n              <!-- OTHER NAME FIELD -->\r\n              <div class=\"label\">Other Name</div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"otheName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n                  </ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- OTHER NAME FIELD -->\r\n              <!-- EMAIL FIELD -->\r\n              <div class=\"label\">\r\n                Email Address<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- EMAIL FIELD -->\r\n              <!-- PHONE NUMBER FIELD -->\r\n              <div class=\"label\">\r\n                Phone Number<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"inputfield\">\r\n                <div class=\"innerdropbox\">\r\n                  <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n                    class=\"in-text\"></ion-input>\r\n                </div>\r\n              </div>\r\n              <!-- PHONE NUMBER FIELD -->\r\n              <!-- Start Date  -->\r\n              <div class=\"label\">\r\n                Start date<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"item-picker\" style=\"\r\n                  margin: 4% 0%;\r\n                  --background: #e8e8e7;\r\n                  height: 48px;\r\n                  padding: 13px 15px;\r\n                \" (click)=\"showPickerStartDate = !showPickerStartDate\">\r\n                <div style=\"display: flex; align-items: center\">\r\n                  <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourStartDate }}</ion-text>\r\n                </div>\r\n              </div>\r\n              <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n                *ngIf=\"showPickerStartDate\" #datetime [value]=\"tourStartDate\" size=\"cover\"\r\n                (ionChange)=\"dateChanged(datetime.value,'start')\" showDefaultButtons=\"true\"\r\n                (ionCancel)=\"showPickerStartDate=false\"></ion-datetime>\r\n              <!-- Start Date  -->\r\n\r\n              <!-- End Date  -->\r\n              <div class=\"label\">\r\n                End date <span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"item-picker\" style=\"\r\n                  margin: 4% 0%;\r\n                  --background: #e8e8e7;\r\n                  height: 48px;\r\n                  padding: 13px 15px;\r\n                \" (click)=\"showPickerEndDate = !showPickerEndDate\">\r\n                <div style=\"display: flex; align-items: center\">\r\n                  <ion-text class=\"ion-txt\" style=\"margin-left: 14px;color: #000;\">{{ tourEndDate }}</ion-text>\r\n                </div>\r\n              </div>\r\n              <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n                *ngIf=\"showPickerEndDate\" #datetime [value]=\"tourEndDate\" size=\"cover\"\r\n                (ionChange)=\"dateChanged(datetime.value,'end')\" showDefaultButtons=\"true\"\r\n                (ionCancel)=\"showPickerEndDate=false\"></ion-datetime>\r\n              <!-- End Date  -->\r\n              <!-- AGE GROUP FIELD -->\r\n              <div class=\"label\">\r\n                Age Next Birthday<span style=\"color: #a8b400\">*</span>\r\n              </div>\r\n              <div class=\"dropbox\">\r\n                <div class=\"innerdropbox\" (click)=\"openDropDwon('age')\">\r\n                  <div class=\"euro-text\" style=\"width: 100%\">{{ageGroup}}</div>\r\n                  <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                      *ngIf=\"showAgeGroup==false\" />\r\n                    <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n                      *ngIf=\"showAgeGroup==true\" />\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"showAgeGroup==true\" style=\"height: 100px; overflow: scroll\">\r\n                  <div *ngFor=\"let list of ageGroupList\" (click)=\"selectDropDown(list,'age')\">\r\n                    <div class=\"euro-text1\">{{list.title}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- AGE GROUP FIELD -->\r\n              <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote('International')\">\r\n                <ion-button class=\"btn\">Continue</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!------------- Investment Plan -------------------->\r\n    <!------------- Isave Plan -------------------->\r\n    <div\r\n      *ngIf=\"subProName=='iSave Plan' || subProName=='Maximum Investment Plan' || subProName=='Cornerstone Universal Plan' || subProName=='Children Education Fund'\">\r\n      <div class=\"htext\" style=\"margin-bottom: 10px\">\r\n        <img src=\"assets/images/thirdPartyCorp.svg\" alt=\"\" />{{subProName}}\r\n      </div>\r\n      <div class=\"htext\" style=\"color: black; font-size: 18px\">\r\n        Your Details\r\n      </div>\r\n      <div class=\"label\">Title<span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openDropDwon('title')\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{useTitle}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showTitle==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showTitle==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showTitle==true\" style=\"height: 100px; overflow: scroll\">\r\n          <div *ngFor=\"let list of isavetitle;let i=index\" (click)=\"selectTitle(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.title}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"label\">First Name <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\">\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- LAST NAME FIELD -->\r\n      <div class=\"label\">Last Name <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- EMAIL FIELD -->\r\n      <div class=\"label\">\r\n        Email Address<span style=\"color: #a8b400\">*</span>\r\n      </div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n            class=\"in-text\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- PHONE NUMBER FIELD -->\r\n      <div class=\"label\">Phone Number<span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\"\r\n            class=\"in-text\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"label\">\r\n        Payment Frequency<span style=\"color: #a8b400\">*</span>\r\n      </div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openpaymentfrequency()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{Pfrequency}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n              *ngIf=\"showpaymentfrequency==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\"\r\n              *ngIf=\"showpaymentfrequency==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showpaymentfrequency==true\">\r\n          <div *ngFor=\"let list of Paymentfrequency;let i=index;\" (click)=\"selectpaymentfrequency(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.title}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Monthly Investment FIELD -->\r\n      <div *ngIf=\"Pfrequency!='Please Select'\">\r\n        <div class=\"label\">\r\n          <span *ngIf=\"Pfrequency=='Monthly'\">Monthly Investment</span>\r\n          <span *ngIf=\"Pfrequency=='Quarterly'\">Quarterly Investment</span>\r\n          <span *ngIf=\"Pfrequency=='Half-yearly'\">Half-yearly Investment</span>\r\n          <span *ngIf=\"Pfrequency=='Yearly'\">Yearly Investment</span>\r\n          <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"monthlyinvestment\" type=\"text\" placeholder=\"\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Monthly'\">\r\n          (Minimum 5000 per month)\r\n        </p>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Quarterly'\">\r\n          (Minimum 15000 per quarter)\r\n        </p>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Half-yearly'\">\r\n          (Minimum 30000 per half year)\r\n        </p>\r\n        <p style=\"color: #a8b400; margin: 0px 5px 5px; font-size: 13px\" *ngIf=\"Pfrequency=='Yearly'\">\r\n          (Minimum 60000 per year)\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Duration -->\r\n      <div class=\"label\">Duration <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"duration\" style=\"height: 48px\" type=\"number\" placeholder=\"2 years\"\r\n            class=\"in-textnochange\" readonly>\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-------- TAble data ------------->\r\n      <div class=\"col-sm-8 table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"6\" class=\"text-01\">\r\n                <strong>Life Table diagram</strong>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td><strong>Sum Assured (NGN)</strong></td>\r\n              <td>100,000</td>\r\n              <td>300,000</td>\r\n              <td>500,000</td>\r\n              <td>700,000</td>\r\n              <td>1,000,000</td>\r\n            </tr>\r\n            <tr class=\"active\">\r\n              <td><strong>Premium(2years) NGN</strong></td>\r\n              <td>2,000</td>\r\n              <td>6,000</td>\r\n              <td>10,000</td>\r\n              <td>14,000</td>\r\n              <td>20,000</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!---------------- Sum Assured ----------------->\r\n      <div class=\"label\">Sum Assured <span style=\"color: #a8b400\">*</span></div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"opensumassured()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{sumassured }}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n              *ngIf=\"showsumassured==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showsumassured==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showsumassured==true\" style=\"height: 100px; overflow: scroll\">\r\n          <div *ngFor=\"let list of sumassuredarray;let i=index;\" (click)=\"selectsumassured(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.value}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Life Cover Premium -->\r\n      <div class=\"label\">\r\n        Life Cover Premium <span style=\"color: #a8b400\">*</span>\r\n      </div>\r\n      <p style=\"color: #a8b400; margin: 5px 5px 0px 5px; font-size: 13px\">\r\n        Minimum Amount 2,000 & Maximum Amount 20,000\r\n      </p>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"Premium\" style=\"height: 48px\" type=\"number\" placeholder=\"Life Cover Premium\"\r\n            class=\"in-textnochange\" readonly>\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-------------------------------------------->\r\n    <!-- <div *ngIf=\"requestsType=='InvestmentPlan'\">\r\n      <ion-row style=\"margin-top:5%;\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\" [class.active]=\"box=='checked'\" (click)=\"changed()\">\r\n\r\n            <div class=\"imgdiv\">\r\n\r\n              <img src=\"assets/images/all.svg\" height=\"70\" *ngIf=\"box=='unchecked'\">\r\n              <img src=\"assets/images/tick-all.svg\" height=\"70\" *ngIf=\"box=='checked'\">\r\n              <div class=\"itext\">All</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/saveplan.svg\" height=\"70\">\r\n              <div class=\"itext\">iSave Plan</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:5%;\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/family2.svg\" height=\"70\">\r\n              <div class=\"itext\">Maximum Investment Plan</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/cornerstone.svg\" height=\"70\">\r\n              <div class=\"itext\">Cornerstone Universal Plan</div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top:5%;\">\r\n        <ion-col size=\"3\">\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <div class=\"box\">\r\n            <div class=\"imgdiv\">\r\n              <img src=\"assets/images/fullfamily.svg\" height=\"70\">\r\n              <div class=\"itext\">Children Education Plan</div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\">\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <div style=\"text-align:center;margin-top: 8%;\">\r\n        <ion-button class=\"btn1\">Account Statement</ion-button>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_mypolicies_mypolicies_module_ts.js.map