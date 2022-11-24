import { NavController } from '@ionic/angular';
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
  subProducts = [
    { name: 'iSave Plan', image: 'assets/images/investmentplans/1.png' },
    {
      name: 'Maximum Investment Plan',
      image: 'assets/images/investmentplans/2.jpg',
    },
    {
      name: 'Cornerstone Universal Plan',
      image: 'assets/images/investmentplans/3.jpg',
    },
    {
      name: 'Children Education Fund',
      image: 'assets/images/investmentplans/4.png',
    },
  ];
  token: any;
  constructor(
    public location: Location,
    private http: HttpClient,
    public api: InsuranceAppService,
    public navctrl: NavController
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  goback() {
    this.location.back();
  }

  seeDetails(sp) {
    console.log(this.token);

    this.api
      .postparam(
        'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&insureval=1000&desiredprem=5000&userid=C52035&covdur=2&curdate=2022-09-29&dbirth=1995-09-29&pdvopt=test&opt=ICEDUP&process_code=908',
        '39109f7df56e1CORNERStone9e685066bb852'
      )
      .subscribe((res: any) => {
        console.log('response====', res);
        // this.api.presenttoast(res.result.message);
        localStorage.setItem('subProName', sp.name);

        if (sp.name == 'iSave Plan') {
          this.navctrl.navigateForward('ivplan1');
        }

        if (sp.name == 'Maximum Investment Plan') {
          this.navctrl.navigateForward('ivplan2');
        }

        if (sp.name == 'Cornerstone Universal Plan') {
          this.navctrl.navigateForward('ivplan3');
        }

        if (sp.name == 'Children Education Fund') {
          this.navctrl.navigateForward('ivplan4');
        }
      });
  }
}
