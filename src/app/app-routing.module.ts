import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotfoundComponent } from './notfound/notfound.component';


import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userprofile/:userId', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'team', component: TeamComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'edit' , component:EditComponent},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
