/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Location } from '@angular/common';
import {decode} from 'base64-arraybuffer';

const IMAGE_DIR = 'stored-images';
@Component({
  selector: 'app-car-insurance-details',
  templateUrl: './car-insurance-details.page.html',
  styleUrls: ['./car-insurance-details.page.scss'],
})
export class CarInsuranceDetailsPage implements OnInit {
  propsalResponse: any;
  quoteItems: any;
  fullName = '';
  regNo = '';
  engNo = '';
  chasisNo = '';
  vehclr = '';
  clientAddress = '';
  referrerData = '';
  blobMeanID = new Blob();
  blobLicence = new Blob();
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
  showGender = false;
  subProductName = localStorage.getItem('subProName');
  genderVal = 'Please Select';
  referrerVal='Please Select';
  genderType = [{gender: 'Male'},{gender: 'Female'}]
  referrerList: any;
  imgURLBase: string;

  // For file images //
  vehicleLicence = {
    file:"",
    base64: "",
  };
  driverLicence = {
    file:"",
    base64:"",
  };
  vehFrontPic = {
    file:"",
    base64:"",
  };
  vehRearPic = {
    file:"",
    base64:"",
  };
  vehPicSideViewLeft = {
    file:"",
    base64:"",
  };
  vehPicSideViewRight = {
    file:"",
    base64:"",
  }
  vehPicDashboard = {
    file:"",
    base64:"",
  };
  inspectionForm = {
    file:"",
    base64:"",
  };
  utilityBills = {
    file:"",
    base64:"",
  };
  // For file images //

  constructor(
    public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    private actionSheetController: ActionSheetController,
    private http: HttpClient,
    ) { }

  ngOnInit() {
     if(this.subProductName == 'Third Party') {
      this.quoteItems =  JSON.parse(localStorage.getItem('thirdPartyQuoteItems'));
    }
    else if(this.subProductName == 'Enhanced Comprehensive'){

      this.quoteItems =  JSON.parse(localStorage.getItem('enhancedCompQuoteItems'));

    }
    console.log(this.dobValue);
    console.log(this.corpValue);
    console.log(this.yopValue);
    console.log(this.yomValue);
    this.getReferrerList();
  }

  ionViewWillEnter() {
    this.fullName = '';
    this.regNo = '';
    this.engNo = '';
    this.chasisNo = '';
    this.vehclr = '';
    this.clientAddress = '';
    this.genderVal = 'Please Select';
    this.referrerVal='Please Select';
    this.imgURL='';
    this.imgURL1='';
    this.referrerData = '';
  }

  getReferrerList(){
    const myData = 'myData={"verify_token":"'+localStorage.getItem('token')+'","method":"get_referred_by"}'
    this.api.insertData(myData).subscribe((res: any)=>{
      console.log(res);
      if(res.message!=''){
        this.referrerList = res.values;
        console.log(this.referrerList);

      }

    },(err)=>{
      console.log(err);

    })
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
    this.referrerVal= list;
    this.showReferrer = false;
  }

  async camera2(source,imgetype) {
    console.log('yyyyyy==',imgetype);
    var options: ImageOptions = {
      source: source,
      resultType: CameraResultType.Base64
    }
    const image = await Camera.getPhoto(options);
    const blob = new Blob([new Uint8Array(decode(image.base64String))], {
      type: `image/${image.format}`,
  });
    // console.log('Data from gallary blob',blob);
    console.log('Data from gallary Data url',image.dataUrl);
    if(imgetype=='license'){
      this.imgURL= "image.dataUrl";
      //this.imgURL= blob;
      this.blobMeanID =blob;

    }
    if(imgetype=='nic'){
      this.imgURL1="image.dataUrl";
     // this.imgURL1= blob;
     this.blobLicence = new Blob();
    }
    const imgData = {
      image: this.imgURL
    }
  }


  async selectImage(imagefile) {

    const imgtype=imagefile
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.camera2(CameraSource.Photos,imgtype);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.camera2(CameraSource.Camera,imgtype);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  goback(){
   this.location.back();
  }

  submitProposal(){
    if(this.fullName==''){
      this.api.presenttoast('Full Name required')
    }
    else if(this.regNo==''){
      this.api.presenttoast('Vehicle Reg. No. required')
    }
    else if(this.engNo==''){
      this.api.presenttoast('Engine No. required')
    }
    else if(this.chasisNo==''){
      this.api.presenttoast('Chasis No. required');

    }
    else if(this.vehclr==''){
      this.api.presenttoast('Vehicle Colour required');

    }
    else if(this.clientAddress==''){
      this.api.presenttoast('Address required');

    }
    else if(this.genderVal=='Please Select'){
      this.api.presenttoast('Please Select Gender');

    }
    else if(this.vehicleLicence.file==''){
      this.api.presenttoast('Vehicle License required');
    }

    else if(this.driverLicence.file==''){
      this.api.presenttoast('Driver License/N.I.C required');
    }
    else if(this.vehFrontPic.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Vehicle Picture Front View required');
    }
    else if(this.vehRearPic.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Vehicle Picture Rear View required');
    }
    else if(this.vehPicSideViewLeft.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Vehicle Picture Side View(Left) required');
    }
    else if(this.vehPicSideViewRight.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Vehicle Picture Side View(Right) required');
    }
    else if(this.vehPicDashboard.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Dashboard (displaying Kilometer of vehicle) required');
    }
    else if(this.utilityBills.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Utility Bill required');
    }
    else if(this.inspectionForm.file=='' && (this.subProductName =="Enhanced Comprehensive" || this.subProductName=="Auto Variants" ) ){
      this.api.presenttoast('Form inspection required');
    }
    else if(this.referrerVal=='Please Select'){
      this.api.presenttoast('Please Select Referrer');
    }
    else if(this.referrerData==''){
      this.api.presenttoast('Referrer Details required');
    }
    else{
      this.callingApi();
    }

  }
  selectFile(event,type){

    console.log("type --- ",type);
    console.log("linceise --- ",event.target.files[0]);


    this.getBase64(event.target.files[0]).then(data=>{
     let file = event.target.files[0];
     let base64 = data as string;
     if(type=='vehicleLicence'){
      this.vehicleLicence.file = file;
      this.vehicleLicence.base64 =  base64;
    }
    else if(type=='driverLicence'){
      this.driverLicence.file = file;
      this.driverLicence.base64 =  base64;
    }
    else if(type=='vehFrontPic'){
      this.vehFrontPic.file = file;
      this.vehFrontPic.base64 =  base64;
    }
    else if(type=='vehRearPic'){
      this.vehRearPic.file = file;
      this.vehRearPic.base64 =  base64;
    }
    else if(type=='vehPicSideViewLeft'){
      this.vehPicSideViewLeft.file = file;
      this.vehPicSideViewLeft.base64 =  base64;
    }
    else if(type=='vehPicSideViewRight'){
      this.vehPicSideViewRight.file = file;
      this.vehPicSideViewRight.base64 =  base64;
    }
    else if(type=='vehPicDashboard'){
      this.vehPicDashboard.file = file;
      this.vehPicDashboard.base64 =  base64;
    }
    else if(type=='inspectionForm'){
      this.inspectionForm.file = file;
      this.inspectionForm.base64 =  base64;
    }
    else if(type=='utilityBills'){
      this.utilityBills.file = file;
      this.utilityBills.base64 =  base64;
    }



    } ).catch(err=> console.log('Errrrrr',err));



  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  callingApi(){
    const headers= new HttpHeaders();
    var form = new FormData();
    form.append('product_id', localStorage.getItem('subProId'));
    form.append('quote_id', localStorage.getItem('quote_id'));
    form.append('name', this.fullName);
    form.append('registration_number', this.regNo);
    form.append('engine_number', this.engNo);
    form.append('chasis_number', this.chasisNo);
    form.append('vehicle_colour', this.vehclr);
    form.append('address', this.clientAddress);
    form.append('gender', this.genderVal);
    form.append('date_of_birth', this.dobValue);
    form.append('incorporation', this.corpValue);
    form.append('year_of_purchase', this.yopValue);
    form.append('year_of_manufacture', this.yomValue);
    form.append('referred_by', this.referrerVal);
    form.append('referrer_details', this.referrerData);
    form.append('means_of_id', this.driverLicence.file);
    form.append('vehicle_licence', this.vehicleLicence.file);
    form.append('verify_token', localStorage.getItem('token'));
    if(this.subProductName=="Enhanced Comprehensive" || this.subProductName=="Auto Variants"){
      form.append('vehicle_picture_front_view', this.vehFrontPic.file);
      form.append('vehicle_picture_rear_view', this.vehRearPic.file);
      form.append('vehicle_picture_side_view_left', this.vehPicSideViewLeft.file);
      form.append('vehicle_picture_side_view_right', this.vehPicSideViewRight.file);
      form.append('vehicle_picture_dashboard', this.vehPicDashboard.file);
      form.append('inspection_form', this.inspectionForm.file);
      form.append('utility_bill', this.utilityBills.file);
    }
    form.append('method', 'save_product_proposal');
    const config = {
      method: 'post',
      url: 'https://www.cornerstone.com.ng/devtest/webservice',
      headers: headers,
      data : form
    };


    console.log('form form config',config)
    this.http.post(config.url,config.data , {
      headers: config.headers,
    }).subscribe((res)=>{
      this.propsalResponse = res;
      if(this.propsalResponse.status_no==0){
        this.api.presenttoast(this.propsalResponse.message);
      }
      else{
        this.api.presenttoast("Proposal completed start payment");
      }
      console.log('Response after propsal',JSON.stringify(res));
    },err=>{
      console.log('err===',err);

    });

  }
}
