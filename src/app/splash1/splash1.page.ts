import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash1',
  templateUrl: './splash1.page.html',
  styleUrls: ['./splash1.page.scss'],
})
export class Splash1Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(() => {
      // if (localStorage.getItem('userid') != null) {
      //   this.router.navigate(['home-page-screen-after-login']);
      // } else {
      //   this.router.navigate(['sign-in-screen']);
      // }
      this.router.navigate(['start-screen']);
    }, 3000);
  }

  ngOnInit() {
  }

}
