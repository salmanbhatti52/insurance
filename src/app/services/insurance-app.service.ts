import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InsuranceAppService {
  url = 'https://www.cornerstone.com.ng/devtest/webservice';
  authurl = 'http://testcipapiservices.gibsonline.com/api/Auth';
  // url1 = 'http://testcipapiservices.gibsonline.com/api/Agents/'

  fpval: any;
  username: any;
  constructor(private toastctrl: ToastController,
    private http: HttpClient,
    private loadingController: LoadingController) { }
  insertData(myData) {
    let header;

    header = new HttpHeaders({
      // "Content-Type": "application/json",
      // "Accept": "application/json"
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.url, myData, {
      headers: header,
    });
  }
  gibsapi(myData) {
    let header;

    header = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      Cookie: 'corci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%229067b6add23324d21220d8f7d5c649c0%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A12%3A%2239.40.231.23%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.29.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1656587499%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D87fb653bf23ba596c9ade5a76135fe0a7557093d'
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
        'POST, GET, DELETE, PUT,OPTIONS',
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
      headers: header
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
      headers: header
    });
  }
  postdata(url, data?, token?) {
    let header;
    console.log('token in api ervice====', token);
    // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new HttpHeaders({

      Authorization: 'Bearer ' + token,
    });


    return this.http.post(`${url}`, data, {
      headers: header
    });
  }
  postparam(url, token) {
    let header;
    console.log('token in api ervice====', token);

    header = new HttpHeaders({
      Authorization:  token,
    });
    header.append('Access-Control-Allow-Origin', '*');
 //   header.append('Authorization', 'Bearer' + token);
    header.append('Access-Control-Allow-Credentials', 'true');
    header.append('Access-Control-Allow-Headers: Authorization, Content-Type');
    header.append(
      'Access-Control-Allow-Methods',
      'POST, GET, DELETE, PUT,OPTIONS'
    );

    return this.http.post(url, {
      headers: header
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
        'POST, GET, DELETE, PUT,OPTIONS',
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


  presenttoast(message) {
    this.toastctrl.create({
      message,
      duration: 2000,
      position: 'top'
    }).then(res => res.present());
  }

  async showLoader(content?: string) {

    this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    }).then((res) => {
      res.present();
    });

  }

  hideLoader() {

    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }

}
