import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-allpolicies',
  templateUrl: './allpolicies.page.html',
  styleUrls: ['./allpolicies.page.scss'],
})
export class AllpoliciesPage implements OnInit {
  show = false;
  Title = 'Select Policy Type';
  listarray = [{ Title: 'Gen Business' }, { Title: 'Life/Investment' }];
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
  statusdesc: any;
  constructor(public api: InsuranceAppService) { }

  ngOnInit() {
  }

  openlist() {
    console.log('show value====', this.show);

    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  selectTitle(list) {
    this.uTitle = list.Title;
    this.show = false;
  }

  async policylookup() {
    if (this.uTitle == '') {
      this.api.presenttoast('Please select an item from dropdown');
    } else if (this.policynum == '') {
      this.api.presenttoast('Policy Number Field is required!');
    } else {
      if (this.uTitle == 'Gen Business') {
        this.api.showLoader();
        var myData = {
          sid: 'ECHANNEL2',
          token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
        };
        this.api.gibsapi(myData).subscribe(
          (res: any) => {
            console.log(res);
            let token = res.accessToken;
            this.policyresult(token);
          },
          (err) => {
            console.log(err);
            this.api.hideLoader();
          }
        );
      }
      if (this.uTitle == 'Life/Investment') {
        let token = '39109f7df56e1CORNERStone9e685066bb852';
        this.api.showLoader();
        this.api
          .get(
            'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&polnum2=' +
            this.policynum +
            '&process_code=140',
            '39109f7df56e1CORNERStone9e685066bb852'
          )
          .subscribe(
            (response: any) => {
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
                  var name = this.verifypolicy.insured;
                  this.full_name = name.replace(/,/g, '');
                  this.StartDate = this.verifypolicy.issuedate;
                  this.DateofExpiration = this.verifypolicy.mat_date;
                  this.PolicyNumber = this.verifypolicy.polnum;
                  // this.InsuranceType =
                  this.P10PolicyNumber = this.verifypolicy.polnum2;
                  this.statusdesc = this.verifypolicy.statusdesc
                }
              } else {
                this.gibspolicy = false;
                this.api.presenttoast('Policy record not found');
              }
            },
            (err) => {
              this.gibspolicy = false;
              this.policy = false;
              this.api.hideLoader();
            }
          );
      }
    }
  }

  policyresult(token) {
    // P/500/4000/2022/00007
    let encode = encodeURIComponent(this.policynum);
    console.log('eee--', encode);

    let Bearertoken = token;
    let url = 'https://testcipapiservices.gibsonline.com/api/policies/' + encode;
    this.api.getpolicy(url, Bearertoken).subscribe(
      (response: any) => {
        this.api.hideLoader();
        console.log(response);
        this.policy = false;

        this.gibspolicy = true;
        this.full_name =
          response.customerName
        this.StartDate = response.startDate;
        this.DateofExpiration = response.endDate;
        this.PolicyNumber = response.policyNo;
      },
      (err) => {
        console.log(err);
        this.gibspolicy = false;
        this.policy = false;
        this.api.presenttoast(err.error.title);
        this.api.hideLoader();
      }
    );



  }

}
