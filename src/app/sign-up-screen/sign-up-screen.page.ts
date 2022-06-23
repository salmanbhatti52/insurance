import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.page.html',
  styleUrls: ['./sign-up-screen.page.scss'],
})
export class SignUpScreenPage implements OnInit {
  show = false;
  Title = 'Select Title'
  listarray = [{ Title: 'Mr' }, { Title: 'Mrs.' }]
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';
  showPass = false;
  cshowPass = false;
  constructor(public router:Router) {this.setToday(); }

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

  ngOnInit() {
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
  signUp(){
    
  }
  signInPage(){
    this.router.navigate(['/sign-in-screen']);
  }
}
