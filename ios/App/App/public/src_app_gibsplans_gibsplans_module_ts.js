"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_gibsplans_gibsplans_module_ts"],{

/***/ 4233:
/*!*******************************************************!*\
  !*** ./src/app/gibsplans/gibsplans-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GibsplansPageRoutingModule": () => (/* binding */ GibsplansPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gibsplans_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsplans.page */ 41560);




const routes = [
    {
        path: '',
        component: _gibsplans_page__WEBPACK_IMPORTED_MODULE_0__.GibsplansPage
    }
];
let GibsplansPageRoutingModule = class GibsplansPageRoutingModule {
};
GibsplansPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GibsplansPageRoutingModule);



/***/ }),

/***/ 12628:
/*!***********************************************!*\
  !*** ./src/app/gibsplans/gibsplans.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GibsplansPageModule": () => (/* binding */ GibsplansPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _gibsplans_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsplans-routing.module */ 4233);
/* harmony import */ var _gibsplans_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gibsplans.page */ 41560);







let GibsplansPageModule = class GibsplansPageModule {
};
GibsplansPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gibsplans_routing_module__WEBPACK_IMPORTED_MODULE_0__.GibsplansPageRoutingModule
        ],
        declarations: [_gibsplans_page__WEBPACK_IMPORTED_MODULE_1__.GibsplansPage]
    })
], GibsplansPageModule);



/***/ }),

/***/ 41560:
/*!*********************************************!*\
  !*** ./src/app/gibsplans/gibsplans.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GibsplansPage": () => (/* binding */ GibsplansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _gibsplans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsplans.page.html?ngResource */ 70577);
/* harmony import */ var _gibsplans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gibsplans.page.scss?ngResource */ 53278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);









let GibsplansPage = class GibsplansPage {
    constructor(api, location, route, activated) {
        this.api = api;
        this.location = location;
        this.route = route;
        this.activated = activated;
        this.vehicleMakeVal = 'Select Manufacturer';
        this.vehicleModelVal = 'Select Model';
        this.genderVal = 'Select Gender';
        this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
        this.yopValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy');
        this.yomValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy');
        this.dateofbirth = 'Please Select';
        this.yopdate = 'Please Select';
        this.yomdate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy');
        this.fName = '';
        this.lName = '';
        this.userEmail = '';
        this.mobNumber = '';
        this.address = '';
        this.regNo = '';
        this.engNo = '';
        this.chasisNo = '';
        this.vehclr = '';
        this.showMaker = false;
        this.showVehicleModel = false;
        this.showGender = false;
        this.showPickerDob = false;
        this.showPickerYop = false;
        this.showPickerYom = false;
        this.genderType = [{ gender: 'MALE' }, { gender: 'FEMALE' }];
        this.frequency = [{ f: 'once' }, { f: 'twice' }, { f: 'thrice' }];
        this.freqonce = [{ f: 'once' }];
        this.showf = false;
        this.valueofvehicle = '';
        this.yesno = [{ name: 'Yes' }, { name: 'No' }];
        this.policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType: 'Corporate' }];
        this.policyhldrVal = 'Please Select';
        this.ebb = 'Please Select';
        this.fe = 'Please Select';
        this.srcc = 'Please Select';
        this.iit = 'Please Select';
        this.pliability = 'Please Select';
        this.Fpacakage = 'Please Select';
        this.producttax = '';
        this.ebbtax = '';
        this.fetax = '';
        this.srcctax = '';
        this.iittax = '';
        this.showebb = false;
        this.showfe = false;
        this.showsrcc = false;
        this.showiit = false;
        this.showpliability = false;
        this.showfullp = false;
        this.showPolicyholder = false;
        this.draftArr = '';
        this.fchoose = 'Please Select';
        this.vechileMakenew = [];
        this.vehicleModelNew = [];
    }
    ngOnInit() {
        this.currentdate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD');
        console.log('cdate=', this.currentdate);
        var oneYearFromNow = new Date();
        var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        this.enddate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date(result)).format('YYYY-MM-DD');
        console.log(moment__WEBPACK_IMPORTED_MODULE_3__(new Date(result)).format('YYYY-MM-DD'));
        // if (localStorage.getItem('subProName') == 'Third Party') {
        //   this.motorproduct = 'THIRD_PARTY_ONLY'
        // } else {
        //   this.motorproduct = 'COMPREHENSIVE '
        // }
        this.userEmail = localStorage.getItem('email');
        this.mobNumber = localStorage.getItem('number');
        this.fName = localStorage.getItem('fname');
        ;
        this.lName = localStorage.getItem('lname');
        console.log(this.motorproduct);
        // this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        // console.log('ssssss-----', this.Gproduct);
        // this.subProName = this.Gproduct.productName
        // this.productId = this.Gproduct.productID
        this.getCarMakeCompanies();
        this.emailvalidation =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.productType = this.activated.snapshot.params['productType'];
        console.log(this.productType);
        this.testresult();
    }
    goback() {
        this.location.back();
    }
    openVhclMakeList() {
        if (this.showMaker == true) {
            this.showMaker = false;
        }
        else {
            this.showMaker = true;
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
    selectVehicleMaker(list, index) {
        this.vehicleMakeVal = list.manufacturer;
        // this.vehicleModelVal = '';
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
    getVehicleModels() {
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
    openPolicyhldrList() {
        if (this.showPolicyholder == true) {
            this.showPolicyholder = false;
        }
        else {
            this.showPolicyholder = true;
        }
    }
    selectPolicyholder(list) {
        this.policyhldrVal = list.plcyhldrType;
        this.showPolicyholder = false;
    }
    openGenderList() {
        if (this.showGender == true) {
            this.showGender = false;
        }
        else {
            this.showGender = true;
        }
    }
    selectGenderType(list) {
        this.genderVal = list.gender;
        this.showGender = false;
    }
    showFrequency() {
        if (this.showf == true) {
            this.showf = false;
        }
        else {
            this.showf = true;
        }
    }
    selectFrequency(list) {
        this.fchoose = list.f;
        this.showf = false;
    }
    dobChanged(value) {
        this.dateofbirth = value;
        console.log(this.dateofbirth);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerDob = false;
    }
    yopChanged(value) {
        this.yopdate = value;
        console.log(this.yopValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerYop = false;
    }
    yomChanged(value) {
        this.yomdate = value;
        console.log(this.yomValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerYom = false;
    }
    submit() {
        if (this.vehicleMakeVal == 'Select Manufacturer') {
            this.api.presenttoast('Vehicle Make required');
        }
        else if (this.vehicleModelVal == 'Select Model') {
            this.api.presenttoast('Vehicle Model required');
        }
        //  else if (this.fName == '') {
        //   this.api.presenttoast('First Name Field Required');
        // } else if (this.lName == '') {
        //   this.api.presenttoast('Last Name Field Required');
        // }
        else if (this.userEmail == '') {
            this.api.presenttoast('Email Field Required');
        }
        else if (!this.validateEmail(this.userEmail)) {
            this.api.presenttoast('InValid Email');
        }
        else if (this.mobNumber == '') {
            this.api.presenttoast('Mobile Number Field Required');
        }
        //  else if (this.address == '') {
        //   this.api.presenttoast('Address Field Required');
        // }
        else if (this.regNo == '') {
            this.api.presenttoast('Registration Number Field Required');
        }
        else if (this.chasisNo == '') {
            this.api.presenttoast('Chasis Number Field Required');
        }
        else if (this.engNo == '') {
            this.api.presenttoast('Engine Number Field Required');
        }
        else if (this.vehclr == '') {
            this.api.presenttoast('Vehicle Colour Field Required');
        }
        else if (this.valueofvehicle == '') {
            this.api.presenttoast('Vehicle Value Field Required');
        }
        else if (this.fchoose == 'Please Select') {
            this.api.presenttoast('Please Select Frequency');
        }
        // else if (this.genderVal == 'Select Gender') {
        //   this.api.presenttoast('Please Select Gender');
        // }
        // else if (this.dateofbirth == 'Please Select') {
        //   this.api.presenttoast('Please Select DOB');
        // }
        // else if (this.Fpacakage == 'Please Select') {
        //   this.api.presenttoast('Please Select Full Pacakge');
        // }
        else if (this.yomdate == 'Please Select') {
            this.api.presenttoast('Year of Manufacture Field Required');
        }
        else if (this.productType == 'Auto Classic') {
            if (this.ebb == 'Please Select') {
                this.api.presenttoast('Please Select Excess Buy Back');
            }
            else if (this.fe == 'Please Select') {
                this.api.presenttoast('Please Select Flood Extension');
            }
            else if (this.srcc == 'Please Select') {
                this.api.presenttoast('Please Select Strike Riot & Civil Commotion');
            }
            else {
                this.showresult();
            }
        }
        else if (this.productType == 'Uber Classic') {
            if (this.ebb == 'Please Select') {
                this.api.presenttoast('Please Select Excess Buy Back');
            }
            else if (this.fe == 'Please Select') {
                this.api.presenttoast('Please Select Flood Extension');
            }
            else if (this.srcc == 'Please Select') {
                this.api.presenttoast('Please Select Strike Riot & Civil Commotion');
            }
            else if (this.pliability == 'Please Select') {
                this.api.presenttoast('Please Select Passenger Liability');
            }
            else {
                this.showresult();
            }
        }
        else {
            this.showresult();
        }
        // else {
        //   // this.calculateTax();
        //   alert('dddddddddd')
        //   localStorage.setItem('email', this.userEmail);
        //   // var myData = {
        //   //   sid: 'ECHANNEL2',
        //   //   token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
        //   // };
        //   // this.api.gibsapi(myData).subscribe(
        //   //   (res: any) => {
        //   //     console.log(res);
        //   //     let token = res.accessToken;
        //   //     this.getresult(token);
        //   //   },
        //   //   (err) => {
        //   //     console.log(err);
        //   //     this.api.hideLoader();
        //   //   }
        //   // );
        // }
    }
    showresult() {
        const myData = 'myData={"insurance_type":"' +
            this.productType +
            '","product_name":"' +
            "Comprehensive Motor Insurance" +
            '","frequency":"' +
            this.fchoose +
            '", "value":"' +
            this.valueofvehicle +
            '", "flood_extension":"' +
            this.fe +
            '", "excess_buy_back":"' +
            this.ebb +
            '", "srcc":"' +
            this.srcc +
            '", "tppd":"' +
            this.iit +
            '", "passenger_liability":"' +
            this.pliability +
            '", "verify_token":"' +
            localStorage.getItem('token') +
            '","method":"get_motor_price"}';
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.status_no == 1) {
                localStorage.setItem('valueofvechile', this.valueofvehicle);
                localStorage.setItem('vechilemake', this.vehicleMakeVal);
                localStorage.setItem('vechilemodel', this.vehicleModelVal);
                localStorage.setItem('productType', this.productType);
                localStorage.setItem('motorprices', JSON.stringify(res));
                this.Quoteprocess();
            }
            else {
                this.api.presenttoast(res.message);
            }
        }, (err) => {
            console.log(err);
        });
    }
    Quoteprocess() {
        const myData = 'myData={"insurance_type":"' +
            this.productType +
            '","product_id":"' +
            "59" +
            '","first_name":"' +
            this.fName +
            '","last_name":"' +
            this.lName +
            '","mobile":"' +
            this.mobNumber +
            '","email":"' +
            this.userEmail +
            '","policyholder_type":"' +
            this.policyhldrVal +
            '","vehicle_manufacturer":"' +
            this.vehicleMakeVal +
            '","vehicle_model":"' +
            this.vehicleModelVal +
            '","company_name":"' +
            this.compName +
            '","frequency":"' +
            this.fchoose +
            '", "value_of_vehicle":"' +
            this.valueofvehicle +
            '", "flood_extension":"' +
            this.fe +
            '", "excess_buy_back":"' +
            this.ebb +
            '", "srcc":"' +
            this.srcc +
            '", "tppd":"' +
            this.iit +
            '", "passenger_liability":"' +
            this.pliability +
            '", "verify_token":"' +
            localStorage.getItem('token') +
            '","method":"save_product_quote"}';
        this.api.insertData(myData).subscribe((res) => {
            console.log('quoteproces=====', res);
            localStorage.setItem('quoteItemsvalues', JSON.stringify(res.quoteItems));
            if (res.status_no == 1) {
                // 'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
                var obj = {
                    title: this.productType,
                    product_id: res.info.product_id,
                    quote_id: res.info.quote_id,
                    subProName: this.productType,
                    quoteItems: 'dummy',
                    image: 'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
                    path: '/policyquote',
                    datetime: new Date().toISOString(),
                };
                this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
                if (this.draftArr) {
                    this.draftArr.push(obj);
                }
                else {
                    this.draftArr = [obj];
                }
                this.api.presenttoast(res.info.message);
                let datasend = {
                    registration_number: this.regNo,
                    engine_number: this.engNo,
                    chasis_number: this.chasisNo,
                    vehicle_colour: this.vehclr,
                    dob: this.dateofbirth,
                    policyhldrVal: this.policyhldrVal
                };
                localStorage.setItem('quotevalues', JSON.stringify(datasend));
                localStorage.setItem('quoteprocess', JSON.stringify(res));
                localStorage.setItem('email', this.userEmail);
                localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
                this.route.navigate(['policyquote']);
            }
            else {
                this.api.presenttoast(res.message);
            }
        }, (err) => {
            console.log(err);
        });
    }
    // getresult(token) {
    //   this.api.showLoader()
    //   let Bearertoken = token;
    //   // let postdata = {
    //   //   productID: '3034',
    //   //   entryDate: '2022-10-20T04:29:31.261Z',
    //   //   startDate: '2018-03-13T00:00:00',
    //   //   endDate: '2019-03-12T00:00:00',
    //   //   fxCurrency: 'NGN',
    //   //   fxRate: 1,
    //   //   referrerSource: 'AGENT',
    //   //   referrerDetails: 'string',
    //   //   paymentProviderID: 'string',
    //   //   paymentReferenceID: 'string',
    //   //   insured: {
    //   //     title: 'string',
    //   //     lastName: this.lName,
    //   //     firstName: this.fName,
    //   //     otherName: 'string',
    //   //     gender: this.genderVal,
    //   //     email: this.userEmail,
    //   //     address: this.address,
    //   //     phoneLine1: this.mobNumber,
    //   //     phoneLine2: this.mobNumber,
    //   //     isOrg: true,
    //   //     orgName: 'string',
    //   //     orgRegNumber: 'string',
    //   //     orgRegDate: '2022-10-20T04:29:31.261Z',
    //   //     taxIdNumber: 'string',
    //   //     cityLGA: 'string',
    //   //     stateID: 'string',
    //   //     nationality: 'string',
    //   //     dateOfBirth: this.dateofbirth,
    //   //     kycType: 'NOT_AVAILABLE',
    //   //     kycNumber: 'string',
    //   //     kycIssueDate: '2022-10-20T04:29:31.261Z',
    //   //     kycExpiryDate: '2022-10-20T04:29:31.261Z',
    //   //     nextOfKin: {
    //   //       title: 'string',
    //   //       lastName: 'string',
    //   //       firstName: 'string',
    //   //       otherName: 'string',
    //   //       gender: 'MALE',
    //   //       email: 'user@example.com',
    //   //       address: 'string',
    //   //       phoneLine1: '123456',
    //   //       phoneLine2: '123456',
    //   //     },
    //   //   },
    //   //   policySections: [
    //   //     {
    //   //       sectionID: 'string',
    //   //       sectionSumInsured: 0,
    //   //       sectionPremium: 0,
    //   //       vehicleRegNo: this.regNo,
    //   //       vehicleTypeID: 'VAN',
    //   //       vehicleUser: 'string',
    //   //       engineNumber: this.engNo,
    //   //       chasisNumber: this.chasisNo,
    //   //       vehicleUsage: 'PRIVATE',
    //   //       numberOfSeats: 0,
    //   //       stateOfIssue: 'string',
    //   //       vehicleMake: this.vehicleMakeVal,
    //   //       vehicleModel: this.vehicleModelVal,
    //   //       manufactureYear: this.yomdate,
    //   //       vehicleColour: this.vehclr,
    //   //       engineCapacityHP: 'string',
    //   //       coverType: 'COMPREHENSIVE',
    //   //     },
    //   //   ],
    //   // };
    //   let postdata = {
    //     // default productID:1001
    //     "productID": '1001',
    //     "entryDate": this.currentdate,
    //     "startDate": this.currentdate,
    //     "endDate": this.enddate,
    //     "fxCurrency": "NGN",
    //     "fxRate": 1,
    //     "agentID": "AG-000012",
    //     "paymentAccountID": "1112000044",
    //     "insured": {
    //       "lastName": this.lName,
    //       "firstName": this.lName,
    //       "gender": this.genderVal,
    //       "email": this.userEmail,
    //       "address": this.address,
    //       "phoneLine1": this.mobNumber,
    //       "isOrg": false,
    //       "cityLGA": "n/a",
    //       "stateID": "n/a",
    //       "nationality": "bd",
    //       "dateOfBirth": this.dateofbirth,
    //       "kycType": "NOT_AVAILABLE",
    //       "kycNumber": "n/a"
    //     },
    //     "sections": [
    //       {
    //         "sectionID": "n/a",
    //         "sectionSumInsured": 0,
    //         "sectionPremium": this.overalltax,
    //         "fields": [
    //           {
    //             "name": "VehicleRegNo",
    //             "value": this.regNo
    //           },
    //           {
    //             "name": "VehicleTypeID",
    //             "value": "JEEP"
    //           },
    //           {
    //             "name": "VehicleUser",
    //             "value": this.fName
    //           },
    //           {
    //             "name": "EngineNumber",
    //             "value": this.engNo
    //           },
    //           {
    //             "name": "EngineCapacityHP",
    //             "value": "2.5"
    //           },
    //           {
    //             "name": "ChasisNumber",
    //             "value": this.chasisNo
    //           },
    //           {
    //             "name": "VehicleUsage",
    //             "value": "PRIVATE"
    //           },
    //           {
    //             "name": "NumberOfSeats",
    //             "value": "1"
    //           },
    //           {
    //             "name": "stateOfIssue",
    //             "value": "Lagos"
    //           },
    //           {
    //             "name": "VehicleMake",
    //             "value": this.vehicleMakeVal
    //           },
    //           {
    //             "name": "VehicleModel",
    //             "value": this.vehicleMakeVal
    //           },
    //           {
    //             "name": "ManufactureYear",
    //             "value": this.yomdate
    //           },
    //           {
    //             "name": "VehicleColour",
    //             "value": this.vehclr
    //           },
    //           {
    //             "name": "CoverType",
    //             "value": 'COMPREHENSIVE'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    //   // 'http://testcipapiservices.gibsonline.com/api/metadata/Policies/Motor' old url
    //   this.api
    //     .postdata(
    //       'http://testcipapiservices.gibsonline.com/api/policies',
    //       postdata,
    //       Bearertoken
    //     )
    //     .subscribe(
    //       (res: any) => {
    //         console.log('motor response---', res);
    //         this.api.hideLoader()
    //         localStorage.setItem('gibsProductres', JSON.stringify(res));
    //         var obj = {
    //           title: this.subProName,
    //           product_id: res.productID,
    //           quote_id: res.agentID,
    //           subProName: this.subProName,
    //           quoteItems: 'dummy',
    //           image:
    //             'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
    //           path: '/policyquote',
    //           datetime: new Date().toISOString(),
    //         };
    //         this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    //         if (this.draftArr) {
    //           this.draftArr.push(obj);
    //         } else {
    //           this.draftArr = [obj];
    //         }
    //         // localStorage.setItem('subProName', this.subProName);
    //         localStorage.setItem('fname', this.fName);
    //         localStorage.setItem('lname', this.lName);
    //         localStorage.setItem('userEmail', this.userEmail);
    //         localStorage.setItem('mobNumber', this.mobNumber);
    //         localStorage.setItem('address', this.dateofbirth);
    //         localStorage.setItem('gender', this.genderVal);
    //         localStorage.setItem('product_id', res.productID);
    //         localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
    //         this.route.navigate(['policyquote']);
    //       },
    //       (err) => {
    //         this.api.hideLoader()
    //         console.log(err);
    //         let errormsg = err.error.errors[0].message;
    //         this.api.presenttoast(errormsg)
    //       }
    //     );
    // }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    //// 1
    showDebb() {
        if (this.showebb == true) {
            this.showebb = false;
        }
        else {
            this.showebb = true;
        }
    }
    selectebb(list, index) {
        this.ebb = list.name;
        this.showebb = false;
        console.log(this.ebb);
    }
    //// 2
    showDfe() {
        if (this.showfe == true) {
            this.showfe = false;
        }
        else {
            this.showfe = true;
        }
    }
    selectfe(list, index) {
        this.fe = list.name;
        this.showfe = false;
        console.log(this.fe);
    }
    //// 3
    showDsrcc() {
        if (this.showsrcc == true) {
            this.showsrcc = false;
        }
        else {
            this.showsrcc = true;
        }
    }
    selectsrcc(list, index) {
        this.srcc = list.name;
        this.showsrcc = false;
        console.log(this.srcc);
    }
    //// 4
    showDiit() {
        if (this.showiit == true) {
            this.showiit = false;
        }
        else {
            this.showiit = true;
        }
    }
    selectiit(list, index) {
        this.iit = list.name;
        this.showiit = false;
        console.log(this.iit);
    }
    showLiabillity() {
        if (this.showpliability == true) {
            this.showpliability = false;
        }
        else {
            this.showpliability = true;
        }
    }
    selectLiabillity(list, index) {
        this.pliability = list.name;
        this.showpliability = false;
    }
    Fullpackage() {
        if (this.showfullp == true) {
            this.showfullp = false;
        }
        else {
            this.showfullp = true;
        }
    }
    selectpackage(list, index) {
        this.Fpacakage = list.name;
        this.showfullp = false;
    }
    // calculateTax() {
    //   this.gibsproduct = JSON.parse(localStorage.getItem('gibsproduct'));
    //   this.productname = this.gibsproduct.productName;
    //   console.log(this.productname);
    //   if (this.productname == 'PRIVATE MOTOR-AUTO CLASSIC') {
    //     // 1.75;
    //     console.log(this.productname);
    //     this.producttax = (1.75 / 100) * this.valueofvehicle;
    //     if (this.ebb == 'Yes') {
    //       this.ebbtax = (0.5 / 100) * this.valueofvehicle;
    //     } else {
    //       this.ebbtax = 0;
    //     }
    //     if (this.fe == 'Yes') {
    //       this.fetax = (0.25 / 100) * this.valueofvehicle;
    //     } else {
    //       this.fetax = 0;
    //     }
    //     if (this.srcc == 'Yes') {
    //       this.srcctax = (0.25 / 100) * this.valueofvehicle;
    //     } else {
    //       this.srcctax = 0;
    //     }
    //     if (this.iit == 'Yes') {
    //       this.iittax = (0.2 / 100) * this.valueofvehicle;
    //     } else {
    //       this.iittax = 0;
    //     }
    //     console.log('this.producttax ---', this.producttax);
    //     console.log('this.ebbtax ---', this.ebbtax);
    //     console.log('this.fetax ---', this.fetax);
    //     console.log('this.srcctax ---', this.srcctax);
    //     console.log('this.iittax ---', this.iittax);
    //     this.overalltax =
    //       Number(this.producttax) +
    //       Number(this.ebbtax) +
    //       Number(this.fetax) +
    //       Number(this.srcctax) +
    //       Number(this.iittax);
    //     localStorage.setItem('overalltax', this.overalltax);
    //     console.log('this.overalltax ---', this.overalltax);
    //   }
    //   if (this.productname == 'PRIVATE MOTOR-AUTO PLUS') {
    //     // 3
    //     console.log(this.productname);
    //     this.producttax = (3 / 100) * this.valueofvehicle;
    //     this.ebbtax = 0;
    //     this.fetax = 0;
    //     this.srcctax = 0;
    //     if (this.iit == 'Yes') {
    //       this.iittax = (0.2 / 100) * this.valueofvehicle;
    //     } else {
    //       this.iittax = 0;
    //     }
    //     console.log('this.producttax ---', this.producttax);
    //     console.log('this.ebbtax ---', this.ebbtax);
    //     console.log('this.fetax ---', this.fetax);
    //     console.log('this.srcctax ---', this.srcctax);
    //     console.log('this.iittax ---', this.iittax);
    //     this.overalltax =
    //       Number(this.producttax) +
    //       Number(this.ebbtax) +
    //       Number(this.fetax) +
    //       Number(this.srcctax) +
    //       Number(this.iittax);
    //     localStorage.setItem('overalltax', this.overalltax);
    //     console.log('this.overalltax ---', this.overalltax);
    //   }
    //   if (this.productname == 'UBER CLASSIC MOTOR') {
    //     //  2.5
    //     console.log(this.productname);
    //     if (this.ebb == 'Yes') {
    //       this.ebbtax = (1 / 100) * this.valueofvehicle;
    //     } else {
    //       this.ebbtax = 0;
    //     }
    //     if (this.fe == 'Yes') {
    //       this.fetax = (0.25 / 100) * this.valueofvehicle;
    //     } else {
    //       this.fetax = 0;
    //     }
    //     if (this.srcc == 'Yes') {
    //       this.srcctax = (0.25 / 100) * this.valueofvehicle;
    //     } else {
    //       this.srcctax = 0;
    //     }
    //     if (this.iit == 'Yes') {
    //       this.iittax = (0.2 / 100) * this.valueofvehicle;
    //     } else {
    //       this.iittax = 0;
    //     }
    //     console.log('this.producttax ---', this.producttax);
    //     console.log('this.ebbtax ---', this.ebbtax);
    //     console.log('this.fetax ---', this.fetax);
    //     console.log('this.srcctax ---', this.srcctax);
    //     console.log('this.iittax ---', this.iittax);
    //     this.overalltax =
    //       Number(this.producttax) +
    //       Number(this.ebbtax) +
    //       Number(this.fetax) +
    //       Number(this.srcctax) +
    //       Number(this.iittax);
    //     localStorage.setItem('overalltax', this.overalltax);
    //     console.log('this.overalltax ---', this.overalltax);
    //   }
    // }
    testresult() {
    }
};
GibsplansPage.ctorParameters = () => [
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
GibsplansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-gibsplans',
        template: _gibsplans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gibsplans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GibsplansPage);



/***/ }),

/***/ 53278:
/*!**********************************************************!*\
  !*** ./src/app/gibsplans/gibsplans.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 3% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpYnNwbGFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBS0Y7O0FBSEE7RUFHRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdGIiwiZmlsZSI6ImdpYnNwbGFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG8gNSU7XHJcbn1cclxuLmxhYmVsIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5kcm9wYm94IHtcclxuICBtYXJnaW46IDQlIDAlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XHJcblxyXG59XHJcbi5pbm5lcmRyb3Bib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG4uZXVyby10ZXh0IHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbn1cclxuLmV1cm8tdGV4dDEge1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5pbWdkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuXHJcbi5pbnB1dGZpZWxkIHtcclxuICBtYXJnaW46IDMlIDAlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4uaW4tdGV4dCB7XHJcbiAgLS1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNyU7XHJcbiAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmFjdGl2ZXByb2R1Y3R7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcclxuICBwYWRkaW5nOjRweCAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pdGVtLXBpY2tlcntcclxuICAvLyB3aWR0aDogODUlO1xyXG4gIC8vIGhlaWdodDogNDhweDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XHJcblxyXG59XHJcbi5pb24tdHh0e1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 70577:
/*!**********************************************************!*\
  !*** ./src/app/gibsplans/gibsplans.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width: 100%\">\r\n          <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\" />\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Motor Insurance Quote</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- dropdown  start-->\r\n\r\n    <div class=\"label\">Vehicle Make</div>\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">{{vehicleMakeVal}}</div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\r\n        <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\r\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n            {{list.manufacturer}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- dropdown  end-->\r\n\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">{{vehicleModelVal}}</div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n            *ngIf=\"showVehicleModel==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleModel==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\r\n        <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\r\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n            {{list.model}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"label\">\r\n      Policyholder Type <span style=\"color: #a8b400\">*</span>\r\n    </div>\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">\r\n          {{policyhldrVal}}\r\n        </div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n            *ngIf=\"showPolicyholder==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPolicyholder==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showPolicyholder==true\">\r\n        <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\r\n          <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"policyhldrVal=='Private'\">\r\n      <div class=\"label\">First Name</div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"text\" placeholder=\"John\" class=\"in-text\">\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n      <div class=\"label\">Last Name</div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"text\" placeholder=\"Doe\" class=\"in-text\">\r\n          </ion-input>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"policyhldrVal=='Corporate'\">\r\n      <div class=\"label\">Company Name</div>\r\n      <div class=\"inputfield\">\r\n        <div class=\"innerdropbox\">\r\n          <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\"\r\n            class=\"in-text\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"label\">Email</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\"\r\n          class=\"in-text\">\r\n        </ion-input>\r\n      </div>\r\n    </div>\r\n    <div class=\"label\">Phone Number</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\">\r\n        </ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"label\">Address</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"address\" style=\"height: 48px\" type=\"text\"\r\n          placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND, LAGOS STATE\" class=\"in-text\">\r\n        </ion-input>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"label\">Vehicle Registration Number</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"regNo\" style=\"height: 48px\" type=\"text\" placeholder=\"MUS585AQ\" class=\"in-text\">\r\n        </ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"label\">Engine Number</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"engNo\" style=\"height: 48px\" type=\"text\" placeholder=\"1M286534\" class=\"in-text\">\r\n        </ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"label\">Chasis Number</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"chasisNo\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\"\r\n          class=\"in-text\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"label\">Vehicle Colour</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"vehclr\" style=\"height: 48px\" type=\"text\" placeholder=\"Colour\"\r\n          class=\"in-text\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"label\">Value of Vehicle</div>\r\n    <div class=\"inputfield\">\r\n      <div class=\"innerdropbox\">\r\n        <ion-input [(ngModel)]=\"valueofvehicle\" style=\"height: 48px\" type=\"tel\" placeholder=\"Value of Vehicle\"\r\n          class=\"in-text\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- dropdown  start 1-->\r\n    <div class=\"label\">Frequency</div>\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"showFrequency()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">{{fchoose}}</div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showf==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showf==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"productType!='Uber Classic'\">\r\n        <div *ngIf=\"showf==true\" style=\"height: 85px; overflow: scroll\">\r\n          <div *ngFor=\"let list of frequency; let i=index\" (click)=\"selectFrequency(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.f}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"productType=='Uber Classic'\">\r\n        <div *ngIf=\"showf==true\" style=\"height: 45px; overflow: scroll\">\r\n          <div *ngFor=\"let list of freqonce; let i=index\" (click)=\"selectFrequency(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.f}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"productType=='Auto Classic' || productType=='Uber Classic'\">\r\n      <div class=\"label\">Excess Buy Back</div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"showDebb()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{ebb}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showebb==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showebb==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showebb==true\" style=\"height: 70px; overflow: scroll\">\r\n          <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectebb(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- dropdown  start 2-->\r\n\r\n      <div class=\"label\">Flood Extension</div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"showDfe()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{fe}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showfe==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showfe==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showfe==true\" style=\"height: 70px; overflow: scroll\">\r\n          <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectfe(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- dropdown  end-->\r\n\r\n      <!-- dropdown  start 3-->\r\n\r\n      <div class=\"label\">Strike Riot & Civil Commotion</div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"showDsrcc()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{srcc}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showsrcc==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showsrcc==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showsrcc==true\" style=\"height: 70px; overflow: scroll\">\r\n          <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectsrcc(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- dropdown  end-->\r\n    </div>\r\n\r\n    <!-- dropdown  start 4-->\r\n\r\n    <div class=\"label\">Increase in TPPD</div>\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"showDiit()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">{{iit}}</div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showiit==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showiit==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showiit==true\" style=\"height: 70px; overflow: scroll\">\r\n        <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectiit(list,i)\">\r\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n            {{list.name}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"productType=='Uber Classic'\">\r\n      <div class=\"label\">Passenger Liability</div>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"showLiabillity()\">\r\n          <div class=\"euro-text\" style=\"width: 100%\">{{pliability}}</div>\r\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n              *ngIf=\"showpliability==false\" />\r\n            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showpliability==true\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showpliability==true\" style=\"height: 70px; overflow: scroll\">\r\n          <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectLiabillity(list,i)\">\r\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n              {{list.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"label\">Full Package</div>\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"Fullpackage()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">{{Fpacakage}}</div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showfullp==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showfullp==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showfullp==true\" style=\"height: 70px; overflow: scroll\">\r\n        <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectpackage(list,i)\">\r\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n            {{list.name}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- dropdown  end-->\r\n\r\n    <!-- <div class=\"label\">Gender</div>\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"openGenderList()\">\r\n        <div class=\"euro-text\" style=\"width: 100%\">{{genderVal}}</div>\r\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showGender==false\" />\r\n          <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showGender==true\">\r\n        <div *ngFor=\"let list of genderType; let i=index\" (click)=\"selectGenderType(list,i)\">\r\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n            {{list.gender}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"label\">Date of Birth</div>\r\n\r\n    <div class=\"item-picker\" style=\"\r\n        margin: 4% 0%;\r\n        --background: #e8e8e7;\r\n        height: 48px;\r\n        padding: 13px 15px;\r\n      \" (click)=\"showPickerDob = !showPickerDob\">\r\n      <div style=\"display: flex; align-items: center\">\r\n        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dateofbirth }}</ion-text>\r\n      </div>\r\n    </div> -->\r\n    <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n      *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\"\r\n      showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\r\n\r\n    <!-- <div class=\"label\">Year of Purchase</div>\r\n\r\n    <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\r\n      (click)=\"showPickerYop = !showPickerYop\">\r\n      <div style=\"display: flex; align-items:center\">\r\n\r\n        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yopdate }}</ion-text>\r\n      </div>\r\n\r\n    </div>\r\n    <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"year\"\r\n      *ngIf=\"showPickerYop\" #datetime [value]=\"yopValue\" size=\"cover\" (ionChange)=\"yopChanged(datetime.value)\"\r\n      showDefaultButtons=\"true\" (ionCancel)=\"showPickerYop=false\"></ion-datetime> -->\r\n\r\n    <!----------- seventh form ---------------------------->\r\n    <div *ngIf=\"motorproduct == 'COMPREHENSIVE '\">\r\n      <div class=\"label\">Year of Manufacture</div>\r\n\r\n      <div class=\"item-picker\" style=\"\r\n          margin: 4% 0%;\r\n          --background: #e8e8e7;\r\n          height: 48px;\r\n          padding: 13px 15px;\r\n        \" (click)=\"showPickerYom = !showPickerYom\">\r\n        <div style=\"display: flex; align-items: center\">\r\n          <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yomdate }}</ion-text>\r\n        </div>\r\n      </div>\r\n      <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\"\r\n        *ngIf=\"showPickerYom\" #datetime [value]=\"yomValue\" size=\"cover\" (ionChange)=\"yomChanged(datetime.value)\"\r\n        showDefaultButtons=\"true\" (ionCancel)=\"showPickerYom=false\"></ion-datetime>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <div style=\"width: 90%; margin: 8% auto\" (click)=\"submit()\">\r\n    <ion-button class=\"btn\">Continue</ion-button>\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_gibsplans_gibsplans_module_ts.js.map