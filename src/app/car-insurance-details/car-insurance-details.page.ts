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
const IMAGE_DIR = 'stored-images';
@Component({
  selector: 'app-car-insurance-details',
  templateUrl: './car-insurance-details.page.html',
  styleUrls: ['./car-insurance-details.page.scss'],
})
export class CarInsuranceDetailsPage implements OnInit {
  fullName = '';
  regNo = '';
  engNo = '';
  chasisNo = '';
  vehclr = '';
  clientAddress = '';
  referrerData = '';
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

  genderVal = 'Please Select';
  referrerVal='Please Select';

  genderType = [{gender: 'Male'},{gender: 'Female'}]
  // referrerList = [{referrer:'Friend'},{referrer:'Email'}]
  referrerList:any;
  imgURLBase: string;
  constructor(
    public location:Location,
    public router:Router,
    public api:InsuranceAppService,
    private actionSheetController: ActionSheetController,
    private http: HttpClient,
    ) { }

  ngOnInit() {
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
    let myData = "myData={\"verify_token\":\""+localStorage.getItem('token')+"\",\"method\":\"get_referred_by\"}"
    this.api.insertData(myData).subscribe((res:any)=>{
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

      resultType: CameraResultType.DataUrl
    }
    const image = await Camera.getPhoto(options); 
    console.log(image);
    
    console.log(image.dataUrl);
    if(imgetype=='license'){
      this.imgURL=image.dataUrl;
    }
    
    if(imgetype=='nic'){
      this.imgURL1=image.dataUrl;
    }
    
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
  
  async saveimage(photo,imgtype) {
    // const base64Data = await this.readAsBase64(photo);
    // console.log('base64 data==', base64Data);
    // this.profileimage = `data:image/png;base64,${base64Data}`
    // this.profileimage = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    const fileName = new Date().getTime() + '.png';
    const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: photo.toString(),
      directory: Directory.Documents,
      recursive: true
    });
   
    console.log('savedFile data==', savedFile)
    console.log(savedFile.uri);
    this.imgURLBase = savedFile.uri;
    this.imgURL1 = savedFile.uri;
    
    if(imgtype == 'license'){
      this.imgURL = savedFile.uri;
    }
    if(imgtype == 'nic'){
      this.imgURL1 = savedFile.uri;
    }
    // let imageget = savedFile.uri.split('/')
    // console.log('imageget', imageget);

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
    else if(this.imgURL==''){
      this.api.presenttoast('Vehicle License required');
      
    }
    
    else if(this.imgURL1==''){
      this.api.presenttoast('Driver License/N.I.C required');
      
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
    
  callingApi(){
    console.log(this.imgURL);
    console.log(this.imgURL1);
    // let headers= new HttpHeaders({

    //   'Content-Type': 'application/json; charset=UTF-8',
  
    //   'Access-Control-Allow-Origin': '*',
  
    //   'enctype': 'multipart/form-data',
  
    // })
    let headers= new HttpHeaders();
    var form = new FormData();
    form.append("product_id", localStorage.getItem('product_id'));
    form.append("quote_id", localStorage.getItem('quote_id'));
    form.append("name", this.fullName);
    form.append("registration_number", this.regNo);
    form.append("engine_number", this.engNo);
    form.append("chasis_number", this.chasisNo);
    form.append("vehicle_colour", this.vehclr);
    form.append("address", this.clientAddress);
    form.append("gender", this.genderVal);
    form.append("date_of_birth", this.dobValue);
    form.append("incorporation", this.corpValue);
    form.append("year_of_purchase", this.yopValue);
    form.append("year_of_manufacture", this.yomValue);
    form.append("referred_by", this.referrerVal);
    form.append("referrer_details", this.referrerData);
    form.append("means_of_id", this.imgURL1.split(',')[1]);
    form.append("vehicle_licence", this.imgURL.split(',')[1]);
    form.append("verify_token", localStorage.getItem('token'));
    form.append("method", "save_product_proposal");
    let config = {
      method: 'post',
      url: 'https://www.cornerstone.com.ng/devtest/webservice',
      headers: headers,
      data : form
    };

      
    console.log("form form config",config)
    this.http.post(config.url,config.data , {
      headers: config.headers,
    }).subscribe((res)=>{
      console.log('cid===',res);
      
    },err=>{
      console.log('err===',err);
      
    });
    // axios.post('https://www.cornerstone.com.ng/devtest/webservice',form)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
}
