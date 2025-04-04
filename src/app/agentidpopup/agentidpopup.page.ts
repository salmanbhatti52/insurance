import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-agentidpopup',
  templateUrl: './agentidpopup.page.html',
  styleUrls: ['./agentidpopup.page.scss'],
})
export class AgentidpopupPage implements OnInit {
  agentloginType = 'Select Agent Type';
  agentId = '';
  showMaker: any = false;


  vechileMakenew = [{
    manufacturer: "Gibs",
    active: false
  }, {
    manufacturer: "IES",
    active: false
  }];
  isdisabled: any = false;

  constructor(public modal: ModalController,
    public navCtrl: NavController,
    public api: InsuranceAppService,
    public location: Location,
    public router: Router) { }

  ngOnInit() {
  }

  dismiss() {
    // this.modal.dismiss();
    this.location.back()
  }

  search() {
    if (this.agentloginType == "Select Agent Type") {
      this.api.presenttoast('Please Select Agent Type')
    } else if (this.agentId == '') {
      this.api.presenttoast('Enter Agent ID')
    } else {

      this.isdisabled = true

      if (this.agentloginType == "Gibs") {
        var myData = {
          "username": "DigitechApp",
          "password": "Digitech@321#"
        }
        this.api.gibsapi(myData).subscribe((res: any) => {
          console.log(res);
          let token = res.accessToken
          this.getresult(token)
          this.isdisabled = false

        }, (err) => {
          console.log(err);
          this.api.hideLoader();
        });
      } else {

        let token = '39109f7df56e1CORNERStone9e685066bb852'
        this.api.showLoader();
        this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=901&agent=' + this.agentId, token).subscribe((res: any) => {
          console.log(res);
          this.api.hideLoader()
          this.isdisabled = false

          if (res.result.status == 1) {
            localStorage.setItem('loginas', 'agent')
            this.api.loginas = 'agent';
            localStorage.setItem('userid', this.agentId);
            // localStorage.setItem('token', '39109f7df56e1CORNERStone9e685066bb852');
            localStorage.setItem('fname', res.result.name)

            this.signIn();
          } else {
            this.api.hideLoader();
            // this.api.presenttoast(res.result.message);
            this.api.alertboxshow(res.result.message);
          }
        }, (err) => {
          console.log(err);
          this.api.hideLoader()
        });
      }




    }

  }
  getresult(token) {
    // ids:AG-000008
    // 00003
    this.api.showLoader();
    let beartoken = token
    // this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/agents', beartoken).subscribe((res: any) => {
    //   console.log('ressssss', res);
    this.api.getpolicy('https://testcipapiservices.gibsonline.com/api/agents/' + this.agentId, beartoken).subscribe((res: any) => {
      console.log('ressssss', res);
      this.api.hideLoader();
      localStorage.setItem('agentdata', JSON.stringify(res))

      localStorage.setItem('loginas', 'agent');
      this.api.loginas = 'agent';
      localStorage.setItem('userid', this.agentId);
      localStorage.setItem('token', beartoken);
      localStorage.setItem('fname', res.agentName)
      this.signIn()
      // this.router.navigate(['/sign-up-screen']);
      // this.router.navigate(['/dashboard']);

      // this.navCtrl.navigateForward('agentloginscreen')


      // this.modal.dismiss().then(data => {
      //   localStorage.setItem('agentdata', JSON.stringify(res))
      //   console.log('data came back from modal');
      //   console.log(data);
      //   this.navCtrl.navigateForward('agentloginscreen')
      // })
    }, (err) => {
      console.log(err);
      // this.api.presenttoast(err.error.message);
      this.api.alertboxshow(err.error.message);
      this.api.hideLoader()
    });
    // }, (err) => {
    //   console.log(err);
    //   this.api.presenttoast(err.error.title)
    //   this.api.hideLoader()
    // });

  }

  signIn() {
    this.api.showLoader();
    let myData =
      'myData={"email": "' +
      'mobiletest1@gmail.com' +
      '","password": "' +
      'password' +
      '", "method": "login"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log('res==', res);
        this.api.hideLoader();
        if (res.email) {

          this.api.presenttoast('Welcome!');
          localStorage.setItem('userid', res.user_id);
          localStorage.setItem('token', res.token);
          localStorage.setItem('title', res.title);
          localStorage.setItem('fname', res.first_name);
          localStorage.setItem('lname', res.last_name);
          localStorage.setItem('number', res.phone);
          localStorage.setItem('email', res.email);
          this.api.username = res.first_name;
          // this.navCtrl.navigateRoot(['/dashboard']);
          this.navCtrl.navigateRoot(['/home-page-screen-after-login']);
        } else {
          this.api.hideLoader();
          this.api.presenttoast('Email or password is incorrect');
          // this.error = true
          // this.errormessage = 'Email or password is incorrect'
          // setTimeout(() => {
          //   this.error = false
          // }, 3000);
        }
      },
      (err) => {
        this.api.hideLoader();
        console.log('err==', err);

        this.api.presenttoast(err);
      }
    );
  }

  openVhclMakeList() {
    if (this.showMaker == true) {
      this.showMaker = false;
    } else {
      this.showMaker = true;

    }
  }


  selectVehicleMaker(list, index) {
    this.agentloginType = list.manufacturer;
    // this.vehicleModelVal = '';
    this.showMaker = false;

  }

}
