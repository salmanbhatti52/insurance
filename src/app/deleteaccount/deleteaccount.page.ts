import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.page.html',
  styleUrls: ['./deleteaccount.page.scss'],
})
export class DeleteaccountPage implements OnInit {
  Checkboxes = [{ question: 'I concerned about my personal data', isItemChecked: false }, { question: 'I have another  Lev account', isItemChecked: false },
  { question: 'I want to remove app from my mobile', isItemChecked: false }, { question: 'I get too many emails from Lev', isItemChecked: false }, { question: 'Other', isItemChecked: false }];

  selectquestions = [];
  constructor(
    public loacton: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.loacton.back()
  }
  verifyEvent(ev) {
    console.log(ev);
    if (ev.isItemChecked == true) {
      this.selectquestions.push(ev.question)
      console.log('selectquestions aray', this.selectquestions)
    }
    if (ev.isItemChecked == false) {

      const index = this.selectquestions.indexOf(ev.question);
      if (index > -1) {
        this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
        console.log('job aray', this.selectquestions)
      }

    }
  }

  delete() {
    console.log('adasdsadsadsa', this.selectquestions.length);


  }

}

