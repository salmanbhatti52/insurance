import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { format } from 'date-fns';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
  yopdate = 'Please Select'
  yomdate = 'Please Select'
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

  genderType = [{ gender: 'MALE' }, { gender: 'FEMALE' }]
  Gproduct: any;
  emailvalidation: any;
  constructor(public api: InsuranceAppService,
    public location: Location,
    public route: Router) { }

  ngOnInit() {
    this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'))
    console.log('ssssss-----', this.Gproduct);

    this.getCarMakeCompanies();

    this.emailvalidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  goback() {
    this.location.back()
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
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_companies"}';
    this.api.insertData(myData).subscribe((res: any) => {
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
  vehicleModelNew = [];
  getVehicleModels() {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_car_models","manufacturer":"' + this.vehicleMakeVal + '"}';
    this.api.insertData(myData).subscribe((res: any) => {
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
      this.showGender = false
    } else {
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
      this.api.presenttoast('Vehicle Make required')
    } else if (this.vehicleModelVal == 'Select Model') {
      this.api.presenttoast('Vehicle Model required')
    }
    else if (this.fName == '') {
      this.api.presenttoast('First Name Field Required')
    }
    else if (this.lName == '') {
      this.api.presenttoast('Last Name Field Required')
    }
    else if (this.userEmail == '') {
      this.api.presenttoast('Email Field Required')
    }
    else if (!this.validateEmail(this.userEmail)) {
      this.api.presenttoast('InValid Email')
    }
    else if (this.mobNumber == '') {
      this.api.presenttoast('Mobile Number Field Required')
    }
    else if (this.address == '') {
      this.api.presenttoast('Address Field Required')
    }
    else if (this.regNo == '') {
      this.api.presenttoast('Registration Number Field Required')
    }
    else if (this.chasisNo == '') {
      this.api.presenttoast('Chasis Number Field Required')
    }
    else if (this.engNo == '') {
      this.api.presenttoast('Engine Number Field Required')
    }
    else if (this.vehclr == '') {
      this.api.presenttoast('Vehicle Colour Field Required')
    }
    else if (this.genderVal == 'Select Gender') {
      this.api.presenttoast('Please Select Gender')
    }
    else if (this.dateofbirth == 'Please Select') {
      this.api.presenttoast('Please Select DOB')
    }
    else if (this.yomdate == 'Please Select') {
      this.api.presenttoast('Year of Manufacture Field Required')
    } else {
      var myData = {
        "sid": "ECHANNEL2",
        "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
      }
      this.api.gibsapi(myData).subscribe((res: any) => {
        console.log(res);
        let token = res.accessToken
        this.getresult(token)
      }, (err) => {
        console.log(err);
        this.api.hideLoader()
      });
    }
  }

  getresult(token) {
    let Bearertoken = token;
    let postdata = {
      "productID": "3034",
      "entryDate": "2022-10-20T04:29:31.261Z",
      "startDate": "2018-03-13T00:00:00",
      "endDate": "2019-03-12T00:00:00",
      "fxCurrency": "NGN",
      "fxRate": 1,
      "referrerSource": "AGENT",
      "referrerDetails": "string",
      "paymentProviderID": "string",
      "paymentReferenceID": "string",
      "insured": {
        "title": "string",
        "lastName": this.lName,
        "firstName": this.fName,
        "otherName": "string",
        "gender": this.genderVal,
        "email": this.userEmail,
        "address": this.address,
        "phoneLine1": this.mobNumber,
        "phoneLine2": this.mobNumber,
        "isOrg": true,
        "orgName": "string",
        "orgRegNumber": "string",
        "orgRegDate": "2022-10-20T04:29:31.261Z",
        "taxIdNumber": "string",
        "cityLGA": "string",
        "stateID": "string",
        "nationality": "string",
        "dateOfBirth": this.dateofbirth,
        "kycType": "NOT_AVAILABLE",
        "kycNumber": "string",
        "kycIssueDate": "2022-10-20T04:29:31.261Z",
        "kycExpiryDate": "2022-10-20T04:29:31.261Z",
        "nextOfKin": {
          "title": "string",
          "lastName": "string",
          "firstName": "string",
          "otherName": "string",
          "gender": "MALE",
          "email": "user@example.com",
          "address": "string",
          "phoneLine1": "123456",
          "phoneLine2": "123456"
        }
      },
      "policySections": [
        {
          "sectionID": "string",
          "sectionSumInsured": 0,
          "sectionPremium": 0,
          "vehicleRegNo": this.regNo,
          "vehicleTypeID": "VAN",
          "vehicleUser": "string",
          "engineNumber": this.engNo,
          "chasisNumber": this.chasisNo,
          "vehicleUsage": "PRIVATE",
          "numberOfSeats": 0,
          "stateOfIssue": "string",
          "vehicleMake": this.vehicleMakeVal,
          "vehicleModel": this.vehicleModelVal,
          "manufactureYear": this.yomdate,
          "vehicleColour": this.vehclr,
          "engineCapacityHP": "string",
          "coverType": "COMPREHENSIVE"
        }
      ]
    }


    this.api.postdata('http://testcipapiservices.gibsonline.com/api/Policies/Motor', postdata, Bearertoken).subscribe((res: any) => {
      console.log('motor response---', res);
      localStorage.setItem('gibsProductres', JSON.stringify(res));
      this.route.navigate(['policyquote'])
    }, err => {
      // console.log(err);
      // let errormsg = err.error.errors[0].message;

      // this.api.presenttoast(errormsg)
    })
  }


  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}