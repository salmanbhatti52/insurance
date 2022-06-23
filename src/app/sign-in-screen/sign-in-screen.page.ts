import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';
import { AgentidpopupPage } from '../agentidpopup/agentidpopup.page';
import { InsuranceAppService } from '../services/insurance-app.service';
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
  constructor(public router: Router, 
    public modal: ModalController,
     public menuCtrl: MenuController,
     public api:InsuranceAppService) { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      password: new FormControl('', [Validators.required])
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
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
    let signInObj = {
      email:this.userEmail,
      password:this.userPassword,
      method:'login'
    };
    this.api.insertData('/login',signInObj).subscribe((res:any)=>{
      console.log('res==',res);
      
    },err=>{
      console.log('err==',err);
      
    })

    this.router.navigate(['/home-page-screen-after-login']);
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
  signUpPage(){
    this.router.navigate(['/sign-up-screen'])
  }
}
