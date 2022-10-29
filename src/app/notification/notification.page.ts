import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

notifications = [{sender_name:'John',time_added:'10:20AM',content:'Lorem ipsum dolor sit amet consectetur'},{sender_name:'Doe',time_added:'10:21AM',content:'Lorem ipsum dolor sit amet consectetur'},{sender_name:'Frank',time_added:'10:20AM',content:'Lorem ipsum dolor sit amet consectetur'},{sender_name:'Karl',time_added:'10:25AM',content:'Lorem ipsum dolor sit amet consectetur'}]

  constructor(public location:Location) { }

  ngOnInit() {
  }


  goback() {
    this.location.back();
  }

}
