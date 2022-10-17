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
      this.api.gibsapi('7382').subscribe((res: any) => {
        console.log(res);
        let token = res.accessToken

      }, (err) => {
        console.log(err);
        this.api.hideLoader()
      });
      // this.modal.dismiss().then(data => {
      //   console.log('data came back from modal');
      //   console.log(data);
      //   this.navCtrl.navigateForward('agentloginscreen')
      // })
    }

  }

}
