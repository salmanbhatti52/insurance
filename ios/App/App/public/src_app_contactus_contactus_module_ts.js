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
    chatboat() {
        const browser = this.iab.create('https://webchat.ebanqo.io/cornerstone');
    }
    chatboatblank() {
        const browser = this.iab.create('https://webchat.ebanqo.io/cornerstone', '_blank');
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 10% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.main {\n  width: 100%;\n  margin: 10% auto;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n  padding: 17px 12px;\n  border-radius: 12px;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 4%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n  text-decoration: none;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A0F55;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A0F55;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 14.5%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n.socialimgclass {\n  margin-right: 15px;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQUE7RUFFRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUVGOztBQUFBO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVdGOztBQUpDO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUFRLFFBQUE7RUFDUixXQUFBO0VBQ0UsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFRSjs7QUFQRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQVNIOztBQVBFO0VBQ0ksbUJBQUE7QUFTTjs7QUFSTTtFQUNFLGNBQUE7QUFVUjs7QUFQRTtFQUNDLGlCQUFBO0VBQ0EsNkJBQUE7QUFTSDs7QUFQRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUFTSDs7QUFGQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBRUksYUFBQTtFQUNBLGNBQUE7QUFLSjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQU9GO0FBQ0Y7O0FBSkE7RUFFRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBRUU7SUFDRSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUYiLCJmaWxlIjoiY29udGFjdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndyYXBwZXJ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xufVxucC5uYW1lLXBhcmEge1xuICAvLyB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0E4QjQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5wLndjLXBhcmEge1xuICAvLyB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLmxvZ297XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5oZWFkdGl0bGV7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5tYWlue1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbiAgcGFkZGluZzogMTdweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnRpdGxlMXtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pbm5lcjF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuLnBhcmF7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG4ucGFyYTF7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zcHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUye1xuICBjb2xvcjojQThCNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuaW9uLXRhYnN7XG5cblx0aW9uLXRhYi1iYXIge1xuXHRcdC0tYm9yZGVyOiAwO1xuXHRcdC0tYmFja2dyb3VuZDogIzFBMEY1NTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6MDsgcmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgbWF4LWhlaWdodDogNjJweDtcbiAgICBoZWlnaHQ6NjBweDtcblx0XHQmOmFmdGVye1xuXHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDojMUEwRjU1O1xuICAgICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XG4gICAgICB9XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcblx0XHR9XG5cblx0fVxuXG59XG5cbi5pbWd7XG4gIHdpZHRoOiAyMS41cHg7XG4gIGhlaWdodDogMjEuNXB4O1xuICBvcGFjaXR5OiA2MCU7XG59XG4uYWN0aXZlaW1ne1xuXG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcblxufVxuXG4uZm9udHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiA2MCU7XG59XG4uZm9udGFjdGl2ZXtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmNpbWd7XG4gIG9wYWNpdHk6IDYwJXk7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgcmlnaHQ6IDE0LjUlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDE0LjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KXtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5cbi5zb2NpYWxpbWdjbGFzc3tcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 78331:
/*!**********************************************************!*\
  !*** ./src/app/contactus/contactus.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width: 100%\">\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\" />\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Contact Us</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img\n          (click)=\"updateProfile()\"\n          class=\"pro-img\"\n          src=\"assets/images/user.png\"\n        />\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <p class=\"name-para\">Hi <span *ngIf=\"userId!=null\">{{cname}}!</span></p>\n    <p class=\"wc-para\">Welcome</p>\n    <div class=\"logo\">\n      <img\n        src=\"assets/images/contactlogo.png\"\n        style=\"height: 200px; width: 200px\"\n      />\n    </div>\n    <div style=\"margin-top: 10px\">\n      <img src=\"assets/images/fb.png\" class=\"socialimgclass\" (click)=\"fb()\" />\n      <img src=\"assets/images/tw.png\" class=\"socialimgclass\" (click)=\"tw()\" />\n      <img src=\"assets/images/yt.png\" class=\"socialimgclass\" (click)=\"yt()\" />\n      <img\n        src=\"assets/images/inst.png\"\n        class=\"socialimgclass\"\n        (click)=\"inst()\"\n      />\n\n      <img\n        src=\"assets/images/inst.png\"\n        class=\"socialimgclass\"\n        (click)=\"chatboat()\"\n      />\n\n      <img\n        src=\"assets/images/inst.png\"\n        class=\"socialimgclass\"\n        (click)=\"chatboatblank()\"\n      />\n    </div>\n    <div class=\"headtitle\">HEAD OFFICE</div>\n\n    <div class=\"main\">\n      <div class=\"title1\">Address</div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.4244264,3.4459322,'21, Water Corporation Drive, Off Ligali Ayorinde Street, Victoria Island ,Lagos, Nigeria')\"\n        >\n          21, Water Corporation Drive, Off Ligali Ayorinde Street, Victoria\n          Island ,Lagos, Nigeria\n        </div>\n      </div>\n\n      <div class=\"title1\" style=\"margin-top: 5%\">Emails</div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/sms.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"mailto:ecare@cornerstone.com.ng\"\n            >ecare@cornerstone.com.ng</a\n          >\n          <br />\n          <span class=\"sp\">(Sales Enquiries & Support)</span>\n        </div>\n      </div>\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/sms.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"mailto:enquiries@cornerstone.com.ng\"\n            >enquiries@cornerstone.com.ng</a\n          ><br />\n          <span class=\"sp\">(Corporate Enquiries, Feedbacks & Complaints)</span>\n        </div>\n      </div>\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/sms.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"mailto:claimscare@cornerstone.com.ng\"\n            >ClaimsCare@cornerstone.com.ng</a\n          ><br />\n          <span class=\"sp\">(Claims Lodgement, Enquiries & Complaints)</span>\n        </div>\n      </div>\n\n      <div class=\"title1\" style=\"margin-top: 5%\">Telephone Number</div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:07086216957\">07086216957</a><br />\n          <span class=\"sp\">(Sales Enquiries & Support)</span>\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a> &\n          <a class=\"para1\" href=\"tel:07086216957\">0700</a> CORNERSTONE <br />\n          <span class=\"sp\"\n            ><a class=\"para1\" href=\"tel:0700 267 63778663\"\n              >(0700 267 63778663)</a\n            >\n            (Corporate Enquiries,Feedbacks & Complaints)</span\n          >\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/global.svg\" />\n        </div>\n        <div class=\"para1\" (click)=\"openwebpage()\">www.cornerstone.com.ng</div>\n      </div>\n    </div>\n\n    <div class=\"headtitle\">BRANCHES AND OUTLETS</div>\n\n    <div class=\"main\" style=\"margin-top: 8% !important\">\n      <div class=\"title2\">\n        ABEOKUTA\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(7.1361511,3.3224694,'Agbeloba Building, 56, Quarry Road, Abeokuta, Ogun State')\"\n        >\n          Agbeloba Building, 56, Quarry Road, Abeokuta, Ogun State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0802 874 8810\">0802 874 8810</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        IKORODU\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.6102297,3.514677,'134 Lagos Road,Ikorodu,Lagos State')\"\n        >\n          134 Lagos Road,Ikorodu,Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">PORT HARCOURT</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(4.8212557,7.007805,'222, Aba Road, Port Harcourt, Rivers State')\"\n        >\n          222, Aba Road, Port Harcourt, Rivers State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">ABUJA</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(9.0811713,7.4994721,'34, Gana street, Maitama, Abuja')\"\n        >\n          34, Gana street, Maitama, Abuja\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0803 502 6956\">0803 502 6956</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        IKOTA SHOPPING COMPLEX\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.4644981,3.5351153,'Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State')\"\n        >\n          Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah\n          Expressway, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        SULEJA\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(9.1910422,7.1785003,'7 Suleiman Barau Road, Suleja,Niger State')\"\n        >\n          7 Suleiman Barau Road, Suleja,Niger State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0805 511 1604\">0805 511 1604</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        APAPA\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.4419916,3.3568497,'Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State')\"\n        >\n          Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        ILORIN\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(8.4921139,4.5688141,'3, Sokoto Road Sabo Oke, Ilorin,Kwara State')\"\n        >\n          3, Sokoto Road Sabo Oke, Ilorin,Kwara State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0802 060 3197\">0802 060 3197</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">UYO</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(5.0395195,7.9348257,'317B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria')\"\n        >\n          317B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0813 045 5433\">0813 045 5433</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        FESTAC\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.471907,3.2953946,'Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State')\"\n        >\n          Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos\n          State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">KANO</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.471907,3.2953946,'103 Hadejia Road, Fagge, Kano State')\"\n        >\n          103 Hadejia Road, Fagge, Kano State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0703 343 8119\">0703 343 8119</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">WARRI</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(5.7476018,5.5689825,'Km 4, Refinery Road, Thomas House, Ekpan, Warri, Delta State')\"\n        >\n          Km 4, Refinery Road, Thomas House, Ekpan, Warri, Delta State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:08032127487\">08032127487</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">IBADAN</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(7.3599586,3.8635748,'67, Aboderin Layout ,Oni & Sons Area Ring Road, Ibadan, Oyo State')\"\n        >\n          67, Aboderin Layout ,Oni & Sons Area Ring Road, Ibadan, Oyo State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0802 909 4320\">0802 909 4320</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">LAGOS ISLAND</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.4495684,3.406482,'Cornerstone House 136, Lewis Street Obalende, Lagos State')\"\n        >\n          Cornerstone House 136, Lewis Street Obalende, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">YABA</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.4862774,3.3842253,'91 Herbert Macaulay Way, Sabo yaba 101001, Yaba, Lagos Mainland, Nigeria')\"\n        >\n          91 Herbert Macaulay Way, Sabo yaba 101001, Yaba, Lagos Mainland,\n          Nigeria\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:01-2806500\">01-2806500</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">IKEJA</div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(6.6058944,3.3373,'Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State')\"\n        >\n          Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja,\n          Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0818 779 6014\">0818 779 6014</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        OWERRI\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(5.5182455,7.0480823,'No. 67, Okigwe Road, Owerri, Imo State.')\"\n        >\n          No. 67, Okigwe Road, Owerri, Imo State.\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0803 541 8019\">0803 541 8019</a>\n        </div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top: 6% !important\">\n        YENOGOA\n        <span style=\"color: #5d5d5d; font-weight: 400\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top: 6% !important\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\" />\n        </div>\n        <div\n          class=\"para\"\n          (click)=\"openMapsApp(4.9369121,6.3177197,'Jay Cee Plaza, Otiotio Road,Yenezue Gene, Yenagoa, Bayelsa State')\"\n        >\n          Jay Cee Plaza, Otiotio Road,Yenezue Gene, Yenagoa, Bayelsa State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\" />\n        </div>\n        <div class=\"para1\">\n          <a class=\"para1\" href=\"tel:0803 741 1444\">0803 741 1444</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<!-- <ion-footer>\n  <ion-tabs style=\"top:10px !important;\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr>\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"img\">\n        <ion-label class=\"font\">Discover</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"img\">\n        <ion-label class=\"font\">Home</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab3Click()\">\n        <img src=\"assets/images/contactus.svg\" class=\"activeimg\">\n        <ion-label class=\"fontactive\">Contact Us</ion-label>\n\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contactus_contactus_module_ts.js.map