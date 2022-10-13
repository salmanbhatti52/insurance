import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-renewals',
  templateUrl: './renewals.page.html',
  styleUrls: ['./renewals.page.scss'],
})
export class RenewalsPage implements OnInit {
  // @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;

  show = false;
  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]
  policy: any;

  first_name: any;
  last_name: any;
  dob: any;
  phone_number: any;
  email: any;
  address: any;
  bearertoken: any;
  constructor(public api: InsuranceAppService,
    public location: Location) { }

  ngOnInit() {
    this.policy = JSON.parse(localStorage.getItem('policydata'));
    console.log('dasdasdsadsad', this.policy);
    if (this.policy) {
      if (this.policy.status == 1) {
        this.first_name = this.policy.first_name
        this.last_name = this.policy.last_name
        this.dob = this.policy.dob
        this.phone_number = this.policy.phone_number
        this.email = this.policy.email
        this.address = this.policy.address
      } else {
        this.api.presenttoast(this.policy.message)
      }
    } else {
      this.api.presenttoast('Policy record not found');
    }
  }

  goback() {
    this.location.back()
  }

  // ionViewWillEnter() {
  //   if (this.requestsType) {
  //     if (this.requestsType === 'renewals') {
  //       this.mySegment.nativeElement.children[0].click();

  //     }
  //     if (this.requestsType === 'subsequent') {
  //       this.mySegment.nativeElement.children[1].click();

  //     }
  //   } else {
  //     this.requestsType = 'renewals';
  //     this.mySegment.nativeElement.children[0].click();

  //   }
  // }

  segmentChanged(ev) {
    console.log('requestType value', ev.detail.value);
    let data = ev.detail.value;
    this.requestsType = data
    if (ev.detail.value === 'renewals') {
      this.requestsType = 'renewals';

    }
    if (ev.detail.value === 'subsequent') {
      this.requestsType = 'subsequent';
    }
    localStorage.setItem('requestType', this.requestsType);
  }
  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance
    this.show = false
  }

  renewals() {
    var myData = {
      "sid": "ECHANNEL2",
      "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
    }
    this.api.gettoken(myData).subscribe((res: any) => {
      console.log(res);
      this.bearertoken = res.accessToken
      this.result(this.bearertoken)
    }, (err) => {
      console.log(err);
      this.api.hideLoader()
    });


  }

  result(token) {
    let Bearertoken = token
    let payload =
    {
      "entryDate": "2022-10-07T10:05:37.919Z",
      "startDate": "2022-10-07T10:05:37.919Z",
      "endDate": "2022-10-07T10:05:37.919Z",
      "fxCurrency": "NGN",
      "fxRate": 2147483647,
      "paymentProviderID": "string",
      "paymentReferenceID": "string",
      "policySections": [
        {
          "sectionID": "string",
          "sectionSumInsured": 0,
          "sectionPremium": 0,
          "vehicleRegNo": "string",
          "vehicleTypeID": "VAN",
          "vehicleUser": "string",
          "engineNumber": "string",
          "chasisNumber": "string",
          "vehicleUsage": "PRIVATE",
          "numberOfSeats": 0,
          "stateOfIssue": "string",
          "vehicleMake": "string",
          "vehicleModel": "string",
          "manufactureYear": 0,
          "vehicleColour": "string",
          "engineCapacityHP": "string",
          "coverType": "COMPREHENSIVE"
        }
      ]
    }

    let encode1 = encodeURIComponent('P/500/1002/2022/00082');
    console.log('dasdsadsa', encode1);

    this.api.postdata('http://testcipapiservices.gibsonline.com/api/Policies/Motor/' + encode1 + '/renew', payload, Bearertoken).subscribe((res: any) => {
      console.log('resssss', res);
      this.api.presenttoast('Success')
    }, err => {
      console.log();

    })
  }

}
