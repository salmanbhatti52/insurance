/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-ivplan4',
  templateUrl: './ivplan4.page.html',
  styleUrls: ['./ivplan4.page.scss'],
})
export class Ivplan4Page implements OnInit {
  // @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  subProName: any;
  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  tourStartDate = format(new Date(), 'yyyy-MM-dd');
  otheName = '';
  showPickerStartDate = false;
  useTitle = 'Please Select';

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
  showTitle = false;
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
  constructor(
    public router: Router,
    public api: InsuranceAppService,
    public location: Location
  ) {}

  ngOnInit() {
    this.subProName = localStorage.getItem('subProName');
    console.log('subproduct name-----', this.subProName);

    this.userEmail = localStorage.getItem('email');
    this.mobNumber = localStorage.getItem('number');
  }

  goback() {
    this.location.back();
  }

  getQuote() {
    this.router.navigate(['/quote1']);
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

  openDropDwon(type) {
    console.log('DROPDOWN TYPE ----', type);
    if (type == 'title') {
      this.showTitle = !this.showTitle;
    }
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

    return response;
  }

  dateChanged(value, type) {
    if (type == 'start') {
      this.tourStartDate = value;
      console.log('this.tourStartDate ----', this.tourStartDate);
      this.showPickerStartDate = false;
    } else {
      this.tourStartDate = value;
      console.log('this.tourEndDate ----', this.tourStartDate);
      this.showPickerStartDate = false;
    }
  }
}
