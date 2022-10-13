import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';


@Component({
  selector: 'app-makeaclaim',
  templateUrl: './makeaclaim.page.html',
  styleUrls: ['./makeaclaim.page.scss'],
})
export class MakeaclaimPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;
  show = false;
  Insurance = 'Car Insurance'
  listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }]

  polnum: any;
  csurname: any;
  cothname: any;
  dd_liabtype: any;
  txt_message_clm: any;

  claimdoc = {
    file: "",
    base64: "",
  };
  constructor(public api: InsuranceAppService) { }

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

  }
}
