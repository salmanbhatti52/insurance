import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import * as btoa from 'btoa-lite';

@Injectable({
  providedIn: 'root',
})
export class InsuranceAppService {
  // Live:
  url = 'https://www.cornerstone.com.ng/webservice'
  flutterwaveAPIKey = "FLWPUBK-ea5dbc9de4ddb38309432794c2d62e81-X";

  //DEV

  // url = 'https://www.cornerstone.com.ng/devtest/webservice';
  // flutterwaveAPIKey = "FLWPUBK_TEST-4fdbf14bb4f70e2e6fe3dae2d18a4fc8-X";


  authurl = 'https://testcipapiservices.gibsonline.com/api/auth';
  // url1 = 'http://testcipapiservices.gibsonline.com/api/Agents/'






  fpval: any;
  username: any;

  comingFrom: any = 0;
  loginas;
  selectedPolicy: any;
  selectedTransaction: any;
  nextPayment: any;
  policyamountDue: any;



  allProducts = { "status_no": 1, "myproduct": [{ "id": "1", "parent_id": "0", "product_for_quote": "0", "name": "Motor Insurance", "tagline": "<ul class=\"nav nav-stacked detaiLsText\">\n         <li><a href=\"#\"><span class=\"detaiLIcon\"> <\/span>Car insurance<\/a><\/li>\n      <li><a href=\"#\"><span class=\"detaiLIcon\"> <\/span>MultiCar insurance<\/a><\/li>\n      <li><a href=\"#\"><span class=\"detaiLIcon\">", "subtitle": "There are several products within our motor insurance portfolio to choose from. Click to view:", "product_code": "MI", "product_type_id": "0", "form_id": "0", "image": "https:\/\/www.cornerstone.com.ng\/assets\/uploads\/product\/1.jpg", "status": "Y", "approver": "", "view_status": "6", "description": "<p><span>Select from our range of tailor-made auto-plans within our motor portfolio.<\/span><\/p>", "last_policynumber": "" }, { "id": "8", "parent_id": "0", "product_for_quote": "0", "name": "Travel Insurance", "tagline": null, "subtitle": "This policy covers medical expenses and other loss occurred while traveling out of the country", "product_code": "TI", "product_type_id": "0", "form_id": "0", "image": "https:\/\/www.cornerstone.com.ng\/assets\/uploads\/product\/8.jpg", "status": "Y", "approver": "", "view_status": "6", "description": "<p><span>Select from our range of tailor-made local and international travel health insurance plans.<\/span><\/p>\n<p><span><strong><span >Please take note<\/span><\/strong><br \/><\/span><\/p>\n<p class=\"Default\"><strong>** In-case of Amendment\/Cancellation of Policy: <\/strong><\/p>\n<p class=\"Default\">a. First amendment request will be conceded without applying a charge (i.e. <strong>FREE<\/strong>) whilst for subsequent requests you will be required to purchase a <strong>NEW <\/strong>travel insurance cover<\/p>\n<p class=\"Default\">b. Amendment of policies is not applicable when visa is not granted<\/p>\n<p class=\"Default\">c. Amendment of policies will not be granted if the policy has commenced.<\/p>\n<p class=\"Default\">d. Refund is not applicable for all travel insurance policies purchased<\/p>\n<p><span>\u00a0<\/span><\/p>", "last_policynumber": "" }, { "id": "27", "parent_id": "0", "product_for_quote": "0", "name": "Investment plans", "tagline": null, "subtitle": "Investment plans", "product_code": "IP", "product_type_id": "1", "form_id": "0", "image": "https:\/\/www.cornerstone.com.ng\/assets\/uploads\/product\/27.jpg", "status": "Y", "approver": "", "view_status": "2", "description": "<p>Our investment plans gives protection against financial consequences of unforeseen circumstances surrounding life and also allows the an individual accumulate a lump sum through planned and disciplined savings.<\/p>", "last_policynumber": "E\/IP\/2016\/0" }], "message": "success" }
  accidentcovers: any;
  accident_quote_id: any;
  accidentcovers_val: any;
  pep_occupations: any;
  accidentcovers_val_amount: any;
  accidentProduct: any;

  constructor(
    private toastctrl: ToastController,
    private http: HttpClient,
    private loadingController: LoadingController,
    private alert: AlertController

  ) { }

  submitFormData(data: { [key: string]: any }) {
    const formdData = new FormData();

    Object.keys(data).forEach((key: string) => {
      const value = data[key];

      if (value instanceof File) {
        formdData.append(key, value, value.name);
      } else {
        formdData.append(key, value);
      }
    });

    return this.http.post(this.url, formdData);
  }

  insertData(myData) {
    console.log('data', myData);

    let header;

    header = new HttpHeaders({
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    return this.http.post(this.url, myData, {
      headers: header,
    });
  }

  renewalC(url, myData) {
    console.log('data', myData);

    let header;

    header = new HttpHeaders({
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    return this.http.post(url, myData, {
      headers: header,
    });
  }

  gibsapi(myData) {
    let header;

    header = new HttpHeaders({
      "Accept": 'application/json',
      'Content-Type': 'application/json',
    });

    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');

    return this.http.post(this.authurl, myData, {
      headers: header,
    });
  }
  insertFormData(Data) {
    let header;

    header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie:
        'corci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%229067b6add23324d21220d8f7d5c649c0%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A12%3A%2239.40.231.23%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.29.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1656587499%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D87fb653bf23ba596c9ade5a76135fe0a7557093d',
    });
    return this.http.post(this.url, Data, {
      headers: header,
    });
  }

  wpGetData(action, token?) {
    let header;
    if (token) {
      header = new HttpHeaders({
        Authorization: 'Bearer ' + token,
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    } else {
      header = new HttpHeaders();
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    }
    return this.http.post(`${this.url}/${action}`, {
      headers: header,
    });
  }
  getData(action, token?) {
    let header;
    if (token) {
      header = new HttpHeaders({
        'auth-key': token,
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    } else {
      header = new HttpHeaders();
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    }
    return this.http.get(`${this.url}/${action}`, {
      headers: header,
    });
  }

  getcallbackurl(url) {
    let header;
    header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    header.append(
      'Access-Control-Allow-Methods',
      'POST, GET, DELETE, PUT,OPTIONS'
    );

    return this.http.get(`${url}`, {
      headers: header,
    });
  }
  get(url, token?) {
    let header;
    // console.log('token in api ervice====', token);
    // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    });
    // header.append("Access-Control-Allow-Origin", "*");
    // header.append(
    //   "Access-Control-Allow-Methods",
    //   "POST, GET, DELETE, PUT,OPTIONS"
    // );

    return this.http.get(`${url}`, {
      headers: header,
    });
  }
  getpolicy(url, token?) {
    let header;
    // console.log('token in api ervice====', token);
    // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    // header.append("Access-Control-Allow-Origin", "*");
    // header.append(
    //   "Access-Control-Allow-Methods",
    //   "POST, GET, DELETE, PUT,OPTIONS"
    // );

    return this.http.get(`${url}`, {
      headers: header,
    });
  }

  // postpolicies(url, data?, token?) {

  //   const headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Bearer ' + token
  //   };
  //   console.log('token in api ervice====', token);
  //   return this.ionichttp.post(`${url}`, data, headers
  //   );
  // }
  postdata(url, data?, token?) {

    let header;
    console.log('token in api ervice====', token);

    header = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      "Accept": "application/json",
      'Content-Type': "application/json",
    });
    // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers');
    return this.http.post(`${url}`, data, {
      headers: header,
    });
  }

  newclaim(url, data?) {
    const username = 'c31a6a20-7eda-41da-a7df-d14b501c237c';
    const password = 'DECHANNEL';
    const encodedCredentials = btoa(`${username}:${password}`);
    let header;

    header = new HttpHeaders({
      'Authorization': 'Basic ' + encodedCredentials,
      "Accept": "application/json",
      'Content-Type': "application/json",
    });
    // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers');
    return this.http.post(`${url}`, data, {
      headers: header,
    });
  }
  trackclaim(url, data?) {
    const username = 'c31a6a20-7eda-41da-a7df-d14b501c237c';
    const password = 'DECHANNEL';
    const encodedCredentials = btoa(`${username}:${password}`);
    let header;

    header = new HttpHeaders({
      'Authorization': 'Basic ' + encodedCredentials,
      "Accept": "application/json",
      'Content-Type': "application/json",
    });
    // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers');
    return this.http.get(`${url}`, {
      headers: header,
    });
  }

  renewal(url, token) {

    console.log('token in api ervice====', token);
    let header;

    header = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',

    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');

    return this.http.post(`${url}`, {
      headers: header,
    });

  }
  postparam(url, data?, token?) {
    let header;
    console.log('token in api ervice====', token);
    // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new HttpHeaders({
      Authorization: 'Bearer ' + data,
    });

    return this.http.post(`${url}`, data, {
      headers: header,
    });
  }

  // waGetData(action,token) {
  //   let header;

  //   // if (token) {
  //   //   console.log('token=',token)
  //   //   header = new HttpHeaders({
  //   //     "Authorization": "Bearer "+token,
  //   //   });
  //   //   console.log('jeadwre=',header)
  //   //   header.append("Access-Control-Allow-Origin", "*");
  //   //   header.append(
  //   //     "Access-Control-Allow-Methods",
  //   //     "POST, GET, DELETE, PUT,OPTIONS"
  //   //   );
  //   // } else {
  //   //   header = new HttpHeaders();
  //   //   header.append("Access-Control-Allow-Origin", "*");
  //   //   header.append(
  //   //     "Access-Control-Allow-Methods",
  //   //     "POST, GET, DELETE, PUT,OPTIONS"
  //   //   );
  //   // }
  //   return this.http.post(`${this.url}/${action}`, {
  //     headers: {
  //       "Authorization": "Bearer "+'53|4GA1yxNOLagRRhMYG48FrtG6CnVlon74H5cjMmo9',
  //       "Cookie": "XSRF-TOKEN=eyJpdiI6IjIyeHh0Zm1OSnF0ZFdGMmU4MnBpbHc9PSIsInZhbHVlIjoieTZ4RjVxZjhWZTVRUjh3bUdGRzZBYkhwNTRkODk5SElsWW93bWR1QXFlbHpSaDlTSWhxeXlETzlEQURxZ1pmNTdCWXZIM09JK29rUS9TQk9FU0ZheWlXajVLYk83K3BObldGQVZ2UFV4TVBhRVhYdHpkMFBnUzBldkNhTWpaNjciLCJtYWMiOiI0OWYwMDMwNmU3MjJmMGY3YWUwYjcxOTlkNjM0ZTZhODRhZmYwMGU4NDYwZGE3OGRlOGEyODcyYWRhMTRiYTk0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ik1ROUVsalZXcm55WnFNV2Y5Rkd4TFE9PSIsInZhbHVlIjoieG16Y0tnTEN1SmFPUjFxUTBxbUVuMDc5bUNPaysrbXpVc1VuUjA5QjFIMG1aM1FqQkY5WStPY3N5L2RkY0N3bHlVaWcvcS9TbFdqUUR2TFJsaU9PaUsvUHlHdzU5ZUo4S24rT1RxaFJiOW5sdHR5NDFkT3NCTmF0eVlwZmFsTUgiLCJtYWMiOiI1OTRiNjAzYWFhY2U0ZDI5ODVjNGVmMDFjZjMzMzk0YWZhZGRjODFkOGYxZTgzZmM0MGI5YTA0ODhlZWUyNDliIiwidGFnIjoiIn0%3D",
  //       "Content-Type": "application/json"
  //     }
  //   });
  // }

  getCaptcha(token?) {
    let header;
    if (token) {
      header = new HttpHeaders({
        'auth-key': token,
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    } else {
      header = new HttpHeaders({
        // "content-type":"text/html"
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    }
    return this.http.get(`${this.url}`, {
      headers: header,
    });
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


  presenttoast(message) {
    this.toastctrl
      .create({
        message,
        duration: 2000,
        position: 'bottom',
      })
      .then((res) => res.present());
  }

  async showLoader(content?: string) {
    this.loadingController
      .create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      })
      .then((res) => {
        res.present();
      });
  }

  hideLoader() {
    this.loadingController
      .dismiss()
      .then((res) => {
        console.log('Loading dismissed!', res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
}
