import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Filesystem, Directory } from '@capacitor/filesystem';
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
  referrerList = [{referrer:'Friend'},{referrer:'Email'}]
  constructor(public router:Router,
    public api:InsuranceAppService,
    private actionSheetController: ActionSheetController,
    private http: HttpClient) { }

  ngOnInit() {
    console.log(this.dobValue);
    console.log(this.corpValue);
    console.log(this.yopValue);
    console.log(this.yomValue);
    
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

      resultType: CameraResultType.Uri
    }
    const image = await Camera.getPhoto(options); 
    console.log(image);
    
    console.log(image.webPath);
    if(imgetype=='license'){
      this.imgURL=image.webPath;
      this.saveimage(image.webPath,imgetype);
    }
    
    if(imgetype=='nic'){
      this.imgURL1=image.webPath;
      this.saveimage(image.webPath,imgetype);
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
    this.router.navigate(['/quote1']);
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
    // this.imgURL = '/C:/Users/aligh/OneDrive/Desktop/syllabus.jpg';
    // this.imgURL1 = '/C:/Users/aligh/OneDrive/Desktop/syllabus.jpg'
    console.log(this.imgURL);
    console.log(this.imgURL1);
    
    
    var form = new FormData();
    // form.append("product_id", localStorage.getItem('product_id'));
    // form.append("quote_id", localStorage.getItem('quote_id'));
    // form.append("name", this.fullName);
    // form.append("registration_number", this.regNo);
    // form.append("engine_number", this.engNo);
    // form.append("chasis_number", this.chasisNo);
    // form.append("vehicle_colour", this.vehclr);
    // form.append("address", this.clientAddress);
    // form.append("gender", this.genderVal);
    // form.append("date_of_birth", this.dobValue);
    // form.append("incorporation", this.corpValue);
    // form.append("year_of_purchase", this.yopValue);
    // form.append("year_of_manufacture", this.yomValue);
    // form.append("referred_by", this.referrerVal);
    // form.append("referrer_details", this.referrerData);
    // form.append("means_of_id", this.imgURL1);
    // form.append("vehicle_licence", this.imgURL);
    // form.append("verify_token", localStorage.getItem('token'));
    // form.append("method", "save_product_proposal");
    
    // this.api.insertFormData(form).subscribe((data:any)=>{
    //   console.log(data);
    //   // if(data.message=='success'){
    //   //   this.api.presenttoast(data.info.message)
    //   // }
    // })
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
    form.append("means_of_id", this.imgURL1);
    form.append("vehicle_licence", this.imgURL);
    form.append("verify_token", localStorage.getItem('token'));
    form.append("method", "save_product_proposal");
    // let config = {
    //   method: 'post',
    //   url: 'https://www.cornerstone.com.ng/devtest/webservice',
    //   headers: { 
    //     'Content-Type': 'application/x-www-form-urlencoded', 
    //     'Cookie': 'corci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%229067b6add23324d21220d8f7d5c649c0%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A12%3A%2239.40.231.23%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.29.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1656587499%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D87fb653bf23ba596c9ade5a76135fe0a7557093d', 
    //     ...data.getHeaders()
    //   },
    //   data : data
    // };

    axios.post('https://www.cornerstone.com.ng/devtest/webservice',form)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
