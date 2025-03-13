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
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

import { ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Location } from '@angular/common';
// import {decode} from 'base64-arraybuffer';

const IMAGE_DIR = 'stored-images';
@Component({
  selector: 'app-car-insurance-details',
  templateUrl: './car-insurance-details.page.html',
  styleUrls: ['./car-insurance-details.page.scss'],
})
export class CarInsuranceDetailsPage implements OnInit {
  vechilenewarray = [];
  EnchancednewClasses = [];
  requestsType: any;
  subProName: any;
  show = false;
  box = 'unchecked';

  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  compName = '';
  valOfVehicle = '';
  showPlan = false;
  showTitle = false;
  showAgeGroup = false;
  showVehicle = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;
  showFloodExt = false;
  showExcessBuyBack = false;
  showVehicleTracking = false;
  showRoadSide = false;
  tourStartDate = format(new Date(), 'yyyy-MM-dd');
  tourEndDate = format(new Date(), 'yyyy-MM-dd');
  dob = format(new Date(), 'yyyy-MM-dd');
  otheName = '';
  showPickerStartDate = false;
  showPickerEndDate = false;
  showPickerEndDatedob = false;
  ageGroup: any = 'Age Next Birthday';
  useTitle = 'Please Select';
  roadSideVal = 'Please Select';
  vehicleVal = 'Please Select';
  vehicleMakeVal = 'Please Select';
  vehicleModelVal = 'Please Select';
  floodExtVal = 'Please Select';
  excessBuyBackVal = 'Please Select';
  vehicleTrackingVal = 'Please Select';
  autoPlanVal = 'Please Auto Plan';
  autoPlanName = 'Please Auto Plan';
  vehicleClass: any;

  eCcarClasses: any;
  vehicleMake: any;
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType: 'Corporate' }];
  vehicleModel: any;
  floodExtValues = [{ floodExt: 'Yes' }, { floodExt: 'No' }];
  ExcessBuyBack = [{ excessByBack: 'Yes' }, { excessByBack: 'No' }];
  vehicleTrackingValues = [{ vehicleTrack: 'Yes' }, { vehicleTrack: 'No' }];
  titleList = [
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
  isavetitle = [
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
  autoPlansOfChoice = [
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

  ageGroupList = [
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
  roadSideAssistance = [{ roadSide: 'Yes' }, { roadSide: 'No' }];
  Paymentfrequency = [
    { id: '0', title: 'Monthly', active: false },
    { id: '1', title: 'Quarterly', active: false },
    { id: '2', title: 'Half-yearly', active: false },
    { id: '3', title: 'Yearly', active: false },
  ];
  Pfrequency = 'Please Select';
  showpaymentfrequency = false;
  duration: any;
  sumassured = 'Please Select';
  showsumassured = false;
  sumassuredarray = [
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
  vehicleModelNew = [];
  draftArr: any = '';


  /////////////////////////////////////////////////












  propsalResponse: any;
  quoteItems: any;
  fullName = '';

  // -- For Travel insurance -- //
  passPortNo = '';
  nationality = '';
  destination = 'NA';
  kinInfo = '';
  // -- For Travel insurance -- //

  regNo = '';

  engNo = '';
  chasisNo = '';
  vehclr = '';
  clientAddress = '';
  referrerData = '';
  blobMeanID = new Blob();
  blobLicence = new Blob();
  imgURL = '';
  imgURL1 = '';
  dobValue = format(new Date(), 'yyyy-MM-dd');
  corpValue = format(new Date(), 'yyyy-MM-dd');
  yopValue = format(new Date(), 'yyyy');
  yomValue = format(new Date(), 'yyyy');
  showReferrer = false;
  showPickerYop = false;
  showPickerYom = false;
  showPickerDob = false;
  showPickerCorp = false;
  showGender = false;
  subProductName = localStorage.getItem('subProName');
  productname = localStorage.getItem('productName');
  genderVal = 'Please Select';
  referrerVal = 'Please Select';
  genderType = [{ gender: 'Male' }, { gender: 'Female' }];
  referrerList: any;
  imgURLBase: string;

  // For file images //
  passPort = {
    file: '',
    base64: '',
  };
  vehicleLicence = {
    file: '',
    base64: '',
  };
  driverLicence = {
    file: '',
    base64: '',
  };
  vehFrontPic = {
    file: '',
    base64: '',
  };
  vehRearPic = {
    file: '',
    base64: '',
  };
  vehPicSideViewLeft = {
    file: '',
    base64: '',
  };
  vehPicSideViewRight = {
    file: '',
    base64: '',
  };
  vehPicDashboard = {
    file: '',
    base64: '',
  };
  inspectionForm = {
    file: '',
    base64: '',
  };
  utilityBills = {
    file: '',
    base64: '',
  };
  policyhldrVal: any = '';
  // For file images //



  constructor(
    public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    private actionSheetController: ActionSheetController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    // console.log('sssssssssssssssss', this.draftArr);
    this.subProName = localStorage.getItem('subProName');
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
    // this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
    this.getReferrerList();


    console.log('new Date().toISOString()===', new Date().toISOString());

    this.subProName = localStorage.getItem('subProName');
    console.log('subproduct name-----', this.subProName);

    this.getCarVehicleTypeCls();
    this.getCarMakeCompanies();

    this.userEmail = localStorage.getItem('email');
    this.mobNumber = localStorage.getItem('number');

    if (this.mobNumber == '' || this.mobNumber == 'null') {
      this.mobNumber = ''
    }
  }

  ionViewWillEnter() {

    this.vehicleVal = 'Please Select';
    this.vehicleMakeVal = 'Select Manufacturer';
    this.policyhldrVal = 'Please Select';
    this.vehicleModelVal = 'Select Model';
    this.fName = localStorage.getItem('fname');;
    this.lName = localStorage.getItem('lname');

    this.compName = '';



    console.log('fullName----', localStorage.getItem('userfullname'));
    console.log('policyhldrVal----', localStorage.getItem('policyhldrVal'));
    this.policyhldrVal = localStorage.getItem('policyhldrVal');

    if (this.policyhldrVal == 'Corporate') {
      this.corpValue = format(new Date(), 'yyyy-MM-dd');
      this.genderVal = 'Male';
    } else {
      this.corpValue = format(new Date(), 'yyyy-MM-dd');
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
    this.clientAddress = '';
    // this.genderVal = 'Please Select';
    this.referrerVal = 'Please Select';
    this.imgURL = '';
    this.imgURL1 = '';
    this.referrerData = '';

    this.fullName = localStorage.getItem('userfullname');
  }

  getReferrerList() {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"get_referred_by"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message != '') {
          this.referrerList = res.values;
          console.log(this.referrerList);
        }
      },
      (err) => {
        console.log(err);
      }
    );
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
    let response = { message: 'message', status: false };
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
    } else if (
      this.vehFrontPic.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
      response.message = 'Vehicle Picture Front View required';
    } else if (
      this.vehRearPic.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
      response.message = 'Vehicle Picture Rear View required';
    } else if (
      this.vehPicSideViewLeft.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
      response.message = 'Vehicle Picture Side View(Left) required';
    } else if (
      this.vehPicSideViewRight.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
      response.message = 'Vehicle Picture Side View(Right) required';
    } else if (
      this.vehPicDashboard.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
      response.message = 'Dashboard (displaying Kilometer of vehicle) required';
    } else if (
      this.utilityBills.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
      response.message = 'Utility Bill required';
    } else if (
      this.inspectionForm.file == '' &&
      (this.subProductName == 'Enhanced Comprehensive' ||
        this.subProductName == 'Auto Variants')
    ) {
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
    let response = { message: 'message', status: false };
    if (this.fullName == '') {
      response.message = 'Full Name required';
    } else if (this.passPortNo == '') {
      response.message = 'Passport number required';
    } else if (this.nationality == '') {
      response.message = 'Nationality required';
    }
    // else if (this.destination == '') {
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
  async createProposal(propsalType) {
    console.log('propsalType---formValidationResult', propsalType);
    console.log('this.genderVal----', this.genderVal);

    let formValidationResult = {
      message: 'This product is under developement',
      status: false,
    };
    const headers = new HttpHeaders();
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
        if (
          this.subProductName == 'Enhanced Comprehensive' ||
          this.subProductName == 'Auto Variants'
        ) {
          form.append('vehicle_picture_front_view', this.vehFrontPic.file);
          form.append('vehicle_picture_rear_view', this.vehRearPic.file);
          form.append(
            'vehicle_picture_side_view_left',
            this.vehPicSideViewLeft.file
          );
          form.append(
            'vehicle_picture_side_view_right',
            this.vehPicSideViewRight.file
          );
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
      await this.createQuote()
      this.http
        .post(config.url, config.data, {
          headers: config.headers,
        })
        .subscribe(
          (res: any) => {
            this.propsalResponse = res;
            console.log(res);

            if (this.propsalResponse.status_no == 0) {
              // this.api.presenttoast(this.propsalResponse.message);
              this.api.alertboxshow(this.propsalResponse.message)
            } else {
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
                    image:
                      'https://www.cornerstone.com.ng/assets/uploads/product/2.jpg',
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
              localStorage.setItem('agentcode', this.referrerData)
            }
            console.log('Response after propsal', JSON.stringify(res));

          },
          (err) => {
            console.log('err===', err);
          }
        );
    } else {
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
        let base64 = data as string;
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



  createQuote() {
    let formValidationResult = {
      message: 'This product is under developement',
      status: false,
    };
    console.log('checkTest---', formValidationResult);

    let myData = '';
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



    if (formValidationResult.status) {
      // --- Calling API To create quote --- //

      console.log('this.policyhldrVal---', this.policyhldrVal);

      localStorage.setItem('policyhldrVal', this.policyhldrVal);

      this.api.insertData(myData).subscribe(
        (data: any) => {
          console.log('data response for products----', data);

          if (data.message == 'success') {
            //ali
            var obj = {
              title: data.info.product_name,
              product_id: data.info.product_id,
              quote_id: data.info.quote_id,
              subProName: data.info.product_name,
              quoteItems: JSON.stringify(data.quoteItems),
              image:
                'https://www.cornerstone.com.ng/assets/uploads/product/2.jpg',
              path: '/yourquote',
              datetime: new Date().toISOString(),
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
            localStorage.setItem('vechileval', this.vehicleVal)
            localStorage.setItem('vechilemakeval', this.vehicleMakeVal);
            localStorage.setItem('vechilemodelval', this.vehicleModelVal)
            localStorage.setItem('phonenumber', this.mobNumber)
            // this.router.navigate(['/yourquote']);
          } else {
            this.api.presenttoast(data.message);
          }
        },
        (err) => {
          console.log(err);
        }
      );
      // --- Calling API To create quote --- //
    } else {
      this.api.presenttoast(formValidationResult.message);
    }
  }


  validateThirdParty() {
    const response = { message: 'message', status: false };
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
      const myData =
        'myData={"verify_token":"' +
        localStorage.getItem('token') +
        '","product_class":"vehicle_class_thirdparty","method":"get_car_classes"}';
      this.api.insertData(myData).subscribe(
        (res: any) => {
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
        },
        (err) => {
          console.log('err', err);
          this.api.hideLoader();
        }
      );
    } else if (this.subProName == 'Enhanced Comprehensive') {
      const myData =
        'myData={"verify_token":"' +
        localStorage.getItem('token') +
        '","method":"get_car_classes","product_class":"vehicle_class_enhanced_comprehensive"}';
      this.api.insertData(myData).subscribe(
        (res: any) => {
          console.log(res);
          this.api.hideLoader();
          if (res.values != '') {
            this.eCcarClasses = res.values;
            console.log(
              'Enhanced Comprehensive car classes==',
              this.eCcarClasses
            );
            this.eCcarClasses.map((val, index) => {
              const data = {
                name: val,
                active: false,
              };
              this.EnchancednewClasses.push(data);
            });
            // console.log('EnchancednewClasses======', this.EnchancednewClasses);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else if (this.subProName == 'Auto Variants') {
    } else {
    }
  }
  vechileMakenew = [];
  getCarMakeCompanies() {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"get_car_companies"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
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
      },
      (err) => {
        console.log(err);
      }
    );
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
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"get_car_models","manufacturer":"' +
      this.vehicleMakeVal +
      '"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
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
      },
      (err) => {
        console.log(err);
      }
    );
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




  get_auto_reg_info_fun($ev: any) {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","registration_number":"' + this.regNo + '","method":"get_auto_reg_info"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log('get_auto_reg_info_fun=========', res);
        var car = res.response
        // if (res.status_no == 1) {
          const [firstName, lastName] = car.ownerName.split(" ");

          this.chasisNo = car.chassisNumber
          this.engNo = car.engineNumber
          this.fName = firstName
          this.lName = lastName
          this.compName = car.ownerName
          this.vehclr = car.vehicleColor
          ///////////
          this.vehicleMakeVal = car.vehicleMake
          this.vehicleModelVal = car.vehicleModel

        // }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
