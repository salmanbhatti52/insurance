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
        // this.gibsproduct();
        this.getcarclasses();
    }
    getcarclasses() {
        // this.api.showLoader()
        const myData = 'myData={"verify_token":"' +
            localStorage.getItem('token') +
            '","product_class":"comprehensive_motor_plans","method":"get_car_classes"}';
        this.api.insertData(myData).subscribe((res) => {
            this.api.hideLoader();
            console.log(res);
            this.motorsubproducts = res.values;
        }, (err) => {
            this.api.hideLoader();
            console.log(err);
        });
    }
    // gibsproduct() {
    //   this.api.showLoader();
    //   const myData = {
    //     sid: 'ECHANNEL2',
    //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
    //   };
    //   this.api.gibsapi(myData).subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       const token = res.accessToken;
    //       this.motorproductonly(token);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }
    // motorproductonly(token) {
    //   const Bearertoken = token;
    //   this.api
    //     .getpolicy(
    //       'http://testcipapiservices.gibsonline.com/api/metadata/products',
    //       Bearertoken
    //     )
    //     .subscribe(
    //       (res: any) => {
    //         this.api.hideLoader();
    //         console.log('ressssss', res);
    //         res.map((value, index) => {
    //           if (
    //             value.productName == 'PRIVATE MOTOR-AUTO CLASSIC' ||
    //             value.productName == 'PRIVATE MOTOR-AUTO PLUS' ||
    //             value.productName == 'UBER CLASSIC MOTOR'
    //           ) {
    //             this.motorsubproducts.push(value);
    //           }
    //         });
    //         // console.log('subproducts after check---11', this.motorsubproducts);
    //         // this.counter++;
    //         // console.log('this.counter++', this.counter);
    //       },
    //       (err) => {
    //         this.api.hideLoader();
    //       }
    //     );
    // }
    GProductdetail(p) {
        console.log(p);
        this.router.navigate(['gibsplans', {
                productType: p
            }]);
        // if (p == 'Auto Classic (5% Of vehicle value)') {
        //   this.productType = 'Auto Classic'
        // } if (p == 'Auto Plus (5% Of vehicle value)') {
        //   this.productType = 'Auto Plus'
        // }
        // if (p == 'Uber Classic (5% Of vehicle value)') {
        //   this.productType = 'Uber Classic'
        // }
        // this.router.navigate(['gibsplans', {
        //   productType: this.productType
        // }]);
    }
    // GProductdetail(ID) {
    //   const myData = {
    //     sid: 'ECHANNEL2',
    //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
    //   };
    //   this.api.gibsapi(myData).subscribe(
    //     (res: any) => {
    //       // console.log(res);
    //       const token = res.accessToken;
    //       this.api
    //         .getpolicy(
    //           'http://testcipapiservices.gibsonline.com/api/metadata/products/' +
    //           ID,
    //           token
    //         )
    //         .subscribe((res: any) => {
    //           console.log('gibs product detail', res);
    //           localStorage.setItem('gibsproduct', JSON.stringify(res));
    //           this.router.navigate(['gibsplans']);
    //         });
    //     },
    //     (err) => {
    //       console.log(err);
    //       this.api.hideLoader();
    //     }
    //   );
    // }
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

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.boxdiv {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.c-center {\n  text-align: center;\n}\n\n.con-p1 {\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.con-p2 {\n  color: #1A206D;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 6% 0% 0% 4%;\n}\n\n.inline-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5%;\n}\n\n.con-p3 {\n  color: #1A206D;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.con-p4 {\n  color: #5D5D5D;\n  font-size: 14px;\n  margin: 0px;\n}\n\n.con-p5 {\n  color: #A8B400;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 7%;\n}\n\n.btn {\n  --background:#1A206D ;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.btn1 {\n  margin-top: 5%;\n  --background:transparent ;\n  --box-shadow: none;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  border: 1px solid #A8B400;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpYnNwcm9kdWN0cy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFxpbnN1cmFuY2VcXHNyY1xcYXBwXFxnaWJzcHJvZHVjdHNcXGdpYnNwcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0UsZ0JBQUE7QUNJSjs7QURGQTtFQUNFLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDU0Y7O0FEUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNZRjs7QURWQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2FGOztBRFhBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNjRiIsImZpbGUiOiJnaWJzcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5ib3hkaXZ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xyXG59XHJcbi5pY29uZGl2e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG4uYy1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb24tcDF7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jb24tcDJ7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiA2JSAwJSAwJSA0JTtcclxufVxyXG4uaW5saW5lLXRleHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmNvbi1wM3tcclxuICBjb2xvcjogIzFBMjA2RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uY29uLXA0e1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uY29uLXA1e1xyXG4gIGNvbG9yOiAjQThCNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDclXHJcbn1cclxuLmJ0bntcclxuICAtLWJhY2tncm91bmQ6IzFBMjA2RCA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgd2lkdGg6MTcxcHggO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYnRuMXtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6MTJweDtcclxuICB3aWR0aDoxNzFweCA7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0E4QjQwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMEY1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG5cbi5ib3hkaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuXG4uaWNvbmRpdiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xufVxuXG4uYy1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb24tcDEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY29uLXAyIHtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiA2JSAwJSAwJSA0JTtcbn1cblxuLmlubGluZS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNvbi1wMyB7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uY29uLXA0IHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jb24tcDUge1xuICBjb2xvcjogI0E4QjQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ0bmRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5idG4ge1xuICAtLWJhY2tncm91bmQ6IzFBMjA2RCA7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICB3aWR0aDogMTcxcHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnRuMSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czoxMnB4O1xuICB3aWR0aDogMTcxcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn0iXX0= */";

/***/ }),

/***/ 48443:
/*!****************************************************************!*\
  !*** ./src/app/gibsproducts/gibsproducts.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Motor Products</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"c-center\">\r\n      <p class=\"con-p1\">Make a Quote</p>\r\n    </div>\r\n    <div style=\"font-size: 20px; color: #000; font-weight: 500; margin-bottom: 3%\">\r\n      The products for mobile are:\r\n    </div>\r\n\r\n    <div class=\"boxdiv\" *ngFor=\"let p of motorsubproducts\">\r\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"GProductdetail(p)\">\r\n        <img src=\"assets/images/motorcar.png\" alt=\"\" style=\"width: 100px; height: 100px; object-fit: cover\" />\r\n        <p style=\"\r\n            color: #1a206d;\r\n            font-size: 17px;\r\n            font-weight: 500;\r\n            margin: 6% 0% 0% 4%;\r\n          \">\r\n          {{p}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- oldcode -->\r\n    <!-- <div class=\"boxdiv\" *ngFor=\"let gibs of motorsubproducts\">\r\n      <div style=\"display: flex; margin-bottom: 7%\" (click)=\"GProductdetail(gibs.productID)\">\r\n        <img src=\"assets/images/motorcar.png\" alt=\"\" style=\"width: 100px; height: 100px; object-fit: cover\" />\r\n        <p style=\"\r\n            color: #1a206d;\r\n            font-size: 17px;\r\n            font-weight: 500;\r\n            margin: 6% 0% 0% 4%;\r\n          \">\r\n          {{gibs}}\r\n        </p>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_gibsproducts_gibsproducts_module_ts.js.map