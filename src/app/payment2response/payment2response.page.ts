import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Http, HttpDownloadFileResult } from '@capacitor-community/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
@Component({
  selector: 'app-payment2response',
  templateUrl: './payment2response.page.html',
  styleUrls: ['./payment2response.page.scss'],
})
export class Payment2responsePage implements OnInit {
  policyNo: any;
  email: any;
  productres: any;
  Gproduct: any;
  subProName: any;
  trxref: any;
  productType: string;
  FILE_DIR = Directory.Documents
  certificate_link: string;
  constructor(public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController,
    public http: HttpClient) { }

  ngOnInit() {
    // if (localStorage.getItem('subProName') == 'Third Party') {
    //   this.subProName = localStorage.getItem('subProName')
    // } else {
    //   this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
    //   console.log('ssssss-----', this.Gproduct);
    //   this.subProName = this.Gproduct.productName
    // }
    // this.email = localStorage.getItem('email');

    // this.productres = JSON.parse(localStorage.getItem('gibsProductres'));
    // console.log(this.productres);
    this.productType = localStorage.getItem('productType');
    this.productres = JSON.parse(localStorage.getItem('vechileinfo'));
    console.log(this.productres)
    this.policyNo = this.productres.policyNo;
    this.trxref = localStorage.getItem('trxref');
    this.certificate_link = localStorage.getItem('certificatelink')
    console.log(this.certificate_link);

  }

  send() {
    var myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
    };
    this.api.gibsapi(myData).subscribe(
      (res: any) => {
        console.log(res);
        let token = res.accessToken;
        this.getcertificate(token);
      },
      (err) => {
        console.log(err);
        this.api.hideLoader();
      }
    );

  }
  getcertificate(token) {
    let encode = encodeURIComponent(this.policyNo);
    console.log('eee--', encode);

    this.api.get('http://testcipapiservices.gibsonline.com/api/utilities/send/certificate?policyNo=' + encode + '&email=' + this.email, token).subscribe((res: any) => {
      console.log('certificate====', res);
      this.api.presenttoast('Please check your email.')
    })
  }

  async download() {
    let header;

    header = new HttpHeaders({
      // "Content-Type": "application/json",
      // "Accept": "application/json"
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    let ref = this
    this.http.get(this.certificate_link, { responseType: 'blob', headers: header, }).subscribe((res: Blob) => {
      var reader = new FileReader();
      reader.readAsDataURL(res);

      reader.onloadend = function () {
        let base64 = reader.result.toString();
        ref.savepdf(base64)
      }
    })

  }

  savepdf(base64) {
    Filesystem.writeFile({
      path: 'Certificate.pdf',
      data: base64,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    }).then(res => {
      alert('file saved at' + res.uri)
    }, (err) => {
      alert(err)
    })
  }
  goback() {
    this.router.navigate(['/home-page-screen-after-login']);
  }

}
