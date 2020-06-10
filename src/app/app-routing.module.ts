import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home' , component:HomeComponent},
  {path:'contact' , component:ContactComponent},
  { path: 'login', component: LoginComponent },
  { path: 'userprofile/:userId', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent }

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
