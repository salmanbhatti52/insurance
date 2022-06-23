import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.page.html',
  styleUrls: ['./quote1.page.scss'],
})
export class Quote1Page implements OnInit {
  show = false;




  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]
  constructor(public router:Router) { }

  ngOnInit() {
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
  goback(){
    this.router.navigate(['/get-quote']);
  }
}
