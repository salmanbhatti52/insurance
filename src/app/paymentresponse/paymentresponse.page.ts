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
  constructor(public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');

    this.productres = JSON.parse(localStorage.getItem('productres'));
    console.log(this.productres);
    this.trxref = localStorage.getItem('trxref');
  }



  goback() {
    this.router.navigate(['/home-page-screen-after-login']);
  }

}
