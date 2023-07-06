"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_localsubproduct_localsubproduct_module_ts"],{

/***/ 24672:
/*!*******************************************************************!*\
  !*** ./src/app/localsubproduct/localsubproduct-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalsubproductPageRoutingModule": () => (/* binding */ LocalsubproductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _localsubproduct_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localsubproduct.page */ 80629);




const routes = [
    {
        path: '',
        component: _localsubproduct_page__WEBPACK_IMPORTED_MODULE_0__.LocalsubproductPage
    }
];
let LocalsubproductPageRoutingModule = class LocalsubproductPageRoutingModule {
};
LocalsubproductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocalsubproductPageRoutingModule);



/***/ }),

/***/ 12035:
/*!***********************************************************!*\
  !*** ./src/app/localsubproduct/localsubproduct.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalsubproductPageModule": () => (/* binding */ LocalsubproductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _localsubproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localsubproduct-routing.module */ 24672);
/* harmony import */ var _localsubproduct_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localsubproduct.page */ 80629);







let LocalsubproductPageModule = class LocalsubproductPageModule {
};
LocalsubproductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _localsubproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalsubproductPageRoutingModule
        ],
        declarations: [_localsubproduct_page__WEBPACK_IMPORTED_MODULE_1__.LocalsubproductPage]
    })
], LocalsubproductPageModule);



/***/ }),

/***/ 80629:
/*!*********************************************************!*\
  !*** ./src/app/localsubproduct/localsubproduct.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalsubproductPage": () => (/* binding */ LocalsubproductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _localsubproduct_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localsubproduct.page.html?ngResource */ 53396);
/* harmony import */ var _localsubproduct_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localsubproduct.page.scss?ngResource */ 94993);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);



/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */





let LocalsubproductPage = class LocalsubproductPage {
    constructor(router, modal, location, api) {
        this.router = router;
        this.modal = modal;
        this.location = location;
        this.api = api;
        this.motorsubproducts = [];
        this.arr1 = [];
        this.arr2 = [];
        this.arr3 = [];
        this.arr4 = [];
        this.arr5 = [];
        this.counter = 0;
    }
    ngOnInit() {
        this.subProducts = JSON.parse(localStorage.getItem('subProducts'));
        this.arr1 = this.subProducts;
        this.productID = localStorage.getItem('productid2');
        console.log('productid', this.productID);
        this.insurancename = localStorage.getItem('productName');
        this.subProductsshow(this.productID);
    }
    goback() {
        if (this.counter <= 1) {
            this.location.back();
        }
        else {
            if (this.counter == 2) {
                this.subProducts = this.arr1;
            }
            if (this.counter == 3) {
                this.subProducts = this.arr2;
            }
            if (this.counter == 4) {
                this.subProducts = this.arr3;
            }
            if (this.counter == 5) {
                this.subProducts = this.arr4;
            }
            this.counter--;
        }
        console.log('this.counter--', this.counter);
    }
    dismiss() {
        this.modal.dismiss();
    }
    subProductsshow(id) {
        const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
        this.api.insertData(myData).subscribe((res) => {
            const subproducts = [];
            console.log('subProducts---------11111', res);
            res.subproducts.map((value, index) => {
                // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen") {
                //   subproducts.push(value);
                // }
                subproducts.push(value);
            });
            console.log('subproducts after check---22', subproducts);
            this.counter++;
            console.log('this.counter++', this.counter);
            if (this.counter == 1) {
                this.arr1 = subproducts;
            }
            if (this.counter == 2) {
                this.arr2 = subproducts;
            }
            if (this.counter == 3) {
                this.arr3 = subproducts;
            }
            if (this.counter == 4) {
                this.arr4 = subproducts;
            }
            if (this.counter == 5) {
                this.arr5 = subproducts;
            }
            // return;
            this.subProducts = subproducts;
            localStorage.setItem('subProducts', JSON.stringify(subproducts));
        }, (err) => {
            console.log(err);
        });
    }
    seeDetails(sp) {
        console.log(sp);
        if (sp.name == 'Local Travel Insurance') {
            localStorage.setItem('productid2', sp.id);
            this.router.navigate(['/localsubproduct']);
        }
        else {
            if (sp.product_for_quote == 1) {
                // this.router.navigate(['/localpoliciesform']);
                this.router.navigate(['/localinformation']);
                localStorage.setItem('subProId', sp.id);
                localStorage.setItem('subProName', sp.name);
            }
            else {
                this.subProductsshow(sp.id);
            }
        }
        // this.modal.dismiss(sp).then(data => {
        //   console.log('data came back from modal');
        //   console.log(data);
        // })
    }
    handleImgError(ev, item, url) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/placeholder.jpg`;
        source.src = imgSrc;
    }
};
LocalsubproductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
LocalsubproductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-localsubproduct',
        template: _localsubproduct_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_localsubproduct_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocalsubproductPage);



/***/ }),

/***/ 94993:
/*!**********************************************************************!*\
  !*** ./src/app/localsubproduct/localsubproduct.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background:transparent ;\n  --box-shadow: none;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2Fsc3VicHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBV0Y7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFjRiIsImZpbGUiOiJsb2NhbHN1YnByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuLmJveGRpdntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcbn1cbi5pY29uZGl2e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xufVxuLmMtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29uLXAxe1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uY29uLXAye1xuICBjb2xvcjogIzFBMjA2RDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDYlIDAlIDAlIDQlO1xufVxuLmlubGluZS10ZXh0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb24tcDN7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbi1wNHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY29uLXA1e1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbn1cbi5idG5kaXZ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNyVcbn1cbi5idG57XG4gIC0tYmFja2dyb3VuZDojMUEyMDZEIDtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XG4gIHdpZHRoOjE3MXB4IDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRuMXtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudCA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XG4gIHdpZHRoOjE3MXB4IDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXI6MXB4IHNvbGlkICNBOEI0MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4iXX0= */";

/***/ }),

/***/ 53396:
/*!**********************************************************************!*\
  !*** ./src/app/localsubproduct/localsubproduct.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">{{insurancename}}</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"c-center\">\n      <p class=\"con-p1\">Make a Quote</p>\n    </div>\n    <!-- <div style=\"font-size: 20px;\n    color: #000;\n    font-weight: 500;\n    margin-bottom: 3%;\">The products for mobile are:</div> -->\n\n    <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"seeDetails(sp)\">\n        <img (error)=\"handleImgError($event, userIMG)\" src=\"{{sp.image}}\" alt=\"\" style=\"width: 100px; height: 100px;\" />\n        <p class=\"con-p2\">{{sp.name}}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_localsubproduct_localsubproduct_module_ts.js.map