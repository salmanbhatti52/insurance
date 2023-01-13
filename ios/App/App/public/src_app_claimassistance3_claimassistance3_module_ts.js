"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_claimassistance3_claimassistance3_module_ts"],{

/***/ 34909:
/*!*********************************************************************!*\
  !*** ./src/app/claimassistance3/claimassistance3-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Claimassistance3PageRoutingModule": () => (/* binding */ Claimassistance3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claimassistance3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance3.page */ 98477);




const routes = [
    {
        path: '',
        component: _claimassistance3_page__WEBPACK_IMPORTED_MODULE_0__.Claimassistance3Page
    }
];
let Claimassistance3PageRoutingModule = class Claimassistance3PageRoutingModule {
};
Claimassistance3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Claimassistance3PageRoutingModule);



/***/ }),

/***/ 4467:
/*!*************************************************************!*\
  !*** ./src/app/claimassistance3/claimassistance3.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Claimassistance3PageModule": () => (/* binding */ Claimassistance3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claimassistance3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance3-routing.module */ 34909);
/* harmony import */ var _claimassistance3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance3.page */ 98477);







let Claimassistance3PageModule = class Claimassistance3PageModule {
};
Claimassistance3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _claimassistance3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Claimassistance3PageRoutingModule
        ],
        declarations: [_claimassistance3_page__WEBPACK_IMPORTED_MODULE_1__.Claimassistance3Page]
    })
], Claimassistance3PageModule);



/***/ }),

/***/ 98477:
/*!***********************************************************!*\
  !*** ./src/app/claimassistance3/claimassistance3.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Claimassistance3Page": () => (/* binding */ Claimassistance3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _claimassistance3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimassistance3.page.html?ngResource */ 72264);
/* harmony import */ var _claimassistance3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimassistance3.page.scss?ngResource */ 28108);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let Claimassistance3Page = class Claimassistance3Page {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
Claimassistance3Page.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
Claimassistance3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-claimassistance3',
        template: _claimassistance3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_claimassistance3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Claimassistance3Page);



/***/ }),

/***/ 28108:
/*!************************************************************************!*\
  !*** ./src/app/claimassistance3/claimassistance3.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  color: black;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.headcls {\n  color: #1A0F55;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltYXNzaXN0YW5jZTMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0YiLCJmaWxlIjoiY2xhaW1hc3Npc3RhbmNlMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5oZWFkY2xze1xyXG4gIGNvbG9yOiAjMUEwRjU1O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN1YmhlYWR7XHJcbiAgY29sb3I6ICMxQTBGNTU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 72264:
/*!************************************************************************!*\
  !*** ./src/app/claimassistance3/claimassistance3.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <!-- <ion-buttons>\r\n          <div style=\"width: 100%\">\r\n            <img\r\n              (click)=\"goback()\"\r\n              src=\"assets/images/back-arrow.svg\"\r\n              alt=\"sb-btn\"\r\n            />\r\n          </div>\r\n        </ion-buttons> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <!-- <div class=\"title\">EMBER PROMO IS HERE</div> -->\r\n        <div class=\"title\"></div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div class=\"headcls\">THE IMPORTANCE OF SAVING FOR A RAINY DAY</div>\r\n    <p>\r\n      One of the best ways to become financially stable is to learn the habit of\r\n      saving money. A good savings attitude helps you maintain a debt-free\r\n      lifestyle. Once life uncertainties like job loss or disability pop up,\r\n      you’ll be able to settle them with your savings. However, saving for a\r\n      rainy day isn’t only about planning; it’s about the will to keep some part\r\n      of your earnings and use them when the need arises. In this article, we’ll\r\n      introduce you to our iSave plan and the benefits you can get from it.\r\n    </p>\r\n    <div class=\"subhead\">Who Needs this Plan</div>\r\n    <p>\r\n      iSave Plan is for individuals who want short-term savings to help cover\r\n      future needs. Whether you’re looking to save funds for a master’s degree,\r\n      start a business or pay for your house rent, this plan gives you limitless\r\n      access to achieving your financial goals.\r\n    </p>\r\n    <div class=\"subhead\">Features of iSave Plan</div>\r\n\r\n    <p>\r\n      You are eligible to take up this plan if you are under the age of 65<br />\r\n      Policy term is 2 years renewable and Interest rate is SDR+4% (SDR is the\r\n      CBN stipulated minimum savings deposit rate banks can pay on savings\r\n      accounts and is usually 10% of Monetary Policy Rate (MPR)<br />\r\n      The policy can be surrendered after a minimum of 13 months with no\r\n      withdrawal fees (earlier surrender will attract charges)<br />\r\n      The minimum contribution is 5,000\r\n    </p>\r\n\r\n    <div class=\"subhead\">Benefits of iSave Plan</div>\r\n    <p>\r\n      Creates capital for future needs (i.e., school fees, home ownership, start\r\n      own business etc.)<br />\r\n      The sum assured (Life cover ranging from 100,000 – 1,000,000) requires a\r\n      one-time payment (known as risk premium) of 1% of the sum assured, then\r\n      the Risk Premium will be N2,000. For a sum assured of N500,000 the Risk\r\n      Premium will be N10,000 etc.<br />\r\n      Besides the short-term access, customers get life insurance coverage. This\r\n      becomes helpful in the event of death as the account balance and sum\r\n      assured are paid to the named beneficiary\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_claimassistance3_claimassistance3_module_ts.js.map