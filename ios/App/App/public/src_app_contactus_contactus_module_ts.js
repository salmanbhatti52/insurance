"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contactus_contactus_module_ts"],{

/***/ 38463:
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageRoutingModule": () => (/* binding */ ContactusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page */ 38188);




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_0__.ContactusPage
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactusPageRoutingModule);



/***/ }),

/***/ 58037:
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageModule": () => (/* binding */ ContactusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus-routing.module */ 38463);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page */ 38188);







let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactusPageRoutingModule,
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_1__.ContactusPage]
    })
], ContactusPageModule);



/***/ }),

/***/ 38188:
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPage": () => (/* binding */ ContactusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page.html?ngResource */ 78331);
/* harmony import */ var _contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page.scss?ngResource */ 84383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);








let ContactusPage = class ContactusPage {
    constructor(navCtrl, router, location, iab, platform) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.location = location;
        this.iab = iab;
        this.platform = platform;
        this.cname = '';
        this.contactDetail = {
            "Branches": [
                {
                    "State": "Abuja",
                    "Address": "34, Gana street, Maitama, Abuja",
                    "Telephone": "0803 502 6956"
                },
                {
                    "State": "Apapa",
                    "Address": "Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State",
                    "Telephone": "0803 409 5717"
                },
                {
                    "State": "FESTAC",
                    "Address": "Plot ‘A’, Festac Link Rd Junction by 2nd Rainbow Bus Stop, Apapa-Oshodi Exp. Lagos",
                    "Telephone": "0201 280 6500"
                },
                {
                    "State": "Ibadan",
                    "Address": "67, Aboderin Layout , Oni & Sons Area Ring Road, Ibadan, Oyo State",
                    "Telephone": "0802 909 4320"
                },
                {
                    "State": "Ikeja",
                    "Address": "Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State",
                    "Telephone": "0818 779 6014"
                },
                {
                    "State": "Kano",
                    "Address": "103 Hadejia Road, Fagge, Kano State",
                    "Telephone": "0805 243 0133"
                },
                {
                    "State": "Lagos Island",
                    "Address": "Cornerstone House 136, Lewis Street Obalende, Lagos State",
                    "Telephone": "0201 280 6500"
                },
                {
                    "State": "Lekki",
                    "Address": "St. Michaels Mall, No.71 Emma Abimbola Cole Street, Lekki, Lagos State.",
                    "Telephone": "0802 308 0395"
                },
                {
                    "State": "Port Harcourt",
                    "Address": "222, Aba Road, Port Harcourt, River State",
                    "Telephone": "0803 060 9056"
                },
                {
                    "State": "Victoria Island",
                    "Address": "21 Water Corporation Drive, Off Ligali Ayorinde street, Lagos State",
                    "Telephone": "0201 280 6500"
                },
                {
                    "State": "Warri",
                    "Address": "Ken Complex, 229 Jakpa Road, Warri, Delta State, Nigeria",
                    "Telephone": "0706 522 6175"
                },
                {
                    "State": "Yaba",
                    "Address": "191, Herbert Macaulay Street Opp. Yaba LGA Secretariat, Yaba, Lagos State",
                    "Telephone": "0201 280 6500"
                }
            ],
            "SalesOutlets": [
                {
                    "State": "Abeokuta",
                    "Address": "Shopping Mall No. A004, Providence Centre Shopping Mall, by NNPC Mega Station, MKO Abiola Way, Abeokuta, Ogun State.",
                    "Telephone": "0808 455 8701"
                },
                {
                    "State": "Alaba",
                    "Address": "Century Mall, Alaba International Market, Ojo-Igbede Road, Lagos State.",
                    "Telephone": "0803 274 3330"
                },
                {
                    "State": "Enugu",
                    "Address": "3, Chimaobi Plaza, Ogui Road, Enugu State.",
                    "Telephone": "0201 280 6500"
                },
                {
                    "State": "FESTAC",
                    "Address": "Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State",
                    "Telephone": "0201 280 6500"
                },
                {
                    "State": "Ikorodu",
                    "Address": "134 Lagos Road, Ikorodu, Lagos State",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Lekki-Ajah",
                    "Address": "Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Ilorin",
                    "Address": "Shop No. 28, A. A. T. PLAZA, along Murtala Muhammed Way Ilorin, Kwara State",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Kaduna",
                    "Address": "20 Constitution Road, Bijo Surgical building, Kaduna State.",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Onitsha",
                    "Address": "3rd Floor, 5, Awka Road, Opposite All Saints Cathedral, Onitsha, Anambra State.",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Owerri",
                    "Address": "2nd Floor, 8B Wetheral Road, Owerri, Imo State",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Sokoto",
                    "Address": "2 Opposite Dogondaji House, Maiduguri Road, Sokoto State.",
                    "Telephone": "020 1280 6500"
                },
                {
                    "State": "Uyo",
                    "Address": "17B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria",
                    "Telephone": "0813 045 5433"
                },
                {
                    "State": "Yenagoa",
                    "Address": "Jay Cee Plaza, Otiotio Road, Yenezue Gene, Yenagoa, Bayelsa State",
                    "Telephone": "0803 741 1444"
                }
            ]
        };
    }
    ngOnInit() {
        this.userId = localStorage.getItem('userid');
        console.log('userid====', this.userId);
        if (this.userId === null) {
            this.cname == '';
        }
        else {
            this.cname = localStorage.getItem('fname');
        }
    }
    goBack() {
        this.location.back();
    }
    tab1Click() {
        this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
    }
    tab2Click() {
        this.navCtrl.navigateRoot('home-page-screen-after-login');
    }
    tab3Click() {
        this.navCtrl.navigateRoot('contactus');
    }
    updateProfile() {
        this.router.navigate(['/profile-update']);
    }
    fb() {
        const browser = this.iab.create('https://www.facebook.com/CornerstoneInsuranceplc?_rdc=1&_rdr');
    }
    tw() {
        const browser = this.iab.create('https://twitter.com/cornerstone_ng');
    }
    inst() {
        const browser = this.iab.create('https://www.instagram.com/cornerstone_ng/');
    }
    yt() {
        const browser = this.iab.create('https://www.youtube.com/user/Cornerstoneplc');
    }
    openwebpage() {
        const browser = this.iab.create('https://www.cornerstone.com.ng');
    }
    openMapsApp(lat, lng, addr) {
        // window.open("https://www.google.com/maps/search/?api=1&query=6.424580,3.441100")
        var geocoords = lat + ',' + lng;
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + geocoords, '_system');
        }
        else {
            var label = encodeURI(addr); // encode the label!
            window.open('geo:0,0?q=' + geocoords + '(' + label + ')', '_system');
            // window.open("https://www.google.com/maps/search/?api=1&query=" + geocoords)
        }
    }
};
ContactusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
ContactusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contactus',
        template: _contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactusPage);



/***/ }),

/***/ 84383:
/*!**********************************************************!*\
  !*** ./src/app/contactus/contactus.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 10% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.main {\n  width: 100%;\n  margin: 10% auto;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n  padding: 17px 12px;\n  border-radius: 12px;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 4%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n  text-decoration: none;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 15px;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A0F55;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A0F55;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 14.5%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n.socialimgclass {\n  margin-right: 15px;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUkoiLCJmaWxlIjoiY29udGFjdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcHBlciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcbn1cblxucC5uYW1lLXBhcmEge1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnAud2MtcGFyYSB7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGVhZHRpdGxlIHtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbiAgICBwYWRkaW5nOiAxN3B4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLnRpdGxlMSB7XG4gICAgY29sb3I6ICMxQTIwNkQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbm5lcjEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLnBhcmEge1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnBhcmExIHtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc3Age1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUyIHtcbiAgICBjb2xvcjogI0E4QjQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLy8vYm90dG9tIGJhciBjc3MvLy8vXG5pb24tdGFicyB7XG4gICAgaW9uLXRhYi1iYXIge1xuICAgICAgICAtLWJvcmRlcjogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMUEwRjU1O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNjJweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgaGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFBMEY1NTtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyNDc0RjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltZyB7XG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5hY3RpdmVpbWcge1xuICAgIHdpZHRoOiAyMS41cHg7XG4gICAgaGVpZ2h0OiAyMS41cHg7XG59XG5cbi5mb250IHtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgb3BhY2l0eTogNjAlO1xufVxuXG4uZm9udGFjdGl2ZSB7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY2ltZyB7XG4gICAgb3BhY2l0eTogNjAleTtcbn1cblxuaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCkge1xuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgcmlnaHQ6IDE0LjUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCkge1xuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgcmlnaHQ6IDE0LjUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCkge1xuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgcmlnaHQ6IDE0LjUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo3NDBweCkge1xuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgcmlnaHQ6IDE0LjUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG4uc29jaWFsaW1nY2xhc3Mge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59Il19 */";

/***/ }),

/***/ 78331:
/*!**********************************************************!*\
  !*** ./src/app/contactus/contactus.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n    <ion-toolbar class=\"headBgGlobal\">\n        <ion-row style=\"display: flex; align-items: center\">\n            <ion-col size=\"2\" style=\"padding-left: 25px\">\n                <div style=\"width: 100%\">\n                    <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\" />\n                </div>\n\n                <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <div class=\"title\">Contact Us</div>\n            </ion-col>\n            <ion-col class=\"titleclass\" size=\"2\">\n                <img (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\" />\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\">\n        <p class=\"name-para\">Hi <span *ngIf=\"userId!=null\">{{cname}}!</span></p>\n        <p class=\"wc-para\">Welcome</p>\n        <div class=\"logo\">\n            <img src=\"assets/images/contactlogo.png\" style=\"height: 200px; width: 200px\" />\n        </div>\n        <div style=\"margin-top: 10px\">\n            <img src=\"assets/images/fb.png\" class=\"socialimgclass\" (click)=\"fb()\" />\n            <img style=\"border-radius: 6px;\" src=\"assets/images/tw.png\" class=\"socialimgclass\" (click)=\"tw()\" />\n            <img src=\"assets/images/yt.png\" class=\"socialimgclass\" (click)=\"yt()\" />\n            <img src=\"assets/images/inst.png\" class=\"socialimgclass\" (click)=\"inst()\" />\n        </div>\n        <div class=\"headtitle\">HEAD OFFICE</div>\n\n        <div class=\"main\">\n            <div class=\"title1\">Address</div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.4244264,3.4459322,'21, Water Corporation Drive, Off Ligali Ayorinde Street, Victoria Island ,Lagos, Nigeria')\">\n                    21, Water Corporation Drive, Off Ligali Ayorinde Street, Victoria Island ,Lagos, Nigeria\n                </div>\n            </div>\n\n            <div class=\"title1\" style=\"margin-top: 5%\">Emails</div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/sms.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"mailto:ecare@cornerstone.com.ng\">ecare@cornerstone.com.ng</a>\n                    <br />\n                    <span class=\"sp\">(Sales Enquiries & Support)</span>\n                </div>\n            </div>\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/sms.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"mailto:enquiries@cornerstone.com.ng\">enquiries@cornerstone.com.ng</a><br />\n                    <span class=\"sp\">(Corporate Enquiries, Feedbacks & Complaints)</span>\n                </div>\n            </div>\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/sms.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"mailto:claimscare@cornerstone.com.ng\">ClaimsCare@cornerstone.com.ng</a><br />\n                    <span class=\"sp\">(Claims Lodgement, Enquiries & Complaints)</span>\n                </div>\n            </div>\n\n            <div class=\"title1\" style=\"margin-top: 5%\">Telephone Number</div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:07086216957\">07086216957</a><br />\n                    <span class=\"sp\">(Sales Enquiries & Support)</span>\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:02012806500\">020 1280 6500</a> &\n                    <a class=\"para1\" href=\"tel:07086216957\">0700</a> CORNERSTONE <br />\n                    <span class=\"sp\"><a class=\"para1\" href=\"tel:0700 267 63778663\">(0700 267 63778663)</a>\n          <br>  (Corporate Enquiries,Feedbacks & Complaints)</span>\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/global.svg\" />\n                </div>\n                <div class=\"para1\" (click)=\"openwebpage()\">www.cornerstone.com.ng</div>\n            </div>\n        </div>\n\n        <div class=\"headtitle\">BRANCHES</div>\n\n\n        <!-- Ali  -->\n        <div class=\"main\" style=\"margin-top: 8% !important\">\n\n            <div *ngFor=\"let cc of contactDetail.Branches\">\n\n                <div class=\"title2\">\n                    {{cc.State}}\n                    <!-- <span style=\"color: #5d5d5d; font-weight: 400\">(Branches)</span> -->\n                </div>\n\n                <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                    <div class=\"icondiv\">\n                        <img src=\"assets/images/location.svg\" />\n                    </div>\n                    <!-- <div class=\"para\" (click)=\"openMapsApp(7.1361511,3.3224694,'Agbeloba Building, 56, Quarry Road, Abeokuta, Ogun State')\"> -->\n                    <div class=\"para\">\n                        {{cc.Address}}\n                    </div>\n                </div>\n\n                <div class=\"inner1\">\n                    <div class=\"icondiv\">\n                        <img src=\"assets/images/call.svg\" />\n                    </div>\n                    <div class=\"para1\">\n                        <a class=\"para1\" [attr.href]=\"'tel:' + cc.Telephone\">{{cc.Telephone}}</a>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n        <div class=\"headtitle\">SALES OUTLETS </div>\n\n        <div class=\"main\" style=\"margin-top: 8% !important\">\n            <div *ngFor=\"let cc of contactDetail.SalesOutlets\">\n\n                <div class=\"title2\">\n                    {{cc.State}}\n                    <!-- <span style=\"color: #5d5d5d; font-weight: 400\">(Branches)</span> -->\n                </div>\n\n                <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                    <div class=\"icondiv\">\n                        <img src=\"assets/images/location.svg\" />\n                    </div>\n                    <!-- <div class=\"para\" (click)=\"openMapsApp(7.1361511,3.3224694,'Agbeloba Building, 56, Quarry Road, Abeokuta, Ogun State')\"> -->\n                    <div class=\"para\">\n                        {{cc.Address}}\n                    </div>\n                </div>\n\n                <div class=\"inner1\">\n                    <div class=\"icondiv\">\n                        <img src=\"assets/images/call.svg\" />\n                    </div>\n                    <div class=\"para1\">\n                        <a class=\"para1\" [attr.href]=\"'tel:' + cc.Telephone\">{{cc.Telephone}}</a>\n                    </div>\n                </div>\n\n\n            </div>\n            <!-- Ali  -->\n\n            <!-- <div class=\"title2\" style=\"margin-top: 6% !important\">\n                IKORODU\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.6102297,3.514677,'134 Lagos Road,Ikorodu,Lagos State')\">\n                    134 Lagos Road,Ikorodu,Lagos State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">PORT HARCOURT</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(4.8212557,7.007805,'222, Aba Road, Port Harcourt, Rivers State')\">\n                    222, Aba Road, Port Harcourt, Rivers State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">ABUJA</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(9.0811713,7.4994721,'34, Gana street, Maitama, Abuja')\">\n                    34, Gana street, Maitama, Abuja\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0803 502 6956\">0803 502 6956</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                IKOTA SHOPPING COMPLEX\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.4644981,3.5351153,'Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State')\">\n                    Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                SULEJA\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(9.1910422,7.1785003,'7 Suleiman Barau Road, Suleja,Niger State')\">\n                    7 Suleiman Barau Road, Suleja,Niger State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0805 511 1604\">0805 511 1604</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                APAPA\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.4419916,3.3568497,'Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State')\">\n                    Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                ILORIN\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(8.4921139,4.5688141,'3, Sokoto Road Sabo Oke, Ilorin,Kwara State')\">\n                    3, Sokoto Road Sabo Oke, Ilorin,Kwara State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0802 060 3197\">0802 060 3197</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">UYO</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(5.0395195,7.9348257,'317B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria')\">\n                    317B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0813 045 5433\">0813 045 5433</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                FESTAC\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.471907,3.2953946,'Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State')\">\n                    Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">KANO</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.471907,3.2953946,'103 Hadejia Road, Fagge, Kano State')\">\n                    103 Hadejia Road, Fagge, Kano State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0703 343 8119\">0703 343 8119</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">WARRI</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(5.7476018,5.5689825,'Km 4, Refinery Road, Thomas House, Ekpan, Warri, Delta State')\">\n                    Km 4, Refinery Road, Thomas House, Ekpan, Warri, Delta State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:08032127487\">08032127487</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">IBADAN</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(7.3599586,3.8635748,'67, Aboderin Layout ,Oni & Sons Area Ring Road, Ibadan, Oyo State')\">\n                    67, Aboderin Layout ,Oni & Sons Area Ring Road, Ibadan, Oyo State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0802 909 4320\">0802 909 4320</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">LAGOS ISLAND</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.4495684,3.406482,'Cornerstone House 136, Lewis Street Obalende, Lagos State')\">\n                    Cornerstone House 136, Lewis Street Obalende, Lagos State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">YABA</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.4862774,3.3842253,'91 Herbert Macaulay Way, Sabo yaba 101001, Yaba, Lagos Mainland, Nigeria')\">\n                    91 Herbert Macaulay Way, Sabo yaba 101001, Yaba, Lagos Mainland, Nigeria\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">IKEJA</div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(6.6058944,3.3373,'Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State')\">\n                    Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0818 779 6014\">0818 779 6014</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                OWERRI\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(5.5182455,7.0480823,'No. 67, Okigwe Road, Owerri, Imo State.')\">\n                    No. 67, Okigwe Road, Owerri, Imo State.\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0803 541 8019\">0803 541 8019</a>\n                </div>\n            </div>\n\n            <div class=\"title2\" style=\"margin-top: 6% !important\">\n                YENOGOA\n                <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n            </div>\n\n            <div class=\"inner1\" style=\"margin-top: 6% !important\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/location.svg\" />\n                </div>\n                <div class=\"para\" (click)=\"openMapsApp(4.9369121,6.3177197,'Jay Cee Plaza, Otiotio Road,Yenezue Gene, Yenagoa, Bayelsa State')\">\n                    Jay Cee Plaza, Otiotio Road,Yenezue Gene, Yenagoa, Bayelsa State\n                </div>\n            </div>\n\n            <div class=\"inner1\">\n                <div class=\"icondiv\">\n                    <img src=\"assets/images/call.svg\" />\n                </div>\n                <div class=\"para1\">\n                    <a class=\"para1\" href=\"tel:0803 741 1444\">0803 741 1444</a>\n                </div>\n            </div>\n        </div> -->\n        </div>\n    </div>\n</ion-content>\n<!-- <ion-footer>\n  <ion-tabs style=\"top:10px !important;\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr>\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"img\">\n        <ion-label class=\"font\">Discover</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"img\">\n        <ion-label class=\"font\">Home</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab3Click()\">\n        <img src=\"assets/images/contactus.svg\" class=\"activeimg\">\n        <ion-label class=\"fontactive\">Contact Us</ion-label>\n\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_contactus_contactus_module_ts.js.map