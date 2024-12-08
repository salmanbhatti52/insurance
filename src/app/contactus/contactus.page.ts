import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  cname: string = '';
  userId: any;
  contactDetail = {
    "Branches": [
      {
        "State": "Abuja",
        "Address": "34, Gana street, Maitama, Abuja",
        "Telephone": "0803 502 6956"
      },
      {
        "State": "Apapa",
        "Address": "Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State",
        "Telephone": "0803 409 5717"
      },
      {
        "State": "FESTAC",
        "Address": "Plot ‘A’, Festac Link Rd Junction by 2nd Rainbow Bus Stop, Apapa-Oshodi Exp. Lagos",
        "Telephone": "0201 280 6500"
      },
      {
        "State": "Ibadan",
        "Address": "67, Aboderin Layout , Oni & Sons Area Ring Road, Ibadan, Oyo State",
        "Telephone": "0802 909 4320"
      },
      {
        "State": "Ikeja",
        "Address": "Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State",
        "Telephone": "0818 779 6014"
      },
      {
        "State": "Kano",
        "Address": "103 Hadejia Road, Fagge, Kano State",
        "Telephone": "0805 243 0133"
      },
      {
        "State": "Lagos Island",
        "Address": "Cornerstone House 136, Lewis Street Obalende, Lagos State",
        "Telephone": "0201 280 6500"
      },
      {
        "State": "Lekki",
        "Address": "St. Michaels Mall, No.71 Emma Abimbola Cole Street, Lekki, Lagos State.",
        "Telephone": "0802 308 0395"
      },
      {
        "State": "Port Harcourt",
        "Address": "222, Aba Road, Port Harcourt, River State",
        "Telephone": "0803 060 9056"
      },
      {
        "State": "Victoria Island",
        "Address": "21 Water Corporation Drive, Off Ligali Ayorinde street, Lagos State",
        "Telephone": "0201 280 6500"
      },
      {
        "State": "Warri",
        "Address": "Ken Complex, 229 Jakpa Road, Warri, Delta State, Nigeria",
        "Telephone": "0706 522 6175"
      },
      {
        "State": "Yaba",
        "Address": "191, Herbert Macaulay Street Opp. Yaba LGA Secretariat, Yaba, Lagos State",
        "Telephone": "0201 280 6500"
      }
    ],
    "SalesOutlets": [
      {
        "State": "Abeokuta",
        "Address": "Shopping Mall No. A004, Providence Centre Shopping Mall, by NNPC Mega Station, MKO Abiola Way, Abeokuta, Ogun State.",
        "Telephone": "0808 455 8701"
      },
      {
        "State": "Alaba",
        "Address": "Century Mall, Alaba International Market, Ojo-Igbede Road, Lagos State.",
        "Telephone": "0803 274 3330"
      },
      {
        "State": "Enugu",
        "Address": "3, Chimaobi Plaza, Ogui Road, Enugu State.",
        "Telephone": "0201 280 6500"
      },
      {
        "State": "FESTAC",
        "Address": "Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State",
        "Telephone": "0201 280 6500"
      },
      {
        "State": "Ikorodu",
        "Address": "134 Lagos Road, Ikorodu, Lagos State",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Lekki-Ajah",
        "Address": "Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Ilorin",
        "Address": "Shop No. 28, A. A. T. PLAZA, along Murtala Muhammed Way Ilorin, Kwara State",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Kaduna",
        "Address": "20 Constitution Road, Bijo Surgical building, Kaduna State.",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Onitsha",
        "Address": "3rd Floor, 5, Awka Road, Opposite All Saints Cathedral, Onitsha, Anambra State.",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Owerri",
        "Address": "2nd Floor, 8B Wetheral Road, Owerri, Imo State",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Sokoto",
        "Address": "2 Opposite Dogondaji House, Maiduguri Road, Sokoto State.",
        "Telephone": "020 1280 6500"
      },
      {
        "State": "Uyo",
        "Address": "17B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria",
        "Telephone": "0813 045 5433"
      },
      {
        "State": "Yenagoa",
        "Address": "Jay Cee Plaza, Otiotio Road, Yenezue Gene, Yenagoa, Bayelsa State",
        "Telephone": "0803 741 1444"
      }
    ]
  }

  constructor(
    public navCtrl: NavController,
    public router: Router,
    public location: Location,
    public iab: InAppBrowser,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userid');
    console.log('userid====', this.userId);

    if (this.userId === null) {
      this.cname == '';
    } else {
      this.cname = localStorage.getItem('fname');
    }
  }
  goBack() {
    this.location.back();
  }
  tab1Click() {
    this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }
  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }
  tab3Click() {
    this.navCtrl.navigateRoot('contactus');
  }
  updateProfile() {
    this.router.navigate(['/profile-update']);
  }

  fb() {
    const browser = this.iab.create(
      'https://www.facebook.com/CornerstoneInsuranceplc?_rdc=1&_rdr'
    );
  }
  tw() {
    const browser = this.iab.create('https://twitter.com/cornerstone_ng');
  }
  inst() {
    const browser = this.iab.create(
      'https://www.instagram.com/cornerstone_ng/'
    );
  }
  yt() {
    const browser = this.iab.create(
      'https://www.youtube.com/user/Cornerstoneplc'
    );
  }

  openwebpage() {
    const browser = this.iab.create('https://www.cornerstone.com.ng');
  }

  public openMapsApp(lat, lng, addr) {
    // window.open("https://www.google.com/maps/search/?api=1&query=6.424580,3.441100")
    var geocoords = lat + ',' + lng;

    if (this.platform.is('ios')) {
      window.open('maps://?q=' + geocoords, '_system');
    } else {
      var label = encodeURI(addr); // encode the label!
      window.open('geo:0,0?q=' + geocoords + '(' + label + ')', '_system');

      // window.open("https://www.google.com/maps/search/?api=1&query=" + geocoords)
    }
  }
}
