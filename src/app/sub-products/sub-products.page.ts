import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.page.html',
  styleUrls: ['./sub-products.page.scss'],
})
export class SubProductsPage implements OnInit {
  subProducts = [{ name: 'iSave Plan', image: 'assets/images/investmentplans/1.png' }, { name: 'Maximum Investment Plan', image: 'assets/images/investmentplans/2.jpg' }, { name: 'Cornerstone Universal Plan', image: 'assets/images/investmentplans/3.jpg' }, { name: 'Children Education Fund', image: 'assets/images/investmentplans/4.png' }]
  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }

}
