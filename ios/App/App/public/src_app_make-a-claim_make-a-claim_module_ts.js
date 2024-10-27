"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_make-a-claim_make-a-claim_module_ts"],{

/***/ 6774:
/*!*************************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAClaimPageRoutingModule": () => (/* binding */ MakeAClaimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _make_a_claim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-a-claim.page */ 37923);




const routes = [
    {
        path: '',
        component: _make_a_claim_page__WEBPACK_IMPORTED_MODULE_0__.MakeAClaimPage
    }
];
let MakeAClaimPageRoutingModule = class MakeAClaimPageRoutingModule {
};
MakeAClaimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeAClaimPageRoutingModule);



/***/ }),

/***/ 34147:
/*!*****************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAClaimPageModule": () => (/* binding */ MakeAClaimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _make_a_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-a-claim-routing.module */ 6774);
/* harmony import */ var _make_a_claim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-a-claim.page */ 37923);







let MakeAClaimPageModule = class MakeAClaimPageModule {
};
MakeAClaimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _make_a_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakeAClaimPageRoutingModule
        ],
        declarations: [_make_a_claim_page__WEBPACK_IMPORTED_MODULE_1__.MakeAClaimPage]
    })
], MakeAClaimPageModule);



/***/ }),

/***/ 37923:
/*!***************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAClaimPage": () => (/* binding */ MakeAClaimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _make_a_claim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-a-claim.page.html?ngResource */ 43339);
/* harmony import */ var _make_a_claim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-a-claim.page.scss?ngResource */ 94223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let MakeAClaimPage = class MakeAClaimPage {
    constructor() {
        this.ph_value = 'Example@Gmail.com';
        this.hide = false;
        this.hide1 = false;
        this.changeview = false;
        this.disvalue = true;
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'NewClaim') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'PreviousClaim') {
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
            // if(this.changeview === true){
            //   this.hide = true;
            //   this.hide1 = false;
            // }
        }
        if (ev.detail.value === 'PreviousClaim') {
            this.requestsType = 'PreviousClaim';
            // if(this.changeview === true){
            //   this.hide = false;
            //   this.hide1 = true;
            // }
        }
        localStorage.setItem('requestType1', this.requestsType);
    }
    ngOnInit() {
    }
    changeView() {
        // this.ph_value = 'Enter Customer ID';
        // this.changeview =true;
        this.hide = true;
        // this.hide1 = false;
    }
};
MakeAClaimPage.ctorParameters = () => [];
MakeAClaimPage.propDecorators = {
    mySegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['mySegment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }]
};
MakeAClaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-make-a-claim',
        template: _make_a_claim_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_make_a_claim_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MakeAClaimPage);



/***/ }),

/***/ 94223:
/*!****************************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.container {\n  width: 85%;\n  margin: 0% auto 25%;\n}\n\n.segment1 {\n  padding: 5px 3px;\n  border-radius: 12px;\n  margin-top: 10px;\n  --background: #E8E8E7;\n  width: 100%;\n}\n\n.segment1 .sbtn {\n  --border-width: 0;\n  --margin-bottom: 5px;\n  --margin-top: 5px;\n  border-radius: 12px;\n  --background-checked: #1A206D;\n  --indicator-color: transparent !important;\n  --color: #85858A;\n  --color-checked: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.con-p1 {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1A206D;\n  margin: 20px 0px 0px 0px;\n}\n\n.input {\n  height: 48px;\n  width: 100%;\n  margin: 20px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  --padding-start: 15px;\n  --padding-end: 20px;\n}\n\nimg.customer {\n  margin: 13px 0px 12px 18px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.car-css {\n  width: 100%;\n  height: 50px;\n}\n\n.con-l1 {\n  font-size: 18px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\n.btn {\n  width: 80px;\n  height: 32px;\n  --background: #1A206D;\n  --border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  --box-shadow: none;\n}\n\n.img-div {\n  display: flex;\n  align-items: center;\n  margin: 18px auto 0px 27%;\n  text-align: right;\n}\n\n.con-l2 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-left: 8px;\n  color: #85858A;\n}\n\n.rec-div {\n  display: flex;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2UtYS1jbGFpbS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFxpbnN1cmFuY2VcXHNyY1xcYXBwXFxtYWtlLWEtY2xhaW1cXG1ha2UtYS1jbGFpbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURGSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJTjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREhBO0VBQ0ksMEJBQUE7QUNNSjs7QURKQTtFQUNJLDRCQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0FDYUoiLCJmaWxlIjoibWFrZS1hLWNsYWltLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFBMjA2RDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwJSBhdXRvIDI1JTtcclxufVxyXG4uc2VnbWVudDEge1xyXG4gICAgcGFkZGluZzogNXB4IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC5zYnRuIHtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAtLWNvbG9yOiAjODU4NThBO1xyXG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufVxyXG4uY29uLXAxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xyXG59XHJcbi5pbnB1dHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG59XHJcbmltZy5jdXN0b21lciB7XHJcbiAgICBtYXJnaW46IDEzcHggMHB4IDEycHggMThweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxufVxyXG4uY2FyLWNzc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5jb24tbDF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmltZy1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMThweCBhdXRvIDBweCAyNyU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY29uLWwye1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjb2xvcjogIzg1ODU4QTtcclxufVxyXG4ucmVjLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XHJcbn1cclxuIiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0byAyNSU7XG59XG5cbi5zZWdtZW50MSB7XG4gIHBhZGRpbmc6IDVweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI0U4RThFNztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VnbWVudDEgLnNidG4ge1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XG4gIC0tbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6ICM4NTg1OEE7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29uLXAxIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xufVxuXG4uaW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0byAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xufVxuXG5pbWcuY3VzdG9tZXIge1xuICBtYXJnaW46IDEzcHggMHB4IDEycHggMThweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbn1cblxuLmNhci1jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29uLWwxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFBMjA2RDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmltZy1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggYXV0byAwcHggMjclO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNvbi1sMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICM4NTg1OEE7XG59XG5cbi5yZWMtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDE3NiwgMTgxLCAwLCAwLjEpO1xufSJdfQ== */";

/***/ }),

/***/ 43339:
/*!****************************************************************!*\
  !*** ./src/app/make-a-claim/make-a-claim.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width:100% ;\">\r\n              <img src=\"assets/images/sb-button.svg\" alt=\"sb-btn\">\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Claim</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" #mySegment scrollable=\"true\" class=\"segment1\">\r\n      <ion-segment-button mode=\"ios\" value=\"NewClaim\" class=\"sbtn\">\r\n        <ion-label>New Claim</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button checked mode=\"ios\" value=\"PreviousClaim\" class=\"sbtn\">\r\n        <ion-label>Previous Claim</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div>\r\n      <p class=\"con-p1\">Enter Customer ID</p>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-input class=\"input\" type=\"email\" (ionInput)=\"changeView()\" placeholder=\"Enter Customer ID\" (ionFocus)=\"changeView()\"><img class=\"customer\" src=\"assets/images/cust-logo.svg\"></ion-input>\r\n      <!-- placeholder=\"{{ph_value}}\" -->\r\n    </div>\r\n\r\n    <div style=\"margin-top:123px ;\" *ngIf=\"hide===false\">\r\n      <img src=\"assets/images/record-img.svg\" alt=\"\">\r\n    </div>\r\n    \r\n    <!-- -------------------record---------------- -->\r\n    <div  *ngIf=\"hide===true\">\r\n      <div class=\"rec-div\" style=\"margin-top: 20px;\">\r\n        <div style=\"margin: 39px 0px 40px 25px; width: 100%; text-align: center;\">\r\n          <div style=\"padding: 10px 10px 5px;\">\r\n            <img class=\"car-css\" src=\"assets/images/car.svg\">\r\n          </div>\r\n          <div>\r\n            <ion-label class=\"con-l1\">Motor Insurance</ion-label>\r\n          </div>\r\n          \r\n        </div>\r\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='NewClaim'\">\r\n          <ion-button style=\"margin: 0px; --background:#E8E8E7;\"   class=\"btn\" size=\"small\" [disabled]=true >Status</ion-button>\r\n          <ion-button style=\"margin: 0px; margin-top: 12px;\" class=\"btn\" size=\"small\" >Claim</ion-button>\r\n          <div class=\"img-div\" style=\"margin: 18px auto 0px 26%;\">\r\n            <img src=\"assets/images/john-doe.svg\">\r\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\r\n          </div>\r\n        </div>\r\n\r\n        <!-------- PreviousClaim -->\r\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='PreviousClaim'\">\r\n          <ion-button style=\"margin: 0px; --background:#A8B400;\"   class=\"btn\" size=\"small\"  >Status</ion-button>\r\n          <ion-button style=\"margin: 0px; margin-top: 12px; --background:#E8E8E7;\" class=\"btn\" size=\"small\" [disabled]=true>Claim</ion-button>\r\n          <div class=\"img-div\" style=\"margin: 18px auto 0px 26%;\">\r\n            <img src=\"assets/images/john-doe.svg\">\r\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"rec-div\" style=\"margin-top: 16.5px;\">\r\n        <div style=\"margin: 15px 0px 15px 20px; width: 100%; text-align: center;\">\r\n          <div style=\"padding: 10px 10px 5px;\">\r\n            <img class=\"car-css\"  src=\"assets/images/safe-home.svg\">\r\n          </div>\r\n          <div style=\"margin-left: 5px;\">\r\n            <ion-label class=\"con-l1\" >Home Insurance</ion-label>\r\n          </div>\r\n         \r\n        </div>\r\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='NewClaim'\" >\r\n          <ion-button style=\"margin: 0px; --background:#E8E8E7;\"   class=\"btn\" size=\"small\" [disabled]=true >Status</ion-button>\r\n          <ion-button style=\"margin: 0px; margin-top: 12px;\" class=\"btn\" size=\"small\" >Claim</ion-button>\r\n          <div class=\"img-div\"  >\r\n            <img src=\"assets/images/john-doe.svg\">\r\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\r\n          </div>\r\n        </div>\r\n\r\n        <!-------- PreviousClaim -->\r\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='PreviousClaim'\">\r\n          <ion-button style=\"margin: 0px; --background:#A8B400;\"   class=\"btn\" size=\"small\"  >Status</ion-button>\r\n          <ion-button style=\"margin: 0px; margin-top: 12px; --background:#E8E8E7;\" class=\"btn\" size=\"small\" [disabled]=true>Claim</ion-button>\r\n          <div class=\"img-div\">\r\n            <img src=\"assets/images/john-doe.svg\">\r\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"rec-div\" style=\"margin-top: 16.5px;\">\r\n        <div style=\"margin: 15px 0px 15px 20px; width: 100%;text-align:center ;\">\r\n          <div style=\"padding: 10px 10px 5px;\">\r\n            <img class=\"car-css\" src=\"assets/images/home-at-fire.svg\">\r\n          </div>\r\n          <div style=\"margin-left: 5px;\">\r\n            <ion-label class=\"con-l1\" >Combined Fire and Burglary</ion-label>\r\n          </div>\r\n         \r\n        </div>\r\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='NewClaim'\" >\r\n          <ion-button style=\"margin: 0px; --background:#E8E8E7;\"   class=\"btn\" size=\"small\" [disabled]=true >Status</ion-button>\r\n          <ion-button style=\"margin: 0px; margin-top: 12px;\" class=\"btn\" size=\"small\" >Claim</ion-button>\r\n          <div class=\"img-div\"  >\r\n            <img src=\"assets/images/john-doe.svg\">\r\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\r\n          </div>\r\n        </div>\r\n\r\n        <!-------- PreviousClaim -->\r\n        <div style=\"width: 100%; margin: 16px 24px 16px 0px; text-align: right; \" *ngIf=\"requestsType=='PreviousClaim'\">\r\n          <ion-button style=\"margin: 0px; --background:#A8B400;\"   class=\"btn\" size=\"small\"  >Status</ion-button>\r\n          <ion-button style=\"margin: 0px; margin-top: 12px; --background:#E8E8E7;\" class=\"btn\" size=\"small\" [disabled]=true>Claim</ion-button>\r\n          <div class=\"img-div\">\r\n            <img src=\"assets/images/john-doe.svg\">\r\n            <ion-label class=\"con-l2\" style=\"margin-left: 8px;\">John Doe</ion-label>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n\r\n    \r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_make-a-claim_make-a-claim_module_ts.js.map