import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-makeaclaim',
  templateUrl: './makeaclaim.page.html',
  styleUrls: ['./makeaclaim.page.scss'],
})
export class MakeaclaimPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;
  show = false;
  Insurance = 'Please Select';
  listarray = [
    { Insurance: 'General Business' },
    { Insurance: 'Life Busines' },
  ];

  polnum: any;
  csurname: any;
  cothname: any;
  dd_liabtype: any;
  txt_message_clm: any;


  claimdoc = {
    file: '',
    base64: '',
  };

  showloss = false;
  losstype = 'Please Select';
  listarrayloss = [
    { Insurance: 'Own Damage', value: 1 },
    { Insurance: 'Vandalization', value: 2 },
    { Insurance: 'Negligent insured', value: 3 },
    { Insurance: 'Own Damage and Negligent insured', value: 4 },
    { Insurance: 'Negligent third party', value: 5 },
    { Insurance: 'Fire /Theft Total Loss', value: 6 },
    { Insurance: 'Fire Partial Loss', value: 7 },
    { Insurance: 'Property Third Party Damage only', value: 8 },
  ];

  showPickerStartDate = false;
  showPickerEndDate = false;
  tourEndDate = format(new Date(), 'MM/dd/yyyy');
  tourStartDate;
  refnum: any = '';

  name: any = '';
  accidentplace: any = '';
  vechregnum: any = '';
  weathercondition: any = '';
  accidentdescribe: any = '';
  selectedDate: any;
  Insurancename: any;
  constructor(public api: InsuranceAppService, public router: Router,
    public alert: AlertController) { }

  ngOnInit() {
    this.csurname = localStorage.getItem('lname');
    this.cothname = localStorage.getItem('fname');
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'NewClaim') {
        this.mySegment.nativeElement.children[0].click();
      }
      if (this.requestsType === 'ClaimTracker') {
        this.mySegment.nativeElement.children[1].click();
      }
    } else {
      this.requestsType = 'NewClaim';
      this.mySegment.nativeElement.children[0].click();
    }
  }

  segmentChanged(ev) {
    console.log('requestType value', ev.detail.value);
    let data = ev.detail.value;
    this.requestsType = data;
    if (ev.detail.value === 'NewClaim') {
      this.requestsType = 'NewClaim';
    }
    if (ev.detail.value === 'ClaimTracker') {
      this.requestsType = 'ClaimTracker';
    }
    localStorage.setItem('requestType1', this.requestsType);
  }

  openlist() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  openlistloss() {
    if (this.showloss == true) {
      this.showloss = false;
    } else {
      this.showloss = true;
    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance;
    this.show = false;
  }

  selectFile(event, type) {
    console.log('type --- ', type);
    console.log('linceise --- ', event.target.files[0]);

    this.getBase64(event.target.files[0])
      .then((data) => {
        let file = event.target.files[0];
        let base64 = data as string;

        this.claimdoc.file = file;
        this.claimdoc.base64 = base64;
      })
      .catch((err) => console.log('Errrrrr', err));
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  reportclaim() {
    if (this.Insurance == 'Life Busines') {
      if (this.claimdoc.file == '') {
        this.api.presenttoast('Choose Document');
      } else {
        var data = new FormData();
        data.append('polnum', this.polnum);
        data.append('csurname', this.csurname);
        data.append('cothname', this.cothname);
        data.append('dd_liabtype', this.dd_liabtype);
        data.append('txt_message_clm', this.txt_message_clm);
        data.append('claimdoc', this.claimdoc.file);

        this.api.showLoader();
        this.api
          .postdata(
            'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=200',
            data,
            '39109f7df56e1CORNERStone9e685066bb852'
          )
          .subscribe(async (res: any) => {
            console.log('response claim', res);
            this.api.hideLoader();
            // if (res.result.status == 0) {
            //   this.api.presenttoast(res.result.message)
            // } else {
            //   this.api.presenttoast('Please try again');
            // }

            if (res.result) {
              if (res.result.status == 1) {
                this.api.presenttoast(res.result.message);
              } else {
                const alert = await this.alert.create({
                  header: res.result.message,
                  cssClass: 'fgprintcls',
                  buttons: [
                    {
                      text: 'OK',
                      role: 'confirm',
                      handler: () => {

                      },
                    },
                  ],
                });
                await alert.present();
                // this.api.presenttoast(res.result.message);
              }
            } else {
              this.api.presenttoast('Policy record not found');
            }
          }, err => {
            console.log('err======', err);

            this.api.hideLoader()
          });
      }
    } else {
      this.api.showLoader();
      const myData = {
        sid: 'ECHANNEL2',
        token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
      };

      var mydataAPI = {
        "name": this.name,
        "vehicleregno": this.vechregnum,
        "accidentdate": this.tourStartDate,
        "accidentplace": this.accidentplace,
        "accidentdescribe": this.accidentdescribe,
        "weathercondition": this.weathercondition,
        "losstypecode": this.losstype
      };

      // var data = new FormData();
      // data.append('name', "najam");
      // data.append('vehicleregno', "MN000");
      // data.append('accidentdate', "2023-11-22");
      // data.append('accidentplace', "nigeria");
      // data.append('accidentdescribe', "dsadasdasd");
      // data.append('weathercondition', "dasdasdsad");
      // data.append('losstypecode', '1');
      this.api.gibsapi(myData).subscribe(
        (res: any) => {
          console.log('token-----', res);
          const token = res.accessToken;
          this.api
            .newclaim(
              'https://app.cornerstone.com.ng/claimapi/api/ProcessClaim/NewClaim',
              mydataAPI)
            .subscribe((res: any) => {
              this.api.hideLoader();
              // this.api.presenttoast('Clain Number ' + res.claimNo);
              this.alertboxshow(res.Messageresponse)
              console.log('gibs product detail', res);
              // localStorage.setItem('gibsproduct', JSON.stringify(res))
              // this.router.navigate(['gibsplans']);
            }, err => {
              console.log(err);
              this.api.hideLoader()

              this.alertboxshow(err.error.Messageresponse);



            });
        },
        (err) => {
          this.api.presenttoast('Invalid Policy Number');
          console.log(err);
          this.api.hideLoader();
        }
      );
    }
  }

  // dateChanged(value, type) {
  //   if (type == 'start') {
  //     // this.tourStartDate = value;

  //     this.tourStartDate = moment(value).format('L');
  //     console.log('this.tourStartDate ----', this.tourStartDate);
  //     this.showPickerStartDate = false;
  //   } else {
  //     this.tourEndDate = value;
  //     console.log('this.tourEndDate ----', this.tourEndDate);
  //     this.showPickerEndDate = false;
  //   }
  // }
  onDateChange(val) {
    var dateval = new Date(val)
    console.log('Selected Date:', dateval);
    this.tourStartDate = moment(dateval).format('L');
  }

  selectInsuranceloss(list) {
    console.log(list);
    this.Insurancename = list.Insurance
    this.losstype = list.value;
    this.showloss = false;
  }



  async alertboxshow(message) {
    const alert = await this.alert.create({
      header: message,
      cssClass: 'fgprintcls',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {

          },
        },
      ],
    });
    await alert.present();
  }

}
