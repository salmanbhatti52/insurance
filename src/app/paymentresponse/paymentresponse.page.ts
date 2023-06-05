import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
@Component({
  selector: 'app-paymentresponse',
  templateUrl: './paymentresponse.page.html',
  styleUrls: ['./paymentresponse.page.scss'],
})
export class PaymentresponsePage implements OnInit {
  policyNo: any;
  email: any;
  productres: any;
  Gproduct: any;
  subProName: any;
  trxref: any;
  certificate_link: string;
  constructor(public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');

    this.productres = JSON.parse(localStorage.getItem('productres'));
    console.log(this.productres);
    this.trxref = localStorage.getItem('trxref');
    this.certificate_link = localStorage.getItem('certificatelink')
    console.log(this.certificate_link);

  }



  // send() {
  //   var myData = {
  //     sid: 'ECHANNEL2',
  //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
  //   };
  //   this.api.gibsapi(myData).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       let token = res.accessToken;
  //       this.getcertificate(token);
  //     },
  //     (err) => {
  //       console.log(err);
  //       this.api.hideLoader();
  //     }
  //   );

  // }
  // getcertificate(token) {
  //   let encode = encodeURIComponent('P/500/1001/2023/00295');
  //   console.log('eee--', encode);

  //   this.api.get('http://testcipapiservices.gibsonline.com/api/utilities/send/certificate?policyNo=' + encode + '&email=' + this.email, token).subscribe((res: any) => {
  //     console.log('certificate====', res);
  //     this.api.presenttoast('Please check your email.')
  //   })
  // }


  goback() {
    this.router.navigate(['/home-page-screen-after-login']);
  }

}
