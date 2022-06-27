import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.page.html',
  styleUrls: ['./profile-update.page.scss'],
})
export class ProfileUpdatePage implements OnInit {
  RegisterForm: FormGroup;
  uTitle= '';
  fName = '';
  lName = '';
  mobNumber = '';
  userEmail = '';
  userPassword = '';
  cuserPassword = '';
  show = false;
  showPass = false;
  cshowPass = false;
  usertitle = '';
  firstName = '';
  lastName =  '';
  userNumber =  '';
  useremail = '' ; 
  userpwd =  '' ;
  cuserpwd =  '';
  i=1;
  constructor(public router:Router, public api:InsuranceAppService) {}

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      fname: new FormControl('', Validators.required),
      lname: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new FormControl('',[Validators.required]),
      cpassword: new FormControl('',[Validators.required])
    });
    this.RegisterForm.reset();

    this.uTitle = localStorage.getItem('title');
    this.fName = localStorage.getItem('fname');
    this.lName =  localStorage.getItem('lname');
    this.mobNumber =  localStorage.getItem('number');
    this.userEmail = localStorage.getItem('email');
    this.userPassword =  localStorage.getItem('password');
    this.cuserPassword = localStorage.getItem('password');
  
    console.log(this.usertitle);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.userNumber);
    console.log(this.useremail);
    console.log(this.userpwd);
    console.log(this.cuserpwd);
    
  }

  togglePass() {

    this.showPass = !this.showPass;
  }

  confirmtogglePass() {

    this.cshowPass = !this.cshowPass;
  }

  goBack(){
    this.router.navigate(['/home-page-screen-after-login']);
  }
  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }

  updateProfile(){
    let myData = "myData={\r\n    \"user_id\":\""+localStorage.getItem('userid') +"\",\r\n    \"title\":\""+this.uTitle+"\",\r\n    \"first_name\": \""+this.fName+"\",\r\n    \"last_name\":\""+this.lName+"\",\r\n    \"phone\":\""+this.mobNumber+"\",\r\n    \"email\":\""+this.userEmail+"\",\r\n    \"password\":\""+this.userPassword+"\",\r\n    \"conf_password\":\""+this.cuserPassword+"\",\r\n    \"verify_token\":\""+localStorage.getItem('token')+"\",\r\n    \"method\": \"update_user\" \r\n}"
    
    if(this.userPassword===this.cuserPassword){
      console.log(this.userPassword);
      console.log(this.cuserPassword);
      this.api.insertData(myData).subscribe((res:any)=>{
        console.log("res==",res);
        if(res.message==='Updated done'){
          console.log(res.message);
          this.api.presenttoast("Profile updated successfully!");
          this.router.navigate(['/home-page-screen-after-login']);
        }else{
          this.api.presenttoast(res.message);
        }
        
      },(err)=>{
        console.log('err==',err);
        this.api.presenttoast(err);
        
      })
      
    }else{
      this.api.presenttoast('"Password" and "Confirm_password" not matched!')
    }
  }
  // signInPage(){
  //   this.router.navigate(['/sign-in-screen']);
  // }
}
