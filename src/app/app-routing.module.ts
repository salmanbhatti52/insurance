import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-screen',
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
  },  {
    path: 'sign-up-screen',
    loadChildren: () => import('./sign-up-screen/sign-up-screen.module').then( m => m.SignUpScreenPageModule)
  },
  {
    path: 'profile-update',
    loadChildren: () => import('./profile-update/profile-update.module').then( m => m.ProfileUpdatePageModule)
  },
  {
    path: 'car-insurance-details',
    loadChildren: () => import('./car-insurance-details/car-insurance-details.module').then( m => m.CarInsuranceDetailsPageModule)
  },
  {
    path: 'yourquote',
    loadChildren: () => import('./yourquote/yourquote.module').then( m => m.YourquotePageModule)
  },
  {
    path: 'sub-products',
    loadChildren: () => import('./sub-products/sub-products.module').then( m => m.SubProductsPageModule)
  },
  {
    path: 'comprehensivequote',
    loadChildren: () => import('./comprehensivequote/comprehensivequote.module').then( m => m.ComprehensivequotePageModule)
  },
  {
    path: 'thirdpartydetails',
    loadChildren: () => import('./thirdpartydetails/thirdpartydetails.module').then( m => m.ThirdpartydetailsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payquote',
    loadChildren: () => import('./payquote/payquote.module').then( m => m.PayquotePageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
