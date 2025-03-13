
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-quote-popup',
  templateUrl: './quote-popup.page.html',
  styleUrls: ['./quote-popup.page.scss'],
})
export class QuotePopupPage implements OnInit {
  imgPath: any;
  Insurace_name: any;
  prod_id: any;
  subProducts: any;
  productID: any;
  insurancename: any;
  motorsubproducts = [];
  policyId: any;
  showDropDown = false;
  arr1 = [];
  arr2 = [];
  arr3 = [];
  arr4 = [];
  arr5 = [];


  counter: any = 0;

  constructor(public router: Router,
    public modal: ModalController,
    public location: Location,
    public api: InsuranceAppService,
    public iab: InAppBrowser) { }

  ngOnInit() {


  }

  ionViewWillEnter() {

    const subproducts = [];
    const subProductsfilter = JSON.parse(localStorage.getItem('subProducts'));
    console.log(subProductsfilter);
    subProductsfilter.filter((value, index) => {

      if (value.name != "Travel Care Premier" && value.name != "Travel Care Visa") {
        subproducts.push(value);
      }
      if (value.name == 'Children Education Fund') {
        value.image = 'assets/images/investmentplans/4.png';
      } else if (value.name == 'iSave Plan') {
        value.image = 'assets/images/investmentplans/1.png';
      }
      this.subProducts = subproducts
      this.arr1 = this.subProducts;
    });

    this.productID = localStorage.getItem('productid');
    console.log('productid', this.productID);
    this.insurancename = localStorage.getItem('productName');
    console.log(this.insurancename);

  }

  showOptions(val: any) {
    if (this.policyId == val) {
      this.policyId = '';
    } else {
      this.policyId = val;
    }
  }

  downloadPolicyDoc(policyId: any) {
    this.policyId = '';
    let data = {
      'verify_token': localStorage.getItem('token'),
      'method': 'getPolicyCertificate',
      'policyId': policyId
    }
    this.api.showLoader();
    this.api.submitFormData(data).subscribe((res: any) => {
      this.api.hideLoader();

      console.log('Get Policy Doc Res: ', res);
      if (res.status_no == 1) {
        this.api.presenttoast(res.message);
        localStorage.setItem('policyCertificate', res.certificate_link);
        this.router.navigate(['policy-details']);
      } else {

      }

    }, (err: any) => {

    });

  }

  fetchPolicyTransactions(policyId: any) {
    this.policyId = '';
    let data = {
      'verify_token': localStorage.getItem('token'),
      'method': 'getTransactionHistoryForReceipt',
      'policyId': policyId
    }
    this.api.showLoader();
    this.api.submitFormData(data).subscribe((res: any) => {
      this.api.hideLoader();

      console.log('Get Policy Transactions Res: ', res);
      if (res.status_no == 1) {
        // this.api.presenttoast(res.message);
        localStorage.setItem('transactionsHistory', JSON.stringify(res.transactionHistory));
        this.router.navigate(['policy-details']);
      } else {

      }

    }, (err: any) => {

    });
  }

  downloadAccountStatement(policyId: any) {
    this.policyId = '';
    let data = {
      'verify_token': localStorage.getItem('token'),
      'method': 'getIESAccountStatement',
      'policyId': policyId
    }
    this.api.showLoader();
    this.api.submitFormData(data).subscribe((res: any) => {
      this.api.hideLoader();

      console.log('Get Account Statement Res: ', res);
      if (res.status_no == 1) {
        this.api.presenttoast(res.message);
        localStorage.setItem('accountStatement', res.accountStatementLink);
        this.router.navigate(['policy-details']);
      } else {
        this.api.presenttoast(res.message);
      }

    }, (err: any) => {

    });
  }

  getPastAndUpcomingPayments(policyId: any, repaymentStatus: any) {
    this.policyId = '';
    if (repaymentStatus == true) {
      let data = {
        'verify_token': localStorage.getItem('token'),
        'method': 'getTransactionHistory',
        'policyId': policyId
      }
      this.api.showLoader();
      this.api.submitFormData(data).subscribe((res: any) => {
        this.api.hideLoader();

        console.log('Get Policy Transactions History Res: ', res);
        if (res.status_no == 1) {
          // this.api.presenttoast(res.message);
          localStorage.setItem('nextPayments', JSON.stringify(res.nextPayment));
          localStorage.setItem('pastPayments', JSON.stringify(res.pastPayment));
          this.router.navigate(['policy-details']);
        } else {

        }

      }, (err: any) => {

      });
    } else {
      this.api.presenttoast('No new payments available for this policy.')
    }

  }


  goback() {

    if (this.counter <= 1) {
      this.location.back();
    } else {

      if (this.counter == 2) {
        this.subProducts = this.arr1;
      }
      if (this.counter == 3) {
        this.subProducts = this.arr2;
      }
      if (this.counter == 4) {
        this.subProducts = this.arr3;
      } if (this.counter == 5) {
        this.subProducts = this.arr4;
      }
      this.counter--;
    }
    console.log('this.counter--', this.counter);

  }
  dismiss() {
    this.modal.dismiss();
  }

  subProductsshow(id) {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe((res: any) => {
      const subproducts = [];
      console.log('subProducts---------11111', res);
      res.subproducts.map((value, index) => {
        if (value.name != "Travel Care Premier" && value.name != "Travel Care Visa") {
          subproducts.push(value);
        }
        // subproducts.push(value);
      });
      console.log('subproducts after check---22', subproducts);
      this.counter++;
      console.log('this.counter++', this.counter);
      if (this.counter == 1) {
        this.arr1 = subproducts;
      }
      if (this.counter == 2) {
        this.arr2 = subproducts;
      }
      if (this.counter == 3) {
        this.arr3 = subproducts;
      }
      if (this.counter == 4) {
        this.arr4 = subproducts;
      } if (this.counter == 5) {
        this.arr5 = subproducts;
      }
      // return;
      this.subProducts = subproducts;
      localStorage.setItem('subProducts', JSON.stringify(subproducts));

    }, (err) => {
      console.log(err);

    });
  }
  seeDetails(sp) {
    console.log(sp);
    if (sp.name == 'Local Travel Insurance') {
      localStorage.setItem('productid2', sp.id);
      this.router.navigate(['/localsubproduct']);
    } else {
      if (sp.product_for_quote == 1) {
        if (sp.name == 'Third Party') {
          // this.router.navigate(['/gibsproducts']);
          this.router.navigate(['/car-insurance-details']);
        } else {
          if (sp.name == 'Student Plan' || sp.name == 'Europe / Schengen' || sp.name == 'Travel Care Premier' || sp.name == 'Travel Care Visa') {
            this.router.navigate(['/mypolicies']);
          } else {
            // if(sp.parent_id !=27)
            localStorage.setItem('localtravel', JSON.stringify(sp));
            if (sp.name == 'Worldwide Family Cover') {
              const browser = this.iab.create(
                'https://cornerstone.com.ng/quotes/NjE=',
                '_system'
              );
            } else {
              this.router.navigate(['/internationalinformation']);
            }
          }
        }

        // this.router.navigate(['/mypolicies']);
        localStorage.setItem('subProId', sp.id);
        localStorage.setItem('subProName', sp.name);
      }
      else {
        this.subProductsshow(sp.id);
      }
    }

    // else {
    //   if (sp.name == 'Student Plan' || sp.name == 'Europe / Shengen') {
    //     this.router.navigate(['/mypolicies']);
    //   } else {
    //     localStorage.setItem('localtravel', JSON.stringify(sp));
    //     this.router.navigate(['/travelquote']);
    //   }


    // this.modal.dismiss(sp).then(data => {
    //   console.log('data came back from modal');
    //   console.log(data);
    // })
  }

  gibsproducts(sp) {
    localStorage.setItem('subProName', sp);
    this.router.navigate(['/gibsproducts']);
  }

  handleImgError(ev: any, item: any, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/placeholder.jpg`;
    source.src = imgSrc;
  }

}
