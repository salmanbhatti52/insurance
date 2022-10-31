import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makeaclaim',
  templateUrl: './makeaclaim.page.html',
  styleUrls: ['./makeaclaim.page.scss'],
})
export class MakeaclaimPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;
  show = false;
  Insurance = 'Please Select'
  listarray = [{ Insurance: 'General Business' }, { Insurance: 'Life Busines' }]

  polnum: any;
  csurname: any;
  cothname: any;
  dd_liabtype: any;
  txt_message_clm: any;

  claimdoc = {
    file: "",
    base64: "",
  };


  showloss = false;
  losstype="Please Select"
  listarrayloss = [{ Insurance: 'Accidental Damage' }, { Insurance: 'Own Damage'}, { Insurance: 'Others'}]

  showPickerStartDate = false;
  showPickerEndDate = false;
  tourEndDate = format(new Date(), 'yyyy-MM-dd');
  tourStartDate = format(new Date(), 'yyyy-MM-dd');
  desc:any = ''
  refnum:any=''

  constructor(public api: InsuranceAppService,
    public router:Router) { }

  ngOnInit() {
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
    this.requestsType = data
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
      this.show = false
    } else {
      this.show = true;
    }
  }

  openlistloss(){
    if (this.showloss == true) {
      this.showloss = false
    } else {
      this.showloss = true;
    }
  }

  selectInsurance(list) {
    this.Insurance = list.Insurance
    this.show = false
  }

  selectFile(event, type) {

    console.log("type --- ", type);
    console.log("linceise --- ", event.target.files[0]);


    this.getBase64(event.target.files[0]).then(data => {
      let file = event.target.files[0];
      let base64 = data as string;


      this.claimdoc.file = file;
      this.claimdoc.base64 = base64;

    }).catch(err => console.log('Errrrrr', err));



  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  reportclaim() {
    if(this.Insurance == 'Life Busines'){
    if (this.claimdoc.file == '') {
      this.api.presenttoast('Choose Document')
    } else {
      var data = new FormData();
      data.append("polnum", this.polnum);
      data.append("csurname", this.csurname);
      data.append("cothname", this.cothname);
      data.append("dd_liabtype", this.dd_liabtype);
      data.append("txt_message_clm", this.txt_message_clm);
      data.append("claimdoc", this.claimdoc.file);

      this.api.showLoader();
      this.api.postdata('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=200', data, localStorage.getItem('token')).subscribe((res: any) => {
        console.log('response claim', res);
        this.api.hideLoader();
        // if (res.result.status == 0) {
        //   this.api.presenttoast(res.result.message)
        // } else {
        //   this.api.presenttoast('Please try again');
        // }

        if (res.result) {
          if (res.result.status == 1) {
            this.api.presenttoast(res.result.message)
          } else {
            this.api.presenttoast(res.result.message)
          }
        } else {
          this.api.presenttoast('Policy record not found');
        }


      })
    }
  }else{
    this.api.presenttoast('general business')

     const myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
    };

     var mydataAPI={
      "policyNo": this.polnum,
      "lossDate": this.tourStartDate,
      "notifyDate": this.tourEndDate,
      "description": this.desc,
      "lossType": this.losstype,
      "reference": this.refnum
      }
    this.api.gibsapi(myData).subscribe((res: any) => {
       console.log('token-----',res);
      const token = res.accessToken;
      this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Claims' + mydataAPI, token).subscribe((res: any) => {

        console.log('gibs product detail', res);
        localStorage.setItem('gibsproduct', JSON.stringify(res))
        this.router.navigate(['gibsplans']);
      });
    }, (err) => {
      console.log(err);
      this.api.hideLoader();
    });


  }
  }

  dateChanged(value, type) {
    if (type == 'start') {
      this.tourStartDate = value;
      console.log('this.tourStartDate ----', this.tourStartDate);
      this.showPickerStartDate = false;
    }
    else {
      this.tourEndDate = value;
      console.log('this.tourEndDate ----', this.tourEndDate);
      this.showPickerEndDate = false;
    }

  }


  selectInsuranceloss(list) {
    this.losstype = list.Insurance
    this.showloss = false
  }
}
