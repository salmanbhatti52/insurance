import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';

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
  
  show = false;
  showVehicle = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;
  showGender = false;
  showDay = false;
  showMonth = false;
  showYear = false;

  vehicleVal = '';
  vehicleMakeVal = '';
  policyhldrVal = '';
  vehicleModelVal = '';
  vehicleUsageVal = 'Personal';
  genderVal = 'Please Select';
  dayVal = 'Day';
  monthVal = 'Month';
  yearVal = 'Year';


  genderType = [{gender: 'Male'},{gender: 'Female'}]
  vehicleClass = [{ vehicle: 'Cars/Sedan/SUV' }]
  vehicleMake = [{ vMake : 'Acura'},{vMake : 'Acura'}]
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType:'Corporate' }]
  vehicleModel = [{ vModel : 'EL'},{ vModel : 'EL'}]
  vehicleUsage = [{ usage: 'Personal'},{ usage: 'Personal'}]
  dateYear = [
    { year: 1950 }, { year: 1951 }, { year: 1952 }, { year: 1953 },{ year: 1954 },{ year: 1955 },{ year: 1956 },
    { year: 1957 },{ year: 1958 },{ year: 1959 },{ year: 1960 },{ year: 1961 },{ year: 1962 },{ year: 1963 },
    { year: 1964 },{ year: 1965 },{ year: 1966 },{ year: 1967 },{ year: 1968 },{ year: 1969 },{ year: 1970 },
    { year: 1971 },{ year: 1972 },{ year: 1973 }, { year: 1974 }, { year: 1975 }, { year: 1976 },{ year: 1977 },
    { year: 1978 },{ year: 1979 },{ year: 1980 },{ year: 1981 },{ year: 1982 },{ year: 1983 },{ year: 1984 },
    { year: 1985 },{ year: 1986 },{ year: 1987 },{ year: 1988 },{ year: 1989 },{ year: 1990 },{ year: 1991 },
    { year: 1992 },{ year: 1993 },{ year: 1994 },{ year: 1995 },{ year: 1996 },{ year: 1997 },{ year: 1998 },
    { year: 1999 },{ year: 2000 },{ year: 2001 },{ year: 2002 },{ year: 2003 },{ year: 2004 },{ year: 2005 },
    { year: 2006 },{ year: 2007 },{ year: 2008 },{ year: 2009 },{ year: 2010 },{ year: 2011 },{ year: 2012 },
    { year: 2013 },{ year: 2014 },{ year: 2015 },{ year: 2016 },{ year: 2017 },{ year: 2018 },{ year: 2019 },
    { year: 2020 },{ year: 2021 },{ year: 2022 },{ year: 2023 }
  ];
  dateDay=[{day : 1},{day : 2},{day : 3},{day : 4},{day : 5},{day : 6},{day : 7},{day : 8},{day : 9},{day : 10},
    {day : 11},{day : 12},{day : 13},{day : 14},{day : 15},{day : 16},{day : 17},{day : 18},{day : 19},{day : 20},
    {day : 21},{day : 22},{day : 23},{day : 24},{day : 25},{day : 26},{day : 27},{day : 28},{day : 29},{day : 30},
    {day : 31}
  ]
  dateMonth=[{month:'01'},{month:'02'},{month:'03'},{month:'04'},{month:'05'},{month:'06'},{month:'07'},
    {month:'08'},{month:'09'},{month:'10'},{month:'11'},{month:'12'},
  ]
  constructor(public router:Router,
    public api:InsuranceAppService) { }

  ngOnInit() {
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

  openGenderList(){
    if (this.showGender == true) {
      this.showGender = false
    } else {
      this.showGender = true;

    }
  }

  openDayList(){
    if (this.showDay == true) {
      this.showDay = false
    } else {
      this.showDay = true;

    }
  }

  openMonthList(){
    if (this.showMonth == true) {
      this.showMonth = false
    } else {
      this.showMonth = true;

    }
  }

  openYearList(){
    if (this.showYear == true) {
      this.showYear = false
    } else {
      this.showYear = true;

    }
  }
  
  selectGenderType(list){
    this.genderVal= list.gender;
    this.showGender = false;
  }

  selectDay(list){
    this.dayVal= list.day;
    this.showDay = false;
  }

  selectMonth(list){
    this.monthVal= list.month;
    this.showMonth = false;
  }

  selectYear(list){
    this.yearVal= list.year;
    this.showYear = false;
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
