"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_agentidpopup_agentidpopup_module_ts"],{

/***/ 4767:
/*!*************************************************************!*\
  !*** ./src/app/agentidpopup/agentidpopup-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentidpopupPageRoutingModule": () => (/* binding */ AgentidpopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _agentidpopup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentidpopup.page */ 8483);




const routes = [
    {
        path: '',
        component: _agentidpopup_page__WEBPACK_IMPORTED_MODULE_0__.AgentidpopupPage
    }
];
let AgentidpopupPageRoutingModule = class AgentidpopupPageRoutingModule {
};
AgentidpopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgentidpopupPageRoutingModule);



/***/ }),

/***/ 2244:
/*!*****************************************************!*\
  !*** ./src/app/agentidpopup/agentidpopup.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentidpopupPageModule": () => (/* binding */ AgentidpopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agentidpopup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentidpopup-routing.module */ 4767);
/* harmony import */ var _agentidpopup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agentidpopup.page */ 8483);







let AgentidpopupPageModule = class AgentidpopupPageModule {
};
AgentidpopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agentidpopup_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgentidpopupPageRoutingModule
        ],
        declarations: [_agentidpopup_page__WEBPACK_IMPORTED_MODULE_1__.AgentidpopupPage]
    })
], AgentidpopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_agentidpopup_agentidpopup_module_ts.js.map