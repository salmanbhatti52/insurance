import { Location } from '@angular/common';
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
  valOfVehicle = '';
  // show1 = false;
  showPlan = false;
  showVehicle = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;
  showFloodExt = false;
  showExcessBuyBack = false;
  showVehicleTracking = false;
  showRoadSide = false;

  roadSideVal = 'Please Select';
  vehicleVal = 'Please Select';
  vehicleMakeVal = 'Please Select';
  policyhldrVal = 'Please Select';
  vehicleModelVal = 'Please Select';
  floodExtVal ='Please Select';
  excessBuyBackVal ='Please Select';
  vehicleTrackingVal ='Please Select';
  autoPlanVal = 'Please Auto Plan';
  vehicleClass: any;

  eCcarClasses:any;
  vehicleMake: any;
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType: 'Corporate' }]
  vehicleModel: any;
  floodExtValues = [{floodExt:'Yes'},{floodExt:'No'}]
  ExcessBuyBack = [{excessByBack:'Yes'},{excessByBack:'No'}]
  vehicleTrackingValues = [{vehicleTrack:'Yes'},{vehicleTrack:'No'}]
  autoPlansOfChoice = [{autoPlan:'Auto Compact (2%) (Third Party Fire & Theft)'},{autoPlan: 'Auto Bronze (2.5%)'},{autoPlan:'Auto Silver (3%)'},{autoPlan:'Auto Gold (3.5%)'},{autoPlan:'Auto Platinum (4%)'}]
  roadSideAssistance = [{roadSide:'Yes'},{roadSide:'No'}]
  

  // valuetype = 'Third Party';
  constructor(public router: Router,
    public api: InsuranceAppService,
    public location: Location) { }

  ngOnInit() {
    this.getCarVehicleTypeCls();
    this.getCarMakeCompanies();
  }

  goback() {
    this.location.back()
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

  getCarVehicleTypeCls() {
    if(this.value == 'Third Party'){
      let myData = "myData={\"verify_token\":\"" + localStorage.getItem('token') + "\",\"product_class\":\"vehicle_class_thirdparty\",\"method\":\"get_car_classes\"}"
      this.api.insertData(myData).subscribe((res: any) => {
        console.log(res);
        if (res.values != "") {
          this.vehicleClass = res.values;
          console.log(this.vehicleClass);

        }

      }, (err) => {
        console.log(err);

      })
    }
    else if(this.value == 'Enhanced Comprehensive'){
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
    else if(this.value == 'Auto Variants'){

    }
    else{

    }
    
  }
  getCarMakeCompanies() {
    let myData = "myData={\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"get_car_companies\"}"
    this.api.insertData(myData).subscribe((res: any) => {
      console.log(res);
      if (res.values != "") {
        this.vehicleMake = res.values;
        console.log(this.vehicleMake);

      }

    }, (err) => {
      console.log(err);

    })
  }
  getVehicleModels() {
    let myData = "myData={\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"get_car_models\",\"manufacturer\":\"" + this.vehicleMakeVal + "\"}"
    this.api.insertData(myData).subscribe((res: any) => {
      console.log(res);
      if (res.values != "") {
        this.vehicleModel = res.values;
        console.log(this.vehicleModel);

      }

    }, (err) => {
      console.log(err);

    })
  }
  openRoadSideAssistance() {
    if (this.showRoadSide == true) {
      this.showRoadSide = false
    } else {
      this.showRoadSide = true;

    }
  }
  openAutoPlanList() {
    if (this.showPlan == true) {
      this.showPlan = false
    } else {
      this.showPlan = true;

    }
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

  openPolicyhldrList() {
    if (this.showPolicyholder == true) {
      this.showPolicyholder = false
    } else {
      this.showPolicyholder = true;

    }
  }

  opnenVehicleModelList() {
    if (this.showVehicleModel == true) {
      this.showVehicleModel = false
    } else {
      this.showVehicleModel = true;

    }
  }

  opnenVehicleUsageList() {
    if (this.showVehicleUsage == true) {
      this.showVehicleUsage = false
    } else {
      this.showVehicleUsage = true;

    }
  }
  openExcessBuyBack() {
    if (this.showExcessBuyBack == true) {
      this.showExcessBuyBack = false
    } else {
      this.showExcessBuyBack = true;

    }
  }
  openFloodExtension() {
    if (this.showFloodExt == true) {
      this.showFloodExt = false
    } else {
      this.showFloodExt = true;

    }
  }
  openVehicleTracking() {
    if (this.showVehicleTracking == true) {
      this.showVehicleTracking = false
    } else {
      this.showVehicleTracking = true;

    }
  }
  selectRoadSideAssistance(list) {
    this.roadSideVal= list.roadSide;
    this.showRoadSide = false;
  }
  selectVehicleTracking(list) {
    this.vehicleTrackingVal= list.vehicleTrack;
    this.showVehicleTracking = false;
  }
  selectAutoPlan(list) {
    this.autoPlanVal= list.autoPlan;
    this.showPlan = false;
  }
  selectFloodExt(list) {
    this.floodExtVal= list.floodExt;
    this.showFloodExt = false;
  }
  selectExcessBuyBack(list) {
    this.excessBuyBackVal= list.excessByBack;
    this.showExcessBuyBack = false;
  }
  selectVehicleCls(list) {
    this.vehicleVal = list;
    this.showVehicle = false;
  }

  selectVehicleMaker(list) {
    this.vehicleMakeVal = list.manufacturer;
    this.vehicleModelVal = '';
    this.showMaker = false;
    this.getVehicleModels();
  }

  selectPolicyholder(list) {
    this.policyhldrVal = list.plcyhldrType;
    this.showPolicyholder = false;
  }

  selectVehicleModel(list) {
    this.vehicleModelVal = list.model;
    this.showVehicleModel = false;
  }

  thirdPartyQ() {
    if (this.vehicleVal == 'Please Select') {
      this.api.presenttoast('Vehicle Class required')
    }
    else if (this.vehicleMakeVal == 'Manufacturer') {
      this.api.presenttoast('Vehicle Make required')
    }
    else if (this.vehicleModelVal == 'Select Model') {
      this.api.presenttoast('Vehicle Model required')
    }
    else if (this.policyhldrVal == 'Please Select') {
      this.api.presenttoast('Policyholder Type required');
    }
    else if (this.policyhldrVal == 'Private') {
      console.log('private');
        if (this.fName == '') {

          this.api.presenttoast('First Name required')
        }
        else if (this.lName == '') {
          this.api.presenttoast('Last Name required')
        }
        else if (this.userEmail == '') {
          console.log('not private');
          this.api.presenttoast('Email Address required')
        }
        else if (this.mobNumber == '') {
          this.api.presenttoast('Phone Number required')
        }
        else {
          this.thirdPartyApi()
        }
    }
    else if (this.policyhldrVal == 'Corporate') {

      if (this.compName == '') {

        this.api.presenttoast('company Name required')
      } else if (this.userEmail == '') {
        console.log('not private');
        this.api.presenttoast('Email Address required')
      }
      else if (this.mobNumber == '') {
        this.api.presenttoast('Phone Number required')
      }
      else {
        this.thirdPartyApi();
      }
    }
  }

  thirdPartyApi() {
    let myData = "myData={\r\n    \"product_id\":\"" + localStorage.getItem('subProId') + "\",\r\n    \"vehicle_class\":\"" + this.vehicleVal + "\",\r\n    \"first_name\": \"" + this.fName + "\",\r\n    \"last_name\":\"" + this.lName + "\",\r\n    \"vehicle_manufacturer\":\"" + this.vehicleMakeVal + "\",\r\n    \"vehicle_model\":\"" + this.vehicleModelVal + "\",\r\n    \"policyholder_type\":\"" + this.policyhldrVal + "\",\r\n    \"mobile\":\"" + this.mobNumber + "\",\r\n    \"company_name\":\"" + this.compName + "\",\r\n    \"email\":\"" + this.userEmail + "\",\r\n    \"verify_token\":\"" + localStorage.getItem('token') + "\",\r\n    \"method\": \"save_product_quote\" \r\n}"
    this.api.insertData(myData).subscribe((data: any) => {
      console.log(data);
      if (data.message == 'success') {
        this.api.presenttoast(data.info.message);
        localStorage.setItem('product_id', data.info.product_id);
        localStorage.setItem('quote_id', data.info.quote_id);
        localStorage.setItem('subProName', data.info.product_name);
        console.log(localStorage.getItem('product_id'));
        console.log(localStorage.getItem('quote_id'));
        console.log(localStorage.getItem('subProName'));
        localStorage.setItem('thirdPartyQuoteItems', JSON.stringify(data.quoteItems))
        this.router.navigate(['/yourquote']);
      }
    })
  }
  // -------------------Third Party Done-------------------------------
  enhancedCompQ(){
    if (this.vehicleVal == 'Please Select') {
      this.api.presenttoast('Vehicle Class required')
    }
    else if (this.vehicleMakeVal == 'Manufacturer') {
      this.api.presenttoast('Vehicle Make required')
    }
    else if (this.vehicleModelVal == 'Select Model') {
      this.api.presenttoast('Vehicle Model required')
    }
    else if (this.policyhldrVal == 'Please Select') {
      this.api.presenttoast('Policyholder Type required');
    }
    else if (this.policyhldrVal == 'Private') {
      console.log('private');
      if (this.policyhldrVal == 'Private') {
        if (this.fName == '') {

          this.api.presenttoast('First Name required')
        }
        else if (this.lName == '') {
          this.api.presenttoast('Last Name required')
        }
        else if (this.userEmail == '') {
          console.log('not private');
          this.api.presenttoast('Email Address required')
        }
        else if (this.mobNumber == '') {
          this.api.presenttoast('Phone Number required')
        }
        else if (this.valOfVehicle == ''){
          this.api.presenttoast('Value of vehicle required')
        }
        else if (this.floodExtVal == 'Please Select'){
          this.api.presenttoast('Value of Flood Extension required')
        }
        else if (this.excessBuyBackVal == 'Please Select'){
          this.api.presenttoast('Value of Excess Buy Back required')
        }
        else if (this.vehicleTrackingVal == 'Please Select'){
          this.api.presenttoast('Value of Vehicle Tracking required')
        }
        else {
          this.enhancedCompApi();
        }
      }
    }
    else if (this.policyhldrVal == 'Corporate') {

      if (this.compName == '') {

        this.api.presenttoast('company Name required')
      } else if (this.userEmail == '') {
        console.log('not private');
        this.api.presenttoast('Email Address required')
      }
      else if (this.mobNumber == '') {
        this.api.presenttoast('Phone Number required')
      }
      else if (this.valOfVehicle == ''){
        this.api.presenttoast('Value of vehicle required')
      }
      else if (this.floodExtVal == 'Please Select'){
        this.api.presenttoast('Value of Flood Extension required')
      }
      else if (this.excessBuyBackVal == 'Please Select'){
        this.api.presenttoast('Value of Excess Buy Back required')
      }
      else if (this.vehicleTrackingVal == 'Please Select'){
        this.api.presenttoast('Value of Vehicle Tracking required')
      }
      else {
        this.enhancedCompApi();
      }
    }
  }

  enhancedCompApi() {
    let myData = "myData={\"product_id\":\""+localStorage.getItem('subProId')+"\",\"vehicle_class\":\""+this.vehicleVal+"\",\"vehicle_manufacturer\":\""+this.vehicleMakeVal+"\", \"vehicle_model\":\""+this.vehicleModelVal+"\", \"first_name\":\""+this.fName+"\", \"last_name\":\""+this.lName+"\",\r\n\"policyholder_type\":\""+this.policyhldrVal+"\", \"mobile\":\""+this.mobNumber+"\", \"company_name\": \""+this.compName+"\", \"email\":\""+this.userEmail+"\", \"value_of_vehicle\":\""+this.valOfVehicle+"\", \"flood_extension\":\""+this.floodExtVal+"\", \"excess_buy_back\":\""+this.excessBuyBackVal+"\", \"vehicle_tracking\":\""+this.vehicleTrackingVal+"\", \"verify_token\":\""+localStorage.getItem('token')+"\",\"method\":\"save_product_quote\"}"
    this.api.insertData(myData).subscribe((data:any)=>{
      console.log(data);

      if(data.message=='success'){
        this.api.presenttoast(data.info.message);
        localStorage.setItem('enhancedCompProdId', data.info.product_id);
        localStorage.setItem('enhancedCompQuoteId', data.info.quote_id);
        localStorage.setItem('subProName', data.info.product_name);
        console.log(localStorage.getItem('enhancedCompProdId'));
        console.log(localStorage.getItem('enhancedCompQuoteId'));
        console.log(localStorage.getItem('subProName'));
        localStorage.setItem('enhancedCompQuoteItems', JSON.stringify(data.quoteItems))
        this.router.navigate(['/yourquote']);
        
      }else{
        this.api.presenttoast(data.message);
      }
    },(err)=>{
      console.log(err);
      
    })
  }
}
