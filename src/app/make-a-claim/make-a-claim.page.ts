import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-make-a-claim',
  templateUrl: './make-a-claim.page.html',
  styleUrls: ['./make-a-claim.page.scss'],
})
export class MakeAClaimPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;
  ph_value = 'Example@Gmail.com'
  hide = false;
  hide1 = false;
  changeview = false;
  disvalue = true;
  constructor() { }
  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'NewClaim') {
        this.mySegment.nativeElement.children[0].click();

      }
      if (this.requestsType === 'PreviousClaim') {
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
      // if(this.changeview === true){
      //   this.hide = true;
      //   this.hide1 = false;
      // }

    }
    if (ev.detail.value === 'PreviousClaim') {
      this.requestsType = 'PreviousClaim';
      // if(this.changeview === true){
      //   this.hide = false;
      //   this.hide1 = true;
      // }
      
    }
    localStorage.setItem('requestType1', this.requestsType);
  }
  ngOnInit() {
  }

  changeView(){
    // this.ph_value = 'Enter Customer ID';
    // this.changeview =true;
    this.hide = true;
    // this.hide1 = false;
  }
}
