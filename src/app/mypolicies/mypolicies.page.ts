import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mypolicies',
  templateUrl: './mypolicies.page.html',
  styleUrls: ['./mypolicies.page.scss'],
})
export class MypoliciesPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType: any;
  value = localStorage.getItem('subProName');
  show = false;
  box = 'unchecked'

  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  compName = '';

  // show1 = false;
  showVehicle = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;

  vehicleVal = 'Please Select';
  vehicleMakeVal = 'Please Select';
  policyhldrVal = 'Please Select';
  vehicleModelVal = 'Please Select';
  vehicleUsageVal = 'Personal';
  
  vehicleClass:any;
  vehicleMake:any;
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType:'Corporate' }]
  vehicleModel:any;
  vehicleUsage = [{ usage: 'Personal'},{ usage: 'Personal'}]
  constructor(public router:Router,
    public api:InsuranceAppService) { }

  ngOnInit() {
    this.getCarVehicleTypeCls();
    this.getCarMakeCompanies();
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'PurchasePolicies') {
        this.mySegment.nativeElement.children[0].click();

      }
      if (this.requestsType === 'InvestmentPlan') {
        this.mySegment.nativeElement.children[1].click();

      }
    } else {
      this.requestsType = 'PurchasePolicies';
      this.mySegment.nativeElement.children[0].click();

    }
    this.vehicleVal = 'Please Select';
    this.vehicleMakeVal = 'Manufacturer';
    this.policyhldrVal = 'Please Select';
    this.vehicleModelVal = 'Select Model';
    this.fName = '';
    this.lName = '';
    this.userEmail = '';
    this.mobNumber = '';
    this.compName = '';
  }

  motorInsurance(){
    let myData = "myData={\"verify_token\":\""+localStorage.getItem('token')+"\",\"product_id\":\"1\",\"method\":\"get_avilable_subproducts\"}"
  }

  segmentChanged(ev) {
    console.log('requestType value', ev.detail.value);
    let data = ev.detail.value;
    this.requestsType = data
    if (ev.detail.value === 'PurchasePolicies') {
      this.requestsType = 'PurchasePolicies';

    }
    if (ev.detail.value === 'InvestmentPlan') {
      this.requestsType = 'InvestmentPlan';
    }
    localStorage.setItem('requestType', this.requestsType);
  }

  checktype(type) {
    this.value = type
  }

  showdiv() {
    if (this.show == false) {
      this.show = true;

    } else {
      this.show = false;
    }
  }

  changed() {
    if (this.box == 'checked') {
      this.box = 'unchecked'
    }
    else {
      this.box = 'checked'
    }
  }
  getQuote(){
    this.router.navigate(['/quote1']);
  }
  // -----------------Third Party---------------------------

  getCarVehicleTypeCls(){
    let myData = "myData={\"verify_token\":\""+localStorage.getItem('token')+"\",\"product_class\":\"vehicle_class_thirdparty\",\"method\":\"get_car_classes\"}"
    this.api.insertData(myData).subscribe((res:any)=>{
     console.log(res);
     if(res.values!=""){
      this.vehicleClass=res.values;
      console.log(this.vehicleClass);
      
     }
     
    },(err)=>{
     console.log(err);
     
    })
  }
  getCarMakeCompanies(){
    let myData = "myData={\"verify_token\":\""+localStorage.getItem('token')+"\",\"method\":\"get_car_companies\"}"
    this.api.insertData(myData).subscribe((res:any)=>{
     console.log(res);
    if(res.values!=""){
       this.vehicleMake=res.values;
       console.log(this.vehicleMake);
       
    }
     
    },(err)=>{
     console.log(err);
     
    })
  }
  getVehicleModels(){
    let myData = "myData={\"verify_token\":\""+localStorage.getItem('token')+"\",\"method\":\"get_car_models\",\"manufacturer\":\""+this.vehicleMakeVal+"\"}"
    this.api.insertData(myData).subscribe((res:any)=>{
     console.log(res);
    if(res.values!=""){
       this.vehicleModel=res.values;
       console.log(this.vehicleModel);
      
    }
     
    },(err)=>{
     console.log(err);
     
    })
  }
  openVehicleList() {
    if (this.showVehicle == true) {
      this.showVehicle = false
    } else {
      this.showVehicle = true;

    }
  }

  openVhclMakeList() {
    if (this.showMaker == true) {
      this.showMaker = false
    } else {
      this.showMaker = true;

    }
  }

  openPolicyhldrList(){
    if (this.showPolicyholder == true) {
      this.showPolicyholder = false
    } else {
      this.showPolicyholder = true;

    }
  }

  opnenVehicleModelList(){
    if (this.showVehicleModel == true) {
      this.showVehicleModel = false
    } else {
      this.showVehicleModel = true;

    }
  }

  opnenVehicleUsageList(){
    if (this.showVehicleUsage == true) {
      this.showVehicleUsage = false
    } else {
      this.showVehicleUsage = true;

    }
  }

  selectVehicleCls(list) {
    this.vehicleVal= list;
    this.showVehicle = false;
  }

  selectVehicleMaker(list){
    this.vehicleMakeVal = list.manufacturer;
    this.vehicleModelVal = '';
    this.showMaker = false;
    this.getVehicleModels();
  }

  selectPolicyholder(list){
    this.policyhldrVal = list.plcyhldrType;
    this.showPolicyholder = false;
  }
  
  selectVehicleModel(list){
    this.vehicleModelVal = list.model;
    this.showVehicleModel = false;
  }
  selectVehicleUsage(list){
    this.vehicleUsageVal = list.usage;
    this.showVehicleUsage = false;
  }

  continue(){
    if(this.vehicleVal==''){
      this.api.presenttoast('Vehicle Type required')
    }
    else if(this.vehicleMakeVal==''){
      this.api.presenttoast('Vehicle Make required')
    }
    else if(this.vehicleModelVal==''){
      this.api.presenttoast('Vehicle Model required')
    }
    else if(this.policyhldrVal==''){
      this.api.presenttoast('Policyholder Type required');
      
    }
    else if(this.policyhldrVal == 'Private'){
     console.log('private');
     if(this.policyhldrVal=='Private'){
      if(this.fName == ''){

        this.api.presenttoast('First Name required')
      }
      else if(this.lName == ''){
        this.api.presenttoast('Last Name required')
      }
      else if(this.userEmail==''){
        console.log('not private');
        this.api.presenttoast('Email Address required')
      }
      else if(this.mobNumber==''){
        this.api.presenttoast('Phone Number required')
      } 
      else{
        this.callingapi()
      }
     }
     
      
      
      
    }
    else if(this.policyhldrVal=='Corporate'){
     
      if(this.compName == ''){

        this.api.presenttoast('company Name required')
      }else if(this.userEmail==''){
        console.log('not private');
        this.api.presenttoast('Email Address required')
      }
      else if(this.mobNumber==''){
        this.api.presenttoast('Phone Number required')
      } 
        else{
          this.callingapi();
      }
      
        
      
    }
    
    
   
  }

  callingapi(){
    let myData = "myData={\r\n    \"product_id\":\""+localStorage.getItem('subProId')+"\",\r\n    \"vehicle_class\":\""+this.vehicleVal+"\",\r\n    \"first_name\": \""+this.fName+"\",\r\n    \"last_name\":\""+this.lName+"\",\r\n    \"vehicle_manufacturer\":\""+this.vehicleMakeVal+"\",\r\n    \"vehicle_model\":\""+this.vehicleModelVal+"\",\r\n    \"policyholder_type\":\""+this.policyhldrVal+"\",\r\n    \"mobile\":\""+this.mobNumber+"\",\r\n    \"company_name\":\""+this.compName+"\",\r\n    \"email\":\""+this.userEmail+"\",\r\n    \"verify_token\":\""+localStorage.getItem('token')+"\",\r\n    \"method\": \"save_product_quote\" \r\n}"
    this.api.insertData(myData).subscribe((data:any)=>{
      console.log(data);
      if(data.message=='success'){
        this.api.presenttoast(data.info.message);
        localStorage.setItem('product_id',data.info.product_id);
        localStorage.setItem('quote_id',data.info.quote_id);
        console.log(localStorage.getItem('product_id'));
        console.log(localStorage.getItem('quote_id'));
        localStorage.setItem('quoteItems',JSON.stringify(data.quoteItems)) 
        this.router.navigate(['/yourquote']);
      }
    })
  }
  // -------------------Third Party Done-------------------------------
}
