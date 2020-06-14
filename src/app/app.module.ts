import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//using angular material
import { MatSidenavModule } from '@angular/material/sidenav';

//owl-carousel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
//end owl-carousel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';

import { TeamComponent } from './team/team.component';
import { UserTempletesComponent } from './user-templetes/user-templetes.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ResetPasswordComponent,

    HomeComponent,
    ContactComponent,
    NavbarComponent,

    UserProfileComponent,
    LoginComponent,

    SignUpComponent,
    ResetPasswordComponent,

    UserProfileComponent,
    LoginComponent,
    TeamComponent,
    UserTempletesComponent,

    UserTempletesComponent,

    NotfoundComponent,
    EditComponent,
    TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatSidenavModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
