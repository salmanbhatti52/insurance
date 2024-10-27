"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 89753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 13320);




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

/***/ 22154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 89753);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 13320);







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

/***/ 13320:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page.html?ngResource */ 25224);
/* harmony import */ var _notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss?ngResource */ 88521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





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

/***/ 88521:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.toogleclass {\n  padding: 0px;\n  float: right;\n  --handle-width: 16px;\n  --handle-height: 16px;\n  width: 40px;\n  height: 24px;\n  --background: #5d5d5d;\n  --background-checked: #1A206D;\n  --handle-background-checked: #fff;\n  --handle-background: #c8c7cc;\n  margin-top: 1.5%;\n  --handle-spacing: 4px;\n}\n\nion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 6px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.clear_div {\n  display: grid;\n  justify-content: center;\n  padding: 0px;\n}\n\n.clear_p {\n  padding-top: 5px;\n  margin: 0px;\n  color: #c4932f;\n  text-decoration: underline;\n  font-size: 14px;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #A8B400;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #f9f9f9;\n}\n\n.pdtop {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.subhead {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.oddclass {\n  background: #f3f3f3;\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdGh1YiUyMFByb2plY3RzXFxpbnN1cmFuY2VcXHNyY1xcYXBwXFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQ0FKO0FBQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE9BO0VBQ0UsWUFBQTtBQ0pGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvb2dsZWNsYXNze1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDE2cHg7XHJcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICAtLWJhY2tncm91bmQ6ICM1ZDVkNWQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNjOGM3Y2M7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuICAtLWhhbmRsZS1zcGFjaW5nOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIHBhZGRpbmc6IDBlbSAwZW0gMCAwO1xyXG4gIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIuaW9zIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgICBwYWRkaW5nOiAwZW0gMGVtIDBweCAwO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5iX2xpc3QxIHtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jbGVhcl9kaXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY2xlYXJfcCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjogI2M0OTMyZjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5ub3RpZnlfaW1hZ2VfbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubm90aWZ5X2ltYWdlX21haW4gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ub3RpZnlfY29udGVudCBwIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLm5vdGlmeV9kZXNjIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5ub3RpZnlfZGVzY19tYWluIHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubm90ZnlfdGl0bGUge1xyXG4gIGNvbG9yOiAjMWE2YmJlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLm5vdGlmeV90aW1lIHtcclxuICBjb2xvcjogI0E4QjQwMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5ub3RpZnlfYmcge1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbi5wZHRvcCB7XHJcbiAgLy8gcGFkZGluZzogNXB4IDBlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3ViaGVhZHtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm9kZGNsYXNze1xyXG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxQTIwNkQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9vZ2xlY2xhc3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgLS1oYW5kbGUtd2lkdGg6IDE2cHg7XG4gIC0taGFuZGxlLWhlaWdodDogMTZweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNWQ1ZDVkO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjYzhjN2NjO1xuICBtYXJnaW4tdG9wOiAxLjUlO1xuICAtLWhhbmRsZS1zcGFjaW5nOiA0cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMGVtIDBlbSAwIDA7XG4gIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuaW9uLXRvb2xiYXIuaW9zIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICBpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMGVtIDBlbSAwcHggMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gIH1cbn1cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5iX2xpc3QxIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsZWFyX2RpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jbGVhcl9wIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjYzQ5MzJmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubm90aWZ5X2ltYWdlX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5vdGlmeV9pbWFnZV9tYWluIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5vdGlmeV9jb250ZW50IHAge1xuICBtYXJnaW46IDBweDtcbn1cblxuLm5vdGlmeV9kZXNjIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubm90aWZ5X2Rlc2NfbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5ub3RmeV90aXRsZSB7XG4gIGNvbG9yOiAjMWE2YmJlO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5ub3RpZnlfdGltZSB7XG4gIGNvbG9yOiAjQThCNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5ub3RpZnlfYmcge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4ucGR0b3Age1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5zdWJoZWFkIHtcbiAgY29sb3I6ICMxQTBGNTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm9kZGNsYXNzIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cblxucCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";

/***/ }),

/***/ 25224:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex; align-items: center\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px\">\r\n        <div style=\"width:100% ;\" (click)=\"goback()\">\r\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuebtnblue.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle> -->\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Notifications</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\"\r\n    >\r\n    </ion-refresher-content>\r\n  </ion-refresher> -->\r\n\r\n  <!-- <ng-container *ngIf=\"notifications?.length >0\">\r\n\r\n    <ion-row class=\"pdtop\" *ngFor=\"let notification of notifications; let i = index\">\r\n\r\n      <ion-col [class.oddclass]=\"i%2!=0\" class=\"notify_content\" size=\"12\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"ion-text-left\">\r\n            <p class=\"subhead\">{{notification.sender_name}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <p class=\"notify_time\">{{notification.time_added}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\r\n            <p>{{notification.content}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"notificationError == null\">\r\n      <ion-col class=\"ion-text-center\">\r\n        <h2>{{dataError}}</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container> -->\r\n  <!-- *ngIf=\"notifications?.length < 1 \" -->\r\n  <ng-container>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <h2>No notification found</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map