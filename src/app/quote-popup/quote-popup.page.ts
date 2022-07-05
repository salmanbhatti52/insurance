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
    //  console.log(product_record);
    //  console.log(product_record.image);
    //  console.log(product_record.name);
    //  console.log(product_record.id);
     
    //  this.imgPath = product_record.image;
    //  this.Insurace_name = product_record.name;
    //  this.prod_id = product_record.id;
    //  localStorage.setItem('prod_id',this.prod_id);
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
