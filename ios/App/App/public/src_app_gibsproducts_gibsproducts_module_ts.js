"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_gibsproducts_gibsproducts_module_ts"],{

/***/ 43310:
/*!*************************************************************!*\
  !*** ./src/app/gibsproducts/gibsproducts-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GibsproductsPageRoutingModule": () => (/* binding */ GibsproductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gibsproducts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsproducts.page */ 95197);




const routes = [
    {
        path: '',
        component: _gibsproducts_page__WEBPACK_IMPORTED_MODULE_0__.GibsproductsPage
    }
];
let GibsproductsPageRoutingModule = class GibsproductsPageRoutingModule {
};
GibsproductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GibsproductsPageRoutingModule);



/***/ }),

/***/ 71948:
/*!*****************************************************!*\
  !*** ./src/app/gibsproducts/gibsproducts.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GibsproductsPageModule": () => (/* binding */ GibsproductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _gibsproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsproducts-routing.module */ 43310);
/* harmony import */ var _gibsproducts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gibsproducts.page */ 95197);







let GibsproductsPageModule = class GibsproductsPageModule {
};
GibsproductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gibsproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__.GibsproductsPageRoutingModule
        ],
        declarations: [_gibsproducts_page__WEBPACK_IMPORTED_MODULE_1__.GibsproductsPage]
    })
], GibsproductsPageModule);



/***/ }),

/***/ 95197:
/*!***************************************************!*\
  !*** ./src/app/gibsproducts/gibsproducts.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GibsproductsPage": () => (/* binding */ GibsproductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _gibsproducts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gibsproducts.page.html?ngResource */ 48443);
/* harmony import */ var _gibsproducts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gibsproducts.page.scss?ngResource */ 64754);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);








let GibsproductsPage = class GibsproductsPage {
    constructor(router, modal, location, api) {
        this.router = router;
        this.modal = modal;
        this.location = location;
        this.api = api;
        this.motorsubproducts = [];
    }
    ngOnInit() {
        this.gibsproduct();
    }
    gibsproduct() {
        this.api.showLoader();
        const myData = {
            sid: 'ECHANNEL2',
            token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
        };
        this.api.gibsapi(myData).subscribe((res) => {
            console.log(res);
            const token = res.accessToken;
            this.motorproductonly(token);
        }, (err) => {
            console.log(err);
        });
    }
    motorproductonly(token) {
        const Bearertoken = token;
        this.api
            .getpolicy('http://testcipapiservices.gibsonline.com/api/metadata/products', Bearertoken)
            .subscribe((res) => {
            this.api.hideLoader();
            console.log('ressssss', res);
            res.map((value, index) => {
                if (value.productName == 'PRIVATE MOTOR-AUTO CLASSIC' ||
                    value.productName == 'PRIVATE MOTOR-AUTO PLUS' ||
                    value.productName == 'UBER CLASSIC MOTOR') {
                    this.motorsubproducts.push(value);
                }
            });
            // console.log('subproducts after check---11', this.motorsubproducts);
            // this.counter++;
            // console.log('this.counter++', this.counter);
        }, (err) => {
            this.api.hideLoader();
        });
    }
    GProductdetail(ID) {
        const myData = {
            sid: 'ECHANNEL2',
            token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
        };
        this.api.gibsapi(myData).subscribe((res) => {
            // console.log(res);
            const token = res.accessToken;
            this.api
                .getpolicy('http://testcipapiservices.gibsonline.com/api/metadata/products/' +
                ID, token)
                .subscribe((res) => {
                console.log('gibs product detail', res);
                localStorage.setItem('gibsproduct', JSON.stringify(res));
                this.router.navigate(['comprehensivequote']);
            });
        }, (err) => {
            console.log(err);
            this.api.hideLoader();
        });
    }
    goback() {
        this.location.back();
    }
};
GibsproductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService }
];
GibsproductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-gibsproducts',
        template: _gibsproducts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gibsproducts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GibsproductsPage);



/***/ }),

/***/ 64754:
/*!****************************************************************!*\
  !*** ./src/app/gibsproducts/gibsproducts.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background:transparent ;\n  --box-shadow: none;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpYnNwcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBV0Y7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFjRiIsImZpbGUiOiJnaWJzcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5ib3hkaXZ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xyXG59XHJcbi5pY29uZGl2e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG4uYy1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb24tcDF7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jb24tcDJ7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiA2JSAwJSAwJSA0JTtcclxufVxyXG4uaW5saW5lLXRleHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmNvbi1wM3tcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uY29uLXA0e1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uY29uLXA1e1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDclXHJcbn1cclxuLmJ0bntcclxuICAtLWJhY2tncm91bmQ6IzFBMjA2RCA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgd2lkdGg6MTcxcHggO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYnRuMXtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6MTJweDtcclxuICB3aWR0aDoxNzFweCA7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0E4QjQwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 48443:
/*!****************************************************************!*\
  !*** ./src/app/gibsproducts/gibsproducts.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Motor Products</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"c-center\">\r\n      <p class=\"con-p1\">Make a Quote</p>\r\n    </div>\r\n    <div style=\"font-size: 20px;\r\n    color: #000;\r\n    font-weight: 500;\r\n    margin-bottom: 3%;\">The products for mobile are:</div>\r\n\r\n\r\n\r\n    <div class=\"boxdiv\" *ngFor=\"let gibs of motorsubproducts\">\r\n      <div style=\"display:flex;margin-bottom: 7%;\" (click)=\"GProductdetail(gibs.productID)\">\r\n        <img src=\"assets/images/motorcar.png\" alt=\"\" style=\"    width: 100px;\r\n        height: 100px;\r\n        object-fit: cover;\">\r\n        <p style=\"color: #1A206D;\r\n        font-size: 17px;\r\n        font-weight: 500;\r\n        margin: 6% 0% 0% 4%;\">{{gibs.productName}}</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_gibsproducts_gibsproducts_module_ts.js.map