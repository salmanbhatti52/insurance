import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import * as moment from 'moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-accident3',
  templateUrl: './accident3.page.html',
  styleUrls: ['./accident3.page.scss'],
})
export class Accident3Page implements OnInit {
  relationships: any = [
    { "relation": "ADOPTED DAUGHTER" },
    { "relation": "ADOPTED SON" },
    { "relation": "CHILD DAUGHTER" },
    { "relation": "CHILD SON" },
    { "relation": "DAUGHTER IN LAW" },
    { "relation": "FATHER IN LAW" },
    { "relation": "FIANCE" },
    { "relation": "FIANCEE" },
    { "relation": "GRAND DAUGHTER" },
    { "relation": "GRAND FATHER" },
    { "relation": "GRAND SON" },
    { "relation": "GRAND MOTHER" },
    { "relation": "MOTHER IN LAW" },
    { "relation": "PARENT MOTHER" },
    { "relation": "PARENT FATHER" },
    { "relation": "RELATIVE AUNT" },
    { "relation": "RELATIVE COUSIN" },
    { "relation": "RELATIVE NEPHEW" },
    { "relation": "RELATIVE NIECE" },
    { "relation": "RELATIVE UNCLE" },
    { "relation": "SIBLING BROTHER" },
    { "relation": "SIBLING SISTER" },
    { "relation": "SON IN LAW" },
    { "relation": "SPOUSE HUSBAND" },
    { "relation": "SPOUSE WIFE" },
    { "relation": "STEPMOTHER" },
    { "relation": "STEPFATHER" },
    { "relation": "STEPBROTHER" },
    { "relation": "STEPSISTER" },
    { "relation": "STEPDAUGHTER" },
    { "relation": "STEPSON" },
    { "relation": "TRUSTEE" }
  ];


  utilityBills = {
    file: '',
    base64: '',
  };
  driverLicence = {
    file: '',
    base64: '',
  };


  showReferrer = false;
  referrerVal = 'Please Select';

  fName = '';
  lName = '';
  reffernum = '';
  mobNumber = '';
  compName = '';
  showGender = false;
  genderVal = 'Please Select';
  genderType = [{ gender: 'Male' }, { gender: 'Female' }];


  MaritalStatus = false;
  maritalVal = 'Please Select';
  maritalType = [{ value: 'Widowed' }, { value: 'Divoced' }, { value: 'Married' }, { value: 'Single' }]

  occupationVal = '';

  occupation_type = '';
  showOccupaton_Cat = false

  occupation_type_arr_2: any



  n1 = '';
  r1 = '';
  p1 = '';

  n2 = '';
  r2 = '';
  p2 = '';

  n3 = '';
  r3 = '';
  p3 = '';

  n4 = '';
  r4 = '';
  p4 = '';

  n5 = '';
  r5 = '';
  p5 = '';

  n6 = '';
  r6 = '';
  p6 = '';










  dob = '';

  address = '';

  B1 = '';
  rel = '';
  proportion = '';

  valOfVehicle = '';
  showPlan = false;
  showTitle = false;
  showAgeGroup = false;
  referrerList: any;


  dateofbirth = format(new Date(), 'yyyy-MM-dd');
  showPickerdob = false;
  pep_category: any;

  constructor(public api: InsuranceAppService,
    public router: Router,
    public location: Location,
    private http: HttpClient

  ) { }



  ngOnInit() {
    // this.get_beneficiary_relationship_FUN()
    this.getReferrerList()
    console.log('new Date().toISOString()===', new Date().toISOString());


    this.mobNumber = localStorage.getItem('number');
  }


  ionViewWillEnter() {


    this.fName = localStorage.getItem('fname') + ' ' + localStorage.getItem('lname');
    this.lName = localStorage.getItem('lname');

    this.compName = '';


  }


  goback() {
    this.location.back();
  }


  // get_beneficiary_relationship_FUN() {

  //   let myDataCovers =
  //     'myData= {"verify_token":"' +
  //     localStorage.getItem('token') +
  //     '","method":"get_beneficiary_relationship"}';

  //   this.api.insertData(myDataCovers).subscribe(
  //     (data: any) => {
  //       console.log('get_beneficiary_relationship_FUNs----', data);

  //       if (data.status == 1) {
  //         //ali

  //         this.relationships = data.relationships
  //         // this.router.navigate(['/accident2']);
  //       } else {
  //         this.api.presenttoast(data.message);
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }


  openGenderList() {
    if (this.showGender == true) {
      this.showGender = false;
    } else {
      this.showGender = true;
    }
  }
  selectGenderType(list) {
    this.genderVal = list.gender;
    this.showGender = false;
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
  chooseOccupation(ev: any, name: any) {
    console.log(ev);
    console.log('name---------', name);
    this.occupationVal = ev.detail.value
    this.pep_occupations(this.occupationVal)


  }


  occupationCC(pep: any) {
    console.log('pep--------', pep)
    var nn = pep.name
    if (nn == 'Military' ||
      nn == 'Judiciary' ||
      nn == 'Private Sector Service' ||
      nn == 'Public/Government Sector' ||
      nn == 'Individual Business'
    ) {
      this.showOccupaton_Cat = true
      // this.occupation_type_arr_2 = this.getOccupationsByValue(Number(this.occupationVal))
    } else {
      this.showOccupaton_Cat = false
    }
  }



  pep_occupations(id: any) {

    this.pep_category = id

    let myDataCovers =
      'myData= {"verify_token":"' + localStorage.getItem('token') +
      '", "pep_category_id":"' + id +
      '","method":"pep_occupations"}';

    this.api.insertData(myDataCovers).subscribe(
      (data: any) => {
        console.log('data response for products----', data);

        if (data.status == 1) {
          //ali

          this.occupation_type_arr_2 = data.occupations
          console.log('goto')

        } else {
          this.api.presenttoast(data.message);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }







  selectFile(event, type) {
    console.log('type --- ', type);
    console.log('linceise --- ', event.target.files[0]);

    this.getBase64(event.target.files[0])
      .then((data) => {
        let file = event.target.files[0];
        let base64 = data as string;
        if (type == 'utilityBills') {
          this.utilityBills.file = file;
          this.utilityBills.base64 = base64;
        } else if (type == 'driverLicence') {
          this.driverLicence.file = file;
          this.driverLicence.base64 = base64;
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


  validateThirdParty() {
    const response = { message: 'message', status: false };

    if (this.fName == '') {
      response.message = 'Name required';
    } else if (this.mobNumber == '') {
      response.message = 'Phone Number required';
    } else {
      response.message = 'Third party validated';
      response.status = true;
    }

    return response;
  }

  createQuote(quoteType) {
    console.log('quoteType---', quoteType);


    let myData = '';

    var benificiaryArr = []

    if (this.n1) {
      let obj1 = {
        name: this.n1,
        relationship: this.r1,
        benefit_proportion: this.p1
      }
      benificiaryArr.push(obj1)
    }


    if (this.n2) {
      let obj2 = {
        name: this.n2,
        relationship: this.r2,
        benefit_proportion: this.p2
      }
      benificiaryArr.push(obj2)
    }


    if (this.n3) {
      let obj3 = {
        name: this.n3,
        relationship: this.r3,
        benefit_proportion: this.p3
      }
      benificiaryArr.push(obj3)
    }


    if (this.n4) {
      let obj4 = {
        name: this.n4,
        relationship: this.r4,
        benefit_proportion: this.p4
      }
      benificiaryArr.push(obj4)
    }



    if (this.n5) {
      let obj5 = {
        name: this.n5,
        relationship: this.r5,
        benefit_proportion: this.p5
      }
      benificiaryArr.push(obj5)
    }



    if (this.n6) {
      let obj6 = {
        name: this.n6,
        relationship: this.r6,
        benefit_proportion: this.p6
      }
      benificiaryArr.push(obj6)
    }

    let formValidationResult = this.validateThirdParty();



    const headers = new HttpHeaders();
    var form = new FormData();

    form.append('product_id', '62');
    form.append('quote_id', this.api.accident_quote_id);

    form.append('name', this.fName);
    form.append('address', this.address);
    form.append('gender', this.genderVal);
    form.append('vehicle_licence', this.driverLicence.file);
    form.append('utility_bill', this.utilityBills.file);
    form.append('referred_by', this.referrerVal);
    form.append('referrer_details', this.reffernum);
    form.append('pep_category', this.pep_category);
    form.append('occupation', this.occupationVal);
    form.append('date_of_birth', this.dateofbirth);
    form.append('marital_status', this.maritalVal);
    form.append('personal_accident_cover', this.api.accidentcovers_val);
    form.append('benificiary', JSON.stringify(benificiaryArr));



    form.append('verify_token', localStorage.getItem('token'));
    form.append('method', 'save_product_proposal');





    if (formValidationResult.status) {
      // --- Calling API To create quote --- //

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
          (data: any) => {
            console.log('data response for products----', data);


            this.api.accidentProduct = data

            if (data.status_no == 1) {
              //ali


              this.api.presenttoast(data.message);

              this.router.navigate(['/accident4']);



            } else {
              this.api.presenttoast(data.message);
            }
          },
          (err) => {
            console.log(err);
          }
        );
      // --- Calling API To create quote --- //
    } else {
      this.api.presenttoast(formValidationResult.message);
    }
  }


  dobChanged(value) {
    this.dateofbirth = moment(value).format('yyyy-MM-DD');
    this.showPickerdob = false;
  }

}
