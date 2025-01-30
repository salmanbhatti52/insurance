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
  engine_number: any;
  chasis_number: string;
  vehicle_colour: any;
  address_vvv: string;
  year_of_purchase: any;
  year_of_manufacture: string;
  referred_by: any;
  date_of_birth: any;
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
        const token = res.accessToken;
        this.policieshistory(token)
      },
      (err) => {

      }
    )
  }
  policieshistory(token) {
    this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/policies', token).subscribe((response: any) => {

      this.api.hideLoader();

    }, err => {
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
          const token = res.accessToken;
          this.bearertoken = res.accessToken;
          let encode1 = encodeURIComponent(this.pnumber);
          this.api.renewal('https://testcipapiservices.gibsonline.com/api/policies/' + encode1 + '/renew', this.bearertoken).subscribe((response: any) => {

            this.api.hideLoader();

          }, (err) => {
            this.api.alertboxshow('Validation Failed');
          });
          // let encode1 = encodeURIComponent(this.pnumber);
          // this.api.renewal('https://testcipapiservices.gibsonline.com/api/policies/' + encode1 + '/renew', res.accessToken).subscribe((response: any) => {

          //   this.api.hideLoader();

          // }, err => {

          // });
        },
        (err) => {


        }
      );


      // old one
      // this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=160&polnum2=' + this.pnumber, localStorage.getItem('token')).subscribe((response: any) => {

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
    // }, err => {

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

    //   }, err => {

    //   });

    // const modal = await this.modal.create({
    //   component: VerifyPolicyPopupCustPage,
    //   cssClass: 'PolicyPopupCust',
    // });
    // modal.onDidDismiss().then((data) => {
    // });
    // return await modal.present();
  }




  rrr() {

    if (!this.pnumber) {
      return
    }
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","registration_number":"' + this.pnumber +
      '","method":"get_quote_for_renewal"}';

    // 'myData={"verify_token":"' + 'fJ1ur7uKfAuJ7LfX' +
    // '","product_id":"' + '2' +
    // '","quote_id":"' + '123' +
    // '","payment_option":"flutterwav' +
    // '","method":"payment_method_select"}';

    // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', myData).subscribe(
    this.api.renewalC('https://www.cornerstone.com.ng/webservice/renewal', myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        // if (res.status_no == 1) {
        if (res.status_no != 0) {

          if (res.status == 'paid') {
            this.api.presenttoast('Payment has been already done.')

          } else {
            this.edit_renewal_quote()

          }


        } else {
          this.api.presenttoast(res.message)
        }

        //   if (this.pastPayment && this.pastPayment.length > 0) {

        //   } else {
        //     this.pastPayment = ''
        //   }
        // }
      },
      (err) => {
        this.api.hideLoader();

      }
    );
  }


  edit_renewal_quote() {
    if (!this.pnumber) {
      return
    }
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","registration_number":"' + this.pnumber +
      '","method":"edit_renewal_quote"}';



    // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', myData).subscribe(
    this.api.renewalC('https://www.cornerstone.com.ng/webservice/renewal', myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        if (res.status_no == 1) {

          this.api.policyamountDue = res.amount

          this.renewPPP(res)
        } else {
        }


      },
      (err) => {
        this.api.hideLoader();

      }
    );
  }


  renewPPP(val: any) {
    var referred_by = ''
    var pep_category = ''
    if (val.fromGibs) {

      for (let i = 0; i < val.quoteItems.length; i++) {
        let vvv = val.quoteItems[i]

        if (vvv.field_name == 'referred_by') {
          referred_by = vvv.value
          this.referred_by = vvv.value
        }
        if (vvv.field_name == 'pep_category') {
          pep_category = vvv.value
        }
        if (vvv.field_name == 'engine_number') {
          this.engine_number = vvv.value
        }
        if (vvv.field_name == 'chasis_number') {
          this.chasis_number = vvv.value
        }
        if (vvv.field_name == 'vehicle_colour') {
          this.vehicle_colour = vvv.value
        }
        if (vvv.field_name == 'address') {
          this.address_vvv = vvv.value
        }
        if (vvv.field_name == 'year_of_purchase') {
          this.year_of_purchase = vvv.value
        }
        if (vvv.field_name == 'year_of_manufacture') {
          this.year_of_manufacture = vvv.value
        }
        if (vvv.field_name == 'date_of_birth') {
          this.date_of_birth = vvv.value
        }
      }
    } else {
      let vvv = val.quote.details
      if (vvv) {

        if (vvv.referred_by) {
          referred_by = vvv.referred_by.value
          this.referred_by = vvv.referred_by.value
        }

        if (vvv.pep_category) {
          pep_category = vvv.pep_category.value

        }
        if (vvv.engine_number) {
          this.engine_number = vvv.engine_number.value

        }
        if (vvv.chasis_number) {
          this.chasis_number = vvv.chasis_number.value
        }

        if (vvv.vehicle_colour) {
          this.vehicle_colour = vvv.vehicle_colour.value

        }
        if (vvv.address) {
          this.address_vvv = vvv.address.value
        }

        if (vvv.year_of_purchase) {
          this.year_of_purchase = vvv.year_of_purchase.value
        }

        if (vvv.year_of_manufacture) {
          this.year_of_manufacture = vvv.year_of_manufacture.value
        }
        if (vvv.date_of_birth) {
          this.date_of_birth = vvv.date_of_birth.value
        }


      }

    }

    // }
    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","registration_number":"' + this.pnumber +
      '","referred_by":"' + (this.referred_by ?? 'NO') +
      '","referrer_details":"' + (this.referred_by ?? 'NO') +
      '","pep_category":"' + pep_category +
      '","occupation":"' + '' +
      '","method":"renew_your_policy"}';


    console.log('myData----------------', myData)


    // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', myData).subscribe(
    this.api.renewalC('https://www.cornerstone.com.ng/webservice/renewal', myData).subscribe(
      (res: any) => {
        this.api.hideLoader();
        console.log('renew_your_policy----------------', JSON.stringify(res))

        if (res.status_no == 1) {
          this.api.nextPayment = res
          this.router.navigate(['policypay'])

          // this.save_product_proposal(res)
        } else {
          this.api.presenttoast(res.message)
        }


      },
      (err) => {
        this.api.hideLoader();

      }
    );
    // }
  }

  save_product_proposal(val: any) {
    let datasend =
      'myData={"product_id":' +
      '"' + val.quote.product_id + '"' +
      ',"quote_id":' +
      '"' + val.quote.id + '"' +
      ',"name":' +
      '"' + val.product.name + '"' +
      ',"registration_number":' +
      '"' + this.pnumber + '"' +
      ',"engine_number":' +
      '"' + this.engine_number + '"' +
      ',"chasis_number":' +
      '"' + this.chasis_number + '"' +
      ',"vehicle_colour":' +
      '"' + this.vehicle_colour + '"' +
      ',"address":' +
      '"' + this.address_vvv + '"' +
      ',"year_of_purchase":' +
      '"' + this.year_of_purchase + '"' +
      ',"year_of_manufacture":' +
      '"' + this.year_of_manufacture + '"' +
      ',"date_of_birth":' +
      '"' + this.date_of_birth + '"' +
      ',"referred_by":' +
      '"' + this.referred_by + '"' +
      ',"payment_option":' +
      '"' + 'flutterwave ' + '"' +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      // '","method":"standalonePaystackConfirm"}';
      '","method":"save_product_proposal"}';



    this.api.showLoader()
    // this.api.renewalC('https://cornerstone.com.ng/devtest/webservice/renewal', datasend).subscribe((res: any) => {
    this.api.renewalC('https://www.cornerstone.com.ng/webservice/renewal', datasend).subscribe((res: any) => {
      console.log('save_product_proposal---------------', res);
      if (res.status_no == 1) {
        this.api.hideLoader();
        this.api.alertboxshow(res.message);


      } else {
        this.api.hideLoader()
        // this.api.presenttoast(res.message)
        this.api.alertboxshow(res.message)
      }


    }, err => {
      this.api.alertboxshow('error in standalonePaystackConfirm: ' + JSON.stringify(err));
      this.api.hideLoader()
    });
  }

  // paystackpayment() {
  //   let datasend =
  //     'myData={"transaction_ref":' +
  //     '"' + this.trxref + '"' +
  //     ',"flutterwave_transaction_id":' +
  //     '"' + this.paymetdone.tx_ref + '"' +
  //     ',"quote_id":' +
  //     '"' + this.quoteId + '"' +
  //     ',"verify_token":"' +
  //     localStorage.getItem('token') +
  //     // '","method":"standalonePaystackConfirm"}';
  //     '","method":"standaloneFlutterwaveConfirm"}';



  //   this.api.showLoader()
  //   this.api.insertData(datasend).subscribe((res: any) => {
  //     console.log('payemt response', res);
  //     if (res.status_no == 1) {
  //       this.api.hideLoader();
  //       this.api.alertboxshow(res.message);


  //     } else {
  //       this.api.hideLoader()
  //       // this.api.presenttoast(res.message)
  //       this.api.alertboxshow(res.message)
  //     }


  //   }, err => {
  //     this.api.alertboxshow('error in standalonePaystackConfirm: ' + JSON.stringify(err));
  //     this.api.hideLoader()
  //   });
  // }
}
