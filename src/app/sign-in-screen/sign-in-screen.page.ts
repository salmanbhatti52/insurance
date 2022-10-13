/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController, AlertController } from '@ionic/angular';
import { AgentidpopupPage } from '../agentidpopup/agentidpopup.page';
import { InsuranceAppService } from '../services/insurance-app.service';
// import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.page.html',
  styleUrls: ['./sign-in-screen.page.scss'],
})
export class SignInScreenPage implements OnInit {
  RegisterForm: FormGroup;
  userEmail = '';
  userPassword = '';
  showPass = false;
  fingerprintlogo: boolean = false;
  getuserEmail: any;
  getuserPassword: any;
  constructor(public router: Router,
    public modal: ModalController,
    public menuCtrl: MenuController,
    public alert: AlertController,
    public api: InsuranceAppService,
    // public faio: FingerprintAIO,
    public location: Location) { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new FormControl('', [Validators.required])
    });

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
    // this.RegisterForm.reset();
    if (localStorage.getItem('fingerprint') == 'true') {
      this.fingerprintlogo = true
    } else {
      this.fingerprintlogo = false
    }
    this.getuserEmail = localStorage.getItem('email');
    this.getuserPassword = localStorage.getItem('password')
    console.log('email', localStorage.getItem('email'));
    console.log('password', localStorage.getItem('password'));

  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  formSubmit() {
    console.log('Form Submitted!');
  }
  togglePass() {

    this.showPass = !this.showPass;
  }
  signIn() {
    this.api.showLoader();
    let myData = 'myData={\r\n    "email": "' + this.userEmail + '",\r\n    "password": "' + this.userPassword + '",\r\n    "method": "login"\r\n}';
    this.api.insertData(myData).subscribe((res: any) => {
      console.log('res==', res);

      if (res.email) {
        this.api.hideLoader();
        this.api.presenttoast('Welcome!');
        localStorage.setItem('userid', res.user_id);
        localStorage.setItem('token', res.token);
        localStorage.setItem('title', res.title);
        localStorage.setItem('fname', res.first_name);
        localStorage.setItem('lname', res.last_name);
        localStorage.setItem('number', res.phone);
        localStorage.setItem('email', res.email);
        localStorage.setItem('password', this.userPassword);
        console.log(localStorage.getItem('userid'));
        console.log(localStorage.getItem('token'));

        this.router.navigate(['/home-page-screen-after-login']);
      }
      else {
        this.api.hideLoader();
        this.api.presenttoast(res.message);
      }
    }, (err) => {
      console.log('err==', err);
      this.api.hideLoader();
      this.api.presenttoast(err);
    })

  }

  async fflogin() {
    // this.faio.isAvailable().then(() => {
    //   this.faio.show({
    //     cancelButtonTitle: 'Cancel',
    //     description: "Some biometric description",
    //     disableBackup: true,
    //     // title: 'Scanner Title',
    //     fallbackButtonTitle: 'FB Back Button',
    //     // subtitle: 'This SubTitle'
    //   }).then((result: any) => {
    //     console.log(result);
    //     let myData = 'myData={\r\n    "email": "' + this.getuserEmail + '",\r\n    "password": "' + this.getuserPassword + '",\r\n    "method": "login"\r\n}';
    //     this.api.insertData(myData).subscribe((res: any) => {
    //       console.log('res==', res);
    //       if (res.email) {
    //         this.api.presenttoast('Welcome!');
    //         localStorage.setItem('userid', res.user_id);
    //         localStorage.setItem('token', res.token);
    //         localStorage.setItem('title', res.title);
    //         localStorage.setItem('fname', res.first_name);
    //         localStorage.setItem('lname', res.last_name);
    //         localStorage.setItem('number', res.phone);
    //         localStorage.setItem('email', res.email);
    //         localStorage.setItem('password', this.getuserPassword);
    //         console.log(localStorage.getItem('userid'));
    //         console.log(localStorage.getItem('token'));

    //         this.router.navigate(['/home-page-screen-after-login']);
    //       }
    //       else {
    //         this.api.presenttoast(res.message);
    //       }
    //     }, (err) => {
    //       console.log('err==', err);
    //       this.api.presenttoast(err);
    //     })
    //   }, err => {
    //     this.api.presenttoast(JSON.stringify(err));
    //   })

    // }, err => {
    //   this.api.presenttoast('finger print no avaibale---' + err);
    // })
  }
  exScBefLin() {
    this.router.navigate(['/explore-screen-before-login-expanded']);
  }
  async PopupCust() {
    const modal = await this.modal.create({
      component: AgentidpopupPage,
      cssClass: 'AgentPopupclass',
    });

    return await modal.present();
  }
  signUpPage() {
    this.router.navigate(['/sign-up-screen'])
  }
  goback() {
    this.location.back();
  }
}
