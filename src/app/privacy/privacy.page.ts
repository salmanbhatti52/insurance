import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
  fp: any;
  constructor(public location: Location,
    public api: InsuranceAppService) { }

  ngOnInit() {
    this.fp = localStorage.getItem('fingerprint');
    console.log('fingerprint====', this.fp);
    this.api.fpval = this.fp
  }

  goback() {
    this.location.back();
  }

  toogle(ev) {


    console.log(ev);
    if (ev.detail.checked == true) {

      this.api.fpval = 'true'
      localStorage.setItem('fingerprint', 'true')
    } else {
      this.api.fpval = 'false';
      localStorage.setItem('fingerprint', 'false')
    }

  }

}
