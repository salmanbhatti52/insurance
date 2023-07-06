"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sub-products_sub-products_module_ts"],{

/***/ 35915:
/*!*************************************************************!*\
  !*** ./src/app/sub-products/sub-products-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubProductsPageRoutingModule": () => (/* binding */ SubProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sub_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-products.page */ 42004);




const routes = [
    {
        path: '',
        component: _sub_products_page__WEBPACK_IMPORTED_MODULE_0__.SubProductsPage
    }
];
let SubProductsPageRoutingModule = class SubProductsPageRoutingModule {
};
SubProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubProductsPageRoutingModule);



/***/ }),

/***/ 18565:
/*!*****************************************************!*\
  !*** ./src/app/sub-products/sub-products.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubProductsPageModule": () => (/* binding */ SubProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sub_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-products-routing.module */ 35915);
/* harmony import */ var _sub_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-products.page */ 42004);







let SubProductsPageModule = class SubProductsPageModule {
};
SubProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sub_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubProductsPageRoutingModule
        ],
        declarations: [_sub_products_page__WEBPACK_IMPORTED_MODULE_1__.SubProductsPage]
    })
], SubProductsPageModule);



/***/ }),

/***/ 42004:
/*!***************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubProductsPage": () => (/* binding */ SubProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sub_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-products.page.html?ngResource */ 34949);
/* harmony import */ var _sub_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-products.page.scss?ngResource */ 19805);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);








let SubProductsPage = class SubProductsPage {
    constructor(location, http, api, navctrl) {
        this.location = location;
        this.http = http;
        this.api = api;
        this.navctrl = navctrl;
        this.subProducts = [
            {
                id: 0,
                name: 'iSave Plan',
                image: 'assets/images/investmentplans/1.png'
            },
            {
                id: 1,
                name: 'Maximum Investment Plan',
                image: 'assets/images/investmentplans/2.jpg',
            },
            {
                id: 2,
                name: 'Cornerstone Universal Plan',
                image: 'assets/images/investmentplans/3.jpg',
            },
            {
                id: 3,
                name: 'Children Education Fund',
                image: 'assets/images/investmentplans/4.png',
            },
        ];
    }
    ngOnInit() {
        this.token = localStorage.getItem('token');
        console.log(this.token);
    }
    goback() {
        this.location.back();
    }
    seeDetails(sp) {
        console.log(this.token);
        // this.api
        //   .postparam(
        //     'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&insureval=1000&desiredprem=5000&userid=C52035&covdur=2&curdate=2022-09-29&dbirth=1995-09-29&pdvopt=test&opt=ICEDUP&process_code=908',
        //     '39109f7df56e1CORNERStone9e685066bb852'
        //   )
        //   .subscribe((res: any) => {
        // console.log('response====', res);
        // this.api.presenttoast(res.result.message);
        localStorage.setItem('subProName', sp.name);
        localStorage.setItem('product_id', sp.id);
        if (sp.name == 'iSave Plan') {
            this.navctrl.navigateForward('ivplan1');
        }
        if (sp.name == 'Maximum Investment Plan') {
            this.navctrl.navigateForward('ivplan2');
        }
        if (sp.name == 'Cornerstone Universal Plan') {
            this.navctrl.navigateForward('ivplan3');
        }
        if (sp.name == 'Children Education Fund') {
            this.navctrl.navigateForward('ivplan4');
        }
        // });
    }
};
SubProductsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
SubProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sub-products',
        template: _sub_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubProductsPage);



/***/ }),

/***/ 19805:
/*!****************************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0YiLCJmaWxlIjoic3ViLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndyYXBwZXJ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5ib3hkaXZ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XG59XG4uaWNvbmRpdntcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbn1cbi5jLWNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbi1wMXtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmNvbi1wMntcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiA2JSAwJSAwJSA0JTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 34949:
/*!****************************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex; align-items: center\">\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\n        <div style=\"width:100% ;\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n        <!-- <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Life/Investment Products</div>\n      </ion-col>\n      <ion-col size=\"2\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"seeDetails(sp)\">\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"width: 170px; height: 83px\" />\n        <p class=\"con-p2\">{{sp.name}}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sub-products_sub-products_module_ts.js.map