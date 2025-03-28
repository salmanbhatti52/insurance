"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_car-insurance-details_car-insurance-details_module_ts"],{

/***/ 52392:
/*!*******************************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarInsuranceDetailsPageRoutingModule": () => (/* binding */ CarInsuranceDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _car_insurance_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-insurance-details.page */ 13999);




const routes = [
    {
        path: '',
        component: _car_insurance_details_page__WEBPACK_IMPORTED_MODULE_0__.CarInsuranceDetailsPage
    }
];
let CarInsuranceDetailsPageRoutingModule = class CarInsuranceDetailsPageRoutingModule {
};
CarInsuranceDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarInsuranceDetailsPageRoutingModule);



/***/ }),

/***/ 20829:
/*!***********************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarInsuranceDetailsPageModule": () => (/* binding */ CarInsuranceDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _car_insurance_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-insurance-details-routing.module */ 52392);
/* harmony import */ var _car_insurance_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-insurance-details.page */ 13999);







let CarInsuranceDetailsPageModule = class CarInsuranceDetailsPageModule {
};
CarInsuranceDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_insurance_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarInsuranceDetailsPageRoutingModule
        ],
        declarations: [_car_insurance_details_page__WEBPACK_IMPORTED_MODULE_1__.CarInsuranceDetailsPage]
    })
], CarInsuranceDetailsPageModule);



/***/ }),

/***/ 13999:
/*!*********************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarInsuranceDetailsPage": () => (/* binding */ CarInsuranceDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_insurance_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-insurance-details.page.html?ngResource */ 22683);
/* harmony import */ var _car_insurance_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-insurance-details.page.scss?ngResource */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);




/* eslint-disable @typescript-eslint/quotes */

/* eslint-disable prefer-arrow/prefer-arrow-functions */

/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */

/* eslint-disable no-var */

/* eslint-disable object-shorthand */

/* eslint-disable no-trailing-spaces */

/* eslint-disable @typescript-eslint/semi */







 // import {decode} from 'base64-arraybuffer';

const IMAGE_DIR = 'stored-images';
let CarInsuranceDetailsPage = class CarInsuranceDetailsPage {
  // For file images //
  constructor(location, router, api, actionSheetController, http) {
    this.location = location;
    this.router = router;
    this.api = api;
    this.actionSheetController = actionSheetController;
    this.http = http;
    this.vechilenewarray = [];
    this.EnchancednewClasses = [];
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
    this.vehicleModelVal = 'Please Select';
    this.floodExtVal = 'Please Select';
    this.excessBuyBackVal = 'Please Select';
    this.vehicleTrackingVal = 'Please Select';
    this.autoPlanVal = 'Please Auto Plan';
    this.autoPlanName = 'Please Auto Plan';
    this.policyhldrList = [{
      plcyhldrType: 'Private'
    }, {
      plcyhldrType: 'Corporate'
    }];
    this.floodExtValues = [{
      floodExt: 'Yes'
    }, {
      floodExt: 'No'
    }];
    this.ExcessBuyBack = [{
      excessByBack: 'Yes'
    }, {
      excessByBack: 'No'
    }];
    this.vehicleTrackingValues = [{
      vehicleTrack: 'Yes'
    }, {
      vehicleTrack: 'No'
    }];
    this.titleList = [{
      id: 0,
      title: 'Mr'
    }, {
      id: 1,
      title: 'Mrs'
    }, // {
    //   id: 2,
    //   title: 'Mrs',
    // },
    // {
    //   i: 3,
    //   title: 'Miss',
    // },
    {
      autoPlan: 2,
      title: 'Ms'
    }, {
      autoPlan: 3,
      title: 'Chief'
    }, {
      id: 4,
      title: 'Dr'
    }, {
      autoPlan: 5,
      title: 'Air Vice Marshall'
    }, {
      autoPlan: 6,
      title: 'Alhaji'
    } // {
    //   autoPlan: 9,
    //   title: 'Ms',
    // },
    // {
    //   autoPlan: 10,
    //   title: 'Chief',
    // }
    ];
    this.isavetitle = [{
      id: '0',
      title: 'Mr',
      active: false
    }, {
      id: '1',
      title: 'Ms',
      active: false
    }, {
      id: '2',
      title: 'Dr',
      active: false
    }, {
      id: '3',
      title: 'Air Vice Marshall',
      active: false
    }, {
      id: '4',
      title: 'Alhaji',
      active: false
    }, {
      id: '5',
      title: 'Ambassador',
      active: false
    }, {
      id: '6',
      title: 'Architect',
      active: false
    }, {
      id: '7',
      title: 'Barr',
      active: false
    }, {
      id: '8',
      title: 'Bishop',
      active: false
    }, {
      id: '9',
      title: 'Brig',
      active: false
    }, {
      id: '10',
      title: 'Brig GEN',
      active: false
    }, {
      id: '11',
      title: 'CAPT',
      active: false
    }, {
      id: '12',
      title: 'Chief(Mrs)',
      active: false
    }, {
      id: '13',
      title: 'Commander ',
      active: false
    }, {
      id: '14',
      title: 'Dr(Mrs)',
      active: false
    }, {
      id: '15',
      title: 'Elder',
      active: false
    }, {
      id: '16',
      title: 'Hajia',
      active: false
    }, {
      id: '17',
      title: 'Hajia(Chief)',
      active: false
    }, {
      id: '18',
      title: 'His Excellency',
      active: false
    }, {
      id: '19',
      title: 'Lt Col',
      active: false
    }, {
      id: '21',
      title: 'Major',
      active: false
    }, {
      id: '22',
      title: 'Major Gen',
      active: false
    }, {
      id: '23',
      title: 'Master',
      active: false
    }, {
      id: '24',
      title: 'Professor',
      active: false
    }, {
      id: '25',
      title: 'Rev Sis',
      active: false
    }, {
      id: '26',
      title: 'Reverend',
      active: false
    }, {
      id: '27',
      title: 'Senator',
      active: false
    }];
    this.autoPlansOfChoice = [{
      autoPlan: 'Auto Compact (2%) (Third Party Fire & Theft)',
      value: 'auto_compact'
    }, {
      autoPlan: 'Auto Bronze (2.5%)',
      value: 'auto_bronze'
    }, {
      autoPlan: 'Auto Silver (3%)',
      value: 'auto_silver'
    }, {
      autoPlan: 'Auto Gold (3.5%)',
      value: 'auto_gold'
    }, {
      autoPlan: 'Auto Platinum (4%)',
      value: 'auto_platinum'
    }];
    this.ageGroupList = [{
      id: 1,
      title: '18 - 65 Years Old'
    }, {
      id: 2,
      title: '66 - 75 Years Old'
    }, {
      id: 3,
      title: '76 - 80 Years Old'
    }];
    this.roadSideAssistance = [{
      roadSide: 'Yes'
    }, {
      roadSide: 'No'
    }];
    this.Paymentfrequency = [{
      id: '0',
      title: 'Monthly',
      active: false
    }, {
      id: '1',
      title: 'Quarterly',
      active: false
    }, {
      id: '2',
      title: 'Half-yearly',
      active: false
    }, {
      id: '3',
      title: 'Yearly',
      active: false
    }];
    this.Pfrequency = 'Please Select';
    this.showpaymentfrequency = false;
    this.sumassured = 'Please Select';
    this.showsumassured = false;
    this.sumassuredarray = [{
      id: '0',
      value: '100000',
      active: false
    }, {
      id: '1',
      value: '200000',
      active: false
    }, {
      id: '2',
      value: '300000',
      active: false
    }, {
      id: '3',
      value: '400000',
      active: false
    }, {
      id: '4',
      value: '500000',
      active: false
    }, {
      id: '5',
      value: '600000',
      active: false
    }, {
      id: '6',
      value: '700000',
      active: false
    }, {
      id: '7',
      value: '800000',
      active: false
    }, {
      id: '8',
      value: '900000',
      active: false
    }, {
      id: '9',
      value: '1000000',
      active: false
    }]; // valuetype = 'Third Party';

    this.vehicleModelNew = [];
    this.draftArr = '';
    this.fullName = ''; // -- For Travel insurance -- //

    this.passPortNo = '';
    this.nationality = '';
    this.destination = 'NA';
    this.kinInfo = ''; // -- For Travel insurance -- //

    this.regNo = '';
    this.engNo = '';
    this.chasisNo = '';
    this.vehclr = '';
    this.clientAddress = '';
    this.referrerData = '';
    this.blobMeanID = new Blob();
    this.blobLicence = new Blob();
    this.imgURL = '';
    this.imgURL1 = '';
    this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
    this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
    this.yopValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy');
    this.yomValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy');
    this.showReferrer = false;
    this.showPickerYop = false;
    this.showPickerYom = false;
    this.showPickerDob = false;
    this.showPickerCorp = false;
    this.showGender = false;
    this.subProductName = localStorage.getItem('subProName');
    this.productname = localStorage.getItem('productName');
    this.genderVal = 'Please Select';
    this.referrerVal = 'Please Select';
    this.genderType = [{
      gender: 'Male'
    }, {
      gender: 'Female'
    }]; // For file images //

    this.passPort = {
      file: '',
      base64: ''
    };
    this.vehicleLicence = {
      file: '',
      base64: ''
    };
    this.driverLicence = {
      file: '',
      base64: ''
    };
    this.vehFrontPic = {
      file: '',
      base64: ''
    };
    this.vehRearPic = {
      file: '',
      base64: ''
    };
    this.vehPicSideViewLeft = {
      file: '',
      base64: ''
    };
    this.vehPicSideViewRight = {
      file: '',
      base64: ''
    };
    this.vehPicDashboard = {
      file: '',
      base64: ''
    };
    this.inspectionForm = {
      file: '',
      base64: ''
    };
    this.utilityBills = {
      file: '',
      base64: ''
    };
    this.policyhldrVal = '';
    this.vechileMakenew = [];
  }

  ngOnInit() {
    // this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    // console.log('sssssssssssssssss', this.draftArr);
    this.subProName = localStorage.getItem('subProName');
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems')); // this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));

    this.getReferrerList();
    console.log('new Date().toISOString()===', new Date().toISOString());
    this.subProName = localStorage.getItem('subProName');
    console.log('subproduct name-----', this.subProName);
    this.getCarVehicleTypeCls();
    this.getCarMakeCompanies();
    this.userEmail = localStorage.getItem('email');
    this.mobNumber = localStorage.getItem('number');

    if (this.mobNumber == '' || this.mobNumber == 'null') {
      this.mobNumber = '';
    }
  }

  ionViewWillEnter() {
    this.vehicleVal = 'Please Select';
    this.vehicleMakeVal = 'Select Manufacturer';
    this.policyhldrVal = 'Please Select';
    this.vehicleModelVal = 'Select Model';
    this.fName = localStorage.getItem('fname');
    ;
    this.lName = localStorage.getItem('lname');
    this.compName = '';
    console.log('fullName----', localStorage.getItem('userfullname'));
    console.log('policyhldrVal----', localStorage.getItem('policyhldrVal'));
    this.policyhldrVal = localStorage.getItem('policyhldrVal');

    if (this.policyhldrVal == 'Corporate') {
      this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
      this.genderVal = 'Male';
    } else {
      this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd');
    }

    if (this.policyhldrVal == 'Private') {
      this.dobValue = localStorage.getItem('policy_birthday_date');
      this.genderVal = 'Please Select';
    } else {
      this.dobValue = localStorage.getItem('policy_birthday_date');
      this.genderVal = 'Male';
    }

    console.log('this.genderVal----', this.genderVal);
    this.fullName = '';
    this.regNo = '';
    this.engNo = '';
    this.chasisNo = '';
    this.vehclr = '';
    this.clientAddress = ''; // this.genderVal = 'Please Select';

    this.referrerVal = 'Please Select';
    this.imgURL = '';
    this.imgURL1 = '';
    this.referrerData = '';
    this.fullName = localStorage.getItem('userfullname');
  }

  getReferrerList() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_referred_by"}';
    this.api.insertData(myData).subscribe(res => {
      console.log(res);

      if (res.message != '') {
        this.referrerList = res.values;
        console.log(this.referrerList);
      }
    }, err => {
      console.log(err);
    });
  }

  dobChanged(value) {
    this.dobValue = value;
    console.log(this.dobValue); // this.formattedString = format(parseISO(value), ' MMM d, yyyy')

    this.showPickerDob = false;
  }

  corpChanged(value) {
    this.corpValue = value;
    console.log(this.corpValue); // this.formattedString = format(parseISO(value), ' MMM d, yyyy')

    this.showPickerCorp = false;
  }

  yopChanged(value) {
    this.yopValue = value;
    console.log(this.yopValue); // this.formattedString = format(parseISO(value), ' MMM d, yyyy')

    this.showPickerYop = false;
  }

  yomChanged(value) {
    this.yomValue = value;
    console.log(this.yomValue); // this.formattedString = format(parseISO(value), ' MMM d, yyyy')

    this.showPickerYom = false;
  }

  openGenderList() {
    if (this.showGender == true) {
      this.showGender = false;
    } else {
      this.showGender = true;
    }
  }

  openReferrerList() {
    if (this.showReferrer == true) {
      this.showReferrer = false;
    } else {
      this.showReferrer = true;
    }
  }

  selectGenderType(list) {
    console.log('hhhhhhhhhhhhhhhhhhhh');
    this.genderVal = list.gender;
    this.showGender = false;
  }

  selectReferrerType(list) {
    this.referrerVal = list;
    this.showReferrer = false;
  }

  goback() {
    this.location.back();
  }

  motorValidation() {
    let response = {
      message: 'message',
      status: false
    };

    if (this.fullName == '') {
      response.message = 'Full Name required';
    } else if (this.regNo == '') {
      response.message = 'Vehicle Reg. No. required';
    } else if (this.engNo == '') {
      response.message = 'Engine No. required';
    } else if (this.chasisNo == '') {
      response.message = 'Chasis No. required';
    } else if (this.vehclr == '') {
      response.message = 'Vehicle Colour required';
    } else if (this.clientAddress == '') {
      response.message = 'Address required';
    } else if (this.genderVal == 'Please Select') {
      response.message = 'Please Select Gender';
    } else if (this.vehicleLicence.file == '') {
      response.message = 'Vehicle License required';
    } else if (this.driverLicence.file == '') {
      response.message = 'Driver License/N.I.C required';
    } else if (this.vehFrontPic.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Vehicle Picture Front View required';
    } else if (this.vehRearPic.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Vehicle Picture Rear View required';
    } else if (this.vehPicSideViewLeft.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Vehicle Picture Side View(Left) required';
    } else if (this.vehPicSideViewRight.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Vehicle Picture Side View(Right) required';
    } else if (this.vehPicDashboard.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Dashboard (displaying Kilometer of vehicle) required';
    } else if (this.utilityBills.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Utility Bill required';
    } else if (this.inspectionForm.file == '' && (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants')) {
      response.message = 'Form inspection required';
    } else if (this.referrerVal == 'Please Select') {
      response.message = 'Please Select Referrer';
    } else if (this.referrerData == '') {
      response.message = 'Referrer Details required';
    } else {
      response.message = 'Motor validated';
      response.status = true;
    }

    return response;
  }

  travelValidation() {
    let response = {
      message: 'message',
      status: false
    };

    if (this.fullName == '') {
      response.message = 'Full Name required';
    } else if (this.passPortNo == '') {
      response.message = 'Passport number required';
    } else if (this.nationality == '') {
      response.message = 'Nationality required';
    } // else if (this.destination == '') {
    //   response.message = 'Destination required';
    // } 
    else if (this.kinInfo == '') {
      response.message = 'kin info required';
    } else if (this.clientAddress == '') {
      response.message = 'Address required';
    } else if (this.genderVal == 'Please Select') {
      response.message = 'Please Select Gender';
    } else if (this.passPort.file == '') {
      response.message = 'Passport image required';
    } else if (this.referrerVal == 'Please Select') {
      response.message = 'Please Select Referrer';
    } else if (this.referrerData == '') {
      response.message = 'Referrer Details required';
    } else {
      response.message = 'Travel validated';
      response.status = true;
    }

    return response;
  }

  createProposal(propsalType) {
    var _this = this;

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('propsalType---formValidationResult', propsalType);
      console.log('this.genderVal----', _this.genderVal);
      let formValidationResult = {
        message: 'This product is under developement',
        status: false
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders();
      var form = new FormData();
      form.append('method', 'save_product_proposal');

      switch (propsalType) {
        case 'Motor Insurance':
          formValidationResult = _this.motorValidation();
          form.append('product_id', localStorage.getItem('subProId'));
          form.append('quote_id', localStorage.getItem('quote_id'));
          form.append('name', _this.fullName);
          form.append('registration_number', _this.regNo);
          form.append('engine_number', _this.engNo);
          form.append('chasis_number', _this.chasisNo);
          form.append('vehicle_colour', _this.vehclr);
          form.append('address', _this.clientAddress);
          form.append('gender', _this.genderVal);
          form.append('date_of_birth', _this.dobValue);
          form.append('incorporation', _this.corpValue);
          form.append('year_of_purchase', _this.yopValue);
          form.append('year_of_manufacture', _this.yomValue);
          form.append('referred_by', _this.referrerVal);
          form.append('referrer_details', _this.referrerData);
          form.append('means_of_id', _this.driverLicence.file);
          form.append('vehicle_licence', _this.vehicleLicence.file);
          form.append('verify_token', localStorage.getItem('token'));

          if (_this.subProductName == 'Enhanced Comprehensive' || _this.subProductName == 'Auto Variants') {
            form.append('vehicle_picture_front_view', _this.vehFrontPic.file);
            form.append('vehicle_picture_rear_view', _this.vehRearPic.file);
            form.append('vehicle_picture_side_view_left', _this.vehPicSideViewLeft.file);
            form.append('vehicle_picture_side_view_right', _this.vehPicSideViewRight.file);
            form.append('vehicle_picture_dashboard', _this.vehPicDashboard.file);
            form.append('inspection_form', _this.inspectionForm.file);
            form.append('utility_bill', _this.utilityBills.file);
          }

          break;

        case 'Travel Insurance':
          formValidationResult = _this.travelValidation();
          form.append('product_id', localStorage.getItem('subProId'));
          form.append('quote_id', localStorage.getItem('quote_id'));
          form.append('name', _this.fullName);
          form.append('passport_number', _this.passPortNo);
          form.append('nationality', _this.nationality);
          form.append('destination', _this.destination);
          form.append('kin_info', _this.kinInfo);
          form.append('address', _this.clientAddress);
          form.append('gender', _this.genderVal);
          form.append('date_of_birth', _this.dobValue);
          form.append('international_passport', _this.passPort.file);
          form.append('referred_by', _this.referrerVal);
          form.append('referrer_details', _this.referrerData);
          form.append('verify_token', localStorage.getItem('token'));
          break;

        default:
      } // test url= 'https://www.cornerstone.com.ng/devtest/webservice'
      // live url: 'https://www.cornerstone.com.ng/webservice'


      console.log('formValidationResult----', formValidationResult);

      if (formValidationResult.status) {
        const config = {
          method: 'post',
          url: _this.api.url,
          headers: headers,
          data: form
        };
        console.log('form form config', config);
        yield _this.createQuote();

        _this.http.post(config.url, config.data, {
          headers: config.headers
        }).subscribe(res => {
          _this.propsalResponse = res;
          console.log(res);

          if (_this.propsalResponse.status_no == 0) {
            // this.api.presenttoast(this.propsalResponse.message);
            _this.api.alertboxshow(_this.propsalResponse.message);
          } else {
            //ali
            _this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
            console.log(_this.draftArr);

            for (var i = 0; i < _this.draftArr.length; i++) {
              var product_id = _this.draftArr[i].product_id;
              var quote_id = _this.draftArr[i].quote_id;
              var product_name = _this.draftArr[i].subProName;
              var quoteItems = _this.draftArr[i].quoteItems; // var path = this.draftArr[i].path;

              if (_this.draftArr.quote_id == res.quote.id) {
                _this.draftArr.splice(i, 1); // imageurl='https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg'


                var obj = {
                  title: product_name,
                  product_id: product_id,
                  quote_id: quote_id,
                  subProName: product_name,
                  quoteItems: quoteItems,
                  image: 'https://www.cornerstone.com.ng/assets/uploads/product/2.jpg',
                  path: '/payment',
                  datetime: new Date().toISOString()
                };

                _this.draftArr.push(obj);
              }
            }

            localStorage.setItem('draftArr', JSON.stringify(_this.draftArr)); // var data = '';
            // this.api.presenttoast(data.info.message);
            // this.api.presenttoast("Proposal completed start payment");

            _this.router.navigate(['/payment']);

            localStorage.setItem('productres', JSON.stringify(res));
            localStorage.setItem('dob', _this.dobValue);
            localStorage.setItem('genderVal', _this.genderVal);
            localStorage.setItem('regNo', _this.regNo);
            localStorage.setItem('engNo', _this.engNo);
            localStorage.setItem('chasisNo', _this.chasisNo);
            localStorage.setItem('vehclr', _this.vehclr);
            localStorage.setItem('clientAddress', _this.clientAddress);
            localStorage.setItem('yomValue', _this.yomValue);
            localStorage.setItem('agentcode', _this.referrerData);
          }

          console.log('Response after propsal', JSON.stringify(res));
        }, err => {
          console.log('err===', err);
        });
      } else {
        // this.api.presenttoast(formValidationResult.message);
        _this.api.alertboxshow(formValidationResult.message);
      }
    })();
  }

  selectFile(event, type) {
    console.log('type --- ', type);
    console.log('linceise --- ', event.target.files[0]);
    this.getBase64(event.target.files[0]).then(data => {
      let file = event.target.files[0];
      let base64 = data;

      if (type == 'vehicleLicence') {
        this.vehicleLicence.file = file;
        this.vehicleLicence.base64 = base64;
      } else if (type == 'driverLicence') {
        this.driverLicence.file = file;
        this.driverLicence.base64 = base64;
      } else if (type == 'vehFrontPic') {
        this.vehFrontPic.file = file;
        this.vehFrontPic.base64 = base64;
      } else if (type == 'vehRearPic') {
        this.vehRearPic.file = file;
        this.vehRearPic.base64 = base64;
      } else if (type == 'vehPicSideViewLeft') {
        this.vehPicSideViewLeft.file = file;
        this.vehPicSideViewLeft.base64 = base64;
      } else if (type == 'vehPicSideViewRight') {
        this.vehPicSideViewRight.file = file;
        this.vehPicSideViewRight.base64 = base64;
      } else if (type == 'vehPicDashboard') {
        this.vehPicDashboard.file = file;
        this.vehPicDashboard.base64 = base64;
      } else if (type == 'inspectionForm') {
        this.inspectionForm.file = file;
        this.inspectionForm.base64 = base64;
      } else if (type == 'utilityBills') {
        this.utilityBills.file = file;
        this.utilityBills.base64 = base64;
      } // -- For travel insurance -- //
      else if (type == 'passPort') {
        this.passPort.file = file;
        this.passPort.base64 = base64;
      } // -- For travel insurance -- //

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

  createQuote() {
    let formValidationResult = {
      message: 'This product is under developement',
      status: false
    };
    console.log('checkTest---', formValidationResult);
    let myData = '';
    formValidationResult = this.validateThirdParty();
    myData = 'myData={\r\n    "product_id":"' + localStorage.getItem('subProId') + '",\r\n    "vehicle_class":"' + this.vehicleVal + '",\r\n    "first_name": "' + this.fName + '",\r\n    "last_name":"' + this.lName + '",\r\n    "vehicle_manufacturer":"' + this.vehicleMakeVal + '",\r\n    "vehicle_model":"' + this.vehicleModelVal + '",\r\n    "policyholder_type":"' + this.policyhldrVal + '",\r\n    "mobile":"' + this.mobNumber + '",\r\n    "company_name":"' + this.compName + '",\r\n    "email":"' + this.userEmail + '",\r\n    "verify_token":"' + localStorage.getItem('token') + '",\r\n    "method": "save_product_quote" \r\n}';

    if (formValidationResult.status) {
      // --- Calling API To create quote --- //
      console.log('this.policyhldrVal---', this.policyhldrVal);
      localStorage.setItem('policyhldrVal', this.policyhldrVal);
      this.api.insertData(myData).subscribe(data => {
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
            datetime: new Date().toISOString()
          };
          this.draftArr = JSON.parse(localStorage.getItem('draftArr'));

          if (this.draftArr) {
            this.draftArr.push(obj);
          } else {
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
          localStorage.setItem('phonenumber', this.mobNumber); // this.router.navigate(['/yourquote']);
        } else {
          this.api.presenttoast(data.message);
        }
      }, err => {
        console.log(err);
      }); // --- Calling API To create quote --- //
    } else {
      this.api.presenttoast(formValidationResult.message);
    }
  }

  validateThirdParty() {
    const response = {
      message: 'message',
      status: false
    };

    if (this.vehicleVal == 'Please Select') {
      response.message = 'Vehicle Class required';
    } else if (this.vehicleMakeVal == 'Manufacturer') {
      response.message = 'Vehicle Make required';
    } else if (this.vehicleModelVal == 'Select Model') {
      response.message = 'Vehicle Model required';
    } else if (this.policyhldrVal == 'Please Select') {
      response.message = 'Policyholder Type required';
    } else if (this.policyhldrVal == 'Private') {
      console.log('private');

      if (this.fName == '') {
        response.message = 'First Name required';
      } else if (this.lName == '') {
        response.message = 'Last Name required';
      } else if (this.userEmail == '') {
        console.log('not private');
        response.message = 'Email Address required';
      } else if (this.mobNumber == '') {
        response.message = 'Phone Number required';
      } else {
        response.message = 'Third party validated';
        response.status = true;
      }
    } else if (this.policyhldrVal == 'Corporate') {
      if (this.compName == '') {
        response.message = 'Company Name required';
      } else if (this.userEmail == '') {
        response.message = 'Email Address required';
      } else if (this.mobNumber == '') {
        response.message = 'Phone Number required';
      } else {
        response.message = 'Third party validated';
        response.status = true;
      }
    }

    return response;
  }

  getCarVehicleTypeCls() {
    // this.api.showLoader()
    if (this.subProName === 'Third Party') {
      const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_class":"vehicle_class_thirdparty","method":"get_car_classes"}';
      this.api.insertData(myData).subscribe(res => {
        console.log(res);
        this.api.hideLoader();

        if (res.values !== '') {
          this.vehicleClass = res.values;
          console.log(this.vehicleClass);
          this.vehicleClass.map((val, index) => {
            const data = {
              name: val,
              active: false
            };
            this.vechilenewarray.push(data);
          });
          console.log('dadasdsadsa======', this.vechilenewarray);
        }
      }, err => {
        console.log('err', err);
        this.api.hideLoader();
      });
    } else if (this.subProName == 'Enhanced Comprehensive') {
      const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_classes","product_class":"vehicle_class_enhanced_comprehensive"}';
      this.api.insertData(myData).subscribe(res => {
        console.log(res);
        this.api.hideLoader();

        if (res.values != '') {
          this.eCcarClasses = res.values;
          console.log('Enhanced Comprehensive car classes==', this.eCcarClasses);
          this.eCcarClasses.map((val, index) => {
            const data = {
              name: val,
              active: false
            };
            this.EnchancednewClasses.push(data);
          }); // console.log('EnchancednewClasses======', this.EnchancednewClasses);
        }
      }, err => {
        console.log(err);
      });
    } else if (this.subProName == 'Auto Variants') {} else {}
  }

  getCarMakeCompanies() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_companies"}';
    this.api.insertData(myData).subscribe(res => {
      console.log(res);

      if (res.values != '') {
        this.vehicleMake = res.values;
        console.log(this.vehicleMake);
        this.vehicleMake.map((val, index) => {
          const data = {
            manufacturer: val.manufacturer,
            active: false
          };
          this.vechileMakenew.push(data);
        }); // console.log('vechileMakenew array====', this.vechileMakenew);
      }
    }, err => {
      console.log(err);
    });
  }

  openRoadSideAssistance() {
    if (this.showRoadSide == true) {
      this.showRoadSide = false;
    } else {
      this.showRoadSide = true;
    }
  }

  openAutoPlanList() {
    if (this.showPlan == true) {
      this.showPlan = false;
    } else {
      this.showPlan = true;
    }
  }

  openDropDwon(type) {
    console.log('DROPDOWN TYPE ----', type);

    if (type == 'title') {
      this.showTitle = !this.showTitle;
    } else if (type == 'age') {
      this.showAgeGroup = !this.showAgeGroup;
    }
  }

  openVehicleList() {
    if (this.showVehicle == true) {
      this.showVehicle = false;
    } else {
      this.showVehicle = true;
    }
  }

  openVhclMakeList() {
    if (this.showMaker == true) {
      this.showMaker = false;
    } else {
      this.showMaker = true;
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
      }); // console.log('ddddddddddddddddd', this.vechilenewarray);
    }

    if (this.subProName == 'Enhanced Comprehensive') {
      this.EnchancednewClasses.map((val, i) => {
        if (index == i) {
          this.EnchancednewClasses[i].active = true;
        }

        if (index != i) {
          this.EnchancednewClasses[i].active = false;
        }
      }); // console.log('ddddddddddddddddd', this.EnchancednewClasses);
    }
  }

  selectDropDown(list, type) {
    console.log('type----', type);
    console.log('List data ----', list);

    if (type == 'title') {
      this.useTitle = list.title;
      this.showTitle = false;
    } else if (type == 'age') {
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

  getVehicleModels() {
    this.vehicleModelNew = [];
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_models","manufacturer":"' + this.vehicleMakeVal + '"}';
    this.api.insertData(myData).subscribe(res => {
      console.log(res);

      if (res.values != '') {
        this.vehicleModel = res.values;
        console.log(this.vehicleModel);
        this.vehicleModel.map((val, index) => {
          const data = {
            model: val.model,
            active: false
          };
          this.vehicleModelNew.push(data);
        });
        console.log('vehicleModelNew', this.vehicleModelNew);
      }
    }, err => {
      console.log(err);
    });
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

  opnenVehicleModelList() {
    if (this.showVehicleModel == true) {
      this.showVehicleModel = false;
    } else {
      this.showVehicleModel = true;
    }
  }

  openPolicyhldrList() {
    if (this.showPolicyholder == true) {
      this.showPolicyholder = false;
    } else {
      this.showPolicyholder = true;
    }
  }

  get_auto_reg_info_fun($ev) {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","registration_number":"' + this.regNo + '","method":"get_auto_reg_info"}';
    this.api.insertData(myData).subscribe(res => {
      console.log('get_auto_reg_info_fun=========', res);
      var car = res.response; // if (res.status_no == 1) {

      if (car.ownerName) {
        const [firstName, lastName] = car.ownerName.split(" ");
        this.fName = firstName;
        this.lName = lastName;
        this.compName = car.ownerName;
      }

      if (car.chassisNumber) {
        this.chasisNo = car.chassisNumber;
      }

      if (car.engineNumber) {
        this.engNo = car.engineNumber;
      }

      if (car.vehicleColor) {
        this.vehclr = car.vehicleColor;
      }

      if (car.vehicleMake) {
        this.vehicleMakeVal = car.vehicleMake;
      }

      if (car.vehicleModel) {
        this.vehicleModelVal = car.vehicleModel;
      } // }

    }, err => {
      console.log(err);
    });
  }

};

CarInsuranceDetailsPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}];

CarInsuranceDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-car-insurance-details',
  template: _car_insurance_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_car_insurance_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CarInsuranceDetailsPage);


/***/ }),

/***/ 4918:
/*!**********************************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color:#5D5D5D;\n  --placeholder-color:#5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight:400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius:12px ;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.filebtn {\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1pbnN1cmFuY2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFTjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTUo7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKRTtFQUNFLDRCQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNGLGdCQUFBO0VBQ0EsNkJBQUE7QUFTSjs7QUFMRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVFKOztBQU5FO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBVU47O0FBR0U7RUFHSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGTiIsImZpbGUiOiJjYXItaW5zdXJhbmNlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gIH1cbiAgLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzFBMjA2RDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5odGV4dHtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZsZXgtY2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgLmxhYmVse1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZHJvcGJveHtcbiAgICBtYXJnaW46IDQlIDAlO1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XG4gIFxuICB9XG4gIC5pbm5lcmRyb3Bib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgXG4gIH1cbiAgLmV1cm8tdGV4dHtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgXG4gIH1cbiAgLmV1cm8tdGV4dDF7XG4gICAgY29sb3I6ICM1RDVENUQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xuICB9XG4gIC5pbnB1dGZpZWxke1xuICAgIG1hcmdpbjogNCUgMCU7XG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG4gIC5pbi10ZXh0e1xuICAgIC0tY29sb3I6IzVENUQ1RDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbiAgICAgIC0tcGFkZGluZy10b3A6IDUlO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjQwMDtcbiAgICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XG4gIH1cbiAgXG4gIC5idG57XG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgIC0tYm9yZGVyLXJhZGl1czoxMnB4IDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbiAgLmlvbi10eHR7XG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjpibGFjaztcbiAgICB9XG4gICAgLmZpbGVidG57XG4gICAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIC8vIC0tY29sb3I6IzVENUQ1RDtcbiAgICAgXG4gICAgICAvLyAtLXBhZGRpbmctc3RhcnQ6IDclO1xuICAgICAgLy8gICAtLXBhZGRpbmctdG9wOiA1JTtcbiAgICAgIC8vICAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAvLyAgIC0tcGFkZGluZy1lbmQ6MTVweDtcbiAgICAgIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLy8gZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogI0U4RThFNztcbiAgICAgIC8vIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgLy8gLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xuICAgIH1cbiAgLml0ZW0tcGlja2Vye1xuICAgICAgLy8gd2lkdGg6IDg1JTtcbiAgICAgIC8vIGhlaWdodDogNDhweDtcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDBweCAxNnB4IDBweDtcbiAgICAgIFxuICB9Il19 */";

/***/ }),

/***/ 22683:
/*!**********************************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row>\n            <ion-col size=\"2\" style=\"padding-left: 25px\">\n                <ion-buttons>\n                    <div style=\"width:100% ;\">\n                        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n                    </div>\n                </ion-buttons>\n\n                <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\">Buy Online</div>\n            </ion-col>\n            <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\">\n        <div class=\"htext\">Your Details</div>\n        <div class=\"flex-cls\">\n            <div style=\"width: 80%; margin: 0% auto\" *ngIf=\"productname=='Motor Insurance'\">\n\n                <div *ngIf=\"subProName=='Third Party'\">\n                    <div class=\"thirdParty-wrapper\">\n                        <div class=\"htext\" style=\"color: black; font-size: 18px\">\n                            Please provide your details below to get your quote\n                        </div>\n                        <div class=\"flex-cls\">\n\n                            <div style=\"width: 100%; margin: 0% auto\">\n                                <!----------- fifth form ---------------------------->\n                                <div class=\"label\">\n                                    Vehicle Registration Number <span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input (ionBlur)=\"get_auto_reg_info_fun($event)\" [(ngModel)]=\"regNo\" style=\"height: 48px\" type=\"text\" placeholder=\"MUS585AQ\" class=\"in-text\">\n                                        </ion-input>\n                                    </div>\n                                </div>\n\n                                <!----------- fifth form ---------------------------->\n\n                                <div class=\"label\">\n                                    Vehicle Class <span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"dropbox\" style=\"position: relative\">\n                                    <div class=\"innerdropbox\" (click)=\"openVehicleList()\">\n                                        <div class=\"euro-text\" style=\"width: 100%\">\n                                            {{vehicleVal}}\n                                        </div>\n                                        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicle==false\" />\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicle==true\" />\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showVehicle==true\" style=\"height: 100px; overflow: scroll\">\n                                        <div *ngFor=\"let list of vechilenewarray; let i=index\" (click)=\"selectVehicleCls(list,i)\">\n                                            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                                {{list.name}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"label\">\n                                    Vehicle Make <span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"dropbox\">\n                                    <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n                                        <div class=\"euro-text\" style=\"width: 100%\">\n                                            {{vehicleMakeVal}}\n                                        </div>\n                                        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\" />\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\" />\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n                                        <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\n                                            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                                {{list.manufacturer}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"label\">\n                                    Vehicle Model <span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"dropbox\">\n                                    <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n                                        <div class=\"euro-text\" style=\"width: 100%\">\n                                            {{vehicleModelVal}}\n                                        </div>\n                                        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showVehicleModel==false\" />\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showVehicleModel==true\" />\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showVehicleModel==true\" style=\"height: 100px; overflow: scroll\">\n                                        <div *ngFor=\"let list of vehicleModelNew;let i=index\" (click)=\"selectVehicleModel(list,i)\">\n                                            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n                                                {{list.model}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"label\">\n                                    Policyholder Type <span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"dropbox\">\n                                    <div class=\"innerdropbox\" (click)=\"openPolicyhldrList()\">\n                                        <div class=\"euro-text\" style=\"width: 100%\">\n                                            {{policyhldrVal}}\n                                        </div>\n                                        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showPolicyholder==false\" />\n                                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showPolicyholder==true\" />\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showPolicyholder==true\">\n                                        <div *ngFor=\"let list of policyhldrList\" (click)=\"selectPolicyholder(list)\">\n                                            <div class=\"euro-text1\">{{list.plcyhldrType}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"policyhldrVal=='Private'\">\n                                    <div class=\"label\">First Name</div>\n                                    <div class=\"inputfield\">\n                                        <div class=\"innerdropbox\">\n                                            <ion-input [(ngModel)]=\"fName\" style=\"height: 48px\" type=\"email\" placeholder=\"John\" class=\"in-text\"></ion-input>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"policyhldrVal=='Private'\">\n                                    <div class=\"label\">Last Name</div>\n                                    <div class=\"inputfield\">\n                                        <div class=\"innerdropbox\">\n                                            <ion-input [(ngModel)]=\"lName\" style=\"height: 48px\" type=\"email\" placeholder=\"Doe\" class=\"in-text\">\n                                            </ion-input>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"policyhldrVal=='Corporate'\">\n                                    <div class=\"label\">Company Name</div>\n                                    <div class=\"inputfield\">\n                                        <div class=\"innerdropbox\">\n                                            <ion-input [(ngModel)]=\"compName\" style=\"height: 48px\" type=\"email\" placeholder=\"phenologix\" class=\"in-text\"></ion-input>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"label\">\n                                    Email Address<span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"userEmail\" style=\"height: 48px\" type=\"email\" placeholder=\"johndoe@gmail.com\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n\n                                <div class=\"label\">\n                                    Phone Number <span style=\"color: #a8b400\">*</span>\n                                </div>\n                                <div class=\"inputfield\">\n                                    <div class=\"innerdropbox\">\n                                        <ion-input [(ngModel)]=\"mobNumber\" style=\"height: 48px\" type=\"tel\" placeholder=\"923565466554\" class=\"in-text\"></ion-input>\n                                    </div>\n                                </div>\n                                <!-- <div style=\"width: 90%; margin: 8% auto\" (click)=\"createQuote(subProName)\">\n                                    <ion-button class=\"btn\">Continue</ion-button>\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\"> Full Name\n                    <span style=\"color: #a8b400\">*Please re-enter your full name as you want it to appear on your certificate.</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"fullName\" style=\"height: 48px\" type=\"text\" placeholder=\"Full name\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n\n\n                <div class=\"label\">\n                    Engine Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"engNo\" style=\"height: 48px\" type=\"text\" placeholder=\"1M286534\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Chasis Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"chasisNo\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Vehicle Colour <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"vehclr\" style=\"height: 48px\" type=\"text\" placeholder=\"\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">Address <span style=\"color: #a8b400\">*</span></div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"clientAddress\" style=\"height: 48px\" type=\"text\" placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND,LAGOS STATE\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <div *ngIf=\"policyhldrVal == 'Private'\">\n                    <!----------- seventh form ---------------------------->\n                    <div class=\"label\">Gender <span style=\"color: #a8b400\">*</span></div>\n                    <div class=\"dropbox\">\n                        <div class=\"innerdropbox\" (click)=\"openGenderList()\">\n                            <div class=\"euro-text\">{{genderVal}}</div>\n                            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                                <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showGender===false\" />\n                                <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\n                            </div>\n                        </div>\n                        <div *ngIf=\"showGender==true\">\n                            <div *ngFor=\"let list of genderType\" (click)=\"selectGenderType(list)\">\n                                <div class=\"euro-text1\">{{list.gender}}</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!----------- seventh form ---------------------------->\n                    <div class=\"label\">\n                        Date of Birth\n                        <span style=\"color: #a8b400\">*This is a NAICOM KYC Reqirement.</span>\n                    </div>\n\n                    <div class=\"item-picker\" style=\"\n              margin: 4% 0%;\n              --background: #e8e8e7;\n              height: 48px;\n              padding: 13px 15px;\n            \" (click)=\"showPickerDob = !showPickerDob\">\n                        <div style=\"display: flex; align-items: center\">\n                            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dobValue }}</ion-text>\n                        </div>\n                    </div>\n                    <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\n                </div>\n                <div *ngIf=\"policyhldrVal == 'Corporate'\">\n                    <!----------- seventh form ---------------------------->\n                    <div class=\"label\">\n                        Incorporation <span style=\"color: #a8b400\">*</span>\n                    </div>\n\n                    <div class=\"item-picker\" style=\"\n              margin: 4% 0%;\n              --background: #e8e8e7;\n              height: 48px;\n              padding: 13px 15px;\n            \" (click)=\"showPickerCorp = !showPickerCorp\">\n                        <div style=\"display: flex; align-items: center\">\n                            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ corpValue }}</ion-text>\n                        </div>\n                    </div>\n                    <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerCorp\" #datetime [value]=\"corpValue\" size=\"cover\" (ionChange)=\"corpChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerCorp=false\"></ion-datetime>\n\n                    <!----------- seventh form ---------------------------->\n                </div>\n                <div class=\"label\">\n                    Year of Purchase <span style=\"color: #a8b400\">*</span>\n                </div>\n\n                <div class=\"item-picker\" style=\"\n            margin: 4% 0%;\n            --background: #e8e8e7;\n            height: 48px;\n            padding: 13px 15px;\n          \" (click)=\"showPickerYop = !showPickerYop\">\n                    <div style=\"display: flex; align-items: center\">\n                        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yopValue }}</ion-text>\n                    </div>\n                </div>\n                <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\" *ngIf=\"showPickerYop\" #datetime [value]=\"yopValue\" size=\"cover\" (ionChange)=\"yopChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerYop=false\"></ion-datetime>\n\n                <!----------- seventh form ---------------------------->\n                <div class=\"label\">\n                    Year of Manufacture <span style=\"color: #a8b400\">*</span>\n                </div>\n\n                <div class=\"item-picker\" style=\"\n            margin: 4% 0%;\n            --background: #e8e8e7;\n            height: 48px;\n            padding: 13px 15px;\n          \" (click)=\"showPickerYom = !showPickerYom\">\n                    <div style=\"display: flex; align-items: center\">\n                        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yomValue }}</ion-text>\n                    </div>\n                </div>\n                <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\" *ngIf=\"showPickerYom\" #datetime [value]=\"yomValue\" size=\"cover\" (ionChange)=\"yomChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerYom=false\"></ion-datetime>\n\n                <!----------- seventh form ---------------------------->\n                <div class=\"label\">\n                    Vehicle Licence\n                    <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                </div>\n\n                <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                    <input type=\"file\" (change)=\"selectFile($event,'vehicleLicence')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                </div>\n                <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehicleLicence.base64\">\n                    <img style=\"height: 100px; width: 100px\" src=\"{{vehicleLicence.base64}}\" alt=\"\" />\n                </div>\n\n                <!----------- seventh form ---------------------------->\n                <div class=\"label\">\n                    Valid Drivers license/National Identity Card/International Pasport\n                    <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                </div>\n\n                <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                    <input type=\"file\" (change)=\"selectFile($event,'driverLicence')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                </div>\n                <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"driverLicence.base64\">\n                    <img style=\"height: 100px; width: 100px\" src=\"{{driverLicence.base64}}\" alt=\"\" />\n                </div>\n\n                <!----------- seventh form ---------------------------->\n\n                <div *ngIf=\"subProductName == 'Enhanced Comprehensive' || this.subProductName=='Auto Variants'\">\n                    <!----------- EIGHT FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture front view\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehFrontPic.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehFrontPic.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- EIGHT FIELD ---------------------------->\n\n                    <!----------- NINTH FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture rear view\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehRearPic')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehRearPic.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehRearPic.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- NINTH FIELD ---------------------------->\n\n                    <!----------- TENTH FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture side view left\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehPicSideViewLeft')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicSideViewLeft.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehPicSideViewLeft.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- TENTH FIELD ---------------------------->\n\n                    <!----------- ELEVENTH FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture side view right\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n\n                        <input type=\"file\" (change)=\"selectFile($event,'vehPicSideViewRight')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicSideViewRight.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehPicSideViewRight.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- ELEVENTH FIELD ---------------------------->\n\n                    <!----------- Twevleth FIELD ---------------------------->\n                    <div class=\"label\">\n                        Dashboard (displaying Kilometer of vehicle)\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehPicDashboard')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicDashboard.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehPicDashboard.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- Twevleth FIELD ---------------------------->\n\n                    <!----------- Thirteenth FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle Inspection form\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'inspectionForm')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"inspectionForm.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{inspectionForm.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- Thirteenth FIELD ---------------------------->\n\n                    <!----------- Fourteenth FIELD ---------------------------->\n                    <div class=\"label\">\n                        Utility bills\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'utilityBills')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"utilityBills.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{utilityBills.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- Fourteenth FIELD ---------------------------->\n                </div>\n\n                <!----------- fifth FIELD ---------------------------->\n\n                <div class=\"label\">\n                    Who referred you?\n                    <span style=\"color: #a8b400\">*Please enter the name and if possible phone number of the referrer.</span>\n                </div>\n                <div class=\"dropbox\">\n                    <div class=\"innerdropbox\" (click)=\"openReferrerList()\">\n                        <div class=\"euro-text\">{{referrerVal}}</div>\n                        <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showReferrer==false\" />\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showReferrer==true\" />\n                        </div>\n                    </div>\n                    <div *ngIf=\"showReferrer==true\" style=\"height: 120px; overflow: scroll\">\n                        <div *ngFor=\"let list of referrerList\" (click)=\"selectReferrerType(list)\">\n                            <div class=\"euro-text1\">{{list}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"referrerData\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter name, Branch and mobile number\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n\n                <div style=\"width: 90%; margin: 8% auto\" (click)=\"createProposal(productname)\">\n                    <ion-button class=\"btn\">Submit Proposal</ion-button>\n                </div>\n            </div>\n            <div style=\"width: 80%; margin: 0% auto\" *ngIf=\"productname=='Travel Insurance'\">\n                <!----------- Full Name  ---------------------------->\n                <div class=\"label\">\n                    Full Name\n                    <span style=\"color: #a8b400\">*Please re-enter your full name as you want it to appear on your\n            certificate.</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"fullName\" style=\"height: 48px\" type=\"text\" placeholder=\"Full name\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- Full Name  ---------------------------->\n\n                <!----------- Passport Number ---------------------------->\n                <div class=\"label\">\n                    Passport Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"passPortNo\" style=\"height: 48px\" type=\"text\" placeholder=\"123Mnnn2\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- Passport Number ---------------------------->\n\n                <!----------- Nationality Field ---------------------------->\n                <div class=\"label\">\n                    Nationality<span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"nationality\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter nationality\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- Nationality Field ---------------------------->\n\n                <!----------- Destination Field ---------------------------->\n                <!-- <div class=\"label\">\n          Destination<span style=\"color: #a8b400\">*</span>\n        </div>\n        <div class=\"inputfield\">\n          <div class=\"innerdropbox\">\n            <ion-input [(ngModel)]=\"destination\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\"\n              class=\"in-text\"></ion-input>\n          </div>\n        </div> -->\n                <!----------- Destination Field ---------------------------->\n\n                <!----------- Kin info Field ---------------------------->\n                <div class=\"label\">Kin info<span style=\"color: #a8b400\">*</span></div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"kinInfo\" style=\"height: 48px\" type=\"text\" placeholder=\"\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- Kin info Field ---------------------------->\n\n                <!----------- Address Field ---------------------------->\n                <div class=\"label\">Address<span style=\"color: #a8b400\">*</span></div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"clientAddress\" style=\"height: 48px\" type=\"text\" placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND,LAGOS STATE\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- Address Field ---------------------------->\n\n                <!----------- gender Field ---------------------------->\n                <div class=\"label\">Gender <span style=\"color: #a8b400\">*</span></div>\n                <div class=\"dropbox\">\n                    <div class=\"innerdropbox\" (click)=\"openGenderList()\">\n                        <div class=\"euro-text\">{{genderVal}}</div>\n                        <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showGender===false\" />\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\n                        </div>\n                    </div>\n                    <div *ngIf=\"showGender==true\">\n                        <div *ngFor=\"let list of genderType\" (click)=\"selectGenderType(list)\">\n                            <div class=\"euro-text1\">{{list.gender}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- gender Field ---------------------------->\n\n                <!----------- Date of Birth Field ---------------------------->\n                <!-- <div class=\"label\">\n                    Date of Birth\n                    <span style=\"color: #a8b400\">*This is a NAICOM KYC Reqirement.</span>\n                </div>\n\n                <div class=\"item-picker\" style=\"\n            margin: 4% 0%;\n            --background: #e8e8e7;\n            height: 48px;\n            padding: 13px 15px;\n          \" (click)=\"showPickerDob = !showPickerDob\">\n                    <div style=\"display: flex; align-items: center\">\n                        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dobValue }}</ion-text>\n                    </div>\n                </div>\n                <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\n                 -->\n                <!----------- Date of Birth Field ---------------------------->\n\n                <!----------- International passport Field ---------------------------->\n                <div class=\"label\">\n                    International passport\n                    <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                </div>\n                <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                    <input type=\"file\" (change)=\"selectFile($event,'passPort')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                </div>\n                <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"passPort.base64\">\n                    <img style=\"height: 100px; width: 100px\" src=\"{{passPort.base64}}\" alt=\"\" />\n                </div>\n                <!----------- International passport Field ---------------------------->\n\n                <div class=\"label\">\n                    Who referred you?\n                    <span style=\"color: #a8b400\">*Please enter the name and if possible phone number of the\n            referrer.</span>\n                </div>\n                <div class=\"dropbox\">\n                    <div class=\"innerdropbox\" (click)=\"openReferrerList()\">\n                        <div class=\"euro-text\">{{referrerVal}}</div>\n                        <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showReferrer==false\" />\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showReferrer==true\" />\n                        </div>\n                    </div>\n                    <div *ngIf=\"showReferrer==true\" style=\"height: 120px; overflow: scroll\">\n                        <div *ngFor=\"let list of referrerList\" (click)=\"selectReferrerType(list)\">\n                            <div class=\"euro-text1\">{{list}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\" *ngIf=\"subProName=='Third Party'\">ENTER AGENT GIBS/IES CODE</div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"referrerData\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter name, Branch and mobile number\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n\n                <div style=\"width: 90%; margin: 8% auto\" (click)=\"createProposal(productname)\">\n                    <ion-button class=\"btn\">Submit Proposal</ion-button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_car-insurance-details_car-insurance-details_module_ts.js.map