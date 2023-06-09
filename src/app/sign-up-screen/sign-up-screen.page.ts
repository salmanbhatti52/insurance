import { Component, OnInit } from '@angular/core';
import { IonDatetime, MenuController, ModalController } from '@ionic/angular';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Location } from '@angular/common';
import { TermsandconditionPage } from '../termsandcondition/termsandcondition.page';
@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.page.html',
  styleUrls: ['./sign-up-screen.page.scss'],
})
export class SignUpScreenPage implements OnInit {
  RegisterForm: FormGroup;
  uTitle = '';
  fName = '';
  lName = '';
  dob = '';
  mobNumber = '';
  uEmail = '';
  userPassword = '';
  cuserPassword = '';
  show = false;
  Title = 'Select Title';
  listarray = [{ Title: 'Mr' }, { Title: 'Miss' }, { Title: 'Mrs.' }];
  showPicker = false;
  dateformat = format(new Date(), 'yyyy-MM-dd');
  dateValue = 'Date of birth';
  dateofbirth = '';
  // formattedString = '';
  showPass = false;
  cshowPass = false;
  checkbox = false;
  constructor(public router: Router,
    public api: InsuranceAppService,
    public location: Location,
    public modal: ModalController,
    public menuCtrl: MenuController) {
    // this.setToday();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);

  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&].{5,}')]),
      cpassword: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required])
    });
    console.log(this.dateValue);
    // console.log(this.formattedString);
    this.RegisterForm.reset();
  }
  // setToday(){
  //   this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') ), ' MMM d, yyyy');
  // }

  togglePass() {

    this.showPass = !this.showPass;
  }

  confirmtogglePass() {

    this.cshowPass = !this.cshowPass;
  }
  dateChanged(value) {
    this.dateofbirth = value;
    console.log('date value', this.dateValue);

    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPicker = false;
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
  signUp() {
    // let myData = "myData={\r\n    \"email\": \""+this.userEmail+"\",\r\n    \"password\": \""+this.userPassword+"\",\r\n    \"method\": \"login\"\r\n}";
    const myData = 'myData={\r\n    "title":"' + this.uTitle + '",\r\n    "first_name": "' + this.fName + '",\r\n    "last_name":"' + this.lName + '",\r\n    "date_of_birth":"' + this.dateValue + '",\r\n    "mobile":"' + this.mobNumber + '",\r\n    "email":"' + this.uEmail + '",\r\n    "password":"' + this.userPassword + '",\r\n    "conf_password":"' + this.cuserPassword + '",\r\n    "method": "save_user" \r\n}';
    if (this.userPassword != this.cuserPassword) {
      this.api.presenttoast('"Password" and "Confirm_password" not matched!');
    }
    else if (this.checkbox == false) {
      this.api.presenttoast('Accept terms and condition');
    }
    else {

      this.api.insertData(myData).subscribe((res: any) => {
        console.log('res==', res);
        if (res.message === 'Email address already exist') {

          this.api.presenttoast(res.message);
        } else {
          this.api.presenttoast(res.message);
          localStorage.setItem('loginas', 'user');
          this.api.loginas = 'user';
          this.router.navigate(['/sign-in-screen']);
        }

      }, (err) => {
        console.log('err==', err);
        this.api.presenttoast(err);

      });

    }



  }

  verifyEvent(ev) {
    console.log(ev.detail);
    this.checkbox = ev.detail.checked
  }
  signInPage() {
    this.router.navigate(['/sign-in-screen']);
  }
  goBack() {
    this.location.back();
  }

  showPickerDate() {
    this.showPicker = true;
  }
  async check() {

    const modal = await this.modal.create({
      component: TermsandconditionPage,
      cssClass: 'terms'
    });
    modal.present();
  }

}
