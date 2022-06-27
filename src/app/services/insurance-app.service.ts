import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class InsuranceAppService {
  url = 'https://www.cornerstone.com.ng/devtest/webservice';
  constructor(private toastctrl:ToastController,
    private http: HttpClient,
    private loadingController:LoadingController) { }
    insertData(myData) {
      let header;
     
      header = new HttpHeaders({
        // "Content-Type": "application/json",
        // "Accept": "application/json"
        "Content-Type": "application/x-www-form-urlencoded",
      });
      //header.append('Content-Type','application/x-www-form-urlencoded');
      //header.append("Access-Control-Allow-Origin", "*");
      //header.append(
      //  "Access-Control-Allow-Methods",
      //  "POST, GET, DELETE, PUT,OPTIONS"
      //);
      //let myData1 = "myData={\r\n    \"email\": \"abdur.techvill@gmail.com\",\r\n    \"password\": \"123456\",\r\n    \"method\": \"login\"\r\n}";
        return this.http.post(this.url,myData , {
        headers: header,
      });
    }
  
    wpGetData(action, token?) {
      let header;
      if (token) {
        header = new HttpHeaders({
          "Authorization": "Bearer "+token,
        });
        header.append("Access-Control-Allow-Origin", "*");
        header.append(
          "Access-Control-Allow-Methods",
          "POST, GET, DELETE, PUT,OPTIONS"
        );
      } else {
        header = new HttpHeaders();
        header.append("Access-Control-Allow-Origin", "*");
        header.append(
          "Access-Control-Allow-Methods",
          "POST, GET, DELETE, PUT,OPTIONS"
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
          "auth-key": token,
        });
        header.append("Access-Control-Allow-Origin", "*");
        header.append(
          "Access-Control-Allow-Methods",
          "POST, GET, DELETE, PUT,OPTIONS",
        );
      } else {
        header = new HttpHeaders();
        header.append("Access-Control-Allow-Origin", "*");
        header.append(
          "Access-Control-Allow-Methods",
          "POST, GET, DELETE, PUT,OPTIONS"
        );
      }
      return this.http.get(`${this.url}/${action}`, {
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
  
  getCaptcha( token?) {
    
      let header;
      if (token) {
        header = new HttpHeaders({
          "auth-key": token,
        });
        header.append("Access-Control-Allow-Origin", "*");
        header.append(
          "Access-Control-Allow-Methods",
          "POST, GET, DELETE, PUT,OPTIONS",
        );
      } else {
        header = new HttpHeaders({
          // "content-type":"text/html"
        });
        header.append("Access-Control-Allow-Origin", "*");
        header.append(
          "Access-Control-Allow-Methods",
          "POST, GET, DELETE, PUT,OPTIONS"
        );
      }
      return this.http.get(`${this.url}`, {
        headers: header,
      });
    }
    
  
    presenttoast(message){
      this.toastctrl.create({
        message:message ,
        duration: 2000,
        position: 'bottom'
      }).then(res => res.present());
    }
  
    async showLoader(content?: string) {
  
      this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
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
