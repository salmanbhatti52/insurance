import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

declare var require: any;
@Component({
  selector: 'app-policylookup',
  templateUrl: './policylookup.page.html',
  styleUrls: ['./policylookup.page.scss'],
})


export class PolicylookupPage implements OnInit {
  show = false;
  Title = 'Select Policy Type'
  listarray = [{ Title: 'Gen Business' }, { Title: 'Life/Investment' }]
  uTitle = '';
  policy = false;
  policynum = '';
  verifypolicy: any;
  full_name: any;
  InsuranceType: any;
  StartDate: any;
  DateofExpiration: any;
  PolicyNumber: any;
  P10PolicyNumber: any;
  response: any;
  gibspolicy = false;

  constructor(public api: InsuranceAppService) { }

  ngOnInit() {
    var number = "YEKINI, AZEEZAT, ABOSEDE";
    var stringValue = number.replace(/,/g, '');

    console.log(stringValue, "using String");


  }

  openlist() {
    console.log('show value====', this.show);

    if (this.show == false) {
      this.show = true
    } else {
      this.show = false;

    }
  }

  selectTitle(list) {
    this.uTitle = list.Title
    this.show = false
  }

  async policylookup() {


    if (this.uTitle == '') {
      this.api.presenttoast('Please select an item from dropdown')
    }
    else if (this.policynum == '') {
      this.api.presenttoast('Policy Number Field is required!')
    } else {
      if (this.uTitle == 'Gen Business') {
        this.api.showLoader();
        var myData = {
          "sid": "ECHANNEL2",
          "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
        }
        this.api.gibsapi(myData).subscribe((res: any) => {
          console.log(res);
          let token = res.accessToken
          this.policyresult(token)
        }, (err) => {
          console.log(err);
          this.api.hideLoader()
        });
      }
      if (this.uTitle == 'Life/Investment') {
        let token = '39109f7df56e1CORNERStone9e685066bb852'
        this.api.showLoader();
        this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&polnum2=' + this.policynum + '&process_code=140', token).subscribe((response: any) => {
          this.api.hideLoader();
          console.log(response);
          this.verifypolicy = response.result;
          if (this.verifypolicy) {
            if (response.result.status == 0) {
              this.gibspolicy = false;
              this.policy = false;
              this.api.presenttoast(response.result.message);
            } else {
              this.gibspolicy = false;
              this.policy = true;
              var name = this.verifypolicy.insured
              this.full_name = name.replace(/,/g, '');
              this.StartDate = this.verifypolicy.issuedate
              this.DateofExpiration = this.verifypolicy.mat_date
              this.PolicyNumber = this.verifypolicy.polnum
              // this.InsuranceType =
              this.P10PolicyNumber = this.verifypolicy.polnum2
            }

          } else {
            this.gibspolicy = false;
            this.api.presenttoast('Policy record not found');
          }






        }, err => {
          this.api.hideLoader();
        });
      }

    }
  }

  policyresult(token) {
    // P/500/4000/2022/00007
    let encode = encodeURIComponent(this.policynum);
    console.log('eee--', encode);


    let Bearertoken = token
    let url = 'http://testcipapiservices.gibsonline.com/api/Policies/' + encode
    this.api.getpolicy(url, Bearertoken).subscribe((response: any) => {
      this.api.hideLoader();
      console.log(response);
      this.policy = false;

      this.gibspolicy = true;
      this.full_name = response.insured.firstName + ' ' + response.insured.lastName
      this.StartDate = response.startDate
      this.DateofExpiration = response.endDate
      this.PolicyNumber = response.policyNo


    }, err => {
      console.log(err);

      this.api.presenttoast(err.error.title);
      this.api.hideLoader();
    });

    // this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Products', Bearertoken).subscribe((res: any) => {
    //   console.log('ressssss', res);

    //   let postdata = {
    //     "productID": "1111",
    //     "entryDate": "2022-10-20T04:29:31.261Z",
    //     "startDate": "2018-03-13T00:00:00",
    //     "endDate": "2019-03-12T00:00:00",
    //     "fxCurrency": "NGN",
    //     "fxRate": 1,
    //     "referrerSource": "AGENT",
    //     "referrerDetails": "string",
    //     "paymentProviderID": "string",
    //     "paymentReferenceID": "string",
    //     "insured": {
    //       "title": "string",
    //       "lastName": "string",
    //       "firstName": "string",
    //       "otherName": "string",
    //       "gender": "MALE",
    //       "email": "user@example.com",
    //       "address": "string",
    //       "phoneLine1": "0803 502 6956",
    //       "phoneLine2": "0803 502 6956",
    //       "isOrg": true,
    //       "orgName": "string",
    //       "orgRegNumber": "string",
    //       "orgRegDate": "2022-10-20T04:29:31.261Z",
    //       "taxIdNumber": "string",
    //       "cityLGA": "string",
    //       "stateID": "string",
    //       "nationality": "string",
    //       "dateOfBirth": "2022-10-20T04:29:31.261Z",
    //       "kycType": "NOT_AVAILABLE",
    //       "kycNumber": "string",
    //       "kycIssueDate": "2022-10-20T04:29:31.261Z",
    //       "kycExpiryDate": "2022-10-20T04:29:31.261Z",
    //       "nextOfKin": {
    //         "title": "string",
    //         "lastName": "string",
    //         "firstName": "string",
    //         "otherName": "string",
    //         "gender": "MALE",
    //         "email": "user@example.com",
    //         "address": "string",
    //         "phoneLine1": "123456",
    //         "phoneLine2": "123456"
    //       }
    //     },
    //     "policySections": [
    //       {
    //         "sectionID": "string",
    //         "sectionSumInsured": 0,
    //         "sectionPremium": 0,
    //         "vehicleRegNo": "string",
    //         "vehicleTypeID": "VAN",
    //         "vehicleUser": "string",
    //         "engineNumber": "string",
    //         "chasisNumber": "string",
    //         "vehicleUsage": "PRIVATE",
    //         "numberOfSeats": 0,
    //         "stateOfIssue": "string",
    //         "vehicleMake": "string",
    //         "vehicleModel": "string",
    //         "manufactureYear": 0,
    //         "vehicleColour": "string",
    //         "engineCapacityHP": "string",
    //         "coverType": "COMPREHENSIVE"
    //       }
    //     ]
    //   }


    //   this.api.postdata('http://testcipapiservices.gibsonline.com/api/Policies/Motor', postdata, Bearertoken).subscribe((res: any) => {
    //     console.log('motor response---', res);

    //   })
    // })
  }

}
