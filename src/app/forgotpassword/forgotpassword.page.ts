import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  RegisterForm: FormGroup;
  userEmail = '';
  constructor(public location: Location) { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new FormControl('', [Validators.required])
    });
  }

  goback() {
    this.location.back()
  }


}
