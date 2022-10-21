import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.page.html',
  styleUrls: ['./profile-update.page.scss'],
})
export class ProfileUpdatePage implements OnInit {
  RegisterForm: FormGroup;
  uTitle = '';
  fName = '';
  lName = '';
  mobNumber = '';
  userEmail = '';
  existingpass = ''
  userPassword = '';
  cuserPassword = '';
  show = false;
  eshowPass = false;
  showPass = false;
  cshowPass = false;
  usertitle = '';
  firstName = '';
  lastName = '';
  userNumber = '';
  useremail = '';
  userpwd = '';
  cuserpwd = '';
  i = 1;
  newpass: any;
  existingpas: any;
  customerId = {
    file: ""
  };
  utilityBills = {
    file: "",
    base64: "",
  };
  driverlicense = {
    file: "",
  };
  passport = {
    file: "",
  };
  base64 = '';


  constructor(public router: Router,
    public api: InsuranceAppService,
    public location: Location) { }

  ngOnInit() {
    if (localStorage.getItem('userid') == null) {
      this.router.navigate(['/sign-in-screen']);
    } else {
      this.RegisterForm = new FormGroup({
        // title: new FormControl('', [Validators.required]),
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
        number: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
        existpassword: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        cpassword: new FormControl('', [Validators.required])
      });
      this.RegisterForm.reset();

      this.uTitle = localStorage.getItem('title');
      this.fName = localStorage.getItem('fname');
      this.lName = localStorage.getItem('lname');
      this.mobNumber = localStorage.getItem('number');
      this.userEmail = localStorage.getItem('email');
      this.existingpass = localStorage.getItem('password');
      // this.cuserPassword = localStorage.getItem('password');

      console.log(this.usertitle);
      console.log(this.firstName);
      console.log(this.lastName);
      console.log(this.userNumber);
      console.log(this.useremail);
      console.log(this.userpwd);
      console.log(this.cuserpwd);
    }


  }

  EtogglePass() {
    this.eshowPass = !this.eshowPass;
  }
  togglePass() {

    this.showPass = !this.showPass;
  }

  confirmtogglePass() {

    this.cshowPass = !this.cshowPass;
  }

  goBack() {
    this.location.back();
  }
  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }
  existingpassword(ev) {
    console.log('currentpassword', ev.detail.value);
    this.existingpass = ev.detail.value
  }
  currentpassword(ev) {
    console.log('currentpassword', ev.detail.value);
    this.userPassword = ev.detail.value
  }
  newpassword(ev) {
    console.log('value', ev.detail.value);
    this.newpass = ev.detail.value
  }

  updateProfile() {
    let myData = "myData={\r\n    \"user_id\":\"" + localStorage.getItem('userid') + "\",\r\n    \"title\":\"" + this.uTitle + "\",\r\n    \"first_name\": \"" + this.fName + "\",\r\n    \"last_name\":\"" + this.lName + "\",\r\n    \"phone\":\"" + this.mobNumber + "\",\r\n    \"email\":\"" + this.userEmail + "\",\r\n    \"password\":\"" + this.userPassword + "\",\r\n    \"conf_password\":\"" + this.cuserPassword + "\",\r\n    \"verify_token\":\"" + localStorage.getItem('token') + "\",\r\n    \"method\": \"update_user\" \r\n}"


    this.api.insertData(myData).subscribe((res: any) => {
      console.log("res==", res);
      if (res.message === 'Updated done') {
        console.log(res.message);
        this.api.presenttoast("Profile updated successfully!");
        this.router.navigate(['/home-page-screen-after-login']);
      } else {
        this.api.presenttoast(res.message);
      }

    }, (err) => {
      console.log('err==', err);
      this.api.presenttoast(err);

    })


  }

  selectFile(event, type) {

    console.log("type --- ", type);
    console.log("linceise --- ", event.target.files[0]);


    this.getBase64(event.target.files[0]).then(data => {
      let file = event.target.files[0];
      let base64 = data as string;
      if (type == 'driverlicense') {
        this.driverlicense.file = file;
        this.base64 = base64;
      }
      else if (type == 'Idcard') {
        this.customerId.file = file;
        this.base64 = base64;
      }
      else if (type == 'passport') {
        this.passport.file = file;
        this.base64 = base64;
      }
      else if (type == 'utilityBills') {
        this.utilityBills.file = file;
        this.utilityBills.base64 = base64;
      }


    }).catch(err => console.log('Errrrrr', err));



  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  // signInPage(){
  //   this.router.navigate(['/sign-in-screen']);
  // }
}
