import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-agentidpopup',
  templateUrl: './agentidpopup.page.html',
  styleUrls: ['./agentidpopup.page.scss'],
})
export class AgentidpopupPage implements OnInit {
  agentId = '';
  constructor(public modal: ModalController,
    public navCtrl: NavController,
    public api: InsuranceAppService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }

  search() {
    if (this.agentId == '') {
      this.api.presenttoast('Enter Agent ID')
    } else {
      var myData = {
        "sid": "ECHANNEL2",
        "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
      }
      this.api.gibsapi(myData).subscribe((res: any) => {
        console.log(res);
        let token = res.accessToken
        this.getresult(token)
      }, (err) => {
        console.log(err);
        this.api.hideLoader()
      });


    }

  }
  getresult(token) {
    // ids:AG-000008
    // 00003
    this.api.showLoader();
    let beartoken = token
    this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Agents', beartoken).subscribe((res: any) => {
      console.log('ressssss', res);
      this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Agents/' + this.agentId, beartoken).subscribe((res: any) => {
        console.log('ressssss', res);
        this.api.hideLoader()
        this.modal.dismiss().then(data => {
          localStorage.setItem('agentdata', JSON.stringify(res))
          console.log('data came back from modal');
          console.log(data);
          this.navCtrl.navigateForward('agentloginscreen')
        })
      }, (err) => {
        console.log(err);
        this.api.presenttoast(err.error.title)
        this.api.hideLoader()
      });
    }, (err) => {
      console.log(err);
      this.api.presenttoast(err.error.title)
      this.api.hideLoader()
    });

  }

}
