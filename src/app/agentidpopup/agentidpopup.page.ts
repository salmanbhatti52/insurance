import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agentidpopup',
  templateUrl: './agentidpopup.page.html',
  styleUrls: ['./agentidpopup.page.scss'],
})
export class AgentidpopupPage implements OnInit {

  constructor(public modal: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }

  search() {
    this.modal.dismiss().then(data => {
      console.log('data came back from modal');
      console.log(data);
      this.navCtrl.navigateForward('agentloginscreen')
    })
  }

}
