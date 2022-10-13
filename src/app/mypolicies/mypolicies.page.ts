/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
@Component({
  selector: 'app-mypolicies',
  templateUrl: './mypolicies.page.html',
  styleUrls: ['./mypolicies.page.scss'],
})
export class MypoliciesPage implements OnInit {
  // @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
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
  tourStartDate = format(new Date(), 'yyyy-MM-dd');;
  tourEndDate = format(new Date(), 'yyyy-MM-dd');;
  otheName = "";
  showPickerStartDate = false;
  showPickerEndDate = false;
  ageGroup = 'Please Select';
  useTitle = 'Please Select';
  roadSideVal = 'Please Select';
  vehicleVal = 'Please Select';
  vehicleMakeVal = 'Please Select';
  policyhldrVal = 'Please Select';
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
    {
      id: 2,
      title: 'Mrs',
    },
    {
      i: 3,
      title: 'Miss',
    },
    {
      autoPlan: 4,
      title: 'Ms',
    },
    {
      autoPlan: 5,
      title: 'Chief',
    },

    {
      id: 6,
      title: 'Dr',
    },
    {
      autoPlan: 7,
      title: 'Air Vice Marshall',
    },
    {
      autoPlan: 8,
      title: 'Alhaji',
    },
    {
      autoPlan: 9,
      title: 'Ms',
    },
    {
      autoPlan: 10,
      title: 'Chief',
    }
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
    }
  ];

  ageGroupList = [
    {
      id: 1,
      title: '18 - 65 YearsOld',
    },
    {
      id: 2,
      title: '66 - 75 YearsOld',
    },
    {
      id: 3,
      title: '76 - 80 Years Old',
    },

  ];
  roadSideAssistance = [{ roadSide: 'Yes' }, { roadSide: 'No' }];


  // valuetype = 'Third Party';
  constructor(public router: Router,
    public api: InsuranceAppService,
    public location: Location) { }

  ngOnInit() {
    this.subProName = localStorage.getItem('subProName');
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
    this.vehicleMakeVal = 'Manufacturer';
    this.policyhldrVal = 'Please Select';
    this.vehicleModelVal = 'Select Model';
    this.fName = '';
    this.lName = '';

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

    } else {
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
  // -----------------Third Party---------------------------
  vechilenewarray = [];
  EnchancednewClasses = [];
  getCarVehicleTypeCls() {
    this.api.showLoader()
    if (this.subProName === 'Third Party') {
      const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_class":"vehicle_class_thirdparty","method":"get_car_classes"}';
      this.api.insertData(myData).subscribe((res: any) => {
        console.log(res);

        if (res.values !== '') {
          this.vehicleClass = res.values;
          console.log(this.vehicleClass);
          this.vehicleClass.map((val, index) => {
            let data = {
              name: val,
              active: false
            }
            this.vechilenewarray.push(data);
            this.api.hideLoader();
          })
          console.log('dadasdsadsa======', this.vechilenewarray);

        }

      }, (err) => {
        console.log(err);

      });
    }

    else if (this.subProName == 'Enhanced Comprehensive') {
      const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_classes","product_class":"vehicle_class_enhanced_comprehensive"}';
      this.api.insertData(myData).subscribe((res: any) => {
        console.log(res);
        if (res.values != '') {
          this.eCcarClasses = res.values;
          console.log('Enhanced Comprehensive car classes==', this.eCcarClasses);
          this.eCcarClasses.map((val, index) => {
            let data = {
              name: val,
              active: false
            }
            this.EnchancednewClasses.push(data);
            this.api.hideLoader();
          })
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
  vechileMakenew = [];
  getCarMakeCompanies() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_companies"}';
    this.api.insertData(myData).subscribe((res: any) => {
      console.log(res);
      if (res.values != '') {
        this.vehicleMake = res.values;
        console.log(this.vehicleMake);
        this.vehicleMake.map((val, index) => {
          let data = {
            manufacturer: val.manufacturer,
            active: false
          }
          this.vechileMakenew.push(data);
        })
        // console.log('vechileMakenew array====', this.vechileMakenew);

      }

    }, (err) => {
      console.log(err);

    });
  }
  vehicleModelNew = [];
  getVehicleModels() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_models","manufacturer":"' + this.vehicleMakeVal + '"}';
    this.api.insertData(myData).subscribe((res: any) => {
      console.log(res);
      if (res.values != '') {
        this.vehicleModel = res.values;
        console.log(this.vehicleModel);
        this.vehicleModel.map((val, index) => {
          let data = {
            model: val.model,
            active: false
          }
          this.vehicleModelNew.push(data);
        })
        console.log('vehicleModelNew', this.vehicleModelNew);

      }

    }, (err) => {
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
    console.log("DROPDOWN TYPE ----", type);
    if (type == "title") {
      this.showTitle = !this.showTitle;
    }
    else if (type == "age") {
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

  openPolicyhldrList() {
    if (this.showPolicyholder == true) {
      this.showPolicyholder = false;
    } else {
      this.showPolicyholder = true;

    }
  }

  opnenVehicleModelList() {
    if (this.showVehicleModel == true) {
      this.showVehicleModel = false;
    } else {
      this.showVehicleModel = true;

    }
  }

  opnenVehicleUsageList() {
    if (this.showVehicleUsage == true) {
      this.showVehicleUsage = false;
    } else {
      this.showVehicleUsage = true;

    }
  }
  openExcessBuyBack() {
    if (this.showExcessBuyBack == true) {
      this.showExcessBuyBack = false;
    } else {
      this.showExcessBuyBack = true;

    }
  }
  openFloodExtension() {
    if (this.showFloodExt == true) {
      this.showFloodExt = false;
    } else {
      this.showFloodExt = true;

    }
  }
  openVehicleTracking() {
    if (this.showVehicleTracking == true) {
      this.showVehicleTracking = false;
    } else {
      this.showVehicleTracking = true;

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
  selectExcessBuyBack(list) {
    this.excessBuyBackVal = list.excessByBack;
    this.showExcessBuyBack = false;
  }
  selectVehicleCls(list, index) {
    this.vehicleVal = list.name;
    this.showVehicle = false;

    if (this.subProName == 'Third Party') {
      this.vechilenewarray.map((val, i) => {
        if (index == i) {
          this.vechilenewarray[i].active = true;

        }
        if (index != i) {
          this.vechilenewarray[i].active = false;
        }
      })
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
      })
      // console.log('ddddddddddddddddd', this.EnchancednewClasses);
    }

  }
  selectDropDown(list, type) {
    console.log("type----", type);
    console.log("List data ----", list);
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
    })

    this.getVehicleModels();
  }

  selectPolicyholder(list) {
    this.policyhldrVal = list.plcyhldrType;
    this.showPolicyholder = false;
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
    })
    console.log('vechileMakenew--------', this.vehicleModelNew);
  }
  dateChanged(value, type) {
    if (type == 'start') {
      this.tourStartDate = value;
      console.log("this.tourStartDate ----", this.tourStartDate);
      this.showPickerStartDate = false;
    }
    else {
      this.tourEndDate = value;
      console.log("this.tourEndDate ----", this.tourEndDate);
      this.showPickerEndDate = false;
    }

  }
  validateIntertaionTravel() {
    let response = { message: "message", status: false };

    if (this.useTitle == 'Please Select') {
      response.message = "Title required";
    }
    else if (this.ageGroup == 'Please Select') {
      response.message = "Age group required";
    }
    else if (this.fName == '') {
      response.message = "First name required";
    }
    else if (this.lName == '') {
      response.message = "Last name required";
    }
    else if (this.otheName == '') {
      response.message = "Other name required";
    }
    else if (this.mobNumber == '') {
      response.message = "Phone required";
    }
    else if (this.userEmail == '') {
      response.message = "Email required";
    }
    else {
      response.message = "Form validated.";
      response.status = true;
    }
    return response;
  }
  validateThirdParty() {
    let response = { message: "message", status: false };
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
      } else if (this.userEmail == '') {
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
    let response = { message: "message", status: false };
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

      } else if (this.userEmail == '') {
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
    let response = { message: "message", status: false };


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

      } else if (this.userEmail == '') {
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
    console.log("quoteType---", quoteType);
    let formValidationResult = { message: "This product is under developement", status: false };
    console.log("checkTest---", formValidationResult);

    let myData = "";
    switch (quoteType) {
      case 'International':

        formValidationResult = this.validateIntertaionTravel();
        myData = 'myData={"product_id":"' + localStorage.getItem('subProId') + '","first_name":"' + this.fName + '","last_name":"' + this.lName + '", "mobile":"' + this.mobNumber + '", "email":"' + this.userEmail + '", "start_date":"' + this.tourStartDate + '",\r\n"end_date":"' + this.tourEndDate + '", "title":"' + this.useTitle + '", "age_group": "' + this.ageGroup + '", "other_name":"' + this.otheName + '","verify_token":"' + localStorage.getItem('token') + '","method":"save_product_quote"}';

        break;
      case "Third Party":

        formValidationResult = this.validateThirdParty();
        myData = 'myData={\r\n    "product_id":"' + localStorage.getItem('subProId') + '",\r\n    "vehicle_class":"' + this.vehicleVal + '",\r\n    "first_name": "' + this.fName + '",\r\n    "last_name":"' + this.lName + '",\r\n    "vehicle_manufacturer":"' + this.vehicleMakeVal + '",\r\n    "vehicle_model":"' + this.vehicleModelVal + '",\r\n    "policyholder_type":"' + this.policyhldrVal + '",\r\n    "mobile":"' + this.mobNumber + '",\r\n    "company_name":"' + this.compName + '",\r\n    "email":"' + this.userEmail + '",\r\n    "verify_token":"' + localStorage.getItem('token') + '",\r\n    "method": "save_product_quote" \r\n}';

        break;
      case "Enhanced Comprehensive":

        formValidationResult = this.validateEnhancedCom();
        myData = 'myData={"product_id":"' + localStorage.getItem('subProId') + '","vehicle_class":"' + this.vehicleVal + '","vehicle_manufacturer":"' + this.vehicleMakeVal + '", "vehicle_model":"' + this.vehicleModelVal + '", "first_name":"' + this.fName + '", "last_name":"' + this.lName + '",\r\n"policyholder_type":"' + this.policyhldrVal + '", "mobile":"' + this.mobNumber + '", "company_name": "' + this.compName + '", "email":"' + this.userEmail + '", "value_of_vehicle":"' + this.valOfVehicle + '", "flood_extension":"' + this.floodExtVal + '", "excess_buy_back":"' + this.excessBuyBackVal + '", "vehicle_tracking":"' + this.vehicleTrackingVal + '", "verify_token":"' + localStorage.getItem('token') + '","method":"save_product_quote"}';

        break;
      case "Auto Variants":

        formValidationResult = this.validateAutoVarient();
        myData = 'myData={"product_id":"' + localStorage.getItem('subProId') + '","insurance_type":"' + this.autoPlanName + '","vehicle_class":"' + this.vehicleVal + '","vehicle_manufacturer":"' + this.vehicleMakeVal + '", "vehicle_model":"' + this.vehicleModelVal + '", "first_name":"' + this.fName + '", "last_name":"' + this.lName + '",\r\n"policyholder_type":"' + this.policyhldrVal + '", "mobile":"' + this.mobNumber + '", "company_name": "' + this.compName + '", "email":"' + this.userEmail + '", "value_of_vehicle":"' + this.valOfVehicle + '", "flood_extension":"' + this.floodExtVal + '", "road_side_assistance":"' + this.roadSideVal + '", "excess_buy_back":"' + this.excessBuyBackVal + '", "vehicle_tracking":"' + this.vehicleTrackingVal + '", "verify_token":"' + localStorage.getItem('token') + '","method":"save_product_quote"}';

        break

      default:
      // code block
    }
    if (formValidationResult.status) {
      // --- Calling API To create quote --- //
      this.api.insertData(myData).subscribe((data: any) => {
        if (data.message == 'success') {
          this.api.presenttoast(data.info.message);
          localStorage.setItem('product_id', data.info.product_id);
          localStorage.setItem('quote_id', data.info.quote_id);
          localStorage.setItem('subProName', data.info.product_name);
          localStorage.setItem('quoteItems', JSON.stringify(data.quoteItems));
          this.router.navigate(['/yourquote']);

        } else {
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

}
