import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  // auth/sign-in
  { path: 'sign-in', component: PageSignInComponent },
  // auth/sign-up
  { path: 'sign-up', component: PageSignUpComponent },
  // auth/forgot
  { path: 'forgot', component: PageForgotPasswordComponent },
  // auth/reset
  { path: 'reset', component: PageResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
