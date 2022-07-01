import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mypolicies',
  templateUrl: './mypolicies.page.html',
  styleUrls: ['./mypolicies.page.scss'],
})
export class MypoliciesPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;
  value = 'thirdparty';
  show = false;
  box = 'unchecked'
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'PurchasePolicies') {
        this.mySegment.nativeElement.children[0].click();

      }
      if (this.requestsType === 'InvestmentPlan') {
        this.mySegment.nativeElement.children[1].click();

      }
    } else {
      this.requestsType = 'PurchasePolicies';
      this.mySegment.nativeElement.children[0].click();

    }
  }

  segmentChanged(ev) {
    console.log('requestType value', ev.detail.value);
    let data = ev.detail.value;
    this.requestsType = data
    if (ev.detail.value === 'PurchasePolicies') {
      this.requestsType = 'PurchasePolicies';

    }
    if (ev.detail.value === 'InvestmentPlan') {
      this.requestsType = 'InvestmentPlan';
    }
    localStorage.setItem('requestType', this.requestsType);
  }

  checktype(type) {
    this.value = type
  }

  showdiv() {
    if (this.show == false) {
      this.show = true;

    } else {
      this.show = false;
    }
  }

  changed() {
    if (this.box == 'checked') {
      this.box = 'unchecked'
    }
    else {
      this.box = 'checked'
    }
  }

}
