import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RequestResetPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'register',
        component: RegisterComponent
      }, {
        path: 'profile',
        component: ProfileComponent
      }, {
        path: 'password/request-reset',
        component: RequestResetPasswordComponent
      }, {
        path: 'password/reset',
        component: ResetPasswordComponent
      }
   ]
  }, {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }


export const routedComponents = [
  UserComponent,
  LoginComponent,
  RegisterComponent,
  NotFoundComponent,
]
