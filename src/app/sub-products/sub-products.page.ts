import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.page.html',
  styleUrls: ['./sub-products.page.scss'],
})
export class SubProductsPage implements OnInit {
  subProducts = [{ name: 'iSave Plan', image: 'assets/images/investmentplans/1.png' }, { name: 'Maximum Investment Plan', image: 'assets/images/investmentplans/2.jpg' }, { name: 'Cornerstone Universal Plan', image: 'assets/images/investmentplans/3.jpg' }, { name: 'Children Education Fund', image: 'assets/images/investmentplans/4.png' }]
  token: any;
  constructor(public location: Location,
    private http: HttpClient,
    public api: InsuranceAppService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);

  }

  goback() {
    this.location.back()
  }

  seeDetails() {
    console.log(this.token);

    this.api.postparam('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&insureval=1000&desiredprem=5000&userid=C52035&covdur=2&curdate=2022-09-29&dbirth=1995-09-29&pdvopt=test&opt=ICEDUP&process_code=908', '39109f7df56e1CORNERStone9e685066bb852').subscribe((res: any) => {
      console.log('response====', res);

    })
  }

}
