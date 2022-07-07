import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.page.html',
  styleUrls: ['./quote1.page.scss'],
})
export class Quote1Page implements OnInit {
  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  compName = '';
  valOfVehicle = '';

  show = false;
  showAutoPlan = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;
  showTPdagmage = false;
  showPayFreq = false;
  showFloodExt = false;
  showExcessBuyBack = false;
  showStrikeRiot = false;
  showPassLiabili = false;
  

  paymentFrequencyVal = 'Please Select';
  autoPlanVal = 'Please Select';
  tPdamageVal = 'Please Select';
  vehicleMakeVal = 'Please Select';
  policyhldrVal = 'Please Select';
  vehicleModelVal = '';
  vehicleUsageVal = 'Personal';
  floodExtVal = 'Please Select';
  excessBuyBackVal = 'Please Select';
  strikeRiotVal = 'Please Select';
  passLiabilityVal = 'Please Select';
  

  vehicleMake:any;
  autoPlanList = [{autoPlan: 'Auto Classic(1.75% Of vehicle value)'},{autoPlan: 'Auto Plus(3% Of vehicle value)'},{autoPlan: 'Uber Classic(2.5% Of vehicle value)'}]
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType:'Corporate' }]
  vehicleModel:any;
  vehicleUsage = [{ usage: 'Personal'},{ usage: 'Personal'}]
  tPdamageValues = [{tpDamage: 'Yes'},{tpDamage: 'No'}]
  paymentFrequencies = [{pfreq: 'Once'},{pfreq: 'Twice'},{pfreq: 'Thrice'}]
  floodExtValues = [{floodExt:'Yes'},{floodExt:'No'}]
  ExcessBuyBack = [{excessByBack:'Yes'},{excessByBack:'No'}]
  StrikeRiotCivilCommotion = [{strikeRiot:'Yes'},{strikeRiot:'No'}]
  passengerLiability = [{passLiab:'Yes'},{passLiab:'No'}]
  constructor(public router:Router,
    public api:InsuranceAppService) { }

  ngOnInit() {
    this.getCarMakeCompanies();
    
  }
  ionViewWillEnter() {
    this.autoPlanVal = 'Select Auto Plan';
    this.vehicleMakeVal = 'Manufacturer';
    this.policyhldrVal = 'Please Select';
    this.vehicleModelVal = '';
    this.fName = '';
    this.lName = '';
    this.userEmail = '';
    this.mobNumber = '';
    this.compName = '';
    this.valOfVehicle = '';
    this.vehicleUsageVal = 'Personal';
    this.paymentFrequencyVal = 'Please Select';
    this.tPdamageVal = 'Please Select';
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
  openPassenger() {
    if (this.showPassLiabili == true) {
      this.showPassLiabili = false
    } else {
      this.showPassLiabili = true;

    }
  }
  openPaymentFrequency() {
    if (this.showPayFreq == true) {
      this.showPayFreq = false
    } else {
      this.showPayFreq = true;

    }
  }
  openExcessBuyBack() {
    if (this.showExcessBuyBack == true) {
      this.showExcessBuyBack = false
    } else {
      this.showExcessBuyBack = true;

    }
  }
  openStrikeRiot() {
    if (this.showStrikeRiot == true) {
      this.showStrikeRiot = false
    } else {
      this.showStrikeRiot = true;

    }
  }

  openFloodExtension() {
    if (this.showFloodExt == true) {
      this.showFloodExt = false
    } else {
      this.showFloodExt = true;

    }
  }
  openAutoPlan() {
    if (this.showAutoPlan == true) {
      this.showAutoPlan = false
    } else {
      this.showAutoPlan = true;

    }
  }

  openTPDamageValues() {
    if (this.showTPdagmage == true) {
      this.showTPdagmage = false
    } else {
      this.showTPdagmage = true;

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

  selectPassLiab(list) {
    this.passLiabilityVal= list.passLiab;
    this.showPassLiabili = false;
  }
  selectFloodExt(list) {
    this.floodExtVal= list.floodExt;
    this.showFloodExt = false;
  }
  selectExcessBuyBack(list) {
    this.excessBuyBackVal= list.excessByBack;
    this.showExcessBuyBack = false;
  }
  selectStrikeRiot(list) {
    this.strikeRiotVal= list.strikeRiot;
    this.showStrikeRiot = false;
  }
  selectPayFreq(list) {
    this.paymentFrequencyVal= list.pfreq;
    this.showPayFreq = false;
  }
  selectTpDamage(list) {
    this.tPdamageVal= list.tpDamage;
    this.showTPdagmage = false;
  }
  selectAutoPlan(list) {
    this.autoPlanVal= list.autoPlan;
    this.showAutoPlan = false;
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

  goback(){
    this.router.navigate(['/home-page-screen-after-login']);
  }

  
  continue(){
    if(this.autoPlanVal=='Select Auto Plan'){
      this.api.presenttoast('Auto Plan required')
    }
    else if(this.vehicleMakeVal=='Manufacturer'){
      this.api.presenttoast('Manufacturer required')
    }
    else if(this.vehicleModelVal==''){
      this.api.presenttoast('Model required')
    }
    else if(this.policyhldrVal=='Please Select'){
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
      else if(this.valOfVehicle == '' ){
        this.api.presenttoast('Value of vehicle required')
      }
      else if(this.tPdamageVal == 'Please Select'){
        this.api.presenttoast('Increase in third party property damage required')
      }
      else if(this.paymentFrequencyVal == 'Please Select'){
        this.api.presenttoast('PaymentFrequency required')
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
      else if(this.valOfVehicle == '' ){
        this.api.presenttoast('Value of vehicle required')
      }
      else if(this.tPdamageVal == 'Please Select'){
        this.api.presenttoast('Increase in third party property damage required')
      }
      else if(this.paymentFrequencyVal == 'Please Select'){
        this.api.presenttoast('PaymentFrequency required')
      }
      
        else{
          this.callingapi()
      }
      
        
      
    }
    
    
   
  }

  callingapi(){
    let myData = "myData={\r\n    \"product_id\":\""+localStorage.getItem('prod_id')+"\",\r\n    \"vehicle_class\":\""+this.autoPlanVal+"\",\r\n    \"first_name\": \""+this.fName+"\",\r\n    \"last_name\":\""+this.lName+"\",\r\n    \"vehicle_manufacturer\":\""+this.vehicleMakeVal+"\",\r\n    \"vehicle_model\":\""+this.vehicleModelVal+"\",\r\n    \"policyholder_type\":\""+this.policyhldrVal+"\",\r\n    \"mobile\":\""+this.mobNumber+"\",\r\n    \"company_name\":\""+this.compName+"\",\r\n    \"email\":\""+this.userEmail+"\",\r\n    \"verify_token\":\""+localStorage.getItem('token')+"\",\r\n    \"method\": \"save_product_quote\" \r\n}"
    this.api.insertData(myData).subscribe((data:any)=>{
      console.log(data);
      if(data.message=='success'){
        this.api.presenttoast(data.info.message);
        localStorage.setItem('product_id',data.info.product_id);
        localStorage.setItem('quote_id',data.info.quote_id);
        console.log(localStorage.getItem('product_id'));
        console.log(localStorage.getItem('quote_id'));
        
        this.router.navigate(['/car-insurance-details']);
      }
    })
  }
}
