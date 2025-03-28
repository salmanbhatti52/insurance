(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'start-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start-screen_start-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start-screen/start-screen.module */ 76748)).then(m => m.StartScreenPageModule)
    },
    {
        path: 'sign-in-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-in-screen_sign-in-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in-screen/sign-in-screen.module */ 70174)).then(m => m.SignInScreenPageModule)
    },
    {
        path: 'home-page-screen-after-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-page-screen-after-login/home-page-screen-after-login.module */ 91669)).then(m => m.HomePageScreenAfterLoginPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contactus_contactus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contactus/contactus.module */ 58037)).then(m => m.ContactusPageModule)
    },
    {
        path: 'mypolicies',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mypolicies_mypolicies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mypolicies/mypolicies.module */ 87507)).then(m => m.MypoliciesPageModule)
    },
    {
        path: 'explore-screen-before-login-expanded',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login-expanded/explore-screen-before-login-expanded.module */ 93291)).then(m => m.ExploreScreenBeforeLoginExpandedPageModule)
    },
    {
        path: 'explore-screen-before-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_agentidpopup_agentidpopup_page_ts"), __webpack_require__.e("src_app_explore-screen-before-login_explore-screen-before-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login/explore-screen-before-login.module */ 61741)).then(m => m.ExploreScreenBeforeLoginPageModule)
    },
    {
        path: 'get-quote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_get-quote_get-quote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./get-quote/get-quote.module */ 682)).then(m => m.GetQuotePageModule)
    },
    {
        path: 'verify-policy-screen-cust',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_policyp_policyp_page_ts"), __webpack_require__.e("src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./verify-policy-screen-cust/verify-policy-screen-cust.module */ 17956)).then(m => m.VerifyPolicyScreenCustPageModule)
    },
    {
        path: 'renewals',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_renewals_renewals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./renewals/renewals.module */ 2433)).then(m => m.RenewalsPageModule)
    },
    {
        path: 'makeaclaim',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_makeaclaim_makeaclaim_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./makeaclaim/makeaclaim.module */ 13268)).then(m => m.MakeaclaimPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'make-a-claim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_make-a-claim_make-a-claim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./make-a-claim/make-a-claim.module */ 34147)).then(m => m.MakeAClaimPageModule)
    },
    {
        path: 'start-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start-screen_start-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start-screen/start-screen.module */ 76748)).then(m => m.StartScreenPageModule)
    },
    {
        path: 'sign-in-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-in-screen_sign-in-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in-screen/sign-in-screen.module */ 70174)).then(m => m.SignInScreenPageModule)
    },
    {
        path: 'home-page-screen-after-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-page-screen-after-login/home-page-screen-after-login.module */ 91669)).then(m => m.HomePageScreenAfterLoginPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contactus_contactus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contactus/contactus.module */ 58037)).then(m => m.ContactusPageModule)
    },
    {
        path: 'mypolicies',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mypolicies_mypolicies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mypolicies/mypolicies.module */ 87507)).then(m => m.MypoliciesPageModule)
    },
    {
        path: 'explore-screen-before-login-expanded',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login-expanded/explore-screen-before-login-expanded.module */ 93291)).then(m => m.ExploreScreenBeforeLoginExpandedPageModule)
    },
    {
        path: 'explore-screen-before-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_agentidpopup_agentidpopup_page_ts"), __webpack_require__.e("src_app_explore-screen-before-login_explore-screen-before-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login/explore-screen-before-login.module */ 61741)).then(m => m.ExploreScreenBeforeLoginPageModule)
    },
    {
        path: 'get-quote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_get-quote_get-quote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./get-quote/get-quote.module */ 682)).then(m => m.GetQuotePageModule)
    },
    {
        path: 'quote1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quote1_quote1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quote1/quote1.module */ 65035)).then(m => m.Quote1PageModule)
    },
    {
        path: 'verify-policy-screen-cust',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_policyp_policyp_page_ts"), __webpack_require__.e("src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./verify-policy-screen-cust/verify-policy-screen-cust.module */ 17956)).then(m => m.VerifyPolicyScreenCustPageModule)
    },
    {
        path: 'renewals',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_renewals_renewals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./renewals/renewals.module */ 2433)).then(m => m.RenewalsPageModule)
    },
    {
        path: 'makeaclaim',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_makeaclaim_makeaclaim_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./makeaclaim/makeaclaim.module */ 13268)).then(m => m.MakeaclaimPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'quote-popup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quote-popup_quote-popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quote-popup/quote-popup.module */ 70781)).then(m => m.QuotePopupPageModule)
    },
    {
        path: 'agentidpopup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_agentidpopup_agentidpopup_page_ts"), __webpack_require__.e("src_app_agentidpopup_agentidpopup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agentidpopup/agentidpopup.module */ 22244)).then(m => m.AgentidpopupPageModule)
    },
    {
        path: 'agentloginscreen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_agentloginscreen_agentloginscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./agentloginscreen/agentloginscreen.module */ 41756)).then(m => m.AgentloginscreenPageModule)
    },
    {
        path: 'sign-up-screen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sign-up-screen_sign-up-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up-screen/sign-up-screen.module */ 58067)).then(m => m.SignUpScreenPageModule)
    },
    {
        path: 'profile-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile-update_profile-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile-update/profile-update.module */ 969)).then(m => m.ProfileUpdatePageModule)
    },
    {
        path: 'car-insurance-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_car-insurance-details_car-insurance-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./car-insurance-details/car-insurance-details.module */ 20829)).then(m => m.CarInsuranceDetailsPageModule)
    },
    {
        path: 'yourquote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_yourquote_yourquote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./yourquote/yourquote.module */ 67762)).then(m => m.YourquotePageModule)
    },
    {
        path: 'sub-products',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sub-products_sub-products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sub-products/sub-products.module */ 18565)).then(m => m.SubProductsPageModule)
    },
    {
        path: 'comprehensivequote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_comprehensivequote_comprehensivequote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./comprehensivequote/comprehensivequote.module */ 84366)).then(m => m.ComprehensivequotePageModule)
    },
    {
        path: 'thirdpartydetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_thirdpartydetails_thirdpartydetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./thirdpartydetails/thirdpartydetails.module */ 64829)).then(m => m.ThirdpartydetailsPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 24068)).then(m => m.PaymentPageModule)
    },
    {
        path: 'payquote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_payquote_payquote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payquote/payquote.module */ 92942)).then(m => m.PayquotePageModule)
    },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 89623)).then(m => m.SplashPageModule)
    },
    {
        path: 'policyquote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policyquote_policyquote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policyquote/policyquote.module */ 92210)).then(m => m.PolicyquotePageModule)
    },
    {
        path: 'verify-policy-popup-cust',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verify-policy-popup-cust_verify-policy-popup-cust_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify-policy-popup-cust/verify-policy-popup-cust.module */ 13949)).then(m => m.VerifyPolicyPopupCustPageModule)
    },
    {
        path: 'policylookup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policylookup_policylookup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policylookup/policylookup.module */ 53035)).then(m => m.PolicylookupPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgotpassword/forgotpassword.module */ 82488)).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'termsandcondition',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_termsandcondition_termsandcondition_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./termsandcondition/termsandcondition.module */ 39857)).then(m => m.TermsandconditionPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./privacy/privacy.module */ 25489)).then(m => m.PrivacyPageModule)
    },
    {
        path: 'localsubproduct',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_localsubproduct_localsubproduct_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./localsubproduct/localsubproduct.module */ 12035)).then(m => m.LocalsubproductPageModule)
    },
    {
        path: 'localpoliciesform',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_localpoliciesform_localpoliciesform_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./localpoliciesform/localpoliciesform.module */ 83434)).then(m => m.LocalpoliciesformPageModule)
    },
    {
        path: 'gibsplans',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_gibsplans_gibsplans_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gibsplans/gibsplans.module */ 12628)).then(m => m.GibsplansPageModule)
    },
    {
        path: 'allpolicies',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_allpolicies_allpolicies_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./allpolicies/allpolicies.module */ 8194)).then(m => m.AllpoliciesPageModule)
    },
    {
        path: 'claimassistance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_claimassistance_claimassistance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./claimassistance/claimassistance.module */ 50450)).then(m => m.ClaimassistancePageModule)
    },
    {
        path: 'languagepage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_languagepage_languagepage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./languagepage/languagepage.module */ 84767)).then(m => m.LanguagepagePageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 22154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'helppage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_helppage_helppage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./helppage/helppage.module */ 60180)).then(m => m.HelppagePageModule)
    },
    {
        path: 'privacypolicy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_privacypolicy_privacypolicy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./privacypolicy/privacypolicy.module */ 77854)).then(m => m.PrivacypolicyPageModule)
    },
    {
        path: 'claimassistance2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_claimassistance2_claimassistance2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./claimassistance2/claimassistance2.module */ 84923)).then(m => m.Claimassistance2PageModule)
    },
    {
        path: 'claimassistance3',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_claimassistance3_claimassistance3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./claimassistance3/claimassistance3.module */ 4467)).then(m => m.Claimassistance3PageModule)
    },
    {
        path: 'test',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_test_test_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./test/test.module */ 16615)).then(m => m.TestPageModule)
    },
    {
        path: 'explore-screen-before-login-expanded2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login-expanded2_explore-screen-before-login-expanded2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.module */ 78937)).then(m => m.ExploreScreenBeforeLoginExpanded2PageModule)
    },
    {
        path: 'gibsproducts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gibsproducts_gibsproducts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gibsproducts/gibsproducts.module */ 71948)).then(m => m.GibsproductsPageModule)
    },
    {
        path: 'localinformation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_localinformation_localinformation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./localinformation/localinformation.module */ 76477)).then(m => m.LocalinformationPageModule)
    },
    {
        path: 'internationalinformation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_internationalinformation_internationalinformation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./internationalinformation/internationalinformation.module */ 82405)).then(m => m.InternationalinformationPageModule)
    },
    {
        path: 'deleteaccount',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_deleteaccount_deleteaccount_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./deleteaccount/deleteaccount.module */ 49355)).then(m => m.DeleteaccountPageModule)
    },
    {
        path: 'payment2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_payment2_payment2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payment2/payment2.module */ 69826)).then(m => m.Payment2PageModule)
    },
    {
        path: 'mypolicies2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_mypolicies2_mypolicies2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mypolicies2/mypolicies2.module */ 68827)).then(m => m.Mypolicies2PageModule)
    },
    {
        path: 'ivplan2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_ivplan2_ivplan2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ivplan2/ivplan2.module */ 79886)).then(m => m.Ivplan2PageModule)
    },
    {
        path: 'ivplan1',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_ivplan1_ivplan1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ivplan1/ivplan1.module */ 82845)).then(m => m.Ivplan1PageModule)
    },
    {
        path: 'ivplan3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_ivplan3_ivplan3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ivplan3/ivplan3.module */ 38803)).then(m => m.Ivplan3PageModule)
    },
    {
        path: 'ivplan4',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_ivplan4_ivplan4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ivplan4/ivplan4.module */ 17569)).then(m => m.Ivplan4PageModule)
    },
    {
        path: 'ivplanquote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ivplanquote_ivplanquote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ivplanquote/ivplanquote.module */ 21101)).then(m => m.IvplanquotePageModule)
    },
    {
        path: 'ivpayment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ivpayment_ivpayment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ivpayment/ivpayment.module */ 11901)).then(m => m.IvpaymentPageModule)
    },
    {
        path: 'draft',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_draft_draft_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./draft/draft.module */ 42306)).then(m => m.DraftPageModule)
    },
    {
        path: 'paymentresponse',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paymentresponse_paymentresponse_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paymentresponse/paymentresponse.module */ 27459)).then(m => m.PaymentresponsePageModule)
    },
    {
        path: 'payment2response',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_payment2response_payment2response_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment2response/payment2response.module */ 51342)).then(m => m.Payment2responsePageModule)
    },
    {
        path: 'vehicleinformation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_vehicleinformation_vehicleinformation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vehicleinformation/vehicleinformation.module */ 50475)).then(m => m.VehicleinformationPageModule)
    },
    {
        path: 'ivplaninformation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_ivplaninformation_ivplaninformation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ivplaninformation/ivplaninformation.module */ 17546)).then(m => m.IvplaninformationPageModule)
    },
    {
        path: 'ivplanpaymentres',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ivplanpaymentres_ivplanpaymentres_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ivplanpaymentres/ivplanpaymentres.module */ 91007)).then(m => m.IvplanpaymentresPageModule)
    },
    {
        path: 'paymentpopup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paymentpopup_paymentpopup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paymentpopup/paymentpopup.module */ 51820)).then(m => m.PaymentpopupPageModule)
    },
    {
        path: 'policy-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policy-details_policy-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policy-details/policy-details.module */ 7956)).then(m => m.PolicyDetailsPageModule)
    },
    {
        path: 'policy1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policy1_policy1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policy1/policy1.module */ 11887)).then(m => m.Policy1PageModule)
    },
    {
        path: 'viewpurchasedpolicy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_viewpurchasedpolicy_viewpurchasedpolicy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./viewpurchasedpolicy/viewpurchasedpolicy.module */ 39533)).then(m => m.ViewpurchasedpolicyPageModule)
    },
    {
        path: 'policybtn',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policybtn_policybtn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policybtn/policybtn.module */ 43304)).then(m => m.PolicybtnPageModule)
    },
    {
        path: 'transrechistory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transrechistory_transrechistory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transrechistory/transrechistory.module */ 80530)).then(m => m.TransrechistoryPageModule)
    },
    {
        path: 'transreceipt',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_transreceipt_transreceipt_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transreceipt/transreceipt.module */ 358)).then(m => m.TransreceiptPageModule)
    },
    {
        path: 'transhistory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transhistory_transhistory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transhistory/transhistory.module */ 77129)).then(m => m.TranshistoryPageModule)
    },
    {
        path: 'policypaymentdetail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policypaymentdetail_policypaymentdetail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policypaymentdetail/policypaymentdetail.module */ 13183)).then(m => m.PolicypaymentdetailPageModule)
    },
    {
        path: 'policystatement',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_policystatement_policystatement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./policystatement/policystatement.module */ 21259)).then(m => m.PolicystatementPageModule)
    },
    {
        path: 'policycertificate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_policycertificate_policycertificate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./policycertificate/policycertificate.module */ 19074)).then(m => m.PolicycertificatePageModule)
    },
    {
        path: 'nextpayment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nextpayment_nextpayment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nextpayment/nextpayment.module */ 57976)).then(m => m.NextpaymentPageModule)
    },
    {
        path: 'policypay',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policypay_policypay_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policypay/policypay.module */ 29557)).then(m => m.PolicypayPageModule)
    },
    {
        path: 'accident1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_accident1_accident1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accident1/accident1.module */ 3147)).then(m => m.Accident1PageModule)
    },
    {
        path: 'accident2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_accident2_accident2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accident2/accident2.module */ 98993)).then(m => m.Accident2PageModule)
    },
    {
        path: 'accident3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_accident3_accident3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accident3/accident3.module */ 74225)).then(m => m.Accident3PageModule)
    },
    {
        path: 'accident4',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_accident4_accident4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accident4/accident4.module */ 7641)).then(m => m.Accident4PageModule)
    },
    {
        path: 'policyp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_policyp_policyp_page_ts"), __webpack_require__.e("src_app_policyp_policyp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./policyp/policyp.module */ 8783)).then(m => m.PolicypPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/insurance-app.service */ 22111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);


/* eslint-disable max-len */









let AppComponent = class AppComponent {
  // loginas: any;
  constructor(navCtrl, menuCtrl, alert, api, route, platform, actionSheetCtrl) {
    this.navCtrl = navCtrl;
    this.menuCtrl = menuCtrl;
    this.alert = alert;
    this.api = api;
    this.route = route;
    this.platform = platform;
    this.actionSheetCtrl = actionSheetCtrl;
    this.appPages = [{
      title: 'Home',
      url: 'home-page-screen-after-login',
      img: '/assets/images/home.svg',
      img1: '/assets/images/homeicon.svg',
      status: 'unchecked'
    }, // { title: 'Dashboard', url: 'dashboard', img: '/assets/images/icons/chart.svg', img1: '/assets/images/icons/dashboard.svg', status: 'unchecked' },
    {
      title: 'Retrieve Quote',
      // url: '/get-quote',
      url: '/draft',
      img: '/assets/images/icons/quote.svg',
      img1: '/assets/images/icons/activequote.svg',
      status: 'unchecked'
    }, // { title: 'My Policy', url: 'mypolicies', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    // { title: 'My Policies', url: 'verify-policy-screen-cust', img: '/assets/images/icons/policy.svg', img1: '/assets/images/icons/activepolicy.svg', status: 'unchecked' },
    {
      title: 'Verify Policy',
      url: 'policylookup',
      img: '/assets/images/icons/mypolicy.svg',
      img1: '/assets/images/icons/activemypolicy.svg',
      status: 'unchecked'
    }, {
      title: 'Purchased History',
      url: 'viewpurchasedpolicy',
      img: '/assets/images/purchased_1.svg',
      img1: '/assets/images/purchased.svg',
      status: 'unchecked'
    }, {
      title: 'Vehicle Renewals',
      url: 'verify-policy-screen-cust',
      img: '/assets/images/icons/renewals.svg',
      img1: '/assets/images/icons/activerenewls.svg',
      status: 'unchecked'
    }, {
      title: 'Make a Claim',
      url: '/makeaclaim',
      img: '/assets/images/icons/claim.svg',
      img1: '/assets/images/icons/activeclaim.svg',
      status: 'unchecked'
    }, {
      title: 'Settings',
      url: '/settings',
      img: '/assets/images/icons/setting.svg',
      img1: '/assets/images/icons/settingactive.svg',
      status: 'unchecked'
    }, {
      title: 'Delete Account',
      url: '/deleteaccount',
      img: '/assets/images/icons/delete.png',
      img1: '/assets/images/icons/deleteactive.png',
      status: 'unchecked'
    }];
    this.appPages2 = [// {
    //   title: 'Dashboard',
    //   url: 'dashboard',
    //   img: '/assets/images/icons/chart.svg',
    //   img1: '/assets/images/icons/dashboard.svg',
    //   status: 'unchecked',
    // },
    {
      title: 'Home',
      url: 'home-page-screen-after-login',
      img: '/assets/images/home.svg',
      img1: '/assets/images/homeicon.svg',
      status: 'unchecked'
    }, // {
    //   title: 'Get Quote',
    //   url: '/get-quote',
    //   img: '/assets/images/icons/quote.svg',
    //   img1: '/assets/images/icons/activequote.svg',
    //   status: 'unchecked',
    // },
    // { title: 'My Policy', url: 'mypolicies', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    {
      title: 'My Policies',
      // url: 'allpolicies',
      url: 'viewpurchasedpolicy',
      img: '/assets/images/icons/policy.svg',
      img1: '/assets/images/icons/activepolicy.svg',
      status: 'unchecked'
    }, {
      title: 'Verify Policy',
      url: 'policylookup',
      img: '/assets/images/icons/mypolicy.svg',
      img1: '/assets/images/icons/activemypolicy.svg',
      status: 'unchecked'
    }, {
      title: 'Vehicle Renewals',
      url: 'verify-policy-screen-cust',
      img: '/assets/images/icons/renewals.svg',
      img1: '/assets/images/icons/activerenewls.svg',
      status: 'unchecked'
    }, {
      title: 'Make a Claim',
      url: '/makeaclaim',
      img: '/assets/images/icons/claim.svg',
      img1: '/assets/images/icons/activeclaim.svg',
      status: 'unchecked'
    }, {
      title: 'Delete Account',
      url: '/deleteaccount',
      img: '/assets/images/icons/delete.png',
      img1: '/assets/images/icons/deleteactive.png',
      status: 'unchecked'
    } // { title: 'Settings', url: '/settings', img: '/assets/images/icons/setting.svg', img1: '/assets/images/icons/settingactive.svg', status: 'unchecked' },
    ]; // if (localStorage.getItem('userid') != null) {
    //   this.route.navigate(['home-page-screen-after-login']);
    // } else {
    //   this.route.navigate(['sign-in-screen']);
    // }
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.initializeApp();
        this.api.loginas = localStorage.getItem('loginas');
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();

        if (localStorage.getItem('userid') == null) {
          this.navCtrl.navigateRoot(['start-screen']);
        } else {
          this.navCtrl.navigateRoot(['home-page-screen-after-login']); // if (this.api.loginas == 'user') {
          //   this.navCtrl.navigateRoot(['home-page-screen-after-login']);
          // } else {
          //   this.navCtrl.navigateRoot(['dashboard']);
          // }
        } //aliiii

      }, 4000);
    });
  }

  initializeApp() {// this.loginas = localStorage.getItem('loginas')
    // this.fp = localStorage.getItem('fingerprint');
    // console.log('fingerprint====', this.fp);
    // this.api.fpval = this.fp

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  selected(p) {
    this.appPages.map(value => {
      value.status = 'unchecked';
    });
    console.log('stataus--', p.status);
    p.status = 'checked';
  }

  closeMenu() {
    this.menuCtrl.close();
  } // toogle(ev) {
  //   console.log(ev);
  //   if (ev.detail.checked == true) {
  //     this.api.fpval = 'true'
  //     localStorage.setItem('fingerprint', 'true')
  //   } else {
  //     this.api.fpval = 'false';
  //     localStorage.setItem('fingerprint', 'false')
  //   }
  // }


  logout() {
    var _this = this;

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alert.create({
        header: 'Are you ready to log out?',
        buttons: [{
          text: 'No',
          role: 'cancel',
          handler: () => {
            _this.menuCtrl.close();
          }
        }, {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            localStorage.removeItem('userid');
            localStorage.removeItem('token');
            console.log('userid==', localStorage.getItem('userid'));
            console.log('token==', localStorage.getItem('token'));
            localStorage.removeItem('loginas');

            _this.api.presenttoast('You are successfully logged out!');

            let fp = localStorage.getItem('fingerprint');

            if (fp == 'false') {
              localStorage.removeItem('fingerprint');
            }

            _this.menuCtrl.close();

            _this.navCtrl.navigateRoot('sign-in-screen');
          }
        }]
      });
      yield alert.present();
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular4-paystack */ 1700);
/* harmony import */ var flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flutterwave-angular-v3 */ 76210);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_9__.FlutterwaveModule,
            // pk_test_ff6f2927d464e23a6ddf592be475db01de695970
            angular4_paystack__WEBPACK_IMPORTED_MODULE_10__.Angular4PaystackModule.forRoot('pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e'),
        ],
        providers: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser,
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__.FingerprintAIO,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 22111:
/*!***************************************************!*\
  !*** ./src/app/services/insurance-app.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuranceAppService": () => (/* binding */ InsuranceAppService)
/* harmony export */ });
/* harmony import */ var _Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! btoa-lite */ 98263);
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_1__);







let InsuranceAppService = class InsuranceAppService {
  constructor(toastctrl, http, loadingController, alert) {
    this.toastctrl = toastctrl;
    this.http = http;
    this.loadingController = loadingController;
    this.alert = alert; // Live:

    this.url = 'https://www.cornerstone.com.ng/webservice';
    this.flutterwaveAPIKey = "FLWPUBK-ea5dbc9de4ddb38309432794c2d62e81-X"; //DEV
    // url = 'https://www.cornerstone.com.ng/devtest/webservice';
    // flutterwaveAPIKey = "FLWPUBK_TEST-4fdbf14bb4f70e2e6fe3dae2d18a4fc8-X";

    this.authurl = 'https://testcipapiservices.gibsonline.com/api/auth';
    this.comingFrom = 0;
    this.allProducts = {
      "status_no": 1,
      "myproduct": [{
        "id": "1",
        "parent_id": "0",
        "product_for_quote": "0",
        "name": "Motor Insurance",
        "tagline": "<ul class=\"nav nav-stacked detaiLsText\">\n         <li><a href=\"#\"><span class=\"detaiLIcon\"> <\/span>Car insurance<\/a><\/li>\n      <li><a href=\"#\"><span class=\"detaiLIcon\"> <\/span>MultiCar insurance<\/a><\/li>\n      <li><a href=\"#\"><span class=\"detaiLIcon\">",
        "subtitle": "There are several products within our motor insurance portfolio to choose from. Click to view:",
        "product_code": "MI",
        "product_type_id": "0",
        "form_id": "0",
        "image": "https:\/\/www.cornerstone.com.ng\/assets\/uploads\/product\/1.jpg",
        "status": "Y",
        "approver": "",
        "view_status": "6",
        "description": "<p><span>Select from our range of tailor-made auto-plans within our motor portfolio.<\/span><\/p>",
        "last_policynumber": ""
      }, {
        "id": "8",
        "parent_id": "0",
        "product_for_quote": "0",
        "name": "Travel Insurance",
        "tagline": null,
        "subtitle": "This policy covers medical expenses and other loss occurred while traveling out of the country",
        "product_code": "TI",
        "product_type_id": "0",
        "form_id": "0",
        "image": "https:\/\/www.cornerstone.com.ng\/assets\/uploads\/product\/8.jpg",
        "status": "Y",
        "approver": "",
        "view_status": "6",
        "description": "<p><span>Select from our range of tailor-made local and international travel health insurance plans.<\/span><\/p>\n<p><span><strong><span >Please take note<\/span><\/strong><br \/><\/span><\/p>\n<p class=\"Default\"><strong>** In-case of Amendment\/Cancellation of Policy: <\/strong><\/p>\n<p class=\"Default\">a. First amendment request will be conceded without applying a charge (i.e. <strong>FREE<\/strong>) whilst for subsequent requests you will be required to purchase a <strong>NEW <\/strong>travel insurance cover<\/p>\n<p class=\"Default\">b. Amendment of policies is not applicable when visa is not granted<\/p>\n<p class=\"Default\">c. Amendment of policies will not be granted if the policy has commenced.<\/p>\n<p class=\"Default\">d. Refund is not applicable for all travel insurance policies purchased<\/p>\n<p><span>\u00a0<\/span><\/p>",
        "last_policynumber": ""
      }, {
        "id": "27",
        "parent_id": "0",
        "product_for_quote": "0",
        "name": "Investment plans",
        "tagline": null,
        "subtitle": "Investment plans",
        "product_code": "IP",
        "product_type_id": "1",
        "form_id": "0",
        "image": "https:\/\/www.cornerstone.com.ng\/assets\/uploads\/product\/27.jpg",
        "status": "Y",
        "approver": "",
        "view_status": "2",
        "description": "<p>Our investment plans gives protection against financial consequences of unforeseen circumstances surrounding life and also allows the an individual accumulate a lump sum through planned and disciplined savings.<\/p>",
        "last_policynumber": "E\/IP\/2016\/0"
      }],
      "message": "success"
    };
  }

  submitFormData(data) {
    const formdData = new FormData();
    Object.keys(data).forEach(key => {
      const value = data[key];

      if (value instanceof File) {
        formdData.append(key, value, value.name);
      } else {
        formdData.append(key, value);
      }
    });
    return this.http.post(this.url, formdData);
  }

  insertData(myData) {
    console.log('data', myData);
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    return this.http.post(this.url, myData, {
      headers: header
    });
  }

  renewalC(url, myData) {
    console.log('data', myData);
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    return this.http.post(url, myData, {
      headers: header
    });
  }

  gibsapi(myData) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      "Accept": 'application/json',
      'Content-Type': 'application/json'
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    return this.http.post(this.authurl, myData, {
      headers: header
    });
  }

  insertFormData(Data) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: 'corci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%229067b6add23324d21220d8f7d5c649c0%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A12%3A%2239.40.231.23%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.29.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1656587499%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D87fb653bf23ba596c9ade5a76135fe0a7557093d'
    });
    return this.http.post(this.url, Data, {
      headers: header
    });
  }

  wpGetData(action, token) {
    let header;

    if (token) {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        Authorization: 'Bearer ' + token
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    } else {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    }

    return this.http.post(`${this.url}/${action}`, {
      headers: header
    });
  }

  getData(action, token) {
    let header;

    if (token) {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'auth-key': token
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    } else {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    }

    return this.http.get(`${this.url}/${action}`, {
      headers: header
    });
  }

  getcallbackurl(url) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    return this.http.get(`${url}`, {
      headers: header
    });
  }

  get(url, token) {
    let header; // console.log('token in api ervice====', token);
    // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token
    }); // header.append("Access-Control-Allow-Origin", "*");
    // header.append(
    //   "Access-Control-Allow-Methods",
    //   "POST, GET, DELETE, PUT,OPTIONS"
    // );

    return this.http.get(`${url}`, {
      headers: header
    });
  }

  getpolicy(url, token) {
    let header; // console.log('token in api ervice====', token);
    // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }); // header.append("Access-Control-Allow-Origin", "*");
    // header.append(
    //   "Access-Control-Allow-Methods",
    //   "POST, GET, DELETE, PUT,OPTIONS"
    // );

    return this.http.get(`${url}`, {
      headers: header
    });
  } // postpolicies(url, data?, token?) {
  //   const headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Bearer ' + token
  //   };
  //   console.log('token in api ervice====', token);
  //   return this.ionichttp.post(`${url}`, data, headers
  //   );
  // }


  postdata(url, data, token) {
    let header;
    console.log('token in api ervice====', token);
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': 'Bearer ' + token,
      "Accept": "application/json",
      'Content-Type': "application/json"
    }); // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers');

    return this.http.post(`${url}`, data, {
      headers: header
    });
  }

  newclaim(url, data) {
    const username = 'c31a6a20-7eda-41da-a7df-d14b501c237c';
    const password = 'DECHANNEL';
    const encodedCredentials = btoa_lite__WEBPACK_IMPORTED_MODULE_1__(`${username}:${password}`);
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': 'Basic ' + encodedCredentials,
      "Accept": "application/json",
      'Content-Type': "application/json"
    }); // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers');

    return this.http.post(`${url}`, data, {
      headers: header
    });
  }

  trackclaim(url, data) {
    const username = 'c31a6a20-7eda-41da-a7df-d14b501c237c';
    const password = 'DECHANNEL';
    const encodedCredentials = btoa_lite__WEBPACK_IMPORTED_MODULE_1__(`${username}:${password}`);
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': 'Basic ' + encodedCredentials,
      "Accept": "application/json",
      'Content-Type': "application/json"
    }); // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers');

    return this.http.get(`${url}`, {
      headers: header
    });
  }

  renewal(url, token) {
    console.log('token in api ervice====', token);
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers');
    return this.http.post(`${url}`, {
      headers: header
    });
  }

  postparam(url, data, token) {
    let header;
    console.log('token in api ervice====', token); // let headers
    // headers = new Headers();
    // headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    // return this.http.get(url, {
    //   headers: headers
    // });

    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      Authorization: 'Bearer ' + data
    });
    return this.http.post(`${url}`, data, {
      headers: header
    });
  } // waGetData(action,token) {
  //   let header;
  //   // if (token) {
  //   //   console.log('token=',token)
  //   //   header = new HttpHeaders({
  //   //     "Authorization": "Bearer "+token,
  //   //   });
  //   //   console.log('jeadwre=',header)
  //   //   header.append("Access-Control-Allow-Origin", "*");
  //   //   header.append(
  //   //     "Access-Control-Allow-Methods",
  //   //     "POST, GET, DELETE, PUT,OPTIONS"
  //   //   );
  //   // } else {
  //   //   header = new HttpHeaders();
  //   //   header.append("Access-Control-Allow-Origin", "*");
  //   //   header.append(
  //   //     "Access-Control-Allow-Methods",
  //   //     "POST, GET, DELETE, PUT,OPTIONS"
  //   //   );
  //   // }
  //   return this.http.post(`${this.url}/${action}`, {
  //     headers: {
  //       "Authorization": "Bearer "+'53|4GA1yxNOLagRRhMYG48FrtG6CnVlon74H5cjMmo9',
  //       "Cookie": "XSRF-TOKEN=eyJpdiI6IjIyeHh0Zm1OSnF0ZFdGMmU4MnBpbHc9PSIsInZhbHVlIjoieTZ4RjVxZjhWZTVRUjh3bUdGRzZBYkhwNTRkODk5SElsWW93bWR1QXFlbHpSaDlTSWhxeXlETzlEQURxZ1pmNTdCWXZIM09JK29rUS9TQk9FU0ZheWlXajVLYk83K3BObldGQVZ2UFV4TVBhRVhYdHpkMFBnUzBldkNhTWpaNjciLCJtYWMiOiI0OWYwMDMwNmU3MjJmMGY3YWUwYjcxOTlkNjM0ZTZhODRhZmYwMGU4NDYwZGE3OGRlOGEyODcyYWRhMTRiYTk0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ik1ROUVsalZXcm55WnFNV2Y5Rkd4TFE9PSIsInZhbHVlIjoieG16Y0tnTEN1SmFPUjFxUTBxbUVuMDc5bUNPaysrbXpVc1VuUjA5QjFIMG1aM1FqQkY5WStPY3N5L2RkY0N3bHlVaWcvcS9TbFdqUUR2TFJsaU9PaUsvUHlHdzU5ZUo4S24rT1RxaFJiOW5sdHR5NDFkT3NCTmF0eVlwZmFsTUgiLCJtYWMiOiI1OTRiNjAzYWFhY2U0ZDI5ODVjNGVmMDFjZjMzMzk0YWZhZGRjODFkOGYxZTgzZmM0MGI5YTA0ODhlZWUyNDliIiwidGFnIjoiIn0%3D",
  //       "Content-Type": "application/json"
  //     }
  //   });
  // }


  getCaptcha(token) {
    let header;

    if (token) {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'auth-key': token
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    } else {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({// "content-type":"text/html"
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
    }

    return this.http.get(`${this.url}`, {
      headers: header
    });
  }

  alertboxshow(message) {
    var _this = this;

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alert.create({
        header: message,
        cssClass: 'fgprintcls',
        buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  presenttoast(message) {
    this.toastctrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    }).then(res => res.present());
  }

  showLoader(content) {
    var _this2 = this;

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...'
      }).then(res => {
        res.present();
      });
    })();
  }

  hideLoader() {
    this.loadingController.dismiss().then(res => {
      console.log('Loading dismissed!', res);
    }).catch(error => {
      console.log('error', error);
    });
  }

};

InsuranceAppService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}];

InsuranceAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], InsuranceAppService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background:#1A206D;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n  --background: transparent;\n  color: #FFFFFF;\n}\n\nion-menu.md ion-item.selected {\n  --background: #FFFFFF;\n  width: 153px;\n  border-radius: 8px;\n  color: #1A206D;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  border-radius: 4px;\n  --background: transparent;\n  color: #FFFFFF;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --background: #FFFFFF !important;\n  width: 160px !important;\n  border-radius: 8px !important;\n  color: #1A206D !important;\n}\n\n.sidemenu-icons {\n  width: 18px;\n}\n\nion-menu::part(container) {\n  border-top-right-radius: 45px;\n  border-bottom-right-radius: 45px;\n}\n\n.imgdiv img {\n  border: 2px solid #A8B400;\n  border-radius: 50px;\n  padding: 3px;\n}\n\n.title {\n  margin-left: 4%;\n  font-family: \"Bliss Pro\";\n}\n\n.text1 {\n  font-size: 20px;\n  color: #A8B400;\n  width: 100%;\n}\n\n.stext {\n  color: #FFFFFF;\n  font-weight: 400;\n  font-size: 16px;\n  width: 100%;\n}\n\n.fc {\n  background: #1A206D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBRUUscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSwrQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSwrQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBTkY7O0FBU0E7RUFFRSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVNBO0VBQ0UsV0FBQTtBQU5GOztBQVNBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQU5GOztBQVFFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQUpKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0FBSko7O0FBT0c7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUpMOztBQU9HO0VBQ0MsbUJBQUE7QUFKSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC8vIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgLS1iYWNrZ3JvdW5kOiMxQTIwNkQ7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHdpZHRoOiAxNTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzFBMjA2RDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC8vIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMxQTIwNkQgIWltcG9ydGFudDtcbn1cbi5zaWRlbWVudS1pY29uc3tcbiAgd2lkdGg6IDE4cHg7XG59XG5cbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQ1cHg7XG4gIH1cbiAgLmltZ2RpdiBpbWd7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0E4QjQwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuICAudGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIGZvbnQtZmFtaWx5OiAnQmxpc3MgUHJvJztcbiAgfVxuICAudGV4dDF7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAgLnN0ZXh0e1xuICAgICBjb2xvcjojRkZGRkZGO1xuICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBmb250LXNpemU6MTZweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIC5mY3tcbiAgICBiYWNrZ3JvdW5kOiMxQTIwNkQ7XG4gICB9XG4gIC8vIC50b29nbGVjbGFzc3tcbiAgLy8gICBwYWRkaW5nOiAwcHg7XG4gIC8vICAgZmxvYXQ6IHJpZ2h0O1xuICAvLyAgIC0taGFuZGxlLXdpZHRoOiAxNnB4O1xuICAvLyAgIC0taGFuZGxlLWhlaWdodDogMTZweDtcbiAgLy8gICB3aWR0aDogNDBweDtcbiAgLy8gICBoZWlnaHQ6IDI0cHg7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiAjNWQ1ZDVkO1xuICAvLyAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAvLyAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzFBMjA2RDtcbiAgLy8gICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjYzhjN2NjO1xuICAvLyAgIG1hcmdpbi10b3A6IDEuNSU7XG4gIC8vICAgLS1oYW5kbGUtc3BhY2luZzogNHB4O1xuICAvLyB9XG4iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-header style=\"background-color:#1A206D !important;\">\n        <div style=\"width: 80%; margin: 17% auto 10px;\">\n          <div style=\"width: 100%;\">\n            <img (click)=\"closeMenu()\" src=\"assets/images/icons/backwhite-arrow.svg\" alt=\"\">\n          </div>\n        </div>\n\n      </ion-header>\n      <ion-content style=\"--background: #1A206D !important;\">\n        <!-- <div style=\"text-align:center;\">\n          <img src=\"assets/images/logo1.svg\">\n        </div> -->\n        <div style=\"width: 80%;\n        margin: 0% auto 5%;\">\n          <img src=\"assets/images/cornerlogo.png\" style=\"width:150px;\">\n        </div>\n        <div style=\"display: flex;flex-direction: row;align-items: center; width: 80%;\n          margin:0% auto 5%\">\n          <!-- <div class=\"imgdiv\">\n            <img src=\"assets/images/icons/userimg.svg\">\n          </div> -->\n          <!-- <div class=\"textdiv\" *ngIf=\"api.loginas=='user' || api.loginas=='agent'\">\n            <div class=\"text1\">{{api.username}}</div>\n          </div> -->\n        </div>\n        <div style=\"width:90%;margin:0% auto;\" *ngIf=\"api.loginas=='user'\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\" class=\"ion-no-padding\" (click)=\"selected(p)\">\n              <img class=\"sidemenu-icons\" *ngIf=\"p.status=='checked'\" src=\"{{p.img1}}\">\n              <img class=\"sidemenu-icons\" *ngIf=\"p.status=='unchecked'\" src=\"{{p.img}}\">\n              <ion-label class=\"title\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <!-- <ion-row>\n            <ion-col size=\"9\">\n              <ion-label style=\"color: #fff;\">Enable Face/Fingerprint ID</ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-toggle class=\"toogleclass\" (ionChange)=\"toogle($event)\" checked *ngIf=\"api.fpval=='true'\">\n              </ion-toggle>\n              <ion-toggle class=\"toogleclass\" (ionChange)=\"toogle($event)\" *ngIf=\"api.fpval=='false'\"></ion-toggle>\n            </ion-col>\n          </ion-row> -->\n\n        </div>\n        <div style=\"width:90%;margin:0% auto;\" *ngIf=\"api.loginas=='agent'\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages2; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\" class=\"ion-no-padding\" (click)=\"selected(p)\">\n              <img class=\"sidemenu-icons\" *ngIf=\"p.status=='checked'\" src=\"{{p.img1}}\">\n              <img class=\"sidemenu-icons\" *ngIf=\"p.status=='unchecked'\" src=\"{{p.img}}\">\n              <ion-label class=\"title\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </div>\n\n\n      </ion-content>\n      <ion-footer class=\"ion-no-border fc\" no-border style=\"background-color:#1A206D !important;\">\n        <div style=\"display: flex;\n        width: 100%;\n        margin-bottom: 10%;\n        margin-left: 10%;\" (click)=\"logout()\">\n          <div class=\"bottom\">\n            <img src=\"assets/images/icons/logout.svg\">\n          </div>\n          <div class=\"stext\">\n            <span style=\"padding-left:4% ;\">logout</span>\n          </div>\n        </div>\n\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map