import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { format } from 'date-fns';
import { InsuranceAppService } from '../services/insurance-app.service';
@Component({
  selector: 'app-ivplaninformation',
  templateUrl: './ivplaninformation.page.html',
  styleUrls: ['./ivplaninformation.page.scss'],
})
export class IvplaninformationPage implements OnInit {
  fullname = '';
  address = '';
  dateofbirth = 'Please Select';
  showPickerdob = false;
  showGender = false;
  genderVal = 'Please Select';
  genderType = [{ gender: 'Male' }, { gender: 'Female' }];
  maritalType = [{ value: 'Widowed' }, { value: 'Divoced' }, { value: 'Married' }, { value: 'Single' }]
  dobValue = format(new Date(), 'yyyy-MM-dd');
  MaritalStatus = false;
  maritalVal = 'Please Select';
  PIPStatus = false;
  PIPVal = 'Please Select';
  CornerstoneStatus = false;
  CornerstoneVal = 'Please Select';
  B1 = '';
  rel = '';
  proportion = '';
  Answers = [{ value: 'Yes' }, { value: 'NO' }];
  pregnantStatus = false;
  PVal = 'Please Select';

  driverLicence = {
    file: '',
    base64: '',
  };
  utilityBills = {
    file: '',
    base64: '',
  };
  showReferrer = false;
  referrerVal = 'Please Select';
  referrerList: any;
  referrerData = ''
  occupationVal = '';
  hospitalname = '';
  hospitaladdress = '';
  height = '';
  weight = '';
  Alcohol = '';
  Tobacco = '';
  Narcotics = '';
  edd = ''
  draftArr: any;
  dummyquoteid: any = '';
  constructor(public api: InsuranceAppService,
    public navCtrl: NavController) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('draftArr')));

    this.getReferrerList();
  }

  openGenderList() {
    if (this.showGender == true) {
      this.showGender = false;
    } else {
      this.showGender = true;
    }
  }
  openMaritalList() {
    if (this.MaritalStatus == true) {
      this.MaritalStatus = false;
    } else {
      this.MaritalStatus = true;
    }
  }
  selectMaritalType(list) {
    this.maritalVal = list.value;
    this.MaritalStatus = false;
  }

  selectGenderType(list) {
    this.genderVal = list.gender;
    this.showGender = false;
  }
  chooseOccupation(ev: any) {
    console.log(ev);
    this.occupationVal = ev.detail.value
  }
  dobChanged(value) {
    this.dateofbirth = value;
    this.showPickerdob = false;
  }

  openPIP() {
    if (this.PIPStatus == true) {
      this.PIPStatus = false;
    } else {
      this.PIPStatus = true;
    }
  }

  selectPIPType(list) {
    this.PIPVal = list.value;
    this.PIPStatus = false;
  }
  openCornerstoneList() {
    if (this.CornerstoneStatus == true) {
      this.CornerstoneStatus = false;
    } else {
      this.CornerstoneStatus = true;
    }
  }

  selectCornerstoneType(list) {
    this.CornerstoneVal = list.value;
    this.CornerstoneStatus = false;
  }
  openOption() {
    if (this.pregnantStatus == true) {
      this.pregnantStatus = false;
    } else {
      this.pregnantStatus = true;
    }
  }
  selectoptionType(list) {
    this.PVal = list.value;
    this.pregnantStatus = false;
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

  selectFile(event, type) {
    console.log('type --- ', type);
    console.log('linceise --- ', event.target.files[0]);

    this.getBase64(event.target.files[0])
      .then((data) => {
        let file = event.target.files[0];
        let base64 = data as string;
        if (type == 'driverLicence') {
          this.driverLicence.file = file;
          this.driverLicence.base64 = base64;
        } else if (type == 'utilityBills') {
          this.utilityBills.file = file;
          this.utilityBills.base64 = base64;
        }
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

  createProposal() {

    // if (this.fullname == '') {
    //   this.api.presenttoast('Full Name required')

    // } else if (this.address == '') {
    //   this.api.presenttoast('Address is required');
    // }
    // else if (this.genderVal == 'Please Select') {
    //   this.api.presenttoast('Gender is required');
    // }
    // else if (this.maritalVal == 'Please Select') {
    //   this.api.presenttoast('Marital value is required');
    // }
    // else if (this.occupationVal == '') {
    //   this.api.presenttoast('occupation is required');
    // }
    // else if (this.dateofbirth == 'Please Select') {
    //   this.api.presenttoast('Date of Birth is required');
    // }
    // else if (this.PIPVal == 'Please Select') {
    //   this.api.presenttoast('previous insurance policy is required');
    // }
    // else if (this.CornerstoneVal == 'Please Select') {
    //   this.api.presenttoast('Choose Cornerstone option is required');
    // }
    // else if (this.B1 == '') {
    //   this.api.presenttoast('Beneficiary 1 is required');
    // }
    // else if (this.rel == '') {
    //   this.api.presenttoast('Relationship is required of Beneficiary 1');
    // }
    // else if (this.proportion == '') {
    //   this.api.presenttoast('proportion is required of Beneficiary 1');
    // }
    // else if (this.hospitalname == '') {
    //   this.api.presenttoast('hospitalname is required');
    // }
    // else if (this.hospitaladdress == '') {
    //   this.api.presenttoast('hospitaladdress is required');
    // }
    // else if (this.height == '') {
    //   this.api.presenttoast('height is required');
    // }
    // else if (this.weight == '') {
    //   this.api.presenttoast('weight is required');
    // }
    // else if (this.Alcohol == '') {
    //   this.api.presenttoast('Alcohol is required');
    // }
    // else if (this.Tobacco == '') {
    //   this.api.presenttoast('Tobacco is required');
    // }
    // else if (this.Narcotics == '') {
    //   this.api.presenttoast('Narcotics is required');
    // }
    // else if (this.PVal == 'Please Select') {
    //   this.api.presenttoast('Choose are you currently pregnant?');
    // }
    // else if (this.driverLicence.file == '') {
    //   this.api.presenttoast('Driver License/N.I.C required')

    // }
    // else if (
    //   this.utilityBills.file == '') {
    //   this.api.presenttoast('Utility Bill required')

    // } else if (this.referrerVal == 'Please Select') {
    //   this.api.presenttoast('Please Select Referrer')

    // } else if (this.referrerData == '') {
    //   this.api.presenttoast('Referrer Details required')

    // } else {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    console.log(this.draftArr);

    for (var i = 0; i < this.draftArr.length; i++) {
      var product_id = this.draftArr[i].product_id;
      if (this.draftArr[i].quote_id == '' || this.draftArr[i].quote_id == undefined) {
        var quote_id = this.dummyquoteid;
      } else {
        var quote_id = this.draftArr[i].quote_id;
      }

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
          path: '/ivpayment',
          datetime: new Date().toISOString(),
        };

        this.draftArr.push(obj);
      }
    }

    localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
    this.navCtrl.navigateRoot('ivpayment');
    // }

  }

}
