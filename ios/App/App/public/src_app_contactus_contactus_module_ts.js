"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contactus_contactus_module_ts"],{

/***/ 8463:
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageRoutingModule": () => (/* binding */ ContactusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page */ 8188);




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

/***/ 8037:
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageModule": () => (/* binding */ ContactusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus-routing.module */ 8463);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page */ 8188);







let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactusPageRoutingModule
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_1__.ContactusPage]
    })
], ContactusPageModule);



/***/ }),

/***/ 8188:
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPage": () => (/* binding */ ContactusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page.html?ngResource */ 5509);
/* harmony import */ var _contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page.scss?ngResource */ 1463);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);








let ContactusPage = class ContactusPage {
    constructor(navCtrl, router, location, iab) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.location = location;
        this.iab = iab;
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
        const browser = this.iab.create('https://ionicframework.com/');
    }
};
ContactusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
ContactusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contactus',
        template: _contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactusPage);



/***/ }),

/***/ 1463:
/*!**********************************************************!*\
  !*** ./src/app/contactus/contactus.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 10% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.main {\n  width: 100%;\n  margin: 10% auto;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n  padding: 17px 12px;\n  border-radius: 12px;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 4%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A0F55;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A0F55;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 14.5%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n.socialimgclass {\n  margin-right: 15px;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QTtBQUVGIiwiZmlsZSI6ImNvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53cmFwcGVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcbn1cbnAubmFtZS1wYXJhIHtcbiAgLy8gd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxucC53Yy1wYXJhIHtcbiAgLy8gd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5sb2dve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaGVhZHRpdGxle1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4ubWFpbntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XG4gIHBhZGRpbmc6IDE3cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi50aXRsZTF7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW5uZXIxe1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5wYXJhe1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuLnBhcmExe1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuLnNwe1xuICBjb2xvcjogIzVENUQ1RDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZTJ7XG4gIGNvbG9yOiNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLy8vYm90dG9tIGJhciBjc3MvLy8vXG5pb24tdGFic3tcblxuXHRpb24tdGFiLWJhciB7XG5cdFx0LS1ib3JkZXI6IDA7XG5cdFx0LS1iYWNrZ3JvdW5kOiAjMUEwRjU1O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDowOyByaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MnB4O1xuICAgIGhlaWdodDo2MHB4O1xuXHRcdCY6YWZ0ZXJ7XG5cdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiMxQTBGNTU7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcbiAgICAgIH1cblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblxuXHR9XG5cbn1cblxuLmltZ3tcbiAgd2lkdGg6IDIxLjVweDtcbiAgaGVpZ2h0OiAyMS41cHg7XG4gIG9wYWNpdHk6IDYwJTtcbn1cbi5hY3RpdmVpbWd7XG5cbiAgICB3aWR0aDogMjEuNXB4O1xuICAgIGhlaWdodDogMjEuNXB4O1xuXG59XG5cbi5mb250e1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDYwJTtcbn1cbi5mb250YWN0aXZle1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY2ltZ3tcbiAgb3BhY2l0eTogNjAleTtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICByaWdodDogMTQuNSU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KXtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogMTQuNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkgYW5kIChtaW4taGVpZ2h0OjczNnB4KXtcblxuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiAxNC41JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4taGVpZ2h0OjgxMnB4KXtcblxuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiAxNC41JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiAxNC41JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cblxuLnNvY2lhbGltZ2NsYXNze1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 5509:
/*!**********************************************************!*\
  !*** ./src/app/contactus/contactus.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <div style=\"width: 100%;\">\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\">\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Contact Us</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n\n    <p class=\"name-para\">Hi <span *ngIf=\"userId!=null\">{{cname}}!</span></p>\n    <p class=\"wc-para\">Welcome</p>\n    <div class=\"logo\">\n      <img src=\"assets/images/contactlogo.svg\">\n    </div>\n<div style=\"margin-top: 10px;\">\n    <img src=\"assets/images/fb.png\" class=\"socialimgclass\" (click)=\"fb()\">\n    <img src=\"assets/images/tw.png\" class=\"socialimgclass\" (click)=\"tw()\">\n    <img src=\"assets/images/yt.png\" class=\"socialimgclass\" (click)=\"yt()\">\n    <img src=\"assets/images/inst.png\" class=\"socialimgclass\" (click)=\"inst()\">\n  </div>\n    <div class=\"headtitle\">HEAD OFFICE</div>\n\n    <div class=\"main\">\n      <div class=\"title1\">Address</div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">21, Water Corporation Drive, Off Ligali Ayorinde Street, Victoria Island ,Lagos, Nigeria</div>\n      </div>\n\n      <div class=\"title1\" style=\"margin-top: 5%;\">Emails</div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/sms.svg\">\n        </div>\n        <div class=\"para1\">ecare@cornerstone.com.ng<br> <span class=\"sp\">(Sales Enquiries & Support)</span>\n        </div>\n      </div>\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/sms.svg\">\n        </div>\n        <div class=\"para1\">enquiries@cornerstone.com.ng<br> <span class=\"sp\">(Corporate Enquiries, Feedbacks &\n            Complaints)</span>\n        </div>\n      </div>\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/sms.svg\">\n        </div>\n        <div class=\"para1\">ClaimsCare@cornerstone.com.ng<br> <span class=\"sp\">(Claims Lodgement, Enquiries &\n            Complaints)</span>\n        </div>\n      </div>\n\n      <div class=\"title1\" style=\"margin-top: 5%;\">Telephone Number</div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">07086216957<br> <span class=\"sp\">(Sales Enquiries & Support)</span>\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500 & 0700 CORNERSTONE <br> <span class=\"sp\">(0700 267 63778663) (Corporate\n            Enquiries,Feedbacks & Complaints)</span>\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/global.svg\">\n        </div>\n        <div class=\"para1\">www.cornerstone.com.ng</div>\n      </div>\n    </div>\n\n    <div class=\"headtitle\">BRANCHES AND OUTLETS</div>\n\n    <div class=\"main\" style=\"margin-top:8% !important;\">\n      <div class=\"title2\">ABEOKUTA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Agbeloba Building, 56, Quarry Road, Abeokuta, Ogun State</div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0802 874 8810</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IKORODU <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">134 Lagos Road,Ikorodu,Lagos State</div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">PORT HARCOURT</div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">222, Aba Road, Port Harcourt, Rivers State</div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">ABUJA</div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">34, Gana street, Maitama, Abuja</div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0803 502 6956</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IKOTA SHOPPING COMPLEX <span\n          style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">SULEJA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">7 Suleiman Barau Road, Suleja,Niger State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0805 511 1604</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">APAPA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">ILORIN <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">3, Sokoto Road Sabo Oke, Ilorin,Kwara State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0802 060 3197</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">UYO </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">317B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0813 045 5433</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">FESTAC <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span>\n      </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">KANO </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">103 Hadejia Road, Fagge, Kano State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0703 343 8119</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">WARRI </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Km 4, Refinery Road, Thomas House, Ekpan, Warri, Delta State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">08032127487</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IBADAN </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">67, Aboderin Layout ,Oni & Sons Area Ring Road, Ibadan, Oyo State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0802 909 4320</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">LAGOS ISLAND </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Cornerstone House 136, Lewis Street Obalende, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">YABA </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">91 Herbert Macaulay Way, Sabo yaba 101001, Yaba, Lagos Mainland, Nigeria\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">01-2806500</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IKEJA </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0818 779 6014</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">OWERRI <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span></div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">No. 67, Okigwe Road, Owerri, Imo State.\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0803 541 8019</div>\n      </div>\n\n      <div class=\"title2\" style=\"margin-top:6% !important;\">YENOGOA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\n          Outlet)</span> </div>\n\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/location.svg\">\n        </div>\n        <div class=\"para\">Jay Cee Plaza, Otiotio Road,Yenezue Gene, Yenagoa, Bayelsa State\n        </div>\n      </div>\n\n      <div class=\"inner1\">\n        <div class=\"icondiv\">\n          <img src=\"assets/images/call.svg\">\n        </div>\n        <div class=\"para1\">0803 741 1444</div>\n      </div>\n\n    </div>\n  </div>\n\n\n</ion-content>\n<!-- <ion-footer>\n  <ion-tabs style=\"top:10px !important;\">\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <hr>\n      <ion-tab-button (click)=\"tab1Click()\">\n        <img src=\"assets/images/discover.svg\" class=\"img\">\n        <ion-label class=\"font\">Discover</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab2Click()\">\n        <img src=\"assets/images/home.svg\" class=\"img\">\n        <ion-label class=\"font\">Home</ion-label>\n      </ion-tab-button>\n\n\n      <ion-tab-button (click)=\"tab3Click()\">\n        <img src=\"assets/images/contactus.svg\" class=\"activeimg\">\n        <ion-label class=\"fontactive\">Contact Us</ion-label>\n\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-footer> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contactus_contactus_module_ts.js.map