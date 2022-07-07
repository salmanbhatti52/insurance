import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Location } from '@angular/common';
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
  showEcVehicleClass = false;
  showVehicleTracking = false;
  

  eCvehicleClassVal = 'Please Select';
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
  vehicleTrackingVal = 'Please Select';
  

  vehicleMake:any;
  vehicleTrackingValues = [{vehicleTrack:'Yes'},{vehicleTrack:'No'}]
  autoPlanList = [{autoPlan: 'Auto Classic(1.75% Of vehicle value)'},{autoPlan: 'Auto Plus(3% Of vehicle value)'},{autoPlan: 'Uber Classic(2.5% Of vehicle value)'}]
  eCcarClasses:any;
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
    public api:InsuranceAppService,
    public location:Location) { }

  ngOnInit() {
    this.getCarMakeCompanies();
    this.getEcCarClasses();
    
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
    this.vehicleTrackingVal = 'Please Select';
    
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
  getEcCarClasses(){
    let myData = "myData={\"verify_token\":\""+localStorage.getItem('token')+"\",\"method\":\"get_car_classes\",\"product_class\":\"vehicle_class_enhanced_comprehensive\"}"
    this.api.insertData(myData).subscribe((res:any)=>{
     console.log(res);
    if(res.values!=""){
       this.eCcarClasses=res.values;
       console.log('Enhanced Comprehensive car classes==',this.eCcarClasses);
      
    }
     
    },(err)=>{
     console.log(err);
     
    })
  }

  openVehicleTracking() {
    if (this.showVehicleTracking == true) {
      this.showVehicleTracking = false
    } else {
      this.showVehicleTracking = true;

    }
  }
  openEcVehicleClass() {
    if (this.showEcVehicleClass == true) {
      this.showEcVehicleClass = false
    } else {
      this.showEcVehicleClass = true;

    }
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

  selectVehicleTracking(list) {
    this.vehicleTrackingVal= list.vehicleTrack;
    this.showVehicleTracking = false;
  }
  selectEcCarClass(list) {
    this.eCvehicleClassVal= list;
    this.showEcVehicleClass = false;
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
    this.location.back();
  }

  
  continue(){
    if(this.autoPlanVal=='Select Auto Plan'){
      this.api.presenttoast('Auto Plan required')
    }
    else if(this.eCvehicleClassVal=='Please Select'){
      this.api.presenttoast('Vehicle Class required')
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
    let myData = "myData={\"product_id\":\""+localStorage.getItem('subProId')+"\",\"vehicle_class\":\""+this.eCvehicleClassVal+"\",\"vehicle_manufacturer\":\""+this.vehicleMakeVal+"\", \"vehicle_model\":\""+this.vehicleModelVal+"\", \"first_name\":\""+this.fName+"\", \"last_name\":\""+this.lName+"\",\r\n\"policyholder_type\":\""+this.policyhldrVal+"\", \"mobile\":\""+this.mobNumber+"\", \"company_name\": \""+this.compName+"\", \"email\":\""+this.userEmail+"\", \"value_of_vehicle\":\""+this.valOfVehicle+"\", \"flood_extension\":\""+this.floodExtVal+"\", \"excess_buy_back\":\""+this.excessBuyBackVal+"\", \"vehicle_tracking\":\""+this.vehicleTrackingVal+"\", \"verify_token\":\""+localStorage.getItem('token')+"\",\"method\":\"save_product_quote\"}"
    this.api.insertData(myData).subscribe((data:any)=>{
      console.log(data);
      // if(data.message=='success'){
      //   this.api.presenttoast(data.info.message);
      //   localStorage.setItem('product_id',data.info.product_id);
      //   localStorage.setItem('quote_id',data.info.quote_id);
      //   console.log(localStorage.getItem('product_id'));
      //   console.log(localStorage.getItem('quote_id'));
        
      //   this.router.navigate(['/car-insurance-details']);
      // }
    },(err)=>{
      console.log(err);
      
    })
  }
}
