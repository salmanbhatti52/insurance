"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_makeaclaim_makeaclaim_module_ts"],{

/***/ 6326:
/*!*********************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPageRoutingModule": () => (/* binding */ MakeaclaimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _makeaclaim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page */ 406);




const routes = [
    {
        path: '',
        component: _makeaclaim_page__WEBPACK_IMPORTED_MODULE_0__.MakeaclaimPage
    }
];
let MakeaclaimPageRoutingModule = class MakeaclaimPageRoutingModule {
};
MakeaclaimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeaclaimPageRoutingModule);



/***/ }),

/***/ 3268:
/*!*************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPageModule": () => (/* binding */ MakeaclaimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _makeaclaim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim-routing.module */ 6326);
/* harmony import */ var _makeaclaim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page */ 406);







let MakeaclaimPageModule = class MakeaclaimPageModule {
};
MakeaclaimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _makeaclaim_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakeaclaimPageRoutingModule
        ],
        declarations: [_makeaclaim_page__WEBPACK_IMPORTED_MODULE_1__.MakeaclaimPage]
    })
], MakeaclaimPageModule);



/***/ }),

/***/ 406:
/*!***********************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeaclaimPage": () => (/* binding */ MakeaclaimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeaclaim.page.html?ngResource */ 6759);
/* harmony import */ var _makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeaclaim.page.scss?ngResource */ 6005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let MakeaclaimPage = class MakeaclaimPage {
    constructor() {
        this.show = false;
        this.Insurance = 'Car Insurance';
        this.listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'NewClaim') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'ClaimTracker') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.requestsType = 'NewClaim';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'NewClaim') {
            this.requestsType = 'NewClaim';
        }
        if (ev.detail.value === 'ClaimTracker') {
            this.requestsType = 'ClaimTracker';
        }
        localStorage.setItem('requestType1', this.requestsType);
    }
    openlist() {
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
    selectInsurance(list) {
        this.Insurance = list.Insurance;
        this.show = false;
    }
};
MakeaclaimPage.ctorParameters = () => [];
MakeaclaimPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }]
};
MakeaclaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-makeaclaim',
        template: _makeaclaim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_makeaclaim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MakeaclaimPage);



/***/ }),

/***/ 6005:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 10% auto 0%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: transparent;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 25px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  --background: #85858a;\n  color: #fff;\n  margin-right: 5%;\n  height: 45px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 12px 15px;\n}\n\n.innerdropbox {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 2px;\n  padding-bottom: 2.8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.label {\n  font-size: 14px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.custom-file-input {\n  color: transparent;\n  width: 100%;\n  margin-top: 2%;\n}\n\n.custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Choose\";\n  display: inline-block;\n  background: #1A206D;\n  border-radius: 5px;\n  padding: 12px 8px;\n  outline: none;\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n  width: 100%;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.btndiv {\n  padding-bottom: 4%;\n  width: 85%;\n  margin: 0% auto;\n}\n\n.btn1 {\n  --background: #1A206D;\n  --border-radius: 12px;\n  width: 100%;\n  height: 48px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VhY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtBQUdKOztBQURFO0VBQ0UsNEJBQUE7QUFJSjs7QUFERTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBSUo7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBRUEsa0JBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUtKIiwiZmlsZSI6Im1ha2VhY2xhaW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxMCUgYXV0byAwJTtcclxufVxyXG4uc2VnbWVudDEge1xyXG4gIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAuc2J0biB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLS1tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICM4NTg1OEE7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODU4NThhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bib3h7XHJcbiAgICBtYXJnaW46IDQlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblxyXG4gIH1cclxuICAuaW5uZXJkcm9wYm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIH1cclxuXHJcbiAgLmV1cm8tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgfVxyXG4gIC5ldXJvLXRleHQxe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgfVxyXG5cclxuICAuaW5wdXRmaWVsZCB7XHJcbiAgICBtYXJnaW46IDIlIDAlIDQlIDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaW4tdGV4dCB7XHJcbiAgICAtLWNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNyU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1JTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbiAgLmN1c3RvbS1maWxlLWlucHV0IHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1pbnB1dDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIkNob29zZVwiO1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuZGl2e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxuICB9XHJcbiAgLmJ0bjF7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuIl19 */";

/***/ }),

/***/ 6759:
/*!************************************************************!*\
  !*** ./src/app/makeaclaim/makeaclaim.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Claim</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\r\n        <ion-label>New Claim</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"ClaimTracker\" class=\"sbtn\">\r\n        <ion-label>Claim Tracker</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div class=\"dropbox\">\r\n      <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n        <div class=\"euro-text\">{{Insurance}}</div>\r\n        <div class=\"imgdiv\">\r\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n          <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"show==true\">\r\n        <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n          <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"label\">Policy Number or Registration Number</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"number\" placeholder=\"2111\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Claims required information</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"information\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Claims Supporting Document</div>\r\n\r\n    <input class=\"custom-file-input\" type=\"file\" (change)=\"selectFile($event,'vehFrontPic')\"\r\n      accept=\"image/x-png,image/gif,image/jpeg\">\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"btndiv\">\r\n    <ion-button class=\"btn1\">Submit claim</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_makeaclaim_makeaclaim_module_ts.js.map