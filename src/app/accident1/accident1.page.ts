/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-accident1',
  templateUrl: './accident1.page.html',
  styleUrls: ['./accident1.page.scss'],
})
export class Accident1Page implements OnInit {

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
  useTitle: any = 'Please Select Title';
  constructor(
    public router: Router,
    public api: InsuranceAppService,
    public location: Location
  ) { }

  ngOnInit() {
    console.log('new Date().toISOString()===', new Date().toISOString());

    this.subProName = localStorage.getItem('subProName');
    console.log('subproduct name-----', this.subProName);

    this.userEmail = localStorage.getItem('email');
    this.mobNumber = localStorage.getItem('number');
    if (this.mobNumber && this.mobNumber != 'null') {
      this.mobNumber = localStorage.getItem('number');
    } else {
      this.mobNumber = '';

    }
  }

  goback() {
    this.location.back();
  }
  ionViewWillEnter() {


    this.fName = localStorage.getItem('fname');;
    this.lName = localStorage.getItem('lname');

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
    } else {
      this.box = 'checked';
    }
  }
  getQuote() {
    this.router.navigate(['/quote1']);
  }
  vechilenewarray = [];
  EnchancednewClasses = [];

  vechileMakenew = [];




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





  openpaymentfrequency() {
    if (this.showpaymentfrequency == true) {
      this.showpaymentfrequency = false;
    } else {
      this.showpaymentfrequency = true;
    }
  }

  opensumassured() {
    if (this.showsumassured == true) {
      this.showsumassured = false;
    } else {
      this.showsumassured = true;
    }
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




  validateThirdParty() {
    const response = { message: 'message', status: false };

    if (this.useTitle == 'Please Select Title') {
      response.message = 'Please Select Title';
    } else if (this.fName == '') {
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

    return response;
  }


  createQuote(quoteType) {
    console.log('quoteType---', quoteType);


    let myData = '';

    let formValidationResult = this.validateThirdParty();

    myData =
      'myData={"product_id":"' +
      '62' +
      '", "title":"' +
      this.useTitle +
      '", "first_name":"' +
      this.fName +
      '", "last_name":"' +
      this.lName +
      '", "mobile":"' +
      this.mobNumber +
      '", "email":"' +
      this.userEmail +
      '", "verify_token":"' +
      localStorage.getItem('token') +
      '","method":"save_product_quote"}';





    if (formValidationResult.status) {
      // --- Calling API To create quote --- //

      this.api.insertData(myData).subscribe(
        (data: any) => {
          console.log('data response for products----', data);

          if (data.message == 'success') {
            //ali

            this.api.accident_quote_id = data.info.quote_id

            this.api.presenttoast(data.info.message);

            this.getAccidengtCovers()

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



  getAccidengtCovers() {

    let myDataCovers =
      'myData= {"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"get_personal_accident_covers"}';

    this.api.insertData(myDataCovers).subscribe(
      (data: any) => {
        console.log('data response for products----', data);

        if (data.status == 1) {
          //ali

          this.api.accidentcovers = data.covers
          this.router.navigate(['/accident2']);
        } else {
          this.api.presenttoast(data.message);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
