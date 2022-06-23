import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.page.html',
  styleUrls: ['./profile-update.page.scss'],
})
export class ProfileUpdatePage implements OnInit {
  show = false;
  Title = 'Select Title'
  listarray = [{ Title: 'Mr' }, { Title: 'Mrs.' }]
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';
  showPass = false;
  cshowPass = false;
  constructor(public router:Router) {this.setToday(); }

  ngOnInit() {
  }


  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') ), ' MMM d, yyyy');
  }

  togglePass() {

    this.showPass = !this.showPass;
  }

  confirmtogglePass() {

    this.cshowPass = !this.cshowPass;
  }
  dateChanged(value){
    this.dateValue=value;
    this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPicker = false;
  }

  openlist() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true;

    }
  }

  selectTitle(list) {
    this.Title = list.Title
    this.show = false
  }
  profile(){
    this.router.navigate(['/home-page-screen-after-login'])
  }
  // signInPage(){
  //   this.router.navigate(['/sign-in-screen']);
  // }
}
