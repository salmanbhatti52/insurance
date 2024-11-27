import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.page.html',
  styleUrls: ['./policy-details.page.scss'],
})
export class PolicyDetailsPage implements OnInit {
  policyCertificateUrl:any;
  transactionReceiptUrl:any;
  accountStatementUrl:any;
  transactionsHistory = [];
  pastPayments = [];
  nextPayments = [];

  constructor(public location:Location,public api:InsuranceAppService) { }

  ngOnInit() {
    this.policyCertificateUrl = localStorage.getItem('policyCertificate');
    this.transactionsHistory = JSON.parse(localStorage.getItem('transactionsHistory'));
    this.accountStatementUrl = localStorage.getItem('accountStatement');
    this.pastPayments = JSON.parse(localStorage.getItem('pastPayments'));
    this.nextPayments = JSON.parse(localStorage.getItem('pastPayments'));
    if(this.policyCertificateUrl){
      localStorage.removeItem('policyCertificate');
    }else if(this.transactionsHistory){
      localStorage.removeItem('transactionsHistory');
    }else if(this.accountStatementUrl){
      localStorage.removeItem('accountStatement');
    }else if(this.pastPayments || this.nextPayments){
      localStorage.removeItem('pastPayments');
      localStorage.removeItem('nextPayments');
    }
  }

  goback(){
    this.location.back();
  }

  fetchTransactionReceipt(refId:any){
    let data = {
      'verify_token': localStorage.getItem('token'),
      'method': 'getTransactionReceipt',
      'transRef': refId
    }
    this.api.showLoader();
    this.api.submitFormData(data).subscribe((res:any)=>{
      this.api.hideLoader();
      console.log('Fetch Trxns Receipt res: ',res);
      if(res.status_no==1){
        this.transactionsHistory = [];
        this.api.presenttoast(res.message);
        this.transactionReceiptUrl = res.receiptURL;
      }else{

      }
      
    },(err:any)=>{

    })
  }

}
