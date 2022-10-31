"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 9753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 3320);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 2154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 9753);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 3320);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 3320:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page.html?ngResource */ 5224);
/* harmony import */ var _notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss?ngResource */ 8521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let NotificationPage = class NotificationPage {
    constructor(location) {
        this.location = location;
        this.notifications = [{ sender_name: 'John', time_added: '10:20AM', content: 'Lorem ipsum dolor sit amet consectetur' }, { sender_name: 'Doe', time_added: '10:21AM', content: 'Lorem ipsum dolor sit amet consectetur' }, { sender_name: 'Frank', time_added: '10:20AM', content: 'Lorem ipsum dolor sit amet consectetur' }, { sender_name: 'Karl', time_added: '10:25AM', content: 'Lorem ipsum dolor sit amet consectetur' }];
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
NotificationPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notification',
        template: _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationPage);



/***/ }),

/***/ 8521:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.toogleclass {\n  padding: 0px;\n  float: right;\n  --handle-width: 16px;\n  --handle-height: 16px;\n  width: 40px;\n  height: 24px;\n  --background: #5d5d5d;\n  --background-checked: #1A206D;\n  --handle-background-checked: #fff;\n  --handle-background: #c8c7cc;\n  margin-top: 1.5%;\n  --handle-spacing: 4px;\n}\n\nion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 6px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.clear_div {\n  display: grid;\n  justify-content: center;\n  padding: 0px;\n}\n\n.clear_p {\n  padding-top: 5px;\n  margin: 0px;\n  color: #c4932f;\n  text-decoration: underline;\n  font-size: 14px;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #A8B400;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #f9f9f9;\n}\n\n.pdtop {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.oddclass {\n  background: #f3f3f3;\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFHQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQUFKO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBQU9BO0VBQ0UsWUFBQTtBQUpGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b29nbGVjbGFzc3tcbiAgcGFkZGluZzogMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIC0taGFuZGxlLXdpZHRoOiAxNnB4O1xuICAtLWhhbmRsZS1oZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tYmFja2dyb3VuZDogIzVkNWQ1ZDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2M4YzdjYztcbiAgbWFyZ2luLXRvcDogMS41JTtcbiAgLS1oYW5kbGUtc3BhY2luZzogNHB4O1xufVxuXG5cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwZW0gMGVtIDAgMDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5pb24tdG9vbGJhci5pb3Mge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAgIHBhZGRpbmc6IDBlbSAwZW0gMHB4IDA7XG4gICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmJfbGlzdDEge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2xlYXJfZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNsZWFyX3Age1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNjNDkzMmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ub3RpZnlfaW1hZ2VfbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubm90aWZ5X2ltYWdlX21haW4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubm90aWZ5X2NvbnRlbnQgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubm90aWZ5X2Rlc2Mge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5ub3RpZnlfZGVzY19tYWluIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLm5vdGZ5X3RpdGxlIHtcbiAgY29sb3I6ICMxYTZiYmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5vdGlmeV90aW1lIHtcbiAgY29sb3I6ICNBOEI0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5vdGlmeV9iZyB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG5cbi5wZHRvcCB7XG4gIC8vIHBhZGRpbmc6IDVweCAwZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAvLyBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnN1YmhlYWR7XG4gIGNvbG9yOiAjMUEwRjU1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5vZGRjbGFzc3tcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cblxuXG5we1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */";

/***/ }),

/***/ 5224:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row style=\"display: flex;\n    align-items: center;\">\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n\n        <div style=\"width:100% ;\" (click)=\"goback()\">\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n        </div>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Notifications</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher> -->\n\n  <ng-container *ngIf=\"notifications?.length >0\">\n\n      <!-- <div class=\"clear_div\">\n        <p class=\"clear_p\" (click)=\"clearNotifcation()\">Clear all</p>\n      </div> -->\n\n    <ion-row\n      class=\"pdtop\"\n      *ngFor=\"let notification of notifications; let i = index\">\n      <!-- <ion-col size=\"2\" class=\"notify_image_main\">\n        <img src=\"{{base_url}}{{notification.sender_img_url}}\" />\n      </ion-col> -->\n      <ion-col  [class.oddclass]=\"i%2!=0\" class=\"notify_content\" size=\"12\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <p class=\"subhead\">{{notification.sender_name}}</p>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            <p class=\"notify_time\">{{notification.time_added}}</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n            <p>{{notification.content}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"notificationError == null\">\n      <ion-col class=\"ion-text-center\">\n        <h2>{{dataError}}</h2>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ng-container *ngIf=\"notifications?.length < 1 \">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n        <h2>No notification found</h2>\n    </ion-col>\n  </ion-row>\n</ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map