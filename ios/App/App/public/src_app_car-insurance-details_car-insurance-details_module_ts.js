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
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_insurance_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-insurance-details.page.html?ngResource */ 22683);
/* harmony import */ var _car_insurance_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-insurance-details.page.scss?ngResource */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);




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
  constructor(location, router, api, actionSheetController, http) {
    this.location = location;
    this.router = router;
    this.api = api;
    this.actionSheetController = actionSheetController;
    this.http = http;
    this.fullName = ''; // -- For Travel insurance -- //

    this.passPortNo = '';
    this.nationality = '';
    this.destination = '';
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
    this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
    this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
    this.yopValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy');
    this.yomValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy');
    this.showReferrer = false;
    this.showPickerYop = false;
    this.showPickerYom = false;
    this.showPickerDob = false;
    this.showPickerCorp = false;
    this.show = false;
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
    this.policyhldrVal = ''; // For file images //

    this.draftArr = '';
  }

  ngOnInit() {
    // this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    // console.log('sssssssssssssssss', this.draftArr);
    this.subProName = localStorage.getItem('subProName');
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems')); // this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));

    this.getReferrerList();
  }

  ionViewWillEnter() {
    console.log('fullName----', localStorage.getItem('userfullname'));
    console.log('policyhldrVal----', localStorage.getItem('policyhldrVal'));
    this.policyhldrVal = localStorage.getItem('policyhldrVal');

    if (this.policyhldrVal == 'Corporate') {
      this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
      this.genderVal = 'Male';
    } else {
      this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
    }

    if (this.policyhldrVal == 'Private') {
      this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'yyyy-MM-dd');
      this.genderVal = 'Please Select';
    } else {
      this.dobValue = '1998-01-01';
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

  camera2(source, imgetype) {
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('yyyyyy==', imgetype);
      var options = {
        source: source,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64
      };
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(options); // const blob = new Blob([new Uint8Array(decode(image.base64String))], {
      //   type: `image/${image.format}`,
      // });
      // console.log('Data from gallary blob',blob);

      console.log('Data from gallary Data url', image.dataUrl);

      if (imgetype == 'license') {
        _this.imgURL = 'image.dataUrl'; //this.imgURL= blob;
        // this.blobMeanID = blob;
      }

      if (imgetype == 'nic') {
        _this.imgURL1 = 'image.dataUrl'; // this.imgURL1= blob;

        _this.blobLicence = new Blob();
      }

      const imgData = {
        image: _this.imgURL
      };
    })();
  }

  selectImage(imagefile) {
    var _this2 = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const imgtype = imagefile;
      const actionSheet = yield _this2.actionSheetController.create({
        header: 'Select Image source',
        buttons: [{
          text: 'Load from Library',
          handler: () => {
            _this2.camera2(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Photos, imgtype);
          }
        }, {
          text: 'Use Camera',
          handler: () => {
            _this2.camera2(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera, imgtype);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
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
    } else if (this.destination == '') {
      response.message = 'Destination required';
    } else if (this.kinInfo == '') {
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
    console.log('propsalType---formValidationResult', propsalType);
    console.log('this.genderVal----', this.genderVal);
    let formValidationResult = {
      message: 'This product is under developement',
      status: false
    };
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders();
    var form = new FormData();
    form.append('method', 'save_product_proposal');

    switch (propsalType) {
      case 'Motor Insurance':
        formValidationResult = this.motorValidation();
        form.append('product_id', localStorage.getItem('subProId'));
        form.append('quote_id', localStorage.getItem('quote_id'));
        form.append('name', this.fullName);
        form.append('registration_number', this.regNo);
        form.append('engine_number', this.engNo);
        form.append('chasis_number', this.chasisNo);
        form.append('vehicle_colour', this.vehclr);
        form.append('address', this.clientAddress);
        form.append('gender', this.genderVal);
        form.append('date_of_birth', this.dobValue);
        form.append('incorporation', this.corpValue);
        form.append('year_of_purchase', this.yopValue);
        form.append('year_of_manufacture', this.yomValue);
        form.append('referred_by', this.referrerVal);
        form.append('referrer_details', this.referrerData);
        form.append('means_of_id', this.driverLicence.file);
        form.append('vehicle_licence', this.vehicleLicence.file);
        form.append('verify_token', localStorage.getItem('token'));

        if (this.subProductName == 'Enhanced Comprehensive' || this.subProductName == 'Auto Variants') {
          form.append('vehicle_picture_front_view', this.vehFrontPic.file);
          form.append('vehicle_picture_rear_view', this.vehRearPic.file);
          form.append('vehicle_picture_side_view_left', this.vehPicSideViewLeft.file);
          form.append('vehicle_picture_side_view_right', this.vehPicSideViewRight.file);
          form.append('vehicle_picture_dashboard', this.vehPicDashboard.file);
          form.append('inspection_form', this.inspectionForm.file);
          form.append('utility_bill', this.utilityBills.file);
        }

        break;

      case 'Travel Insurance':
        formValidationResult = this.travelValidation();
        form.append('product_id', localStorage.getItem('subProId'));
        form.append('quote_id', localStorage.getItem('quote_id'));
        form.append('name', this.fullName);
        form.append('passport_number', this.passPortNo);
        form.append('nationality', this.nationality);
        form.append('destination', this.destination);
        form.append('kin_info', this.kinInfo);
        form.append('address', this.clientAddress);
        form.append('gender', this.genderVal);
        form.append('date_of_birth', this.dobValue);
        form.append('international_passport', this.passPort.file);
        form.append('referred_by', this.referrerVal);
        form.append('referrer_details', this.referrerData);
        form.append('verify_token', localStorage.getItem('token'));
        break;

      default:
    }

    console.log('formValidationResult----', formValidationResult);

    if (formValidationResult.status) {
      const config = {
        method: 'post',
        url: 'https://www.cornerstone.com.ng/devtest/webservice',
        headers: headers,
        data: form
      };
      console.log('form form config', config);
      this.http.post(config.url, config.data, {
        headers: config.headers
      }).subscribe(res => {
        this.propsalResponse = res;
        console.log(res);

        if (this.propsalResponse.status_no == 0) {
          this.api.presenttoast(this.propsalResponse.message);
        } else {
          //ali
          this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
          console.log(this.draftArr);

          for (var i = 0; i < this.draftArr.length; i++) {
            var product_id = this.draftArr[i].product_id;
            var quote_id = this.draftArr[i].quote_id;
            var product_name = this.draftArr[i].subProName;
            var quoteItems = this.draftArr[i].quoteItems; // var path = this.draftArr[i].path;

            if (this.draftArr.quote_id == res.quote.id) {
              this.draftArr.splice(i, 1);
              var obj = {
                title: product_name,
                product_id: product_id,
                quote_id: quote_id,
                subProName: product_name,
                quoteItems: quoteItems,
                image: 'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
                path: '/payment',
                datetime: new Date().toISOString()
              };
              this.draftArr.push(obj);
            }
          }

          localStorage.setItem('draftArr', JSON.stringify(this.draftArr)); // var data = '';
          // this.api.presenttoast(data.info.message);
          // this.api.presenttoast("Proposal completed start payment");

          this.router.navigate(['/payment']);
          localStorage.setItem('productres', JSON.stringify(res));
          localStorage.setItem('dob', this.dobValue);
          localStorage.setItem('genderVal', this.genderVal);
          localStorage.setItem('regNo', this.regNo);
          localStorage.setItem('engNo', this.engNo);
          localStorage.setItem('chasisNo', this.chasisNo);
          localStorage.setItem('vehclr', this.vehclr);
          localStorage.setItem('clientAddress', this.clientAddress);
          localStorage.setItem('yomValue', this.yomValue);
          localStorage.setItem('agentcode', this.referrerData);
        }

        console.log('Response after propsal', JSON.stringify(res));
      }, err => {
        console.log('err===', err);
      });
    } else {
      this.api.presenttoast(formValidationResult.message);
    }
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

};

CarInsuranceDetailsPage.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}];

CarInsuranceDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-car-insurance-details',
  template: _car_insurance_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_car_insurance_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CarInsuranceDetailsPage);


/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo fron the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 4918:
/*!**********************************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  width: 85%;\n  margin: 5% auto;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.htext {\n  color: #A8B400;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.flex-cls {\n  display: flex;\n  margin-top: 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color:#5D5D5D;\n  --placeholder-color:#5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight:400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius:12px ;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.filebtn {\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1pbnN1cmFuY2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFTjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTUo7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKRTtFQUNFLDRCQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNGLGdCQUFBO0VBQ0EsNkJBQUE7QUFTSjs7QUFMRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVFKOztBQU5FO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBVU47O0FBR0U7RUFHSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGTiIsImZpbGUiOiJjYXItaW5zdXJhbmNlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuaHRleHR7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mbGV4LWNsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgLmxhYmVse1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5kcm9wYm94e1xyXG4gICAgbWFyZ2luOiA0JSAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTMuNDFweCAxNXB4O1xyXG4gIFxyXG4gIH1cclxuICAuaW5uZXJkcm9wYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcbiAgfVxyXG4gIC5ldXJvLXRleHR7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgXHJcbiAgfVxyXG4gIC5ldXJvLXRleHQxe1xyXG4gICAgY29sb3I6ICM1RDVENUQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIH1cclxuICAuaW5wdXRmaWVsZHtcclxuICAgIG1hcmdpbjogNCUgMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbiAgLmluLXRleHR7XHJcbiAgICAtLWNvbG9yOiM1RDVENUQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM1RDVENUQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDclO1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czoxMnB4IDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIC5pb24tdHh0e1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIC5maWxlYnRue1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAvLyAtLWNvbG9yOiM1RDVENUQ7XHJcbiAgICAgXHJcbiAgICAgIC8vIC0tcGFkZGluZy1zdGFydDogNyU7XHJcbiAgICAgIC8vICAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgIC8vICAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgIC8vICAgLS1wYWRkaW5nLWVuZDoxNXB4O1xyXG4gICAgICAvLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLy8gZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgICAvLyAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgLy8gLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gICAgfVxyXG4gIC5pdGVtLXBpY2tlcntcclxuICAgICAgLy8gd2lkdGg6IDg1JTtcclxuICAgICAgLy8gaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XHJcbiAgICAgIFxyXG4gIH0iXX0= */";

/***/ }),

/***/ 22683:
/*!**********************************************************************************!*\
  !*** ./src/app/car-insurance-details/car-insurance-details.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Quote</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"htext\">Your Details</div>\r\n    <div class=\"flex-cls\">\r\n      <div style=\"width: 80%; margin: 0% auto\" *ngIf=\"productname=='Motor Insurance'\">\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">\r\n          Full Name\r\n          <span style=\"color: #a8b400\">*Please re-enter your full name as you want it to appear on your\r\n            certificate.</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"fullName\" style=\"height: 48px\" type=\"text\" placeholder=\"Full name\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">\r\n          Vehicle Registration Number <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"regNo\" style=\"height: 48px\" type=\"text\" placeholder=\"MUS585AQ\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">\r\n          Engine Number <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"engNo\" style=\"height: 48px\" type=\"text\" placeholder=\"1M286534\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">\r\n          Chasis Number <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"chasisNo\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\"\r\n              class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">\r\n          Vehicle Colour <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"vehclr\" style=\"height: 48px\" type=\"text\" placeholder=\"\" class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\">Address <span style=\"color: #a8b400\">*</span></div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"clientAddress\" style=\"height: 48px\" type=\"text\"\r\n              placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND,LAGOS STATE\" class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"policyhldrVal == 'Private'\">\r\n          <!----------- seventh form ---------------------------->\r\n          <div class=\"label\">Gender <span style=\"color: #a8b400\">*</span></div>\r\n          <div class=\"dropbox\">\r\n            <div class=\"innerdropbox\" (click)=\"openGenderList()\">\r\n              <div class=\"euro-text\">{{genderVal}}</div>\r\n              <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n                <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                  *ngIf=\"showGender===false\" />\r\n                <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"showGender==true\">\r\n              <div *ngFor=\"let list of genderType\" (click)=\"selectGenderType(list)\">\r\n                <div class=\"euro-text1\">{{list.gender}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!----------- seventh form ---------------------------->\r\n          <div class=\"label\">\r\n            Date of Birth\r\n            <span style=\"color: #a8b400\">*This is a NAICOM KYC Reqirement.</span>\r\n          </div>\r\n\r\n          <div class=\"item-picker\" style=\"\r\n              margin: 4% 0%;\r\n              --background: #e8e8e7;\r\n              height: 48px;\r\n              padding: 13px 15px;\r\n            \" (click)=\"showPickerDob = !showPickerDob\">\r\n            <div style=\"display: flex; align-items: center\">\r\n              <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dobValue }}</ion-text>\r\n            </div>\r\n          </div>\r\n          <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n            *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\"\r\n            showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\r\n        </div>\r\n        <div *ngIf=\"policyhldrVal == 'Corporate'\">\r\n          <!----------- seventh form ---------------------------->\r\n          <div class=\"label\">\r\n            Incorporation <span style=\"color: #a8b400\">*</span>\r\n          </div>\r\n\r\n          <div class=\"item-picker\" style=\"\r\n              margin: 4% 0%;\r\n              --background: #e8e8e7;\r\n              height: 48px;\r\n              padding: 13px 15px;\r\n            \" (click)=\"showPickerCorp = !showPickerCorp\">\r\n            <div style=\"display: flex; align-items: center\">\r\n              <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ corpValue }}</ion-text>\r\n            </div>\r\n          </div>\r\n          <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n            *ngIf=\"showPickerCorp\" #datetime [value]=\"corpValue\" size=\"cover\" (ionChange)=\"corpChanged(datetime.value)\"\r\n            showDefaultButtons=\"true\" (ionCancel)=\"showPickerCorp=false\"></ion-datetime>\r\n\r\n          <!----------- seventh form ---------------------------->\r\n        </div>\r\n        <div class=\"label\">\r\n          Year of Purchase <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n\r\n        <div class=\"item-picker\" style=\"\r\n            margin: 4% 0%;\r\n            --background: #e8e8e7;\r\n            height: 48px;\r\n            padding: 13px 15px;\r\n          \" (click)=\"showPickerYop = !showPickerYop\">\r\n          <div style=\"display: flex; align-items: center\">\r\n            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yopValue }}</ion-text>\r\n          </div>\r\n        </div>\r\n        <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\"\r\n          *ngIf=\"showPickerYop\" #datetime [value]=\"yopValue\" size=\"cover\" (ionChange)=\"yopChanged(datetime.value)\"\r\n          showDefaultButtons=\"true\" (ionCancel)=\"showPickerYop=false\"></ion-datetime>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Year of Manufacture <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n\r\n        <div class=\"item-picker\" style=\"\r\n            margin: 4% 0%;\r\n            --background: #e8e8e7;\r\n            height: 48px;\r\n            padding: 13px 15px;\r\n          \" (click)=\"showPickerYom = !showPickerYom\">\r\n          <div style=\"display: flex; align-items: center\">\r\n            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yomValue }}</ion-text>\r\n          </div>\r\n        </div>\r\n        <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\"\r\n          *ngIf=\"showPickerYom\" #datetime [value]=\"yomValue\" size=\"cover\" (ionChange)=\"yomChanged(datetime.value)\"\r\n          showDefaultButtons=\"true\" (ionCancel)=\"showPickerYom=false\"></ion-datetime>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Vehicle Licence\r\n          <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n        </div>\r\n\r\n        <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n          <input type=\"file\" (change)=\"selectFile($event,'vehicleLicence')\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n        </div>\r\n        <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehicleLicence.base64\">\r\n          <img style=\"height: 100px; width: 100px\" src=\"{{vehicleLicence.base64}}\" alt=\"\" />\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n        <div class=\"label\">\r\n          Valid Drivers license/National Identity Card/International Pasport\r\n          <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n        </div>\r\n\r\n        <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n          <input type=\"file\" (change)=\"selectFile($event,'driverLicence')\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n        </div>\r\n        <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"driverLicence.base64\">\r\n          <img style=\"height: 100px; width: 100px\" src=\"{{driverLicence.base64}}\" alt=\"\" />\r\n        </div>\r\n\r\n        <!----------- seventh form ---------------------------->\r\n\r\n        <div *ngIf=\"subProductName == 'Enhanced Comprehensive' || this.subProductName=='Auto Variants'\">\r\n          <!----------- EIGHT FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Vehicle picture front view\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <input type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehFrontPic.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{vehFrontPic.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- EIGHT FIELD ---------------------------->\r\n\r\n          <!----------- NINTH FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Vehicle picture rear view\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <input type=\"file\" (change)=\"selectFile($event,'vehRearPic')\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehRearPic.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{vehRearPic.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- NINTH FIELD ---------------------------->\r\n\r\n          <!----------- TENTH FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Vehicle picture side view left\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <input type=\"file\" (change)=\"selectFile($event,'vehPicSideViewLeft')\"\r\n              accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicSideViewLeft.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{vehPicSideViewLeft.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- TENTH FIELD ---------------------------->\r\n\r\n          <!----------- ELEVENTH FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Vehicle picture side view right\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <!-- <ion-input style=\"width:100% ;\" disabled=\"true\" >{{imgurl1}}</ion-input>\r\n            <ion-button style=\"height: 40px;--background: white; color: #1A206D;\" (click)=\"selectImage('nic')\"> Choose file</ion-button> -->\r\n            <input type=\"file\" (change)=\"selectFile($event,'vehPicSideViewRight')\"\r\n              accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicSideViewRight.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{vehPicSideViewRight.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- ELEVENTH FIELD ---------------------------->\r\n\r\n          <!----------- Twevleth FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Dashboard (displaying Kilometer of vehicle)\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <input type=\"file\" (change)=\"selectFile($event,'vehPicDashboard')\"\r\n              accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicDashboard.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{vehPicDashboard.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- Twevleth FIELD ---------------------------->\r\n\r\n          <!----------- Thirteenth FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Vehicle Inspection form\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <input type=\"file\" (change)=\"selectFile($event,'inspectionForm')\"\r\n              accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"inspectionForm.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{inspectionForm.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- Thirteenth FIELD ---------------------------->\r\n\r\n          <!----------- Fourteenth FIELD ---------------------------->\r\n          <div class=\"label\">\r\n            Utility bills\r\n            <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n          </div>\r\n\r\n          <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n            <input type=\"file\" (change)=\"selectFile($event,'utilityBills')\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n          </div>\r\n          <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"utilityBills.base64\">\r\n            <img style=\"height: 100px; width: 100px\" src=\"{{utilityBills.base64}}\" alt=\"\" />\r\n          </div>\r\n\r\n          <!----------- Fourteenth FIELD ---------------------------->\r\n        </div>\r\n        <div class=\"label\">\r\n          Who referred you?\r\n          <span style=\"color: #a8b400\">*Please enter the name and if possible phone number of the\r\n            referrer.</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openReferrerList()\">\r\n            <div class=\"euro-text\">{{referrerVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showReferrer==false\" />\r\n              <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showReferrer==true\" />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showReferrer==true\" style=\"height: 120px; overflow: scroll\">\r\n            <div *ngFor=\"let list of referrerList\" (click)=\"selectReferrerType(list)\">\r\n              <div class=\"euro-text1\">{{list}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"referrerData\" style=\"height: 48px\" type=\"text\"\r\n              placeholder=\"Enter name, Branch and mobile number\" class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 90%; margin: 8% auto\" (click)=\"createProposal(productname)\">\r\n          <ion-button class=\"btn\">Submit Proposal</ion-button>\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 80%; margin: 0% auto\" *ngIf=\"productname=='Travel Insurance'\">\r\n        <!----------- Full Name  ---------------------------->\r\n        <div class=\"label\">\r\n          Full Name\r\n          <span style=\"color: #a8b400\">*Please re-enter your full name as you want it to appear on your\r\n            certificate.</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"fullName\" style=\"height: 48px\" type=\"text\" placeholder=\"Full name\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- Full Name  ---------------------------->\r\n\r\n        <!----------- Passport Number ---------------------------->\r\n        <div class=\"label\">\r\n          Passport Number <span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"passPortNo\" style=\"height: 48px\" type=\"text\" placeholder=\"123Mnnn2\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- Passport Number ---------------------------->\r\n\r\n        <!----------- Nationality Field ---------------------------->\r\n        <div class=\"label\">\r\n          Nationality<span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"nationality\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter nationality\"\r\n              class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- Nationality Field ---------------------------->\r\n\r\n        <!----------- Destination Field ---------------------------->\r\n        <div class=\"label\">\r\n          Destination<span style=\"color: #a8b400\">*</span>\r\n        </div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"destination\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\"\r\n              class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- Destination Field ---------------------------->\r\n\r\n        <!----------- Kin info Field ---------------------------->\r\n        <div class=\"label\">Kin info<span style=\"color: #a8b400\">*</span></div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"kinInfo\" style=\"height: 48px\" type=\"text\" placeholder=\"\" class=\"in-text\">\r\n            </ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- Kin info Field ---------------------------->\r\n\r\n        <!----------- Address Field ---------------------------->\r\n        <div class=\"label\">Address<span style=\"color: #a8b400\">*</span></div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"clientAddress\" style=\"height: 48px\" type=\"text\"\r\n              placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND,LAGOS STATE\" class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <!----------- Address Field ---------------------------->\r\n\r\n        <!----------- gender Field ---------------------------->\r\n        <div class=\"label\">Gender <span style=\"color: #a8b400\">*</span></div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openGenderList()\">\r\n            <div class=\"euro-text\">{{genderVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showGender===false\" />\r\n              <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showGender==true\">\r\n            <div *ngFor=\"let list of genderType\" (click)=\"selectGenderType(list)\">\r\n              <div class=\"euro-text1\">{{list.gender}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- gender Field ---------------------------->\r\n\r\n        <!----------- Date of Birth Field ---------------------------->\r\n        <div class=\"label\">\r\n          Date of Birth\r\n          <span style=\"color: #a8b400\">*This is a NAICOM KYC Reqirement.</span>\r\n        </div>\r\n\r\n        <div class=\"item-picker\" style=\"\r\n            margin: 4% 0%;\r\n            --background: #e8e8e7;\r\n            height: 48px;\r\n            padding: 13px 15px;\r\n          \" (click)=\"showPickerDob = !showPickerDob\">\r\n          <div style=\"display: flex; align-items: center\">\r\n            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dobValue }}</ion-text>\r\n          </div>\r\n        </div>\r\n        <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\"\r\n          *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\"\r\n          showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\r\n        <!----------- Date of Birth Field ---------------------------->\r\n\r\n        <!----------- International passport Field ---------------------------->\r\n        <div class=\"label\">\r\n          International passport\r\n          <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\r\n        </div>\r\n        <div class=\"inputfield\" style=\"display: flex; height: 48px\">\r\n          <input type=\"file\" (change)=\"selectFile($event,'passPort')\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n        </div>\r\n        <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"passPort.base64\">\r\n          <img style=\"height: 100px; width: 100px\" src=\"{{passPort.base64}}\" alt=\"\" />\r\n        </div>\r\n        <!----------- International passport Field ---------------------------->\r\n\r\n        <div class=\"label\">\r\n          Who referred you?\r\n          <span style=\"color: #a8b400\">*Please enter the name and if possible phone number of the\r\n            referrer.</span>\r\n        </div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openReferrerList()\">\r\n            <div class=\"euro-text\">{{referrerVal}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\r\n              <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showReferrer==false\" />\r\n              <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showReferrer==true\" />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showReferrer==true\" style=\"height: 120px; overflow: scroll\">\r\n            <div *ngFor=\"let list of referrerList\" (click)=\"selectReferrerType(list)\">\r\n              <div class=\"euro-text1\">{{list}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!----------- fifth form ---------------------------->\r\n        <div class=\"label\" *ngIf=\"subProName=='Third Party'\">ENTER AGENT GIBS/IES CODE</div>\r\n        <div class=\"inputfield\">\r\n          <div class=\"innerdropbox\">\r\n            <ion-input [(ngModel)]=\"referrerData\" style=\"height: 48px\" type=\"text\"\r\n              placeholder=\"Enter name, Branch and mobile number\" class=\"in-text\"></ion-input>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 90%; margin: 8% auto\" (click)=\"createProposal(productname)\">\r\n          <ion-button class=\"btn\">Submit Proposal</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_car-insurance-details_car-insurance-details_module_ts.js.map