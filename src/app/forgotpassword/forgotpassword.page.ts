import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceAppService } from '../services/insurance-app.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  RegisterForm: FormGroup;
  userEmail = '';
  constructor(public location: Location,
    public api: InsuranceAppService,
    public menuCtrl: MenuController) { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)])
    });
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);

  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  goback() {
    this.location.back()
  }

  formSubmit() {
    let myData = 'myData={\r\n "email": "' + this.userEmail + '",\r\n + "method": "forgot_password"\r\n}';
    this.api.insertData(myData).subscribe((res: any) => {
      console.log('res==', res);
      if (res.status_no == 1) {
        this.api.presenttoast(res.message);

      }
      else {
        this.api.presenttoast(res.message);
      }
    }, (err) => {
      console.log('err==', err);
      this.api.presenttoast(err);
    })

  }


}
