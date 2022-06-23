import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agentloginscreen',
  templateUrl: './agentloginscreen.page.html',
  styleUrls: ['./agentloginscreen.page.scss'],
})
export class AgentloginscreenPage implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goback() {
    this.location.back();
  }

}
