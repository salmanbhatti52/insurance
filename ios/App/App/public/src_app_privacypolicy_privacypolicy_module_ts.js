"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privacypolicy_privacypolicy_module_ts"],{

/***/ 8086:
/*!***************************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacypolicyPageRoutingModule": () => (/* binding */ PrivacypolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacypolicy.page */ 7901);




const routes = [
    {
        path: '',
        component: _privacypolicy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacypolicyPage
    }
];
let PrivacypolicyPageRoutingModule = class PrivacypolicyPageRoutingModule {
};
PrivacypolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacypolicyPageRoutingModule);



/***/ }),

/***/ 7854:
/*!*******************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacypolicyPageModule": () => (/* binding */ PrivacypolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacypolicy-routing.module */ 8086);
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacypolicy.page */ 7901);







let PrivacypolicyPageModule = class PrivacypolicyPageModule {
};
PrivacypolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacypolicyPageRoutingModule
        ],
        declarations: [_privacypolicy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacypolicyPage]
    })
], PrivacypolicyPageModule);



/***/ }),

/***/ 7901:
/*!*****************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacypolicyPage": () => (/* binding */ PrivacypolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _privacypolicy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacypolicy.page.html?ngResource */ 4039);
/* harmony import */ var _privacypolicy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacypolicy.page.scss?ngResource */ 2019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let PrivacypolicyPage = class PrivacypolicyPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goback() {
        this.location.back();
    }
};
PrivacypolicyPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
PrivacypolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-privacypolicy',
        template: _privacypolicy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_privacypolicy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrivacypolicyPage);



/***/ }),

/***/ 2019:
/*!******************************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A206D;\n  font-weight: bold;\n}\n\n.toogleclass {\n  padding: 0px;\n  float: right;\n  --handle-width: 16px;\n  --handle-height: 16px;\n  width: 40px;\n  height: 24px;\n  --background: #5d5d5d;\n  --background-checked: #1A206D;\n  --handle-background-checked: #fff;\n  --handle-background: #c8c7cc;\n  margin-top: 1.5%;\n  --handle-spacing: 4px;\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3lwb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0FBRUYiLCJmaWxlIjoicHJpdmFjeXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMUEyMDZEO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvb2dsZWNsYXNze1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDE2cHg7XHJcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICAtLWJhY2tncm91bmQ6ICM1ZDVkNWQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxQTIwNkQ7XHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNjOGM3Y2M7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuICAtLWhhbmRsZS1zcGFjaW5nOiA0cHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4039:
/*!******************************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row style=\"display: flex;\r\n    align-items: center;\">\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n\r\n        <div style=\"width:100% ;\" (click)=\"goback()\">\r\n          <img src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n        </div>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <p class=\"title\">Privacy Policy</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"width: 90%;\r\n  margin: 5% auto;\">\r\n\r\n<p>Effective date: 2022-10-29</p>\r\n<p>1. <b>Introduction</b></p>\r\n<p>Welcome to <b> Cornerstone</b>.</p>\r\n<p><b>Cornerstone</b> (“us”, “we”, or “our”) operates <b>https://cornerstone.com.ng/</b> (hereinafter referred to as <b>“Service”</b>).</p>\r\n<p>Our Privacy Policy governs your visit to <b>https://cornerstone.com.ng/</b>, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>\r\n<p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>\r\n<p>Our Terms and Conditions (<b>“Terms”</b>) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (<b>“agreement”</b>).</p>\r\n<p>2. <b>Definitions</b></p>\r\n<p><b>SERVICE</b> means the https://cornerstone.com.ng/ website operated by Cornerstone.</p>\r\n<p><b>PERSONAL DATA</b> means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>\r\n<p><b>USAGE DATA</b> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>\r\n<p><b>COOKIES</b> are small files stored on your device (computer or mobile device).</p>\r\n<p><b>DATA CONTROLLER</b> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>\r\n<p><b>DATA PROCESSORS (OR SERVICE PROVIDERS)</b> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p> <p><b>DATA SUBJECT</b> is any living individual who is the subject of Personal Data.</p>\r\n<p><b>THE USER</b> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>\r\n<p>3. <b>Information Collection and Use</b></p>\r\n<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\r\n<p>4. <b>Types of Data Collected</b></p>\r\n<p><b>Personal Data</b></p>\r\n<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (<b>“Personal Data”</b>). Personally identifiable information may include, but is not limited to:</p>\r\n<p>0.1. Email address</p>\r\n<p>0.2. First name and last name</p>\r\n<p>0.3. Phone number</p>\r\n<p>0.4. Address, Country, State, Province, ZIP/Postal code, City</p>\r\n<p>0.5. Cookies and Usage Data</p>\r\n<p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</p>\r\n<p><b>Usage Data</b></p>\r\n<p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (<b>“Usage Data”</b>).</p>\r\n<p>This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\r\n<p>When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>\r\n\r\n<p><b>Tracking Cookies Data</b></p>\r\n<p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>\r\n<p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>\r\n<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\r\n<p>Examples of Cookies we use:</p>\r\n<p>0.1. <b>Session Cookies:</b> We use Session Cookies to operate our Service.</p>\r\n<p>0.2. <b>Preference Cookies:</b> We use Preference Cookies to remember your preferences and various settings.</p>\r\n<p>0.3. <b>Security Cookies:</b> We use Security Cookies for security purposes.</p>\r\n<p>0.4. <b>Advertising Cookies:</b> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</p>\r\n<p><b>Other Data</b></p>\r\n<p>While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, <a href=\"https://policymaker.io/non-disclosure-agreement/\">NDA agreements</a>, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.</p>\r\n<p>5. <b>Use of Data</b></p>\r\n<p>Cornerstone uses the collected data for various purposes:</p>\r\n<p>0.1. to provide and maintain our Service;</p>\r\n<p>0.2. to notify you about changes to our Service;</p>\r\n<p>0.3. to allow you to participate in interactive features of our Service when you choose to do so;</p>\r\n<p>0.4. to provide customer support;</p>\r\n<p>0.5. to gather analysis or valuable information so that we can improve our Service;</p>\r\n<p>0.6. to monitor the usage of our Service;</p>\r\n<p>0.7. to detect, prevent and address technical issues;</p>\r\n<p>0.8. to fulfil any other purpose for which you provide it;</p>\r\n<p>0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</p>\r\n<p>0.10. to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</p>\r\n<p>0.11. to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</p>\r\n<p>0.12. in any other way we may describe when you provide the information;</p>\r\n<p>0.13. for any other purpose with your consent.</p>\r\n<p>6. <b>Retention of Data</b></p>\r\n<p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>\r\n<p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>\r\n<p>7. <b>Transfer of Data</b></p>\r\n<p>Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>\r\n<p>If you are located outside Nigeria and choose to provide information to us, please note that we transfer the data, including Personal Data, to Nigeria and process it there.</p>\r\n<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\r\n<p>Cornerstone will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\r\n<p>8. <b>Disclosure of Data</b></p>\r\n<p>We may disclose personal information that we collect, or you provide:</p>\r\n<p>0.1. <b>Business Transaction.</b></p><p>If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</p><p>0.2. <b>Other cases. We may disclose your information also:</b></p><p>0.2.1. to our subsidiaries and affiliates;</p><p>0.2.2. to contractors, service providers, and other third parties we use to support our business;</p><p>0.2.3. to fulfill the purpose for which you provide it;</p><p>0.2.4. for the purpose of including your company’s logo on our website;</p><p>0.2.5. for any other purpose disclosed by us when you provide the information;</p><p>0.2.6. with your consent in any other cases;</p><p>0.2.7. if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</p>\r\n<p>9. <b>Security of Data</b></p>\r\n<p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\r\n<p>10. <b>Your Data Protection Rights Under General Data Protection Regulation (GDPR)\r\n</b></p>\r\n<p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>\r\n<p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>\r\n<p> If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <b>enquiries@cornerstone.com.ng</b>.</p>\r\n<p>In certain circumstances, you have the following data protection rights:</p>\r\n<p>0.1. the right to access, update or to delete the information we have on you;</p>\r\n<p>0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</p>\r\n<p>0.3. the right to object. You have the right to object to our processing of your Personal Data;</p>\r\n<p>0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;</p>\r\n<p>0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</p>\r\n<p>0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</p>\r\n<p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>\r\n<p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>\r\n<p>11. <b>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</b></p>\r\n<p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</p>\r\n<p>According to CalOPPA we agree to the following:</p>\r\n<p>0.1. users can visit our site anonymously;</p>\r\n<p>0.2. our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;</p>\r\n<p>0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;</p>\r\n<p>0.4. users are able to change their personal information by emailing us at <b>enquiries@cornerstone.com.ng</b>.</p>\r\n<p>Our Policy on “Do Not Track” Signals:</p>\r\n<p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>\r\n<p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>\r\n<p>12. <b>Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</b></p>\r\n<p>If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:</p>\r\n<p><b>0.1. What personal information we have about you. If you make this request, we will return to you:</b></p>\r\n<p>0.0.1. The categories of personal information we have collected about you.</p>\r\n<p>0.0.2. The categories of sources from which we collect your personal information.</p>\r\n<p>0.0.3. The business or commercial purpose for collecting or selling your personal information.</p>\r\n<p>0.0.4. The categories of third parties with whom we share personal information.</p>\r\n<p>0.0.5. The specific pieces of personal information we have collected about you.</p>\r\n<p>0.0.6. A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</p>\r\n<p>0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</p>\r\n<p>Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.</p>\r\n<p><b>0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.</b></p>\r\n<p><b>0.3. To stop selling your personal information. We don’t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a “sale” under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.</b></p>\r\n<p>If you submit a request to stop selling your personal information, we will stop making such transfers.</p>\r\n<p>Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.</p>\r\n<p>To exercise your California data protection rights described above, please send your request(s) by email: <b>enquiries@cornerstone.com.ng</b>.</p>\r\n<p>Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.</p>\r\n<p>13. <b>Service Providers</b></p>\r\n<p>We may employ third party companies and individuals to facilitate our Service (<b>“Service Providers”</b>), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>\r\n<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\r\n<p>14. <b>Analytics</b></p>\r\n<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>\r\n<p>15. <b>CI/CD tools</b></p>\r\n<p>We may use third-party Service Providers to automate the development process of our Service.</p>\r\n\r\n<p>16. <b>Behavioral Remarketing</b></p>\r\n<p>We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>\r\n\r\n<p>17. <b>Links to Other Sites</b></p>\r\n<p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\r\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\r\n<p>For example, the outlined <a href=\"https://policymaker.io/privacy-policy/\">privacy policy</a> has been made using <a href=\"https://policymaker.io/\">PolicyMaker.io</a>, a free tool that helps create high-quality legal documents. PolicyMaker’s <a href=\"https://policymaker.io/privacy-policy/\">privacy policy generator</a> is an easy-to-use tool for creating a <a href=\"https://policymaker.io/blog-privacy-policy/\">privacy policy for blog</a>, website, e-commerce store or mobile app.</p>\r\n<p>18. <b><b>Children’s Privacy</b></b></p>\r\n<p>Our Services are not intended for use by children under the age of 18 (<b>“Child”</b> or <b>“Children”</b>).</p>\r\n<p>We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p>\r\n<p>19. <b>Changes to This Privacy Policy</b></p>\r\n<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\r\n<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.</p>\r\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\r\n<p>20. <b>Contact Us</b></p>\r\n<p>If you have any questions about this Privacy Policy, please contact us by email: <b>enquiries@cornerstone.com.ng</b>.</p>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_privacypolicy_privacypolicy_module_ts.js.map