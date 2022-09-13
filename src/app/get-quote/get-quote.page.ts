import { Component, OnInit } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { QuotePopupPage } from '../quote-popup/quote-popup.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.page.html',
  styleUrls: ['./get-quote.page.scss'],
})
export class GetQuotePage implements OnInit {
  result = '';
  logo = false;
  constructor(public router: Router,
    // public modal: ModalController,
    public location: Location) { }

  ngOnInit() {
  }


  goback() {
    this.router.navigate(['/home-page-screen-after-login'])
  }

  crazyEvent(ev) {
    this.result = ev.detail.value
  }

  GetQuote() {
    if (this.result == '') {
      this.logo = true
    }

  }
  // async PopupCust() {
  //   const modal = await this.modal.create({
  //     component: QuotePopupPage,
  //     cssClass: 'QuotePopup',
  //   });
  //   modal.onDidDismiss().then((data) => {
  //     console.log('data', data);
  //     if (data.data == 'navigate') {
  //       this.router.navigate(['/quote1']);
  //     }

  //   });
  //   return await modal.present();
  // }
}
