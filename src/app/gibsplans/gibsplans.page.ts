import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { format } from 'date-fns';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-gibsplans',
  templateUrl: './gibsplans.page.html',
  styleUrls: ['./gibsplans.page.scss'],
})
export class GibsplansPage implements OnInit {
  vehicleMakeVal = 'Select Manufacturer';
  vehicleModelVal = 'Select Model';
  genderVal = 'Select Gender';
  dobValue = format(new Date(), 'yyyy-MM-dd');
  yopValue = format(new Date(), 'yyyy');
  yomValue = format(new Date(), 'yyyy');
  dateofbirth = 'Please Select';
  yopdate = 'Please Select';
  yomdate = format(new Date(), 'yyyy');
  vehicleModel: any;
  vehicleMake: any;
  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  address = '';
  regNo = '';
  engNo = '';
  chasisNo = '';
  vehclr = '';
  showMaker = false;
  showVehicleModel = false;
  showGender = false;
  showPickerDob = false;
  showPickerYop = false;
  showPickerYom = false;

  genderType = [{ gender: 'MALE' }, { gender: 'FEMALE' }];
  frequency = [{ f: 'once' }, { f: 'twice' }, { f: 'thrice' }];
  freqonce = [{ f: 'once' }];
  showf = false;
  Gproduct: any;
  emailvalidation: any;

  valueofvehicle: any = '';
  yesno = [{ name: 'Yes' }, { name: 'No' }];
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType: 'Corporate' }];
  policyhldrVal = 'Please Select';

  compName: any;
  ebb: any = 'Please Select';
  fe: any = 'Please Select';
  srcc: any = 'Please Select';
  iit: any = 'Please Select';
  pliability: any = 'Please Select'
  Fpacakage: any = 'Please Select'

  producttax: any = '';
  ebbtax: any = '';
  fetax: any = '';
  srcctax: any = '';
  iittax: any = '';


  showebb = false;
  showfe = false;
  showsrcc = false;
  showiit = false;
  showpliability = false;
  showfullp = false;

  showPolicyholder = false;

  productname: string;
  gibsproduct: any;
  overalltax: any;

  draftArr: any = '';
  subProName: string;
  productId: any;
  motorproduct: any;
  currentdate: any;
  enddate: any;
  productType: any;
  fchoose: any = 'Please Select';
  constructor(
    public api: InsuranceAppService,
    public location: Location,
    public route: Router,
    public activated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentdate = moment(new Date()).format('YYYY-MM-DD');
    console.log('cdate=', this.currentdate);
    var oneYearFromNow = new Date();
    var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    this.enddate = moment(new Date(result)).format('YYYY-MM-DD');
    console.log(moment(new Date(result)).format('YYYY-MM-DD'));
    // if (localStorage.getItem('subProName') == 'Third Party') {
    //   this.motorproduct = 'THIRD_PARTY_ONLY'
    // } else {
    //   this.motorproduct = 'COMPREHENSIVE '
    // }
    this.userEmail = localStorage.getItem('email');
    this.mobNumber = localStorage.getItem('number');
    this.fName = localStorage.getItem('fname');;
    this.lName = localStorage.getItem('lname');
    console.log(this.motorproduct);

    // this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
    // console.log('ssssss-----', this.Gproduct);
    // this.subProName = this.Gproduct.productName
    // this.productId = this.Gproduct.productID

    this.getCarMakeCompanies();

    this.emailvalidation =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.productType = this.activated.snapshot.params['productType']
    console.log(this.productType);
    this.testresult()
  }

  goback() {
    this.location.back();
  }
  openVhclMakeList() {
    if (this.showMaker == true) {
      this.showMaker = false;
    } else {
      this.showMaker = true;
    }
  }

  opnenVehicleModelList() {
    if (this.showVehicleModel == true) {
      this.showVehicleModel = false;
    } else {
      this.showVehicleModel = true;
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
  vehicleModelNew = [];
  getVehicleModels() {
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
    } else {
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
    } else {
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
    } else {
      this.showf = true;
    }
  }
  selectFrequency(list) {
    this.fchoose = list.f
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
    } else if (this.vehicleModelVal == 'Select Model') {
      this.api.presenttoast('Vehicle Model required');
    }
    //  else if (this.fName == '') {
    //   this.api.presenttoast('First Name Field Required');
    // } else if (this.lName == '') {
    //   this.api.presenttoast('Last Name Field Required');
    // }
    else if (this.userEmail == '') {
      this.api.presenttoast('Email Field Required');
    } else if (!this.validateEmail(this.userEmail)) {
      this.api.presenttoast('InValid Email');
    } else if (this.mobNumber == '') {
      this.api.presenttoast('Mobile Number Field Required');
    }
    //  else if (this.address == '') {
    //   this.api.presenttoast('Address Field Required');
    // }
    else if (this.regNo == '') {
      this.api.presenttoast('Registration Number Field Required');
    } else if (this.chasisNo == '') {
      this.api.presenttoast('Chasis Number Field Required');
    } else if (this.engNo == '') {
      this.api.presenttoast('Engine Number Field Required');
    } else if (this.vehclr == '') {
      this.api.presenttoast('Vehicle Colour Field Required');
    } else if (this.valueofvehicle == '') {
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
      } else if (this.fe == 'Please Select') {
        this.api.presenttoast('Please Select Flood Extension');
      }
      else if (this.srcc == 'Please Select') {
        this.api.presenttoast('Please Select Strike Riot & Civil Commotion');
      } else {
        this.showresult()
      }
    }
    else
      if (this.productType == 'Uber Classic') {

        if (this.ebb == 'Please Select') {
          this.api.presenttoast('Please Select Excess Buy Back');
        } else if (this.fe == 'Please Select') {
          this.api.presenttoast('Please Select Flood Extension');
        }
        else if (this.srcc == 'Please Select') {
          this.api.presenttoast('Please Select Strike Riot & Civil Commotion');
        }
        else if (this.pliability == 'Please Select') {
          this.api.presenttoast('Please Select Passenger Liability');
        }
        else {
          this.showresult()
        }
      } else {
        this.showresult()
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

    const myData =
      'myData={"insurance_type":"' +
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
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status_no == 1) {
          localStorage.setItem('valueofvechile', this.valueofvehicle)
          localStorage.setItem('vechilemake', this.vehicleMakeVal)
          localStorage.setItem('vechilemodel', this.vehicleModelVal);
          localStorage.setItem('productType', this.productType)
          localStorage.setItem('motorprices', JSON.stringify(res));

          this.Quoteprocess()
        }
        else {
          this.api.presenttoast(res.message)
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }

  Quoteprocess() {
    const myData =
      'myData={"insurance_type":"' +
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

    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log('quoteproces=====', res);
        localStorage.setItem('quoteItemsvalues', JSON.stringify(res.quoteItems))
        if (res.status_no == 1) {
          var obj = {
            title: this.productType,
            product_id: res.info.product_id,
            quote_id: res.info.quote_id,
            subProName: this.productType,
            quoteItems: 'dummy',
            image:
              'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
            path: '/policyquote',
            datetime: new Date().toISOString(),
          };
          this.draftArr = JSON.parse(localStorage.getItem('draftArr'));

          if (this.draftArr) {
            this.draftArr.push(obj);
          } else {
            this.draftArr = [obj];
          }
          this.api.presenttoast(res.info.message)
          let datasend = {
            registration_number: this.regNo,
            engine_number: this.engNo,
            chasis_number: this.chasisNo,
            vehicle_colour: this.vehclr,
            dob: this.dateofbirth,
            policyhldrVal: this.policyhldrVal
          }
          localStorage.setItem('quotevalues', JSON.stringify(datasend));
          localStorage.setItem('quoteprocess', JSON.stringify(res));
          localStorage.setItem('email', this.userEmail);
          localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
          this.route.navigate(['policyquote']);
        }
        else {
          this.api.presenttoast(res.message)
        }
      },
      (err) => {
        console.log(err);
      }
    );

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
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //// 1
  showDebb() {
    if (this.showebb == true) {
      this.showebb = false;
    } else {
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
    } else {
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
    } else {
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
    } else {
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
    } else {
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
    } else {
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



}
