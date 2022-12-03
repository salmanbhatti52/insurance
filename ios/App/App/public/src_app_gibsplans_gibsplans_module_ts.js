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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _gibsplans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsplans.page.html?ngResource */ 70577);
/* harmony import */ var _gibsplans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gibsplans.page.scss?ngResource */ 53278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








let GibsplansPage = class GibsplansPage {
    constructor(api, location, route) {
        this.api = api;
        this.location = location;
        this.route = route;
        this.vehicleMakeVal = 'Select Manufacturer';
        this.vehicleModelVal = 'Select Model';
        this.genderVal = 'Select Gender';
        this.dobValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
        this.yopValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy');
        this.yomValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy');
        this.dateofbirth = 'Please Select';
        this.yopdate = 'Please Select';
        this.yomdate = 'Please Select';
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
        this.valueofvehicle = '';
        this.yesno = [{ name: 'Yes' }, { name: 'No' }];
        this.ebb = 'Please Select';
        this.fe = 'Please Select';
        this.srcc = 'Please Select';
        this.iit = 'Please Select';
        this.producttax = '';
        this.ebbtax = '';
        this.fetax = '';
        this.srcctax = '';
        this.iittax = '';
        this.showebb = false;
        this.showfe = false;
        this.showsrcc = false;
        this.showiit = false;
        this.vechileMakenew = [];
        this.vehicleModelNew = [];
    }
    ngOnInit() {
        this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        console.log('ssssss-----', this.Gproduct);
        this.getCarMakeCompanies();
        this.emailvalidation =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        else if (this.fName == '') {
            this.api.presenttoast('First Name Field Required');
        }
        else if (this.lName == '') {
            this.api.presenttoast('Last Name Field Required');
        }
        else if (this.userEmail == '') {
            this.api.presenttoast('Email Field Required');
        }
        else if (!this.validateEmail(this.userEmail)) {
            this.api.presenttoast('InValid Email');
        }
        else if (this.mobNumber == '') {
            this.api.presenttoast('Mobile Number Field Required');
        }
        else if (this.address == '') {
            this.api.presenttoast('Address Field Required');
        }
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
        else if (this.valueofvehicle < 2000000) {
            this.api.presenttoast('Vehicle Value is less then 2000000');
        }
        else if (this.genderVal == 'Select Gender') {
            this.api.presenttoast('Please Select Gender');
        }
        // ----
        else if (this.ebb == 'Select Gender') {
            this.api.presenttoast('Please Select Excess Buy Back');
        }
        else if (this.fe == 'Select Gender') {
            this.api.presenttoast('Please Select Flood Extension');
        }
        else if (this.srcc == 'Select Gender') {
            this.api.presenttoast('Please Select Strike Riot & Civil Commotion');
        }
        else if (this.iit == 'Select Gender') {
            this.api.presenttoast('Please Select Increase in TPPD');
        }
        // ---
        else if (this.dateofbirth == 'Please Select') {
            this.api.presenttoast('Please Select DOB');
        }
        else if (this.yomdate == 'Please Select') {
            this.api.presenttoast('Year of Manufacture Field Required');
        }
        else {
            this.calculateTax();
            localStorage.setItem('email', this.userEmail);
            var myData = {
                sid: 'ECHANNEL2',
                token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
            };
            this.api.gibsapi(myData).subscribe((res) => {
                console.log(res);
                let token = res.accessToken;
                this.getresult(token);
            }, (err) => {
                console.log(err);
                this.api.hideLoader();
            });
        }
    }
    getresult(token) {
        let Bearertoken = token;
        let postdata = {
            productID: '3034',
            entryDate: '2022-10-20T04:29:31.261Z',
            startDate: '2018-03-13T00:00:00',
            endDate: '2019-03-12T00:00:00',
            fxCurrency: 'NGN',
            fxRate: 1,
            referrerSource: 'AGENT',
            referrerDetails: 'string',
            paymentProviderID: 'string',
            paymentReferenceID: 'string',
            insured: {
                title: 'string',
                lastName: this.lName,
                firstName: this.fName,
                otherName: 'string',
                gender: this.genderVal,
                email: this.userEmail,
                address: this.address,
                phoneLine1: this.mobNumber,
                phoneLine2: this.mobNumber,
                isOrg: true,
                orgName: 'string',
                orgRegNumber: 'string',
                orgRegDate: '2022-10-20T04:29:31.261Z',
                taxIdNumber: 'string',
                cityLGA: 'string',
                stateID: 'string',
                nationality: 'string',
                dateOfBirth: this.dateofbirth,
                kycType: 'NOT_AVAILABLE',
                kycNumber: 'string',
                kycIssueDate: '2022-10-20T04:29:31.261Z',
                kycExpiryDate: '2022-10-20T04:29:31.261Z',
                nextOfKin: {
                    title: 'string',
                    lastName: 'string',
                    firstName: 'string',
                    otherName: 'string',
                    gender: 'MALE',
                    email: 'user@example.com',
                    address: 'string',
                    phoneLine1: '123456',
                    phoneLine2: '123456',
                },
            },
            policySections: [
                {
                    sectionID: 'string',
                    sectionSumInsured: 0,
                    sectionPremium: 0,
                    vehicleRegNo: this.regNo,
                    vehicleTypeID: 'VAN',
                    vehicleUser: 'string',
                    engineNumber: this.engNo,
                    chasisNumber: this.chasisNo,
                    vehicleUsage: 'PRIVATE',
                    numberOfSeats: 0,
                    stateOfIssue: 'string',
                    vehicleMake: this.vehicleMakeVal,
                    vehicleModel: this.vehicleModelVal,
                    manufactureYear: this.yomdate,
                    vehicleColour: this.vehclr,
                    engineCapacityHP: 'string',
                    coverType: 'COMPREHENSIVE',
                },
            ],
        };
        this.api
            .postdata('http://testcipapiservices.gibsonline.com/api/Policies/Motor', postdata, Bearertoken)
            .subscribe((res) => {
            console.log('motor response---', res);
            localStorage.setItem('gibsProductres', JSON.stringify(res));
            this.route.navigate(['policyquote']);
        }, (err) => {
            // console.log(err);
            // let errormsg = err.error.errors[0].message;
            // this.api.presenttoast(errormsg)
        });
    }
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
    calculateTax() {
        this.gibsproduct = JSON.parse(localStorage.getItem('gibsproduct'));
        this.productname = this.gibsproduct.productName;
        console.log(this.productname);
        if (this.productname == 'PRIVATE MOTOR-AUTO CLASSIC') {
            // 1.75;
            console.log(this.productname);
            this.producttax = (1.75 / 100) * this.valueofvehicle;
            if (this.ebb == 'Yes') {
                this.ebbtax = (0.5 / 100) * this.valueofvehicle;
            }
            else {
                this.ebbtax = 0;
            }
            if (this.fe == 'Yes') {
                this.fetax = (0.25 / 100) * this.valueofvehicle;
            }
            else {
                this.fetax = 0;
            }
            if (this.srcc == 'Yes') {
                this.srcctax = (0.25 / 100) * this.valueofvehicle;
            }
            else {
                this.srcctax = 0;
            }
            if (this.iit == 'Yes') {
                this.iittax = (0.2 / 100) * this.valueofvehicle;
            }
            else {
                this.iittax = 0;
            }
            console.log('this.producttax ---', this.producttax);
            console.log('this.ebbtax ---', this.ebbtax);
            console.log('this.fetax ---', this.fetax);
            console.log('this.srcctax ---', this.srcctax);
            console.log('this.iittax ---', this.iittax);
            this.overalltax =
                Number(this.producttax) +
                    Number(this.ebbtax) +
                    Number(this.fetax) +
                    Number(this.srcctax) +
                    Number(this.iittax);
            localStorage.setItem('overalltax', this.overalltax);
            console.log('this.overalltax ---', this.overalltax);
        }
        if (this.productname == 'PRIVATE MOTOR-AUTO PLUS') {
            // 3
            console.log(this.productname);
            this.producttax = (3 / 100) * this.valueofvehicle;
            this.ebbtax = 0;
            this.fetax = 0;
            this.srcctax = 0;
            if (this.iit == 'Yes') {
                this.iittax = (0.2 / 100) * this.valueofvehicle;
            }
            else {
                this.iittax = 0;
            }
            console.log('this.producttax ---', this.producttax);
            console.log('this.ebbtax ---', this.ebbtax);
            console.log('this.fetax ---', this.fetax);
            console.log('this.srcctax ---', this.srcctax);
            console.log('this.iittax ---', this.iittax);
            this.overalltax =
                Number(this.producttax) +
                    Number(this.ebbtax) +
                    Number(this.fetax) +
                    Number(this.srcctax) +
                    Number(this.iittax);
            localStorage.setItem('overalltax', this.overalltax);
            console.log('this.overalltax ---', this.overalltax);
        }
        if (this.productname == 'UBER CLASSIC MOTOR') {
            //  2.5
            console.log(this.productname);
            if (this.ebb == 'Yes') {
                this.ebbtax = (1 / 100) * this.valueofvehicle;
            }
            else {
                this.ebbtax = 0;
            }
            if (this.fe == 'Yes') {
                this.fetax = (0.25 / 100) * this.valueofvehicle;
            }
            else {
                this.fetax = 0;
            }
            if (this.srcc == 'Yes') {
                this.srcctax = (0.25 / 100) * this.valueofvehicle;
            }
            else {
                this.srcctax = 0;
            }
            if (this.iit == 'Yes') {
                this.iittax = (0.2 / 100) * this.valueofvehicle;
            }
            else {
                this.iittax = 0;
            }
            console.log('this.producttax ---', this.producttax);
            console.log('this.ebbtax ---', this.ebbtax);
            console.log('this.fetax ---', this.fetax);
            console.log('this.srcctax ---', this.srcctax);
            console.log('this.iittax ---', this.iittax);
            this.overalltax =
                Number(this.producttax) +
                    Number(this.ebbtax) +
                    Number(this.fetax) +
                    Number(this.srcctax) +
                    Number(this.iittax);
            localStorage.setItem('overalltax', this.overalltax);
            console.log('this.overalltax ---', this.overalltax);
        }
    }
};
GibsplansPage.ctorParameters = () => [
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
GibsplansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 3% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btn {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpYnNwbGFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBS0Y7O0FBSEE7RUFHRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdGIiwiZmlsZSI6ImdpYnNwbGFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndyYXBwZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAlIGF1dG8gNSU7XG59XG4ubGFiZWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZHJvcGJveCB7XG4gIG1hcmdpbjogNCUgMCU7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEzLjQxcHggMTVweDtcblxufVxuLmlubmVyZHJvcGJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4uZXVyby10ZXh0IHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuLmV1cm8tdGV4dDEge1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5pbWdkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWlucHV0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLmlucHV0ZmllbGQge1xuICBtYXJnaW46IDMlIDAlO1xuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmluLXRleHQge1xuICAtLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xuICAtLXBhZGRpbmctdG9wOiA1JTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XG59XG5cbi5idG4ge1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uYWN0aXZlcHJvZHVjdHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcbiAgcGFkZGluZzo0cHggMHB4O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuLml0ZW0tcGlja2Vye1xuICAvLyB3aWR0aDogODUlO1xuICAvLyBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDBweCAxNnB4IDBweDtcblxufVxuLmlvbi10eHR7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6YmxhY2s7XG4gIH1cbiJdfQ== */";

/***/ }),

/***/ 70577:
/*!**********************************************************!*\
  !*** ./src/app/gibsplans/gibsplans.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width: 100%\">\n          <img\n            (click)=\"goback()\"\n            src=\"assets/images/back-arrow.svg\"\n            alt=\"sb-btn\"\n          />\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Product Offering and Details</div>\n      </ion-col>\n      <ion-col size=\"2\" style=\"text-align: center; padding-top: 3%\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- dropdown  start-->\n\n    <div class=\"label\">Vehicle Make</div>\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{vehicleMakeVal}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showMaker==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showMaker==true\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"showMaker==true\" style=\"height: 100px; overflow: scroll\">\n        <div\n          *ngFor=\"let list of vechileMakenew; let i=index\"\n          (click)=\"selectVehicleMaker(list,i)\"\n        >\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.manufacturer}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- dropdown  end-->\n\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"opnenVehicleModelList()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{vehicleModelVal}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showVehicleModel==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showVehicleModel==true\"\n          />\n        </div>\n      </div>\n      <div\n        *ngIf=\"showVehicleModel==true\"\n        style=\"height: 100px; overflow: scroll\"\n      >\n        <div\n          *ngFor=\"let list of vehicleModelNew;let i=index\"\n          (click)=\"selectVehicleModel(list,i)\"\n        >\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.model}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"label\">First Name</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"fName\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"John\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n    <div class=\"label\">Last Name</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"lName\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"Doe\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Email</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"userEmail\"\n          style=\"height: 48px\"\n          type=\"email\"\n          placeholder=\"johndoe@gmail.com\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n    <div class=\"label\">Phone Number</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"mobNumber\"\n          style=\"height: 48px\"\n          type=\"tel\"\n          placeholder=\"923565466554\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Address</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"address\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"e.g:136, LEWIS STREET, OBALENDE, LAGOS ISLAND, LAGOS STATE\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Vehicle Registration Number</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"regNo\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"MUS585AQ\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Engine Number</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"engNo\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"1M286534\"\n          class=\"in-text\"\n        >\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Chasis Number</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"chasisNo\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"JMTBK426481418844\"\n          class=\"in-text\"\n        ></ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Vehicle Colour</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"vehclr\"\n          style=\"height: 48px\"\n          type=\"text\"\n          placeholder=\"Colour\"\n          class=\"in-text\"\n        ></ion-input>\n      </div>\n    </div>\n\n    <div class=\"label\">Value of Vehicle</div>\n    <div class=\"inputfield\">\n      <div class=\"innerdropbox\">\n        <ion-input\n          [(ngModel)]=\"valueofvehicle\"\n          style=\"height: 48px\"\n          type=\"tel\"\n          placeholder=\"Value of Vehicle\"\n          class=\"in-text\"\n        ></ion-input>\n      </div>\n    </div>\n\n    <!-- dropdown  start 1-->\n\n    <div class=\"label\">Excess Buy Back</div>\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"showDebb()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{ebb}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showebb==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showebb==true\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"showebb==true\" style=\"height: 70px; overflow: scroll\">\n        <div\n          *ngFor=\"let list of yesno; let i=index\"\n          (click)=\"selectebb(list,i)\"\n        >\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.name}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- dropdown  end-->\n\n    <!-- dropdown  start 2-->\n\n    <div class=\"label\">Flood Extension</div>\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"showDfe()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{fe}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showfe==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showfe==true\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"showfe==true\" style=\"height: 70px; overflow: scroll\">\n        <div *ngFor=\"let list of yesno; let i=index\" (click)=\"selectfe(list,i)\">\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.name}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- dropdown  end-->\n\n    <!-- dropdown  start 3-->\n\n    <div class=\"label\">Strike Riot & Civil Commotion</div>\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"showDsrcc()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{srcc}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showsrcc==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showsrcc==true\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"showsrcc==true\" style=\"height: 70px; overflow: scroll\">\n        <div\n          *ngFor=\"let list of yesno; let i=index\"\n          (click)=\"selectsrcc(list,i)\"\n        >\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.name}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- dropdown  end-->\n\n    <!-- dropdown  start 4-->\n\n    <div class=\"label\">Increase in TPPD</div>\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"showDiit()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{iit}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showiit==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showiit==true\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"showiit==true\" style=\"height: 70px; overflow: scroll\">\n        <div\n          *ngFor=\"let list of yesno; let i=index\"\n          (click)=\"selectiit(list,i)\"\n        >\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.name}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- dropdown  end-->\n\n    <div class=\"label\">Gender</div>\n    <div class=\"dropbox\">\n      <div class=\"innerdropbox\" (click)=\"openGenderList()\">\n        <div class=\"euro-text\" style=\"width: 100%\">{{genderVal}}</div>\n        <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/down-arrow.svg\"\n            *ngIf=\"showGender==false\"\n          />\n          <img\n            style=\"height: 6.6px; width: 11.36px\"\n            src=\"assets/images/yuparrow.svg\"\n            *ngIf=\"showGender==true\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"showGender==true\">\n        <div\n          *ngFor=\"let list of genderType; let i=index\"\n          (click)=\"selectGenderType(list,i)\"\n        >\n          <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\n            {{list.gender}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"label\">Date of Birth</div>\n\n    <div\n      class=\"item-picker\"\n      style=\"\n        margin: 4% 0%;\n        --background: #e8e8e7;\n        height: 48px;\n        padding: 13px 15px;\n      \"\n      (click)=\"showPickerDob = !showPickerDob\"\n    >\n      <div style=\"display: flex; align-items: center\">\n        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\"\n          >{{ dateofbirth }}</ion-text\n        >\n      </div>\n    </div>\n    <ion-datetime\n      class=\"item-picker\"\n      style=\"margin: 10px auto 8px; color: black\"\n      presentation=\"date\"\n      *ngIf=\"showPickerDob\"\n      #datetime\n      [value]=\"dobValue\"\n      size=\"cover\"\n      (ionChange)=\"dobChanged(datetime.value)\"\n      showDefaultButtons=\"true\"\n      (ionCancel)=\"showPickerDob=false\"\n    ></ion-datetime>\n\n    <!-- <div class=\"label\">Year of Purchase</div>\n\n    <div class=\"item-picker\" style=\"margin: 4% 0%; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\n      (click)=\"showPickerYop = !showPickerYop\">\n      <div style=\"display: flex; align-items:center\">\n\n        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ yopdate }}</ion-text>\n      </div>\n\n    </div>\n    <ion-datetime class=\"item-picker\" style=\"margin:10px auto 8px; color: black;\" presentation=\"year\"\n      *ngIf=\"showPickerYop\" #datetime [value]=\"yopValue\" size=\"cover\" (ionChange)=\"yopChanged(datetime.value)\"\n      showDefaultButtons=\"true\" (ionCancel)=\"showPickerYop=false\"></ion-datetime> -->\n\n    <!----------- seventh form ---------------------------->\n    <div class=\"label\">Year of Manufacture</div>\n\n    <div\n      class=\"item-picker\"\n      style=\"\n        margin: 4% 0%;\n        --background: #e8e8e7;\n        height: 48px;\n        padding: 13px 15px;\n      \"\n      (click)=\"showPickerYom = !showPickerYom\"\n    >\n      <div style=\"display: flex; align-items: center\">\n        <ion-text class=\"ion-txt\" style=\"margin-left: 14px\"\n          >{{ yomdate }}</ion-text\n        >\n      </div>\n    </div>\n    <ion-datetime\n      class=\"item-picker\"\n      style=\"margin: 10px auto 8px; color: black\"\n      presentation=\"year\"\n      *ngIf=\"showPickerYom\"\n      #datetime\n      [value]=\"yomValue\"\n      size=\"cover\"\n      (ionChange)=\"yomChanged(datetime.value)\"\n      showDefaultButtons=\"true\"\n      (ionCancel)=\"showPickerYom=false\"\n    ></ion-datetime>\n  </div>\n</ion-content>\n<ion-footer>\n  <div style=\"width: 90%; margin: 8% auto\" (click)=\"submit()\">\n    <ion-button class=\"btn\">Continue</ion-button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_gibsplans_gibsplans_module_ts.js.map