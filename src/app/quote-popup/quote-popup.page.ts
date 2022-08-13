import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-quote-popup',
  templateUrl: './quote-popup.page.html',
  styleUrls: ['./quote-popup.page.scss'],
})
export class QuotePopupPage implements OnInit {
  imgPath: any;
  Insurace_name: any;
  prod_id:any;
  subProducts:any;
  constructor(public router: Router,
    public modal: ModalController) { }

  ngOnInit() {
      this.subProducts = JSON.parse(localStorage.getItem('subProducts'));
  }

  dismiss() {
    this.modal.dismiss();
  }

  seeDetails(sp) {
    console.log(sp);

    this.modal.dismiss(sp).then(data => {
      console.log('data came back from modal');
      console.log(data);
    })
  }
}
