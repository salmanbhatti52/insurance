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
  }

  async policylookup() {
    // localStorage.getItem('token')
    if (this.policynum == '') {
      this.api.presenttoast('Policy Number Field is required!')
    } else {

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
