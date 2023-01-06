import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VerifyPolicyPopupCustPage } from '../verify-policy-popup-cust/verify-policy-popup-cust.page';
import axios from 'axios';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpHeaders, HttpParams, HttpClient, HttpParamsOptions } from '@angular/common/http';


@Component({
  selector: 'app-verify-policy-screen-cust',
  templateUrl: './verify-policy-screen-cust.page.html',
  styleUrls: ['./verify-policy-screen-cust.page.scss'],
})
export class VerifyPolicyScreenCustPage implements OnInit {
  show = false;
  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]
  pnumber = '';
  config: { method: string; url: string; headers: { Authorization: string; Cookie: string; 'Content-Type': string; }; };
  policy = false;
  verifypolicy: any;
  first_name: any;
  last_name: any;
  dob: any;
  phone_number: any;
  email: any;
  address: any;
  bearertoken: any;
  constructor(public modal: ModalController,
    public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    private http: HttpClient,) { }

  ngOnInit() {

    const myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
    };
    this.api.gibsapi(myData).subscribe(
      (res: any) => {
        console.log(res);
        const token = res.accessToken;
        this.policieshistory(token)
      },
      (err) => {
        console.log(err);

      }
    )
  }
  policieshistory(token) {
    this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/policies/history', token).subscribe((response: any) => {

      console.log(response);
      this.api.hideLoader();

    }, err => {
      console.log('error to get policies----', err);
    });
  }

  goback() {
    this.router.navigate(['/home-page-screen-after-login'])
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

  async PopupCust() {
    // let token = '39109f7df56e1CORNERStone9e685066bb852''
    // P/500/1001/2023/00235
    if (this.pnumber == '') {
      this.api.presenttoast('Policy Number Field is required!');
    } else {
      const myData = {
        sid: 'ECHANNEL2',
        token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
      };
      this.api.gibsapi(myData).subscribe(
        (res: any) => {
          console.log(res);
          const token = res.accessToken;
          this.bearertoken = res.accessToken;
          // this.api.postdata('http://testcipapiservices.gibsonline.com/api/policies/P/500/1001/2023/00235/renew', this.bearertoken).subscribe((response: any) => {

          //   console.log(response);
          //   this.api.hideLoader();

          // });
          let encode1 = encodeURIComponent('P/500/1001/2023/00235');
          console.log('dasdsadsa', encode1);
          this.api.postdata(' http://testcipapiservices.gibsonline.com/api/policies/' + encode1, this.bearertoken).subscribe((response: any) => {

            console.log('ddddddddddddddddddd', response);
            this.api.hideLoader();

          }, err => {
            console.log('get policy error', err);

          });
        },
        (err) => {
          console.log(err);

        }
      );


      // old one
      // this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=160&polnum2=' + this.pnumber, localStorage.getItem('token')).subscribe((response: any) => {

      //   console.log(response.result);
      //   this.verifypolicy = response.result
      //   localStorage.setItem('policydata', JSON.stringify(this.verifypolicy));


      //   this.api.hideLoader();
      //   if (this.verifypolicy) {
      //     if (this.verifypolicy.status == 1) {
      //       this.router.navigate(['renewals'])
      //       // this.policy = true;
      //       // this.first_name = this.verifypolicy.first_name
      //       // this.last_name = this.verifypolicy.last_name
      //       // this.dob = this.verifypolicy.dob
      //       // this.phone_number = this.verifypolicy.phone_number
      //       // this.email = this.verifypolicy.email
      //       // this.address = this.verifypolicy.address
      //     } else {
      //       this.api.presenttoast(this.verifypolicy.message)
      //     }
      //   } else {
      //     this.api.presenttoast('Policy record not found');
      //   }
      // });
    }


    // const params = {
    //   process: 'Processopenledapi',
    //   process_code: '160',
    //   polnum2: 'CHEF/2011/04/02072'
    // }
    // this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php', { params }, localStorage.getItem('token')).pipe(map(data => { })).subscribe(result => {
    //   console.log(result);
    // }, err => {
    //   console.log('error', err);

    // });

    // const headers = new HttpHeaders()
    // headers.set('Authorization', 'Bearer 39109f7df56e1CORNERStone9e685066bb852');
    // headers.set("Access-Control-Allow-Origin", "*");

    // headers.set("Content-Type", "application/json")
    // const myObject = {
    //   process: 'Processopenledapi',
    //   process_code: '160',
    //   polnum2: 'CHEF/2011/04/02072'
    // }
    // const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

    // const options = { params: new HttpParams(httpParams), headers: headers, };

    // this.http.get<any>('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php', options)
    //   .subscribe((data: any) => {
    //     // this.localvar = data;
    //     console.log('data====', data);

    //   }, err => {
    //     console.log('errr====', err);

    //   });

    // const modal = await this.modal.create({
    //   component: VerifyPolicyPopupCustPage,
    //   cssClass: 'PolicyPopupCust',
    // });
    // modal.onDidDismiss().then((data) => {
    //   console.log('data', data)
    // });
    // return await modal.present();
  }
}
