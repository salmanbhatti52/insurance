import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languagepage',
  templateUrl: './languagepage.page.html',
  styleUrls: ['./languagepage.page.scss'],
})
export class LanguagepagePage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }


  goback() {
    this.location.back();
  }


}
