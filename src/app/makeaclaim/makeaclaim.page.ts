import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-makeaclaim',
  templateUrl: './makeaclaim.page.html',
  styleUrls: ['./makeaclaim.page.scss'],
})
export class MakeaclaimPage implements OnInit {
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
      if (this.requestsType === 'NewClaim') {
        this.mySegment.nativeElement.children[0].click();

      }
      if (this.requestsType === 'ClaimTracker') {
        this.mySegment.nativeElement.children[1].click();

      }
    } else {
      this.requestsType = 'NewClaim';
      this.mySegment.nativeElement.children[0].click();

    }
  }

  segmentChanged(ev) {
    console.log('requestType value', ev.detail.value);
    let data = ev.detail.value;
    this.requestsType = data
    if (ev.detail.value === 'NewClaim') {
      this.requestsType = 'NewClaim';


    }
    if (ev.detail.value === 'ClaimTracker') {
      this.requestsType = 'ClaimTracker';

    }
    localStorage.setItem('requestType1', this.requestsType);
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
