import { ActivatedRoute } from '@angular/router';
import { InsuranceAppService } from './../services/insurance-app.service';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicleinformation',
  templateUrl: './vehicleinformation.page.html',
  styleUrls: ['./vehicleinformation.page.scss'],
})
export class VehicleinformationPage implements OnInit {
  fullname = '';
  address = '';
  dateofbirth: any;
  showPickerdob = false;
  showPickerdoI = false
  yopValue = format(new Date(), 'yyyy');
  yomValue = format(new Date(), 'yyyy');
  yomdate = format(new Date(), 'yyyy');
  yopdate = format(new Date(), 'yyyy');
  showPickerYom = false;
  showPickerYop = false;
  doIValue = format(new Date(), 'yyyy-MM-dd');
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
  quoteval: any;
  dateofincorporation: any;
  quoteprocess: any;
  quote_id: any;
  policyhldrtype: any;
  constructor(public api: InsuranceAppService,
    public navCtrl: NavController,
    public route: ActivatedRoute,
    private http: HttpClient,
    public location: Location) { }

  ngOnInit() {
    this.getReferrerList();

    this.quoteval = JSON.parse(localStorage.getItem('quotevalues'));
    console.log(this.quoteval);
    this.policyhldrtype = this.quoteval.policyhldrVal
    this.quoteprocess = JSON.parse(localStorage.getItem('quoteprocess'));

    this.quote_id = this.quoteprocess.info.quote_id

    console.log(localStorage.getItem('motorquoteprice'));

    this.fullname = localStorage.getItem('fname') + localStorage.getItem('lname')

  }

  goback() {
    this.location.back();
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
  doInChanged(value) {
    this.dateofincorporation = value;
    this.showPickerdoI = false;
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

    }
    // else if (
    //   this.CACForm.file == '') {
    //   this.api.presenttoast('Form inspection required')

    // }
    else if (this.referrerVal == 'Please Select') {
      this.api.presenttoast('Please Select Referrer')

    } else if (this.referrerData == '') {
      this.api.presenttoast('Referrer Details required')

    } else {
      this.api.showLoader()
      // const myData =
      //   'myData={"quote_id":"' +
      //   this.quoteprocess.info.quote_id +
      //   '","product_id":"' +
      //   this.quoteprocess.info.product_id +
      //   '","name":"' +
      //   this.fullname +
      //   '","registration_number":"' +
      //   this.quoteval.registration_number +
      //   '","engine_number":"' +
      //   this.quoteval.engine_number +
      //   '","chasis_number":"' +
      //   this.quoteval.chasis_number +
      //   '","vehicle_colour":"' +
      //   this.quoteval.vehicle_colour +
      //   '","year_of_manufacture":"' +
      //   this.yomdate +
      //   '","year_of_purchase":"' +
      //   this.yopdate +

      //   '","address":"' +
      //   this.address +
      //   '", "gender":"' +
      //   this.genderVal +
      //   '", "date_of_birth":"' +
      //   this.quoteval.dob +
      //   '", "Incorporation":"' +
      //   this.dateofincorporation +
      //   '", "referred_by":"' +
      //   this.referrerVal +
      //   '", "referrer_details":"' +
      //   this.referrerData +
      //   '", "means_of_id":"' +
      //   this.driverLicence.file +
      //   '", "vehicle_licence":"' +
      //   this.vehicleLicence.file +
      //   '", "utility_bill":"' +
      //   this.utilityBills.file +
      //   '", "vehicle_picture_front_view":"' +
      //   this.vehFrontPic.file +
      //   '", "vehicle_picture_rear_view":"' +
      //   this.vehRearPic.file +
      //   '", "vehicle_picture_side_view_left":"' +
      //   this.vehPicSideViewLeft.file +
      //   '", "vehicle_picture_side_view_right":"' +
      //   this.vehPicSideViewRight.file +
      //   '", "vehicle_picture_dashboard":"' +
      //   this.vehPicDashboard.file +
      //   '", "verify_token":"' +
      //   localStorage.getItem('token') +
      //   '","method":"save_product_proposal"}';
      const headers = new HttpHeaders();
      var form = new FormData();
      form.append('product_id', this.quoteprocess.info.product_id);
      form.append('quote_id', this.quoteprocess.info.quote_id);
      form.append('name', this.fullname);
      form.append('registration_number', this.quoteval.registration_number);
      form.append('engine_number', this.quoteval.engine_number);
      form.append('chasis_number', this.quoteval.chasis_number);
      form.append('vehicle_colour', this.quoteval.vehicle_colour);
      form.append('address', this.address);
      form.append('gender', this.genderVal);
      if (this.policyhldrtype == 'Private') {
        form.append('date_of_birth', this.dateofbirth);

      } else {
        form.append('incorporation', this.dateofincorporation);
      }

      form.append('year_of_purchase', this.yopdate);
      form.append('year_of_manufacture', this.yomdate);
      form.append('referred_by', this.referrerVal);
      form.append('referrer_details', this.referrerData);
      form.append('means_of_id', this.driverLicence.file);
      form.append('vehicle_licence', this.vehicleLicence.file);
      form.append('utility_bill', this.utilityBills.file);
      form.append('vehicle_picture_front_view', this.vehFrontPic.file);
      form.append('vehicle_picture_rear_view', this.vehRearPic.file);
      form.append('vehicle_picture_side_view_left', this.vehPicSideViewLeft.file);
      form.append('vehicle_picture_side_view_right', this.vehPicSideViewRight.file);
      form.append('vehicle_picture_dashboard', this.vehPicDashboard.file);
      form.append('verify_token', localStorage.getItem('token'));
      form.append('method', 'save_product_proposal');
      const config = {
        method: 'post',
        url: this.api.url,
        headers: headers,
        data: form,
      };
      console.log('form form config', config);
      this.http
        .post(config.url, config.data, {
          headers: config.headers,
        })
        .subscribe(
          (res: any) => {
            console.log(res);
            if (res.status_no == 1) {
              this.api.hideLoader()
              this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
              console.log(this.draftArr);
              for (var i = 0; i < this.draftArr.length; i++) {
                var product_id = this.draftArr[i].product_id;
                var quote_id = this.draftArr[i].quote_id;
                var product_name = this.draftArr[i].subProName;
                var quoteItems = this.draftArr[i].quoteItems;
                // var path = this.draftArr[i].path;
                if (this.draftArr[i].quote_id == this.quote_id) {
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
              this.navCtrl.navigateRoot('payment2')
              localStorage.setItem('vechileinfo', JSON.stringify(res))
            } else {
              this.api.hideLoader()
              this.api.presenttoast(res.message + ' ' + (res.field))
            }


          },
          (err) => {
            this.api.hideLoader()
            console.log('err===', err);
          }
        );
      // this.api.insertData(form).subscribe(
      //   (res: any) => {
      //     console.log('proposalproces=====', res);
      //     // this.navCtrl.navigateRoot('payment2')
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // );
      // this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
      // console.log(this.draftArr);

      // for (var i = 0; i < this.draftArr.length; i++) {
      //   var product_id = this.draftArr[i].product_id;
      //   var quote_id = this.draftArr[i].quote_id;
      //   var product_name = this.draftArr[i].subProName;
      //   var quoteItems = this.draftArr[i].quoteItems;
      //   // var path = this.draftArr[i].path;
      //   if (this.draftArr[i].product_id == localStorage.getItem('product_id')) {
      //     this.draftArr.splice(i, 1);

      //     var obj = {
      //       title: product_name,
      //       product_id: product_id,
      //       quote_id: quote_id,
      //       subProName: product_name,
      //       quoteItems: quoteItems,
      //       image:
      //         'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
      //       path: '/payment2',
      //       datetime: new Date().toISOString(),
      //     };

      //     this.draftArr.push(obj);
      //   }
      // }

      // localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
      // this.navCtrl.navigateRoot('payment2');
    }

  }


}
