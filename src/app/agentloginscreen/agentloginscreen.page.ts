import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agentloginscreen',
  templateUrl: './agentloginscreen.page.html',
  styleUrls: ['./agentloginscreen.page.scss'],
})
export class AgentloginscreenPage implements OnInit {
  agentdata: any;
  agentName: any;
  cityLGA: any;
  address: any;
  email: any;
  kycExpiryDate: any;
  kycIssueDate: any;
  agentID: any;

  constructor(public location: Location) { }

  ngOnInit() {
    this.agentdata = JSON.parse(localStorage.getItem('agentdata'));
    console.log(this.agentdata);
    this.agentID = this.agentdata.agentID
    this.agentName = this.agentdata.agentName
    this.cityLGA = this.agentdata.cityLGA
    this.address = this.agentdata.address
    this.email = this.agentdata.email
    this.kycExpiryDate = this.agentdata.kycExpiryDate
    this.kycIssueDate = this.agentdata.kycIssueDate

  }

  goback() {
    this.location.back();
  }

}
