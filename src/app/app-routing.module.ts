import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',

    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'start-screen',
    loadChildren: () => import('./start-screen/start-screen.module').then(m => m.StartScreenPageModule)
  },
  {
    path: 'sign-in-screen',
    loadChildren: () => import('./sign-in-screen/sign-in-screen.module').then(m => m.SignInScreenPageModule)
  },
  {
    path: 'home-page-screen-after-login',
    loadChildren: () => import('./home-page-screen-after-login/home-page-screen-after-login.module').then(m => m.HomePageScreenAfterLoginPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusPageModule)
  },
  {
    path: 'mypolicies',
    loadChildren: () => import('./mypolicies/mypolicies.module').then(m => m.MypoliciesPageModule)
  },
  {
    path: 'explore-screen-before-login-expanded',
    loadChildren: () => import('./explore-screen-before-login-expanded/explore-screen-before-login-expanded.module').then(m => m.ExploreScreenBeforeLoginExpandedPageModule)
  },
  {
    path: 'explore-screen-before-login',
    loadChildren: () => import('./explore-screen-before-login/explore-screen-before-login.module').then(m => m.ExploreScreenBeforeLoginPageModule)
  },
  {
    path: 'get-quote',
    loadChildren: () => import('./get-quote/get-quote.module').then(m => m.GetQuotePageModule)
  },
  {
    path: 'verify-policy-screen-cust',
    loadChildren: () => import('./verify-policy-screen-cust/verify-policy-screen-cust.module').then(m => m.VerifyPolicyScreenCustPageModule)
  },
  {
    path: 'renewals',
    loadChildren: () => import('./renewals/renewals.module').then(m => m.RenewalsPageModule)
  },
  {
    path: 'makeaclaim',
    loadChildren: () => import('./makeaclaim/makeaclaim.module').then(m => m.MakeaclaimPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'make-a-claim',
    loadChildren: () => import('./make-a-claim/make-a-claim.module').then(m => m.MakeAClaimPageModule)
  },
  {
    path: 'start-screen',
    loadChildren: () => import('./start-screen/start-screen.module').then(m => m.StartScreenPageModule)
  },
  {
    path: 'sign-in-screen',
    loadChildren: () => import('./sign-in-screen/sign-in-screen.module').then(m => m.SignInScreenPageModule)
  },
  {
    path: 'home-page-screen-after-login',
    loadChildren: () => import('./home-page-screen-after-login/home-page-screen-after-login.module').then(m => m.HomePageScreenAfterLoginPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusPageModule)
  },
  {
    path: 'mypolicies',
    loadChildren: () => import('./mypolicies/mypolicies.module').then(m => m.MypoliciesPageModule)
  },
  {
    path: 'explore-screen-before-login-expanded',
    loadChildren: () => import('./explore-screen-before-login-expanded/explore-screen-before-login-expanded.module').then(m => m.ExploreScreenBeforeLoginExpandedPageModule)
  },
  {
    path: 'explore-screen-before-login',
    loadChildren: () => import('./explore-screen-before-login/explore-screen-before-login.module').then(m => m.ExploreScreenBeforeLoginPageModule)
  },
  {
    path: 'get-quote',
    loadChildren: () => import('./get-quote/get-quote.module').then(m => m.GetQuotePageModule)
  },
  {
    path: 'quote1',
    loadChildren: () => import('./quote1/quote1.module').then(m => m.Quote1PageModule)
  },
  {
    path: 'verify-policy-screen-cust',
    loadChildren: () => import('./verify-policy-screen-cust/verify-policy-screen-cust.module').then(m => m.VerifyPolicyScreenCustPageModule)


  },
  {
    path: 'renewals',
    loadChildren: () => import('./renewals/renewals.module').then(m => m.RenewalsPageModule)
  },
  {
    path: 'makeaclaim',
    loadChildren: () => import('./makeaclaim/makeaclaim.module').then(m => m.MakeaclaimPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'quote-popup',
    loadChildren: () => import('./quote-popup/quote-popup.module').then(m => m.QuotePopupPageModule)
  },
  {
    path: 'agentidpopup',
    loadChildren: () => import('./agentidpopup/agentidpopup.module').then(m => m.AgentidpopupPageModule)
  },
  {
    path: 'agentloginscreen',
    loadChildren: () => import('./agentloginscreen/agentloginscreen.module').then(m => m.AgentloginscreenPageModule)
  },
  {
    path: 'sign-up-screen',
    loadChildren: () => import('./sign-up-screen/sign-up-screen.module').then(m => m.SignUpScreenPageModule)
  },
  {
    path: 'profile-update',
    loadChildren: () => import('./profile-update/profile-update.module').then(m => m.ProfileUpdatePageModule)
  },
  {
    path: 'car-insurance-details',
    loadChildren: () => import('./car-insurance-details/car-insurance-details.module').then(m => m.CarInsuranceDetailsPageModule)
  },
  {
    path: 'yourquote',
    loadChildren: () => import('./yourquote/yourquote.module').then(m => m.YourquotePageModule)
  },
  {
    path: 'sub-products',
    loadChildren: () => import('./sub-products/sub-products.module').then(m => m.SubProductsPageModule)
  },
  {
    path: 'comprehensivequote',
    loadChildren: () => import('./comprehensivequote/comprehensivequote.module').then(m => m.ComprehensivequotePageModule)
  },
  {
    path: 'thirdpartydetails',
    loadChildren: () => import('./thirdpartydetails/thirdpartydetails.module').then(m => m.ThirdpartydetailsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'payquote',
    loadChildren: () => import('./payquote/payquote.module').then(m => m.PayquotePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },

  {
    path: 'policyquote',
    loadChildren: () => import('./policyquote/policyquote.module').then(m => m.PolicyquotePageModule)
  },
  {
    path: 'verify-policy-popup-cust',
    loadChildren: () => import('./verify-policy-popup-cust/verify-policy-popup-cust.module').then(m => m.VerifyPolicyPopupCustPageModule)
  },
  {
    path: 'policylookup',
    loadChildren: () => import('./policylookup/policylookup.module').then(m => m.PolicylookupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'termsandcondition',
    loadChildren: () => import('./termsandcondition/termsandcondition.module').then(m => m.TermsandconditionPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  {
    path: 'localsubproduct',
    loadChildren: () => import('./localsubproduct/localsubproduct.module').then(m => m.LocalsubproductPageModule)
  },
  {
    path: 'localpoliciesform',
    loadChildren: () => import('./localpoliciesform/localpoliciesform.module').then(m => m.LocalpoliciesformPageModule)
  },
  {
    path: 'gibsplans',
    loadChildren: () => import('./gibsplans/gibsplans.module').then(m => m.GibsplansPageModule)
  },

  {
    path: 'allpolicies',
    loadChildren: () => import('./allpolicies/allpolicies.module').then(m => m.AllpoliciesPageModule)
  },  {
    path: 'claimassistance',
    loadChildren: () => import('./claimassistance/claimassistance.module').then( m => m.ClaimassistancePageModule)
  },
  {
    path: 'languagepage',
    loadChildren: () => import('./languagepage/languagepage.module').then( m => m.LanguagepagePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'helppage',
    loadChildren: () => import('./helppage/helppage.module').then( m => m.HelppagePageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'claimassistance2',
    loadChildren: () => import('./claimassistance2/claimassistance2.module').then( m => m.Claimassistance2PageModule)
  },
  {
    path: 'claimassistance3',
    loadChildren: () => import('./claimassistance3/claimassistance3.module').then( m => m.Claimassistance3PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'explore-screen-before-login-expanded2',
    loadChildren: () => import('./explore-screen-before-login-expanded2/explore-screen-before-login-expanded2.module').then( m => m.ExploreScreenBeforeLoginExpanded2PageModule)
  },
  {
    path: 'gibsproducts',
    loadChildren: () => import('./gibsproducts/gibsproducts.module').then( m => m.GibsproductsPageModule)
  },
  {
    path: 'localinformation',
    loadChildren: () => import('./localinformation/localinformation.module').then( m => m.LocalinformationPageModule)
  },
  {
    path: 'internationalinformation',
    loadChildren: () => import('./internationalinformation/internationalinformation.module').then( m => m.InternationalinformationPageModule)
  },
  {
    path: 'deleteaccount',
    loadChildren: () => import('./deleteaccount/deleteaccount.module').then( m => m.DeleteaccountPageModule)
  },
  {
    path: 'payment2',
    loadChildren: () => import('./payment2/payment2.module').then( m => m.Payment2PageModule)
  },
  {
    path: 'mypolicies2',
    loadChildren: () => import('./mypolicies2/mypolicies2.module').then( m => m.Mypolicies2PageModule)
  },
  {
    path: 'ivplan2',
    loadChildren: () => import('./ivplan2/ivplan2.module').then( m => m.Ivplan2PageModule)
  },
  {
    path: 'ivplan1',
    loadChildren: () => import('./ivplan1/ivplan1.module').then( m => m.Ivplan1PageModule)
  },
  {
    path: 'ivplan3',
    loadChildren: () => import('./ivplan3/ivplan3.module').then( m => m.Ivplan3PageModule)
  },
  {
    path: 'ivplan4',
    loadChildren: () => import('./ivplan4/ivplan4.module').then( m => m.Ivplan4PageModule)
  },
  {
    path: 'ivplanquote',
    loadChildren: () => import('./ivplanquote/ivplanquote.module').then( m => m.IvplanquotePageModule)
  },
  {
    path: 'ivpayment',
    loadChildren: () => import('./ivpayment/ivpayment.module').then( m => m.IvpaymentPageModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then( m => m.DraftPageModule)
  },
  {
    path: 'paymentresponse',
    loadChildren: () => import('./paymentresponse/paymentresponse.module').then( m => m.PaymentresponsePageModule)
  },
  {
    path: 'payment2response',
    loadChildren: () => import('./payment2response/payment2response.module').then( m => m.Payment2responsePageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
