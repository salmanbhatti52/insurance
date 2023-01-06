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
            { name: 'iSave Plan', image: 'assets/images/investmentplans/1.png' },
            {
                name: 'Maximum Investment Plan',
                image: 'assets/images/investmentplans/2.jpg',
            },
            {
                name: 'Cornerstone Universal Plan',
                image: 'assets/images/investmentplans/3.jpg',
            },
            {
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0YiLCJmaWxlIjoic3ViLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uYm94ZGl2e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcclxufVxyXG4uaWNvbmRpdntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbn1cclxuLmMtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29uLXAxe1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uY29uLXAye1xyXG4gIGNvbG9yOiAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogNiUgMCUgMCUgNCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 34949:
/*!****************************************************************!*\
  !*** ./src/app/sub-products/sub-products.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n\r\n        <div style=\"width:100% ;\" (click)=\"goback()\">\r\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Life/Investment Products</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"boxdiv\" *ngFor=\"let sp of subProducts\">\r\n      <div style=\"display:flex;margin-bottom: 7%;\" (click)=\"seeDetails(sp)\">\r\n        <img src=\"{{sp.image}}\" alt=\"\" style=\"width: 170px; height: 83px;\">\r\n        <p class=\"con-p2\">{{sp.name}}</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sub-products_sub-products_module_ts.js.map