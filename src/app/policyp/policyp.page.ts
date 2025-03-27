import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-policyp',
  templateUrl: './policyp.page.html',
  styleUrls: ['./policyp.page.scss'],
})
export class PolicypPage implements OnInit {
  vehicleInfoPolicy: any
  product: any = ''
  registration_no: any = ''
  menufecturer: any = ''
  model: any = ''
  amount: any = ''
  referrer: any;
  expiry_date: any;
  reffered_by: any;
  buy_back: any;
  flood_extension: any;
  insurance_type: any;
  gibs_policy_number: any;
  insured_name: any;
  Namount: any = '';
  constructor(public api: InsuranceAppService,
    public modalCtrl: ModalController
  ) {
    this.vehicleInfoPolicy = this.api.vehicleInfoPolicy

    console.log('LSR299HU----------', this.vehicleInfoPolicy)


    for (let i = 0; i < this.vehicleInfoPolicy.length; i++) {
      let vvv = this.vehicleInfoPolicy[i]

      if (vvv.label.trim() == 'Insured Name') {
        this.insured_name = vvv.value
      }
      if (vvv.label.trim() == 'Product') {
        this.product = vvv.value
      }
      if (vvv.label.trim() == 'GIBBS Policy No') {
        this.gibs_policy_number = vvv.value
      }
      if (vvv.label.trim() == 'Insurance type') { // insurance_type
        this.insurance_type = vvv.value
      }
      if (vvv.label.trim() == 'Registration number') {
        this.registration_no = vvv.value
      }
      if (vvv.label.trim() == 'Vehicle manufacturer') {
        this.menufecturer = vvv.value
      }
      if (vvv.label.trim() == 'Vehicle model') {
        this.model = vvv.value
      }

      if (vvv.label.trim() == 'Flood extension') { //flood_extension
        this.flood_extension = vvv.value
      }
      if (vvv.label.trim() == 'Excess buy back') {
        this.buy_back = vvv.value
      }
      if (vvv.label.trim() == 'Referred by') { // frequency
        this.reffered_by = vvv.value
      }
      if (vvv.label.trim() == 'Referrer') {
        this.referrer = vvv.value
      }

      if (vvv.label.trim() == 'Expiry Date') {
        this.expiry_date = vvv.value
      }
      if (vvv.label.trim() == 'Payable Amount') {
        this.amount = vvv.value

        if (this.amount.toString().includes("₦")) {
          this.Namount = this.amount
        }


      }

    }

  }

  ngOnInit() {
  }

  close(val: any) {
    this.modalCtrl.dismiss(val)
  }
}
