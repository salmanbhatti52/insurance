"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_agentidpopup_agentidpopup_page_ts"],{

/***/ 78483:
/*!***************************************************!*\
  !*** ./src/app/agentidpopup/agentidpopup.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentidpopupPage": () => (/* binding */ AgentidpopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _agentidpopup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentidpopup.page.html?ngResource */ 22832);
/* harmony import */ var _agentidpopup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agentidpopup.page.scss?ngResource */ 79735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);








let AgentidpopupPage = class AgentidpopupPage {
    constructor(modal, navCtrl, api, location, router) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.api = api;
        this.location = location;
        this.router = router;
        this.agentloginType = 'Select Agent Type';
        this.agentId = '';
        this.showMaker = false;
        this.vechileMakenew = [{
                manufacturer: "Gibs",
                active: false
            }, {
                manufacturer: "IES",
                active: false
            }];
    }
    ngOnInit() {
    }
    dismiss() {
        // this.modal.dismiss();
        this.location.back();
    }
    search() {
        if (this.agentloginType == "Select Agent Type") {
            this.api.presenttoast('Please Select Agent Type');
        }
        else if (this.agentId == '') {
            this.api.presenttoast('Enter Agent ID');
        }
        else {
            if (this.agentloginType == "Gibs") {
                var myData = {
                    "sid": "ECHANNEL2",
                    "token": "78CD825E-2F6A-4986-962C-7F0FA3E945BD"
                };
                this.api.gibsapi(myData).subscribe((res) => {
                    console.log(res);
                    let token = res.accessToken;
                    this.getresult(token);
                }, (err) => {
                    console.log(err);
                    this.api.hideLoader();
                });
            }
            else {
                let token = '39109f7df56e1CORNERStone9e685066bb852';
                this.api.showLoader();
                this.api.get('https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=901&agent=' + this.agentId, token).subscribe((res) => {
                    console.log(res);
                    this.api.hideLoader();
                    if (res.result.status == 1) {
                        localStorage.setItem('loginas', 'agent');
                        localStorage.setItem('userid', this.agentId);
                        localStorage.setItem('token', '39109f7df56e1CORNERStone9e685066bb852');
                        localStorage.setItem('fname', res.result.name);
                        this.router.navigate(['/home-page-screen-after-login']);
                    }
                    else {
                        this.api.presenttoast(res.result.message);
                    }
                }, (err) => {
                    console.log(err);
                    this.api.hideLoader();
                });
            }
        }
    }
    getresult(token) {
        // ids:AG-000008
        // 00003
        this.api.showLoader();
        let beartoken = token;
        this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Agents', beartoken).subscribe((res) => {
            console.log('ressssss', res);
            this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Agents/' + this.agentId, beartoken).subscribe((res) => {
                console.log('ressssss', res);
                this.api.hideLoader();
                localStorage.setItem('agentdata', JSON.stringify(res));
                localStorage.setItem('loginas', 'agent');
                this.api.loginas = 'agent';
                localStorage.setItem('userid', this.agentId);
                localStorage.setItem('token', beartoken);
                localStorage.setItem('fname', res.agentName);
                this.router.navigate(['/dashboard']);
                // this.navCtrl.navigateForward('agentloginscreen')
                // this.modal.dismiss().then(data => {
                //   localStorage.setItem('agentdata', JSON.stringify(res))
                //   console.log('data came back from modal');
                //   console.log(data);
                //   this.navCtrl.navigateForward('agentloginscreen')
                // })
            }, (err) => {
                console.log(err);
                this.api.presenttoast(err.error.title);
                this.api.hideLoader();
            });
        }, (err) => {
            console.log(err);
            this.api.presenttoast(err.error.title);
            this.api.hideLoader();
        });
    }
    openVhclMakeList() {
        if (this.showMaker == true) {
            this.showMaker = false;
        }
        else {
            this.showMaker = true;
        }
    }
    selectVehicleMaker(list, index) {
        this.agentloginType = list.manufacturer;
        // this.vehicleModelVal = '';
        this.showMaker = false;
    }
};
AgentidpopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AgentidpopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-agentidpopup',
        template: _agentidpopup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agentidpopup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgentidpopupPage);



/***/ }),

/***/ 79735:
/*!****************************************************************!*\
  !*** ./src/app/agentidpopup/agentidpopup.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".bg {\n  --background: #A8B400 !important;\n  border-radius: 32px;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.label {\n  color: #000000;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.input1 {\n  height: 48px;\n  margin-top: 5%;\n  border-radius: 12px;\n  background: #fff url('profile-circle.svg') no-repeat;\n  --padding-start: 55px;\n  background-position: 6%;\n  color: #000000;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 8%;\n}\n\n.btn {\n  --background:#1A206D 10% no-repeat;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 3% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50aWRwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EscUJBQUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0Usa0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQUlGOztBQUZBO0VBR0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJhZ2VudGlkcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAtLWJhY2tncm91bmQ6ICNBOEI0MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbn1cbi5jb250YWluZXJ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cbi5pY29uZGl2e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xufVxuLmxhYmVse1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmlucHV0MXtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLWNpcmNsZS5zdmcpIG5vLXJlcGVhdDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYlO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuLmJ0bmRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cbi5idG57XG4gIC0tYmFja2dyb3VuZDojMUEyMDZEICAxMCUgbm8tcmVwZWF0O1xuICAtLWJvcmRlci1yYWRpdXM6MTJweDtcbiAgd2lkdGg6MTcxcHggO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG5cblxuLy8vLy8vXG4vLy9cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUEyMDZEO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwJSBhdXRvIDUlO1xufVxuLmxhYmVsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRyb3Bib3gge1xuICBtYXJnaW46IDQlIDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMy40MXB4IDE1cHg7XG5cbn1cbi5pbm5lcmRyb3Bib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLmV1cm8tdGV4dCB7XG4gIGNvbG9yOiAjNUQ1RDVEO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbn1cbi5ldXJvLXRleHQxIHtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4uaW1nZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1pbnB1dCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG59XG5cbi5pbnB1dGZpZWxkIHtcbiAgbWFyZ2luOiAzJSAwJTtcbiAgYmFja2dyb3VuZDogI0U4RThFNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5pbi10ZXh0IHtcbiAgLS1jb2xvcjogIzVENUQ1RDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA3JTtcbiAgLS1wYWRkaW5nLXRvcDogNSU7XG4gIC0tcGFkZGluZy1ib3R0b206IDUlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xufVxuXG4uYWN0aXZlcHJvZHVjdHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcbiAgcGFkZGluZzo0cHggMHB4O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuLml0ZW0tcGlja2Vye1xuICAvLyB3aWR0aDogODUlO1xuICAvLyBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDBweCAxNnB4IDBweDtcblxufVxuLmlvbi10eHR7XG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6YmxhY2s7XG4gIH1cbiJdfQ== */";

/***/ }),

/***/ 22832:
/*!****************************************************************!*\
  !*** ./src/app/agentidpopup/agentidpopup.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"\">\n  <div style=\"background: #dedede; height:100%; width:100%\">\n\n  <div class=\"v-center\">\n\n    <div class=\"icondiv\" (click)=\"dismiss()\">\n      <img src=\"assets/images/close-circle.svg\" alt=\"\">\n    </div>\n\n    <div class=\"main\">\n\n      <div class=\"label\">Select Agent Type</div>\n      <div class=\"dropbox\">\n        <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\n          <div class=\"euro-text\" style=\"width: 100%;\">{{agentloginType}}</div>\n          <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%;\">\n            <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/down-arrow.svg\" *ngIf=\"showMaker==false\">\n            <img style=\"height: 6.6px;width:11.36px\" src=\"assets/images/yuparrow.svg\" *ngIf=\"showMaker==true\">\n          </div>\n        </div>\n        <div *ngIf=\"showMaker==true\" style=\"height:auto ; overflow: scroll;\">\n          <div *ngFor=\"let list of vechileMakenew; let i=index\" (click)=\"selectVehicleMaker(list,i)\">\n            <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">{{list.manufacturer}}</div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <div class=\"label\">Enter Agent ID</div>\n      <ion-input type=\"text\" class=\"input1\" placeholder=\"1254PAG\" [(ngModel)]=\"agentId\"></ion-input>\n\n      <div class=\"btndiv\" (click)=\"search()\">\n        <ion-button class=\"btn\"><img style=\"margin-right: 6px;\" src=\"assets/images/search-normal.svg\" alt=\"\"> LOGIN\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_agentidpopup_agentidpopup_page_ts.js.map