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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page.html?ngResource */ 5509);
/* harmony import */ var _contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page.scss?ngResource */ 1463);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ContactusPage = class ContactusPage {
    constructor(navCtrl, router, location) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.location = location;
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
};
ContactusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
ContactusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 10% auto 10%;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.headtitle {\n  color: #1A206D;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n.main {\n  width: 100%;\n  margin: 10% auto;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n  padding: 17px 12px;\n  border-radius: 12px;\n}\n\n.title1 {\n  color: #1A206D;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.inner1 {\n  display: flex;\n  align-items: center;\n  margin-top: 4%;\n}\n\n.para {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.para1 {\n  color: #1A206D;\n  font-weight: 400;\n  font-size: 14px;\n  width: 100%;\n  margin-left: 2%;\n}\n\n.sp {\n  color: #5D5D5D;\n  font-weight: 400;\n  font-size: 12px;\n  width: 100%;\n}\n\n.title2 {\n  color: #A8B400;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A0F55;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  background: #1A0F55;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 14.5%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 14.5%;\n    border-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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Y2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcclxufVxyXG5wLm5hbWUtcGFyYSB7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDBweCBhdXRvIDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5wLndjLXBhcmEge1xyXG4gIC8vIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuLmxvZ297XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmhlYWR0aXRsZXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLm1haW57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XHJcbiAgcGFkZGluZzogMTdweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLnRpdGxlMXtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaW5uZXIxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4ucGFyYXtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLnBhcmExe1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG4uc3B7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlMntcclxuICBjb2xvcjojQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xyXG5pb24tdGFic3tcclxuXHJcblx0aW9uLXRhYi1iYXIge1xyXG5cdFx0LS1ib3JkZXI6IDA7XHJcblx0XHQtLWJhY2tncm91bmQ6ICMxQTBGNTU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYycHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuXHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiMxQTBGNTU7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM0MjQ3NEY7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24ubm90aWZzIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuLmltZ3tcclxuICB3aWR0aDogMjEuNXB4O1xyXG4gIGhlaWdodDogMjEuNXB4O1xyXG4gIG9wYWNpdHk6IDYwJTtcclxufVxyXG4uYWN0aXZlaW1ne1xyXG5cclxuICAgIHdpZHRoOiAyMS41cHg7XHJcbiAgICBoZWlnaHQ6IDIxLjVweDtcclxuXHJcbn1cclxuXHJcbi5mb250e1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmZvbnRhY3RpdmV7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5jaW1ne1xyXG4gIG9wYWNpdHk6IDYwJXk7XHJcbn1cclxuXHJcbmhyIHtcclxuICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDE0LjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDEycHgpIGFuZCAobWluLWhlaWdodDo5MTRweCl7XHJcbiAgaHIge1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogMTQuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XHJcblxyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE0LjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XHJcblxyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE0LjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzQwcHgpe1xyXG4gIGhyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE0LjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5509:
/*!**********************************************************!*\
  !*** ./src/app/contactus/contactus.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <div style=\"width: 100%;\">\r\n          <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\">\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Contact Us</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n\r\n    <p class=\"name-para\">Hi <span *ngIf=\"userId!=null\">{{cname}}!</span></p>\r\n    <p class=\"wc-para\">Welcome</p>\r\n    <div class=\"logo\">\r\n      <img src=\"assets/images/contactlogo.svg\">\r\n    </div>\r\n    <div class=\"headtitle\">HEAD OFFICE</div>\r\n\r\n    <div class=\"main\">\r\n      <div class=\"title1\">Address</div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">21, Water Corporation Drive, Off Ligali Ayorinde Street, Victoria Island ,Lagos, Nigeria</div>\r\n      </div>\r\n\r\n      <div class=\"title1\" style=\"margin-top: 5%;\">Emails</div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/sms.svg\">\r\n        </div>\r\n        <div class=\"para1\">ecare@cornerstone.com.ng<br> <span class=\"sp\">(Sales Enquiries & Support)</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/sms.svg\">\r\n        </div>\r\n        <div class=\"para1\">enquiries@cornerstone.com.ng<br> <span class=\"sp\">(Corporate Enquiries, Feedbacks &\r\n            Complaints)</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/sms.svg\">\r\n        </div>\r\n        <div class=\"para1\">ClaimsCare@cornerstone.com.ng<br> <span class=\"sp\">(Claims Lodgement, Enquiries &\r\n            Complaints)</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"title1\" style=\"margin-top: 5%;\">Telephone Number</div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">07086216957<br> <span class=\"sp\">(Sales Enquiries & Support)</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500 & 0700 CORNERSTONE <br> <span class=\"sp\">(0700 267 63778663) (Corporate\r\n            Enquiries,Feedbacks & Complaints)</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/global.svg\">\r\n        </div>\r\n        <div class=\"para1\">www.cornerstone.com.ng</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"headtitle\">BRANCHES AND OUTLETS</div>\r\n\r\n    <div class=\"main\" style=\"margin-top:8% !important;\">\r\n      <div class=\"title2\">ABEOKUTA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Agbeloba Building, 56, Quarry Road, Abeokuta, Ogun State</div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0802 874 8810</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IKORODU <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">134 Lagos Road,Ikorodu,Lagos State</div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">PORT HARCOURT</div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">222, Aba Road, Port Harcourt, Rivers State</div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">ABUJA</div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">34, Gana street, Maitama, Abuja</div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0803 502 6956</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IKOTA SHOPPING COMPLEX <span\r\n          style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Road 2. Block E, Shop 154, Ikota Shopping Complex VGC, Lekki – Ajah Expressway, Lagos State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">SULEJA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">7 Suleiman Barau Road, Suleja,Niger State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0805 511 1604</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">APAPA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Polysonic Mall (2nd Floor) 1B, Point Road, Apapa, Lagos State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">ILORIN <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">3, Sokoto Road Sabo Oke, Ilorin,Kwara State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0802 060 3197</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">UYO </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">317B, Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0813 045 5433</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">FESTAC <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span>\r\n      </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Suite 101A PIN Plaza Opposite H Close, First Avenue Festac Town, Lagos State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">KANO </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">103 Hadejia Road, Fagge, Kano State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0703 343 8119</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">WARRI </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Km 4, Refinery Road, Thomas House, Ekpan, Warri, Delta State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">08032127487</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IBADAN </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">67, Aboderin Layout ,Oni & Sons Area Ring Road, Ibadan, Oyo State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0802 909 4320</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">LAGOS ISLAND </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Cornerstone House 136, Lewis Street Obalende, Lagos State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">YABA </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">91 Herbert Macaulay Way, Sabo yaba 101001, Yaba, Lagos Mainland, Nigeria\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">01-2806500</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">IKEJA </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Swiss Guard House, 6, Adeniyi Jones Avenue, (Opposite Wahum) Ikeja, Lagos State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0818 779 6014</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">OWERRI <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span></div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">No. 67, Okigwe Road, Owerri, Imo State.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0803 541 8019</div>\r\n      </div>\r\n\r\n      <div class=\"title2\" style=\"margin-top:6% !important;\">YENOGOA <span style=\"color: #5D5D5D;font-weight:400;\">(Sales\r\n          Outlet)</span> </div>\r\n\r\n      <div class=\"inner1\" style=\"margin-top:6% !important;\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/location.svg\">\r\n        </div>\r\n        <div class=\"para\">Jay Cee Plaza, Otiotio Road,Yenezue Gene, Yenagoa, Bayelsa State\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inner1\">\r\n        <div class=\"icondiv\">\r\n          <img src=\"assets/images/call.svg\">\r\n        </div>\r\n        <div class=\"para1\">0803 741 1444</div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n<!-- <ion-footer>\r\n  <ion-tabs style=\"top:10px !important;\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr>\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/home.svg\" class=\"img\">\r\n        <ion-label class=\"font\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/contactus.svg\" class=\"activeimg\">\r\n        <ion-label class=\"fontactive\">Contact Us</ion-label>\r\n\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contactus_contactus_module_ts.js.map