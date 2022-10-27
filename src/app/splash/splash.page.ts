import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router: Router) {
    setTimeout(() => {
      if (localStorage.getItem('userid') == null) {
        this.router.navigate(['start-screen']);
      } else {
        if (localStorage.getItem('loginas') == 'user') {
          this.router.navigate(['home-page-screen-after-login']);
        } else {
          this.router.navigate(['dashboard']);
        }

      }

    }, 3000);
  }

  ngOnInit() {
  }

}
