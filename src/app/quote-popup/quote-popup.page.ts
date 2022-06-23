import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-quote-popup',
  templateUrl: './quote-popup.page.html',
  styleUrls: ['./quote-popup.page.scss'],
})
export class QuotePopupPage implements OnInit {

  constructor(public router: Router,
    public modal: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }

  seeDetails() {
    this.modal.dismiss('navigate').then(data => {
      console.log('data came back from modal');
      console.log(data);
    })
  }
}
