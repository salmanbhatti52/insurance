import { ActivatedRoute } from '@angular/router';
import { InsuranceAppService } from './../services/insurance-app.service';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-vehicleinformation',
  templateUrl: './vehicleinformation.page.html',
  styleUrls: ['./vehicleinformation.page.scss'],
})
export class VehicleinformationPage implements OnInit {
  fullname = '';
  address = '';
  dateofbirth = 'Please Select';
  showPickerdob = false;
  yopValue = format(new Date(), 'yyyy');
  yomValue = format(new Date(), 'yyyy');
  yomdate = format(new Date(), 'yyyy');
  yopdate = format(new Date(), 'yyyy');
  showPickerYom = false;
  showPickerYop = false;
  dobValue = format(new Date(), 'yyyy-MM-dd');
  showReferrer = false;
  showGender = false;
  genderVal = 'Please Select';
  referrerVal = 'Please Select';
  referrerList: any;
  referrerData = ''
  genderType = [{ gender: 'Male' }, { gender: 'Female' }];
  Occupation = ''
  OccupationVal = 'Select Occupation'
  showOccupation = false;
  OccupationList = []
  // For file images //
  passPort = {
    file: '',
    base64: '',
  };
  vehicleLicence = {
    file: '',
    base64: '',
  };
  driverLicence = {
    file: '',
    base64: '',
  };
  vehFrontPic = {
    file: '',
    base64: '',
  };
  vehRearPic = {
    file: '',
    base64: '',
  };
  vehPicSideViewLeft = {
    file: '',
    base64: '',
  };
  vehPicSideViewRight = {
    file: '',
    base64: '',
  };
  vehPicDashboard = {
    file: '',
    base64: '',
  };
  CACForm = {
    file: '',
    base64: '',
  };
  utilityBills = {
    file: '',
    base64: '',
  };
  draftArr: any;
  vechileinformation: any;
  constructor(public api: InsuranceAppService,
    public navCtrl: NavController,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.getReferrerList();



  }

  getReferrerList() {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"get_referred_by"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message != '') {
          this.referrerList = res.values;
          console.log(this.referrerList);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  yopChanged(value) {
    this.yopdate = value;

    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPickerYop = false;
  }
  yomChanged(value) {
    this.yomdate = value;
    this.showPickerYom = false;
  }
  dobChanged(value) {
    this.dateofbirth = value;
    this.showPickerdob = false;
  }

  selectFile(event, type) {
    console.log('type --- ', type);
    console.log('linceise --- ', event.target.files[0]);

    this.getBase64(event.target.files[0])
      .then((data) => {
        let file = event.target.files[0];
        let base64 = data as string;
        if (type == 'vehicleLicence') {
          this.vehicleLicence.file = file;
          this.vehicleLicence.base64 = base64;
        } else if (type == 'driverLicence') {
          this.driverLicence.file = file;
          this.driverLicence.base64 = base64;
        } else if (type == 'vehFrontPic') {
          this.vehFrontPic.file = file;
          this.vehFrontPic.base64 = base64;
        } else if (type == 'vehRearPic') {
          this.vehRearPic.file = file;
          this.vehRearPic.base64 = base64;
        } else if (type == 'vehPicSideViewLeft') {
          this.vehPicSideViewLeft.file = file;
          this.vehPicSideViewLeft.base64 = base64;
        } else if (type == 'vehPicSideViewRight') {
          this.vehPicSideViewRight.file = file;
          this.vehPicSideViewRight.base64 = base64;
        } else if (type == 'vehPicDashboard') {
          this.vehPicDashboard.file = file;
          this.vehPicDashboard.base64 = base64;
        } else if (type == 'CACForm') {
          this.CACForm.file = file;
          this.CACForm.base64 = base64;
        } else if (type == 'utilityBills') {
          this.utilityBills.file = file;
          this.utilityBills.base64 = base64;
        }
        // -- For travel insurance -- //
        else if (type == 'passPort') {
          this.passPort.file = file;
          this.passPort.base64 = base64;
        }
        // -- For travel insurance -- //
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

  openReferrerList() {
    if (this.showReferrer == true) {
      this.showReferrer = false;
    } else {
      this.showReferrer = true;
    }
  }
  selectReferrerType(list) {
    this.referrerVal = list;
    this.showReferrer = false;
  }

  openOccupationList() {
    if (this.showOccupation == true) {
      this.showOccupation = false;
    } else {
      this.showOccupation = true;
    }
  }
  selectOccupationType(list) {
    this.referrerVal = list;
    this.showReferrer = false;
  }

  openGenderList() {
    if (this.showGender == true) {
      this.showGender = false;
    } else {
      this.showGender = true;
    }
  }

  selectGenderType(list) {
    console.log('hhhhhhhhhhhhhhhhhhhh');

    this.genderVal = list.gender;
    this.showGender = false;
  }

  chooseOccupation(ev: any) {
    console.log(ev);


  }
  createProposal() {

    if (this.fullname == '') {
      this.api.presenttoast('Full Name required')

    } else if (this.address == '') {
      this.api.presenttoast('Address is required');
    }
    else if (this.genderVal == 'Please Select') {
      this.api.presenttoast('Gender is required');
    }
    else if (
      this.vehFrontPic.file == '') {
      this.api.presenttoast('Vehicle Picture Front View required')
    } else if (
      this.vehRearPic.file == '') {
      this.api.presenttoast('Vehicle Picture Rear View required')

    } else if (
      this.vehPicSideViewLeft.file == '') {
      this.api.presenttoast('Vehicle Picture Side View(Left) required')

    } else if (
      this.vehPicSideViewRight.file == '') {
      this.api.presenttoast('Vehicle Picture Side View(Right) required')

    } else if (
      this.vehPicDashboard.file == '') {
      this.api.presenttoast('Dashboard (displaying Kilometer of vehicle) required')

    } else if (this.vehicleLicence.file == '') {
      this.api.presenttoast('Vehicle License required');

    } else if (this.driverLicence.file == '') {
      this.api.presenttoast('Driver License/N.I.C required')

    }
    else if (
      this.utilityBills.file == '') {
      this.api.presenttoast('Utility Bill required')

    } else if (
      this.CACForm.file == '') {
      this.api.presenttoast('Form inspection required')

    } else if (this.referrerVal == 'Please Select') {
      this.api.presenttoast('Please Select Referrer')

    } else if (this.referrerData == '') {
      this.api.presenttoast('Referrer Details required')

    } else {

      this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
      console.log(this.draftArr);

      for (var i = 0; i < this.draftArr.length; i++) {
        var product_id = this.draftArr[i].product_id;
        var quote_id = this.draftArr[i].quote_id;
        var product_name = this.draftArr[i].subProName;
        var quoteItems = this.draftArr[i].quoteItems;
        // var path = this.draftArr[i].path;
        if (this.draftArr[i].product_id == localStorage.getItem('product_id')) {
          this.draftArr.splice(i, 1);

          var obj = {
            title: product_name,
            product_id: product_id,
            quote_id: quote_id,
            subProName: product_name,
            quoteItems: quoteItems,
            image:
              'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
            path: '/payment2',
            datetime: new Date().toISOString(),
          };

          this.draftArr.push(obj);
        }
      }

      localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
      this.navCtrl.navigateRoot('payment2');
    }

  }


}
