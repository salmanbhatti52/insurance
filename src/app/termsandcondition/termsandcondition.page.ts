import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.page.html',
  styleUrls: ['./termsandcondition.page.scss'],
})
export class TermsandconditionPage implements OnInit {

  constructor(public location: Location,
    public modal: ModalController) { }

  ngOnInit() {
  }

  goback() {

    this.modal.dismiss();
  }
}
