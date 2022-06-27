import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.page.html',
  styleUrls: ['./sign-up-screen.page.scss'],
})
export class SignUpScreenPage implements OnInit {
  RegisterForm: FormGroup;
  uTitle= '';
  fName = '';
  lName = '';
  dob = '';
  mobNumber = '';
  uEmail = '';
  userPassword = '';
  cuserPassword = '';
  show = false;
  Title = 'Select Title'
  listarray = [{ Title: 'Mr' }, { Title: 'Mrs.' }]
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';
  showPass = false;
  cshowPass = false;
  constructor(public router:Router, public api:InsuranceAppService)
   {
    this.setToday();
   }
   
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
    console.log(this.formattedString);
    this.RegisterForm.reset();
  }
  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') ), ' MMM d, yyyy');
  }

  togglePass() {

    this.showPass = !this.showPass;
  }

  confirmtogglePass() {

    this.cshowPass = !this.cshowPass;
  }
  dateChanged(value){
    this.dateValue=value;
    this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPicker = false;
  }

  
  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }

  selectTitle(list) {
    this.Title = list.Title
    this.show = false
  }
  signUp(){
    // let myData = "myData={\r\n    \"email\": \""+this.userEmail+"\",\r\n    \"password\": \""+this.userPassword+"\",\r\n    \"method\": \"login\"\r\n}";
    let myData = "myData={\r\n    \"title\":\""+this.uTitle+"\",\r\n    \"first_name\": \""+this.fName+"\",\r\n    \"last_name\":\""+this.lName+"\",\r\n    \"date_of_birth\":\""+this.formattedString+"\",\r\n    \"mobile\":\""+this.mobNumber+"\",\r\n    \"email\":\""+this.uEmail+"\",\r\n    \"password\":\""+this.userPassword+"\",\r\n    \"conf_password\":\""+this.cuserPassword+"\",\r\n    \"method\": \"save_user\" \r\n}";
    if(this.userPassword===this.cuserPassword){
      console.log(this.userPassword);
      console.log(this.cuserPassword);
      this.api.insertData(myData).subscribe((res:any)=>{
        console.log("res==",res);
        if(res.message==='Email address already exist'){
          console.log(res.message);

          this.api.presenttoast(res.message);
        }else{
          this.api.presenttoast(res.message);
          this.router.navigate(['/sign-in-screen']);
        }
        
      },(err)=>{
        console.log('err==',err);
        this.api.presenttoast(err);
        
      })
      
    }else{
      this.api.presenttoast('"Password" and "Confirm_password" not matched!')
    }
    
    
  }
  signInPage(){
    this.router.navigate(['/sign-in-screen']);
  }
  goBack(){
    this.router.navigate(['/explore-screen-before-login']);
  }
  
}
