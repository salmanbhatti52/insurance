import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yourquote',
  templateUrl: './yourquote.page.html',
  styleUrls: ['./yourquote.page.scss'],
})
export class YourquotePage implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back()
  }

}
