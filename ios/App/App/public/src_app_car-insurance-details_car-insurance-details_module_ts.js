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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _car_insurance_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-insurance-details.page.html?ngResource */ 22683);
/* harmony import */ var _car_insurance_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-insurance-details.page.scss?ngResource */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);



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
        this.fullName = '';
        // -- For Travel insurance -- //
        this.passPortNo = '';
        this.nationality = '';
        this.destination = 'NA';
        this.kinInfo = '';
        // -- For Travel insurance -- //
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
        this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.yopValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy');
        this.yomValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy');
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
        this.genderType = [{ gender: 'Male' }, { gender: 'Female' }];
        // For file images //
        this.passPort = {
            file: '',
            base64: '',
        };
        this.vehicleLicence = {
            file: '',
            base64: '',
        };
        this.driverLicence = {
            file: '',
            base64: '',
        };
        this.vehFrontPic = {
            file: '',
            base64: '',
        };
        this.vehRearPic = {
            file: '',
            base64: '',
        };
        this.vehPicSideViewLeft = {
            file: '',
            base64: '',
        };
        this.vehPicSideViewRight = {
            file: '',
            base64: '',
        };
        this.vehPicDashboard = {
            file: '',
            base64: '',
        };
        this.inspectionForm = {
            file: '',
            base64: '',
        };
        this.utilityBills = {
            file: '',
            base64: '',
        };
        this.policyhldrVal = '';
        // For file images //
        this.draftArr = '';
    }
    ngOnInit() {
        // this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
        // console.log('sssssssssssssssss', this.draftArr);
        this.subProName = localStorage.getItem('subProName');
        this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
        // this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
        this.getReferrerList();
    }
    ionViewWillEnter() {
        console.log('fullName----', localStorage.getItem('userfullname'));
        console.log('policyhldrVal----', localStorage.getItem('policyhldrVal'));
        this.policyhldrVal = localStorage.getItem('policyhldrVal');
        if (this.policyhldrVal == 'Corporate') {
            this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
            this.genderVal = 'Male';
        }
        else {
            this.corpValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        }
        if (this.policyhldrVal == 'Private') {
            this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
            this.genderVal = 'Please Select';
        }
        else {
            this.dobValue = '1998-01-01';
            this.genderVal = 'Male';
        }
        console.log('this.genderVal----', this.genderVal);
        this.fullName = '';
        this.regNo = '';
        this.engNo = '';
        this.chasisNo = '';
        this.vehclr = '';
        this.clientAddress = '';
        // this.genderVal = 'Please Select';
        this.referrerVal = 'Please Select';
        this.imgURL = '';
        this.imgURL1 = '';
        this.referrerData = '';
        this.fullName = localStorage.getItem('userfullname');
    }
    getReferrerList() {
        const myData = 'myData={"verify_token":"' +
            localStorage.getItem('token') +
            '","method":"get_referred_by"}';
        this.api.insertData(myData).subscribe((res) => {
            console.log(res);
            if (res.message != '') {
                this.referrerList = res.values;
                console.log(this.referrerList);
            }
        }, (err) => {
            console.log(err);
        });
    }
    dobChanged(value) {
        this.dobValue = value;
        console.log(this.dobValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerDob = false;
    }
    corpChanged(value) {
        this.corpValue = value;
        console.log(this.corpValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerCorp = false;
    }
    yopChanged(value) {
        this.yopValue = value;
        console.log(this.yopValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerYop = false;
    }
    yomChanged(value) {
        this.yomValue = value;
        console.log(this.yomValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPickerYom = false;
    }
    openGenderList() {
        if (this.showGender == true) {
            this.showGender = false;
        }
        else {
            this.showGender = true;
        }
    }
    openReferrerList() {
        if (this.showReferrer == true) {
            this.showReferrer = false;
        }
        else {
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
        let response = { message: 'message', status: false };
        if (this.fullName == '') {
            response.message = 'Full Name required';
        }
        else if (this.regNo == '') {
            response.message = 'Vehicle Reg. No. required';
        }
        else if (this.engNo == '') {
            response.message = 'Engine No. required';
        }
        else if (this.chasisNo == '') {
            response.message = 'Chasis No. required';
        }
        else if (this.vehclr == '') {
            response.message = 'Vehicle Colour required';
        }
        else if (this.clientAddress == '') {
            response.message = 'Address required';
        }
        else if (this.genderVal == 'Please Select') {
            response.message = 'Please Select Gender';
        }
        else if (this.vehicleLicence.file == '') {
            response.message = 'Vehicle License required';
        }
        else if (this.driverLicence.file == '') {
            response.message = 'Driver License/N.I.C required';
        }
        else if (this.vehFrontPic.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Vehicle Picture Front View required';
        }
        else if (this.vehRearPic.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Vehicle Picture Rear View required';
        }
        else if (this.vehPicSideViewLeft.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Vehicle Picture Side View(Left) required';
        }
        else if (this.vehPicSideViewRight.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Vehicle Picture Side View(Right) required';
        }
        else if (this.vehPicDashboard.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Dashboard (displaying Kilometer of vehicle) required';
        }
        else if (this.utilityBills.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Utility Bill required';
        }
        else if (this.inspectionForm.file == '' &&
            (this.subProductName == 'Enhanced Comprehensive' ||
                this.subProductName == 'Auto Variants')) {
            response.message = 'Form inspection required';
        }
        else if (this.referrerVal == 'Please Select') {
            response.message = 'Please Select Referrer';
        }
        else if (this.referrerData == '') {
            response.message = 'Referrer Details required';
        }
        else {
            response.message = 'Motor validated';
            response.status = true;
        }
        return response;
    }
    travelValidation() {
        let response = { message: 'message', status: false };
        if (this.fullName == '') {
            response.message = 'Full Name required';
        }
        else if (this.passPortNo == '') {
            response.message = 'Passport number required';
        }
        else if (this.nationality == '') {
            response.message = 'Nationality required';
        }
        // else if (this.destination == '') {
        //   response.message = 'Destination required';
        // } 
        else if (this.kinInfo == '') {
            response.message = 'kin info required';
        }
        else if (this.clientAddress == '') {
            response.message = 'Address required';
        }
        else if (this.genderVal == 'Please Select') {
            response.message = 'Please Select Gender';
        }
        else if (this.passPort.file == '') {
            response.message = 'Passport image required';
        }
        else if (this.referrerVal == 'Please Select') {
            response.message = 'Please Select Referrer';
        }
        else if (this.referrerData == '') {
            response.message = 'Referrer Details required';
        }
        else {
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
            status: false,
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
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
                if (this.subProductName == 'Enhanced Comprehensive' ||
                    this.subProductName == 'Auto Variants') {
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
        // test url= 'https://www.cornerstone.com.ng/devtest/webservice'
        // live url: 'https://www.cornerstone.com.ng/webservice'
        console.log('formValidationResult----', formValidationResult);
        if (formValidationResult.status) {
            const config = {
                method: 'post',
                url: this.api.url,
                headers: headers,
                data: form,
            };
            console.log('form form config', config);
            this.http
                .post(config.url, config.data, {
                headers: config.headers,
            })
                .subscribe((res) => {
                this.propsalResponse = res;
                console.log(res);
                if (this.propsalResponse.status_no == 0) {
                    // this.api.presenttoast(this.propsalResponse.message);
                    this.api.alertboxshow(this.propsalResponse.message);
                }
                else {
                    //ali
                    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
                    console.log(this.draftArr);
                    for (var i = 0; i < this.draftArr.length; i++) {
                        var product_id = this.draftArr[i].product_id;
                        var quote_id = this.draftArr[i].quote_id;
                        var product_name = this.draftArr[i].subProName;
                        var quoteItems = this.draftArr[i].quoteItems;
                        // var path = this.draftArr[i].path;
                        if (this.draftArr.quote_id == res.quote.id) {
                            this.draftArr.splice(i, 1);
                            // imageurl='https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg'
                            var obj = {
                                title: product_name,
                                product_id: product_id,
                                quote_id: quote_id,
                                subProName: product_name,
                                quoteItems: quoteItems,
                                image: 'https://www.cornerstone.com.ng/assets/uploads/product/2.jpg',
                                path: '/payment',
                                datetime: new Date().toISOString(),
                            };
                            this.draftArr.push(obj);
                        }
                    }
                    localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
                    // var data = '';
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
            }, (err) => {
                console.log('err===', err);
            });
        }
        else {
            // this.api.presenttoast(formValidationResult.message);
            this.api.alertboxshow(formValidationResult.message);
        }
    }
    selectFile(event, type) {
        console.log('type --- ', type);
        console.log('linceise --- ', event.target.files[0]);
        this.getBase64(event.target.files[0])
            .then((data) => {
            let file = event.target.files[0];
            let base64 = data;
            if (type == 'vehicleLicence') {
                this.vehicleLicence.file = file;
                this.vehicleLicence.base64 = base64;
            }
            else if (type == 'driverLicence') {
                this.driverLicence.file = file;
                this.driverLicence.base64 = base64;
            }
            else if (type == 'vehFrontPic') {
                this.vehFrontPic.file = file;
                this.vehFrontPic.base64 = base64;
            }
            else if (type == 'vehRearPic') {
                this.vehRearPic.file = file;
                this.vehRearPic.base64 = base64;
            }
            else if (type == 'vehPicSideViewLeft') {
                this.vehPicSideViewLeft.file = file;
                this.vehPicSideViewLeft.base64 = base64;
            }
            else if (type == 'vehPicSideViewRight') {
                this.vehPicSideViewRight.file = file;
                this.vehPicSideViewRight.base64 = base64;
            }
            else if (type == 'vehPicDashboard') {
                this.vehPicDashboard.file = file;
                this.vehPicDashboard.base64 = base64;
            }
            else if (type == 'inspectionForm') {
                this.inspectionForm.file = file;
                this.inspectionForm.base64 = base64;
            }
            else if (type == 'utilityBills') {
                this.utilityBills.file = file;
                this.utilityBills.base64 = base64;
            }
            // -- For travel insurance -- //
            else if (type == 'passPort') {
                this.passPort.file = file;
                this.passPort.base64 = base64;
            }
            // -- For travel insurance -- //
        })
            .catch((err) => console.log('Errrrrr', err));
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
};
CarInsuranceDetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
CarInsuranceDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-car-insurance-details',
        template: _car_insurance_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_car_insurance_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarInsuranceDetailsPage);



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

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row>\n            <ion-col size=\"2\" style=\"padding-left: 25px\">\n                <ion-buttons>\n                    <div style=\"width:100% ;\">\n                        <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n                    </div>\n                </ion-buttons>\n\n                <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\">Buy Online</div>\n            </ion-col>\n            <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\">\n        <div class=\"htext\">Your Details</div>\n        <div class=\"flex-cls\">\n            <div style=\"width: 80%; margin: 0% auto\" *ngIf=\"productname=='Motor Insurance'\">\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Full Name\n                    <span style=\"color: #a8b400\">*Please re-enter your full name as you want it to appear on your\n            certificate.</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"fullName\" style=\"height: 48px\" type=\"text\" placeholder=\"Full name\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Vehicle Registration Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"regNo\" style=\"height: 48px\" type=\"text\" placeholder=\"MUS585AQ\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Engine Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"engNo\" style=\"height: 48px\" type=\"text\" placeholder=\"1M286534\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Chasis Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"chasisNo\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">\n                    Vehicle Colour <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"vehclr\" style=\"height: 48px\" type=\"text\" placeholder=\"\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\">Address <span style=\"color: #a8b400\">*</span></div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"clientAddress\" style=\"height: 48px\" type=\"text\" placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND,LAGOS STATE\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <div *ngIf=\"policyhldrVal == 'Private'\">\n                    <!----------- seventh form ---------------------------->\n                    <div class=\"label\">Gender <span style=\"color: #a8b400\">*</span></div>\n                    <div class=\"dropbox\">\n                        <div class=\"innerdropbox\" (click)=\"openGenderList()\">\n                            <div class=\"euro-text\">{{genderVal}}</div>\n                            <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                                <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showGender===false\" />\n                                <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\n                            </div>\n                        </div>\n                        <div *ngIf=\"showGender==true\">\n                            <div *ngFor=\"let list of genderType\" (click)=\"selectGenderType(list)\">\n                                <div class=\"euro-text1\">{{list.gender}}</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!----------- seventh form ---------------------------->\n                    <div class=\"label\">\n                        Date of Birth\n                        <span style=\"color: #a8b400\">*This is a NAICOM KYC Reqirement.</span>\n                    </div>\n\n                    <div class=\"item-picker\" style=\"\n              margin: 4% 0%;\n              --background: #e8e8e7;\n              height: 48px;\n              padding: 13px 15px;\n            \" (click)=\"showPickerDob = !showPickerDob\">\n                        <div style=\"display: flex; align-items: center\">\n                            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dobValue }}</ion-text>\n                        </div>\n                    </div>\n                    <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\n                </div>\n                <div *ngIf=\"policyhldrVal == 'Corporate'\">\n                    <!----------- seventh form ---------------------------->\n                    <div class=\"label\">\n                        Incorporation <span style=\"color: #a8b400\">*</span>\n                    </div>\n\n                    <div class=\"item-picker\" style=\"\n              margin: 4% 0%;\n              --background: #e8e8e7;\n              height: 48px;\n              padding: 13px 15px;\n            \" (click)=\"showPickerCorp = !showPickerCorp\">\n                        <div style=\"display: flex; align-items: center\">\n                            <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ corpValue }}</ion-text>\n                        </div>\n                    </div>\n                    <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerCorp\" #datetime [value]=\"corpValue\" size=\"cover\" (ionChange)=\"corpChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerCorp=false\"></ion-datetime>\n\n                    <!----------- seventh form ---------------------------->\n                </div>\n                <div class=\"label\">\n                    Year of Purchase <span style=\"color: #a8b400\">*</span>\n                </div>\n\n                <div class=\"item-picker\" style=\"\n            margin: 4% 0%;\n            --background: #e8e8e7;\n            height: 48px;\n            padding: 13px 15px;\n          \" (click)=\"showPickerYop = !showPickerYop\">\n                    <div style=\"display: flex; align-items: center\">\n                        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yopValue }}</ion-text>\n                    </div>\n                </div>\n                <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\" *ngIf=\"showPickerYop\" #datetime [value]=\"yopValue\" size=\"cover\" (ionChange)=\"yopChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerYop=false\"></ion-datetime>\n\n                <!----------- seventh form ---------------------------->\n                <div class=\"label\">\n                    Year of Manufacture <span style=\"color: #a8b400\">*</span>\n                </div>\n\n                <div class=\"item-picker\" style=\"\n            margin: 4% 0%;\n            --background: #e8e8e7;\n            height: 48px;\n            padding: 13px 15px;\n          \" (click)=\"showPickerYom = !showPickerYom\">\n                    <div style=\"display: flex; align-items: center\">\n                        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yomValue }}</ion-text>\n                    </div>\n                </div>\n                <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"year\" *ngIf=\"showPickerYom\" #datetime [value]=\"yomValue\" size=\"cover\" (ionChange)=\"yomChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerYom=false\"></ion-datetime>\n\n                <!----------- seventh form ---------------------------->\n                <div class=\"label\">\n                    Vehicle Licence\n                    <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                </div>\n\n                <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                    <input type=\"file\" (change)=\"selectFile($event,'vehicleLicence')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                </div>\n                <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehicleLicence.base64\">\n                    <img style=\"height: 100px; width: 100px\" src=\"{{vehicleLicence.base64}}\" alt=\"\" />\n                </div>\n\n                <!----------- seventh form ---------------------------->\n                <div class=\"label\">\n                    Valid Drivers license/National Identity Card/International Pasport\n                    <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                </div>\n\n                <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                    <input type=\"file\" (change)=\"selectFile($event,'driverLicence')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                </div>\n                <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"driverLicence.base64\">\n                    <img style=\"height: 100px; width: 100px\" src=\"{{driverLicence.base64}}\" alt=\"\" />\n                </div>\n\n                <!----------- seventh form ---------------------------->\n\n                <div *ngIf=\"subProductName == 'Enhanced Comprehensive' || this.subProductName=='Auto Variants'\">\n                    <!----------- EIGHT FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture front view\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehFrontPic.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehFrontPic.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- EIGHT FIELD ---------------------------->\n\n                    <!----------- NINTH FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture rear view\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehRearPic')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehRearPic.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehRearPic.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- NINTH FIELD ---------------------------->\n\n                    <!----------- TENTH FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture side view left\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehPicSideViewLeft')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicSideViewLeft.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehPicSideViewLeft.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- TENTH FIELD ---------------------------->\n\n                    <!----------- ELEVENTH FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle picture side view right\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n\n                        <input type=\"file\" (change)=\"selectFile($event,'vehPicSideViewRight')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicSideViewRight.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehPicSideViewRight.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- ELEVENTH FIELD ---------------------------->\n\n                    <!----------- Twevleth FIELD ---------------------------->\n                    <div class=\"label\">\n                        Dashboard (displaying Kilometer of vehicle)\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'vehPicDashboard')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"vehPicDashboard.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{vehPicDashboard.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- Twevleth FIELD ---------------------------->\n\n                    <!----------- Thirteenth FIELD ---------------------------->\n                    <div class=\"label\">\n                        Vehicle Inspection form\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'inspectionForm')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"inspectionForm.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{inspectionForm.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- Thirteenth FIELD ---------------------------->\n\n                    <!----------- Fourteenth FIELD ---------------------------->\n                    <div class=\"label\">\n                        Utility bills\n                        <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                    </div>\n\n                    <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                        <input type=\"file\" (change)=\"selectFile($event,'utilityBills')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                    <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"utilityBills.base64\">\n                        <img style=\"height: 100px; width: 100px\" src=\"{{utilityBills.base64}}\" alt=\"\" />\n                    </div>\n\n                    <!----------- Fourteenth FIELD ---------------------------->\n                </div>\n\n                <!----------- fifth FIELD ---------------------------->\n\n                <div class=\"label\">\n                    Who referred you?\n                    <span style=\"color: #a8b400\">*Please enter the name and if possible phone number of the referrer.</span>\n                </div>\n                <div class=\"dropbox\">\n                    <div class=\"innerdropbox\" (click)=\"openReferrerList()\">\n                        <div class=\"euro-text\">{{referrerVal}}</div>\n                        <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showReferrer==false\" />\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showReferrer==true\" />\n                        </div>\n                    </div>\n                    <div *ngIf=\"showReferrer==true\" style=\"height: 120px; overflow: scroll\">\n                        <div *ngFor=\"let list of referrerList\" (click)=\"selectReferrerType(list)\">\n                            <div class=\"euro-text1\">{{list}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"referrerData\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter name, Branch and mobile number\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n\n                <div style=\"width: 90%; margin: 8% auto\" (click)=\"createProposal(productname)\">\n                    <ion-button class=\"btn\">Submit Proposal</ion-button>\n                </div>\n            </div>\n            <div style=\"width: 80%; margin: 0% auto\" *ngIf=\"productname=='Travel Insurance'\">\n                <!----------- Full Name  ---------------------------->\n                <div class=\"label\">\n                    Full Name\n                    <span style=\"color: #a8b400\">*Please re-enter your full name as you want it to appear on your\n            certificate.</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"fullName\" style=\"height: 48px\" type=\"text\" placeholder=\"Full name\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- Full Name  ---------------------------->\n\n                <!----------- Passport Number ---------------------------->\n                <div class=\"label\">\n                    Passport Number <span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"passPortNo\" style=\"height: 48px\" type=\"text\" placeholder=\"123Mnnn2\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- Passport Number ---------------------------->\n\n                <!----------- Nationality Field ---------------------------->\n                <div class=\"label\">\n                    Nationality<span style=\"color: #a8b400\">*</span>\n                </div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"nationality\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter nationality\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- Nationality Field ---------------------------->\n\n                <!----------- Destination Field ---------------------------->\n                <!-- <div class=\"label\">\n          Destination<span style=\"color: #a8b400\">*</span>\n        </div>\n        <div class=\"inputfield\">\n          <div class=\"innerdropbox\">\n            <ion-input [(ngModel)]=\"destination\" style=\"height: 48px\" type=\"text\" placeholder=\"JMTBK426481418844\"\n              class=\"in-text\"></ion-input>\n          </div>\n        </div> -->\n                <!----------- Destination Field ---------------------------->\n\n                <!----------- Kin info Field ---------------------------->\n                <div class=\"label\">Kin info<span style=\"color: #a8b400\">*</span></div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"kinInfo\" style=\"height: 48px\" type=\"text\" placeholder=\"\" class=\"in-text\">\n                        </ion-input>\n                    </div>\n                </div>\n                <!----------- Kin info Field ---------------------------->\n\n                <!----------- Address Field ---------------------------->\n                <div class=\"label\">Address<span style=\"color: #a8b400\">*</span></div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"clientAddress\" style=\"height: 48px\" type=\"text\" placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND,LAGOS STATE\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n                <!----------- Address Field ---------------------------->\n\n                <!----------- gender Field ---------------------------->\n                <div class=\"label\">Gender <span style=\"color: #a8b400\">*</span></div>\n                <div class=\"dropbox\">\n                    <div class=\"innerdropbox\" (click)=\"openGenderList()\">\n                        <div class=\"euro-text\">{{genderVal}}</div>\n                        <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showGender===false\" />\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showGender==true\" />\n                        </div>\n                    </div>\n                    <div *ngIf=\"showGender==true\">\n                        <div *ngFor=\"let list of genderType\" (click)=\"selectGenderType(list)\">\n                            <div class=\"euro-text1\">{{list.gender}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- gender Field ---------------------------->\n\n                <!----------- Date of Birth Field ---------------------------->\n                <div class=\"label\">\n                    Date of Birth\n                    <span style=\"color: #a8b400\">*This is a NAICOM KYC Reqirement.</span>\n                </div>\n\n                <div class=\"item-picker\" style=\"\n            margin: 4% 0%;\n            --background: #e8e8e7;\n            height: 48px;\n            padding: 13px 15px;\n          \" (click)=\"showPickerDob = !showPickerDob\">\n                    <div style=\"display: flex; align-items: center\">\n                        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dobValue }}</ion-text>\n                    </div>\n                </div>\n                <ion-datetime class=\"item-picker\" style=\"margin: 10px auto 8px; color: black\" presentation=\"date\" *ngIf=\"showPickerDob\" #datetime [value]=\"dobValue\" size=\"cover\" (ionChange)=\"dobChanged(datetime.value)\" showDefaultButtons=\"true\" (ionCancel)=\"showPickerDob=false\"></ion-datetime>\n                <!----------- Date of Birth Field ---------------------------->\n\n                <!----------- International passport Field ---------------------------->\n                <div class=\"label\">\n                    International passport\n                    <span style=\"color: #a8b400\">*Maximum file size 2MB</span>\n                </div>\n                <div class=\"inputfield\" style=\"display: flex; height: 48px\">\n                    <input type=\"file\" (change)=\"selectFile($event,'passPort')\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                </div>\n                <div style=\"height: 100px; width: 100px; text-align: center\" *ngIf=\"passPort.base64\">\n                    <img style=\"height: 100px; width: 100px\" src=\"{{passPort.base64}}\" alt=\"\" />\n                </div>\n                <!----------- International passport Field ---------------------------->\n\n                <div class=\"label\">\n                    Who referred you?\n                    <span style=\"color: #a8b400\">*Please enter the name and if possible phone number of the\n            referrer.</span>\n                </div>\n                <div class=\"dropbox\">\n                    <div class=\"innerdropbox\" (click)=\"openReferrerList()\">\n                        <div class=\"euro-text\">{{referrerVal}}</div>\n                        <div class=\"imgdiv\" style=\"padding-bottom: 2px\">\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showReferrer==false\" />\n                            <img style=\"height: 6.6px; width: 11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showReferrer==true\" />\n                        </div>\n                    </div>\n                    <div *ngIf=\"showReferrer==true\" style=\"height: 120px; overflow: scroll\">\n                        <div *ngFor=\"let list of referrerList\" (click)=\"selectReferrerType(list)\">\n                            <div class=\"euro-text1\">{{list}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!----------- fifth form ---------------------------->\n                <div class=\"label\" *ngIf=\"subProName=='Third Party'\">ENTER AGENT GIBS/IES CODE</div>\n                <div class=\"inputfield\">\n                    <div class=\"innerdropbox\">\n                        <ion-input [(ngModel)]=\"referrerData\" style=\"height: 48px\" type=\"text\" placeholder=\"Enter name, Branch and mobile number\" class=\"in-text\"></ion-input>\n                    </div>\n                </div>\n\n                <div style=\"width: 90%; margin: 8% auto\" (click)=\"createProposal(productname)\">\n                    <ion-button class=\"btn\">Submit Proposal</ion-button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_car-insurance-details_car-insurance-details_module_ts.js.map