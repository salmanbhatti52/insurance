import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-car-insurance-details',
  templateUrl: './car-insurance-details.page.html',
  styleUrls: ['./car-insurance-details.page.scss'],
})
export class CarInsuranceDetailsPage implements OnInit {
  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  compName = '';
  imgURL='';
  imgURL1='';
  dobValue = format(new Date(), 'yyyy-MM-dd');
  corpValue = format(new Date(), 'yyyy-MM-dd');
  yopValue = format(new Date(), 'yyyy');
  yomValue = format(new Date(), 'yyyy');
  
  
  showReferrer = false;
  showPickerYop = false;
  showPickerYom = false;
  showPickerDob = false;
  showPickerCorp = false;
  show = false;
  showVehicle = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;
  showGender = false;


  vehicleVal = '';
  vehicleMakeVal = '';
  policyhldrVal = '';
  vehicleModelVal = '';
  vehicleUsageVal = 'Personal';
  genderVal = 'Please Select';
  referrerVal='Please Select';


  genderType = [{gender: 'Male'},{gender: 'Female'}]
  vehicleClass = [{ vehicle: 'Cars/Sedan/SUV' }]
  vehicleMake = [{ vMake : 'Acura'},{vMake : 'Acura'}]
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType:'Corporate' }]
  vehicleModel = [{ vModel : 'EL'},{ vModel : 'EL'}]
  vehicleUsage = [{ usage: 'Personal'},{ usage: 'Personal'}]
  referrerList = [{referrer:'Friend'},{referrer:'Email'}]
  constructor(public router:Router,
    public api:InsuranceAppService,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    console.log(this.dobValue);
    console.log(this.corpValue);
    console.log(this.yopValue);
    console.log(this.yomValue);
    
  }
  ionViewWillEnter() {
    this.vehicleVal = '';
    this.vehicleMakeVal = '';
    this.policyhldrVal = '';
    this.vehicleModelVal = '';
    this.fName = '';
    this.lName = '';
    this.userEmail = '';
    this.mobNumber = '';
    this.compName = '';
  }
  dobChanged(value){
    this.dobValue=value;
    console.log(this.dobValue);
    
    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPickerDob = false;
  }
  corpChanged(value){
    this.corpValue=value;
    console.log(this.corpValue);
    
    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPickerCorp = false;
  }

  yopChanged(value){
    this.yopValue=value;
    console.log(this.yopValue);
    
    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPickerYop = false;
  }
  yomChanged(value){
    this.yomValue=value;
    console.log(this.yomValue);
    
    // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
    this.showPickerYom = false;
  }
  openGenderList(){
    if (this.showGender == true) {
      this.showGender = false
    } else {
      this.showGender = true;

    }
  }

  openReferrerList(){
    if (this.showReferrer == true) {
      this.showReferrer = false
    } else {
      this.showReferrer = true;

    }
  }

  
  selectGenderType(list){
    this.genderVal= list.gender;
    this.showGender = false;
  }
  selectReferrerType(list){
    this.referrerVal= list.referrer;
    this.showReferrer = false;
  }
  
  async camera2(source,imgetype) {
    console.log('yyyyyy==',imgetype);
    
    var options: ImageOptions = {
      source: source,

      resultType: CameraResultType.DataUrl
    }
    const image = await Camera.getPhoto(options); 
    console.log(image.dataUrl);
    if(imgetype=='license')
    this.imgURL=image.dataUrl
    if(imgetype=='nic')
    this.imgURL1=image.dataUrl
    // url = ' https://eigix.net/morlaApp/api';
    let imgData = {
      image: this.imgURL
    }
    // //folder url: https://eigix.net/morlaApp/storage/app/public/
    // this.api.insertData('upload_img/'+this.userID, imgData,localStorage.getItem('token')).subscribe((res:any)=>{
    //   console.log('res==',res);
    //   if(res.status=='sucess'){
    //     localStorage.setItem('imgdata',res.data);
    //   }
    // })

  }
  
  async selectImage(imagefile) {

    let imgtype=imagefile
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.camera2(CameraSource.Photos,imgtype);
        }
      },
      // {
      //   text: 'Use Camera',
      //   handler: () => {
      //     this.camera2(CameraSource.Camera);
      //   }
      // },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  goback(){
    this.router.navigate(['/home-page-screen-after-login']);
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
          this.callingapi()
      }
      
        
      
    }
    
    
   
  }

  callingapi(){
    let myData = "myData={\r\n    \"product_id\":\""+localStorage.getItem('prod_id')+"\",\r\n    \"vehicle_class\":\""+this.vehicleVal+"\",\r\n    \"first_name\": \""+this.fName+"\",\r\n    \"last_name\":\""+this.lName+"\",\r\n    \"vehicle_manufacturer\":\""+this.vehicleMakeVal+"\",\r\n    \"vehicle_model\":\""+this.vehicleModelVal+"\",\r\n    \"policyholder_type\":\""+this.policyhldrVal+"\",\r\n    \"mobile\":\""+this.mobNumber+"\",\r\n    \"company_name\":\""+this.compName+"\",\r\n    \"email\":\""+this.userEmail+"\",\r\n    \"verify_token\":\""+localStorage.getItem('token')+"\",\r\n    \"method\": \"save_product_quote\" \r\n}"
    this.api.insertData(myData).subscribe((data:any)=>{
      console.log(data);
      if(data.message=='success'){
        this.api.presenttoast(data.info.message)
      }
    })
  }
}
