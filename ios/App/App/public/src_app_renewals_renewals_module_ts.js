"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_renewals_renewals_module_ts"],{

/***/ 7951:
/*!*****************************************************!*\
  !*** ./src/app/renewals/renewals-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPageRoutingModule": () => (/* binding */ RenewalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _renewals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals.page */ 5971);




const routes = [
    {
        path: '',
        component: _renewals_page__WEBPACK_IMPORTED_MODULE_0__.RenewalsPage
    }
];
let RenewalsPageRoutingModule = class RenewalsPageRoutingModule {
};
RenewalsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RenewalsPageRoutingModule);



/***/ }),

/***/ 2433:
/*!*********************************************!*\
  !*** ./src/app/renewals/renewals.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPageModule": () => (/* binding */ RenewalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _renewals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals-routing.module */ 7951);
/* harmony import */ var _renewals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewals.page */ 5971);







let RenewalsPageModule = class RenewalsPageModule {
};
RenewalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _renewals_routing_module__WEBPACK_IMPORTED_MODULE_0__.RenewalsPageRoutingModule
        ],
        declarations: [_renewals_page__WEBPACK_IMPORTED_MODULE_1__.RenewalsPage]
    })
], RenewalsPageModule);



/***/ }),

/***/ 5971:
/*!*******************************************!*\
  !*** ./src/app/renewals/renewals.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewalsPage": () => (/* binding */ RenewalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _renewals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renewals.page.html?ngResource */ 8795);
/* harmony import */ var _renewals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renewals.page.scss?ngResource */ 2246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let RenewalsPage = class RenewalsPage {
    constructor() {
        this.show = false;
        this.Insurance = 'Car Insurance';
        this.listarray = [{ Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }, { Insurance: 'Car Insurance' }];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'renewals') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'subsequent') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.requestsType = 'renewals';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'renewals') {
            this.requestsType = 'renewals';
        }
        if (ev.detail.value === 'subsequent') {
            this.requestsType = 'subsequent';
        }
        localStorage.setItem('requestType', this.requestsType);
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
RenewalsPage.ctorParameters = () => [];
RenewalsPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }]
};
RenewalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-renewals',
        template: _renewals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_renewals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenewalsPage);



/***/ }),

/***/ 2246:
/*!********************************************************!*\
  !*** ./src/app/renewals/renewals.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.head-p {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A206D;\n  font-family: Bliss Pro;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 12% auto 5%;\n  font-family: Bliss Pro;\n}\n\n.label {\n  font-size: 14px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 2% 0% 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 16px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.btndiv {\n  margin-top: 5%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.btn1 {\n  height: 41px;\n  --background: #13027B;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n\n.btn2 {\n  height: 41px;\n  --background: #A2BB06;\n  --border-radius: 10px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3YWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsNEJBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUdBLGNBQUE7QUFFRjs7QUFBQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBR0EsY0FBQTtBQUFGIiwiZmlsZSI6InJlbmV3YWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmhlYWQtcHtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOjEyJSBhdXRvIDUlO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuXHJcbi5pbnB1dGZpZWxkIHtcclxuICBtYXJnaW46IDIlIDAlIDQlIDAlO1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmluLXRleHQge1xyXG4gIC0tY29sb3I6ICM1RDVENUQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xyXG4gIC0tcGFkZGluZy10b3A6IDUlO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLmJ0bmRpdntcclxuICBtYXJnaW4tdG9wOjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmJ0bjF7XHJcblxyXG4gIGhlaWdodDogNDFweDtcclxuICAtLWJhY2tncm91bmQ6ICMxMzAyN0I7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuXHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmJ0bjJ7XHJcblxyXG4gIGhlaWdodDogNDFweDtcclxuICAtLWJhY2tncm91bmQ6ICNBMkJCMDY7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuXHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi8vLy8vL29sZCBjb2RlIGNzc1xyXG4vLyAuc2VnbWVudDEge1xyXG4vLyAgIC0tYmFja2dyb3VuZDpub25lO1xyXG4vLyAgIC5zYnRuIHtcclxuLy8gICAgIGhlaWdodDogNDhweDtcclxuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4vLyAgICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XHJcbi8vICAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcclxuLy8gICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4vLyAgICAgLS1jb2xvcjogIzg1ODU4QTtcclxuLy8gICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbi8vICAgfVxyXG4vLyAgIC5hY3RpdmV7XHJcbi8vICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0E4QjQwMDtcclxuXHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG4vLyAuZHJvcGJveHtcclxuLy8gICBtYXJnaW46IDQlIDAlO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuLy8gICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblxyXG4vLyB9XHJcbi8vIC5pbm5lcmRyb3Bib3h7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4vLyAgIHBhZGRpbmctdG9wOiAycHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDIuOHB4O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuZXVyby10ZXh0e1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuLy8gfVxyXG4vLyAuZXVyby10ZXh0MXtcclxuLy8gICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICBtYXJnaW4tdG9wOiA1JTtcclxuLy8gfVxyXG4vLyAuZmxleC1je1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcclxuLy8gICAgIHBhZGRpbmc6IDIycHggNXB4IDIwcHggNXB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuLy8gfVxyXG4vLyAuZmxleC0ye1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5mbGV4LTIgc3BhbntcclxuLy8gICBjb2xvcjogIzg1ODU4QTtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbi8vIH1cclxuLy8gLmxlYmVsMXtcclxuLy8gICBjb2xvcjogIzFBMjA2RDtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgbWFyZ2luLXRvcDogMTAlO1xyXG4vLyB9XHJcbi8vIC5idG4xe1xyXG4vLyAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcclxuLy8gICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbi8vICAgd2lkdGg6IDExMHB4O1xyXG4vLyAgIGhlaWdodDogMzJweDtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyB9XHJcbi8vIC5idG4ye1xyXG4vLyAgIC0tYmFja2dyb3VuZDogI0E4QjQwMDtcclxuLy8gICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbi8vICAgd2lkdGg6IDExMHB4O1xyXG4vLyAgIGhlaWdodDogMzJweDtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyB9XHJcbiJdfQ== */";

/***/ }),

/***/ 8795:
/*!********************************************************!*\
  !*** ./src/app/renewals/renewals.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Renewals</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <!-- <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"renewals\" class=\"sbtn\">\r\n        <ion-label>Renewals</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"subsequent\" class=\"sbtn\" [class.active]=\"requestsType=='subsequent'\"\r\n        style=\"margin-left: 5%;\">\r\n        <ion-label>Subsequent</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment> -->\r\n\r\n    <!-- <div style=\"margin-top:30px;\">\r\n      <label class=\"con-l1\">Policy Type</label>\r\n      <div class=\"dropbox\">\r\n        <div class=\"innerdropbox\" (click)=\"openlist()\">\r\n          <div class=\"euro-text\">{{Insurance}}</div>\r\n          <div class=\"imgdiv\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectInsurance(list)\">\r\n            <div class=\"euro-text1\">{{list.Insurance}}</div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"requestsType=='renewals'\">\r\n      <div class=\"flex-c\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn1\">Renewal</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn1\">Renewal</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn1\">Renewal</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!----------------- request type subsequent-------------------->\r\n    <!-- <div *ngIf=\"requestsType=='subsequent'\" >\r\n      <div class=\"flex-c\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn2\">subsequent</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn2\">subsequent</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-c\" style=\"margin-top:5%\">\r\n        <div>\r\n          <img src=\"assets/images/car.svg\">\r\n          <div class=\"lebel1\">Motor Insurance</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"flex-2\">\r\n            <img src=\"assets/images/user1.png\"><span>Jhon Doe</span>\r\n          </div>\r\n          <div style=\"margin-top:10%;\">\r\n            <ion-button class=\"btn2\">subsequent</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"label\">First Name</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"John\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Last Name</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Doe\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Vehicle Make</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Honda \" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Vehicle Model</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"Accord\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Sum Insured</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"number\" placeholder=\"3,200,000\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Review Sum Insured </div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"label\">Premium</div>\r\n    <div class=\"inputfield\">\r\n      <ion-input style=\"height: 48px;\" type=\"text\" placeholder=\"3,000\" class=\"in-text\"></ion-input>\r\n    </div>\r\n\r\n    <div class=\"btndiv\">\r\n      <ion-button class=\"btn1\">Renew Policy Now</ion-button>\r\n      <ion-button class=\"btn2\">Schedule a reminder</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_renewals_renewals_module_ts.js.map