import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accident2',
  templateUrl: './accident2.page.html',
  styleUrls: ['./accident2.page.scss'],
})
export class Accident2Page implements OnInit {
  cover_opt: any;
  showAllCovers = false

  constructor(public api: InsuranceAppService,
    public router: Router,
    public location: Location
  ) { }


  accidentcovers = this.api.accidentcovers[0]
  accidentcoversArr = this.api.accidentcovers


  ngOnInit() {

    console.log('accidentcovers---------------', this.accidentcovers)
  }


  goback() {
    this.location.back();
  }


  handleChange(ev: any) {
    console.log(ev);
    console.log('name---------', name);
    this.cover_opt = ev.detail.value

    if (this.cover_opt == 'Yes') {
      this.showAllCovers = true
    } else {
      this.showAllCovers = false
    }

  }
  goto(id: any, amount: any) {

    let myDataCovers =
      'myData= {"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"pep_category"}';

    this.api.insertData(myDataCovers).subscribe(
      (data: any) => {
        console.log('data response for products----', data);

        if (data.status == 1) {
          //ali

          this.api.pep_occupations = data.categories
          console.log('goto')
          this.api.accidentcovers_val = id
          this.api.accidentcovers_val_amount = amount
          this.router.navigate(['/accident3']);
        } else {
          this.api.presenttoast(data.message);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
