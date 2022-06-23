import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-renewals',
  templateUrl: './renewals.page.html',
  styleUrls: ['./renewals.page.scss'],
})
export class RenewalsPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;

  show = false;
  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'renewals') {
        this.mySegment.nativeElement.children[0].click();

      }
      if (this.requestsType === 'subsequent') {
        this.mySegment.nativeElement.children[1].click();

      }
    } else {
      this.requestsType = 'renewals';
      this.mySegment.nativeElement.children[0].click();

    }
  }

  segmentChanged(ev) {
    console.log('requestType value', ev.detail.value);
    let data = ev.detail.value;
    this.requestsType = data
    if (ev.detail.value === 'renewals') {
      this.requestsType = 'renewals';

    }
    if (ev.detail.value === 'subsequent') {
      this.requestsType = 'subsequent';
    }
    localStorage.setItem('requestType', this.requestsType);
  }
  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance
    this.show = false
  }

}
