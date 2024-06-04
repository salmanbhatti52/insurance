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
                    "username": "DigitechApp",
                    "password": "Digitech@321#"
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
                        this.api.loginas = 'agent';
                        localStorage.setItem('userid', this.agentId);
                        // localStorage.setItem('token', '39109f7df56e1CORNERStone9e685066bb852');
                        localStorage.setItem('fname', res.result.name);
                        this.signIn();
                    }
                    else {
                        this.api.hideLoader();
                        // this.api.presenttoast(res.result.message);
                        this.api.alertboxshow(res.result.message);
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
        // this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/agents', beartoken).subscribe((res: any) => {
        //   console.log('ressssss', res);
        this.api.getpolicy('https://testcipapiservices.gibsonline.com/api/agents/' + this.agentId, beartoken).subscribe((res) => {
            console.log('ressssss', res);
            this.api.hideLoader();
            localStorage.setItem('agentdata', JSON.stringify(res));
            localStorage.setItem('loginas', 'agent');
            this.api.loginas = 'agent';
            localStorage.setItem('userid', this.agentId);
            localStorage.setItem('token', beartoken);
            localStorage.setItem('fname', res.agentName);
            this.signIn();
            // this.router.navigate(['/sign-up-screen']);
            // this.router.navigate(['/dashboard']);
            // this.navCtrl.navigateForward('agentloginscreen')
            // this.modal.dismiss().then(data => {
            //   localStorage.setItem('agentdata', JSON.stringify(res))
            //   console.log('data came back from modal');
            //   console.log(data);
            //   this.navCtrl.navigateForward('agentloginscreen')
            // })
        }, (err) => {
            console.log(err);
            // this.api.presenttoast(err.error.message);
            this.api.alertboxshow(err.error.message);
            this.api.hideLoader();
        });
        // }, (err) => {
        //   console.log(err);
        //   this.api.presenttoast(err.error.title)
        //   this.api.hideLoader()
        // });
    }
    signIn() {
        this.api.showLoader();
        let myData = 'myData={"email": "' +
            'mobiletest1@gmail.com' +
            '","password": "' +
            'password' +
            '", "method": "login"}';
        this.api.insertData(myData).subscribe((res) => {
            console.log('res==', res);
            this.api.hideLoader();
            if (res.email) {
                this.api.presenttoast('Welcome!');
                localStorage.setItem('userid', res.user_id);
                localStorage.setItem('token', res.token);
                localStorage.setItem('title', res.title);
                localStorage.setItem('fname', res.first_name);
                localStorage.setItem('lname', res.last_name);
                localStorage.setItem('number', res.phone);
                localStorage.setItem('email', res.email);
                this.api.username = res.first_name;
                // this.navCtrl.navigateRoot(['/dashboard']);
                this.navCtrl.navigateRoot(['/home-page-screen-after-login']);
            }
            else {
                this.api.hideLoader();
                this.api.presenttoast('Email or password is incorrect');
                // this.error = true
                // this.errormessage = 'Email or password is incorrect'
                // setTimeout(() => {
                //   this.error = false
                // }, 3000);
            }
        }, (err) => {
            this.api.hideLoader();
            console.log('err==', err);
            this.api.presenttoast(err);
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

module.exports = ".bg {\n  --background: #A8B400 !important;\n  border-radius: 32px;\n}\n\n.container {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.icondiv {\n  text-align: right;\n  margin-right: 0%;\n}\n\n.label {\n  color: #000000;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.input1 {\n  height: 48px;\n  margin-top: 5%;\n  border-radius: 12px;\n  background: #fff url('profile-circle.svg') no-repeat;\n  --padding-start: 55px;\n  background-position: 6%;\n  color: #000000;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 8%;\n}\n\n.btn {\n  --background:#1A206D 10% no-repeat;\n  --border-radius:12px;\n  width: 171px;\n  height: 48px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 85%;\n  margin: 0% auto 5%;\n}\n\n.label {\n  color: #000000;\n  font-size: 16px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 13.41px 15px;\n}\n\n.innerdropbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.euro-text1 {\n  color: #5D5D5D;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5%;\n}\n\n.imgdiv {\n  width: 100%;\n  text-align: center;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.inputfield {\n  margin: 3% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n}\n\n.in-text {\n  --color: #5D5D5D;\n  --placeholder-color: #5D5D5D;\n  --padding-start: 7%;\n  --padding-top: 5%;\n  --padding-bottom: 5%;\n  font-size: 14px;\n  font-weight: 400;\n  --placeholder-font-weight: 400;\n}\n\n.activeproduct {\n  background: #f5f6f9;\n  padding: 4px 0px;\n  font-weight: 800 !important;\n  font-size: 15px !important;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50aWRwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDRSxnQkFBQTtBQUdKOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EscUJBQUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0Usa0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQUlGOztBQUZBO0VBR0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJhZ2VudGlkcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gIC0tYmFja2dyb3VuZDogI0E4QjQwMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4uaWNvbmRpdntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbn1cclxuLmxhYmVse1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5pbnB1dDF7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLWNpcmNsZS5zdmcpIG5vLXJlcGVhdDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2JTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG59XHJcbi5idG57XHJcbiAgLS1iYWNrZ3JvdW5kOiMxQTIwNkQgIDEwJSBuby1yZXBlYXQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgd2lkdGg6MTcxcHggO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vXHJcbi8vL1xyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAwJSBhdXRvIDUlO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZHJvcGJveCB7XHJcbiAgbWFyZ2luOiA0JSAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTMuNDFweCAxNXB4O1xyXG5cclxufVxyXG4uaW5uZXJkcm9wYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLmV1cm8tdGV4dCB7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcbi5ldXJvLXRleHQxIHtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uaW1nZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAtLWlvbi1mb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG59XHJcblxyXG4uaW5wdXRmaWVsZCB7XHJcbiAgbWFyZ2luOiAzJSAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmluLXRleHQge1xyXG4gIC0tY29sb3I6ICM1RDVENUQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDclO1xyXG4gIC0tcGFkZGluZy10b3A6IDUlO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcclxuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi5hY3RpdmVwcm9kdWN0e1xyXG4gIGJhY2tncm91bmQ6ICNmNWY2Zjk7XHJcbiAgcGFkZGluZzo0cHggMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1waWNrZXJ7XHJcbiAgLy8gd2lkdGg6IDg1JTtcclxuICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMHB4IDE2cHggMHB4O1xyXG5cclxufVxyXG4uaW9uLXR4dHtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuIl19 */";

/***/ }),

/***/ 22832:
/*!****************************************************************!*\
  !*** ./src/app/agentidpopup/agentidpopup.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"\">\r\n  <div style=\"background: #dedede; height: 100%; width: 100%\">\r\n    <div class=\"v-center\">\r\n      <div class=\"icondiv\" (click)=\"dismiss()\">\r\n        <img src=\"assets/images/close-circle.svg\" alt=\"\" />\r\n      </div>\r\n\r\n      <div class=\"main\">\r\n        <div class=\"label\">Select Agent Type</div>\r\n        <div class=\"dropbox\">\r\n          <div class=\"innerdropbox\" (click)=\"openVhclMakeList()\">\r\n            <div class=\"euro-text\" style=\"width: 100%\">{{agentloginType}}</div>\r\n            <div class=\"imgdiv\" style=\"padding-bottom: 2px; width: 5%\">\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/down-arrow.svg\"\r\n                *ngIf=\"showMaker==false\"\r\n              />\r\n              <img\r\n                style=\"height: 6.6px; width: 11.36px\"\r\n                src=\"assets/images/yuparrow.svg\"\r\n                *ngIf=\"showMaker==true\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showMaker==true\" style=\"height: auto; overflow: scroll\">\r\n            <div\r\n              *ngFor=\"let list of vechileMakenew; let i=index\"\r\n              (click)=\"selectVehicleMaker(list,i)\"\r\n            >\r\n              <div class=\"euro-text1\" [class.activeproduct]=\"list.active==true\">\r\n                {{list.manufacturer}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"label\">Enter Agent ID</div>\r\n        <ion-input\r\n          type=\"text\"\r\n          class=\"input1\"\r\n          placeholder=\"1254PAG\"\r\n          [(ngModel)]=\"agentId\"\r\n        ></ion-input>\r\n\r\n        <div class=\"btndiv\" (click)=\"search()\">\r\n          <ion-button class=\"btn\"\r\n            ><img\r\n              style=\"margin-right: 6px\"\r\n              src=\"assets/images/search-normal.svg\"\r\n              alt=\"\"\r\n            />\r\n            LOGIN\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_agentidpopup_agentidpopup_page_ts.js.map